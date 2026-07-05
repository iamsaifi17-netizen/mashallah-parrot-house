import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { BirdImage } from "@/components/BirdImage";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of our birds, shop, owners, and happy customers.",
};

const tabs = [
  { label: "Bird Photos", count: 8, prefix: "bird" },
  { label: "Shop Photos", count: 4, prefix: "shop" },
  { label: "Customer Photos", count: 4, prefix: "customer" },
];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="A Look Inside"
          title="Gallery"
          description="Real birds, our shop floor, and the customers who've welcomed them home."
          align="center"
        />
      </Reveal>

      {/* Owner photos — real */}
      <Reveal>
        <div className="mt-12">
          <h3 className="mb-4 font-display text-xl text-charcoal">Owner Photos</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/owners/atta-ur-rehman.jpg" alt="Atta ur Rehman with parrots" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/owners/muhammad-imran.jpg" alt="Muhammad Imran with parrots" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Reveal>

      {tabs.map((tab, tIdx) => (
        <Reveal key={tab.label} delay={tIdx * 0.05}>
          <div className="mt-12">
            <h3 className="mb-4 font-display text-xl text-charcoal">{tab.label}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: tab.count }).map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                  <BirdImage
                    src={`/images/gallery/${tab.prefix}-${i + 1}.jpg`}
                    alt={`${tab.label} ${i + 1}`}
                    label={tab.label}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
