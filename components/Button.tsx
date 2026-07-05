import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-deep text-beige hover:bg-forest shadow-premium",
  gold:
    "bg-gold text-charcoal hover:bg-gold-light shadow-gold font-semibold",
  outline:
    "border border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-beige",
  ghost: "text-emerald-deep hover:bg-beige-dark",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1FBF5C]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  target,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
