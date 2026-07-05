import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.25em]",
            light ? "text-gold-light" : "text-gold-dark"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-tight md:text-4xl",
          light ? "text-beige" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 font-body text-base leading-relaxed",
            light ? "text-beige/80" : "text-charcoal/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
