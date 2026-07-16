import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";
import "./animations.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import SmoothScrollWrapper from "@/components/layout/SmoothScrollWrapper";
import { IntroAnimationProvider } from "@/context/IntroAnimationContext";
import SuppressThreeWarnings from "@/components/utils/SuppressThreeWarnings";
import { generateSEO } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
  style: "italic",
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://harshwardhansathe.vercel.app';

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Harshwardhan Ramdas Sathe",
    "url": siteUrl,
    "image": `${siteUrl}/images/profile/profile.jpeg`,
    "jobTitle": "AI & Data Science Engineer | MERN Developer",
    "description": "Harshwardhan Sathe is a B.Tech AI & Data Science student and MERN Stack Developer at ADCET Ashta, building AI-powered solutions and full-stack web applications.",
    "email": "harshwardhansathe1@gmail.com",
    "telephone": "+91-8879970396",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/codewithharshx",
      "https://www.linkedin.com/in/harshwardhan-sathe-774945332/",
      "https://www.instagram.com/harsh_r_s_11"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
      "Full Stack MERN Development",
      "React.js",
      "Node.js",
      "Python",
      "MongoDB",
      "Computer Vision",
      "REST API Development",
      "JWT Authentication",
      "Google OAuth"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Annasaheb Dange College of Engineering & Technology (ADCET), Ashta"
    },
    "subjectOf": [
      {
        "@type": "CreativeWork",
        "name": "Mane Bazar",
        "description": "Full Stack Grocery E-Commerce Platform inspired by Blinkit and Zepto, built with MERN stack and Razorpay.",
      },
      {
        "@type": "CreativeWork",
        "name": "Personal Finance AI Advisor",
        "description": "AI-powered financial assistant using Python and Machine Learning to analyze spending habits and improve budgeting.",
      },
      {
        "@type": "CreativeWork",
        "name": "Jewellery Shop Management System",
        "description": "Complete inventory and billing platform with role-based access control built with React and Node.js.",
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Harshwardhan Sathe Portfolio",
    "url": siteUrl,
    "description": "Portfolio of Harshwardhan Ramdas Sathe showcasing AI & Data Science projects and MERN stack web applications.",
    "author": {
      "@type": "Person",
      "name": "Harshwardhan Ramdas Sathe"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
  ];

  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />

        {/* Breadcrumb Schema */}
        <BreadcrumbSchema items={breadcrumbItems} />

        {/* Favicon - ICO format for maximum compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* Bing/Microsoft specific meta tags */}
        <meta name="msapplication-TileColor" content="#0F0E0E" />
        <meta name="msapplication-TileImage" content="/android-chrome-512x512.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#0F0E0E" />
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${outfit.variable} antialiased overflow-visible`}
      >
        <IntroAnimationProvider>
          <SuppressThreeWarnings />
          <SmoothScrollWrapper>
            <LayoutWrapper>{children}</LayoutWrapper>
          </SmoothScrollWrapper>
        </IntroAnimationProvider>
      </body>
    </html>
  );
}
