"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Storybook frame #1: SKY

   Desktop (≥ md): empty spacer — the page-level landscape PNG
   and intro video paint here. Must stay empty so the video and
   PNG stay pixel-aligned.

   Mobile (< md): the owl-on-branch mark + "dueowl" wordmark
   are centered horizontally over the bg's upper area. The bg's
   sun reads as a soft halo behind the brand before the CTA
   section begins.
   ───────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <>
      <section
        aria-hidden
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "923 / 480" }}
      />

      <section
        aria-label="Due Owl — illustrated landscape hero"
        className="md:hidden relative w-full min-h-[55svh] sm:min-h-[65svh] flex flex-col items-center justify-start pt-24 sm:pt-28 px-6"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Due_Owl_Mark.png"
          alt="Due Owl"
          className="relative z-10 w-[38vw] sm:w-[30vw] max-w-[200px] sm:max-w-[240px] h-auto"
          style={{
            filter: "drop-shadow(0 8px 22px rgba(15,40,70,0.35))",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Due_Owl_Wordmark.png"
          alt="dueowl"
          className="relative z-10 mt-3 sm:mt-4 w-[62vw] sm:w-[48vw] max-w-[300px] sm:max-w-[360px] h-auto"
          style={{
            filter: "drop-shadow(0 4px 16px rgba(15,40,70,0.32))",
          }}
        />
      </section>
    </>
  );
}

export default Hero;
