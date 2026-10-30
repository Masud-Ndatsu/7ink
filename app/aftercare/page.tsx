import type { Metadata } from "next";
import Link from "next/link";
import { tips } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tattoo Aftercare: How to Heal a New Tattoo | 7ink.co",
};

export default function Aftercare() {
  return (
    <section className="wrap" style={{ paddingTop: 72, paddingBottom: 112 }}>
      <p className="mono eyebrow">Aftercare</p>
      <h1 className="h2" style={{ marginBottom: 24 }}>How to heal your new tattoo</h1>
      <p className="lede" style={{ marginBottom: 64, maxWidth: 600 }}>
        How you look after a tattoo in the first weeks decides how it looks for years. Follow these steps, and message
        Hope if anything worries you.
      </p>
      <div className="tips">
        {tips.map((t) => (
          <article key={t.n} className="tip">
            <p className="mono" style={{ marginBottom: 12, color: "var(--dim)" }}>{t.n}</p>
            <h2>{t.title}</h2>
            <p>{t.body}</p>
          </article>
        ))}
      </div>
      <div className="btns" style={{ marginTop: 64 }}>
        <Link href="/book" className="btn btn-solid">Book your next piece</Link>
      </div>
    </section>
  );
}
