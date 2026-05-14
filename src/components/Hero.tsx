"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Storybook frame #1: SKY

   Both desktop and mobile render a transparent spacer here so
   the page-level background illustration (different image per
   breakpoint, see src/app/page.tsx) shows through cleanly. The
   mobile illustration already contains the owl mascot and sun
   baked in, so no overlay is needed.

   Desktop: aspect-ratio 923/480 reserves the exact area the
   intro video occupies, so the video and the landscape PNG
   stay pixel-aligned.
   Mobile: an svh-sized spacer reveals the upper portion of the
   portrait illustration (sky + sun + owl on branch) before the
   next section's content begins.
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
        className="md:hidden relative w-full min-h-[55svh] sm:min-h-[65svh]"
      />
    </>
  );
}

export default Hero;
