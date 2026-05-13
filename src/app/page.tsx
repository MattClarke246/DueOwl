import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CreekPool } from "@/components/CreekPool";
import { WaterfallPipeline } from "@/components/WaterfallPipeline";
import { SettlingPool } from "@/components/SettlingPool";
import { Footer } from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   Page
   The illustrated background image (Due_Owl_Background.png) is
   applied directly to <main> at its NATURAL aspect ratio via
   background-size: 100% auto. Its on-screen height equals
   viewport width × 1703/923 (~184.5%). Below that height, the
   matching pool-blue backgroundColor takes over so the footer
   sits seamlessly on water.

   Sections render as normal flow children on top of the image —
   no z-index tricks (an earlier attempt used a -z-10 absolute
   layer which painted BEHIND <main>'s own background-color and
   left the user looking at a flat blue screen).
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
      <Navbar />
      <Hero />
      <CreekPool />
      <WaterfallPipeline />
      <SettlingPool />
      <Footer />
    </main>
  );
}
