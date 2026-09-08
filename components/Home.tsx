'use client'

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  Quote,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import dutchBooksImage from "../public/img/about.jpeg";
import dutchStudyImage from "../public/img/books.jpg";

import languageClassImage from "../public/img/learning2.jpg";

import logo from "../public/img/glanzeuro_logo.png";
import Image from "next/image";

const pink = "#FD80A8";
const gold = "#EDB45B";
const phone = "9345881643";
// const languageClassImage = "/manus-storage/language-class_b1e3b94e.jpg";
// const dutchBooksImage = "/manus-storage/dutch-books_6b594968.jpeg";
// const dutchStudyImage = "/manus-storage/dutch-study_cc491692.jpg";
const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
  "Hello Glanzeuro Lingo, I would like to enquire about French and Dutch language courses."
)}`;

const navItems = [
  ["About", "about"],
  ["Mentor", "mentor"],
  ["Training", "training"],
  ["Approach", "approach"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
];

const missionItems = [
  "To provide structured and interactive French and Dutch language training.",
  "To develop learners' speaking, listening, reading and writing skills.",
  "To make online language learning accessible, practical and engaging.",
  "To help learners build confidence through regular practice and communication.",
  "To support learners in achieving their personal, academic and professional language goals.",
];

const commonFeatures = [
  ["🗣️", "Speaking Practice"],
  ["👂", "Listening Practice"],
  ["📖", "Reading Skills"],
  ["✍️", "Writing Skills"],
  ["📚", "Grammar & Vocabulary"],
  ["💬", "Real-Life Conversations"],
  ["📝", "Practice Exercises & Assessments"],
  ["👩‍🏫", "Personal Guidance"],
  ["💻", "Live Online Interactive Classes"],
];

const courseBenefits = [
  "Live online classes",
  "Study materials included",
  "Weekly tests & assignments",
  "Certificate upon completion",
  "One-to-one speaking practice",
  "Flexible batch timings",
];

const testimonials = [
  {
    quote:
      "The French classes are very easy to understand and well structured. I especially enjoyed the speaking practice and practical conversations.",
    student: "French A1 Student",
  },
  {
    quote:
      "I joined Dutch A2 to improve my communication skills. The lessons are interactive, and the guidance helped me feel more confident while speaking Dutch.",
    student: "Dutch A2 Student",
  },
  {
    quote:
      "The explanations are simple and clear, especially for grammar and vocabulary. The regular practice helped me stay consistent with my learning.",
    student: "French A2 Student",
  },
  {
    quote:
      "I really liked the practical approach. Instead of only learning grammar, we practise how to communicate in real-life situations.",
    student: "French B1 Student",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" aria-label="Glanzeuro Lingo home">
      <Image src={logo} alt="Glanzeuro Lingo logo" className="w-50!" />
    </a>
  );
}

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span>{number} /</span>
      <span>{children}</span>
    </div>
  );
}

function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      className={`editorial-button ${secondary ? "editorial-button--secondary" : ""}`}
      href={href}
    >
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}

function Reveal({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(
          entry =>
            entry.isIntersecting && entry.target.classList.add("is-visible")
        ),
      { threshold: 0.12 }
    );
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const previousTestimonial = () =>
    setTestimonialIndex(
      current => (current - 1 + testimonials.length) % testimonials.length
    );
  const nextTestimonial = () =>
    setTestimonialIndex(current => (current + 1) % testimonials.length);

  return (
    <div className="site-shell" id="top">
      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#contact">
            Enquire now <ArrowUpRight size={14} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
        >
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={15} />
            </a>
          ))}
          <a
            className="mobile-nav__cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Enquire now <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-aside">
              <p className="eyebrow">GLANZEURO LINGO</p>
              <span className="hero-index">01 — 06</span>
              <div className="hero-side-media">
                <Image
                  src={dutchStudyImage}
                  alt="Student studying Dutch language materials"
                />
                <span>Study / speak / grow</span>
              </div>
            </div>
            <div className="hero-copy">
              <p className="hero-kicker">French + Dutch / Online classes</p>
              <h1 id="hero-title">
                Learn <em>•</em>
                <br />
                Speak <em>•</em>
                <br />
                <span>Succeed.</span>
              </h1>
              <p className="hero-subtitle">
                French &amp; Dutch Language Training
              </p>
              <div className="hero-actions">
                <ButtonLink href="#contact">Enquire now</ButtonLink>
                <ButtonLink href={whatsappUrl} secondary>
                  Call / WhatsApp for Course Details
                </ButtonLink>
              </div>
            </div>
            <div className="hero-art" aria-label="Language learning classroom">
              <Image
                className="hero-art__photo"
                src={languageClassImage}
                alt="Woman practicing a language in an online class"
              />
              <div className="hero-art__wash" />
              <div className="hero-art__grain" />
              <div className="hero-art__pink" />
              <div className="hero-art__gold" />
              <div className="hero-art__arch" />
              <div className="hero-art__type">
                parlez
                <br />
                parla
                <br />
                spreek
              </div>
              <div className="hero-art__caption">
                A language opens
                <br />a new room.
              </div>
              <div className="hero-art__number">01</div>
            </div>
          </div>
          <a
            className="scroll-cue"
            href="#about"
            aria-label="Scroll to About Us"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={16} />
          </a>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container about-layout">
            <Reveal className="about-heading">
              <SectionLabel number="01">About us</SectionLabel>
              <div className="about-media-stack">
                <figure className="about-media about-media--large">
                  <Image
                    src={dutchBooksImage}
                    alt="Dutch language books on a table"
                    loading="lazy"
                  />
                  <figcaption>
                    French / Dutch
                    <br />
                    language in practice
                  </figcaption>
                </figure>
                <figure className="about-media about-media--small">
                  <Image
                    src={dutchStudyImage}
                    alt="Learner studying Dutch notes and books"
                    loading="lazy"
                  />
                </figure>
                <p className="vertical-note">A practical language practice</p>
              </div>
            </Reveal>
            <Reveal className="about-copy">
              <p className="display-paragraph">
                Glanzeuro Lingo is a language training institute focused on
                helping learners develop{" "}
                <span className="accent-pink">practical</span> and confident
                communication skills in French and Dutch.
              </p>
              <div className="about-lower">
                <p>
                  We offer online language training designed for learners at
                  different levels, with a focus on speaking, listening, reading
                  and writing. Our classes are interactive and structured to
                  help learners use the language in real-life situations.
                </p>
                <p>
                  Whether you are learning a language for education, career
                  opportunities, travel, relocation, personal development or
                  communication, Glanzeuro Lingo aims to make language learning
                  simple, engaging and effective.
                </p>
              </div>
              <p className="signature-line">
                Learn <span>•</span> Speak <span>•</span> Succeed.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mentor-section section-pad" id="mentor">
          <div className="container mentor-layout">
            <Reveal className="mentor-portrait">
              <div className="portrait-frame">
                <div className="portrait-halo" />
                <div className="portrait-shape portrait-shape--head" />
                <div className="portrait-shape portrait-shape--body" />
                <div className="portrait-line portrait-line--one" />
                <div className="portrait-line portrait-line--two" />
                <span className="portrait-word">MENTOR</span>
                <span className="portrait-caption">
                  Praveena
                  <br />
                  Naresh
                </span>
              </div>
            </Reveal>
            <Reveal className="mentor-copy">
              <SectionLabel number="02">Mentor details</SectionLabel>
              <h2>
                Praveena
                <br />
                <span>Naresh</span>
              </h2>
              <p className="role-line">
                Founder &amp; Language Mentor – Glanzeuro Lingo
              </p>
              <div className="mentor-description">
                <p>
                  Praveena Naresh is the founder and language mentor at
                  Glanzeuro Lingo, with a focus on providing structured and
                  learner-friendly French and Dutch language training.
                </p>
                <p>
                  Her approach focuses on helping students build their language
                  skills step-by-step, with particular attention to speaking
                  confidence, practical communication and strong language
                  fundamentals.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="training-section" id="training">
          <div className="training-intro section-pad">
            <div className="container training-intro__inner">
              <Reveal>
                <SectionLabel number="05">Training</SectionLabel>
              </Reveal>
              <Reveal className="training-intro__copy">
                <p className="display-paragraph">
                  Two languages.
                  <br />
                  <span>One confident</span>
                  <br />
                  new you.
                </p>
                <p>
                  Structured online training for real-world communication, from
                  your first hello to your next opportunity.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="language-split">
            <Reveal className="language-panel language-panel--french">
              <div className="language-panel__top">
                <span>01</span>
                <span>FRANÇAIS</span>
              </div>
              <div className="language-panel__body">
                <p className="language-word">FRENCH</p>
                <h2>French Language Training</h2>
                <p className="language-description">
                  We offer online French language training for learners from
                  beginner to advanced levels.
                </p>
                <div className="levels" aria-label="French levels">
                  {["French A1", "French A2", "French B1", "French B2"].map(
                    level => (
                      <span key={level}>{level}</span>
                    )
                  )}
                </div>
                <div className="practice-list">
                  {[
                    "Speaking practice",
                    "Listening practice",
                    "Reading & writing",
                    "Vocabulary & grammar",
                    "Practical conversation",
                  ].map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="language-panel__arrow" size={22} />
            </Reveal>
            <Reveal className="language-panel language-panel--dutch">
              <div className="language-panel__top">
                <span>02</span>
                <span>NEDERLANDS</span>
              </div>
              <div className="language-panel__body">
                <p className="language-word">DUTCH</p>
                <h2>Dutch Language Training</h2>
                <p className="language-description">
                  We offer online Dutch language training with a focus on
                  building a strong foundation and practical communication
                  skills.
                </p>
                <div className="levels" aria-label="Dutch levels">
                  {["Dutch A1", "Dutch A2", "Dutch B1", "Dutch B2"].map(
                    level => (
                      <span key={level}>{level}</span>
                    )
                  )}
                </div>
                <div className="practice-list">
                  {[
                    "Speaking practice",
                    "Listening practice",
                    "Reading & writing",
                    "Vocabulary & grammar",
                    "Practical conversation",
                  ].map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="language-panel__arrow" size={22} />
            </Reveal>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container">
            <Reveal>
              <SectionLabel number="">Our learning approach</SectionLabel>
            </Reveal>
            <Reveal className="approach-list">
              {[
                "Live Classes",
                "Speaking Focused",
                "Interactive Learning",
                "Reading & Writing",
                "Listening Practice",
              ].map((item, index) => (
                <span key={item}>
                  <b>0{index + 1}</b>
                  {item}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="vision-section section-pad" id="vision">
          <div className="container vision-layout">
            <Reveal>
              <SectionLabel number="03" light>
                Vision
              </SectionLabel>
            </Reveal>
            <Reveal className="vision-copy">
              <p className="vision-lead">
                To become a trusted language-learning institute that empowers
                learners to communicate confidently in French and Dutch and
                opens doors to <span>global</span> education, career and
                personal opportunities.
              </p>
              <div className="vision-mark">
                GL
                <br />
                <span>LO</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mission-section section-pad" id="mission">
          <div className="container">
            <Reveal>
              <SectionLabel number="04">Mission</SectionLabel>
            </Reveal>
            <div className="mission-list">
              {missionItems.map((item, index) => (
                <Reveal key={item} className="mission-item">
                  <span className="mission-number">0{index + 1}</span>
                  <p>{item}</p>
                  <ArrowRight className="mission-arrow" size={18} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section section-pad" id="features">
          <div className="container">
            <div className="features-head">
              <Reveal>
                <SectionLabel number="">Common learning features</SectionLabel>
              </Reveal>
              <Reveal>
                <p>All courses include:</p>
              </Reveal>
            </div>
            <div className="features-grid">
              {commonFeatures.map(([icon, label], index) => (
                <Reveal
                  key={label}
                  className="feature-item"
                  style={
                    { "--delay": `${index * 45}ms` } as React.CSSProperties
                  }
                >
                  <span className="feature-icon">{icon}</span>
                  <span className="feature-number">0{index + 1}</span>
                  <h3>{label}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section section-pad">
          <div className="container benefits-layout">
            <Reveal>
              <SectionLabel number="">
                What you get with every course
              </SectionLabel>
            </Reveal>
            <div className="benefit-list">
              {courseBenefits.map((benefit, index) => (
                <Reveal key={benefit} className="benefit-item">
                  <span>0{index + 1}</span>
                  <p>{benefit}</p>
                  <ArrowUpRight size={17} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section section-pad" id="testimonials">
          <div className="container">
            <Reveal>
              <SectionLabel number="">testimonials</SectionLabel>
            </Reveal>
            <div className="testimonial-layout">
              <Reveal className="testimonial-aside">
                <Quote size={48} strokeWidth={1} />
                <span>
                  Words from the
                  <br />
                  learning room
                </span>
              </Reveal>
              <Reveal className="testimonial-main" key={testimonialIndex}>
                <p className="testimonial-quote">
                  {testimonials[testimonialIndex].quote}
                </p>
                <p className="testimonial-student">
                  — {testimonials[testimonialIndex].student}
                </p>
                <div className="testimonial-controls">
                  <span>
                    0{testimonialIndex + 1} / 0{testimonials.length}
                  </span>
                  <div>
                    <button
                      onClick={previousTestimonial}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-layout">
            <Reveal>
              <SectionLabel number="06">Contact details</SectionLabel>
            </Reveal>
            <Reveal className="contact-details">
              <a
                href={`tel:+91${phone}`}
                className="contact-row contact-row--primary"
              >
                <span>Phone / WhatsApp</span>
                <strong>{phone}</strong>
                <ArrowUpRight size={20} />
              </a>
              <a
                href="mailto:enquiry@glanzeurolingo.com"
                className="contact-row"
              >
                <span>Email</span>
                <strong>enquiry@glanzeurolingo.com</strong>
                <ArrowUpRight size={20} />
              </a>
              {/* <a href="https://glanzeurolingo.com" className="contact-row">
                <span>Website</span>
                <strong>glanzeurolingo.com</strong>
                <ArrowUpRight size={20} />
              </a> */}
              <div className="contact-row">
                <span>Training mode</span>
                <strong>Online Classes</strong>
              </div>
              <div className="contact-row">
                <span>Courses</span>
                <strong>
                  French <i>|</i> Dutch
                </strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="closing-section section-pad">
          <div className="container closing-layout">
            <Reveal>
              <p className="closing-kicker">Glanzeuro Lingo / Begin here</p>
            </Reveal>
            <Reveal className="closing-copy">
              <h2>
                Ready to start
                <br />
                learning <span>French</span>
                <br />
                or Dutch?
              </h2>
              <p>
                Contact Glanzeuro Lingo today to enquire about courses, levels,
                batches and class details.
              </p>
              <div className="closing-actions">
                <ButtonLink href="#contact">Enquire now</ButtonLink>
                <ButtonLink href={whatsappUrl} secondary>
                  Call / WhatsApp for Course Details
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Logo light />
            <p className="footer-tagline">
              Learn <span>•</span> Speak <span>•</span> Succeed.
            </p>
          </div>
          <div className="footer-meta">
            <p>
              French <i>|</i> Dutch
            </p>
            <p>Online Classes</p>
          </div>
          <div className="footer-contact">
            <a href={`tel:+91${phone}`}>Phone / WhatsApp: {phone}</a>
            <a href="mailto:enquiry@glanzeurolingo.com">
              enquiry@glanzeurolingo.com
            </a>
            <a href="https://glanzeurolingo.com">glanzeurolingo.com</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© Glanzeuro Lingo</span>
          <span>Learn • Speak • Succeed.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
