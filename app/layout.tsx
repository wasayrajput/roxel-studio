import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Roxel Studio | High-Impact Web & Mobile Digital Agency",
    template: "%s | Roxel Studio",
  },
  description: siteConfig.description,
  keywords: [
    "Digital Agency",
    "MERN Stack Development",
    "Next.js 14 Developer",
    "Flutter Mobile Apps",
    "UI/UX Design Systems",
    "Figma Prototypes",
    "Roxel Studio",
  ],
  authors: [{ name: "Roxel Studio", url: siteConfig.url }],
  creator: "Roxel Studio",
  
  // Dynamic OpenGraph (OG Meta Cards for WhatsApp, LinkedIn, X)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Roxel Studio | High-Impact Web & Mobile Digital Agency",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Roxel Studio Agency Preview",
      },
    ],
  },
  
  // Twitter Card Meta
  twitter: {
    card: "summary_large_image",
    title: "Roxel Studio | Web & Mobile Digital Agency",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@roxelstudio",
  },

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className="bg-white dark:bg-[#090d16] text-slate-900 dark:text-white antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
