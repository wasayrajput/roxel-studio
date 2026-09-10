"use client";

import { siteConfig } from "@/config/siteConfig";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, FigmaIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt="Roxel Studio"
                className="h-10 w-auto object-contain rounded-xl shadow-glow"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Elite digital software studio engineering high-performance Web Platforms, Cross-Platform Mobile Apps, and futuristic UI/UX Design Systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-brand-cyan border border-slate-800 transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-brand-cyan border border-slate-800 transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-brand-cyan border border-slate-800 transition-colors"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.figma}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-brand-cyan border border-slate-800 transition-colors"
              >
                <FigmaIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-brand-cyan transition-colors">
                  Services & Tech Stack
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-cyan transition-colors">
                  Interactive Portfolio
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-brand-cyan transition-colors">
                  Cost Calculator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-cyan transition-colors">
                  Serverless Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Direct Channels
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-500 block">WhatsApp Chat:</span>
                <span className="font-mono text-slate-300">{siteConfig.whatsapp.formattedNumber}</span>
              </li>
              <li>
                <span className="text-slate-500 block">Direct Email:</span>
                <span className="font-mono text-slate-300">{siteConfig.email.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Roxel Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart size={12} className="text-rose-500 fill-rose-500" /> by Roxel Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
