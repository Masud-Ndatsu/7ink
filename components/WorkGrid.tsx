import type { Work } from "@/lib/site";

export default function WorkGrid({ items }: { items: Work[] }) {
  return (
    <div className="grid-cards">
      {items.map((w, i) => (
        <figure key={`${w.style}-${w.place}-${i}`} style={{ margin: 0 }}>
          <div className="ph ph-sq">[ Photo: {w.style} ]</div>
          <figcaption className="mono caption">
            <span>{w.style}</span>
            <span>{w.place}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
