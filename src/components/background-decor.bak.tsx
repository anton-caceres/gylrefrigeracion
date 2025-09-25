export default function BackgroundDecor() {
  return (
    <>
      {/* Gradientes radiales fríos */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-50 bg-[radial-gradient(900px_500px_at_10%_10%,#E6F2FF_0%,transparent_60%),radial-gradient(900px_500px_at_90%_30%,#E6FFFB_0%,transparent_60%)]"
      />
      {/* Ruido sutil en overlay para evitar "plano" */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.5'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px"
        }}
      />
    </>
  );
}
