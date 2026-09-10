"use client";

import { Code2, Smartphone, Layout, Palette, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Fullstack Web Development",
    description: "High-performance web platforms engineered with Next.js 14, React, MERN Stack, and Serverless API architectures.",
    deliverables: [
      "Sub-second SSR & SSG page loads",
      "Stripe payment gateway integration",
      "Custom Admin & CMS dashboards",
      "Scalable REST & GraphQL APIs",
    ],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description: "Native-quality mobile applications for iOS and Android built with Flutter and Dart for 60fps performance.",
    deliverables: [
      "Single codebase for iOS & Android",
      "Real-time WebSockets & Push Notifications",
      "Biometric security & Offline storage",
      "App Store & Play Store publishing",
    ],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    icon: Layout,
    title: "Figma UI/UX Systems",
    description: "Conversion-focused user interface design systems, interactive Figma prototypes, and luxury brand guidelines.",
    deliverables: [
      "Pixel-perfect Figma component libraries",
      "Interactive clickable prototypes",
      "User journey & wireframe mapping",
      "Dark / Light theme system tokens",
    ],
    accent: "from-purple-500 to-indigo-600",
  },
  {
    icon: Palette,
    title: "Graphic Design & Brand Identity",
    description: "High-impact visual branding assets, CorelDRAW vector illustrations, logo suites, and social media marketing graphics.",
    deliverables: [
      "Logo suites & visual brand guidelines",
      "CorelDRAW, Photoshop & Illustrator graphics",
      "Marketing campaign assets & social banners",
      "Print media, packaging & promotional designs",
    ],
    accent: "from-rose-500 to-pink-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-cyan/20">
            <Cpu size={14} />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            High-Impact Digital Services
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            We bridge engineering precision with high-converting visual graphic design to deliver enterprise-grade digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-brand-cyan transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${service.accent} flex items-center justify-center text-slate-950 font-bold mb-6 shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-brand-cyan flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan group-hover:translate-x-1 transition-transform"
                >
                  <span>Discuss Requirements for {service.title}</span>
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
