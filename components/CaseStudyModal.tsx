"use client";

import { Project } from "@/data/projectsData";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { X, ExternalLink, CheckCircle2, Clock, Users, ArrowUpRight } from "lucide-react";
import { FigmaIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-[#0c121e]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate max-w-md">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Visual Showcase (Before/After Slider OR Featured Banner) */}
            {project.beforeAfter ? (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Interactive Redesign Slider (Drag to Compare)
                </h4>
                <BeforeAfterSlider
                  beforeImage={project.beforeAfter.beforeImage}
                  afterImage={project.beforeAfter.afterImage}
                  beforeTitle={project.beforeAfter.beforeTitle}
                  afterTitle={project.beforeAfter.afterTitle}
                />
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 sm:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Quick Metrics & Info Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-3">
                <Users className="text-brand-cyan" size={18} />
                <div>
                  <span className="text-slate-500 block">Client</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{project.client}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-brand-cyan" size={18} />
                <div>
                  <span className="text-slate-500 block">Timeline</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{project.timeline}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-400" size={18} />
                <div>
                  <span className="text-slate-500 block">Result</span>
                  <span className="font-semibold text-emerald-400">{project.metrics}</span>
                </div>
              </div>
            </div>

            {/* Problem vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-slate-700 dark:text-slate-300">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
                  The Problem Statement
                </h4>
                <p className="text-sm leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-slate-700 dark:text-slate-300">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Roxel Studio Solution
                </h4>
                <p className="text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Deliverables & Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Features Delivered
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <CheckCircle2 size={15} className="text-brand-cyan flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Technology Stack Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-brand-cyan text-xs font-mono font-semibold border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Live Demo & Figma Link */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow hover:scale-105 transition-all"
                >
                  <ExternalLink size={16} />
                  <span>Launch Live Demo</span>
                </a>
              )}

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs border border-slate-700 hover:border-brand-cyan transition-all"
                >
                  <FigmaIcon size={16} className="text-purple-400" />
                  <span>View Figma Prototype</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
