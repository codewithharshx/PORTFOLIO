'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCard from './ContactCard';
import { PERSONAL_INFO, SITE_URL } from '@/lib/constants';

const EarthScene = dynamic(() => import('@/components/three/EarthScene'), {
  ssr: false,
  loading: () => null,
});

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsFormOpen(true);
    window.addEventListener('open-contact-form', handleOpen);
    return () => window.removeEventListener('open-contact-form', handleOpen);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0F0E0E] overflow-hidden"
      aria-label="Contact Information and Inquiry Form"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* SEO Microdata */}
      <meta itemProp="name" content="Contact Rameshwar Bhagwat - Full Stack Developer" />
      <meta itemProp="description" content="Get in touch with Rameshwar Bhagwat for full-time opportunities, freelance projects, or collaboration. Available for web development, React, Next.js, and full-stack development projects." />
      <meta itemProp="url" content={`${SITE_URL}#contact`} />

      {/* Contact Information Schema */}
      <div itemProp="mainEntity" itemScope itemType="https://schema.org/Person" className="hidden">
        <meta itemProp="name" content={PERSONAL_INFO.name} />
        <meta itemProp="jobTitle" content={PERSONAL_INFO.jobTitle} />
        <meta itemProp="email" content={PERSONAL_INFO.email} />
        <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
        <meta itemProp="url" content={SITE_URL} />
        
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
          <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
          <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
        </div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Contact Rameshwar Bhagwat - Full Stack Developer</h2>
        
        <h3>Get in Touch</h3>
        <p>
          Rameshwar Bhagwat is available for full-time roles, freelance projects, and consulting opportunities. 
          With expertise in React, Next.js, TypeScript, Node.js, and modern web development, 
          he helps startups and enterprises build scalable, high-performance web applications.
        </p>

        <h3>Contact Information</h3>
        <address>
          <p>Name: {PERSONAL_INFO.name}</p>
          <p>Title: {PERSONAL_INFO.jobTitle}</p>
          <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></p>
          <p>Phone: <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a></p>
          <p>Location: {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.state}, {PERSONAL_INFO.location.country}</p>
          <p>Website: <a href={SITE_URL}>{SITE_URL}</a></p>
        </address>

        <h3>Services Offered</h3>
        <ul>
          <li>Full Stack Web Development - End-to-end application development</li>
          <li>React & Next.js Development - Modern frontend applications</li>
          <li>TypeScript Development - Type-safe JavaScript solutions</li>
          <li>Node.js Backend Development - Scalable server-side applications</li>
          <li>API Development - RESTful and GraphQL APIs</li>
          <li>Database Design & Optimization - MongoDB, PostgreSQL, MySQL</li>
          <li>Cloud Deployment - AWS, Google Cloud, Vercel</li>
          <li>Performance Optimization - Core Web Vitals and SEO</li>
          <li>Technical Consulting - Architecture and best practices</li>
          <li>Code Review & Mentoring - Team support and guidance</li>
        </ul>

        <h3>Availability</h3>
        <p>
          Currently available for:
        </p>
        <ul>
          <li>Full-time employment opportunities</li>
          <li>Selective freelance projects</li>
          <li>Technical consulting engagements</li>
          <li>Contract-to-hire positions</li>
          <li>Remote work worldwide</li>
        </ul>

        <h3>Project Types</h3>
        <ul>
          <li>Startup MVP Development - Launch your product quickly</li>
          <li>Enterprise Web Applications - Scalable business solutions</li>
          <li>E-commerce Platforms - Online stores and marketplaces</li>
          <li>SaaS Applications - Software as a Service products</li>
          <li>Progressive Web Apps - Mobile-first web applications</li>
          <li>API Integration - Third-party service integration</li>
          <li>Legacy System Modernization - Upgrade outdated systems</li>
          <li>Performance Optimization - Speed up existing applications</li>
        </ul>

        <h3>Why Work With Me</h3>
        <ul>
          <li>5+ years of professional web development experience</li>
          <li>50+ successfully delivered projects</li>
          <li>98% client satisfaction rate</li>
          <li>Expertise in modern JavaScript ecosystem</li>
          <li>Strong focus on code quality and best practices</li>
          <li>Excellent communication and collaboration skills</li>
          <li>Agile methodology and iterative development</li>
          <li>Commitment to deadlines and project success</li>
        </ul>

        <h3>Response Time</h3>
        <p>
          I typically respond to inquiries within 24 hours during business days. 
          For urgent matters, please mention "URGENT" in your subject line.
        </p>

        <h3>Time Zone</h3>
        <p>
          Based in India (IST - UTC+5:30). Available for meetings across all time zones 
          with flexible scheduling.
        </p>
      </div>

      {/* 3D Earth Sphere — behind content, same pattern as Hero NeuralSphere */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[560px] xl:h-[560px]">
          <EarthScene />
        </div>
      </div>

      {/* Bottom horizon fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0F0E0E] to-transparent pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-2">
        {/* Cinematic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-[-0.02em] leading-tight text-white mb-4 sm:mb-6 uppercase"
          style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif', fontWeight: 800 }}
        >
          Let's Build Something{' '}
          <span className="text-rainbow-gradient">Extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 px-2"
          style={{
            fontFamily: 'var(--font-instrument), Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.4
          }}
        >
          &ldquo;Whether you're launching a{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #FF5C29 0%, #FF1493 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
            }}
          >
            startup
          </span>{' '}
          or scaling an{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #FF1493 0%, #FF8C00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
            }}
          >
            enterprise
          </span>
          , I'm here to turn your{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
            }}
          >
            vision
          </span>{' '}
          into reality.&rdquo;
        </motion.p>

        {/* Get in Touch Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="group glowing-border-btn px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 opacity-90 hover:opacity-100"
          aria-label="Open contact form"
        >
          {/* Inner dark background mask */}
          <div className="absolute inset-0 rounded-full bg-[#0F0E0E]/95 backdrop-blur-xl z-0 pointer-events-none transition-colors duration-300 group-hover:bg-[#0F0E0E]" />

          <span className="relative z-10">Get in Touch</span>
          
          {/* Arrow icon */}
          <svg
            className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.button>
      </div>

      {/* Contact Form Modal - iOS Style */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            key="contact-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop - Very light tint, background visible */}
            <div
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 z-50"
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
              }}
              aria-label="Close contact form"
            />

            {/* Form Container - iOS Style */}
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="w-full sm:max-w-4xl max-h-[90vh] sm:max-h-none overflow-y-auto pointer-events-auto relative rounded-t-[24px] sm:rounded-[24px]"
                data-lenis-prevent
              >
                <ContactCard onClose={() => setIsFormOpen(false)} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
