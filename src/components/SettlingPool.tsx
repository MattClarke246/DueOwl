"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   SettlingPool — Pricing
   Desktop: 3-col grid with "Most loved" card elevated.
   Mobile: single-column stack with tighter spacing, smaller
   prices, and compact feature lists so cards don't overflow.
   ───────────────────────────────────────────────────────────── */

type Tier = {
  id: "free" | "medium" | "advanced";
  name: string;
  blurb: string;
  price: string;
  cadence: string;
  cta: string;
  highlight?: boolean;
  features: string[];
};

const TIERS: Tier[] = [
  {
    id: "free",
    name: "Free",
    blurb: "For solo operators sending the occasional invoice.",
    price: "$0",
    cadence: "forever",
    cta: "Start free",
    features: [
      "Up to 5 active invoices",
      "2 automated reminder steps",
      "Email reminders only",
      "Standard Due Owl branding",
    ],
  },
  {
    id: "medium",
    name: "Medium",
    blurb: "For growing studios and small firms ready to automate.",
    price: "$24",
    cadence: "/ month",
    cta: "Start 14-day trial",
    highlight: true,
    features: [
      "Unlimited invoices",
      "Custom reminder cadence",
      "Email + SMS reach-out",
      "One-tap pay links (card, ACH)",
      "Custom sender domain",
      "Quickbooks & Xero sync",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    blurb: "For teams managing high-volume receivables.",
    price: "$72",
    cadence: "/ month",
    cta: "Talk to sales",
    features: [
      "Everything in Medium",
      "Multi-seat workspace",
      "Approval workflows",
      "Priority support & SLA",
      "API access & webhooks",
      "Dedicated success manager",
    ],
  },
];

export function SettlingPool() {
  return (
    <section id="pricing" className="relative scroll-mt-24">
      {/* MOBILE-ONLY: settling pool band. Top color (#9FD3F0) matches the
          base of WaterfallPipeline; bottom color (#1F6BA4) matches the
          top of Footer's deep-pond floor. */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #9FD3F0 0%, #5DADE2 25%, #3FA0DC 55%, #2080C8 85%, #1F6BA4 100%)",
        }}
      />
      {/* Subtle ripple highlights on the pool surface */}
      <div
        aria-hidden
        className="md:hidden pointer-events-none absolute inset-x-0 top-[8%] h-20 z-0 opacity-60"
        style={{
          background:
            "repeating-radial-gradient(ellipse 120% 12px at 50% 50%, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 18px)",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 50%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 50%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 py-6 md:py-8 lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-4 sm:mb-6 md:mb-8 max-w-2xl text-center"
        >
          <p
            className="mb-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.24em] text-white/85"
            style={{ textShadow: "0 1px 8px rgba(15,40,70,0.4)" }}
          >
            Pricing
          </p>
          <h2
            className="font-serif text-balance text-white text-3xl sm:text-4xl md:text-5xl"
            style={{
              lineHeight: 1.05,
              letterSpacing: "-0.022em",
              textShadow: "0 2px 16px rgba(15,40,70,0.4)",
            }}
          >
            Honest pricing.{" "}
            <span className="italic" style={{ color: "#FFE9A1" }}>
              No surprises.
            </span>
          </h2>
          <p
            className="mt-4 text-balance text-white/95"
            style={{
              fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
              lineHeight: 1.5,
              letterSpacing: "-0.005em",
              textShadow: "0 1px 8px rgba(15,40,70,0.4)",
            }}
          >
            Start free. Upgrade only when Due Owl pays for itself.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-6 sm:mb-8 flex items-center justify-center gap-3"
        >
          <span className="text-sm font-medium text-white/90" style={{ textShadow: "0 1px 4px rgba(15,40,70,0.5)" }}>Monthly</span>
          <button
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            style={{ background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)" }}
            aria-label="Toggle annual billing"
          >
            <span
              className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition-transform duration-300 shadow-sm"
            />
          </button>
          <div className="flex items-center gap-2 text-sm font-medium text-white/90" style={{ textShadow: "0 1px 4px rgba(15,40,70,0.5)" }}>
            <span>Annually</span>
            <span className="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-stone-900" style={{ background: "#E5B547", boxShadow: "0 2px 8px rgba(182,134,42,0.6)" }}>
              SAVE 20%
            </span>
          </div>
        </motion.div>

        {/* Mobile: reorder so "Medium" (highlighted) card appears first */}
        <div className="mx-auto grid max-w-6xl gap-3 sm:gap-4 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className={cn(
                "group relative flex flex-col rounded-2xl p-4 sm:p-5 transition-all duration-500 hover:-translate-y-2",
                tier.highlight
                  ? "order-first md:order-none ring-2 ring-[#E5B547]/55 md:ring-0 md:-mt-4 md:mb-4 z-10"
                  : "z-0"
              )}
              style={
                tier.highlight
                  ? {
                      background:
                        "linear-gradient(180deg, rgba(255,253,236,0.96) 0%, rgba(245,230,184,0.94) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(229,181,71,0.55)",
                      boxShadow:
                        "0 1px 0 rgba(255,255,255,0.8) inset, 0 26px 60px -18px rgba(182,134,42,0.5), 0 8px 30px -8px rgba(15,40,70,0.3)",
                    }
                  : {
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.82) 100%)",
                      backdropFilter: "blur(20px) saturate(140%)",
                      WebkitBackdropFilter: "blur(20px) saturate(140%)",
                      border: "1px solid rgba(255,255,255,0.7)",
                      boxShadow:
                        "0 1px 0 rgba(255,255,255,0.85) inset, 0 24px 55px -20px rgba(15,40,70,0.45)",
                    }
              }
            >
              {tier.highlight && (
                <>
                  {/* Outer glow behind the highlighted card */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-50 transition-opacity duration-500 group-hover:opacity-80 hidden md:block"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(229,181,71,0.4) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-tight text-white shadow-soft relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(180deg, #E5B547 0%, #B6862A 100%)",
                      }}
                    >
                      <div className="absolute inset-0 water-shimmer" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", width: "200%" }} />
                      <Sparkles className="h-3 w-3 relative z-10" />
                      <span className="relative z-10">Most loved</span>
                    </div>
                  </div>
                </>
              )}

              <div className="mb-3">
                <h3
                  className="font-serif text-lg sm:text-xl"
                  style={{
                    color: tier.highlight ? "#8E5E3E" : "#1d2620",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  className="mt-1 text-[12px]"
                  style={{
                    color: "rgba(40,60,40,0.72)",
                    lineHeight: 1.45,
                    letterSpacing: "-0.003em",
                  }}
                >
                  {tier.blurb}
                </p>
              </div>

              <div className="mb-4 flex items-baseline gap-1.5">
                <span
                  className="font-serif text-3xl sm:text-4xl"
                  style={{
                    color: "#1d2620",
                    letterSpacing: "-0.028em",
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{ color: "rgba(40,60,40,0.62)", letterSpacing: "-0.005em" }}
                  className="text-[12px] sm:text-[13px] font-medium"
                >
                  {tier.cadence}
                </span>
              </div>

              <ul className="mb-5 space-y-2">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[12px] sm:text-[13px]"
                    style={{
                      color: "rgba(29,38,32,0.92)",
                      lineHeight: 1.45,
                      letterSpacing: "-0.003em",
                    }}
                  >
                    <span
                      className="mt-0.5 grid h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 place-items-center rounded-full"
                      style={{
                        background: tier.highlight
                          ? "rgba(229,181,71,0.22)"
                          : "rgba(143,193,75,0.24)",
                        color: tier.highlight ? "#8E5E3E" : "#4F9928",
                      }}
                    >
                      <Check className="h-2 w-2 sm:h-2.5 sm:w-2.5" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  size="sm"
                  variant={tier.highlight ? "bronze" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          className="mt-5 sm:mt-7 text-center text-[12px] sm:text-[13px] text-white/85"
          style={{
            letterSpacing: "-0.005em",
            textShadow: "0 1px 6px rgba(15,40,70,0.4)",
          }}
        >
          All plans include unlimited clients, end-to-end encryption, and a
          30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}

export default SettlingPool;
