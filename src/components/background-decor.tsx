export default function BackgroundDecor() {
  return (
    <>
      {/* Gradientes radiales fríos (azules/negro) */}
      <div
        aria-hidden
        className="
          pointer-events-none fixed inset-0 -z-50
          bg-[radial-gradient(800px_500px_at_20%_10%,#0B1B34_0%,transparent_60%),
              radial-gradient(800px_500px_at_85%_25%,#001a33_0%,transparent_55%),
              linear-gradient(180deg,#0a0f1a_0%,#0a0f1a_30%,#0b1220_100%)]
        "
      />
      {/* Ruido súper sutil para romper planos (oscuro) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.35'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px"
        }}
      />
    </>
  );
}
