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
   Transparent overlay over the waterfall + cliff region of the
   full-page background image. The illustrated waterfall on the
   LEFT is part of the background already; the pipeline steps
   sit on the RIGHT side over the rocky/green cliff edge.
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
    <section id="how" className="relative">
      <div className="container relative z-10 py-6 sm:py-8 md:py-10">
        <div className="md:ml-auto md:max-w-[56%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="mb-6 sm:mb-8"
          >
            <p
              className="mb-4 text-xs uppercase tracking-[0.22em] text-white/90"
              style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
            >
              How it works
            </p>
            <h2
              className="font-serif text-balance text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              style={{
                textShadow:
                  "0 2px 22px rgba(15,40,70,0.6), 0 1px 4px rgba(15,40,70,0.5)",
              }}
            >
              Four quiet steps,
              <br />
              <span className="italic" style={{ color: "#FFE9A1" }}>
                from invoice to paid.
              </span>
            </h2>
            <p
              className="mt-6 max-w-lg text-balance text-white/95 text-sm sm:text-base"
              style={{ textShadow: "0 1px 10px rgba(15,40,70,0.55)" }}
            >
              Every step runs on its own. You set the cadence once — Due Owl
              handles the rest with the kind of patience the work deserves.
            </p>
          </motion.div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[27px] top-4 bottom-4 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.6) 90%, transparent 100%)",
              }}
            />

            <ol className="space-y-4 sm:space-y-5">
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
                    className="relative grid grid-cols-[56px_1fr] gap-4 sm:gap-6"
                  >
                    <div className="relative flex items-start">
                      <div
                        className="relative grid h-14 w-14 place-items-center rounded-full"
                        style={{
                          background: "#FFFCEC",
                          boxShadow:
                            "0 0 0 4px rgba(255,253,236,0.35), 0 10px 24px -8px rgba(15,40,70,0.45)",
                        }}
                      >
                        <span
                          className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full text-[10px] font-medium text-white"
                          style={{ background: "#E5B547" }}
                        >
                          {i + 1}
                        </span>
                        <Icon
                          className="h-6 w-6"
                          style={{ color: "#8E5E3E" }}
                        />
                      </div>
                    </div>

                    <div
                      className="rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5"
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
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className="font-serif text-2xl sm:text-3xl tracking-tight"
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
                          className="text-[10px] uppercase tracking-[0.18em]"
                          style={{ color: "rgba(91,59,38,0.55)" }}
                        >
                          Step
                        </span>
                      </div>
                      <h3
                        className="font-serif text-xl sm:text-2xl leading-tight tracking-tight"
                        style={{ color: "#3a2618" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-3 text-sm sm:text-[15px] leading-relaxed"
                        style={{ color: "rgba(58,38,24,0.8)" }}
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
