"use client";

import { ShieldCheck, Code2, Rocket, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#0c121e] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20">
              <Layers size={14} />
              <span>About Roxel Studio</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
              We Build Software Systems That Power Modern Businesses
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Roxel Studio is a specialized digital software engineering agency. We bridge product strategy, modern frontend frameworks, cross-platform mobile apps, and scalable cloud backends into high-performance digital products.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our multidisciplinary engineering team works closely with founders, startups, and enterprises to deliver clean code architectures, intuitive UI/UX systems, and reliable software infrastructure.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  Modern Next.js & Flutter Stack
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  High-Conversion UI/UX Systems
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  Scalable Microservice Architecture
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 size={18} className="text-brand-cyan flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  Direct Engineering Collaboration
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Core Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-bold">
                <Code2 size={20} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-950 dark:text-white font-mono tracking-tight">
                25+
              </h3>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Software Products Delivered
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fullstack web platforms, mobile solutions, and enterprise design systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
                99.9%
              </h3>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Uptime & Reliability
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Robust zero-downtime APIs and Vercel edge deployment architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 sm:col-span-2"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Rocket size={20} />
              </div>
              <h4 className="font-bold text-base text-slate-950 dark:text-white">
                End-to-End Software Product Cycle
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                From initial wireframing in Figma to frontend Next.js engineering, Flutter mobile development, and backend MongoDB/Node.js API deployment.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
