import { NextRequest, NextResponse } from "next/server";
import { updateStatus } from "@/lib/reviews";
import { z } from "zod";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const pass = req.headers.get("x-admin-pass") || "";
  if (pass !== (process.env.ADMIN_PASS || "")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(()=>null);
  const schema = z.object({ status: z.enum(["approved","rejected"]) });
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Bad request" }, { status: 400 });
  const updated = updateStatus(params.id, parsed.data.status);
  if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
