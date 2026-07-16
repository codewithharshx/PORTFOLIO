'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/layout/Container';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  serial: string;
  accentShadow: string;
  artGradient: string;
  tagClasses: string;
  badgeTextColor: string;
  badgeSvg: React.ReactNode;
  image: string;
  baseRot: number;
  baseY: number;
  tx: number;
  floatDelay: number;
}

const CERTIFICATIONS: Certificate[] = [
  {
    id: 'gdg-solution-challenge-2025',
    title: 'GDG Solution Challenge',
    issuer: 'Google Developer Groups',
    year: '2025',
    serial: 'ID: 2025H2S01GSC–P20352',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(234,67,53,0.07)]',
    artGradient: 'from-[#1a0f0e] via-[#1a0f0e] to-[#1a0f0e]',
    tagClasses: 'text-[#ff988f] bg-[#ea4335]/14',
    badgeTextColor: 'text-[#ffb2aa]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" strokeWidth="0" className="w-[17px] h-[17px]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    image: '/certifications/solution-challenge-2025.jpg',
    baseRot: -6,
    baseY: 0,
    tx: 0,
    floatDelay: 0.2,
  },
  {
    id: 'nptel-sustainability-2026',
    title: 'NPTEL Sustainability Cert',
    issuer: 'IIT Kharagpur (NPTEL)',
    year: '2026',
    serial: 'Roll No: NPTEL26HS58S1352000551',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(30,58,138,0.07)]',
    artGradient: 'from-[#0d1320] via-[#0d1320] to-[#0d1320]',
    tagClasses: 'text-[#93c5fd] bg-[#1e3a8a]/14',
    badgeTextColor: 'text-[#bfdbfe]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <path d="M12 4L2 9l10 5 10-5-10-5z"/><path d="M6 11.5V17c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5.5"/>
      </svg>
    ),
    image: '/certifications/nptel-sustainability.png',
    baseRot: 3.5,
    baseY: 10,
    tx: -28,
    floatDelay: 1.3,
  },
  {
    id: 'rtc-techutsav-2026',
    title: 'RTC Techutsav 2K26',
    issuer: 'Rajgad Technical Campus',
    year: '2026',
    serial: 'NO. RTC–2026–TECH',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(217,119,6,0.07)]',
    artGradient: 'from-[#1a140d] via-[#1a140d] to-[#1a140d]',
    tagClasses: 'text-[#fef3c7] bg-[#d97706]/14',
    badgeTextColor: 'text-[#fffbeb]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <path d="M12 4L2 9l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    image: '/certifications/techutsav-2026.jpg',
    baseRot: 5.5,
    baseY: 0,
    tx: 0,
    floatDelay: 0.7,
  },
  {
    id: 'wlug-metamorphosis-2025',
    title: 'WLUG Metamorphosis 2K25',
    issuer: 'Walchand Linux Users Group',
    year: '2025',
    serial: 'NO. WLUG–2025–MET',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(168,85,247,0.07)]',
    artGradient: 'from-[#150d1a] via-[#150d1a] to-[#150d1a]',
    tagClasses: 'text-[#e9d5ff] bg-[#a855f7]/14',
    badgeTextColor: 'text-[#f3e8ff]',
    badgeSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    image: '/certifications/metamorphosis-2025.jpg',
    baseRot: -3.5,
    baseY: 10,
    tx: 28,
    floatDelay: 1.8,
  },
];

function CertCard({ cert }: { cert: Certificate }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, lift: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const MAX_TILT = 7;
    const ry = (px - 0.5) * MAX_TILT * 2;
    const rx = (0.5 - py) * MAX_TILT * 2;
    setTilt({ rx, ry: -ry, lift: -10, scale: 1.035 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, lift: 0, scale: 1 });
  };

  // Determine offsets based on viewport width (overridden on mobile via css)
  const txVal = typeof window !== 'undefined' && window.innerWidth <= 980 ? 0 : cert.tx;
  const baseRotVal = typeof window !== 'undefined' && window.innerWidth <= 980 ? 0 : cert.baseRot;
  const baseYVal = typeof window !== 'undefined' && window.innerWidth <= 980 ? 0 : cert.baseY;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) translate3d(${txVal}px, calc(${baseYVal}px + ${tilt.lift}px), 0) rotate(${baseRotVal}deg) scale(${tilt.scale}) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative overflow-hidden w-[296px] rounded-[28px] bg-gradient-to-br from-[#1c1f26] via-[#16181d] to-[#121419] border border-white/10 p-4 pb-0 cursor-pointer transition-transform duration-500 ease-out select-none will-change-transform z-10 ${cert.accentShadow}`}
      tabIndex={0}
    >
      {/* Gloss Sheen */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/[0.055] to-transparent pointer-events-none" />

      {/* Hairline rim */}
      <div className="absolute inset-0 rounded-[28px] border border-white/5 pointer-events-none z-[3]" />

      {/* Film grain noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-[4] rounded-[28px]"
        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")` }}
      />

      {/* Entry Diagonal Sheen Sweep */}
      <motion.div
        initial={{ x: '-150%', opacity: 0 }}
        whileInView={{ x: '150%', opacity: [0, 0.3, 0.3, 0] }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 1.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none -skew-x-12 z-[5]"
      />

      {/* Verified Hover Badge overlay */}
      <span className="absolute left-1/2 top-3 -translate-x-1/2 flex items-center gap-1 text-[#ffb088] text-[9.5px] tracking-wider uppercase font-medium font-mono whitespace-nowrap opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-20">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path d="M20 6L9 17l-5-5" /></svg>
        Verified
      </span>

      <div className="h-[148px] rounded-[17px] relative overflow-hidden mb-1.5 border border-white/[0.07] bg-[#0c0c0d]">
        <div className="absolute inset-0">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            sizes="260px"
            className="object-cover opacity-100 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <span className="absolute left-3.5 bottom-3 text-[9px] tracking-wider text-white/40 font-mono z-[2]">{cert.serial}</span>
        <div className={`absolute right-3 bottom-[-16px] w-[46px] h-[46px] rounded-full flex items-center justify-center bg-gradient-to-br from-white/[0.12] to-white/[0.02] backdrop-blur-[6px] border border-white/[0.14] shadow-[0_8px_18px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] z-[3] ${cert.badgeTextColor}`}>
          {cert.badgeSvg}
        </div>
      </div>

      <div className="pt-0.5 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`inline-block text-[9.5px] font-semibold tracking-wider uppercase py-1 px-2.5 rounded-[6px] ${cert.tagClasses}`}>{cert.issuer}</span>
          <span className="text-[11px] text-white/40 tracking-wider font-mono">{cert.year}</span>
        </div>
        <p className="text-[15px] font-semibold leading-[1.35] text-[#f2f1ee] m-0">{cert.title}</p>
      </div>

      <div className="relative -mx-4 px-4 py-3 flex items-center justify-between border-t border-dashed border-white/10">
        {/* Stub circular cutout masks */}
        <div className="absolute left-[-8px] top-[-8px] w-4 h-4 rounded-full bg-[#0F0E0E]" />
        <div className="absolute right-[-8px] top-[-8px] w-4 h-4 rounded-full bg-[#0F0E0E]" />
        <span className="flex items-center gap-1.5 text-[10.5px] tracking-wider uppercase text-white/60 font-mono group-hover:text-white transition-colors duration-300">
          Explore Credentials
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#ff6b3d] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7M17 7H9M17 7V15" /></svg>
        </span>
      </div>
    </div>
  );
}

const centerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const centerItemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function CertificationsShowcase() {
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-16 sm:py-20 lg:py-0 flex items-center justify-center bg-transparent z-10 overflow-hidden" id="certifications">
      {/* Clean Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 85%)',
        }}
      />

      <Container className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,420px)_1fr] items-center gap-10 lg:gap-5 w-full">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-7 lg:gap-7 items-center lg:items-end lg:pr-2.5 w-full order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12 },
                scale: { type: 'spring', stiffness: 35, damping: 12 },
                opacity: { duration: 0.45 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-end"
            >
              <motion.div
                animate={isInView ? { y: [0, -6] } : { y: 0 }}
                transition={{
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[0].floatDelay + 0.65
                  }
                }}
                className="w-full flex justify-center lg:justify-end"
              >
                <Link href="/certifications?cert=gdg-solution-challenge-2025" className="block focus:outline-none">
                  <CertCard cert={CERTIFICATIONS[0]} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                scale: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                opacity: { duration: 0.45, delay: 0.15 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-end"
            >
              <motion.div
                animate={isInView ? { y: [0, -6] } : { y: 0 }}
                transition={{
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[1].floatDelay + 0.8
                  }
                }}
                className="w-full flex justify-center lg:justify-end"
              >
                <Link href="/certifications?cert=nptel-sustainability-2026" className="block focus:outline-none">
                  <CertCard cert={CERTIFICATIONS[1]} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* CENTER PANEL */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={centerContainerVariants}
            className="text-center flex flex-col items-center gap-5 px-1.5 order-1 lg:order-2 select-none"
          >
            <motion.span variants={centerItemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] text-[11px] font-medium tracking-[0.14em] uppercase text-[#ffb088]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 mr-1.5"><circle cx="12" cy="8" r="5" /><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" /></svg>
              Professional Milestones
            </motion.span>
            
            <motion.h2
              variants={centerItemVariants}
              className="text-[44px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-black tracking-[-0.025em] leading-[1.01] text-white"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Certificates<br />&amp; <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ffb088] to-[#ff6b3d] bg-clip-text text-transparent">Awards</span>
            </motion.h2>
            
            <motion.p variants={centerItemVariants} className="max-w-[360px] text-[14.5px] leading-[1.65] text-white/60 font-light font-jakarta">
              A visual journey through verified certifications, hackathons, and credentials.
            </motion.p>
            
            <motion.div variants={centerItemVariants} className="flex items-center justify-center gap-3.5 text-[11.5px] text-white/40 tracking-wider font-mono">
              <span><b>04</b> certifications</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span><b>04</b> platforms</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <span><b>2025–26</b></span>
            </motion.div>

            <motion.div variants={centerItemVariants} className="inline-block mt-4">
              <Link href="/certifications">
                <button className="relative group inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full border border-[#ff6b3d] bg-transparent text-[12px] font-bold tracking-widest uppercase text-white overflow-hidden transition-colors duration-500 hover:text-[#1a0d06] font-mono">
                  <span className="absolute inset-0 bg-[#ff6b3d] translate-y-[101%] transition-transform duration-500 ease-out group-hover:translate-y-0 z-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    View Credentials
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5 text-white group-hover:text-[#1a0d06] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7M17 7H9M17 7V15" /></svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-7 lg:gap-7 items-center lg:items-start lg:pl-2.5 w-full order-3">
            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12 },
                scale: { type: 'spring', stiffness: 35, damping: 12 },
                opacity: { duration: 0.45 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-start"
            >
              <motion.div
                animate={isInView ? { y: [0, -6] } : { y: 0 }}
                transition={{
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[2].floatDelay + 0.65
                  }
                }}
                className="w-full flex justify-center lg:justify-start"
              >
                <Link href="/certifications?cert=rtc-techutsav-2026" className="block focus:outline-none">
                  <CertCard cert={CERTIFICATIONS[2]} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: isDesktop ? '-115%' : 0, y: isDesktop ? 0 : 55, scale: 0.95 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                scale: { type: 'spring', stiffness: 35, damping: 12, delay: 0.15 },
                opacity: { duration: 0.45, delay: 0.15 }
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="will-change-transform w-full flex justify-center lg:justify-start"
            >
              <motion.div
                animate={isInView ? { y: [0, -6] } : { y: 0 }}
                transition={{
                  y: {
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: CERTIFICATIONS[3].floatDelay + 0.8
                  }
                }}
                className="w-full flex justify-center lg:justify-start"
              >
                <Link href="/certifications?cert=wlug-metamorphosis-2025" className="block focus:outline-none">
                  <CertCard cert={CERTIFICATIONS[3]} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
