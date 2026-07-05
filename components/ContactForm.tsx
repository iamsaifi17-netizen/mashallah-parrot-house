"use client";

import { useState } from "react";
import { Button } from "./Button";
import { whatsappLink } from "@/lib/utils";

// Since this is a static site with no backend, the form composes a WhatsApp
// message from the visitor's input — the fastest, most reliable way for a
// Karachi bird business to receive and respond to inquiries. Swap this for a
// form API route (e.g. Formspree, or your own /api/contact route) once you
// have a backend — see README "Connecting a real backend" section.
export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Assalam-o-Alaikum, my name is ${name} (${phone}).\n\n${message}`;
    window.open(whatsappLink(text), "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-charcoal">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-charcoal/10 px-4 py-2.5 text-sm focus:border-emerald-deep focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-charcoal">Phone Number</label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-charcoal/10 px-4 py-2.5 text-sm focus:border-emerald-deep focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-charcoal">Message</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-charcoal/10 px-4 py-2.5 text-sm focus:border-emerald-deep focus:outline-none"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full">
        Send Message via WhatsApp
      </Button>
      {sent && (
        <p className="text-center text-xs text-emerald-deep">
          Opening WhatsApp — thanks, {name || "friend"}! We&apos;ll reply shortly.
        </p>
      )}
    </form>
  );
}
