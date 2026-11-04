import { Link } from "wouter"
import {
  Briefcase,
  CalendarClock,
  FileText,
  GraduationCap,
  HeartHandshake,
  Layers,
  MessagesSquare,
  MonitorPlay,
  Quote,
  UserRound,
} from "lucide-react"
import {
  careerServices,
  exams,
  journey,
  programmes,
  studyAbroad,
  whyChoose,
  type CareerService,
  type Exam,
  type Programme,
} from "@/data/services"
import { publishedTestimonials } from "@/lib/siteData"
import { Art, FlagBadge } from "@/components/Illustrations"
import {
  Button,
  CheckList,
  LevelChips,
  SectionHead,
  WhatsAppButton,
} from "@/components/ui"

// ---------------------------------------------------------------- cards

export function CourseCard({
  p,
  headingLevel = 3,
}: {
  p: Programme
  headingLevel?: 2 | 3
}) {
  const H = headingLevel === 2 ? "h2" : "h3"
  return (
    <article className="course-card">
      <div className="course-card__art">
        <Art name={p.illustration} />
        <FlagBadge colors={p.flag} direction={p.flagDirection} />
      </div>
      <div className="course-card__body">
        <H>
          {p.name}
          {p.slug !== "spoken-english" && <span>Language Training</span>}
          {p.slug === "spoken-english" && <span>Communication Training</span>}
        </H>
        <LevelChips levels={p.levels} note={p.levelsNote} />
        <p>{p.cardSummary}</p>
        <CheckList items={p.cardBenefits} />
        <Button href={p.path} size="sm" className="course-card__cta">
          {p.ctaLabel}
        </Button>
      </div>
    </article>
  )
}

export function ExamCard({ e }: { e: Exam }) {
  return (
    <article className="exam-card">
      <div className="exam-card__copy">
        <span className="exam-card__mark" aria-hidden="true">
          {e.code}
        </span>
        <h3>{e.title}</h3>
        <p className="exam-card__full" lang="fr">
          {e.fullName}
        </p>
        <CheckList items={e.cardBenefits} />
        <Button href={e.path} size="sm">
          Explore {e.title}
        </Button>
      </div>
      <Art name="exam" className="exam-card__art" />
    </article>
  )
}

const careerIcon = {
  resume: FileText,
  interview: UserRound,
  placement: Briefcase,
}

export function CareerCard({ c }: { c: CareerService }) {
  const Icon = careerIcon[c.icon]
  return (
    <article className="career-card">
      <span className="icon-disc" aria-hidden="true">
        <Icon size={26} strokeWidth={1.7} />
      </span>
      <h3>{c.title}</h3>
      <p>{c.cardSummary}</p>
      <CheckList items={c.cardBenefits} />
      <Button href={c.path} variant="outline" size="sm">
        {c.cardCta}
      </Button>
    </article>
  )
}

// ---------------------------------------------------------------- sections

export function CoursesSection({ number = "01" }: { number?: string }) {
  return (
    <section className="band band--white" aria-labelledby="courses-title">
      <div className="container">
        <SectionHead
          number={number}
          id="courses-title"
          title="Our Courses"
          intro="Choose from globally relevant language programmes designed around your goals."
          action={
            <Button href="/courses" variant="outline" size="sm">
              View All Courses
            </Button>
          }
        />
        <div className="grid-4">
          {programmes.map((p) => (
            <CourseCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExamSection({ number = "02" }: { number?: string }) {
  return (
    <section className="band band--blush" aria-labelledby="exam-title">
      <div className="container">
        <SectionHead
          number={number}
          id="exam-title"
          title="Exam Preparation"
          intro="Targeted training to help you prepare for your French exam with confidence."
          action={
            <Button href="/exam-preparation" variant="outline" size="sm">
              Compare TEF and TCF
            </Button>
          }
        />
        <div className="grid-2">
          {exams.map((e) => (
            <ExamCard key={e.slug} e={e} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function CareerSection({ number = "03" }: { number?: string }) {
  return (
    <section className="band band--white" aria-labelledby="career-title">
      <div className="container">
        <SectionHead
          number={number}
          id="career-title"
          title="Career Development Services"
          intro="Build a strong profile and get ready for global opportunities."
          action={
            <Button href="/career-services" variant="outline" size="sm">
              All Career Services
            </Button>
          }
        />
        <div className="grid-3">
          {careerServices.map((c) => (
            <CareerCard key={c.slug} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function StudyAbroadBanner({ number = "04" }: { number?: string }) {
  return (
    <section className="band band--blush" aria-labelledby="study-title">
      <div className="container">
        <div className="study-banner">
          <div className="study-banner__copy">
            <SectionHead
              number={number}
              id="study-title"
              title="Study Abroad"
              intro="Your journey to international education starts here."
            />
            <CheckList
              className="checklist--2col"
              items={studyAbroad.services.map((s) => s.title)}
            />
            <div className="actions">
              <Button href="/study-abroad">Explore Study Abroad</Button>
              <Button href="/study-abroad#book-demo" variant="outline">
                Book a Counselling Session
              </Button>
            </div>
          </div>
          <div className="study-banner__art">
            <Art name="globe" />
            <p className="script" aria-hidden="true">
              Explore
              <br />
              Study
              <br />
              Work
              <br />
              Grow
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const whyIcon = {
  structured: Layers,
  practical: MessagesSquare,
  online: MonitorPlay,
  personal: HeartHandshake,
  flexible: CalendarClock,
  career: GraduationCap,
}

export function WhyChoose({ number = "05" }: { number?: string }) {
  return (
    <section className="band band--white" aria-labelledby="why-title">
      <div className="container">
        <SectionHead
          number={number}
          id="why-title"
          title="Why Choose Glanzeuro Lingo?"
        />
        <ul className="why-row">
          {whyChoose.map((w) => {
            const Icon = whyIcon[w.icon]
            return (
              <li key={w.title}>
                <span className="icon-disc" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.7} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function Journey({ heading = "h2" }: { heading?: "h2" | "h3" }) {
  const H = heading
  return (
    <section className="band band--rose" aria-labelledby="journey-title">
      <div className="journey container">
        <div className="journey__head">
          <H id="journey-title">Your learning journey</H>
          <p>
            Four clear steps, from your first message to measurable progress.
          </p>
        </div>
        <ol className="journey__steps">
          {journey.map((s, i) => (
            <li key={s.title}>
              <span className="journey__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <Button href="/contact" variant="light">
          Start Your Learning Journey
        </Button>
      </div>
    </section>
  )
}

export function TestimonialsSection({ asPage = false }: { asPage?: boolean }) {
  const items = publishedTestimonials
  return (
    <section
      className="band band--blush"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        {!asPage && (
          <SectionHead
            id="testimonials-title"
            title="What our learners say"
            action={
              items.length > 0 ? (
                <Button href="/testimonials" variant="outline" size="sm">
                  Read All Testimonials
                </Button>
              ) : undefined
            }
          />
        )}
        {items.length > 0 ? (
          <div className="grid-3">
            {items.map((t) => (
              <figure key={t.name + t.course} className="quote-card">
                <Quote size={28} aria-hidden="true" />
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.course}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="quote-empty">
            <Quote size={32} aria-hidden="true" />
            <div>
              <h3 id={asPage ? "testimonials-title" : undefined}>
                Learner stories are on their way
              </h3>
              <p>
                We are collecting feedback from our learners and will share it
                here with their permission. Until then, the best way to see how
                we teach is to join a free demo class.
              </p>
            </div>
            <Button href="/contact?topic=demo">Book a Free Demo</Button>
          </div>
        )}
      </div>
    </section>
  )
}

export function FinalCta({
  title = "Ready to Take Your Next Step?",
  text = "Tell us your goal and we will help you choose the right course or service.",
  whatsapp,
}: {
  title?: string
  text?: string
  whatsapp?: string
}) {
  return (
    <section className="final-cta">
      <div className="final-cta__inner container">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="actions">
          <Button href="/contact">Enquire Now</Button>
          <WhatsAppButton message={whatsapp} variant="outline" />
        </div>
      </div>
    </section>
  )
}

export function RelatedLinks({
  links,
}: {
  links: { href: string; label: string; text: string }[]
}) {
  return (
    <ul className="related">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href}>
            <strong>{l.label}</strong>
            <span>{l.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
