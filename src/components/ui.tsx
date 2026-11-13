import { Link } from "wouter"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import type { ReactNode } from "react"
import { whatsappLink } from "@/lib/siteData"

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "outline" | "light"
  size?: "md" | "sm"
  icon?: ReactNode | false
  className?: string
}

const isExternal = (href: string) =>
  /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#")

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: ButtonProps) {
  const cls = `btn btn--${variant} btn--${size} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon === false
        ? null
        : (icon ?? (
            <ArrowRight size={size === "sm" ? 15 : 17} aria-hidden="true" />
          ))}
    </>
  )
  if (isExternal(href)) {
    const newTab = href.startsWith("http")
    return (
      <a
        href={href}
        className={cls}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35M12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41" />
    </svg>
  )
}

export function WhatsAppButton({
  message,
  children = "WhatsApp Us",
  variant = "primary",
  size = "md",
  className = "",
}: {
  message?: string
  children?: ReactNode
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  className?: string
}) {
  return (
    <Button
      href={whatsappLink(message)}
      variant={variant}
      size={size}
      className={`btn--whatsapp ${className}`}
      icon={<WhatsAppIcon size={size === "sm" ? 15 : 18} />}
    >
      {children}
    </Button>
  )
}

export function CheckList({
  items,
  className = "",
}: {
  items: string[]
  className?: string
}) {
  return (
    <ul className={`checklist ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={17} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Section heading with the large faint numeral from the reference layout. */
export function SectionHead({
  number,
  title,
  intro,
  action,
  as: Tag = "h2",
  id,
}: {
  number?: string
  title: ReactNode
  intro?: ReactNode
  action?: ReactNode
  as?: "h1" | "h2"
  id?: string
}) {
  return (
    <div className="section-head">
      {number && (
        <span className="section-head__num" aria-hidden="true">
          {number}
        </span>
      )}
      <div className="section-head__text">
        <Tag id={id}>{title}</Tag>
        {intro && <p>{intro}</p>}
      </div>
      {action && <div className="section-head__action">{action}</div>}
    </div>
  )
}

export type Crumb = { label: string; href?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((c) => (
          <li key={c.label}>
            <ChevronRight size={13} aria-hidden="true" />
            {c.href ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHero({
  crumbs,
  title,
  lede,
  actions,
  art,
  badge,
  tone = "blush",
}: {
  crumbs: Crumb[]
  title: ReactNode
  lede: ReactNode
  actions?: ReactNode
  art?: ReactNode
  badge?: ReactNode
  tone?: "blush" | "white"
}) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="page-hero__grid container">
        <div className="page-hero__copy">
          <Breadcrumbs items={crumbs} />
          {badge}
          <h1>{title}</h1>
          <div className="page-hero__lede">{lede}</div>
          {actions && <div className="actions">{actions}</div>}
        </div>
        {art && <div className="page-hero__art">{art}</div>}
      </div>
    </section>
  )
}

export function LevelChips({
  levels,
  note,
}: {
  levels: string[]
  note?: string
}) {
  // if (!levels.length) return note ? <p className="level-note">{note}</p> : null
  return (
    <ul className="level-chips" aria-label="Levels offered">
      {levels.map((l) => (
        <li key={l}>{l}</li>
      ))}
    </ul>
  )
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            <span>{f.q}</span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function Notice({ children }: { children: ReactNode }) {
  return <p className="notice">{children}</p>
}
