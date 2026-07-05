import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          fill={i < rating ? "#C9A24B" : "none"}
          stroke="#C9A24B"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
