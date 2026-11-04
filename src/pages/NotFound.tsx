import { PageFrame } from "@/components/layout/Layout"
import { Button } from "@/components/ui"
import { usePageMeta } from "@/lib/seo"

export default function NotFound() {
  usePageMeta({
    title: "Page not found | Glanzeuro Lingo",
    description: "The page you were looking for could not be found.",
    path: window.location.pathname,
    noindex: true,
  })
  return (
    <PageFrame>
      <section className="band band--blush not-found">
        <div className="container">
          <h1>This page could not be found</h1>
          <p>The link may be out of date. Try one of these instead.</p>
          <div className="actions">
            <Button href="/">Go to the Home Page</Button>
            <Button href="/courses" variant="outline">
              Browse Courses
            </Button>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
