"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projectsData";
import CaseStudyModal from "./CaseStudyModal";
import { FolderGit2, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Web App", "Mobile App", "UI/UX Redesign", "Graphic Design"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-cyan/20">
            <FolderGit2 size={14} />
            <span>Selected Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Our Engineering Portfolio
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore recent software products, cross-platform mobile apps, and interactive Figma redesigns engineered by Roxel Studio.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 shadow-glow"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-brand-cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-brand-cyan transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Card Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-brand-cyan text-[11px] font-bold border border-slate-700">
                  {project.category}
                </span>

                {project.beforeAfter && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[11px] font-bold shadow-md flex items-center gap-1">
                    <Sparkles size={12} />
                    Before/After Slider
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-brand-cyan transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Pills & CTA */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-brand-cyan group-hover:translate-x-1 transition-transform">
                    <span>View Interactive Case Study</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
