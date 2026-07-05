import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Syringe, UtensilsCrossed, BookOpen } from "lucide-react";
import { parrots } from "@/lib/data";
import { formatPKR, whatsappLink } from "@/lib/utils";
import { BirdImage } from "@/components/BirdImage";
import { Button } from "@/components/Button";
import { ParrotCard } from "@/components/ParrotCard";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return parrots.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const parrot = parrots.find((p) => p.slug === params.slug);
  if (!parrot) return {};
  return {
    title: `${parrot.name} — ${parrot.species}`,
    description: parrot.description,
  };
}

export default function ParrotDetailPage({ params }: { params: { slug: string } }) {
  const parrot = parrots.find((p) => p.slug === params.slug);
  if (!parrot) notFound();

  const related = parrots
    .filter((p) => p.category === parrot.category && p.slug !== parrot.slug)
    .slice(0, 3);

  const bookMessage = `Assalam-o-Alaikum, I'd like to book ${parrot.name} (${parrot.species}) listed at ${formatPKR(parrot.price)} on your website.`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <div className="grid gap-10 md:grid-cols-2">
        {/* GALLERY */}
        <Reveal>
          <div className="space-y-3">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-premium">
              <BirdImage src={parrot.images[0]} alt={parrot.name} label={parrot.species} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {parrot.images.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                  <BirdImage src={img} alt={`${parrot.name} photo ${i + 1}`} label={parrot.species} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* INFO */}
        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-wide text-gold-dark">{parrot.species}</p>
          <h1 className="mt-1 font-display text-4xl text-charcoal">{parrot.name}</h1>
          <p className="mt-3 font-display text-3xl text-emerald-deep">{formatPKR(parrot.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{parrot.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-beige-dark/40 p-5 text-sm">
            <Detail label="Age" value={parrot.age} />
            <Detail label="Gender" value={parrot.gender} />
            <Detail label="Colour" value={parrot.colour} />
            <Detail label="Availability" value={parrot.availability} />
          </dl>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-deep/20 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-deep" />
            <div>
              <p className="font-medium text-charcoal">Health Status</p>
              <p className="text-sm text-charcoal/60">{parrot.health}</p>
            </div>
          </div>

          {parrot.vaccinated && (
            <div className="mt-3 flex items-start gap-3 rounded-2xl border border-emerald-deep/20 p-4">
              <Syringe className="mt-0.5 h-5 w-5 shrink-0 text-emerald-deep" />
              <div>
                <p className="font-medium text-charcoal">Vaccination</p>
                <p className="text-sm text-charcoal/60">Fully vaccinated and vet-verified.</p>
              </div>
            </div>
          )}

          <div className="mt-3 flex items-start gap-3 rounded-2xl border border-emerald-deep/20 p-4">
            <UtensilsCrossed className="mt-0.5 h-5 w-5 shrink-0 text-emerald-deep" />
            <div>
              <p className="font-medium text-charcoal">Feeding Guide</p>
              <p className="text-sm text-charcoal/60">{parrot.feedingGuide}</p>
            </div>
          </div>

          <div className="mt-3 flex items-start gap-3 rounded-2xl border border-emerald-deep/20 p-4">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-emerald-deep" />
            <div>
              <p className="font-medium text-charcoal">Care Instructions</p>
              <p className="text-sm text-charcoal/60">{parrot.careInstructions}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink(bookMessage)}
              target="_blank"
              variant="gold"
              className="flex-1"
            >
              Book Now
            </Button>
            <Button
              href={whatsappLink(bookMessage)}
              target="_blank"
              variant="whatsapp"
              className="flex-1"
            >
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-charcoal">You May Also Like</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ParrotCard key={p.slug} parrot={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-charcoal/40">{label}</dt>
      <dd className="mt-1 font-medium text-charcoal">{value}</dd>
    </div>
  );
}
