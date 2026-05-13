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
      {/* DESKTOP spacer — preserves the 923/380 reservation for the
          page-level video + PNG. Must stay empty. */}
      <section
        aria-hidden
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "923 / 380" }}
      />

      {/* MOBILE sky frame */}
      <section
        aria-label="Due Owl — automated invoice reminders illustrated as a flowing landscape"
        className="md:hidden relative w-full overflow-hidden min-h-[62svh]"
      >
        {/* Sky gradient — top of world fading into the meadow */}
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, #4BA3E3 0%, #7CBFEE 38%, #B8DCF5 70%, #D7EAF8 84%, #A9D77E 96%, #8CC74A 100%)",
          }}
        />
        {/* Sun */}
        <div
          aria-hidden
          className="absolute right-6 top-14 h-24 w-24 rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle at center, #FFF6D2 0%, #FFE9A1 35%, rgba(245,230,184,0.55) 65%, rgba(245,230,184,0) 80%)",
            boxShadow: "0 0 120px 20px rgba(255,233,161,0.55)",
          }}
        />
        {/* Far-horizon haze */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-[22%] h-12 z-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(215,234,248,0) 0%, rgba(215,234,248,0.55) 60%, rgba(215,234,248,0) 100%)",
          }}
        />
        {/* Distant rolling hills */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[22%] z-0"
          style={{
            background:
              "radial-gradient(120% 100% at 30% 100%, #7FC04F 0%, #A9D77E 45%, transparent 70%), radial-gradient(140% 100% at 80% 100%, #6FB23A 0%, #8CC74A 50%, transparent 75%)",
          }}
        />

        {/* Owl mark + wordmark + tagline — the brand moment that
            replaces the desktop intro video on mobile. */}
        <div className="relative z-10 flex h-full min-h-[62svh] flex-col items-center justify-center px-6 pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Due_Owl_Mark.png"
            alt="Due Owl — owl on a branch"
            className="w-[44vw] max-w-[220px] h-auto"
            style={{
              filter: "drop-shadow(0 8px 22px rgba(15,40,70,0.35))",
            }}
          />
          <span
            className="mt-2 font-serif leading-none text-white"
            style={{
              fontSize: "clamp(2.75rem, 13vw, 4.5rem)",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 18px rgba(15,40,70,0.35)",
            }}
          >
            due<span style={{ color: "#FFE9A1" }}>owl</span>
          </span>
          <p
            className="mt-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/90"
            style={{ textShadow: "0 1px 8px rgba(15,40,70,0.35)" }}
          >
            Automated invoice reminders
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
