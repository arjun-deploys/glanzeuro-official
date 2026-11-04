import about1 from "/img/about1.webp"
import about2 from "/img/about2.webp"
import { PageFrame } from "@/components/layout/Layout"
import { Button, CheckList, FaqList, PageHero } from "@/components/ui"
import { EnquiryForm } from "@/components/EnquiryForm"
import { DEMO_HASH } from "@/lib/forms"
import { Art } from "@/components/Illustrations"
import {
  FinalCta,
  Journey,
  RelatedLinks,
  TestimonialsSection,
  WhyChoose,
} from "@/components/sections"
import { studyAbroad } from "@/data/services"
import { business } from "@/lib/siteData"
import { usePageMeta } from "@/lib/seo"

export function StudyAbroadPage() {
  usePageMeta({
    title: "Study Abroad Guidance and Counselling | Glanzeuro Lingo",
    description:
      "Study-abroad guidance: destination exploration, course and university shortlisting, language requirements, application and document support and general visa-process information.",
    path: "/study-abroad",
  })
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Study Abroad" }]}
        title="Your Journey to International Education Starts Here"
        lede={
          <p>
            From choosing a destination to preparing for departure, we guide you
            through each step of studying abroad, including the language your
            programme and new home will ask of you.
          </p>
        }
        actions={
          <>
            <Button href="#enquire">Request Study Abroad Counselling</Button>
            <Button href={`#${DEMO_HASH}`} variant="outline">
              Book a Counselling Session
            </Button>
          </>
        }
        art={
          <Art
            name="globe"
            label="Illustration of a globe, a flight path and a graduation cap"
          />
        }
      />
      <section className="band band--white">
        <div className="container">
          <h2 className="h-center">How we help</h2>
          <ol className="steps steps--3">
            {studyAbroad.services.map((s, i) => (
              <li key={s.title}>
                <span className="steps__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="band band--blush band--tight">
        <div className="container">
          <div className="callout">
            <div>
              <h2>Need a language for your programme?</h2>
              <p>
                Combine counselling with French, German, Dutch or Spoken English
                training, or prepare for the TEF or TCF if your application asks
                for a French score.
              </p>
            </div>
            <Button href="/courses" variant="outline" size="sm">
              See Language Courses
            </Button>
          </div>
        </div>
      </section>
      <section className="band band--white">
        <div className="split split--faq container">
          <h2>Frequently asked questions</h2>
          <FaqList items={studyAbroad.faqs} />
        </div>
      </section>
      <section className="band band--blush">
        <div className="container">
          <EnquiryForm
            variant="study"
            title="Request study abroad counselling"
            submitLabel="Request Study Abroad Counselling"
            intro="Tell us where and what you would like to study. We will contact you to arrange a counselling session."
            whatsappMessage="Hello Glanzeuro Lingo, I would like study abroad counselling."
          />
        </div>
      </section>
      <FinalCta whatsapp="Hello Glanzeuro Lingo, I would like study abroad counselling." />
    </PageFrame>
  )
}

export function AboutPage() {
  usePageMeta({
    title: "About Glanzeuro Lingo | Online Language Training Institute",
    description:
      "Glanzeuro Lingo is an online language training institute offering French, Dutch, German and Spoken English courses, TEF and TCF preparation, career services and study-abroad guidance.",
    path: "/about",
  })
  const mission = [
    "Provide structured and interactive language training.",
    "Develop learners’ speaking, listening, reading and writing skills.",
    "Make online language learning accessible, practical and engaging.",
    "Help learners build confidence through regular practice and communication.",
    "Support learners in reaching their personal, academic and professional goals.",
  ]
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        title="About Glanzeuro Lingo"
        lede={
          <>
            <p>
              Glanzeuro Lingo is a language training institute focused on
              helping learners develop practical and confident communication
              skills.
            </p>
            <p>
              We offer online training in French, Dutch, German and Spoken
              English, with interactive, structured classes that help you use
              the language in real situations. Alongside our courses we prepare
              learners for the TEF and TCF, and support them with career
              services and study-abroad guidance.
            </p>
          </>
        }
        actions={<Button href="/courses">Explore Our Courses</Button>}
        art={
          <img
            src={about2}
            alt="A group of learners around a table during a language class"
            className="page-hero__photo"
            width={1366}
            height={768}
          />
        }
      />
      <section className="band band--white">
        <div className="founder container">
          <img
            src={about1}
            alt="Learners and a mentor during a language lesson"
            loading="lazy"
            width={1050}
            height={768}
          />
          <div>
            <p className="founder__role">Founder and Language Mentor</p>
            <h2>{business.founder}</h2>
            <p>
              {business.founder} is the Founder and Language Mentor at Glanzeuro
              Lingo, specialising in structured French and Dutch language
              training. Her approach combines language fundamentals, practical
              communication, speaking practice and continuous assessment to help
              learners progress with confidence.
            </p>
            <p className="signature">{business.tagline}</p>
          </div>
        </div>
      </section>
      <section className="band band--blush">
        <div className="split container">
          <div>
            <h2>Our vision</h2>
            <p className="lead">
              To become a trusted language-learning institute that empowers
              learners to communicate confidently and opens doors to global
              education, career and personal opportunities.
            </p>
          </div>
          <div className="panel">
            <h2 className="h-small">Our mission</h2>
            <CheckList items={mission} />
          </div>
        </div>
      </section>
      <WhyChoose number="" />
      <FinalCta />
    </PageFrame>
  )
}

export function ApproachPage() {
  usePageMeta({
    title: "Our Approach to Language Learning | Glanzeuro Lingo",
    description:
      "How Glanzeuro Lingo teaches: structured levels, live interactive classes, speaking practice, weekly tests and feedback, in four clear steps from enquiry to progress review.",
    path: "/our-approach",
  })
  const skills = [
    {
      title: "Speaking",
      text: "Build confidence through regular speaking practice.",
    },
    {
      title: "Listening",
      text: "Train your ear for everyday language and rhythm.",
    },
    {
      title: "Reading",
      text: "Make meaning from real words, signs and stories.",
    },
    {
      title: "Writing",
      text: "Shape clear messages for study, work and life.",
    },
    {
      title: "Grammar and vocabulary",
      text: "Build strong fundamentals you can actually use.",
    },
    {
      title: "Practical conversation",
      text: "Move from the lesson into confident conversations.",
    },
  ]
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Our Approach" }]}
        title="Don’t just learn. Practise, communicate, progress."
        lede={
          <p>
            Progress in a language comes from rhythm: listening, trying,
            noticing and speaking again. Every Glanzeuro Lingo class is built
            around that rhythm, with structure you can follow and practice you
            can feel.
          </p>
        }
        actions={
          <Button href={`/contact?topic=demo#${DEMO_HASH}`}>
            Book a Free Demo
          </Button>
        }
        art={<Art name="speech" label="Illustration of two speech bubbles" />}
      />
      <Journey />
      <section className="band band--white">
        <div className="container">
          <h2 className="h-center">Six skills, built together</h2>
          <div className="grid-3 skill-grid">
            {skills.map((s) => (
              <div key={s.title} className="skill">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChoose number="" />
      <FinalCta />
    </PageFrame>
  )
}

export function TestimonialsPage() {
  usePageMeta({
    title: "Learner Testimonials | Glanzeuro Lingo",
    description:
      "What learners say about studying languages with Glanzeuro Lingo.",
    path: "/testimonials",
  })
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Testimonials" }]}
        title="What our learners say"
        lede={
          <p>
            Feedback shared by Glanzeuro Lingo learners, published with their
            permission.
          </p>
        }
      />
      <TestimonialsSection asPage />
      <FinalCta />
    </PageFrame>
  )
}

export function ContactPage() {
  usePageMeta({
    title: "Contact Glanzeuro Lingo | Enquire About Courses and Services",
    description: `Enquire about language courses, TEF and TCF preparation, career services or study abroad. Call or WhatsApp ${business.phoneDisplay} or email ${business.email}.`,
    path: "/contact",
  })
  return (
    <PageFrame>
      <PageHero
        crumbs={[{ label: "Contact Us" }]}
        title="Contact us"
        lede={
          <p>
            Not sure which course, level or service is right for you? Send us an
            enquiry, message us on WhatsApp or call. We will help you find the
            right next step.
          </p>
        }
      />
      <section className="band band--white">
        <div className="container">
          <EnquiryForm variant="general" title="Send an enquiry" />
        </div>
      </section>
      <section className="band band--blush band--tight">
        <div className="container">
          <h2 className="h-small">Explore before you enquire</h2>
          <RelatedLinks
            links={[
              {
                href: "/courses",
                label: "Language Courses",
                text: "French, Dutch, German and Spoken English.",
              },
              {
                href: "/exam-preparation",
                label: "Exam Preparation",
                text: "TEF and TCF preparation.",
              },
              {
                href: "/career-services",
                label: "Career Services",
                text: "Resume, interview and placement support.",
              },
              {
                href: "/study-abroad",
                label: "Study Abroad",
                text: "Guidance for international education.",
              },
            ]}
          />
        </div>
      </section>
    </PageFrame>
  )
}
