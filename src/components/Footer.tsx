import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Footer — Transparent overlay
   Mobile: compact single-column layout with smaller text.
   Desktop: side-by-side logo + link columns.
   ───────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="relative">
      {/* Removed mobile-only background bands since main image is now responsive */}
      <div className="container relative z-10 py-6 md:pt-10 md:pb-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Due_Owl_Mark.png"
                alt=""
                aria-hidden="true"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                style={{
                  filter: "drop-shadow(0 6px 16px rgba(15,40,70,0.35))",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Due_Owl_Wordmark.png"
                alt="dueowl"
                className="h-7 sm:h-8 w-auto"
                style={{
                  filter: "drop-shadow(0 2px 10px rgba(15,40,70,0.3))",
                }}
              />
            </div>
            <p
              className="mt-3 sm:mt-4 max-w-xs text-[14px] sm:text-[15px] text-white/90"
              style={{
                lineHeight: 1.5,
                letterSpacing: "-0.005em",
                textShadow: "0 1px 6px rgba(15,40,70,0.35)",
              }}
            >
              The quiet way to collect what you&apos;re owed. Built for studios,
              consultants, and growing firms.
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-2 text-[14px] sm:text-[14px] w-full md:w-auto"
            style={{
              color: "rgba(255,255,255,0.92)",
              letterSpacing: "-0.005em",
              textShadow: "0 1px 6px rgba(15,40,70,0.35)",
            }}
          >
            {[
              { h: "Product", items: ["Features", "Pricing", "Changelog"] },
              { h: "Company", items: ["About", "Customers", "Contact"] },
              { h: "Legal", items: ["Privacy", "Terms", "Security"] },
            ].map((col) => (
              <div key={col.h}>
                <p
                  className="mb-2 sm:mb-3 text-[10px] sm:text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: "rgba(255,253,236,0.75)" }}
                >
                  {col.h}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 transition"
                      >
                        {item}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-5 sm:mt-6 flex flex-col items-start justify-between gap-1.5 sm:gap-2 pt-3 sm:pt-4 text-[10px] sm:text-xs sm:flex-row sm:items-center"
          style={{
            borderTop: "1px solid rgba(255,253,236,0.28)",
            color: "rgba(255,253,236,0.85)",
            textShadow: "0 1px 6px rgba(15,40,70,0.55)",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Due Owl, Inc. Made patiently.</p>
          <p className="font-serif italic">
            Seamless flow. Endless growth.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
