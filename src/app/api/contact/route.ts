import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const name = String(data?.name || "").trim();
    const phone = String(data?.phone || "").trim();
    const email = String(data?.email || "").trim();
    const service = String(data?.service || "").trim();
    const message = String(data?.message || "").trim();

    if (!name || (!phone && !email) || !message) {
      return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
    }

    // TODO: conectar a Resend/Formspree aquí si querés enviar por email realmente.
    // Ejemplo Resend: await resend.emails.send({ ... })

    console.log("[CONTACT]", { name, phone, email, service, message, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Error inesperado." }, { status: 500 });
  }
}
