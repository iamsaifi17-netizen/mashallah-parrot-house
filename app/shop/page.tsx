import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopGrid } from "@/components/ShopGrid";
import { parrots } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Shop Parrots",
  description:
    "Browse African Grey, Macaw, Cockatiel, Budgie, Lovebirds and Amazon Parrots available now at MashAllah Parrot House, Karachi.",
};

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Our Marketplace"
          title="Shop Parrots"
          description="Every listing includes real health, age, and vaccination details — no surprises."
        />
      </Reveal>
      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-charcoal/50">Loading birds...</p>}>
          <ShopGrid parrots={parrots} />
        </Suspense>
      </div>
    </section>
  );
}
