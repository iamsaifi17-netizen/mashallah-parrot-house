import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MashAllah Parrot House in Karachi, Pakistan.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Questions about a bird, booking, or delivery? We're happy to help."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/5">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <InfoRow icon={MapPin} label="Location" value={BUSINESS.city} />
            <InfoRow icon={Phone} label="Phone" value={BUSINESS.phoneDisplay} href={`tel:${BUSINESS.phone}`} />
            <InfoRow icon={MessageCircle} label="WhatsApp" value={BUSINESS.phoneDisplay} href={`https://wa.me/${BUSINESS.whatsapp}`} />
            <InfoRow icon={Mail} label="Email" value={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />
            <InfoRow icon={Clock} label="Business Hours" value={BUSINESS.hours} />

            <div className="mt-6 aspect-video overflow-hidden rounded-2xl bg-beige-dark/60">
              <div className="flex h-full w-full items-center justify-center text-sm text-charcoal/40">
                Google Maps embed placeholder — add your business location link here.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-charcoal/5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-deep/10 text-emerald-deep">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-charcoal/40">{label}</p>
        <p className="font-medium text-charcoal">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
