"use client";

import { useState } from "react";
import WorkGrid from "./WorkGrid";
import { styleNames, works } from "@/lib/site";

export default function PortfolioGallery() {
  const [picked, setPicked] = useState("All");
  const items = picked === "All" ? works : works.filter((w) => w.style === picked);
  return (
    <>
      <nav aria-label="Tattoo styles">
        <ul className="mono filters">
          {styleNames.map((name) => (
            <li key={name}>
              <button
                type="button"
                className={`filter${picked === name ? " filter-on" : ""}`}
                aria-pressed={picked === name}
                onClick={() => setPicked(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <WorkGrid items={items} />
    </>
  );
}
