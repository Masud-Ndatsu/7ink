import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <p aria-hidden="true" className="footer-mark">7ink.co</p>
        <div className="mono footer-info">
          <p>7ink.co · Tattoo studio</p>
          <p>{site.address}</p>
          <p className="footer-links">
            <a href={site.instagramUrl}>Instagram</a>
            <a href="#">WhatsApp</a>
            <Link href="/book">Book</Link>
          </p>
          <p>© {new Date().getFullYear()} 7ink.co</p>
        </div>
      </div>
    </footer>
  );
}
