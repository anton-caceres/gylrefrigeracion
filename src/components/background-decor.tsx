export default function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="
          fixed inset-0 -z-50 pointer-events-none
          bg-[radial-gradient(1000px_600px_at_12%_6%,#0a1a2f_0%,transparent_60%),
              radial-gradient(900px_540px_at_90%_18%,#0d243d_0%,transparent_60%),
              linear-gradient(#0b1626,#0b1626)]
        "
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-40 pointer-events-none opacity-[0.07]"
        style={{backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.4'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />
    </>
  );
}
