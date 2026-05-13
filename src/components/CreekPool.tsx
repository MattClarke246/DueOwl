"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap, Shield, BarChart3 } from "lucide-react";
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

export function CreekPool() {
  return (
    <section id="features" className="relative">
      <div className="container relative z-10 py-6 sm:py-8 md:py-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/20 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium text-white backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" style={{ color: "#F5E6B8" }} />
            The quiet way to collect what you&apos;re owed
          </motion.div>

          <motion.h1
            variants={FADE_UP}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-serif text-balance text-3xl leading-[1.1] tracking-tight sm:text-5xl md:text-7xl lg:text-[5.5rem] sm:leading-[1.05]"
            style={{
              textShadow:
                "0 4px 32px rgba(15,40,70,0.6), 0 2px 8px rgba(15,40,70,0.5)",
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
            <span className="italic text-white/90">Seamless flow.</span>{" "}
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
            className="mx-auto mt-4 sm:mt-7 max-w-xl text-balance text-sm leading-relaxed text-white sm:text-base md:text-lg"
            style={{
              textShadow: "0 1px 12px rgba(15,40,70,0.55)",
            }}
          >
            Due Owl follows up on late invoices for you — politely, on schedule,
            and entirely on its own — so your cash keeps flowing while you focus
            on the work that matters.
          </motion.p>

          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
            className="mt-4 sm:mt-5 text-[11px] sm:text-xs text-white/85"
            style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
          >
            Free forever for up to 5 invoices a month · No card required
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-5%" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto mt-6 sm:mt-10 grid max-w-5xl gap-3 sm:gap-4 md:grid-cols-3"
        >
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={FADE_UP}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 transition-all duration-500 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.18) 100%)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  WebkitBackdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.42)",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.45) inset, 0 22px 55px -20px rgba(15,40,70,0.45)",
                }}
              >
                <div className="mb-3 sm:mb-4 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-white/30 ring-1 ring-white/40 transition-all duration-300 group-hover:bg-white/45 group-hover:ring-white/60">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3
                  className="font-serif text-lg sm:text-xl tracking-tight text-white mb-1.5 sm:mb-2"
                  style={{ textShadow: "0 1px 8px rgba(15,40,70,0.45)" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-[13px] sm:text-sm leading-relaxed text-white/90"
                  style={{ textShadow: "0 1px 6px rgba(15,40,70,0.45)" }}
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
