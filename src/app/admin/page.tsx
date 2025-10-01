"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export default function AdminPage() {
  const [pass, setPass] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [info, setInfo] = useState<string | null>(null);

  async function load() {
    const res = await fetch("/api/reviews?status=pending", { headers: { "x-admin-pass": pass || "" } });
    if (res.status === 401) { toast.error("Pass inválido"); return; }
    const j = await res.json();
    setReviews(j.reviews || j);
    setInfo(j.info || null);
  }

  async function act(id: string, status: "approved" | "rejected") {
    const prev = reviews;
    setReviews(reviews.filter(r => r.id !== id));
    const res = await fetch(`/api/reviews/${id}`, { method: "PATCH", headers: { "x-admin-pass": pass, "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    if (res.ok) toast.success(status === "approved" ? "Aprobada" : "Rechazada");
    else { toast.error("No se pudo actualizar"); setReviews(prev); }
  }

  return (
    <div className="container-narrow section">
      <h1 className="text-3xl font-bold mb-6">Admin — Moderación de reseñas</h1>
      <div className="card p-6 mb-6">
        <label className="block text-sm font-medium mb-2">Passcode</label>
        <div className="flex gap-2">
          <Input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="ADMIN_PASS" />
          <Button onClick={load}>Ingresar</Button>
        </div>
        {info && <p className="mt-3 text-sm text-amber-700 bg-amber-50 p-3 rounded-xl">{info}</p>}
      </div>
      <div className="grid gap-4">
        {reviews.map(r => (
          <Card key={r.id} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.name} — {r.rating}/5</div>
                <div className="text-white/80">{r.comment}</div>
              </div>
              <div className="flex gap-2">
                <Button onClick={()=>act(r.id,"approved")}>Aprobar</Button>
                <Button variant="outline" onClick={()=>act(r.id,"rejected")}>Rechazar</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
