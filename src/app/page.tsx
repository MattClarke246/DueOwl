"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CreekPool } from "@/components/CreekPool";
import { WaterfallPipeline } from "@/components/WaterfallPipeline";
import { SettlingPool } from "@/components/SettlingPool";
import { Footer } from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   Page
   Desktop: one continuous illustrated landscape PNG behind
   every section. Layout is pixel-identical to the original.
   Mobile: each section owns its own illustrated band, so the
   "vertical storybook" reads as: sky → meadow → waterfall →
   pool → deep pond. Section bands are color-matched at their
   edges so the scenes blend without visible seams.
   ───────────────────────────────────────────────────────────── */

export default function Page() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

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

      <Navbar isVideoFinished={isVideoFinished} />
      <Hero
        isVideoFinished={isVideoFinished}
        onVideoEnd={() => setIsVideoFinished(true)}
      />
      <CreekPool isVideoFinished={isVideoFinished} />
      <WaterfallPipeline />
      <SettlingPool />
      <Footer />
    </main>
  );
}
