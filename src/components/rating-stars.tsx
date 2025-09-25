"use client";
import { Star } from "lucide-react";

export function RatingStars({ value }: { value: number }) {
  const stars = [1,2,3,4,5];
  return (
    <div aria-label={`Rating: ${value} of 5`} className="flex gap-1">
      {stars.map(i => (
        <Star key={i} className={`h-4 w-4 ${i <= value ? "fill-primary text-primary" : "text-gray-300"}`} />
      ))}
    </div>
  );
}
