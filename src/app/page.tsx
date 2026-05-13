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
   Desktop: background-size 100% auto keeps the illustrated
   landscape at its native aspect ratio.
   Mobile: the content stack is much taller than the image, so
   we add colored gradient bands that continue the visual story
   (sky → meadow → water → deep pool) below the illustration.
   ───────────────────────────────────────────────────────────── */

export default function Page() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  return (
    <main className="relative overflow-x-hidden bg-[#1F6BA4]">
      {/* Full-height scrolling background in its original colors */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/Due_Owl_Background.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
          zIndex: 0,
        }}
      />
      {/* The video stays visible permanently, but its bottom edge blends into the background */}
      <video
        src="/Due_Owl_Hero_Video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setIsVideoFinished(true)}
        onError={() => setIsVideoFinished(true)}
        className="absolute top-0 left-0 w-full h-auto pointer-events-none"
        style={{ 
          zIndex: 1,
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
        }}
      />

      {/* Mobile gradient overlay that extends the natural colours
          below where the background image ends on narrow screens. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            transparent 40%,
            rgba(31,107,164,0.6) 55%,
            rgba(31,107,164,0.92) 65%,
            #1F6BA4 75%,
            #1a5f94 85%,
            #155282 100%
          )`,
        }}
      />

      <Navbar isVideoFinished={isVideoFinished} />
      <Hero />
      <CreekPool isVideoFinished={isVideoFinished} />
      <WaterfallPipeline />
      <SettlingPool />
      <Footer />
    </main>
  );
}
