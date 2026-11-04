import { PageFrame } from "@/components/layout/Layout"
import { Button, CheckList, FaqList, Notice, PageHero } from "@/components/ui"
import { EnquiryForm } from "@/components/EnquiryForm"
import { DEMO_HASH } from "@/lib/forms"
import { Art } from "@/components/Illustrations"
import { CareerCard, FinalCta, RelatedLinks } from "@/components/sections"
import { careerServices, type CareerService } from "@/data/services"
import { usePageMeta } from "@/lib/seo"

export function CareerHub() {
  usePageMeta({
    title:
      "Career Services | Resume, Interview and Placement Assistance | Glanzeuro Lingo",
    description:
      "Resume and CV building, interview preparation and placement assistance to help you present your skills and take your next career step.",
    path: "/career-services",
  })
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Career Services" }]}
        title="Career Development Services"
        lede={
          <p>
            Language skills open doors. Our career services help you walk
            through them, with a stronger resume, confident interviews and
            guidance for your job search.
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
            name="career"
            label="Illustration of a briefcase and a rising chart"
          />
        }
      />
      <section className="band band--white">
        <div className="grid-3 container">
          {careerServices.map((c) => (
            <CareerCard key={c.slug} c={c} />
          ))}
        </div>
      </section>
      <section className="band band--blush">
        <div className="container">
          <EnquiryForm variant="service" title="Ask about career services" />
        </div>
      </section>
    </PageFrame>
  )
}

export function CareerPage({ slug }: { slug: CareerService["slug"] }) {
  const c = careerServices.find((x) => x.slug === slug)!
  const others = careerServices.filter((x) => x.slug !== slug)
  usePageMeta({ ...c.seo, path: c.path })
  return (
    <PageFrame>
      <PageHero
        crumbs={[
          { label: "Career Services", href: "/career-services" },
          { label: c.title },
        ]}
        title={c.title}
        lede={<p>{c.overview[0]}</p>}
        actions={
          <>
            <Button href="#enquire">{c.pageCta}</Button>
            <Button href={`#${DEMO_HASH}`} variant="outline">
              Book a Consultation
            </Button>
          </>
        }
        art={<Art name="career" label={`Illustration for ${c.title}`} />}
      />
      <section className="band band--white">
        <div className="split container">
          <div>
            <h2>Service overview</h2>
            {c.overview.slice(1).map((t) => (
              <p key={t}>{t}</p>
            ))}
            {c.note && <Notice>{c.note}</Notice>}
          </div>
          <div className="panel">
            <h3>Who it is for</h3>
            <CheckList items={c.whoFor} />
          </div>
        </div>
      </section>
      <section className="band band--blush">
        <div className="container">
          <h2 className="h-center">What we cover</h2>
          <div className={`grid-${c.sections.length === 3 ? 3 : 4}`}>
            {c.sections.map((s) => (
              <div key={s.title} className="panel">
                <h3>{s.title}</h3>
                <CheckList items={s.bullets} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band band--white">
        <div className="split split--faq container">
          <h2>Frequently asked questions</h2>
          <FaqList items={c.faqs} />
        </div>
      </section>
      <section className="band band--blush">
        <div className="container">
          <EnquiryForm
            variant="service"
            interest={c.interest}
            title={c.pageCta}
            submitLabel={c.pageCta}
            whatsappMessage={c.whatsapp}
          />
        </div>
      </section>
      <section className="band band--white band--tight">
        <div className="container">
          <h2 className="h-small">Other career services</h2>
          <RelatedLinks
            links={others.map((o) => ({
              href: o.path,
              label: o.title,
              text: o.cardSummary,
            }))}
          />
        </div>
      </section>
      <FinalCta whatsapp={c.whatsapp} />
    </PageFrame>
  )
}
