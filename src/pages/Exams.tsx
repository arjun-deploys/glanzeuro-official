import { PageFrame } from "@/components/layout/Layout"
import { Button, CheckList, FaqList, PageHero } from "@/components/ui"
import { EnquiryForm } from "@/components/EnquiryForm"
import { DEMO_HASH } from "@/lib/forms"
import { Art } from "@/components/Illustrations"
import { ExamCard, FinalCta, RelatedLinks } from "@/components/sections"
import { exams, type Exam } from "@/data/services"
import { usePageMeta } from "@/lib/seo"

export function ExamHub() {
  usePageMeta({
    title: "TEF and TCF Preparation Online | Glanzeuro Lingo",
    description:
      "Online preparation for the TEF and TCF French exams, with module-by-module practice, timed mock tests and personalised feedback.",
    path: "/exam-preparation",
  })
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Exam Preparation" }]}
        title="French Exam Preparation"
        lede={
          <p>
            Separate, focused programmes for the TEF and the TCF. We train you
            on the exam format itself, so you can show your real French level on
            exam day.
          </p>
        }
        actions={
          <>
            <Button href="#enquire">Enquire Now</Button>
            <Button href={`#${DEMO_HASH}`} variant="outline">
              Book a Consultation
            </Button>
          </>
        }
        art={
          <Art
            name="exam"
            label="Illustration of an exam paper, headphones and pencil"
          />
        }
      />
      <section className="band band--white">
        <div className="grid-2 container">
          {exams.map((e) => (
            <ExamCard key={e.slug} e={e} />
          ))}
        </div>
      </section>
      <section className="band band--blush">
        <div className="container">
          <h2 className="h-center">TEF or TCF: which one do you need?</h2>
          <div className="table-wrap">
            <table className="compare">
              <caption className="sr-only">Comparison of TEF and TCF</caption>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">TEF</th>
                  <th scope="col">TCF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Full name</th>
                  <td lang="fr">Test d’évaluation de français</td>
                  <td lang="fr">Test de connaissance du français</td>
                </tr>
                <tr>
                  <th scope="row">Run by</th>
                  <td>Paris Île-de-France Chamber of Commerce and Industry</td>
                  <td>France Éducation international</td>
                </tr>
                <tr>
                  <th scope="row">Common versions</th>
                  <td>TEF Canada, TEF Québec and others</td>
                  <td>TCF Canada, TCF Tout Public and others</td>
                </tr>
                <tr>
                  <th scope="row">Skills tested</th>
                  <td>Listening, reading, writing, speaking</td>
                  <td>
                    Listening, reading, writing, speaking (plus language
                    structures in some versions)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="fine-print">
            Always check which test and version your university, employer or
            immigration programme accepts. We confirm the exact version and
            modules we cover with you before you start.
          </p>
        </div>
      </section>
      <section className="band band--white">
        <div className="container">
          <EnquiryForm
            variant="exam"
            title="Ask about exam preparation"
            submitLabel="Send Enquiry"
          />
        </div>
      </section>
    </PageFrame>
  )
}

export function ExamPage({ slug }: { slug: Exam["slug"] }) {
  const e = exams.find((x) => x.slug === slug)!
  const other = exams.find((x) => x.slug !== slug)!
  usePageMeta({ ...e.seo, path: e.path })
  return (
    <PageFrame>
      <PageHero
        crumbs={[
          { label: "Exam Preparation", href: "/exam-preparation" },
          { label: e.code.toUpperCase() },
        ]}
        badge={
          <p className="hero-badge__text" lang="fr">
            {e.fullName}
          </p>
        }
        title={e.title}
        lede={<p>{e.overview[0]}</p>}
        actions={
          <>
            <Button href="#enquire">
              Enquire About {e.code.toUpperCase()}
            </Button>
            <Button href={`#${DEMO_HASH}`} variant="outline">
              Book a Consultation
            </Button>
          </>
        }
        art={
          <div className="exam-seal" aria-hidden="true">
            <span>{e.code}</span>
            <Art name="exam" />
          </div>
        }
      />

      <section className="band band--white">
        <div className="split container">
          <div>
            <h2>About {e.code.toUpperCase()} preparation</h2>
            {e.overview.slice(1).map((t) => (
              <p key={t}>{t}</p>
            ))}
            <h3 className="mt">Who it is for</h3>
            <CheckList items={e.whoFor} />
          </div>
          <div className="panel">
            <h3>{e.code.toUpperCase()} versions</h3>
            <ul className="version-list">
              {e.versions.map((v) => (
                <li key={v.name}>
                  <strong>{v.name}</strong>
                  <span>{v.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band band--blush">
        <div className="container">
          <h2 className="h-center">Modules</h2>
          <div className="grid-4">
            {e.modules.map((m) => (
              <div key={m.code} className="module">
                <span className="module__code">{m.code}</span>
                <h3>{m.english}</h3>
                <p className="module__fr" lang="fr">
                  {m.name}
                </p>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <p className="fine-print">{e.modulesNote}</p>
        </div>
      </section>

      <section className="band band--white">
        <div className="container">
          <h2 className="h-center">How we prepare you</h2>
          <ol className="steps">
            {e.method.map((m, i) => (
              <li key={m.title}>
                <span className="steps__num">{i + 1}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
          <div className="panel panel--soft schedule">
            <h3>Schedule</h3>
            <p>
              Batch schedules depend on your exam date and current availability.
              Share your exam date when you enquire and we will suggest a
              preparation plan.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--blush">
        <div className="split split--faq container">
          <h2>Frequently asked questions</h2>
          <FaqList items={e.faqs} />
        </div>
      </section>

      <section className="band band--white">
        <div className="container">
          <EnquiryForm
            variant="exam"
            interest={e.interest}
            title={`Enquire about ${e.code.toUpperCase()} preparation`}
            submitLabel={`Enquire About ${e.code.toUpperCase()}`}
            whatsappMessage={e.whatsapp}
            intro="Share your exam version, exam date and current French level, and we will get back to you with a preparation plan."
          />
        </div>
      </section>

      <section className="band band--blush band--tight">
        <div className="container">
          <h2 className="h-small">Related</h2>
          <RelatedLinks
            links={[
              { href: other.path, label: other.title, text: other.cardSummary },
              {
                href: "/courses/french",
                label: "French Language Training",
                text: "Build your general French from A1 to B2 before or alongside exam preparation.",
              },
            ]}
          />
        </div>
      </section>
      <FinalCta whatsapp={e.whatsapp} />
    </PageFrame>
  )
}
