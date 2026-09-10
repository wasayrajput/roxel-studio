"use client";

import { useRef } from "react";
import { teamMembers, TeamLink } from "@/data/teamData";
import { LinkedinIcon, GithubIcon, FigmaIcon } from "@/components/SocialIcons";
import { Users, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  const renderLinkIcon = (type: TeamLink["type"]) => {
    switch (type) {
      case "github":
        return <GithubIcon size={14} />;
      case "linkedin":
        return <LinkedinIcon size={14} />;
      case "figma":
        return <FigmaIcon size={14} />;
      case "portfolio":
      case "website":
      default:
        return <Globe size={14} />;
    }
  };

  return (
    <section id="team" className="py-24 bg-white dark:bg-[#090d16] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-cyan/20">
              <Users size={14} />
              <span>Our Core Team</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Software Engineering & Product Team
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Meet the multidisciplinary software architects, mobile engineers, backend specialists, and UI/UX designers building digital products at Roxel Studio.
            </p>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto flex-shrink-0">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-all shadow-sm active:scale-95"
              aria-label="Previous Team Member"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-all shadow-sm active:scale-95"
              aria-label="Next Team Member"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Team Scroll Container with Floating Left/Right Arrows */}
        <div className="relative group">
          {/* Floating Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/90 text-brand-cyan border border-brand-cyan/40 shadow-glow items-center justify-center hover:scale-110 active:scale-95 transition-all"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Floating Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900/90 text-brand-cyan border border-brand-cyan/40 shadow-glow items-center justify-center hover:scale-110 active:scale-95 transition-all"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Row (4 cards visible on desktop, scroll smoothly for 5th card M. Qasim) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 select-none no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-[280px] sm:w-[320px] lg:w-[calc(25%-18px)] flex-shrink-0 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:border-brand-cyan transition-all duration-300 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  {/* Member Avatar */}
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-brand-cyan transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-brand-cyan block mb-3 font-mono">
                    {member.role}
                  </span>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-mono font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social & Portfolio links */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {member.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold ${
                          link.type === "portfolio" || link.type === "website"
                            ? "bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan hover:text-slate-950 border border-brand-cyan/30"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-cyan border border-slate-200 dark:border-slate-700"
                        }`}
                        title={link.label}
                      >
                        {renderLinkIcon(link.type)}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
