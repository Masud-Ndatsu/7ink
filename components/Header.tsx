"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const onBook = pathname === "/book";
  return (
    <header className="wrap header">
      <Link href="/" className="logo">
        7<span className="accent">ink</span>.co
      </Link>
      <nav aria-label="Main" className="mono nav">
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className={`navlink${pathname === n.href ? " accent" : ""}`}
            aria-current={pathname === n.href ? "page" : undefined}
          >
            {n.label}
          </Link>
        ))}
        <Link href="/book" className={`pill-sm${onBook ? " pill-sm-on" : ""}`} aria-current={onBook ? "page" : undefined}>
          Book a session
        </Link>
      </nav>
    </header>
  );
}
