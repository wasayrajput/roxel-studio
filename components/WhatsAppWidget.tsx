"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover chat prompt */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X size={16} />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                RS
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Roxel Studio</h4>
                <p className="text-[11px] text-emerald-500 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online - Typically replies instantly
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl">
              👋 Hi! Have a project in mind? Click below to chat directly on WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-glow-emerald transition-all"
            >
              <MessageSquare size={16} />
              Open WhatsApp Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-glow-emerald hover:bg-emerald-400 transition-colors relative group"
        aria-label="Direct WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-300 rounded-full animate-ping opacity-75"></span>
        <MessageSquare size={26} />

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium shadow-md">
          Chat on WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
