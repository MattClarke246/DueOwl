import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Footer — Transparent overlay
   Sits over the pool-at-base region of the full-page background
   image. White type + strong shadows so it reads against the
   illustrated water.
   ───────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="relative">
      <div className="container relative z-10 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <div
                className="grid h-9 w-9 place-items-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFCEC 0%, #F5E6B8 100%)",
                  boxShadow:
                    "0 6px 16px -6px rgba(15,40,70,0.5), 0 1px 0 rgba(255,255,255,0.6) inset",
                }}
              >
                <span
                  className="font-serif text-lg leading-none"
                  style={{ color: "#4F9928" }}
                >
                  d
                </span>
              </div>
              <span
                className="font-serif text-xl tracking-tight text-white"
                style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
              >
                due
                <span style={{ color: "#FFE9A1" }}>owl</span>
              </span>
            </div>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed text-white/90"
              style={{ textShadow: "0 1px 8px rgba(15,40,70,0.55)" }}
            >
              The quiet way to collect what you&apos;re owed. Built for studios,
              consultants, and growing firms.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3"
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
                  className="mb-3 text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: "rgba(255,253,236,0.75)" }}
                >
                  {col.h}
                </p>
                <ul className="space-y-2">
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
          className="mt-12 flex flex-col items-start justify-between gap-2 pt-6 text-xs sm:flex-row sm:items-center"
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
