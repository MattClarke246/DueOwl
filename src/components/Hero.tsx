"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Storybook frame #1: SKY

   Desktop / Tablet (≥ md): empty spacer — the page-level
   background image + intro video paint here. Must stay empty
   so the video/PNG alignment stays perfect.

   Mobile (< md): a dedicated branded sky frame. The new
   Due_Owl_Background_Updated.jpg is used as the hero's own
   background, cropped to its top portion so the sun appears
   in the upper area of the section. The owl mark and the
   "dueowl" wordmark are stacked over the sun position so the
   sun reads as a halo behind the brand.
   ───────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <>
      {/* Desktop / tablet spacer */}
      <section
        aria-hidden
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "923 / 480" }}
      />

      {/* Mobile branded hero (owns its own bg crop showing the sun) */}
      <section
        aria-label="Due Owl — automated invoice reminders illustrated as a flowing landscape"
        className="md:hidden relative w-full overflow-hidden min-h-[60svh] sm:min-h-[70svh] flex flex-col items-center justify-start pt-[3svh] sm:pt-[4svh] px-6"
        style={{
          backgroundImage: "url(/Due_Owl_Background_Updated.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
        }}
      >
        {/* Owl-on-branch mark — centered over the sun */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Due_Owl_Mark.png"
          alt="Due Owl"
          className="relative z-10 w-[34vw] sm:w-[26vw] max-w-[180px] sm:max-w-[220px] h-auto"
          style={{
            filter: "drop-shadow(0 8px 22px rgba(15,40,70,0.35))",
          }}
        />
        {/* Wordmark — sits just under the owl, still in the sun-glow area */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Due_Owl_Wordmark.png"
          alt="dueowl"
          className="relative z-10 mt-2 sm:mt-3 w-[58vw] sm:w-[42vw] max-w-[280px] sm:max-w-[340px] h-auto"
          style={{
            filter: "drop-shadow(0 4px 16px rgba(15,40,70,0.32))",
          }}
        />
        <p
          className="relative z-10 mt-3 sm:mt-4 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.28em] text-white/95 text-center"
          style={{ textShadow: "0 1px 8px rgba(15,40,70,0.45)" }}
        >
          Automated invoice reminders
        </p>
      </section>
    </>
  );
}

export default Hero;
