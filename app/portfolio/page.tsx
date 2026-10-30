import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Tattoo Portfolio: Fine Line & Blackwork in Abuja | 7ink.co",
};

export default function Portfolio() {
  return (
    <section className="wrap" style={{ paddingTop: 72, paddingBottom: 112 }}>
      <p className="mono eyebrow">Portfolio</p>
      <h1 className="h2" style={{ marginBottom: 24 }}>Tattoos by Hope, Abuja</h1>
      <p className="lede" style={{ marginBottom: 40 }}>
        A selection of recent pieces from the studio in Karu. Every tattoo here was drawn for the person wearing it.
      </p>
      <PortfolioGallery />
      <div style={{ marginTop: 48 }}>
        <Link href="/book" className="btn btn-solid">Book your tattoo</Link>
      </div>
    </section>
  );
}
