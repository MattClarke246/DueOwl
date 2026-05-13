"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   SettlingPool — Pricing
   Transparent overlay over the pool at the base of the waterfall
   in the full-page background image. Pricing cards rest on the
   illustrated pool surface like stepping-stones.
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
    <section id="pricing" className="relative">
      <div className="container relative z-10 py-10 sm:py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 sm:mb-10 max-w-2xl text-center"
        >
          <p
            className="mb-4 text-xs uppercase tracking-[0.22em] text-white/90"
            style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
          >
            Pricing
          </p>
          <h2
            className="font-serif text-balance text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl text-white"
            style={{
              textShadow:
                "0 2px 22px rgba(15,40,70,0.6), 0 1px 4px rgba(15,40,70,0.5)",
            }}
          >
            Honest pricing.
            <br />
            <span className="italic" style={{ color: "#FFE9A1" }}>
              No surprises.
            </span>
          </h2>
          <p
            className="mt-6 text-balance text-white/95"
            style={{ textShadow: "0 1px 10px rgba(15,40,70,0.55)" }}
          >
            Start free. Upgrade only when Due Owl pays for itself — which it
            usually does in the first reminder cycle.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
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
                "group relative flex flex-col rounded-3xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1",
                tier.highlight ? "md:-mt-4 md:mb-4" : ""
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-tight text-white shadow-soft"
                    style={{
                      background:
                        "linear-gradient(180deg, #E5B547 0%, #B6862A 100%)",
                    }}
                  >
                    <Sparkles className="h-3 w-3" />
                    Most loved
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="font-serif text-2xl tracking-tight"
                  style={{ color: tier.highlight ? "#8E5E3E" : "#23362A" }}
                >
                  {tier.name}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "rgba(40,60,40,0.72)" }}
                >
                  {tier.blurb}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1.5">
                <span
                  className="font-serif text-5xl tracking-tight"
                  style={{ color: "#23362A" }}
                >
                  {tier.price}
                </span>
                <span
                  style={{ color: "rgba(40,60,40,0.6)" }}
                  className="text-sm"
                >
                  {tier.cadence}
                </span>
              </div>

              <ul className="mb-10 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14.5px]"
                    style={{ color: "rgba(35,54,42,0.92)" }}
                  >
                    <span
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                      style={{
                        background: tier.highlight
                          ? "rgba(229,181,71,0.22)"
                          : "rgba(143,193,75,0.24)",
                        color: tier.highlight ? "#8E5E3E" : "#4F9928",
                      }}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  size="lg"
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
          className="mt-12 text-center text-xs text-white/85"
          style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
        >
          All plans include unlimited clients, end-to-end encryption, and a
          30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}

export default SettlingPool;
