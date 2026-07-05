"use client";

import { useState } from "react";
import { Parrot, categories } from "@/lib/data";
import { Button } from "./Button";

const emptyParrot: Parrot = {
  slug: "",
  name: "",
  species: "",
  category: categories[0].slug,
  price: 0,
  age: "",
  gender: "Unsexed",
  colour: "",
  health: "Excellent",
  vaccinated: true,
  feedingGuide: "",
  careInstructions: "",
  availability: "In Stock",
  images: ["/images/parrots/placeholder.jpg"],
  description: "",
};

export function AdminParrotForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Parrot;
  onSave: (p: Parrot) => void;
  onCancel?: () => void;
}) {
  const [form, setForm] = useState<Parrot>(initial ?? emptyParrot);

  function update<K extends keyof Parrot>(key: K, value: Parrot[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const slug =
      form.slug ||
      `${form.name}-${Date.now()}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    onSave({ ...form, slug });
    if (!initial) setForm(emptyParrot);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Name">
        <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="input" />
      </Field>
      <Field label="Species">
        <input required value={form.species} onChange={(e) => update("species", e.target.value)} className="input" />
      </Field>
      <Field label="Category">
        <select value={form.category} onChange={(e) => update("category", e.target.value)} className="input">
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
      </Field>
      <Field label="Price (PKR)">
        <input required type="number" value={form.price} onChange={(e) => update("price", Number(e.target.value))} className="input" />
      </Field>
      <Field label="Age">
        <input value={form.age} onChange={(e) => update("age", e.target.value)} className="input" />
      </Field>
      <Field label="Gender">
        <select value={form.gender} onChange={(e) => update("gender", e.target.value as Parrot["gender"])} className="input">
          <option>Male</option>
          <option>Female</option>
          <option>Pair</option>
          <option>Unsexed</option>
        </select>
      </Field>
      <Field label="Colour">
        <input value={form.colour} onChange={(e) => update("colour", e.target.value)} className="input" />
      </Field>
      <Field label="Availability">
        <select value={form.availability} onChange={(e) => update("availability", e.target.value as Parrot["availability"])} className="input">
          <option>In Stock</option>
          <option>Booked</option>
          <option>Coming Soon</option>
        </select>
      </Field>
      <Field label="Health Status" full>
        <input value={form.health} onChange={(e) => update("health", e.target.value)} className="input" />
      </Field>
      <Field label="Feeding Guide" full>
        <textarea value={form.feedingGuide} onChange={(e) => update("feedingGuide", e.target.value)} className="input" rows={2} />
      </Field>
      <Field label="Care Instructions" full>
        <textarea value={form.careInstructions} onChange={(e) => update("careInstructions", e.target.value)} className="input" rows={2} />
      </Field>
      <Field label="Description" full>
        <textarea required value={form.description} onChange={(e) => update("description", e.target.value)} className="input" rows={3} />
      </Field>
      <Field label="Image path (add file to /public/images/parrots/)" full>
        <input
          value={form.images[0]}
          onChange={(e) => update("images", [e.target.value, ...form.images.slice(1)])}
          className="input"
          placeholder="/images/parrots/my-bird.jpg"
        />
      </Field>

      <div className="flex gap-3 sm:col-span-2">
        <Button type="submit" variant="primary">
          {initial ? "Save Changes" : "Add Parrot"}
        </Button>
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1 block font-medium text-charcoal">{label}</span>
      {children}
    </label>
  );
}
