"use client";

import { useState } from "react";
import { Trash2, Pencil, Lock, RotateCcw } from "lucide-react";
import { useParrotStore, useReviewStore } from "@/lib/adminStore";
import { Parrot } from "@/lib/data";
import { AdminParrotForm } from "@/components/AdminParrotForm";
import { Button } from "@/components/Button";
import { formatPKR } from "@/lib/utils";

// Simple client-side passcode gate. This is NOT real authentication — it only
// hides the dashboard from casual visitors on this device. Do not rely on it
// to protect sensitive data. See README for adding real login if you deploy
// a backend later.
const ADMIN_PASSCODE = "parrot2026";

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [passInput, setPassInput] = useState("");
  const [tab, setTab] = useState<"parrots" | "reviews">("parrots");

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col items-center justify-center px-4 text-center">
        <Lock className="h-8 w-8 text-emerald-deep" />
        <h1 className="mt-4 font-display text-2xl text-charcoal">Admin Access</h1>
        <p className="mt-2 text-sm text-charcoal/60">
          Enter the site passcode to manage parrots and reviews.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (passInput === ADMIN_PASSCODE) setUnlocked(true);
            else alert("Incorrect passcode.");
          }}
          className="mt-6 w-full space-y-3"
        >
          <input
            type="password"
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
            className="input"
            placeholder="Passcode"
          />
          <Button type="submit" variant="primary" className="w-full">
            Unlock
          </Button>
        </form>
        <p className="mt-4 text-xs text-charcoal/40">
          Default passcode: parrot2026 — change it in components/../app/admin/page.tsx before launch.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl text-charcoal">Admin Dashboard</h1>
        <div className="flex gap-2 rounded-full bg-beige-dark/50 p-1">
          {(["parrots", "reviews"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-sm capitalize transition-colors ${
                tab === t ? "bg-emerald-deep text-beige" : "text-charcoal/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-gold/10 p-4 text-sm text-charcoal/70">
        Changes here are saved in this browser only. They won&apos;t be visible to
        customers on other devices until you connect a shared database — see
        README.md, &quot;Making the admin dashboard live for everyone.&quot;
      </div>

      {tab === "parrots" ? <ParrotsAdmin /> : <ReviewsAdmin />}
    </div>
  );
}

function ParrotsAdmin() {
  const { items, addParrot, updateParrot, deleteParrot, resetToDefaults } = useParrotStore();
  const [editing, setEditing] = useState<Parrot | null>(null);

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl text-charcoal">
            Current Listings ({items.length})
          </h2>
          <button
            onClick={resetToDefaults}
            className="flex items-center gap-1 text-xs text-charcoal/50 hover:text-emerald-deep"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset to defaults
          </button>
        </div>
        <div className="space-y-3">
          {items.map((p) => (
            <div
              key={p.slug}
              className="flex items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-charcoal/5"
            >
              <div>
                <p className="font-medium text-charcoal">{p.name} <span className="text-charcoal/40">— {p.species}</span></p>
                <p className="text-xs text-charcoal/50">{formatPKR(p.price)} · {p.availability}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditing(p)} aria-label="Edit" className="rounded-full p-2 text-emerald-deep hover:bg-emerald-deep/10">
                  <Pencil className="h-4 w-4" />
                </button>
                <button onClick={() => deleteParrot(p.slug)} aria-label="Delete" className="rounded-full p-2 text-red-600 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5">
        <h2 className="mb-4 font-display text-xl text-charcoal">
          {editing ? `Edit ${editing.name}` : "Add New Parrot"}
        </h2>
        <AdminParrotForm
          key={editing?.slug ?? "new"}
          initial={editing ?? undefined}
          onSave={(p) => {
            if (editing) updateParrot(editing.slug, p);
            else addParrot(p);
            setEditing(null);
          }}
          onCancel={editing ? () => setEditing(null) : undefined}
        />
      </div>
    </div>
  );
}

function ReviewsAdmin() {
  const { items, addReview, deleteReview } = useReviewStore();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-3">
        {items.map((r, i) => (
          <div key={i} className="flex items-start justify-between gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-charcoal/5">
            <div>
              <p className="font-medium text-charcoal">{r.name} <span className="text-charcoal/40">· {r.rating}★</span></p>
              <p className="text-sm text-charcoal/60">{r.text}</p>
            </div>
            <button onClick={() => deleteReview(i)} aria-label="Delete review" className="rounded-full p-2 text-red-600 hover:bg-red-50">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5">
        <h2 className="mb-4 font-display text-xl text-charcoal">Add Review</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addReview({ name, location, rating, text });
            setName(""); setLocation(""); setText(""); setRating(5);
          }}
          className="space-y-3"
        >
          <input required placeholder="Customer name" value={name} onChange={(e) => setName(e.target.value)} className="input" />
          <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="input" />
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="input">
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} stars</option>)}
          </select>
          <textarea required placeholder="Review text" value={text} onChange={(e) => setText(e.target.value)} className="input" rows={3} />
          <Button type="submit" variant="primary" className="w-full">Add Review</Button>
        </form>
      </div>
    </div>
  );
}
