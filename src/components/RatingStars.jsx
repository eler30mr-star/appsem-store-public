import { Star } from "lucide-react";

export default function RatingStars({ value = 0, interactive = false, onRate, size = 18 }) {
  const rating = Number(value || 0);

  return (
    <div className={`rating-stars ${interactive ? "interactive" : ""}`} aria-label={`Valoración ${rating} de 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        return (
          <button
            aria-label={interactive ? `Valorar con ${star} estrellas` : undefined}
            className={filled ? "star filled" : "star"}
            disabled={!interactive}
            key={star}
            onClick={() => interactive && onRate?.(star)}
            type="button"
          >
            <Star size={size} fill="currentColor" />
          </button>
        );
      })}
    </div>
  );
}
