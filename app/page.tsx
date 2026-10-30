import Image from "next/image";
import Link from "next/link";
import { portraitHome } from "@/lib/images";
import WorkGrid from "@/components/WorkGrid";
import { steps, works } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-main">
          <p className="mono eyebrow">Tattoo artist in Karu, Abuja</p>
          <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 168px)", lineHeight: 0.88 }}>
            Art you<br />carry <span className="accent">for life.</span>
          </h1>
          <p className="lede" style={{ margin: "32px 0 0" }}>
            Hope is a tattoo artist in Abuja creating custom tattoos at 7ink.co in Karu — drawn for you, placed with care,
            and made to age well on your skin. Clients come from across the FCT, including Nyanya, Mararaba, Wuse and Garki.
          </p>
          <div className="btns" style={{ marginTop: 40 }}>
            <Link href="/book" className="btn btn-solid">Book a consultation</Link>
            <Link href="/portfolio" className="btn">See the work</Link>
          </div>
        </div>
        <div className="ph-img hero-art">
          <Image src={portraitHome} alt="Hope tattooing at 7ink.co" fill priority sizes="(max-width: 700px) 100vw, 400px" />
        </div>
      </section>

      <div aria-hidden="true" className="marquee">
        <p>
          Fine line <span className="accent">✶</span> Blackwork <span className="accent">✶</span> Lettering{" "}
          <span className="accent">✶</span> Cover-ups <span className="accent">✶</span> Custom pieces{" "}
          <span className="accent">✶</span> Fine line <span className="accent">✶</span> Blackwork
        </p>
      </div>

      <section className="wrap sec">
        <div className="sec-head">
          <h2 className="h2">Selected work</h2>
          <Link href="/portfolio" className="mono" style={{ padding: "12px 0" }}>Full portfolio →</Link>
        </div>
        <WorkGrid items={works.slice(0, 6)} />
      </section>

      <section className="light">
        <div className="wrap light-in">
          <div style={{ flex: "1 1 320px" }}>
            <p className="mono" style={{ marginBottom: 16 }}>The artist</p>
            <h2 className="display" style={{ fontSize: "clamp(72px, 10vw, 140px)", lineHeight: 0.85 }}>Hope</h2>
          </div>
          <div className="light-body">
            <p style={{ marginBottom: 24 }}>
              Every piece at 7ink.co starts as a conversation. You bring the story; Hope turns it into a design that fits
              your body and your life.
            </p>
            <Link href="/about" className="mono" style={{ padding: "12px 0", display: "inline-block" }}>More about Hope →</Link>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <h2 className="h2" style={{ marginBottom: 48 }}>How booking works</h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="step">
              <p className="step-n">{s.n}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="btns" style={{ marginTop: 40 }}>
          <Link href="/book" className="btn btn-solid">Start your booking</Link>
          <a href="#" className="btn">Message on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
