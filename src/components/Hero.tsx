"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Storybook frame #1: SKY
   Desktop: a transparent spacer with the 923/380 aspect ratio
   of the landscape PNG. The intro video and PNG live on the
   page wrapper and align pixel-perfectly behind this spacer —
   we MUST NOT render any content here that could disturb that
   alignment.
   Mobile: a full "sky" band (sky gradient + soft sun + distant
   rolling hills fading into the meadow), sized in svh units so
   it doesn't depend on the desktop PNG. No video — the static
   sky is the hero. The band's bottom color (meadow-bright)
   matches the top of CreekPool's meadow band so the scenes
   blend without a seam.
   ───────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <>
      {/* DESKTOP-ONLY transparent spacer — preserves the original
          923/380 reservation so the page-level video and PNG behind
          it line up exactly. */}
      <section
        aria-hidden
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "923 / 380" }}
      />

      {/* MOBILE-ONLY illustrated sky frame */}
      <section
        aria-label="Due Owl — automated invoice reminders illustrated as a flowing landscape"
        className="md:hidden relative w-full overflow-hidden min-h-[62svh]"
      >
        {/* Sky gradient */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, #4BA3E3 0%, #7CBFEE 38%, #B8DCF5 70%, #D7EAF8 84%, #A9D77E 96%, #8CC74A 100%)",
          }}
        />

        {/* Sun */}
        <div
          aria-hidden
          className="absolute right-6 top-14 h-24 w-24 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at center, #FFF6D2 0%, #FFE9A1 35%, rgba(245,230,184,0.55) 65%, rgba(245,230,184,0) 80%)",
            boxShadow: "0 0 120px 20px rgba(255,233,161,0.55)",
          }}
        />

        {/* Far-horizon haze */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-[22%] h-12 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(215,234,248,0) 0%, rgba(215,234,248,0.55) 60%, rgba(215,234,248,0) 100%)",
          }}
        />

        {/* Distant rolling hills */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[22%] -z-10"
          style={{
            background:
              "radial-gradient(120% 100% at 30% 100%, #7FC04F 0%, #A9D77E 45%, transparent 70%), radial-gradient(140% 100% at 80% 100%, #6FB23A 0%, #8CC74A 50%, transparent 75%)",
          }}
        />
      </section>
    </>
  );
}

export default Hero;
