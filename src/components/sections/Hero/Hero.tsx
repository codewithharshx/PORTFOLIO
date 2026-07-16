import { useEffect, useRef } from 'react';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';
import AvailableForWorkBadge from '@/components/ui/AvailableForWorkBadge';
import StructuredData from '@/components/seo/StructuredData';
import { PERSONAL_INFO, SITE_URL, SOCIAL_LINKS, SEO_KEYWORDS } from '@/lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const heroInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !heroInnerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the Hero content as we scroll down to About (Exact original blur + scale + Y transition)
      gsap.fromTo(
        heroInnerRef.current,
        {
          scale: 1,
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
        },
        {
          scale: 0.88,
          y: -100,
          opacity: 0,
          filter: 'blur(12px)',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
            onLeave: () => {
              if (heroInnerRef.current) {
                heroInnerRef.current.style.visibility = 'hidden';
              }
            },
            onEnterBack: () => {
              if (heroInnerRef.current) {
                heroInnerRef.current.style.visibility = 'visible';
              }
            },
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <StructuredData />

      <section
        id="hero"
        ref={heroRef}
        className="sticky top-0 z-10 overflow-hidden pb-0 mb-0 w-full"
        style={{ height: '100vh' }}
        aria-label={`${PERSONAL_INFO.name} - Full Stack & AI Developer Portfolio`}
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* ─── Primary Schema.org Person Microdata ─── */}
        <meta itemProp="name" content={PERSONAL_INFO.name} />
        <meta itemProp="givenName" content="Harshwardhan" />
        <meta itemProp="familyName" content="Sathe" />
        <meta itemProp="jobTitle" content="AI & Data Science Engineer | MERN Developer" />
        <meta itemProp="description" content={`${PERSONAL_INFO.name} is an AI & Data Science Engineer and MERN Stack Developer specializing in React, Node.js, Python, MongoDB, and Machine Learning. Featured projects include Mane Bazar, Personal Finance AI Advisor, and Jewellery Shop Management System.`} />
        <meta itemProp="url" content={SITE_URL} />
        <meta itemProp="email" content={PERSONAL_INFO.email} />
        <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
        <meta itemProp="image" content={`${SITE_URL}${PERSONAL_INFO.image}`} />
        <meta itemProp="knowsAbout" content="Full Stack MERN Development, AI Engineering, React.js, Node.js, Python, Machine Learning, MongoDB, Data Science, REST APIs" />
        <meta itemProp="hasOccupation" content="AI & Data Science Engineer | MERN Developer" />

        {/* Social Links for Schema */}
        {SOCIAL_LINKS.map((link) => (
          <link key={link.name} itemProp="sameAs" href={link.url} />
        ))}

        {/* Address Schema */}
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
          <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
          <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
          <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
        </div>

        {/* ─── Hidden SEO Content for Search Engines ─── */}
        <div className="sr-only">
          <h1>Harshwardhan Ramdas Sathe - AI & Data Science Engineer | MERN Developer</h1>

          <h2>About Harshwardhan Sathe</h2>
          <p>
            Harshwardhan Ramdas Sathe is a B.Tech AI & Data Science student at ADCET Ashta and MERN Stack Developer based in {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.state}, {PERSONAL_INFO.location.country}.
            He specializes in building scalable full-stack web applications and AI-powered solutions using the MERN stack and Python.
          </p>

          <h2>Harshwardhan Sathe - Professional Skills</h2>
          <p>
            As an AI & Data Science Engineer and MERN Developer, Harshwardhan Sathe is proficient in:
          </p>
          <ul>
            <li>Frontend Development: React.js, Vite, HTML5, CSS3, Tailwind CSS, JavaScript</li>
            <li>Backend Development: Node.js, Express.js, REST APIs, JWT Authentication</li>
            <li>Database Technologies: MongoDB, MySQL, Mongoose</li>
            <li>AI & Machine Learning: Python, Scikit-learn, Pandas, NumPy, Matplotlib, K-Means, Regression</li>
            <li>Authentication & Payments: Google OAuth, JWT, Razorpay</li>
            <li>Tools: Git, GitHub, VS Code, Postman, Power BI</li>
          </ul>

          <h2>Featured Projects by Harshwardhan Sathe</h2>
          <ul>
            <li>Mane Bazar - Full Stack Grocery E-Commerce Platform with MERN stack, Razorpay, and Google OAuth</li>
            <li>Personal Finance AI Advisor - Python & ML-powered financial assistant with Scikit-learn</li>
            <li>Jewellery Shop Management System - RBAC-based inventory and billing platform</li>
          </ul>

          <h2>Harshwardhan Sathe - Experience & Leadership</h2>
          <ul>
            <li>Department Leader – AI & DS at Training & Placement Cell (TPC), ADCET Ashta</li>
            <li>Python Internship at Prepgrad – Data Analysis and Power BI dashboards</li>
            <li>Co-authored IEEE Conference Paper</li>
            <li>Organized Codathon 2025, Discovery 2024 & 2025, Neuroverse 2025</li>
          </ul>

          <h2>Contact Harshwardhan Sathe</h2>
          <p>
            Looking to connect? Contact Harshwardhan Sathe at {PERSONAL_INFO.email} or {PERSONAL_INFO.phone}.
            Harshwardhan is available for internships, freelance projects, and entry-level opportunities.
          </p>

          <h3>Keywords</h3>
          <p>{SEO_KEYWORDS.join(', ')}, Harshwardhan Sathe Portfolio, Harshwardhan Ramdas Sathe Developer,
          AI Data Science Engineer India, MERN Stack Developer Maharashtra, Full Stack MERN Developer,
          Harshwardhan Sathe React Developer, Harshwardhan Sathe Python Developer, ADCET Ashta,
          Mane Bazar grocery app, Personal Finance AI Advisor, Jewellery Shop Management</p>
        </div>

        {/* ─── WebSite Schema for Search Appearance ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Harshwardhan Sathe - AI & Data Science Engineer Portfolio",
              "alternateName": ["Harshwardhan Sathe", "Harshwardhan Ramdas Sathe", "Harshwardhan Sathe Portfolio"],
              "url": SITE_URL,
              "description": "Official portfolio of Harshwardhan Ramdas Sathe, an AI & Data Science Engineer and MERN Stack Developer specializing in React, Node.js, Python, and AI-powered applications.",
              "author": {
                "@type": "Person",
                "name": "Harshwardhan Ramdas Sathe",
                "jobTitle": "AI & Data Science Engineer | MERN Developer",
                "url": SITE_URL
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_URL}/?search={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* ─── Professional Service Schema ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Harshwardhan Sathe - AI & MERN Development Services",
              "description": "Professional Full Stack MERN Development and AI/ML Engineering services by Harshwardhan Ramdas Sathe",
              "provider": {
                "@type": "Person",
                "name": "Harshwardhan Ramdas Sathe",
                "jobTitle": "AI & Data Science Engineer | MERN Developer"
              },
              "serviceType": ["Full Stack MERN Development", "AI/ML Engineering", "Python Development", "REST API Development", "E-Commerce Development"],
              "areaServed": "India",
              "url": SITE_URL
            })
          }}
        />

        <div ref={heroInnerRef} className="absolute inset-0 w-full h-full" style={{ willChange: 'transform, opacity, filter' }}>
          <HeroBackground />

          {/* Main content — uses SAME absolute inset-0 + flex center */}
          <HeroContent />

          {/* Docked Right Badge — Scoped strictly to Hero section */}
          <AvailableForWorkBadge />
        </div>
      </section>
    </>
  );
}
