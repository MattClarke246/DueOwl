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

   ⚠️ DESKTOP ALIGNMENT CONTRACT — DO NOT BREAK
   The intro video and the landscape PNG are BOTH positioned
   absolutely on this <main>, at exactly top:0 / left:0 / w-full.
   That's the only way the video's final frame aligns pixel-
   perfectly with the PNG behind it. Do not move the <video>
   into a child component. Do not wrap it in a positioned
   ancestor. When the video unmounts (onEnded), the PNG seam
   must be invisible.

   Desktop: PNG + video at top of page, sections sit over the
   illustration.
   Mobile: PNG and video are both hidden (`hidden md:block`).
   Each section paints its own illustrated band (sky → meadow
   → waterfall → pool → deep pond) — see the per-section
   components for the bands themselves.
   ───────────────────────────────────────────────────────────── */

export default function Page() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  // On mobile we don't render the video, so flip isVideoFinished
  // immediately so the Navbar and CreekPool stagger animations
  // don't sit waiting on an event that will never fire.
  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setIsVideoFinished(true);
    }
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#1F6BA4]">
      {/* MOBILE + TABLET background — portrait illustration that
          stretches the full page height (auto 100%, top-anchored). */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none bg-no-repeat bg-top bg-[length:auto_100%] z-0"
        style={{
          backgroundImage: "url(/Due_Owl_Background_Mobile.png)",
        }}
      />
      {/* DESKTOP background — original landscape PNG that the intro
          video's final frame aligns with. */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 pointer-events-none bg-no-repeat bg-top bg-[length:100%_auto] z-0"
        style={{
          backgroundImage: "url(/Due_Owl_Background.png)",
        }}
      />
      {/* DESKTOP-ONLY: intro video. Sibling of the PNG, anchored to
          top:0 / left:0, so its final frame aligns with the PNG.
          Instantly unmounts when finished — no fade, no stacking. */}
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
