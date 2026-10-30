import Image from "next/image";
import type { Work } from "@/lib/site";

export default function WorkGrid({ items }: { items: Work[] }) {
  return (
    <div className="grid-cards">
      {items.map((w, i) => (
        <figure key={`${w.style}-${w.place}-${i}`} style={{ margin: 0 }}>
          {w.src ? (
            <div className="ph-img">
              <Image src={w.src} alt={`${w.style} tattoo on ${w.place.toLowerCase()}`} fill sizes="(max-width: 600px) 100vw, 400px" />
            </div>
          ) : (
            <div className="ph ph-sq">[ Photo: {w.style} ]</div>
          )}
          <figcaption className="mono caption">
            <span>{w.style}</span>
            <span>{w.place}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
