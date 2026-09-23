import { useEffect, useState } from "react"
import { Link, Route, Switch, useLocation } from "wouter"
import {
  Video,
  Mic,
  LayoutGrid,
  ClipboardCheck,
  Globe,
  ChevronDown,
  Phone,
} from "lucide-react"
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  // Check,
  Menu,
  Plus,
  X,
} from "lucide-react"

import {
  CheckCircle2,
  MessageCircle,
  Ear,
  BookOpen,
  PenLine,
  GraduationCap,
  Users2,
  Sparkles,
} from "lucide-react"
import {
  frenchLevels,
  getCourse,
  images,
  phone,
  principles,
  seo,
  testimonials,
  whatWeDo,
  whatsappHref,
  dutchLevels,
} from "@/lib/siteData"
import "./index.css"

import logo from "../public/img/glanzeuro_logo.png"
import hero from "../public/img/hero.png"

const navItems = [
  ["Home", "/"],
  ["French", "/french"],
  ["Dutch", "/dutch"],
  ["About", "/about"],
] as const

function BrandLogo({
  compact = false,
}: {
  light?: boolean
  compact?: boolean
}) {
  return (
    <Link href="/" aria-label="Glanzeuro Lingo home">
      <img
        src={logo}
        alt="Glanzeuro Lingo logo"
        className={`${compact ? "w-36!" : "w-36! md:w-54!"}`}
      />
    </Link>
  )
}

function ArrowButton({
  href,
  children,
  dark = false,
  external = false,
}: {
  href: string
  children: React.ReactNode
  dark?: boolean
  external?: boolean
}) {
  return (
    <a
      className={`arrow-button ${dark ? "arrow-button--dark" : ""}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={1.8} />
    </a>
  )
}

function SectionLabel({
  number,
  children,
  light = false,
  numberLight = false,
}: {
  number?: string
  children: React.ReactNode
  light?: boolean
  numberLight?: boolean
}) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span className={`${numberLight && "text-white!"}`}>{number}</span>
      <span>{children}</span>
    </div>
  )
}

function SectionLink({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  const [, navigate] = useLocation()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <a href={`/#${id}`} onClick={handleClick}>
      {children}
    </a>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <>
      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <button
          className="menu-trigger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
        >
          <Menu size={20} />
          <span>Menu</span>
        </button>
        <div className="header-logo">
          <BrandLogo compact={scrolled} />
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={location === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/about" className={location === "/about" ? "active" : ""}>
            About
          </Link>
          <div className="nav-dropdown">
            <button
              type="button"
              className={`flex items-center gap-2 text-[14px]! ${
                location.startsWith("/french") || location.startsWith("/dutch")
                  ? "active"
                  : ""
              }`}
              aria-haspopup="true"
            >
              Courses{" "}
              <ChevronDown size={18} className="text-[var(--brand-pink)]" />
            </button>
            <div className="nav-dropdown__panel">
              <Link href="/french">
                <strong>French</strong>
                <small>A1 — B2 training</small>
                <ArrowUpRight size={15} />
              </Link>
              <Link href="/dutch">
                <strong>Dutch</strong>
                <small>A1 — B2 training</small>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <SectionLink id="approach">Our Approach</SectionLink>
          <SectionLink id="testimonials">Testimonials</SectionLink>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* <a
          className="header-enquire"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enroll now <ArrowUpRight size={16} />
        </a> */}

        <a
          className="header-enquire"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enroll now <ArrowUpRight size={16} />
        </a>

        <a className="header-enquire" href={`tel:+91${phone}`}>
          Call <Phone size={16} />
        </a>
      </header>
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-drawer__visual">
          <div className="menu-drawer__vertical">
            GLANZEURO LINGO / ONLINE LANGUAGE TRAINING
          </div>
          <div className="menu-drawer__word">
            GLANZEURO
            <br />
            <i>LINGO</i>
          </div>
          <span className="menu-drawer__caption">Learn • Speak • Succeed.</span>
        </div>
        <div className="menu-drawer__content">
          <div className="mobile-menu__top">
            <span className="menu-kicker">Menu / Explore</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <X size={26} />
            </button>
          </div>
          <nav className="mobile-menu__nav">
            {navItems.map(([label, href], index) => (
              <Link key={href} href={href} className="mobile-menu__link">
                <span>0{index + 1}</span>
                {label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </nav>
          <div className="mobile-menu__footer">
            <div>
              <a href={`tel:${phone}`}>
                {" "}
                <span>Call / WhatsApp</span>
              </a>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="menu-drawer__cta"
            >
              Enroll now <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        {/* <SectionLabel light>Glanzeuro Lingo</SectionLabel> */}
        <div className="footer-mark">
          <img src={logo} alt="Glanzeuro Lingo logo" className="w-160!" />
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="footer-nav">
          {navItems.slice(1).map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <a
          className="footer-phone"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <span>Call / WhatsApp</span>
          {/* <strong>{phone}</strong> */}
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="footer-legal container">
        <span>© {new Date().getFullYear()} Glanzeuro Lingo</span>
        <span>Online French & Dutch Training</span>
      </div>
    </footer>
  )
}

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Header />

      {children}

      <Footer />

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.87 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.986 2.894a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.887-9.885 9.887m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.479-8.413" />
        </svg>
      </a>
    </div>
  )
}

// function Hero() {
//   return (
//     <section className="hero section-pink">
//       <div className="hero-orbit" aria-hidden="true" />
//       <div className="hero-grid container">
//         <div className="hero-copy">
//           <SectionLabel number="01">Online language training</SectionLabel>
//           <h1>
//             Learn French
//             <br />
//             <em>&amp;</em> Dutch <span>Online.</span>
//           </h1>
//           <p className="hero-lede">Learn to Speak With Confidence.</p>
//           <p className="hero-description">
//             Structured and interactive online French and Dutch language training
//             designed to help you build real communication skills — from your
//             first lesson to confident conversations.
//           </p>
//           <div className="hero-actions">
//             <ArrowButton href="/contact">Enquire now</ArrowButton>
//             <a
//               className="text-link"
//               href={whatsappHref}
//               target="_blank"
//               rel="noreferrer"
//             >
//               Call / WhatsApp <ArrowUpRight size={16} />
//             </a>
//           </div>
//           <div className="hero-proof">
//             <span>Live Online Classes</span>
//             <span>Speaking Focused</span>
//             <span>Interactive Learning</span>
//             <span>Certificate on Completion</span>
//           </div>
//         </div>
//         <div className="hero-visual">
//           <div className="hero-gold-shape" aria-hidden="true" />
//           <img
//             src={images.hero}
//             alt="Learners practising language together around a table"
//             fetchPriority="high"
//           />
//           <div className="hero-caption">
//             <span>01 / 04</span>
//             <span>Language is a meeting place.</span>
//           </div>
//         </div>
//       </div>
//       <div className="hero-levels container">
//         <div>
//           <span>French</span>
//           <strong>A1</strong>
//           <i>—</i>
//           <strong>A2</strong>
//           <i>—</i>
//           <strong>B1</strong>
//           <i>—</i>
//           <strong>B2</strong>
//         </div>
//         <div>
//           <span>Dutch</span>
//           <strong>A1</strong>
//           <i>—</i>
//           <strong>A2</strong>
//           <i>—</i>
//           <strong>B1</strong>
//           <i>—</i>
//           <strong>B2</strong>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Hero() {
//   return (
//     <section className="hero section-pink">
//       <div className="hero-orbit" aria-hidden="true" />
//       <div className="hero-grid container">
//         <div className="hero-copy">
//           <SectionLabel number="01">Online language training</SectionLabel>
//           <h1>
//             Learn French
//             <br />
//             <em>&amp;</em> Dutch <span>Online.</span>
//           </h1>
//           <p className="hero-lede">Learn to Speak With Confidence.</p>
//           <p className="hero-description">
//             Structured and interactive online French and Dutch language training
//             designed to help you build real communication skills — from your
//             first lesson to confident conversations.
//           </p>
//           <div className="hero-actions">
//             <ArrowButton href="/contact">Enquire now</ArrowButton>
//             <a
//               className="text-link"
//               href={whatsappHref}
//               target="_blank"
//               rel="noreferrer"
//             >
//               Call / WhatsApp <ArrowUpRight size={16} />
//             </a>
//           </div>
//           <div className="hero-proof">
//             <span>Live Online Classes</span>
//             <span>Speaking Focused</span>
//             <span>Interactive Learning</span>
//             <span>Certificate on Completion</span>
//           </div>
//         </div>
//         <div className="hero-visual">
//           <div className="hero-gold-shape" aria-hidden="true" />
//           <img
//             src={images.hero}
//             alt="Learners practising language together around a table"
//             fetchPriority="high"
//           />
//           <div className="hero-caption">
//             <span>01 / 04</span>
//             <span>Language is a meeting place.</span>
//           </div>
//         </div>
//       </div>
//       <div className="hero-levels container">
//         <div>
//           <span>French</span>
//           <strong>A1</strong>
//           <i>—</i>
//           <strong>A2</strong>
//           <i>—</i>
//           <strong>B1</strong>
//           <i>—</i>
//           <strong>B2</strong>
//         </div>
//         <div>
//           <span>Dutch</span>
//           <strong>A1</strong>
//           <i>—</i>
//           <strong>A2</strong>
//           <i>—</i>
//           <strong>B1</strong>
//           <i>—</i>
//           <strong>B2</strong>
//         </div>
//       </div>
//     </section>
//   )
// }

function ReferenceHero() {
  return (
    <section className="reference-hero">
      <div className="reference-ribbon reference-ribbon--one" />
      <div className="reference-ribbon reference-ribbon--two" />
      <div className="reference-hero__inner container">
        <img
          src={hero}
          alt="Reference-inspired Glanzeuro Lingo hero artwork with a language learner and European line art"

          className="hero-highlight-image"
        />
        <div className="reference-hero__copy">
          <SectionLabel number="01">Online language training</SectionLabel>
          <h1>
            Learn Today,
            <br />
            <em>A Brighter</em>
            <br />
            Tomorrow.
          </h1>
          <p>
            French and Dutch language training designed to help you build
            confidence, communicate effectively and unlock global opportunities.
          </p>
          <div className="reference-actions">
            <ArrowButton href="#courses">Explore courses</ArrowButton>
            <a
              className="whatsapp-pill"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              ◌&nbsp; Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="reference-proof">
            <span>People</span>
            <i>|</i>
            <span>Languages</span>
            <i>|</i>
            <span>Opportunities</span>
          </div>
        </div>
        <div className="reference-hero__visual flex md:hidden">
          <div className="reference-orbit" />
          <img
            src={hero}
            alt="Reference-inspired Glanzeuro Lingo hero artwork with a language learner and European line art"
            fetchPriority="high"
            className=""
          />
          <div className="reference-script">
            More
            <br />
            than a language.
            <br />
            <b>
              A world of
              <br />
              opportunities.
            </b>
          </div>
        </div>
      </div>
      <CourseCards />
    </section>
  )
}

function CourseCards() {
  return (
    <div className="course-cards container" id="courses">
      <div className="reference-course-card">
        <img
          src={images.french}
          alt="Eiffel Tower representing French learning"
        />
        <div>
          <h3>French</h3>
          <p>From basics to confident communication</p>
          <div className="course-levels">
            {frenchLevels.map((item) => (
              <Link key={item.level} href={item.href}>
                {item.level}
              </Link>
            ))}
          </div>
          <ArrowButton href="/french">View French courses</ArrowButton>
        </div>
      </div>
      <div className="reference-course-card">
        <img src={images.dutch} alt="Dutch learning course image" />
        <div>
          <h3>Dutch</h3>
          <p>Learn. Practise. Progress.</p>
          <div className="course-levels">
            {dutchLevels.map((item) => (
              <Link key={item.level} href={item.href}>
                {item.level}
              </Link>
            ))}
          </div>
          <ArrowButton href="/dutch">View Dutch courses</ArrowButton>
        </div>
      </div>
    </div>
  )
}

function FeatureStrip() {
  const features = [
    [Video, "Live", "Online Classes"],
    [Mic, "Speaking", "Practice"],
    [LayoutGrid, "Structured", "Curriculum"],
    [ClipboardCheck, "Continuous", "Assessment"],
    [Globe, "Global", "Opportunities"],
  ]
  return (
    <section className="feature-strip" id="certificate">
      <div className="feature-strip__grid container">
        {features.map(([Icon, first, second]: any) => (
          <div className="feature-item" key={first}>
            <span>
              <Icon size={24} strokeWidth={1.75} />
            </span>
            <p>
              {first}
              <br />
              {second}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AboutPreview() {
  return (
    <section className="reference-about" id="approach">
      <div className="reference-about__grid container">
        <div>
          <SectionLabel number="02">About Glanzeuro Lingo</SectionLabel>
          <h2>
            A new language,
            <br />
            <em>a new you.</em>
          </h2>
          <p>
            Glanzeuro Lingo is a language training institute focused on
            structured, practical and learner-centred French and Dutch language
            education. We help learners build communication skills through
            speaking, listening, reading and writing, with training designed for
            real-world use.
          </p>
          <ArrowButton href="/about">Know more about us</ArrowButton>
        </div>
        <div className="reference-about__image">
          <img
            src={images.about}
            alt="Language learning books and a warm study table"
            loading="lazy"
          />
          <span>Learn • Speak • Succeed.</span>
        </div>
      </div>
      <div className="reference-stats container">
        <div>
          <strong>500+</strong>
          <span>Learners Trained</span>
        </div>
        <div>
          <strong>2</strong>
          <span>Languages</span>
        </div>
        <div>
          <strong>Global</strong>
          <span>Opportunities</span>
        </div>
        <div>
          <strong>4.8/5</strong>
          <span>Learner Satisfaction</span>
        </div>
      </div>
    </section>
  )
}

function ReferenceTestimonials() {
  return (
    <section className="reference-testimonials" id="testimonials">
      <div className="reference-testimonials__grid container">
        <div>
          <SectionLabel number="08">Learner voices</SectionLabel>
          <h2>
            What Our
            <br />
            <em>Learners Say</em>
          </h2>
        </div>
        <div className="reference-quote-wrap">
          <Testimonials />
        </div>
      </div>
    </section>
  )
}

function ReferenceCta() {
  return (
    <section className="reference-cta">
      <div className="reference-cta__inner container">
        <div>
          <h2>
            Ready to Start Your
            <br />
            <em>Language Journey?</em>
          </h2>
          <p>Learn. Speak. Succeed. with Glanzeuro Lingo.</p>
        </div>
        <div className="reference-actions">
          <ArrowButton href="/contact">Enquire now</ArrowButton>
          <a
            className="whatsapp-pill"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            ◌&nbsp; Chat on WhatsApp <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

function LearningTrack() {
  return (
    <section className="track-section section-white">
      <div className="container">
        <div className="section-intro section-intro--split">
          <div>
            <SectionLabel number="03">The learning journey</SectionLabel>
            <h2>
              Your Language
              <br />
              <em>Learning Journey,</em>
              <br />
              Structured.
            </h2>
          </div>
          <p>
            Progress is not a straight line. It is a practice — a rhythm of
            listening, trying, noticing and speaking again.
          </p>
        </div>
        <div className="track-list">
          {whatWeDo.map((item) => (
            <div className="track-item" key={item.title}>
              <div className="track-index">{item.number}</div>
              <div className="track-dot" />
              <div className="track-content">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              {/* {index < whatWeDo.length - 1 && (
                <MoveRight className="track-arrow" size={22} />
              )} */}
            </div>
          ))}
        </div>
        {/* <div className="track-close">
          From the first word
          <br />
          <span>to the conversation.</span>
        </div> */}
      </div>
    </section>
  )
}

function LevelRail({
  language,
  levels,
}: {
  language: "french" | "dutch"
  levels: typeof frenchLevels
}) {
  const [active, setActive] = useState(levels[0].level)
  const current = levels.find((item) => item.level === active) ?? levels[0]
  return (
    <div className={`level-rail level-rail--${language}`}>
      <div
        className="level-list"
        role="tablist"
        aria-label={`${language} levels`}
      >
        {levels.map((item) => (
          <Link
            href={item.href}
            key={item.level}
            className={`level-row ${active === item.level ? "level-row--active" : ""}`}
            onMouseEnter={() => setActive(item.level)}
            onFocus={() => setActive(item.level)}
          >
            <span className="level-row__level">{item.level}</span>
            <span className="level-row__name">{item.name}</span>
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </div>
      <div className="level-preview">
        <span>Current point</span>
        <strong>{current.level}</strong>
        <p>{current.copy}</p>
      </div>
    </div>
  )
}

function LanguageSection({ language }: { language: "french" | "dutch" }) {
  const french = language === "french"
  return (
    <section
      className={`language-section ${french ? "language-section--french" : "language-section--dutch"}`}
    >
      <div className="language-grid container">
        <div className="language-image">
          {!french && (
            <div className="vertical-word">DUTCH / DUTCH / DUTCH</div>
          )}
          <img
            src={french ? images.french : images.dutch}
            alt={
              french
                ? "Friends in a warm European conversation"
                : "Person studying language on a laptop"
            }
            loading="lazy"
          />
          <span className="image-note">
            {french
              ? "French / everyday confidence"
              : "Dutch / a practical rhythm"}
          </span>
        </div>
        <div className="language-copy">
          <SectionLabel number={french ? "04" : "05"}>
            {french ? "The French atlas" : "The Dutch grid"}
          </SectionLabel>
          <h2>{french ? "🇫🇷 Learn French Online" : "🇳🇱 Learn Dutch Online"}</h2>
          <p className="language-kicker">
            {french
              ? "Start Where You Are. Grow From There."
              : "Build a Strong Foundation. Communicate With Confidence."}
          </p>
          <p>
            {french
              ? "Whether you're a complete beginner or already have French knowledge, Glanzeuro Lingo offers structured online French training from A1 to B2."
              : "Glanzeuro Lingo offers online Dutch training from A1 to B2, with an emphasis on strong fundamentals and practical communication. "}
          </p>
          <LevelRail
            language={language}
            levels={french ? frenchLevels : dutchLevels}
          />
          <ArrowButton href={french ? "/french" : "/dutch"}>
            {french ? "Explore French Training" : "Explore Dutch Training"}
          </ArrowButton>
        </div>
      </div>
    </section>
  )
}

function Manifesto() {
  return (
    <section className="manifesto-section" id="approach">
      <div className="container">
        <SectionLabel light number="06">
          The Glanzeuro method
        </SectionLabel>
        <div className="manifesto-statement">
          <span>Don’t Just Learn.</span>
          <strong>
            Practise.
            <br />
            Communicate.
            <br />
            <em>Progress.</em>
          </strong>
        </div>
        <div className="principles-wall">
          {principles.map((item, index) => (
            <div key={item} className={`principle principle--${index + 1}`}>
              <span>0{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// function AudienceSection() {
//   return (
//     <section className="audience-section section-pink">
//       <div className="container">
//         <div className="section-intro section-intro--split">
//           <div>
//             <SectionLabel number="06">The goal constellation</SectionLabel>
//             <h2>
//               Built Around
//               <br />
//               <em>Your Goal.</em>
//             </h2>
//           </div>
//           <p>
//             There is no single right reason to learn a language. There is your
//             reason — and a way forward that meets it.
//           </p>
//         </div>

//         <div className="audience-grid">
//           {audiences.map((audience) => (
//             <div key={audience.title} className="audience-card">
//               <span className="audience-card__dot" aria-hidden="true" />
//               <h3>{audience.title}</h3>
//               <p>{audience.copy}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
function MentorSection() {
  return (
    <section className="mentor-section">
      <div className="mentor-watermark">
        GLANZEURO
        <br />
        <i>LINGO</i>
      </div>
      <section className="about-mentor">
        <div className="about-mentor__grid container">
          <div>
            <SectionLabel number="07" numberLight>
              Founder &amp; Language Mentor — Glanzeuro Lingo
            </SectionLabel>
            <h2>
              Praveena
              <br />
              <em>Naresh</em>
            </h2>
            {/* <p className="mentor-role">
              Founder &amp; Language Mentor — Glanzeuro Lingo
            </p> */}
          </div>
          <div>
            <p>
              Praveena Naresh is the Founder and Language Mentor at Glanzeuro
              Lingo, specialising in structured French and Dutch language
              training. Her approach combines language fundamentals, practical
              communication, speaking practice and continuous assessment to help
              learners progress with confidence.
            </p>
            <span className="about-signature">Learn • Speak • Succeed.</span>
          </div>
        </div>
      </section>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]
  const move = (direction: number) =>
    setActive(
      (index) => (index + direction + testimonials.length) % testimonials.length
    )
  return (
    <section className="quotes-section section-white" id="testimonials">
      <div className="container">
        <div className="section-intro section-intro--split">
          <div>
            <SectionLabel number="08">Learner voices</SectionLabel>
            <h2>
              What Our
              <br />
              <em>Learners Say</em>
            </h2>
          </div>
          <p>
            Five dummy voices for the new slider direction. Replace these with
            approved learner testimonials before launch.
          </p>
        </div>
        <div
          className="quote-slider"
          aria-roledescription="carousel"
          aria-label="Learner testimonials"
        >
          <div className="quote-slider__top">
            <span>
              0{active + 1} / 0{testimonials.length}
            </span>
            <div className="quote-slider__controls">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="quote-slide" key={active}>
            <span className="quote-mark">“</span>
            <blockquote>{current.quote}</blockquote>
            <figcaption className="pt-4">
              <strong>{current.name}</strong>
              <span>{current.course}</span>
            </figcaption>
          </div>
          <div
            className="quote-slider__dots"
            role="tablist"
            aria-label="Choose testimonial"
          >
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.name}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-selected={index === active}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// function GuidanceForm() {
//   const [answers, setAnswers] = useState({ language: "", level: "", goal: "" })
//   const steps = [
//     ["language", "Which language do you want to learn?", ["French", "Dutch"]],
//     [
//       "level",
//       "What is your current level?",
//       ["Beginner", "A1", "A2", "B1", "B2", "Not Sure"],
//     ],
//     [
//       "goal",
//       "What is your goal?",
//       ["Study", "Career", "Relocation", "Travel", "Personal"],
//     ],
//   ] as const
//   return (
//     <section className="guidance-section section-pink" id="guidance">
//       <div className="guidance-grid container">
//         <div className="guidance-intro">
//           <SectionLabel number="09">The language match</SectionLabel>
//           <h2>
//             Not Sure Which
//             <br />
//             Course or Level
//             <br />
//             <em>Is Right for You?</em>
//           </h2>
//           <p>
//             Don’t worry. Start with three small choices and we’ll point you in
//             the right direction.
//           </p>
//           <a
//             className="guidance-phone"
//             href={whatsappHref}
//             target="_blank"
//             rel="noreferrer"
//           >
//             <span>Call / WhatsApp</span>
//             {/* <strong>{phone}</strong> */}
//           </a>
//         </div>
//         <div className="guidance-panel">
//           <div className="progress-line">
//             <span
//               style={{
//                 width: `${(Object.values(answers).filter(Boolean).length / 3) * 100}%`,
//               }}
//             />
//           </div>
//           {steps.map(([key, label, options], index) => (
//             <fieldset key={key} className="guidance-step">
//               <legend>
//                 <span>0{index + 1}</span>
//                 {label}
//               </legend>
//               <div className="option-grid">
//                 {options.map((option) => (
//                   <label
//                     key={option}
//                     className={`option ${answers[key] === option ? "option--selected" : ""}`}
//                   >
//                     <input
//                       type="radio"
//                       name={key}
//                       value={option}
//                       checked={answers[key] === option}
//                       onChange={() =>
//                         setAnswers((current) => ({ ...current, [key]: option }))
//                       }
//                     />
//                     <span>
//                       {answers[key] === option && <Check size={15} />}
//                       {option}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </fieldset>
//           ))}
//           <button
//             className="submit-button"
//             type="button"
//             onClick={() =>
//               window.open(whatsappHref, "_blank", "noopener,noreferrer")
//             }
//           >
//             Get Course Guidance <ArrowUpRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

function Home() {
  useEffect(() => {
    document.title = seo.title
  }, [])
  return (
    <PageFrame>
      <main>
        <ReferenceHero />
        <FeatureStrip />
        <AboutPreview />
        <LearningTrack />
        <LanguageSection language="french" />
        <LanguageSection language="dutch" />
        <Manifesto />
        {/* <AudienceSection /> */}
        <MentorSection />
        <ReferenceTestimonials />
        {/* <Testimonials /> */}
        <ReferenceCta />
      </main>
    </PageFrame>
  )
}

function HubPage({ language }: { language: "french" | "dutch" }) {
  const french = language === "french"
  const levels = french ? frenchLevels : dutchLevels
  return (
    <PageFrame>
      <main>
        <section
          className={`hub-hero ${french ? "hub-hero--french" : "hub-hero--dutch"}`}
        >
          <div className="hub-hero__grid container">
            <div>
              <SectionLabel number={french ? "03" : "04"}>
                Language map
              </SectionLabel>
              <h1>
                {french ? "French" : "Dutch"}
                <br />
                <em>
                  Language
                  <br />
                  Training
                </em>
              </h1>
              <p>
                {french
                  ? "Whether you're a complete beginner or already have French knowledge, Glanzeuro Lingo offers structured online French training from A1 to B2."
                  : "Glanzeuro Lingo offers online Dutch training from A1 to B2, with an emphasis on strong fundamentals and practical communication. "}
              </p>
            </div>
            <div className="hub-hero__image">
              <img
                src={french ? images.french : images.dutch}
                alt={
                  french
                    ? "French learning conversation"
                    : "Dutch language learning on a laptop"
                }
              />
              <span>{french ? "01 / French atlas" : "02 / Dutch grid"}</span>
            </div>
          </div>
        </section>
        <section className="hub-levels">
          <div className="container">
            <SectionLabel>Choose your level</SectionLabel>
            <div className="hub-level-grid">
              {levels.map((item, index) => (
                <Link href={item.href} className="hub-level" key={item.level}>
                  <span className="hub-level__number">0{index + 1}</span>
                  <strong>{item.level}</strong>
                  <span>{item.name}</span>
                  <ArrowUpRight size={20} />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="hub-note">
          <div className="container">
            <span>Learning, as a progression.</span>
            <h2>
              Start where you are.
              <br />
              <em>Grow from there.</em>
            </h2>
            <ArrowButton href="/contact">Get Course Guidance</ArrowButton>
          </div>
        </section>
      </main>
    </PageFrame>
  )
}

// Maps each section title to a fitting icon. Falls back to CheckCircle2 for anything unmatched.
function getSectionIcon(title: string) {
  const key = title.toLowerCase()
  if (key.includes("speak")) return MessageCircle
  if (key.includes("listen")) return Ear
  if (key.includes("read")) return BookOpen
  if (key.includes("writ")) return PenLine
  if (key.includes("grammar") || key.includes("vocab")) return GraduationCap
  if (key.includes("practical") || key.includes("communication")) return Users2
  if (key.includes("additional") || key.includes("preparation")) return Sparkles
  return CheckCircle2
}

function CoursePage({
  language,
  level,
}: {
  language: "french" | "dutch"
  level: string
}) {
  const course = getCourse(language, level)
  if (!course) return <NotFound />
  const [open, setOpen] = useState(course.sections[0]?.title)
  return (
    <PageFrame>
      <main
        className={`course-page course-page--${language} course-page--${course.level.toLowerCase()}`}
      >
        <section className="course-hero">
          <div className="course-hero__grid container">
            <div>
              <Link href={`/${language}`} className="back-link">
                <ArrowDownRight size={16} /> Back to {language} training
              </Link>
              <SectionLabel
                number={
                  course.level === "A1"
                    ? "01"
                    : course.level === "A2"
                      ? "02"
                      : course.level === "B1"
                        ? "03"
                        : "04"
                }
              >
                {language} / level {course.level}
              </SectionLabel>
              <h1>{course.title}</h1>
              <p>{course.special ?? course.intro}</p>
              <div className="course-cta-row">
                <ArrowButton href="#course-sections">
                  View Course Details
                </ArrowButton>
                <a
                  className="text-link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdSA9UDQjixjpAWvddNkj-kZt3c8e1SfkQlEvHLgcbj8yIg0g/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll now <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="course-symbol">
              {course.level}
              <span>{course.descriptor}</span>
            </div>
          </div>
        </section>
        <section className="course-body" id="course-sections">
          <div className="course-layout container">
            <aside className="course-rail">
              <span>{language}</span>
              {["A1", "A2", "B1", "B2"].map((item) => (
                <Link
                  key={item}
                  href={`/${language}/${item.toLowerCase()}`}
                  className={item === course.level ? "active" : ""}
                >
                  {item}
                </Link>
              ))}
            </aside>
            <div className="course-content">
              <div className="course-content__intro">
                <SectionLabel>Course structure</SectionLabel>
                <h2>
                  {course.level} / {course.descriptor}
                </h2>
                <p>{course.intro}</p>
              </div>
              {course.sections.map((section, index) => {
                const Icon = getSectionIcon(section.title)
                return (
                  <div
                    className={`course-section ${open === section.title ? "course-section--open" : ""}`}
                    key={`${section.title}-${index}`}
                  >
                    <button
                      onClick={() =>
                        setOpen(open === section.title ? "" : section.title)
                      }
                      aria-expanded={open === section.title}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{section.title}</strong>
                      <Plus size={21} />
                    </button>
                    <div className="course-section__body">
                      <ul className="flex flex-col gap-3 pt-2 pb-8 pl-4 md:pl-16">
                        {section.bullets.map((bullet, bIndex) => (
                          <li
                            key={bIndex}
                            className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                          >
                            <Icon
                              size={16}
                              className="mt-0.5 shrink-0 text-[var(--brand-pink)]"
                            />
                            <span className="text-base font-medium">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
              <div className="course-footer-cta">
                <p>Ready to find your next step?</p>
                <ArrowButton href="/contact">Enquire now</ArrowButton>
                <a
                  className="text-link"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  )
}

function About() {
  return (
    <PageFrame>
      <main>
        <section className="about-hero">
          <div className="about-hero__grid container">
            <div>
              <SectionLabel number="01">About the brand</SectionLabel>
              <h1>
                About
                <br />
                <em>Glanzeuro</em>
                <br />
                Lingo
              </h1>
            </div>
            <div className="about-hero__text">
              <p>
                Glanzeuro Lingo is a language training institute focused on
                helping learners develop practical and confident communication
                skills in French and Dutch.
              </p>
              <h4 className="mt-6 text-lg leading-relaxed text-neutral-700">
                We offer online language training designed for learners at
                different levels, with interactive and structured classes that
                help learners use the language in real-life situations. Our
                training can support learners pursuing education, career
                opportunities, travel, relocation, personal development or
                communication goals.
              </h4>
            </div>
          </div>
          <div className="about-photo">
            <img
              src={images.about}
              alt="Learners sharing a language-learning moment"
              loading="lazy"
            />
          </div>
        </section>
        <section className="about-mentor">
          <div className="about-mentor__grid container">
            <div>
              <SectionLabel number="02" numberLight>
                 Founder &amp; Language Mentor — Glanzeuro Lingo
              </SectionLabel>
              <h2>
                Praveena
                <br />
                <em>Naresh</em>
              </h2>
              {/* <p className="mentor-role">
                Founder &amp; Language Mentor — Glanzeuro Lingo
              </p> */}
            </div>
            <div>
              <p>
                Praveena Naresh is the Founder and Language Mentor at Glanzeuro
                Lingo, specialising in structured French and Dutch language
                training. Her approach combines language fundamentals, practical
                communication, speaking practice and continuous assessment to
                help learners progress with confidence.
              </p>
              <span className="about-signature">Learn • Speak • Succeed.</span>
            </div>
          </div>
        </section>
        <section className="vision-section">
          <div className="container">
            <SectionLabel number="03" numberLight>
              The vision
            </SectionLabel>
            <h2>Vision</h2>
            <p>
              To become a trusted language-learning institute that empowers
              learners to communicate confidently in French and Dutch and opens
              doors to global education, career and personal opportunities.
            </p>
          </div>
        </section>
        <section className="mission-section">
          <div className="container">
            <SectionLabel number="04" numberLight>
              The mission
            </SectionLabel>
            <div className="mission-heading">
              <h2>Mission</h2>
            </div>
            <div className="mission-list">
              {[
                "To provide structured and interactive French and Dutch language training.",
                "To develop learners' speaking, listening, reading and writing skills.",
                "To make online language learning accessible, practical and engaging.",
                "To help learners build confidence through regular practice and communication.",
                "To support learners in achieving their personal, academic and professional language goals.",
              ].map((number, index) => (
                <div key={index}>
                  <span>0{index + 1}</span>
                  <p>{number}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  )
}

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "French",
    message: "",
  })
  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }))
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = `General enquiry from ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\nMessage: ${form.message}`
    setSubmitted(true)
    window.open(
      `${whatsappHref}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    )
  }
  return (
    <section className="enquiry-section">
      <div className="enquiry-grid container">
        <div className="enquiry-intro">
          <SectionLabel number="02">General enquiry</SectionLabel>
          <h2>
            Let’s start
            <br />
            <em>a conversation.</em>
          </h2>
          <p>
            Tell us a little about what you want to learn. We’ll help you find
            the right language, level and next step.
          </p>
          <a className="enquiry-contact" href={`tel:${phone}`}>
            <span>Prefer to talk?</span>
            <strong>{phone}</strong>
          </a>
        </div>
        <form className="enquiry-form" onSubmit={submit}>
          <div className="enquiry-form__row">
            <label>
              Full name
              <input
                required
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Your name"
              />
            </label>
            <label>
              Email address
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <div className="enquiry-form__row">
            <label>
              Phone / WhatsApp
              <input
                required
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                placeholder="Your number"
              />
            </label>
            <label>
              Interested in
              <select
                value={form.interest}
                onChange={(event) => update("interest", event.target.value)}
              >
                <option>French</option>
                <option>Dutch</option>
                <option>Not sure yet</option>
                <option>General information</option>
              </select>
            </label>
          </div>
          <label>
            How can we help?
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              placeholder="Tell us about your goals, preferred timing or any questions..."
            />
          </label>
          <button className="submit-button" type="submit">
            {submitted ? "Opening WhatsApp..." : "Send enquiry"}
            <ArrowUpRight size={18} />
          </button>
          <small>
            Your enquiry opens in WhatsApp so our team can reply directly.
          </small>
        </form>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <PageFrame>
      <main>
        <section className="contact-hero">
          <div className="container">
            <SectionLabel number="01">Decision desk</SectionLabel>
            <h1>
              Find the language
              <br />
              <em>that meets you.</em>
            </h1>
            <p>Not sure which course or level is right for you?</p>
          </div>
        </section>
        <EnquiryForm />
        {/* <GuidanceForm /> */}
      </main>
    </PageFrame>
  )
}

function NotFound() {
  return (
    <PageFrame>
      <main className="not-found">
        <SectionLabel>404</SectionLabel>
        <h1>Page not found.</h1>
        <ArrowButton href="/">Back home</ArrowButton>
      </main>
    </PageFrame>
  )
}

function ScrollToTop() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      <Route path="/french" component={() => <HubPage language="french" />} />
      <Route path="/dutch" component={() => <HubPage language="dutch" />} />

      <Route path="/french/:level">
        {(params) => <CoursePage language="french" level={params.level} />}
      </Route>

      <Route path="/dutch/:level">
        {(params) => <CoursePage language="dutch" level={params.level} />}
      </Route>

      <Route component={NotFound} />
    </Switch>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  )
}
