"use client";

import { siteConfig } from "@/config/siteConfig";
import { X, Calendar, Clock, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                <Calendar size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Book 15-Min Project Discovery Call
                </h3>
                <p className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock size={12} /> Direct 1-on-1 Strategy Session with Roxel Studio Lead
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Calendly Embed Body */}
          <div className="flex-1 w-full bg-white relative">
            <iframe
              src={`${siteConfig.calendly.url}?hide_landing_page_details=1&hide_gdpr_banner=1`}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduling"
              className="w-full h-full min-h-[500px]"
            />
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-slate-900 text-slate-400 text-xs flex items-center justify-between border-t border-slate-800 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck size={14} /> Free Consultation - Zero Obligation
            </span>
            <span>Roxel Studio © 2026</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
