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
  return (
    <main
      className="relative overflow-x-hidden"
      style={{
        backgroundColor: "#1F6BA4",
        backgroundImage: "url(/Due_Owl_Background.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
      }}
    >
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

      <Navbar />
      <Hero />
      <CreekPool />
      <WaterfallPipeline />
      <SettlingPool />
      <Footer />
    </main>
  );
}
