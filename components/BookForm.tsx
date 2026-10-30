"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function BookForm() {
  const [sent, setSent] = useState(false);

  function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Hi Hope, I'd like to book a tattoo.",
      `Name: ${f.get("name")}`,
      `Placement: ${f.get("placement")}`,
      `Size: ${f.get("size")}`,
      `Idea: ${f.get("idea")}`,
    ].join("\n");
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={send}>
      <label className="fld mono">
        Your name
        <input className="inp" type="text" name="name" required />
      </label>
      <label className="fld mono">
        Placement
        <input className="inp" type="text" name="placement" placeholder="Forearm, ankle, back…" />
      </label>
      <label className="fld mono">
        Approximate size
        <select className="inp" name="size">
          <option>Small (palm-size or less)</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="fld mono full">
        Your idea
        <textarea className="inp" name="idea" rows={5} style={{ resize: "vertical" }} />
      </label>
      <div className="full">
        <button type="submit" className="btn-send">Send on WhatsApp</button>
        {sent && (
          <p role="status" style={{ margin: "16px 0 0", color: "var(--muted)" }}>
            WhatsApp should have opened with your message. Just hit send there.
          </p>
        )}
      </div>
    </form>
  );
}
