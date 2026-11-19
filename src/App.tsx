import { useEffect } from "react"
import { Redirect, Route, Switch, useLocation } from "wouter"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import GlafPage from "@/pages/Glaf"
import { CoursesHub, LevelPage, ProgrammePage } from "@/pages/Courses"
import { ExamHub, ExamPage } from "@/pages/Exams"
import { CareerHub, CareerPage } from "@/pages/Career"
import {
  AboutPage,
  ApproachPage,
  ContactPage,
  StudyAbroadPage,
  TestimonialsPage,
} from "@/pages/Other"
import type { Language } from "@/data/courses"

// ---------- Smooth scrolling (kept from the previous site) ----------
let lenis: Lenis | null = null

function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -110 },
      autoRaf: true,
    })
    return () => {
      lenis?.destroy()
      lenis = null
    }
  }, [])
  return null
}

/** Scroll to top on route change, or to #hash when present. */
function ScrollManager() {
  const [location] = useLocation()
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(hash)
        if (!el) return
        if (lenis) lenis.scrollTo(el, { offset: -110, immediate: true })
        else el.scrollIntoView()
      }, 60)
      return () => clearTimeout(t)
    }
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo(0, 0)
  }, [location])
  return null
}

const levelRoute = (language: Language) => (params: { level: string }) => (
  <LevelPage language={language} level={params.level} />
)

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/our-approach" component={ApproachPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/study-abroad" component={StudyAbroadPage} />
      <Route path="/glaf" component={GlafPage} />

      <Route path="/courses" component={CoursesHub} />
      <Route path="/courses/french">
        {() => <ProgrammePage slug="french" />}
      </Route>
      <Route path="/courses/dutch">
        {() => <ProgrammePage slug="dutch" />}
      </Route>
      <Route path="/courses/german">
        {() => <ProgrammePage slug="german" />}
      </Route>
      <Route path="/courses/spoken-english">
        {() => <ProgrammePage slug="spoken-english" />}
      </Route>
      <Route path="/courses/french/:level">{levelRoute("french")}</Route>
      <Route path="/courses/dutch/:level">{levelRoute("dutch")}</Route>

      <Route path="/exam-preparation" component={ExamHub} />
      <Route path="/exam-preparation/tef">
        {() => <ExamPage slug="tef" />}
      </Route>
      <Route path="/exam-preparation/tcf">
        {() => <ExamPage slug="tcf" />}
      </Route>

      <Route path="/career-services" component={CareerHub} />
      <Route path="/career-services/resume-building">
        {() => <CareerPage slug="resume-building" />}
      </Route>
      <Route path="/career-services/interview-preparation">
        {() => <CareerPage slug="interview-preparation" />}
      </Route>
      <Route path="/career-services/placement-assistance">
        {() => <CareerPage slug="placement-assistance" />}
      </Route>

      {/* Old URLs from the previous site. Server-side 301s are also set in
          public/_redirects, public/.htaccess and vercel.json. */}
      <Route path="/french">
        <Redirect to="/courses/french" replace />
      </Route>
      <Route path="/dutch">
        <Redirect to="/courses/dutch" replace />
      </Route>
      <Route path="/french/:level">
        {(p) => <Redirect to={`/courses/french/${p.level}`} replace />}
      </Route>
      <Route path="/dutch/:level">
        {(p) => <Redirect to={`/courses/dutch/${p.level}`} replace />}
      </Route>

      <Route component={NotFound} />
    </Switch>
  )
}

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollManager />
      <Router />
    </>
  )
}
