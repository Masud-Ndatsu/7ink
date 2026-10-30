import type { Metadata } from "next";
import BookForm from "@/components/BookForm";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Tattoo in Abuja: Prices & FAQs | 7ink.co",
};

export default function Book() {
  return (
    <>
      <section className="book">
        <div className="wrap book-in">
          <div style={{ flex: "1 1 340px" }}>
            <p className="mono eyebrow">Book a tattoo</p>
            <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 104px)", lineHeight: 0.88 }}>
              Tell me<br />your <span className="accent">idea.</span>
            </h1>
            <p className="lede" style={{ marginTop: 28, maxWidth: 400 }}>
              Share what you have in mind and Hope will get back to you to set up a consultation.
            </p>
            <p className="mono" style={{ marginTop: 32, lineHeight: 2, color: "var(--muted)" }}>
              Phone · {site.phone}<br />
              Instagram · {site.instagram}<br />
              Studio · {site.address}<br />
              Hours · {site.hours}
            </p>
          </div>
          <BookForm />
        </div>
      </section>

      <section className="wrap sec faqs">
        <h2 className="h2" style={{ flex: "1 1 320px" }}>Tattoo questions, answered</h2>
        <div style={{ flex: "999 1 520px", minWidth: 0 }}>
          {faqs.map((f) => (
            <div key={f.q} className="faq">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
