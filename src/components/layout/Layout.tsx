import { useEffect, useRef, useState, type ReactNode } from "react"
import { Link, useLocation } from "wouter"
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react"
import logo from "/img/glanzeuro_logo-440.webp"
import {
  business,
  mailHref,
  mainNav,
  telHref,
  whatsappLink,
  type NavItem,
} from "@/lib/siteData"
import { Button, WhatsAppButton, WhatsAppIcon } from "@/components/ui"

const isActive = (location: string, href: string) =>
  href === "/"
    ? location === "/"
    : location === href || location.startsWith(`${href}/`)

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`logo ${className}`}
      aria-label="Glanzeuro Lingo, home"
    >
      <img
        src={logo}
        alt="Glanzeuro Lingo: Learn, Speak, Succeed"
        width={440}
        height={202}
      />
    </Link>
  )
}

function Dropdown({ item, location }: { item: NavItem; location: string }) {
  // Remember where the panel was opened so it closes itself on navigation.
  const [openAt, setOpenAtState] = useState<string | null>(null)
  const open = openAt === location
  const setOpen = (next: boolean | ((o: boolean) => boolean)) =>
    setOpenAtState((cur) => {
      const was = cur === location
      return (typeof next === "function" ? next(was) : next) ? location : null
    })
  const ref = useRef<HTMLDivElement>(null)
  // While the pointer is over the item, a click on the chevron keeps it open
  // instead of toggling it shut; keyboard users still toggle with Enter/Space.
  const hovering = useRef(false)
  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpenAtState(null)
    }
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpenAtState(null)
    document.addEventListener("mousedown", onDoc)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDoc)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div
      className={`nav-dd ${open ? "is-open" : ""}`}
      ref={ref}
      onMouseEnter={() => {
        hovering.current = true
        setOpen(true)
      }}
      onMouseLeave={() => {
        hovering.current = false
        setOpen(false)
      }}
    >
      <Link
        href={item.href}
        className={`nav-link ${isActive(location, item.href) ? "is-active" : ""}`}
      >
        {item.label}
      </Link>
      <button
        type="button"
        className="nav-dd__toggle"
        aria-expanded={open}
        aria-label={`Show ${item.label} pages`}
        onClick={() => setOpen((o) => (hovering.current ? true : !o))}
      >
        <ChevronDown size={15} aria-hidden="true" />
      </button>
      <div className="nav-dd__panel">
        {item.children!.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={location === c.href ? "is-active" : ""}
          >
            <strong>{c.label}</strong>
            {c.note && <small>{c.note}</small>}
          </Link>
        ))}
        <Link href={item.href} className="nav-dd__all">
          All {item.label.toLowerCase()}
        </Link>
      </div>
    </div>
  )
}

function Header() {
  const [location] = useLocation()
  const [menuOpenAt, setMenuOpenAt] = useState<string | null>(null)
  const menuOpen = menuOpenAt === location
  const setMenuOpen = (next: boolean) => setMenuOpenAt(next ? location : null)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle("menu-locked", menuOpen)
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpenAt(null)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={`site-head ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-head__inner">
          <Logo />
          <div className="site-head__right">
            <div className="site-head__utility">
              <a href={telHref} className="util-link">
                <Phone size={14} aria-hidden="true" /> {business.phoneDisplay}
              </a>
              <a href={mailHref} className="util-link">
                <Mail size={14} aria-hidden="true" /> {business.email}
              </a>
              <Button href="/contact" size="sm">
                Enquire Now
              </Button>
              <WhatsAppButton size="sm" />
            </div>
            <nav className="site-nav" aria-label="Main">
              {mainNav.map((item) =>
                item.children ? (
                  <Dropdown key={item.href} item={item} location={location} />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive(location, item.href) ? "is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
          <div className="site-head__compact">
            <Button href="/contact" size="sm" className="hide-xs">
              Enquire Now
            </Button>
            <a
              href={whatsappLink()}
              className="icon-btn icon-btn--wa hide-xs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon size={20} />
            </a>
            <button
              type="button"
              className="icon-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        data-lenis-prevent
      >
        <div className="drawer__backdrop" onClick={() => setMenuOpen(false)} />
        <div
          className="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="drawer__top">
            <Logo className="logo--small" />
            <button
              type="button"
              className="icon-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="drawer__nav" aria-label="Mobile">
            {mainNav.map((item) =>
              item.children ? (
                <details key={item.href} open={isActive(location, item.href)}>
                  <summary
                    className={isActive(location, item.href) ? "is-active" : ""}
                  >
                    {item.label}
                    <ChevronDown size={18} aria-hidden="true" />
                  </summary>
                  <div>
                    <Link href={item.href}>All {item.label.toLowerCase()}</Link>
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={location === c.href ? "is-active" : ""}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(location, item.href) ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="drawer__foot">
            <Button href="/contact">Enquire Now</Button>
            <WhatsAppButton />
            <a href={telHref} className="util-link">
              <Phone size={15} aria-hidden="true" /> {business.phoneDisplay}
            </a>
            <a href={mailHref} className="util-link">
              <Mail size={15} aria-hidden="true" /> {business.email}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function Footer() {
  const groups = mainNav.filter((n) => n.children)
  return (
    <footer className="site-foot">
      <div className="site-foot__grid container">
        <div className="site-foot__brand">
          <img
            src={logo}
            alt="Glanzeuro Lingo"
            width={440}
            height={202}
            loading="lazy"
          />
          <p>
            Online language training, exam preparation, career services and
            study-abroad guidance from {business.location.split(",")[0]}, for
            learners everywhere.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.href}>
            <h2>
              <Link href={g.href}>{g.label}</Link>
            </h2>
            <ul>
              {g.children!.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2>Glanzeuro Lingo</h2>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/study-abroad">Study Abroad</Link>
            </li>
            <li>
              <Link href="/our-approach">Our Approach</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/glaf">GLAF audio library</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="site-foot__contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={telHref}>{business.phoneDisplay}</a>
            </li>
            <li>
              <a href={mailHref}>{business.email}</a>
            </li>
            <li>{business.location}</li>
          </ul>
        </div>
      </div>
      <div className="site-foot__legal container">
        <span>
          © {new Date().getFullYear()} {business.name}
        </span>
        <span>{business.tagline}</span>
      </div>
    </footer>
  )
}

/** Sticky Enquire / WhatsApp bar for phones and tablets. */
function ActionBar() {
  return (
    <div className="action-bar">
      <Button href="/contact" size="sm">
        Enquire Now
      </Button>
      <WhatsAppButton size="sm" />
    </div>
  )
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ActionBar />
    </div>
  )
}
