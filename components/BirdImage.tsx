"use client";

import { useState } from "react";
import Image from "next/image";
import { Bird } from "lucide-react";
import { cn } from "@/lib/utils";

// Renders a real photo if it exists at the given src, and gracefully falls back
// to an elegant on-brand placeholder if it doesn't (e.g. before the owner has
// uploaded real bird photography). This keeps the site launch-ready on day one
// and makes swapping in real photos later a simple drag-and-drop — see README.
export function BirdImage({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-emerald-deep via-emerald to-forest text-beige",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <Bird className="h-10 w-10 text-gold-light" strokeWidth={1.5} />
        {label && (
          <span className="font-display text-sm tracking-wide text-beige/80">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}
