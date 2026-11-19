/**
 * Pre-renders every page to static HTML after `vite build`.
 *
 * Why: the site is a React app. Without this step every URL returns the same
 * empty page and the content only appears once JavaScript runs, which hurts
 * search rankings, link previews on WhatsApp/LinkedIn and first load on slow
 * phones. With it, each URL gets its own HTML file with the real content,
 * title, description and canonical link, and React then takes over.
 *
 * Output layout (works on Apache/Hostinger, Netlify, Vercel and most hosts):
 *   /                    -> dist/index.html
 *   /courses/french      -> dist/courses/french.html
 *   unknown URLs         -> dist/404.html (served with a real 404 status)
 * It also regenerates dist/sitemap.xml from the same list of routes.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const ssrDir = path.join(root, "dist-ssr")

const { render, routes } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
)
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8")
const SITE = "https://glanzeurolingo.com"

// Preload the two fonts used in the first screen (headings and body text).
const fontPreloads = fs
  .readdirSync(path.join(dist, "assets"))
  .filter((f) =>
    /^(manrope-latin-wght-normal|dm-serif-display-latin-400-normal)-.*\.woff2$/.test(
      f
    )
  )
  .map(
    (f) =>
      `<link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin />`
  )
  .join("")

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Tag not found: ${pattern}`)
  return html.replace(pattern, replacement)
}

function buildPage(route, { html, meta }) {
  if (!meta) throw new Error(`No usePageMeta() on ${route}`)
  const url = `${SITE}${route === "/" ? "/" : meta.path}`
  let out = template
  out = setTag(
    out,
    /<title>[\s\S]*?<\/title>/,
    `<title>${esc(meta.title)}</title>`
  )
  out = setTag(
    out,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${esc(meta.description)}" />`
  )
  out = setTag(
    out,
    /<meta name="robots"[^>]*\/>/,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`
  )
  if (meta.noindex) {
    out = out.replace(/\s*<link rel="canonical"[^>]*\/>/, "")
    out = out.replace(/\s*<link rel="alternate"[^>]*\/>/g, "")
  } else {
    out = setTag(
      out,
      /<link rel="canonical"[^>]*\/>/,
      `<link rel="canonical" href="${url}" />`
    )
    out = out.replace(
      /<link rel="alternate" hreflang="([^"]+)"[^>]*\/>/g,
      (_, lang) => `<link rel="alternate" hreflang="${lang}" href="${url}" />`
    )
  }
  for (const [attr, key, value] of [
    ["property", "og:title", meta.title],
    ["property", "og:description", meta.description],
    ["property", "og:url", url],
    ["name", "twitter:title", meta.title],
    ["name", "twitter:description", meta.description],
  ]) {
    out = setTag(
      out,
      new RegExp(`<meta\\s+${attr}="${key}"[\\s\\S]*?\\/>`),
      `<meta ${attr}="${key}" content="${esc(value)}" />`
    )
  }
  // React lists the page's key images as <link rel="preload"> at the start of
  // its HTML. Move them into <head> so the browser finds them sooner.
  const leading = html.match(/^(?:<link [^>]*\/>)+/)?.[0] ?? ""
  html = html.slice(leading.length)
  out = out.replace("</head>", `${fontPreloads}${leading}\n  </head>`)
  out = setTag(out, /<div id="root"><\/div>/, `<div id="root">${html}</div>`)
  return out
}

function write(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, contents)
}

let count = 0
for (const route of routes) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`
  write(path.join(dist, file), buildPage(route, render(route)))
  count++
}
write(path.join(dist, "404.html"), buildPage("/404", render("/404")))

const today = new Date().toISOString().slice(0, 10)
const priority = (r) =>
  r === "/"
    ? "1.0"
    : r.split("/").length > 3
      ? "0.7"
      : r.split("/").length > 2
        ? "0.9"
        : "0.8"
write(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE}${r}</loc><lastmod>${today}</lastmod><priority>${priority(r)}</priority></url>`
  )
  .join("\n")}
</urlset>
`
)

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`Pre-rendered ${count} pages, 404.html and sitemap.xml`)
