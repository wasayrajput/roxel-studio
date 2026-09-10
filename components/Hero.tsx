"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { MessageSquare, ArrowRight, Code2, Smartphone, Layout, Palette, Cpu } from "lucide-react";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white dark:bg-[#090d16]">
      {/* Glow Ambient Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Digital Product Agency</span>
          <span className="text-slate-400">•</span>
          <span className="text-brand-cyan font-mono">{siteConfig.availability.quarter}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white max-w-4xl mx-auto leading-[1.1]"
        >
          Architecting High-Impact{" "}
          <span className="bg-gradient-to-r from-brand-cyan via-cyan-400 to-brand-blue bg-clip-text text-transparent">
            Web & Mobile Software
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Roxel Studio designs and builds scalable Next.js 14 platforms, cross-platform Flutter mobile apps, graphic branding, and enterprise Figma UI/UX design systems.
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          {/* Work / Portfolio Link */}
          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow hover:opacity-95 transition-all"
          >
            <span>Explore Our Work</span>
            <ArrowRight size={16} />
          </a>

          {/* WhatsApp Direct Chat Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-glow-emerald"
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Core Capabilities Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-500 uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-brand-cyan" />
            <span>Next.js 14 & MERN</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone size={16} className="text-brand-cyan" />
            <span>Flutter iOS & Android</span>
          </div>
          <div className="flex items-center gap-2">
            <Layout size={16} className="text-brand-cyan" />
            <span>Figma UI/UX Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <Palette size={16} className="text-brand-cyan" />
            <span>Graphic Design & Branding</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu size={16} className="text-brand-cyan" />
            <span>Backend Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
