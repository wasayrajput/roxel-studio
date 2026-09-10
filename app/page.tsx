"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#090d16] text-slate-900 dark:text-white relative font-sans antialiased">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutSection />

      {/* Services & Capabilities */}
      <ServicesSection />

      {/* Selected Engineering Portfolio */}
      <PortfolioSection />

      {/* Team Section */}
      <TeamSection />

      {/* Direct Contact & Inquiry */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Chat Launcher */}
      <WhatsAppWidget />
    </main>
  );
}
