import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about booking, delivery, feeding, health, and care of our parrots.",
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Support"
          title="Frequently Asked Questions"
          description="Can't find your answer? Message us directly on WhatsApp."
          align="center"
        />
      </Reveal>
      <div className="mt-10">
        <FaqAccordion />
      </div>
    </section>
  );
}
