"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CreekPool } from "@/components/CreekPool";
import { WaterfallPipeline } from "@/components/WaterfallPipeline";
import { SettlingPool } from "@/components/SettlingPool";
import { Footer } from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   Page
   Desktop: pixel-identical to the original — one continuous
   illustrated landscape PNG, with the intro video positioned
   over the top so its final frame aligns seamlessly with the
   PNG (when the video unmounts, the PNG takes over with no
   visible transition).
   Mobile: each section paints its own illustrated band (sky →
   meadow → waterfall → pool → deep pond). The video is not
   rendered on mobile — the static sky illustration takes its
   place — and isVideoFinished is set immediately so the navbar
   and CTA animations don't wait on a video that never plays.
   ───────────────────────────────────────────────────────────── */

export default function Page() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  // On mobile, skip the video gating so content is visible immediately.
  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setIsVideoFinished(true);
    }
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#1F6BA4]">
      {/* DESKTOP-ONLY: full-page illustrated landscape background.
          On mobile each section paints its own band, so this is hidden. */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/Due_Owl_Background.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
          zIndex: 0,
        }}
      />

      {/* DESKTOP-ONLY: intro video, anchored exactly to the top of the
          page so its final frame lines up with the PNG behind it. When
          the video ends it unmounts instantly — no fade, no transform,
          no stacking. Hidden on mobile (md breakpoint and below) so the
          mobile sky illustration in Hero is what shows there. */}
      {!isVideoFinished && (
        <video
          src="/Due_Owl_Hero_Video.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoFinished(true)}
          onError={() => setIsVideoFinished(true)}
          className="hidden md:block absolute top-0 left-0 w-full h-auto pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}

      <Navbar isVideoFinished={isVideoFinished} />
      <Hero />
      <CreekPool isVideoFinished={isVideoFinished} />
      <WaterfallPipeline />
      <SettlingPool />
      <Footer />
    </main>
  );
}
