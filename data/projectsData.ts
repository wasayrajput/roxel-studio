export interface Project {
  id: string;
  title: string;
  category: "Web App" | "Mobile App" | "UI/UX Redesign" | "Graphic Design" | "AI & Cloud";
  shortDescription: string;
  image: string;
  tags: string[];
  client: string;
  timeline: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  metrics: string;
  liveUrl?: string;
  figmaUrl?: string;
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeTitle: string;
    afterTitle: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "coffee-cat-brand",
    title: "Coffee Cat - Artisanal Roastery & Brand Portal",
    category: "Web App",
    shortDescription: "A modern, aesthetically pleasing web platform for an artisanal coffee brand featuring interactive menus and smooth transitions.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "JavaScript", "HTML5/CSS3", "Vercel"],
    client: "Coffee Cat Artisanal Roastery",
    timeline: "3 Weeks",
    problem: "The coffee brand needed an online presence with a luxury dark aesthetic, interactive menu preview, and smooth mobile experience.",
    solution: "Engineered a high-conversion React application deployed on Vercel with custom CSS animations, rich photography showcases, and responsive menu layouts.",
    keyFeatures: [
      "Aesthetically pleasing dark luxury UI design",
      "Interactive menu showcase with smooth CSS transitions",
      "Sub-second page navigation and fast Vercel edge deployment",
      "Mobile-first responsive design for café visitors"
    ],
    metrics: "Sub-second Page Load, 100% Mobile Responsive",
    liveUrl: "https://coffee-cat-three.vercel.app/",
  },
  {
    id: "graphic-design-branding-suite",
    title: "Visual Branding & Graphic Design Suite",
    category: "Graphic Design",
    shortDescription: "High-impact visual brand identity assets, marketing campaign graphics, and CorelDRAW vector illustrations.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Graphic Design", "CorelDRAW", "Photoshop", "Brand Identity"],
    client: "Creative Product Network",
    timeline: "2 Weeks",
    problem: "The client required a unified visual graphic identity for multi-channel marketing campaigns and digital product promotional materials.",
    solution: "Designed custom vector logo suites, marketing media banners, social graphics, and promotional branding assets using CorelDRAW and Photoshop.",
    keyFeatures: [
      "Vector logo design and scalable brand icon guidelines",
      "Multi-platform marketing campaign banners and social media assets",
      "High-resolution print media and promotional display designs",
      "Color theory and typography system guidelines"
    ],
    metrics: "+60% Higher Engagement across Brand Marketing",
    liveUrl: "https://mahakgraphicsfrontendoriginal.vercel.app/",
  },
  {
    id: "calculator-app-suite",
    title: "Interactive Web Calculator Application",
    category: "Web App",
    shortDescription: "High-precision web calculator application featuring instant math expression evaluation and dynamic responsive layouts.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "JavaScript", "HTML5/CSS3", "Vercel"],
    client: "Web Utility Application",
    timeline: "2 Weeks",
    problem: "Users needed a clean, sub-second web calculator with responsive keyboard shortcuts across mobile and desktop devices.",
    solution: "Developed a high-precision React calculator application with instant keypress event handling, state evaluation, and Vercel hosting.",
    keyFeatures: [
      "High-precision expression parsing and instant calculation",
      "Dynamic responsive UI layout for desktop and mobile screens",
      "Sub-second keypress event handling and error catching",
      "Fast zero-latency Vercel edge deployment"
    ],
    metrics: "100% Mobile Responsive, Zero-Latency Math Parsing",
    liveUrl: "https://calculator-app-alpha-woad-92.vercel.app/",
  },
  {
    id: "iiris-web-platform",
    title: "International Institute for Regional & International Studies (IIRIS)",
    category: "Web App",
    shortDescription: "Advancing knowledge and understanding of regional and international affairs through research, education, and collaboration.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Vercel"],
    client: "IIRIS Academic Institute",
    timeline: "4 Weeks",
    problem: "The institute required a modern digital portal to present research publications, academic functions, activities, and global team centers.",
    solution: "Engineered a fast, responsive React web application deployed on Vercel with structured navigation for research centers, activities, and contact portals.",
    keyFeatures: [
      "Modular React layout for academic publications and research centers",
      "Sub-second page navigation and fast Vercel deployment",
      "Interactive gallery and global activities section",
      "Responsive design optimized for desktop and mobile readers"
    ],
    metrics: "100% Mobile Responsive, Fast Vercel Edge Hosting",
    liveUrl: "https://iiris-web.vercel.app/",
  },
  {
    id: "dental-doctor-appointment",
    title: "Dental Doctor Online Appointment System",
    category: "Web App",
    shortDescription: "A comprehensive online platform for dental appointments, patient management, and schedule booking.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    client: "Dental Healthcare Clinic",
    timeline: "4 Weeks",
    problem: "Dental clinics suffered from appointment slot overlaps and manual phone booking delays.",
    solution: "Engineered a MERN stack healthcare portal with automated calendar slot booking, patient record management, and treatment plan overviews.",
    keyFeatures: [
      "Interactive doctor calendar slot booking system",
      "Patient appointment management and history dashboard",
      "Express/Node.js REST API with MongoDB persistent storage",
      "Mobile-first responsive design for quick booking"
    ],
    metrics: "Frictionless Booking & 0 Appointment Overlaps",
    liveUrl: "https://arslanashraf786.netlify.app",
  },
  {
    id: "ux-mahak-design-system",
    title: "Enterprise UX & Figma Design System",
    category: "UI/UX Redesign",
    shortDescription: "Conversion-focused Figma UI/UX design system with interactive prototypes and component tokens.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Figma", "UI/UX Systems", "Micro-Interactions", "Design Tokens"],
    client: "Digital Product Network",
    timeline: "4 Weeks",
    problem: "Legacy application interfaces suffered from visual clutter and inconsistent component usage, causing user friction and high bounce rates.",
    solution: "Created an enterprise Figma design system featuring 150+ reusable components, tokenized dark/light mode palettes, and clickable prototypes.",
    keyFeatures: [
      "150+ reusable Figma components and auto-layout frames",
      "Interactive clickable prototypes for user testing",
      "Comprehensive typography and color system tokens",
      "Frictionless 2-step user checkout flow redesign"
    ],
    metrics: "+45% Higher User Retention & Visual Consistency",
    liveUrl: "https://uxmahakportfolio.vercel.app/",
    figmaUrl: "https://mahakgraphicsfrontendoriginal.vercel.app/",
    beforeAfter: {
      beforeImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      beforeTitle: "Legacy Cluttered Interface",
      afterTitle: "Modern Figma UX System"
    }
  }
];
