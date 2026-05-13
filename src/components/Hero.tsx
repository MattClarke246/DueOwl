"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Storybook frame #1: SKY

   ⚠️ Desktop spacer is intentionally empty. The page-level video
   and PNG (in src/app/page.tsx) align using top:0 of <main>, so
   anything we render here on desktop would visually overlay the
   intro video — DO NOT add desktop content to this section.

   Mobile: full "sky" frame (sky gradient + soft sun + distant
   rolling hills fading into the meadow). The band's bottom
   color matches the top of CreekPool's meadow band so the
   scenes blend with no visible seam.
   ───────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <>
      {/* Spacer — preserves space for the page-level background image. 
          Must stay empty so background art is visible. */}
      <section
        aria-hidden
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "923 / 480" }}
      />

      {/* MOBILE branding frame (shows because video doesn't play on mobile) */}
      <section
        aria-label="Due Owl — automated invoice reminders illustrated as a flowing landscape"
        className="md:hidden relative w-full overflow-hidden min-h-[50svh] flex flex-col items-center justify-center px-6 pt-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Due_Owl_Mark.png"
          alt="Due Owl"
          className="w-[44vw] max-w-[220px] h-auto relative z-10"
          style={{
            filter: "drop-shadow(0 8px 22px rgba(15,40,70,0.35))",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Due_Owl_Wordmark.png"
          alt="dueowl"
          className="mt-3 w-[58vw] max-w-[280px] h-auto relative z-10"
          style={{
            filter: "drop-shadow(0 4px 16px rgba(15,40,70,0.32))",
          }}
        />
        <p
          className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 relative z-10"
          style={{ textShadow: "0 1px 8px rgba(15,40,70,0.35)" }}
        >
          Automated invoice reminders
        </p>
      </section>
    </>
  );
}

export default Hero;
