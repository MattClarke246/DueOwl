"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Send,
  Wallet,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Step = {
  id: string;
  index: string;
  icon: LucideIcon;
  title: string;
  body: string;
  accent: "sky" | "owl" | "bronze" | "stone";
};

const STEPS: Step[] = [
  {
    id: "invoice",
    index: "01",
    icon: FileText,
    title: "Automated invoice",
    body:
      "Connect your accounting tool or upload a PDF. Due Owl reads the amount, due date, and client details — no manual entry, no spreadsheets.",
    accent: "sky",
  },
  {
    id: "reach-out",
    index: "02",
    icon: Send,
    title: "Client reach-out",
    body:
      "Warm, on-brand reminders go out on a schedule you set. We escalate tone gently — never robotic, never aggressive — so the relationship stays intact.",
    accent: "owl",
  },
  {
    id: "remittance",
    index: "03",
    icon: Wallet,
    title: "Remittance",
    body:
      "One-tap pay links open the path. Clients pay by card, ACH, or wire from the email itself — and you watch the funds arrive in real time.",
    accent: "bronze",
  },
  {
    id: "receipt",
    index: "04",
    icon: CheckCircle2,
    title: "Receipt",
    body:
      "We send the thank-you, mark the invoice paid, and tuck the receipt into your books. The loop closes itself — quietly, completely.",
    accent: "stone",
  },
];

const accentMap: Record<Step["accent"], { dot: string; ring: string; ink: string }> = {
  sky: {
    dot: "bg-sky-400",
    ring: "ring-sky-200",
    ink: "text-sky-600",
  },
  owl: {
    dot: "bg-owl-500",
    ring: "ring-owl-200",
    ink: "text-owl-600",
  },
  bronze: {
    dot: "bg-bronze-400",
    ring: "ring-bronze-200",
    ink: "text-bronze-500",
  },
  stone: {
    dot: "bg-stone-800",
    ring: "ring-stone-300",
    ink: "text-stone-700",
  },
};

export function Pipeline() {
  return (
    <section
      id="how"
      className="relative isolate overflow-hidden py-32 sm:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cream-100/60"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent"
      />

      <div className="container">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-bronze-500">
            How it works
          </p>
          <h2 className="font-serif text-balance text-4xl leading-tight tracking-tight sm:text-5xl">
            Four quiet steps,
            <br />
            <span className="italic text-stone-500">from invoice to paid.</span>
          </h2>
          <p className="mt-6 text-balance text-stone-600">
            Every step runs on its own. You set the cadence once — Due Owl
            handles the rest with the kind of patience the work deserves.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical track line */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-12 md:space-y-20">
            {STEPS.map((step, i) => {
              const accent = accentMap[step.accent];
              const Icon = step.icon;
              const isRight = i % 2 === 1;

              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative grid grid-cols-[56px_1fr] gap-6 md:grid-cols-2 md:gap-10"
                >
                  {/* Node + index — left rail on mobile, center rail on desktop */}
                  <div
                    className={
                      "relative flex items-start md:col-start-1 md:row-start-1 md:justify-end " +
                      (isRight ? "md:order-2 md:justify-start" : "")
                    }
                  >
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1">
                      <div
                        className={`relative grid h-14 w-14 place-items-center rounded-full bg-white shadow-soft ring-8 ${accent.ring}`}
                      >
                        <span
                          className={`absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full ${accent.dot} text-[10px] font-medium text-white`}
                        >
                          {i + 1}
                        </span>
                        <Icon className={`h-6 w-6 ${accent.ink}`} />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={
                      "md:row-start-1 " +
                      (isRight
                        ? "md:col-start-2 md:pl-12"
                        : "md:col-start-2 md:pl-12")
                    }
                  >
                    <div className="glass rounded-2xl p-6 md:p-8">
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className={`font-serif text-3xl tracking-tight ${accent.ink}`}
                        >
                          {step.index}
                        </span>
                        <div className="h-px flex-1 bg-stone-200" />
                        <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400">
                          Step
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl leading-tight tracking-tight text-stone-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Pipeline;
