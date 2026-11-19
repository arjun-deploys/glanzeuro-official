/**
 * Build-time renderer used by scripts/prerender.mjs. It turns each route into
 * static HTML so search engines, social previews and slow phones get the full
 * page content without waiting for JavaScript.
 */
import { renderToString } from "react-dom/server"
import { Router } from "wouter"
import App from "./App"
import { ssrHead, type PageMeta } from "./lib/seo"
import { courses } from "./data/courses"
import { careerServices, exams, programmes } from "./data/services"

/** Every page that should exist as a static HTML file. */
export const routes: string[] = [
  "/",
  "/about",
  "/courses",
  ...programmes.map((p) => p.path),
  ...courses
    .filter((c) => c.offered !== false)
    .map((c) => `/courses/${c.language}/${c.level.toLowerCase()}`),
  "/exam-preparation",
  ...exams.map((e) => e.path),
  "/career-services",
  ...careerServices.map((c) => c.path),
  "/study-abroad",
  "/our-approach",
  "/testimonials",
  "/contact",
  "/glaf",
]

export function render(path: string): { html: string; meta: PageMeta | null } {
  ssrHead.meta = null
  const html = renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>
  )
  return { html, meta: ssrHead.meta }
}
