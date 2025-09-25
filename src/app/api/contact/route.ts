import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(()=>null);
  if (!body) return NextResponse.json({ message: "Invalid" }, { status: 400 });

  // TODO: Conectar con Resend o Formspree:
  // - Resend: usar RESEND_API_KEY y enviar un email al owner con los datos del formulario.
  // - Formspree: hacer fetch al endpoint FORMSPREE_ENDPOINT.

  console.log("CONTACTO RECIBIDO:", body);
  return NextResponse.json({ ok: true });
}
