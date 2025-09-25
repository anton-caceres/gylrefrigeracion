"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/rating-stars";
import { toast } from "sonner";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export function Testimonios() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews?status=approved").then(r => r.json()).then(setReviews).finally(()=>setLoading(false));
  }, []);

  async function onSubmit(formData: FormData) {
    const body = {
      name: String(formData.get("name") || ""),
      rating: Number(formData.get("rating") || 0),
      comment: String(formData.get("comment") || ""),
    };
    const res = await fetch("/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (res.ok) {
      toast.success("¡Gracias! Tu reseña quedó pendiente de aprobación.");
      (document.getElementById("review-form") as HTMLFormElement)?.reset();
    } else {
      const j = await res.json().catch(()=>({message:"Error"}));
      toast.error(j.message || "No se pudo enviar.");
    }
  }

  return (
    <section id="testimonios" className="section bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold mb-6">Testimonios</h2>
        {loading ? <p>Cargando…</p> : (
          reviews.length ? (
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {reviews.map(r => (
                <Card key={r.id} className="p-6">
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{r.name}</div>
                      <RatingStars value={r.rating} />
                    </div>
                    <p className="text-gray-700">{r.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : <p className="text-gray-600 mb-10">Aún no hay reseñas aprobadas.</p>
        )}
	
	<form
  id="review-form"
  onSubmit={(e) => {
    e.preventDefault();
    onSubmit(new FormData(e.currentTarget));
  }}
  className="card p-6 space-y-4"
>

          <h3 className="text-lg font-semibold">Dejá tu comentario</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <Input name="name" required placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Rating (1 a 5)</label>
              <Input name="rating" type="number" min={1} max={5} required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Comentario</label>
            <Textarea name="comment" required placeholder="Contanos tu experiencia" />
          </div>
          <Button type="submit">Enviar reseña</Button>
        </form>
      </div>
    </section>
  );
}
