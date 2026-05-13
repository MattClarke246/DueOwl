import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Footer — Transparent overlay
   Mobile: compact single-column layout with smaller text.
   Desktop: side-by-side logo + link columns.
   ───────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="relative">
      {/* MOBILE-ONLY: deep pond floor band — top color matches the bottom
          of SettlingPool so the storybook ends on a quiet, deep note. */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #1F6BA4 0%, #155282 55%, #0E3D63 100%)",
        }}
      />
      <div className="container relative z-10 py-8 sm:py-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <div
                className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFCEC 0%, #F5E6B8 100%)",
                  boxShadow:
                    "0 6px 16px -6px rgba(15,40,70,0.5), 0 1px 0 rgba(255,255,255,0.6) inset",
                }}
              >
                <span
                  className="font-serif text-base sm:text-lg leading-none"
                  style={{ color: "#4F9928" }}
                >
                  d
                </span>
              </div>
              <span
                className="font-serif text-lg sm:text-xl tracking-tight text-white"
                style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
              >
                due
                <span style={{ color: "#FFE9A1" }}>owl</span>
              </span>
            </div>
            <p
              className="mt-3 sm:mt-4 max-w-xs text-[13px] sm:text-sm leading-relaxed text-white/90"
              style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
            >
              The quiet way to collect what you&apos;re owed. Built for studios,
              consultants, and growing firms.
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-2 text-[13px] sm:text-sm w-full md:w-auto"
            style={{
              color: "rgba(255,255,255,0.92)",
              textShadow: "0 1px 8px rgba(15,40,70,0.55)",
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
