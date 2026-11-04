import { useEffect } from "react"
import { business } from "@/lib/siteData"

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

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement("link")
    el.rel = "canonical"
    document.head.appendChild(el)
  }
  el.href = href
}

/** Sets the title, meta description, canonical URL and social tags for a page. */
export function usePageMeta({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string
  description: string
  path: string
  noindex?: boolean
}) {
  useEffect(() => {
    const url = `${business.siteUrl}${path === "/" ? "/" : path}`
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
    setCanonical(url)
  }, [title, description, path, noindex])
}
