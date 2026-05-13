"use client";

/* ─────────────────────────────────────────────────────────────
   Hero — Storybook frame #1: SKY
   Desktop: behaves as before — a transparent spacer with the
   923/380 aspect ratio of the landscape PNG, with the intro
   video overlaid at the top of the page. The illustrated PNG
   background lives on the page wrapper.
   Mobile: owns a full-bleed "sky" band (gradient sky + soft
   sun glow + distant rolling hills fading into the meadow) so
   the hero never depends on the desktop landscape PNG. The
   intro video is contained inside the hero and vertically
   centered. The band's bottom color (meadow-bright) matches
   the top of CreekPool's meadow band so the seam disappears.
   ───────────────────────────────────────────────────────────── */

type Props = {
  isVideoFinished?: boolean;
  onVideoEnd?: () => void;
};

export function Hero({ isVideoFinished = true, onVideoEnd }: Props) {
  return (
    <section
      aria-label="Due Owl — automated invoice reminders illustrated as a flowing landscape"
      className="relative w-full overflow-hidden min-h-[62svh] sm:min-h-0"
      style={{ aspectRatio: "923 / 380" }}
    >
      {/* MOBILE-ONLY: sky gradient + sun + distant hills.
          Hidden on desktop where the page-level landscape PNG takes over. */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #4BA3E3 0%, #7CBFEE 38%, #B8DCF5 70%, #D7EAF8 84%, #A9D77E 96%, #8CC74A 100%)",
        }}
      />

      {/* Sun (mobile only) */}
      <div
        aria-hidden
        className="md:hidden absolute right-6 top-14 h-24 w-24 rounded-full -z-10"
        style={{
          background:
            "radial-gradient(circle at center, #FFF6D2 0%, #FFE9A1 35%, rgba(245,230,184,0.55) 65%, rgba(245,230,184,0) 80%)",
          boxShadow: "0 0 120px 20px rgba(255,233,161,0.55)",
        }}
      />

      {/* Subtle far-horizon haze (mobile only) */}
      <div
        aria-hidden
        className="md:hidden absolute inset-x-0 bottom-[18%] h-12 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(215,234,248,0) 0%, rgba(215,234,248,0.55) 60%, rgba(215,234,248,0) 100%)",
        }}
      />

      {/* Distant rolling hills (mobile only) */}
      <div
        aria-hidden
        className="md:hidden absolute inset-x-0 bottom-0 h-[22%] -z-10"
        style={{
          background:
            "radial-gradient(120% 100% at 30% 100%, #7FC04F 0%, #A9D77E 45%, transparent 70%), radial-gradient(140% 100% at 80% 100%, #6FB23A 0%, #8CC74A 50%, transparent 75%)",
        }}
      />

      {/* Intro video — desktop: anchored to the top of the page over the
          landscape PNG. Mobile: contained in the hero, vertically centered
          in the sky so the owl reads against the gradient. */}
      {!isVideoFinished && (
        <video
          src="/Due_Owl_Hero_Video.mp4"
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
          onError={onVideoEnd}
          className="pointer-events-none absolute inset-x-0 w-full h-auto top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0"
          style={{ zIndex: 1 }}
        />
      )}
    </section>
  );
}

export default Hero;
