"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Send,
  Wallet,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   WaterfallPipeline — "How it works"
   Desktop: steps sit on the RIGHT 50% so the illustrated
   waterfall is visible on the left.
   Mobile: steps go FULL WIDTH (centered) since the background
   waterfall isn't visible at mobile scale. The section gets its
   own semi-transparent dark backdrop for legibility.
   ───────────────────────────────────────────────────────────── */

type Step = {
  id: string;
  index: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    id: "invoice",
    index: "01",
    icon: FileText,
    title: "Automated invoice",
    body: "Connect your accounting tool or upload a PDF. Due Owl reads the amount, due date, and client details — no manual entry, no spreadsheets.",
  },
  {
    id: "reach-out",
    index: "02",
    icon: Send,
    title: "Client reach-out",
    body: "Warm, on-brand reminders go out on a schedule you set. We escalate tone gently — never robotic, never aggressive — so the relationship stays intact.",
  },
  {
    id: "remittance",
    index: "03",
    icon: Wallet,
    title: "Remittance",
    body: "One-tap pay links open the path. Clients pay by card, ACH, or wire from the email itself — and you watch the funds arrive in real time.",
  },
  {
    id: "receipt",
    index: "04",
    icon: CheckCircle2,
    title: "Receipt",
    body: "We send the thank-you, mark the invoice paid, and tuck the receipt into your books. The loop closes itself — quietly, completely.",
  },
];

export function WaterfallPipeline() {
  return (
    <section id="how" className="relative scroll-mt-24">
      {/* MOBILE-ONLY: rocky cliff band — warm rock walls flanking an
          animated cascading water strip down the middle. Top color
          (#6A6E3D) matches CreekPool's bottom; bottom color (#9FD3F0)
          matches SettlingPool's top. */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #6A6E3D 0%, #8E5E3E 14%, #B6815A 32%, #8E5E3E 70%, #5B3B26 92%, #9FD3F0 100%)",
        }}
      />
      {/* Warm rock columns on left and right */}
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute inset-y-0 left-0 w-[28%] z-0 opacity-70"
        style={{
          background:
            "linear-gradient(90deg, rgba(91,59,38,0.55) 0%, rgba(142,94,62,0.35) 60%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute inset-y-0 right-0 w-[28%] z-0 opacity-70"
        style={{
          background:
            "linear-gradient(270deg, rgba(91,59,38,0.55) 0%, rgba(142,94,62,0.35) 60%, transparent 100%)",
        }}
      />
      {/* Cascading water strip down the centre — uses the
          waterfallCascade keyframe defined in globals.css */}
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-[42%] z-0 opacity-85"
        style={{
          background:
            "linear-gradient(180deg, rgba(234,246,253,0) 0%, rgba(159,211,240,0.7) 6%, rgba(93,173,226,0.75) 35%, rgba(63,160,220,0.7) 65%, rgba(159,211,240,0.6) 92%, rgba(234,246,253,0) 100%), repeating-linear-gradient(180deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 2px, transparent 2px, transparent 8px)",
          backgroundSize: "100% 100%, 100% 24px",
          animation: "waterfallCascade 2.4s linear infinite",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      />
      {/* Mist puffs at top and base of the falls */}
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute inset-x-0 top-[6%] h-16 z-0 opacity-55"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 30%, rgba(234,246,253,0.7) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute inset-x-0 bottom-[4%] h-20 z-0 opacity-70"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 70%, rgba(234,246,253,0.85) 0%, rgba(159,211,240,0.4) 60%, transparent 90%)",
          filter: "blur(6px)",
        }}
      />

      <div className="container relative z-10 py-10 sm:py-12 md:py-16 lg:py-24">
        
        {/* DESKTOP-ONLY: Decorative animated waterfall element on the left side */}
        <div className="hidden md:block absolute left-4 lg:left-8 top-16 bottom-16 w-[35%] lg:w-[40%] opacity-90 pointer-events-none">
          {/* Main waterfall column */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full rounded-full overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(234,246,253,0) 0%, rgba(255,255,255,0.4) 15%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 85%, rgba(234,246,253,0) 100%)",
              boxShadow: "0 0 60px 20px rgba(255,255,255,0.15)",
              maskImage: "linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            {/* Animated cascades inside */}
            <div
              className="absolute inset-0"
              style={{
                background: "repeating-linear-gradient(180deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 4px, transparent 4px, transparent 12px)",
                backgroundSize: "100% 36px",
                animation: "waterfallCascade 1.5s linear infinite",
              }}
            />
            {/* Second layer moving faster */}
            <div
              className="absolute inset-0"
              style={{
                background: "repeating-linear-gradient(180deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 2px, transparent 2px, transparent 24px)",
                backgroundSize: "50% 64px",
                backgroundPosition: "center",
                animation: "waterfallCascade 1s linear infinite",
              }}
            />
          </div>
          
          {/* Base mist glow */}
          <div
            className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[120%] h-32 rounded-[100%]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
        </div>

        {/* Desktop: pushed right · Mobile: full width centered */}
        <div className="relative z-10 md:ml-auto md:max-w-[50%] lg:max-w-[45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="mb-5 sm:mb-6 md:mb-8"
          >
            <p
              className="mb-4 text-[11px] sm:text-xs font-medium uppercase tracking-[0.24em] text-white/85"
              style={{ textShadow: "0 1px 8px rgba(15,40,70,0.4)" }}
            >
              How it works
            </p>
            <h2
              className="font-serif text-balance text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl"
              style={{
                lineHeight: 1.05,
                letterSpacing: "-0.022em",
                textShadow: "0 2px 16px rgba(15,40,70,0.4)",
              }}
            >
              Four quiet steps,
              <br />
              <span className="italic" style={{ color: "#FFE9A1" }}>
                from invoice to paid.
              </span>
            </h2>
            <p
              className="mt-5 sm:mt-6 max-w-lg text-balance text-white/95"
              style={{
                fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
                lineHeight: 1.5,
                letterSpacing: "-0.005em",
                textShadow: "0 1px 8px rgba(15,40,70,0.4)",
              }}
            >
              Every step runs on its own. You set the cadence once — Due Owl
              handles the rest with the kind of patience the work deserves.
            </p>
          </motion.div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[23px] sm:left-[27px] top-4 bottom-4 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.6) 90%, transparent 100%)",
              }}
            />

            <ol className="space-y-3 sm:space-y-4 md:space-y-5">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.li
                    key={step.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                    className="relative grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-3 sm:gap-4 md:gap-6"
                  >
                    <div className="relative flex items-start">
                      <div
                        className="relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full"
                        style={{
                          background: "#FFFCEC",
                          boxShadow:
                            "0 0 0 4px rgba(255,253,236,0.35), 0 10px 24px -8px rgba(15,40,70,0.45)",
                        }}
                      >
                        <span
                          className="absolute -top-1 -right-1 grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full text-[9px] sm:text-[10px] font-medium text-white"
                          style={{ background: "#E5B547" }}
                        >
                          {i + 1}
                        </span>
                        <Icon
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          style={{ color: "#8E5E3E" }}
                        />
                      </div>
                    </div>

                    <div
                      className="group/card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,253,236,0.94) 0%, rgba(248,238,212,0.9) 100%)",
                        backdropFilter: "blur(14px) saturate(140%)",
                        WebkitBackdropFilter: "blur(14px) saturate(140%)",
                        border: "1px solid rgba(214,166,108,0.45)",
                        boxShadow:
                          "0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -16px rgba(15,40,70,0.5)",
                      }}
                    >
                      {/* noise texture overlay */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
                        style={{ backgroundImage: "url(/noise.png)" }}
                      />
                      
                      <div className="mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3 relative">
                        <span
                          className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight"
                          style={{ color: "#8E5E3E" }}
                        >
                          {step.index}
                        </span>
                        <div
                          className="h-px flex-1"
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(142,94,62,0.4) 0%, transparent 100%)",
                          }}
                        />
                        <span
                          className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em]"
                          style={{ color: "rgba(91,59,38,0.55)" }}
                        >
                          Step
                        </span>
                      </div>
                      <h3
                        className="font-serif text-xl sm:text-2xl md:text-[1.625rem]"
                        style={{
                          color: "#1F140A",
                          lineHeight: 1.15,
                          letterSpacing: "-0.018em",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[16px]"
                        style={{
                          color: "rgba(31,20,10,0.78)",
                          lineHeight: 1.55,
                          letterSpacing: "-0.003em",
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaterfallPipeline;
