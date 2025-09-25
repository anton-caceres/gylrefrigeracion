import { NextRequest, NextResponse } from "next/server";
import { addReview, getReviewsByStatus, isInMemoryMode } from "@/lib/reviews";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  rating: z.number().min(1).max(5),
  comment: z.string().min(5).max(500)
});

const banned = ["tonto", "idiota", "estafa"];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = (searchParams.get("status") || "approved") as "approved" | "pending" | "rejected";
  if (status === "pending") {
    const pass = req.headers.get("x-admin-pass") || "";
    if (pass !== (process.env.ADMIN_PASS || "")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const list = getReviewsByStatus("pending");
    return NextResponse.json({ reviews: list, info: isInMemoryMode() ? "Alerta: almacenamiento en memoria (Vercel). Los cambios no persisten entre deploys." : null });
  }
  const list = getReviewsByStatus("approved");
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  body.comment = String(body.comment || "").replace(/\s+/g, " ").trim();
  const parse = schema.safeParse({ ...body, rating: Number(body.rating) });
  if (!parse.success) return NextResponse.json({ message: "Datos inválidos" }, { status: 400 });
  const lower = parse.data.comment.toLowerCase();
  if (banned.some(b => lower.includes(b))) return NextResponse.json({ message: "Lenguaje inapropiado" }, { status: 400 });
  const r = addReview({ name: parse.data.name, rating: parse.data.rating, comment: parse.data.comment });
  return NextResponse.json({ ok: true, id: r.id, status: r.status });
}
