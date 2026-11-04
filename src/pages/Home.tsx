import {
  HeartHandshake,
  MessagesSquare,
  MonitorPlay,
  Globe2,
} from "lucide-react"
import hero from "/img/hero.webp"
import { PageFrame } from "@/components/layout/Layout"
import { Button } from "@/components/ui"
import { DEMO_HASH } from "@/lib/forms"
import {
  CareerSection,
  CoursesSection,
  ExamSection,
  FinalCta,
  Journey,
  StudyAbroadBanner,
  TestimonialsSection,
  WhyChoose,
} from "@/components/sections"
import { Ribbon } from "@/components/Illustrations"
import { stats } from "@/lib/siteData"
import { usePageMeta } from "@/lib/seo"

const heroPoints = [
  { icon: MonitorPlay, label: "Live online classes" },
  { icon: MessagesSquare, label: "Interactive learning" },
  { icon: HeartHandshake, label: "Personalised support" },
  { icon: Globe2, label: "Global opportunities" },
]

function Hero() {
  return (
    <section className="hero">
      <Ribbon className="hero__ribbon" />
      <div className="hero__grid container">
        <div className="hero__copy">
          <h1>
            <span>Learn a New Language.</span>
            <span className="hero__line2">Open a Brighter Future.</span>
          </h1>
          <p className="hero__lede">
            Build your language skills, improve your communication and prepare
            for global opportunities with structured online training from
            Glanzeuro Lingo.
          </p>
          <ul className="hero__points">
            {heroPoints.map(({ icon: Icon, label }) => (
              <li key={label}>
                <span className="icon-disc icon-disc--sm" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <div className="actions">
            <Button href="/courses">Explore Our Courses</Button>
            <Button href={`/contact?topic=demo#${DEMO_HASH}`} variant="outline">
              Book a Free Demo
            </Button>
          </div>
        </div>
        <div className="hero__art">
          <img
            src={hero}
            alt="A smiling language learner holding books, with line drawings of the Eiffel Tower and Amsterdam canal houses"
            width={1177}
            height={896}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const shown = stats.filter((s) => s.verified)
  if (!shown.length) return null
  return (
    <section className="stats">
      <div className="stats__row container">
        {shown.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta({
    title: "Glanzeuro Lingo | Online French, Dutch, German & English Training",
    description:
      "Learn French, Dutch, German and Spoken English online with Glanzeuro Lingo. TEF and TCF preparation, career services and study-abroad guidance. Learn. Speak. Succeed.",
    path: "/",
  })
  return (
    <PageFrame>
      <Hero />
      <CoursesSection />
      <ExamSection />
      <CareerSection />
      <StudyAbroadBanner />
      <WhyChoose />
      <Journey />
      <TestimonialsSection />
      <StatsBar />
      <FinalCta />
    </PageFrame>
  )
}
