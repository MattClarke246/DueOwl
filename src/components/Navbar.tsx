"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar({ isVideoFinished = true }: { isVideoFinished?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVideoFinished ? 1 : 0, y: isVideoFinished ? 0 : -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container pt-4">
        <div className="flex items-center justify-between rounded-full glass px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-owl-500 text-cream-50 shadow-soft">
              <span className="font-serif text-base leading-none">d</span>
            </div>
            <span className="font-serif text-xl tracking-tight">
              due<span className="text-bronze-400">owl</span>
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            <a className="hover:text-stone-900 transition-colors duration-300" href="#features">
              Features
            </a>
            <a className="hover:text-stone-900 transition-colors duration-300" href="#how">
              How it works
            </a>
            <a className="hover:text-stone-900 transition-colors duration-300" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-stone-900 transition-colors duration-300" href="#about">
              About
            </a>
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
