"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Review = {
  id: string;
  name: string;
  rating: number; // 1..5
  comment: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

function Stars({ value }: { value: number }) {
  // Pintamos ★ y ☆ accesibles
  return (
    <div aria-label={`${value} de 5 estrellas`} role="img" className="text-[#00CFFF]">
      {"★★★★★☆☆☆☆☆".slice(5 - Math.round(value), 10 - Math.round(value))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initial =
    (name?.trim()?.charAt(0) || "?").toUpperCase();
  return (
    <div className="h-9 w-9 rounded-full bg-[#0E76FF]/25 text-[#8ddcff] flex items-center justify-center font-semibold">
      {initial}
    </div>
  );
}

export function Testimonios() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch("/api/reviews?status=approved", { cache: "no-store" });
        const data = (await r.json()) as Review[];
        setReviews(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const [featured, others] = useMemo(() => {
    if (!reviews.length) return [null, [] as Review[]];
    // Elegimos destacado: el más largo (suele ser el más útil)
    const sorted = [...reviews].sort(
      (a, b) => (b.comment?.length || 0) - (a.comment?.length || 0)
    );
    return [sorted[0], sorted.slice(1)];
  }, [reviews]);

  return (
    <section id="testimonios" className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
          Testimonios
        </h2>

        {loading ? (
          <p className="text-white/70">Cargando reseñas…</p>
        ) : !reviews.length ? (
          <p className="text-white/70">Aún no hay reseñas. ¡Sé la primera persona en opinar!</p>
        ) : (
          <>
            {/* Destacado */}
            {featured && (
              <div className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5">
                <div className="flex items-start gap-3">
                  <Avatar name={featured.name} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white truncate">{featured.name}</p>
                      <Stars value={featured.rating} />
                    </div>
                    <p className="text-white/85 leading-relaxed mt-1">
                      {featured.comment}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Resto en grilla */}
            <div className="grid md:grid-cols-3 gap-4">
              {others.map((r) => (
                <article
                  key={r.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar name={r.name} />
                    <div className="min-w-0">
                      <p className="font-semibold text-white truncate">{r.name}</p>
                      <Stars value={r.rating} />
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{r.comment}</p>
                </article>
              ))}
            </div>

            {/* CTA final */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/presupuesto"
                className="inline-flex h-11 items-center rounded-xl px-5 text-white btn-gradient"
              >
                Quiero ser el próximo cliente feliz
              </Link>
              <Link
                href="#contacto"
                className="inline-flex h-11 items-center rounded-xl px-5 border border-white/30 text-white hover:bg-white/10"
              >
                Dejar mi reseña
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
