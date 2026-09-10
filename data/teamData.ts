export interface TeamLink {
  label: string;
  url: string;
  type: "website" | "github" | "linkedin" | "figma" | "portfolio";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  links: TeamLink[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "abdul-wasay",
    name: "Abdul Wasay",
    role: "Lead Web & Product Architect",
    bio: "Fullstack MERN Architect specializing in Next.js 14 App Router, NestJS/Node.js backends, and high-conversion web application interfaces.",
    skills: ["Next.js 14", "React / MERN", "NestJS / Node", "MongoDB / TypeORM"],
    image: "/team/wasay.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/wasayrajput", type: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abdul-wasay-dev", type: "linkedin" },
    ],
  },
  {
    id: "arsalan-ashraf",
    name: "Arsalan Ashraf",
    role: "Lead Mobile App Engineer",
    bio: "Cross-platform mobile engineer crafting high-performance 60fps iOS and Android applications with Flutter, Dart, Firebase, and real-time state management.",
    skills: ["Flutter", "Dart", "iOS & Android", "Firebase / State"],
    image: "/team/arsalan.png",
    links: [
      { label: "Portfolio", url: "https://arslanashraf786.netlify.app", type: "portfolio" },
      { label: "GitHub", url: "https://github.com/Arslan-hub-dev", type: "github" },
    ],
  },
  {
    id: "mahak-dev",
    name: "Mahak Dev",
    role: "Senior UI/UX & Design Systems Lead",
    bio: "Senior UI/UX designer & frontend engineer crafting high-converting Figma design systems, interactive prototypes, and luxury brand interfaces.",
    skills: ["Figma Systems", "UI/UX Architecture", "Frontend Dev", "Design Tokens"],
    image: "/team/mahak.jpg",
    links: [
      { label: "UX Portfolio", url: "https://uxmahakportfolio.vercel.app/", type: "portfolio" },
      { label: "Frontend Showcase", url: "https://mahakgraphicsfrontendoriginal.vercel.app/", type: "website" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mahak-dev-designer-ba7829386/", type: "linkedin" },
    ],
  },
  {
    id: "ammar-aslam",
    name: "Ammar Aslam",
    role: "Fullstack & Cloud Infrastructure Engineer",
    bio: "Backend & cloud infrastructure engineer building zero-downtime REST/GraphQL APIs, Node.js microservices, and serverless database workflows.",
    skills: ["Node.js", "Express / MongoDB", "REST APIs", "Cloud Infrastructure"],
    image: "/team/ammar.jpg",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com", type: "linkedin" },
    ],
  },
  {
    id: "m-qasim",
    name: "M. Qasim",
    role: "Frontend & Software Engineer",
    bio: "Software engineer specializing in modern React frontend applications, JavaScript ES6+ state workflows, and responsive web user interfaces.",
    skills: ["React.js", "JavaScript", "Frontend Dev", "UI Integration"],
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com", type: "linkedin" },
    ],
  },
];
