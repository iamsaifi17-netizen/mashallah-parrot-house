"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Parrot, categories } from "@/lib/data";
import { ParrotCard } from "./ParrotCard";
import { cn } from "@/lib/utils";

type Sort = "featured" | "price-asc" | "price-desc" | "newest";

export function ShopGrid({ parrots }: { parrots: Parrot[] }) {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "all");
  const [availability, setAvailability] = useState("all");
  const [sort, setSort] = useState<Sort>("featured");

  const filtered = useMemo(() => {
    let list = [...parrots];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.species.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (availability !== "all") {
      list = list.filter((p) => p.availability === availability);
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.reverse();
        break;
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return list;
  }, [parrots, query, category, availability, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-charcoal/5 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or species..."
          className="w-full rounded-full border border-charcoal/10 px-5 py-2.5 text-sm focus:border-emerald-deep focus:outline-none md:max-w-xs"
        />

        <div className="flex flex-wrap gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-full border border-charcoal/10 px-4 py-2.5 text-sm focus:border-emerald-deep focus:outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="rounded-full border border-charcoal/10 px-4 py-2.5 text-sm focus:border-emerald-deep focus:outline-none"
          >
            <option value="all">All Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Booked">Booked</option>
            <option value="Coming Soon">Coming Soon</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-charcoal/10 px-4 py-2.5 text-sm focus:border-emerald-deep focus:outline-none"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-charcoal/50">
        {filtered.length} {filtered.length === 1 ? "bird" : "birds"} found
      </p>

      <div
        className={cn(
          "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
          filtered.length === 0 && "hidden"
        )}
      >
        {filtered.map((p) => (
          <ParrotCard key={p.slug} parrot={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-charcoal/50">
          <p className="font-display text-lg">No birds match your search.</p>
          <p className="mt-1 text-sm">Try a different keyword or clear your filters.</p>
        </div>
      )}
    </div>
  );
}
