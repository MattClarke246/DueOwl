"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────
   CreekPool — CTA + Features
   Mobile: tighter spacing, smaller text, single-column features.
   Desktop: full-size hero text, 3-col feature grid.
   ───────────────────────────────────────────────────────────── */

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Setup",
    desc: "Connect your accounting tool or upload invoices — reminders start in minutes.",
  },
  {
    icon: Shield,
    title: "Protect Relationships",
    desc: "Warm, on-brand reminders that escalate gently. Professional, never aggressive.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    desc: "Watch payments arrive live. Track open invoices, response rates, and cash flow.",
  },
];

export function CreekPool({ isVideoFinished = true }: { isVideoFinished?: boolean }) {
  return (
    <section id="features" className="relative scroll-mt-24">
      {/* MOBILE-ONLY: meadow band. Top color matches Hero's hill green
          (#8CC74A), bottom color matches WaterfallPipeline's warm cliff
          edge (#6A6E3D) for a seamless handoff. */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #8CC74A 0%, #6FB23A 35%, #4F9928 70%, #5A8A38 90%, #6A6E3D 100%)",
        }}
      />
      {/* Soft creek meander glow */}
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute inset-x-0 top-[42%] h-24 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(120% 60% at 50% 50%, rgba(159,211,240,0.55) 0%, rgba(93,173,226,0.35) 35%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      <div className="container relative z-10 py-8 sm:py-10 md:py-12">
        <motion.div
          initial="hidden"
          animate={isVideoFinished ? "show" : "hidden"}
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto max-w-4xl text-center relative z-20 mt-0 md:-mt-[220px] lg:-mt-[300px]"
        >
          {/* Readability scrim — soft radial darken behind the entire
              hero text block so white text reads at AA contrast no
              matter where it sits over the landscape illustration. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-8%] inset-y-[-12%] -z-10"
            style={{
              background:
                "radial-gradient(60% 55% at 50% 45%, rgba(15,40,70,0.42) 0%, rgba(15,40,70,0.18) 55%, rgba(15,40,70,0) 80%)",
            }}
          />

          <motion.h1
            variants={FADE_UP}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-serif text-balance text-[2.25rem] sm:text-5xl md:text-7xl lg:text-[5.5rem]"
            style={{
              lineHeight: 1.05,
              letterSpacing: "-0.022em",
              textShadow: "0 2px 18px rgba(15,40,70,0.45)",
            }}
          >
            <span
              className="inline-block bg-clip-text text-transparent pb-1 sm:pb-2"
              style={{
                backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F5E6B8 100%)",
              }}
            >
              Automated invoice reminders.
            </span>
            <br />
            <span className="italic text-white/95">Seamless flow.</span>{" "}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F5E6B8 0%, #FFE9A1 50%, #E5B547 100%)",
              }}
            >
              Endless growth.
            </span>
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-5 sm:mt-7 max-w-xl text-balance text-white"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              lineHeight: 1.5,
              letterSpacing: "-0.005em",
              textShadow: "0 1px 10px rgba(15,40,70,0.4)",
            }}
          >
            Due Owl follows up on late invoices for you — politely, on schedule,
            and entirely on its own — so your cash keeps flowing while you focus
            on the work that matters.
          </motion.p>

          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-7 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" variant="bronze" className="w-full sm:w-auto">
              Get started free
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/45 bg-white/15 text-white hover:bg-white/25 backdrop-blur"
            >
              Watch 90-second demo
            </Button>
          </motion.div>

          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 sm:mt-5 text-[12px] sm:text-[13px] font-medium text-white/90"
            style={{
              letterSpacing: "-0.005em",
              textShadow: "0 1px 6px rgba(15,40,70,0.4)",
            }}
          >
            Free forever for up to 5 invoices a month · No card required
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-5%" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto mt-10 sm:mt-14 md:mt-20 lg:mt-28 grid max-w-5xl gap-3 sm:gap-4 md:grid-cols-3 relative z-10"
        >
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={FADE_UP}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background:
                    "linear-gradient(165deg, #5FA12D 0%, #4F9928 45%, #3D7A25 100%)",
                  boxShadow:
                    "0 1px 0 rgba(255,233,161,0.35) inset, 0 22px 50px -18px rgba(20,60,15,0.55), 0 12px 30px -6px rgba(15,40,70,0.4)",
                }}
              >
                {/* noise texture overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
                  style={{ backgroundImage: "url(/noise.png)" }}
                />
                
                {/* gold top border highlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-60"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #E5B547 50%, transparent 100%)"
                  }}
                />

                {/* warm highlight glow in the top-right corner */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,233,161,0.55) 0%, transparent 65%)",
                    filter: "blur(2px)",
                  }}
                />
                <div
                  className="relative mb-4 sm:mb-5 grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,253,236,0.95) 0%, rgba(245,230,184,0.85) 100%)",
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.7) inset, 0 8px 20px -4px rgba(20,60,15,0.45)",
                  }}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-500 group-hover:rotate-6" style={{ color: "#4F9928" }} />
                </div>
                <h3
                  className="relative font-serif text-xl sm:text-2xl mb-2"
                  style={{
                    color: "#FFE9A1",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  className="relative text-[14px] sm:text-[15px]"
                  style={{
                    color: "rgba(255,253,236,0.92)",
                    lineHeight: 1.5,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default CreekPool;
