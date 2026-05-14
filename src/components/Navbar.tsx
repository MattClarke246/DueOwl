"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar({ isVideoFinished = true }: { isVideoFinished?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVideoFinished ? 1 : 0, y: isVideoFinished ? 0 : -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
    >
      <div className={cn("container transition-all duration-500", scrolled ? "pt-2" : "pt-4")}>
        <div 
          className={cn(
            "flex items-center justify-between rounded-full px-5 transition-all duration-500",
            scrolled ? "py-2.5 bg-white/80 backdrop-blur-xl shadow-lg border border-white/40" : "py-3 glass"
          )}
        >
          <a href="/" className="flex items-center" aria-label="Due Owl home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/DueOwlLogo.jpg"
              alt="Due Owl"
              className="h-10 w-auto rounded-lg object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-[14px] font-medium text-stone-700 md:flex" style={{ letterSpacing: "-0.01em" }}>
            {[
              { name: "Features", href: "#features" },
              { name: "How it works", href: "#how" },
              { name: "Pricing", href: "#pricing" },
              { name: "About", href: "#about" }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="relative group py-1 transition-colors duration-300 hover:text-stone-900"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-stone-800 transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button size="sm" variant="default">
              Start free
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-2 md:hidden p-2 rounded-full hover:bg-white/40 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl glass p-4 md:hidden"
          >
            <div className="flex flex-col gap-3 text-sm text-stone-600">
              <a onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/60 transition" href="#features">Features</a>
              <a onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/60 transition" href="#how">How it works</a>
              <a onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/60 transition" href="#pricing">Pricing</a>
              <a onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded-lg hover:bg-white/60 transition" href="#about">About</a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

export default Navbar;
