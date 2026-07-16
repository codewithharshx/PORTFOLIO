'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/layout/Container';
import AboutHeader from './AboutHeader';
import TimelineStrip from './TimelineStrip';
import ExpertiseShowcase from './ExpertiseShowcase';
import CertificationsShowcase from './CertificationsShowcase';
import BentoGrid from './BentoGrid';
import { PERSONAL_INFO } from '@/lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollDirection } from '@/hooks/useScrollDirection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const scrollDirection = useScrollDirection();
  const isScrollingDown = scrollDirection === 'down';

  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 55%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
      });

      // Choreographed header entrance animation
      tl.fromTo(
        '.about-dome',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', willChange: 'transform, opacity' }
      );

      tl.fromTo(
        '.about-dome-glow-line',
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.25, ease: 'power2.out', willChange: 'stroke-dashoffset' },
        '<'
      );



      tl.fromTo(
        '.about-badge',
        { opacity: 0, scale: 0.7, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: 'back.out(1.5)', willChange: 'transform, opacity' },
        '-=0.6'
      );

      tl.fromTo(
        '.about-title',
        { opacity: 0, y: 55, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        { opacity: 1, y: 0, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 0.95, ease: 'power4.out', willChange: 'transform, opacity, clip-path' },
        '-=0.45'
      );

      tl.fromTo(
        '.about-subtitle',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', willChange: 'transform, opacity' },
        '-=0.6'
      );

      // Staggered Bento Cards entrance animation with 3D perspective pop
      tl.fromTo(
        '.about-bento-card',
        { opacity: 0, scale: 0.88, y: 55, transformPerspective: 800, rotateX: 12 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          willChange: 'transform, opacity',
          clearProps: 'transform,perspective,rotateX,willChange' // Essential: releases transforms so Framer Motion spring hovers work cleanly
        },
        '-=0.55'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative z-20 w-full bg-[#0F0E0E] overflow-x-clip pb-12 rounded-t-[32px] md:rounded-t-[48px] lg:rounded-t-[64px] border-t border-white/15 shadow-[0_-24px_48px_rgba(0,0,0,0.8)]"
      aria-label="About Harshwardhan Ramdas Sathe - AI & Data Science Engineer | MERN Developer"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* SEO Microdata - Enhanced */}
      <meta itemProp="name" content={PERSONAL_INFO.name} />
      <meta itemProp="jobTitle" content={PERSONAL_INFO.jobTitle} />
      <meta itemProp="description" content={PERSONAL_INFO.bio} />
      <meta itemProp="url" content="https://harshwardhansathe.vercel.app" />
      <meta itemProp="email" content={PERSONAL_INFO.email} />
      <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
      <meta itemProp="image" content={`https://harshwardhansathe.vercel.app${PERSONAL_INFO.image}`} />

      {/* Address Schema */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
        <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
        <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
        <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
      </div>

      {/* Skills & Expertise */}
      <meta itemProp="knowsAbout" content="React.js" />
      <meta itemProp="knowsAbout" content="Node.js" />
      <meta itemProp="knowsAbout" content="Python" />
      <meta itemProp="knowsAbout" content="MongoDB" />
      <meta itemProp="knowsAbout" content="Machine Learning" />
      <meta itemProp="knowsAbout" content="Data Science" />
      <meta itemProp="knowsAbout" content="Computer Vision" />
      <meta itemProp="knowsAbout" content="Full Stack MERN Development" />
      <meta itemProp="knowsAbout" content="REST API Design" />
      <meta itemProp="knowsAbout" content="JWT Authentication" />

      {/* Occupation Schema */}
      <div itemProp="hasOccupation" itemScope itemType="https://schema.org/Occupation" className="hidden">
        <meta itemProp="name" content="AI & Data Science Engineer" />
        <meta itemProp="occupationLocation" content="Thane, Maharashtra, India" />
        <meta itemProp="skills" content="React.js, Node.js, Python, MongoDB, Express.js, Machine Learning, Data Analysis" />
        <meta itemProp="experienceRequirements" content="B.Tech AI & DS Student" />
      </div>

      {/* Educational Background */}
      <div itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization" className="hidden">
        <meta itemProp="name" content="Annasaheb Dange College of Engineering & Technology (ADCET), Ashta" />
      </div>

      {/* About Section Header (scrolls normally above the bento grid) */}
      <div className="pt-0 pb-4 sm:pb-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full">
        <AboutHeader />
      </div>

      <div className="relative">
        {/* Card 1: Sticky About Bento Grid (centered vertically in viewport) */}
        <div
          ref={cardRef}
          className="lg:sticky z-10 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 w-full lg:h-screen lg:flex lg:flex-col lg:justify-center pt-8 pb-16 lg:pt-0 lg:pb-0"
          style={{ top: '0px' }}
        >
          <Container>
            {/* Hidden SEO Content */}
            <div className="sr-only">
              <h2>About Harshwardhan Ramdas Sathe - AI & Data Science Engineer | MERN Developer</h2>
              <p>
                Harshwardhan Ramdas Sathe is a B.Tech AI & Data Science student and MERN Stack Developer
                based in Thane, Maharashtra, India. Specializing in React, Node.js, Python, MongoDB, and AI-powered solutions.
                With practical experience in full-stack MERN development, machine learning, and REST API design,
                Harshwardhan builds scalable web applications like Mane Bazar (grocery e-commerce) and the Personal Finance AI Advisor.
                Currently serving as Department Leader – AI & DS at the Training & Placement Cell (TPC) at ADCET Ashta.
              </p>
              <h3>Harshwardhan Sathe - Core Skills and Expertise</h3>
              <ul>
                <li>Full Stack MERN Development (MongoDB, Express.js, React, Node.js)</li>
                <li>Frontend Development: React.js, Vite, Tailwind CSS, HTML5, CSS3</li>
                <li>Backend Development: Node.js, Express.js, RESTful API Design</li>
                <li>Database: MongoDB, Mongoose</li>
                <li>Authentication: JWT, Google OAuth</li>
                <li>AI & ML: Machine Learning, Data Analysis, Computer Vision</li>
                <li>Python Programming & Data Science</li>
                <li>Tools: Git, GitHub, VS Code, Postman, Power BI, npm</li>
              </ul>
              <h3>Harshwardhan Sathe - Experience & Leadership</h3>
              <p>
                Harshwardhan Sathe is Department Leader – AI & DS at the Training & Placement Cell (TPC) since February 2026,
                coordinating placement drives and helping 100+ students with career development.
                Completed Python Internship at Prepgrad (Aug-Sep 2025), working on Data Analysis and Power BI dashboards.
                Co-authored an IEEE Conference Paper and organized technical events including Codathon 2025, Discovery 2024 & 2025, and Neuroverse 2025.
              </p>
              <h3>Contact Harshwardhan Sathe</h3>
              <address>
                <p>Location: Thane, Maharashtra, India</p>
                <p>Email: harshwardhansathe1@gmail.com</p>
                <p>Phone: +91 8879970396</p>
                <p>College: ADCET Ashta (2023 - Present)</p>
              </address>
            </div>

            {/* Bento Grid */}
            <div className="about-bento-container w-full">
              <BentoGrid />
            </div>
          </Container>
        </div>

        {/* Spacer for extra scroll before Expertise Showcase (only on desktop lg screens where Card 1 is sticky) */}
        <div className="hidden lg:block h-[50vh] pointer-events-none" />

        {/* Card 2: Expertise Showcase sliding above Card 1 */}
        <div
          className="relative z-20 bg-[#0F0E0E] rounded-t-[32px] md:rounded-t-[48px] lg:rounded-t-[64px] border-t border-white/15 shadow-[0_-24px_48px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          <ExpertiseShowcase />
        </div>

        {/* Card 2.5: Certifications Showcase sliding above/with Card 2 */}
        <div
          className="relative z-20 bg-[#0F0E0E] rounded-t-[32px] md:rounded-t-[48px] lg:rounded-t-[64px] border-t border-white/15 shadow-[0_-24px_48px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          <CertificationsShowcase />
        </div>

        {/* Card 3: Timeline Strip */}
        <div className="relative z-20 bg-[#0F0E0E]">
          <Container className="px-4 sm:px-6">
            <div className="max-w-7xl mx-auto pt-8 sm:pt-12">
              <div className="mb-12 sm:mb-16">
                <TimelineStrip />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
