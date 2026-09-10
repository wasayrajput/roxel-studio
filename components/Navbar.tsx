"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/siteConfig";
import { Sun, Moon, Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#090d16]/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={siteConfig.logo}
            alt="Roxel Studio"
            className="h-10 sm:h-12 w-auto object-contain rounded-xl shadow-glow group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-medium text-sm text-slate-700 dark:text-slate-300">
          <a href="#" className="hover:text-brand-cyan transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-brand-cyan transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-brand-cyan transition-colors">
            Services
          </a>
          <a href="#portfolio" className="hover:text-brand-cyan transition-colors">
            Work
          </a>
          <a href="#team" className="hover:text-brand-cyan transition-colors">
            Team
          </a>
          <a href="#contact" className="hover:text-brand-cyan transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Section: Status Badge & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Live Availability Status Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shadow-glow-emerald">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available {siteConfig.availability.quarter}</span>
          </div>

          {/* Dark / Light Mode Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-brand-cyan dark:hover:text-brand-cyan transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-glow hover:opacity-90 hover:scale-105 transition-all"
          >
            <Mail size={15} />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-slate-800 dark:text-slate-200 font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for projects</span>
              </div>

              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-brand-cyan"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-brand-cyan"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-brand-cyan"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-brand-cyan"
              >
                Work / Portfolio
              </a>
              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-brand-cyan"
              >
                Team
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-brand-cyan"
              >
                Contact Us
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold text-sm shadow-glow mt-2"
              >
                <Mail size={18} />
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
