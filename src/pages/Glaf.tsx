import { Headphones, QrCode } from "lucide-react"
import { PageFrame } from "@/components/layout/Layout"
import { Breadcrumbs } from "@/components/ui"
import { usePageMeta } from "@/lib/seo"

const glafAudioItems = Array.from({ length: 25 }, (_, index) => {
  const number = index + 1
  return {
    number: String(number).padStart(2, "0"),
    title: `GLAF Audio ${number}`,
    label:
      index < 10
        ? "Starter listening"
        : index < 20
          ? "Practice session"
          : "Confidence builder",
    file: `/audio/GL Fr Audio ${number}.mp3`,
    qr: `/qr/GLAB ${number}.png`,
  }
})

export default function GlafPage() {
  usePageMeta({
    title: "GLAF: Glanzeuro Language Audio Files | Glanzeuro Lingo",
    description:
      "Glanzeuro Language Audio Files: 25 French listening tracks for guided practice. Play online or scan a QR code to listen on your phone.",
    path: "/glaf",
  })
  return (
    <PageFrame>
      <div className="glaf-page">
        <section className="glaf-hero">
          <div className="glaf-hero__orb glaf-hero__orb--one" />
          <div className="glaf-hero__orb glaf-hero__orb--two" />
          <div className="glaf-hero__grid container">
            <div>
              <Breadcrumbs items={[{ label: "GLAF audio library" }]} />
              <h1>
                Listen.
                <br />
                <em>Learn.</em>
                <br />
                Level up.
              </h1>
              <p>
                GLAF is your pocket library for guided language practice. Scan
                any QR code to open the audio file on your phone and keep
                learning wherever you are.
              </p>
              <div className="glaf-hero__meta">
                <span>
                  <Headphones size={17} />
                  25 audio tracks
                </span>
              </div>
            </div>
            <div className="glaf-hero__mark">
              <span>GLAF</span>
              <small>
                Glanzeuro
                <br />
                Language
                <br />
                Audio Files
              </small>
            </div>
          </div>
        </section>
        <section className="glaf-library">
          <div className="container">
            <div className="glaf-library__heading">
              <h2>
                Pick a track.
                <br />
                <em>Press play.</em>
              </h2>
              <p>
                Play any track here, or scan its QR code to listen on your
                phone.
              </p>
            </div>
            <div className="glaf-grid">
              {glafAudioItems.map((item) => (
                <article className="glaf-card" key={item.number}>
                  <div className="glaf-card__top">
                    <span className="glaf-card__number">{item.number}</span>
                    <span className="glaf-card__label">{item.label}</span>
                  </div>
                  <div className="glaf-card__title">
                    <Headphones size={19} />
                    <h3>{item.title}</h3>
                  </div>
                  <audio
                    controls
                    controlsList="nodownload noplaybackrate"
                    preload="none"
                  >
                    <source src={item.file} type="audio/mpeg" />
                    Your browser does not support audio playback.
                  </audio>
                  <div className="glaf-card__bottom">
                    <div className="glaf-qr">
                      <img
                        src={item.qr}
                        alt={`QR code for ${item.title}`}
                        loading="lazy"
                      />
                      <span>
                        <QrCode size={13} /> Scan to listen
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  )
}
