import { useEffect } from "react"
import { business } from "@/lib/siteData"

export type PageMeta = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

/**
 * During the build-time pre-render (see scripts/prerender.mjs) there is no
 * document, so the page's meta is recorded here and written into the static
 * HTML file instead.
 */
export const ssrHead: { meta: PageMeta | null } = { meta: null }

function recordForPrerender(meta: PageMeta) {
  if (typeof document === "undefined") ssrHead.meta = meta
}

export const absoluteUrl = (path: string) =>
  `${business.siteUrl}${path === "/" ? "/" : path}`

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  )
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement("link")
    el.rel = "canonical"
    document.head.appendChild(el)
  }
  el.href = href
}

/** Sets the title, meta description, canonical URL and social tags for a page. */
export function usePageMeta(meta: PageMeta) {
  recordForPrerender(meta)
  const { title, description, path, noindex = false } = meta
  useEffect(() => {
    const url = absoluteUrl(path)
    document.title = title
    setMeta("name", "description", description)
    setMeta("property", "og:title", title)
    setMeta("property", "og:description", description)
    setMeta("property", "og:url", url)
    setMeta("name", "twitter:title", title)
    setMeta("name", "twitter:description", description)
    setMeta(
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
    )
    setCanonical(noindex ? null : url)
  }, [title, description, path, noindex])
}

/** Renders a JSON-LD block. Safe to use inside the page body. */
export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  }
}
