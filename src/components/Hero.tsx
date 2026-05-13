"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Transparent spacer reserving the TOP region of the
   illustrated background (Due_Owl_Background.png).
   Desktop: aspect-ratio keeps the spacer proportional.
   Mobile: a smaller fixed-height spacer because the background
   image is much narrower and we don't need as much vertical
   space before the CTA.
   ───────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section
      aria-label="Due Owl — automated invoice reminders illustrated as a flowing landscape"
      className="relative w-full"
      style={{ aspectRatio: "923 / 380" }}
    />
  );
}

export default Hero;
