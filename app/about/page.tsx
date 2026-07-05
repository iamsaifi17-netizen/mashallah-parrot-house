import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, Target, Eye, Feather } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FeatherDivider } from "@/components/FeatherDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the owners of MashAllah Parrot House and learn our story, mission, and commitment to ethical bird care in Karachi, Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-center text-beige">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-gold-light">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl">
              Built by Bird Lovers, <span className="italic text-gold-light">for Bird Lovers</span>
            </h1>
            <p className="mt-6 text-beige/70">
              MashAllah Parrot House began as a small passion project between
              two friends who couldn&apos;t stay away from birds — and grew into
              one of Karachi&apos;s most trusted names in parrot care and sales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <SectionHeading
                eyebrow="How We Started"
                title="From a Backyard Aviary to a Trusted Marketplace"
              />
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                What began with a handful of budgies and lovebirds in a small
                Karachi backyard has grown, bird by bird, into MashAllah Parrot
                House — a name now recognised for healthy birds, honest advice,
                and genuine after-sale support. Every bird that leaves our care
                carries years of hands-on experience with it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                We built this business on a simple belief: a parrot is a
                lifelong companion, not a transaction. That belief still shapes
                every sale we make today.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-premium">
              <Image
                src="/images/owners/atta-ur-rehman.jpg"
                alt="Atta ur Rehman with parrots at MashAllah Parrot House"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <FeatherDivider tone="gold" />

      {/* OWNERS */}
      <section className="bg-beige-dark/40 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Introducing Our Owners"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {[
              {
                name: "Atta ur Rehman",
                role: "Co-Founder & Bird Welfare Lead",
                image: "/images/owners/atta-ur-rehman.jpg",
                bio: "Atta oversees the health, breeding standards, and daily welfare of every bird at MashAllah Parrot House. His hands-on approach means no bird is listed for sale until he's personally satisfied with its health and temperament.",
              },
              {
                name: "Muhammad Imran",
                role: "Co-Founder & Customer Relations Lead",
                image: "/images/owners/muhammad-imran.jpg",
                bio: "Imran is usually the first person customers speak to — on WhatsApp, on a call, or in person. He believes the right bird for the right home matters more than a quick sale, and guides every customer accordingly.",
              },
            ].map((owner, i) => (
              <Reveal key={owner.name} delay={i * 0.1}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-charcoal/5">
                  <div className="relative aspect-[4/3]">
                    <Image src={owner.image} alt={owner.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-charcoal">{owner.name}</h3>
                    <p className="mb-3 text-xs uppercase tracking-wide text-gold-dark">{owner.role}</p>
                    <p className="text-sm leading-relaxed text-charcoal/70">{owner.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / ETHICS / SATISFACTION */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To make ethically raised, healthy parrots accessible to families across Pakistan, backed by honest guidance at every step.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become Pakistan's most trusted name in parrot care — recognised for welfare standards, not just variety.",
            },
            {
              icon: Feather,
              title: "Ethical Bird Care",
              text: "No overcrowding, no rushed breeding cycles. Every bird is given space, proper nutrition, and veterinary attention.",
            },
            {
              icon: HeartHandshake,
              title: "Customer Satisfaction",
              text: "Our relationship doesn't end at sale — we support new owners with feeding, training, and health questions for life.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-deep/10 text-emerald-deep">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
                  <p className="mt-1 text-sm text-charcoal/60">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
