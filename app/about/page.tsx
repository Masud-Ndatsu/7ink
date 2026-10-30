import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Hope, Tattoo Artist in Karu, Abuja | 7ink.co",
};

export default function About() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-main">
          <p className="mono eyebrow">About the artist</p>
          <h1 className="display" style={{ fontSize: "clamp(96px, 16vw, 240px)", lineHeight: 0.82 }}>Hope</h1>
          <p className="lede" style={{ marginTop: 32 }}>Tattoo artist and founder of 7ink.co in Karu, Abuja.</p>
        </div>
        <div className="ph hero-art">[ Portrait of Hope ]</div>
      </section>

      <section className="light">
        <div className="wrap light-in">
          <div style={{ flex: "1 1 320px" }}>
            <p className="mono">Her story</p>
          </div>
          <div className="light-body">
            <p style={{ marginBottom: 24 }}>
              [A few lines in Hope&apos;s own voice — how she started tattooing, what she loves to draw, and what she wants
              every client to feel when they leave the chair.]
            </p>
            <p style={{ marginBottom: 40 }}>
              Every piece at 7ink.co starts as a conversation. You bring the story; Hope turns it into a design that fits
              your body and your life.
            </p>
            <dl className="mono facts">
              <div><dt>Styles</dt><dd>Fine line, blackwork, lettering, cover-ups, custom</dd></div>
              <div><dt>Studio</dt><dd>{site.address}</dd></div>
              <div><dt>By appointment</dt><dd>{site.hours}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <h2 className="h2" style={{ marginBottom: 32 }}>The studio</h2>
        <div className="grid-cards">
          {[0, 1, 2].map((i) => (
            <div key={i} className="ph ph-sq">[ Studio photo ]</div>
          ))}
        </div>
        <div className="btns" style={{ marginTop: 40 }}>
          <Link href="/portfolio" className="btn">See her work</Link>
          <Link href="/book" className="btn btn-solid">Book with Hope</Link>
        </div>
      </section>
    </>
  );
}
