"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Parrot } from "@/lib/data";
import { formatPKR } from "@/lib/utils";
import { BirdImage } from "./BirdImage";
import { cn } from "@/lib/utils";

const availabilityStyle: Record<Parrot["availability"], string> = {
  "In Stock": "bg-emerald-light/90 text-white",
  Booked: "bg-charcoal/80 text-beige",
  "Coming Soon": "bg-gold/90 text-charcoal",
};

export function ParrotCard({ parrot }: { parrot: Parrot }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <BirdImage
          src={parrot.images[0]}
          alt={parrot.name}
          label={parrot.species}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
            availabilityStyle[parrot.availability]
          )}
        >
          {parrot.availability}
        </span>
        <button
          onClick={() => setWishlisted((w) => !w)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow transition-transform hover:scale-110"
        >
          <Heart
            className="h-4 w-4"
            fill={wishlisted ? "#C9A24B" : "none"}
            stroke={wishlisted ? "#C9A24B" : "currentColor"}
          />
        </button>
      </div>

      <div className="p-5">
        <p className="font-body text-xs uppercase tracking-wide text-gold-dark">
          {parrot.species}
        </p>
        <h3 className="mt-1 font-display text-xl text-charcoal">{parrot.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-lg text-emerald-deep">
            {formatPKR(parrot.price)}
          </span>
          <span className="text-xs text-charcoal/50">{parrot.age}</span>
        </div>
        <Link
          href={`/shop/${parrot.slug}`}
          className="mt-4 block rounded-full border border-emerald-deep py-2 text-center text-sm font-medium text-emerald-deep transition-colors hover:bg-emerald-deep hover:text-beige"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
