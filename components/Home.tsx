"use client"
import { useEffect, useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CircleArrowOutUpRight,
  Menu,
  Minus,
  Plus,
  X,
} from "lucide-react"
import SectionLabel from "./SectionLable"
import logoImage from "../public/glanzeuro_logo.png"
import heroImage from "../public/learning2.jpg"
import heroImage2 from "../public/learning.jpg"
import notebookImage from "../public/language.jpg"
import Image from "next/image"

// const heroImage = "@/assets";
// const notebookImage = "/manus-storage/glanzeuro-notebook_f36bf848.jpg";

const levels = [
  {
    id: "A1",
    verb: "BEGIN",
    description:
      "For the first hello, the first question, the first feeling of being understood.",
    speaking: "Introduce yourself and share simple needs.",
    listening: "Catch familiar words in everyday moments.",
    reading: "Make sense of short notes, menus and signs.",
    writing: "Build clear phrases with a steady foundation.",
  },
  {
    id: "A2",
    verb: "BUILD",
    description:
      "For expanding your range and finding rhythm in real conversations.",
    speaking: "Talk about your life, work and interests.",
    listening: "Follow the shape of a slower conversation.",
    reading: "Understand practical messages and short stories.",
    writing: "Connect ideas into confident everyday writing.",
  },
  {
    id: "B1",
    verb: "EXPRESS",
    description:
      "For saying what you mean with more nuance, ease and personality.",
    speaking: "Explain opinions, plans and experiences.",
    listening: "Follow the thread of natural exchanges.",
    reading: "Move through articles, emails and cultural context.",
    writing: "Express a point of view with clarity.",
  },
  {
    id: "B2",
    verb: "MASTER",
    description:
      "For participating fully — at work, in community and across borders.",
    speaking: "Speak spontaneously and respond with precision.",
    listening: "Read tone, intention and the unsaid.",
    reading: "Engage with complex texts and ideas.",
    writing: "Shape sophisticated, natural communication.",
  },
]

const skills = [
  ["SPEAKING", "Find your voice before you find the perfect word."],
  ["LISTENING", "Hear the meaning, rhythm and confidence between the lines."],
  [
    "READING",
    "Meet French and Dutch where they live: on the page and beyond it.",
  ],
  ["WRITING", "Make every message sound like you — only clearer."],
  ["GRAMMAR", "Build structure that supports you, never slows you down."],
  ["VOCABULARY", "Collect words you will actually use in your world."],
  [
    "CONVERSATION",
    "Practise the beautiful, imperfect art of being understood.",
  ],
  ["PRACTICE", "Return to the language until it begins to feel like home."],
]

const experienceItems = [
  [
    "LIVE ONLINE CLASSES",
    "Interactive live learning designed around practical communication.",
  ],
  [
    "STUDY MATERIALS",
    "Thoughtful resources that keep your progress close at hand.",
  ],
  [
    "WEEKLY TESTS & ASSIGNMENTS",
    "A gentle rhythm to turn new knowledge into instinct.",
  ],
  ["CERTIFICATE", "A considered record of the level you have reached."],
  [
    "ONE-TO-ONE SPEAKING PRACTICE",
    "Focused space to speak, listen and grow in confidence.",
  ],
  [
    "FLEXIBLE BATCH TIMINGS",
    "A learning rhythm designed to meet real life where it is.",
  ],
]

const testimonials = [
  [
    "The French classes are very easy to understand and well structured.",
    "FRENCH A1 STUDENT",
  ],
  [
    "I can finally follow a conversation without translating every sentence first.",
    "DUTCH A2 STUDENT",
  ],
  [
    "The lessons feel practical from the very beginning — and genuinely human.",
    "FRENCH B1 STUDENT",
  ],
  [
    "I joined to learn words. I stayed because I found my confidence.",
    "DUTCH B1 STUDENT",
  ],
]

function Mark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={small ? "brand-mark brand-mark--small" : "brand-mark"}
      aria-label="Glanzeuro Lingo"
    >
      <span>GLANZEURO</span>
      <span>LINGO</span>
    </div>
  )
}

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p className={`eyebrow ${light ? "text-champagne" : ""}`}>{children}</p>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<
    (typeof levels)[number] | null
  >(null)
  const [activeSkill, setActiveSkill] = useState(0)
  const [activeExperience, setActiveExperience] = useState<number | null>(null)
  const [testimonial, setTestimonial] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [enquirySent, setEnquirySent] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || Boolean(selectedLevel) ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen, selectedLevel])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setSelectedLevel(null)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const nextTestimonial = () =>
    setTestimonial((current) => (current + 1) % testimonials.length)
  const previousTestimonial = () =>
    setTestimonial(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    )

  return (
    <div className="site-shell">
      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <a href="#top" className="focus-ring" aria-label="Glanzeuro Lingo home">
          <Image
            src={logoImage}
            className="site-logo"
            alt="Glanzeuro Lingo logo"
          />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#languages">French</a>
          <a href="#languages">Dutch</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
            target="_blank"
            className="nav-enquire"
          >
            Enquire <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="menu-trigger focus-ring"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span>Menu</span>
          <Menu size={17} strokeWidth={1.5} />
        </button>
      </header>

      {menuOpen && (
        <div
          className="menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="menu-overlay__top">
            <Mark small />
            <button
              className="close-button focus-ring"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="menu-overlay__content">
            <Eyebrow light>Navigation / Glanzeuro Lingo</Eyebrow>
            <nav className="overlay-nav">
              {[
                ["French", "#languages"],
                ["Dutch", "#languages"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href], index) => (
                <a key={label} href={href} onClick={closeMenu}>
                  <span>0{index + 1}</span>
                  {label}
                </a>
              ))}
            </nav>
            <a
              className="overlay-cta"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
              target="_blank"
              onClick={closeMenu}
            >
              Enquire <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="menu-overlay__footer">
            <span>LEARN • SPEAK • SUCCEED.</span>
            <span>© 2026 Glanzeuro Lingo</span>
          </div>
        </div>
      )}

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grain" />
          <div className="hero-glow" />
          <div className="hero-line hero-line--one" />
          <div className="hero-line hero-line--two" />
          <div className="hero-orbit hero-orbit--one">FRANÇAIS</div>
          <div className="hero-orbit hero-orbit--two">NEDERLANDS</div>
          <div className="hero-content container">
            {/* <div className="hero-kicker">
              <span>Language</span>
              <i /> <span>Culture</span>
              <i /> <span>Connection</span>
            </div> */}
            <div className="hero-meta">
              <span>Online</span>
              <i /> <span>Live</span>
              <i /> <span>Interactive</span>
            </div>
            <h1 id="hero-title" className="hero-title">
              <span>Speak</span>
              <em>beyond words.</em>
              {/* <em>words.</em> */}
            </h1>

            <p className="hero-copy">
              French & Dutch language training designed to help you communicate
              with confidence — in classrooms, careers and everyday life.
            </p>
            <div className="hero-actions">
              <a href="#languages" className="text-link light-link">
                Explore French <ArrowRight size={17} />
              </a>
              <a href="#languages" className="text-link light-link">
                Explore Dutch <ArrowRight size={17} />
              </a>
            </div>
            {/* <div className="hero-meta">
              <span>Online</span>
              <i /> <span>Live</span>
              <i /> <span>Interactive</span>
            </div> */}
            <div className="hero-kicker hidden md:block">
              <span>Language</span>
              <i /> <span>Culture</span>
              <i /> <span>Connection</span>
            </div>
          </div>
          <div className="hero-photo-wrap hidden md:block">
            <Image
              src={heroImage}
              alt="Two women in conversation at a café in Europe"
              className="hero-photo"
            />
          </div>
          <div className="scroll-cue">
            <span>Scroll to explore</span>
            <ArrowDown size={17} />
          </div>
        </section>

        <section
          className="statement-section section-ivory"
          aria-labelledby="statement-title"
        >
          <div className="statement-inner container">
            <Eyebrow>French • Dutch • Confidence • Connection</Eyebrow>
            <h2 id="statement-title">
              A language is not something
              <br className="desktop-only" /> you simply learn.
              <br />
              <em>It is something</em>
              <br className="desktop-only" /> <em>you begin to live.</em>
            </h2>
            <div className="statement-rule" />
            <p>
              Learning another language opens another version of your world.
            </p>
          </div>
          <div className="statement-side-note">01 / 14</div>
        </section>

        <section id="about" className="about-section section-blush">
          <div className="about-grid container">
            <div className="about-intro">
              <SectionLabel number="01">About Glanzeuro</SectionLabel>
              {/* <Eyebrow>About Glanzeuro</Eyebrow> */}
              {/* <div className="about-number">01</div> */}
              <h2>
                Language learning,
                <br />
                <em>made human.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                Glanzeuro Lingo is a language training institute focused on
                helping learners develop practical and confident communication
                skills in French and Dutch.
              </p>
              <p className="body-copy">
                Because the best measure of progress is not a perfect score. It
                is the moment you stop searching for the words and start living
                the conversation.
              </p>
              <a className="text-link dark-link" href="#method">
                Discover the method <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="about-image-row container">
            <div className="image-caption">
              <span>02</span>
              <span>
                Words become worlds
                <br />
                when they are spoken.
              </span>
            </div>
            <div className="about-image-frame">
              <Image
                src={notebookImage}
                alt="A notebook with French and Dutch vocabulary beside a map"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section
          id="languages"
          className="language-section"
          aria-labelledby="language-title"
        >
          <div className="language-heading container">
            {/* <Eyebrow light>Choose your language</Eyebrow> */}
            <SectionLabel number="02" light>
              Choose your language
            </SectionLabel>
            <h2 id="languages-title">
              French <span>×</span> Dutch
            </h2>
            {/* <h2 id="language-title">
              Two languages.
              <br />
              <em>One wider world.</em>
            </h2> */}
          </div>
          <div className="language-split">
            <a
              className="language-panel language-panel--french"
              href="#journey"
            >
              <span className="panel-index">01</span>
              <div className="language-panel__body">
                <div className="language-word">FRANÇAIS</div>
                <p>La langue de la conversation.</p>
                <span className="level-line">
                  A1 <i>→</i> A2 <i>→</i> B1 <i>→</i> B2
                </span>
                <span className="panel-link">
                  Explore French <ArrowRight size={17} />
                </span>
              </div>
              {/* <div className="panel-script">bonjour, encore</div> */}
            </a>
            <a className="language-panel language-panel--dutch" href="#journey">
              <span className="panel-index">02</span>
              <div className="language-panel__body">
                <div className="language-word">NEDERLANDS</div>
                <p>Taal voor een nieuwe wereld.</p>
                <span className="level-line">
                  A1 <i>→</i> A2 <i>→</i> B1 <i>→</i> B2
                </span>
                <span className="panel-link">
                  Explore Dutch <ArrowRight size={17} />
                </span>
              </div>
              {/* <div className="panel-script">spreek vrijuit</div> */}
            </a>
          </div>
        </section>

        <section
          id="journey"
          className="journey-section section-ivory"
          aria-labelledby="journey-title"
        >
          <div className="container">
            <div className="section-topline">
              {/* <Eyebrow>Your journey</Eyebrow> */}
              <SectionLabel number="03">Your journey</SectionLabel>
              <span>Progress, not perfection.</span>
            </div>
            <div className="journey-header">
              <h2 id="journey-title">
                From first word
                <br />
                <em>to full voice.</em>
              </h2>
              <p>
                Four considered levels. One continuous movement toward real
                conversation.
              </p>
            </div>
            <div className="journey-timeline">
              {levels.map((level, index) => (
                <button
                  key={level.id}
                  className="journey-step focus-ring"
                  onClick={() => setSelectedLevel(level)}
                >
                  <span className="journey-step__number">0{index + 1}</span>
                  <span className="journey-step__level">{level.id}</span>
                  <span className="journey-step__verb">{level.verb}</span>
                  <span className="journey-step__arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              ))}
            </div>
            <div className="journey-languages">
              <span>
                French <b>A1 · A2 · B1 · B2</b>
              </span>
              <span>
                Dutch <b>A1 · A2 · B1 · B2</b>
              </span>
            </div>
          </div>
        </section>

        <section
          id="method"
          className="method-section"
          aria-labelledby="method-title"
        >
          <div className="method-inner container">
            <div className="method-orbit">
              GLANZEURO
              <br />
              LINGO
            </div>
            <SectionLabel number="04" light>
              The Glanzeuro method
            </SectionLabel>
            {/* <Eyebrow light>The Glanzeuro method</Eyebrow> */}
            <h2 id="method-title">
              <span>Learn it.</span>
              <span>Use it.</span>
              <em>Live it.</em>
            </h2>
            <div className="method-principles">
              {[
                "Live classes",
                "Speaking focus",
                "Interactive learning",
                "Practical communication",
              ].map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="learn-section section-blush"
          aria-labelledby="learn-title"
        >
          <div className="learn-grid container">
            <div className="learn-statement">
              <SectionLabel number="05">What you learn</SectionLabel>
              {/* <Eyebrow>What you learn</Eyebrow> */}
              <h2 id="learn-title">
                Every lesson moves you closer
                <br />
                <em>to real conversation.</em>
              </h2>
              <p>
                We work across the full shape of communication, so your
                confidence grows in every direction.
              </p>
            </div>
            <div className="skill-index">
              {skills.map(([title, description], index) => (
                <button
                  key={title}
                  className={`skill-row focus-ring ${activeSkill === index ? "is-active" : ""}`}
                  onClick={() => setActiveSkill(index)}
                >
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                  <ArrowRight size={16} />
                  <div className="skill-detail">{description}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mentor-section section-ivory">
          <div className="mentor-grid container">
            <div className="mentor-label">
              <Eyebrow>The person behind the method</Eyebrow>
              <span className="mentor-vertical">PRAVEENA NARESH</span>
            </div>
            <div className="mentor-portrait">
              <Image
                src={heroImage2}
                alt="Praveena Naresh in conversation at a European café"
                loading="lazy"
              />
              <div className="portrait-caption">
                Praveena Naresh
                <br />
                <span>Founder & Language Mentor</span>
              </div>
            </div>
            <div className="mentor-quote">
              <div className="quote-mark">“</div>
              <blockquote>
                Confidence begins when you stop translating every word in your
                head.
              </blockquote>
              <p>
                Praveena brings a practical, personal and deeply human approach
                to every lesson — helping learners move from understanding a
                language to inhabiting it.
              </p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="vision-inner container">
            <SectionLabel number="06" light numberWhite>
              Our vision
            </SectionLabel>
            {/* <Eyebrow light>Our vision</Eyebrow> */}
            <h2>
              A world where
              <br />
              <em>language opens doors.</em>
            </h2>
            <div className="vision-divider" />
            <div className="mission-copy">
              <Eyebrow>Our mission</Eyebrow>
              <div className="mission-words">
                <span>Structured.</span>
                <span>Practical.</span>
                <span>Confident.</span>
              </div>
              <p>
                Make language learning feel possible, useful and alive — for
                every chapter that comes next.
              </p>
            </div>
          </div>
        </section>

        <section
          className="experience-section section-ivory"
          aria-labelledby="experience-title"
        >
          <div className="container">
            <div className="section-topline">
              <SectionLabel number="07">Your learning experience</SectionLabel>
              {/* <Eyebrow>Your learning experience</Eyebrow> */}
              <span>Everything included.</span>
            </div>
            <h2 id="experience-title">
              The details that make
              <br />
              <em>progress feel personal.</em>
            </h2>
            <div className="experience-list">
              {experienceItems.map(([title, description], index) => (
                <button
                  key={title}
                  className={`experience-row focus-ring ${activeExperience === index ? "is-open" : ""}`}
                  onClick={() =>
                    setActiveExperience(
                      activeExperience === index ? null : index
                    )
                  }
                >
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                  <span className="experience-arrow">
                    {activeExperience === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                  <div className="experience-description">{description}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section" aria-labelledby="voices-title">
          <div className="testimonial-inner container">
            <div className="testimonial-top">
              <SectionLabel number="08" light>
                Real learner voices
              </SectionLabel>
              {/* <Eyebrow light>Real learner voices</Eyebrow> */}
              <span id="voices-title">
                {String(testimonial + 1).padStart(2, "0")} / 04
              </span>
            </div>
            <div className="testimonial-quote">
              <div className="quote-mark">“</div>
              <blockquote>{testimonials[testimonial][0]}</blockquote>
              <p>{testimonials[testimonial][1]}</p>
            </div>
            <div className="testimonial-controls">
              <button
                className="round-control focus-ring"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={19} />
              </button>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={index === testimonial ? "active" : ""}
                  />
                ))}
              </div>
              <button
                className="round-control focus-ring"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </section>

        <section
          className="europe-section section-blush"
          aria-labelledby="europe-title"
        >
          <div className="europe-inner container">
            <div className="flex items-start justify-between">
              <SectionLabel number="09">
                Language / Mobility / Opportunity
              </SectionLabel>

              {/* <p>
                Learn a language. Find your way through the world with more of
                yourself intact.
              </p> */}
              <Image
                src={logoImage}
                className="site-logo-branding hidden md:block"
                alt="Glanzeuro Lingo logo"
              />
            </div>

            <h3 className="world-section-title pt-16 md:max-w-[45%]">
              Learn a language. Find your way through the world with more of
              yourself intact.
            </h3>

            <h2 id="europe-title">
              <span>France</span>
              <i>→</i>
              <span>Belgium</span>
              <i>→</i>
              <span>Netherlands</span>
              <i>→</i>
              <em>The world</em>
            </h2>
            <div className="route-line">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-orb" />
          <div className="contact-inner container">
            <SectionLabel number="10" light numberWhite>
              Begin here
            </SectionLabel>

            <h2>
              Your next language
              <br />
              <em>starts here.</em>
            </h2>
            <p>Ready to start learning French or Dutch?</p>
            <div className="contact-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
                target="_blank"
                className="contact-link"
              >
                Enquire now <ArrowUpRight size={18} />
              </a>
              <a href="tel:9345881643" className="contact-link">
                Call / WhatsApp <ArrowUpRight size={18} />
              </a>
            </div>
            {/* <a className="contact-phone" href="tel:9345881643">
              9345881643
            </a> */}
            {/* <form
              className="quick-enquiry"
              onSubmit={event => {
                event.preventDefault();
                setEnquirySent(true);
              }}
            >
              <label htmlFor="enquiry-email">
                Leave your email for a considered reply
              </label>
              <div>
                <input
                  id="enquiry-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <button type="submit" aria-label="Send enquiry">
                  <CircleArrowOutUpRight size={20} />
                </button>
              </div>
              {enquirySent && (
                <span className="form-success">
                  Thank you — we’ll be in touch.
                </span>
              )}
            </form> */}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-bottom container">
          <span>© 2026 Glanzeuro Lingo</span>
          <span className="footer-line" />
          <span>Learn another version of your world.</span>
        </div>
      </footer>

      {selectedLevel && (
        <div
          className="level-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="level-modal-title"
          onClick={() => setSelectedLevel(null)}
        >
          <div
            className="level-modal__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button focus-ring"
              onClick={() => setSelectedLevel(null)}
              aria-label="Close level details"
            >
              <X size={22} />
            </button>
            <Eyebrow>{selectedLevel.id} / Your journey</Eyebrow>
            <h2 id="level-modal-title">
              {selectedLevel.verb}
              <br />
              <em>{selectedLevel.id}</em>
            </h2>
            <p className="modal-lead">{selectedLevel.description}</p>
            <div className="modal-details">
              {[
                ["Speaking", selectedLevel.speaking],
                ["Listening", selectedLevel.listening],
                ["Reading", selectedLevel.reading],
                ["Writing", selectedLevel.writing],
              ].map(([label, text]) => (
                <div key={label}>
                  <span>{label}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
              target="_blank"
              onClick={() => setSelectedLevel(null)}
              className="dark-cta"
            >
              Enquire about {selectedLevel.id} <ArrowRight size={17} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export { Mark }
