"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Calculator, Check, MessageSquare, Sparkles, Sliders, DollarSign, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface Option {
  id: string;
  name: string;
  price: number;
}

const platformOptions: Option[] = [
  { id: "web", name: "Web Application (Next.js / MERN)", price: 1200 },
  { id: "mobile", name: "Mobile Application (Flutter iOS/Android)", price: 1500 },
  { id: "uiux", name: "UI/UX Design System (Figma)", price: 600 },
  { id: "fullstack", name: "Fullstack Web + Mobile Suite", price: 2500 },
];

const scopeOptions: Option[] = [
  { id: "mvp", name: "MVP (Fast Launch in 2-3 Weeks)", price: 0 },
  { id: "standard", name: "Standard Platform (4-6 Weeks)", price: 500 },
  { id: "enterprise", name: "Enterprise Custom Platform (8+ Weeks)", price: 1200 },
];

const featureOptions: Option[] = [
  { id: "auth", name: "User Auth & Roles (OAuth/JWT)", price: 200 },
  { id: "admin", name: "Admin CMS Dashboard", price: 400 },
  { id: "payment", name: "Stripe / Payment Gateway", price: 300 },
  { id: "websockets", name: "Real-Time WebSockets & Chat", price: 350 },
  { id: "animation", name: "Custom 3D / Framer Animations", price: 300 },
];

export default function CostCalculator() {
  const [selectedPlatform, setSelectedPlatform] = useState<Option>(platformOptions[0]);
  const [selectedScope, setSelectedScope] = useState<Option>(scopeOptions[1]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "admin"]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate Budget Range
  const baseCost = selectedPlatform.price + selectedScope.price;
  const featuresCost = featureOptions
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.price, 0);

  const minEstimate = baseCost + featuresCost;
  const maxEstimate = Math.round(minEstimate * 1.3);

  // Generate WhatsApp Message
  const buildWhatsAppMessage = () => {
    const selectedFeatureNames = featureOptions
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.name)
      .join(", ");

    const text = `Hi Roxel Studio! I calculated a project estimate on your website:
📌 *Platform:* ${selectedPlatform.name}
🚀 *Scope:* ${selectedScope.name}
⚡ *Features:* ${selectedFeatureNames || "Standard"}
💰 *Estimated Budget:* $${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()} USD

I would like to discuss this project with you!`;

    return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-24 bg-white dark:bg-[#090d16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-cyan/20">
            <Calculator size={14} />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Calculate Your Project Budget
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Select your project platform, scope, and key features to view an instant budget range and request a quote on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            {/* 1. Platform Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Layers size={15} className="text-brand-cyan" />
                1. Select Platform & Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedPlatform(opt)}
                    className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                      selectedPlatform.id === opt.id
                        ? "bg-slate-900 dark:bg-slate-800 text-white border-brand-cyan shadow-glow"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400"
                    }`}
                  >
                    <span className="font-semibold text-sm">{opt.name}</span>
                    {selectedPlatform.id === opt.id && (
                      <Check size={18} className="text-brand-cyan flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope & Timeline Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Sliders size={15} className="text-brand-cyan" />
                2. Project Scope & Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scopeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedScope(opt)}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      selectedScope.id === opt.id
                        ? "bg-slate-900 dark:bg-slate-800 text-white border-brand-cyan shadow-glow"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400"
                    }`}
                  >
                    <span className="font-semibold text-sm">{opt.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Features */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Sparkles size={15} className="text-brand-cyan" />
                3. Additional Features & Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map((opt) => {
                  const isChecked = selectedFeatures.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleFeature(opt.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isChecked
                          ? "bg-brand-cyan/10 border-brand-cyan text-slate-900 dark:text-white"
                          : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <span className="text-xs font-medium">{opt.name}</span>
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border ${
                          isChecked
                            ? "bg-brand-cyan border-brand-cyan text-slate-950"
                            : "border-slate-400"
                        }`}
                      >
                        {isChecked && <Check size={14} className="stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0c121e] text-white p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              <DollarSign className="text-brand-cyan" />
              Estimated Investment Summary
            </h3>

            <div className="space-y-4 text-sm mb-8 text-slate-300">
              <div className="flex justify-between">
                <span>Platform:</span>
                <span className="font-semibold text-white">{selectedPlatform.name.split(" ")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span>Scope:</span>
                <span className="font-semibold text-white">{selectedScope.name.split(" ")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span>Add-on Features:</span>
                <span className="font-semibold text-white">{selectedFeatures.length} Selected</span>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 mb-8 text-center">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono block mb-1">
                Estimated Investment Range
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-cyan tracking-tight font-mono">
                ${minEstimate.toLocaleString()} - ${maxEstimate.toLocaleString()}
                <span className="text-sm text-slate-400 font-normal ml-1">USD</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                * Final cost depends on detailed project spec & custom requirements.
              </p>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <a
              href={buildWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-glow-emerald transition-all uppercase tracking-wider"
            >
              <MessageSquare size={18} />
              Get Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
