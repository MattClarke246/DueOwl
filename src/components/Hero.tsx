"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Transparent spacer reserving the TOP region of the
   illustrated background (Due_Owl_Background.png).
   The image's top region holds the sky, "dueowl" headline, owl,
   sun, city, wind turbines, clock tower, and (at the bottom of
   the region) the small rock with the butterfly. We want the CTA
   to begin BELOW that butterfly-on-rock area.
   Sizing: the background image renders at width × 1703/923, so
   ~184.5% of viewport width tall. The top scene through the
   butterfly is ≈22% of that, so this spacer is sized to a
   923 : 380 aspect ratio (about 41vw tall at standard widths).
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
