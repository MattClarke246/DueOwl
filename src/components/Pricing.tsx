"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      "Quickbooks &amp; Xero sync",
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
      "Priority support &amp; SLA",
      "API access &amp; webhooks",
      "Dedicated success manager",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden py-32 sm:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-50 via-cream-50 to-sky-50/40"
      />

      <div className="container">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-bronze-500">
            Pricing
          </p>
          <h2 className="font-serif text-balance text-4xl leading-tight tracking-tight sm:text-5xl">
            Honest pricing.
            <br />
            <span className="italic text-stone-500">No surprises.</span>
          </h2>
          <p className="mt-6 text-balance text-stone-600">
            Start free. Upgrade only when Due Owl pays for itself — which it
            usually does in the first reminder cycle.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className={cn(
                "relative flex flex-col rounded-3xl p-8 transition-all",
                tier.highlight
                  ? "bg-gradient-to-b from-bronze-50 via-cream-50 to-cream-50 ring-1 ring-bronze-200 shadow-[0_24px_60px_-24px_rgba(168,119,38,0.35)] md:-mt-6 md:mb-6"
                  : "glass"
              )}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-bronze-300 to-bronze-400 px-3 py-1 text-[11px] font-medium tracking-tight text-stone-900 shadow-soft">
                    <Sparkles className="h-3 w-3" />
                    Most loved
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    "font-serif text-2xl tracking-tight",
                    tier.highlight ? "text-bronze-600" : "text-stone-900"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {tier.blurb}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1.5">
                <span className="font-serif text-5xl tracking-tight text-stone-900">
                  {tier.price}
                </span>
                <span className="text-sm text-stone-500">{tier.cadence}</span>
              </div>

              <ul className="mb-10 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14.5px] text-stone-700"
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        tier.highlight
                          ? "bg-bronze-100 text-bronze-500"
                          : "bg-owl-50 text-owl-500"
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: f }} />
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

        <p className="mt-12 text-center text-xs text-stone-500">
          All plans include unlimited clients, end-to-end encryption, and a
          30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
