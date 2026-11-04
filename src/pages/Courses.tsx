import { Link, Redirect } from "wouter"
import { ArrowRight } from "lucide-react"
import frenchImage from "/img/french.webp"
import dutchImage from "/img/dutch.webp"
import { PageFrame } from "@/components/layout/Layout"
import {
  Button,
  CheckList,
  FaqList,
  LevelChips,
  Notice,
  PageHero,
} from "@/components/ui"
import { EnquiryForm } from "@/components/EnquiryForm"
import { DEMO_HASH } from "@/lib/forms"
import { Art, FlagBadge } from "@/components/Illustrations"
import { CourseCard, FinalCta, RelatedLinks } from "@/components/sections"
import { confirmedFormat, programmes, type Programme } from "@/data/services"
import { getCourse, levelsFor, type Language } from "@/data/courses"
import { enrolFormUrl } from "@/lib/siteData"
import { usePageMeta } from "@/lib/seo"

const photos: Partial<Record<Programme["slug"], { src: string; alt: string }>> =
  {
    french: {
      src: frenchImage,
      alt: "A French tutor and learner practising conversation at a table with French textbooks",
    },
    dutch: {
      src: dutchImage,
      alt: "A Dutch language lesson beside a window overlooking an Amsterdam canal",
    },
  }

export function CoursesHub() {
  usePageMeta({
    title:
      "Language Courses Online | French, Dutch, German, English | Glanzeuro Lingo",
    description:
      "Explore online French (A1 to B2), Dutch (A1 to A2), German and Spoken English courses with live, interactive classes from Glanzeuro Lingo.",
    path: "/courses",
  })
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Courses" }]}
        title="Language Courses"
        lede={
          <p>
            Structured online training in French, Dutch, German and Spoken
            English. Every course builds speaking, listening, reading and
            writing together, with practical communication at the centre.
          </p>
        }
        actions={
          <>
            <Button href="#enquire">Enquire Now</Button>
            <Button href={`#${DEMO_HASH}`} variant="outline">
              Book a Free Demo
            </Button>
          </>
        }
        art={
          <Art
            name="eiffel"
            label="Line drawing of the Eiffel Tower with blossoms"
          />
        }
      />
      <section className="band band--white">
        <div className="grid-4 container">
          {programmes.map((p) => (
            <CourseCard key={p.slug} p={p} headingLevel={2} />
          ))}
        </div>
      </section>
      <section className="band band--blush">
        <div className="container">
          <EnquiryForm
            variant="course"
            title="Not sure which course is right for you?"
          />
        </div>
      </section>
    </PageFrame>
  )
}

export function ProgrammePage({ slug }: { slug: Programme["slug"] }) {
  const p = programmes.find((x) => x.slug === slug)!
  usePageMeta({ ...p.seo, path: p.path })
  const photo = photos[slug]
  const levelPages = p.hasLevelPages ? levelsFor(slug as Language) : []
  const others = programmes.filter((x) => x.slug !== slug)
  const isEstablished = p.hasLevelPages

  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Courses", href: "/courses" }, { label: p.name }]}
        badge={
          <div className="hero-badge">
            <FlagBadge colors={p.flag} direction={p.flagDirection} size={38} />
            <LevelChips levels={p.levels} note={p.levelsNote} />
          </div>
        }
        title={p.title}
        lede={<p>{p.overview[0]}</p>}
        actions={
          <>
            <Button href="#enquire">Enquire About This Course</Button>
            <Button href={`#${DEMO_HASH}`} variant="outline">
              Book a Demo Class
            </Button>
          </>
        }
        art={
          photo ? (
            <img
              src={photo.src}
              alt={photo.alt}
              className="page-hero__photo"
              width={1046}
              height={768}
            />
          ) : (
            <Art name={p.illustration} label={`Illustration for ${p.title}`} />
          )
        }
      />

      <section className="band band--white">
        <div className="split container">
          <div>
            <h2>Course overview</h2>
            {p.overview.slice(1).map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className="panel">
            <h3>Who it is for</h3>
            <CheckList items={p.whoFor} />
          </div>
        </div>
      </section>

      <section className="band band--blush">
        <div className="container">
          <h2 className="h-center">Levels and learning outcomes</h2>
          {p.outcomes.length > 0 ? (
            <div className={`level-grid level-grid--${p.outcomes.length}`}>
              {p.outcomes.map((o) => {
                const hasPage = levelPages.some((l) => l.level === o.level)
                const body = (
                  <>
                    <span className="level-grid__code">{o.level}</span>
                    <h3>{o.name}</h3>
                    <p>{o.text}</p>
                    {hasPage && (
                      <span className="level-grid__more">
                        Full {o.level} syllabus{" "}
                        <ArrowRight size={15} aria-hidden="true" />
                      </span>
                    )}
                  </>
                )
                return hasPage ? (
                  <Link
                    key={o.level}
                    href={`${p.path}/${o.level.toLowerCase()}`}
                    className="level-grid__item"
                  >
                    {body}
                  </Link>
                ) : (
                  <div key={o.level} className="level-grid__item">
                    {body}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="split split--tight">
              <div className="panel">
                <h3>What you will be able to do</h3>
                <CheckList items={p.generalOutcomes ?? []} />
              </div>
              <div className="panel panel--soft">
                <h3>Available levels</h3>
                <p>
                  {p.levelsNote}. Tell us your current level and goal and we
                  will suggest the right starting point and batch.
                </p>
                <Button href="#enquire" size="sm">
                  Ask About Levels
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="band band--white">
        <div className="container">
          <h2 className="h-center">
            {slug === "spoken-english"
              ? "What you will practise"
              : "Reading, writing, listening and speaking"}
          </h2>
          <div className="grid-4 skill-grid">
            {p.skills.map((s) => (
              <div key={s.title} className="skill">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="practice">
            <h2>
              {slug === "spoken-english"
                ? "Vocabulary, pronunciation and sentence formation"
                : "Grammar, vocabulary and pronunciation"}
            </h2>
            <div className="grid-3">
              {p.practice.map((s) => (
                <div key={s.title} className="panel panel--soft">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {p.extra && (
        <section className="band band--blush band--tight">
          <div className="container">
            {p.extra.map((x) => (
              <div key={x.title} className="callout">
                <div>
                  <h2>{x.title}</h2>
                  <p>{x.text}</p>
                </div>
                {x.href && (
                  <Button href={x.href} variant="outline" size="sm">
                    {x.linkLabel ?? "Learn more"}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="band band--white">
        <div className="split container">
          <div>
            <h2>Course format and details</h2>
            {isEstablished ? (
              <CheckList items={confirmedFormat} />
            ) : (
              <p>
                Class format, study materials, assessments and certificate
                details for this course are confirmed when you enquire.
              </p>
            )}
          </div>
          <div className="panel panel--soft">
            <h3>Duration, fees and timings</h3>
            <p>
              The course duration, fees and current batch timings are shared
              when you enquire, so you always get up-to-date information.
            </p>
            <Button href="#enquire" size="sm">
              Ask for Current Batches
            </Button>
          </div>
        </div>
      </section>

      <section className="band band--blush">
        <div className="split split--faq container">
          <h2>Frequently asked questions</h2>
          <FaqList items={p.faqs} />
        </div>
      </section>

      <section className="band band--white">
        <div className="container">
          <EnquiryForm
            variant="course"
            interest={p.interest}
            title={`Enquire about ${p.name}`}
            submitLabel="Enquire About This Course"
            whatsappMessage={p.whatsapp}
          />
        </div>
      </section>

      <section className="band band--blush band--tight">
        <div className="container">
          <h2 className="h-small">Other courses</h2>
          <RelatedLinks
            links={others.map((o) => ({
              href: o.path,
              label: o.title,
              text: o.cardSummary,
            }))}
          />
        </div>
      </section>
      <FinalCta whatsapp={p.whatsapp} />
    </PageFrame>
  )
}

export function LevelPage({
  language,
  level,
}: {
  language: Language
  level: string
}) {
  const course = getCourse(language, level)
  const p = programmes.find((x) => x.slug === language)!
  const path = `${p.path}/${level.toLowerCase()}`
  usePageMeta({
    title: `${course?.title ?? "Course"} Online | Glanzeuro Lingo`,
    description: course
      ? `${course.intro} Live online ${p.name} classes with speaking practice, assessments and a certificate on completion.`
      : "",
    path,
  })
  if (!course) return <Redirect to={p.path} replace />
  const levels = levelsFor(language)

  return (
    <PageFrame>
      <PageHero
        crumbs={[
          { label: "Courses", href: "/courses" },
          { label: p.name, href: p.path },
          { label: course.level },
        ]}
        badge={
          <div className="hero-badge">
            <FlagBadge colors={p.flag} direction={p.flagDirection} size={38} />
            <span className="hero-badge__text">
              {p.name} · {course.descriptor}
            </span>
          </div>
        }
        title={course.title}
        lede={
          <>
            <p>{course.intro}</p>
            {course.special && <Notice>{course.special}</Notice>}
          </>
        }
        actions={
          <>
            <Button href="#enquire">Enquire About This Course</Button>
            <Button href={`#${DEMO_HASH}`} variant="outline">
              Book a Demo Class
            </Button>
          </>
        }
        art={
          <div className="level-seal" aria-hidden="true">
            {course.level}
            <small>{course.descriptor}</small>
          </div>
        }
      />

      <section className="band band--white">
        <div className="level-layout container">
          <nav className="level-tabs" aria-label={`${p.name} levels`}>
            <span>{p.name} levels</span>
            {levels.map((l) => (
              <Link
                key={l.level}
                href={`${p.path}/${l.level.toLowerCase()}`}
                className={l.level === course.level ? "is-active" : ""}
                aria-current={l.level === course.level ? "page" : undefined}
              >
                <strong>{l.level}</strong>
                <small>{l.descriptor}</small>
              </Link>
            ))}
          </nav>
          <div className="syllabus">
            <h2>What you will learn in {course.level}</h2>
            {course.sections.map((s, i) => (
              <details key={s.title} open={i === 0}>
                <summary>{s.title}</summary>
                <CheckList items={s.bullets.map((b) => b.replace(/\.$/, ""))} />
              </details>
            ))}
            <div className="grid-2 syllabus__meta">
              <div className="panel panel--soft">
                <h3>Assessment</h3>
                <p>{course.assessment}</p>
              </div>
              <div className="panel panel--soft">
                <h3>Certificate</h3>
                <p>{course.certificate}</p>
              </div>
            </div>
            <p className="syllabus__enrol">
              Already decided?{" "}
              <a href={enrolFormUrl} target="_blank" rel="noopener noreferrer">
                Open the enrolment form
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="band band--blush">
        <div className="container">
          <EnquiryForm
            variant="course"
            interest={p.interest}
            title={`Enquire about ${course.title}`}
            submitLabel="Enquire About This Course"
            whatsappMessage={`Hello Glanzeuro Lingo, I would like to know more about ${course.title}.`}
          />
        </div>
      </section>
    </PageFrame>
  )
}
