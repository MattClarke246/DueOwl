import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CreekPool } from "@/components/CreekPool";
import { WaterfallPipeline } from "@/components/WaterfallPipeline";
import { SettlingPool } from "@/components/SettlingPool";
import { Footer } from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   Page
   The entire site sits on top of a single illustrated background
   (Due_Owl_Background.png). The image stretches to fill the
   complete scroll area so the user sees ONE continuous landscape
   from header to pool-at-base. Section components contain ONLY
   the overlaid text/cards — every coloured/SVG background lives
   in this single image.
   ───────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <main
      className="relative overflow-x-hidden"
      /* Pool-blue showing below the image's natural bottom — the
         footer sits seamlessly on this matching water. */
      style={{ backgroundColor: "#1F6BA4" }}
    >
      {/* The illustrated world — rendered at NATURAL aspect ratio
          (background-size: 100% auto). Image fills the page width
          and its on-screen height = width × 1703/923 ≈ 184.5%.
          Below the image, the matching pool-blue from <main> shows. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: "url(/Due_Owl_Background.png)",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
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
