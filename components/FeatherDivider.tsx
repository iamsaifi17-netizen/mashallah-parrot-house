// The site's signature visual motif: a single curved feather-vane line that
// separates sections, echoing a wing in flight. Flips orientation on request
// so the wing alternates direction as the page scrolls, like a bird banking.
export function FeatherDivider({
  flip = false,
  tone = "emerald",
}: {
  flip?: boolean;
  tone?: "emerald" | "gold" | "beige";
}) {
  const strokeColor =
    tone === "gold" ? "#C9A24B" : tone === "beige" ? "#F4EEDD" : "#146B45";

  return (
    <div
      className={cn_svg_wrapper(flip)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="h-10 w-full md:h-16"
      >
        <path
          d="M0 40 C 200 10, 400 70, 600 40 C 800 10, 1000 70, 1200 40"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
        {Array.from({ length: 13 }).map((_, i) => {
          const x = 40 + i * 90;
          const y = 40 + Math.sin(i) * 18;
          return (
            <line
              key={i}
              x1={x}
              y1={y}
              x2={x + (i % 2 === 0 ? -14 : 14)}
              y2={y - 16}
              stroke={strokeColor}
              strokeWidth="1"
              strokeOpacity="0.35"
            />
          );
        })}
      </svg>
    </div>
  );
}

function cn_svg_wrapper(flip: boolean) {
  return `w-full ${flip ? "rotate-180" : ""}`;
}
