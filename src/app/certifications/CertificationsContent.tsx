'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  Award, 
  X, 
  Download, 
  Search, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  BadgeCheck,
  Tag
} from 'lucide-react';
import Container from '@/components/layout/Container';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  year: string;
  serial: string;
  image: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
  description: string;
  takeaways: string[];
  color: string;
  accentHex: string;
  accentShadow: string;
  tagClasses: string;
  badgeTextColor: string;
  icon: React.ReactNode;
}

const ALL_CERTIFICATIONS: Certificate[] = [

  {
    id: 'gdg-solution-challenge-2025',
    title: 'GDG Solution Challenge Certificate of Participation',
    issuer: 'Google Developer Groups (GDG)',
    date: 'March 2025',
    year: '2025',
    serial: 'ID: 2025H2S01GSC–P20352',
    image: '/certifications/solution-challenge-2025.jpg',
    credentialId: '2025H2S01GSC-P20352',
    verifyUrl: 'https://hack2skill.com',
    skills: ['Google Technologies', 'Problem Solving', 'Social Impact', 'App Development', 'Team Collaboration'],
    description: 'Participated in the GDG on Campus Solution Challenge, demonstrating technical dedication to building solutions that create positive social impact using modern tech.',
    takeaways: [
      'Designed and developed a software solution addressing one of the United Nations Sustainable Development Goals.',
      'Leveraged Google developer technologies to build a functional prototype with scalable architecture.',
      'Collaborated with peers to validate user requirements and iterate on product design.'
    ],
    color: 'from-red-500/20 to-orange-500/5',
    accentHex: '#ea4335',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(234,67,53,0.07)]',
    tagClasses: 'text-[#ff988f] bg-[#ea4335]/14',
    badgeTextColor: 'text-[#ffb2aa]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" strokeWidth="0" className="w-[17px] h-[17px]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
  },
  {
    id: 'wlug-metamorphosis-2025',
    title: 'WLUG Metamorphosis 2K25 Certificate of Participation',
    issuer: 'Walchand Linux Users Group (WLUG)',
    date: 'January 2025',
    year: '2025',
    serial: 'NO. WLUG–2025–MET',
    image: '/certifications/metamorphosis-2025.jpg',
    credentialId: 'WLUG-METAMORPHOSIS-2025',
    verifyUrl: 'https://wlug.org.in',
    skills: ['Docker', 'Kubernetes', 'Linux Administration', 'Containerization', 'DevOps Fundamentals'],
    description: 'Participated in the international mega-event METAMORPHOSIS 2K25 hosted by Walchand Linux Users Group, with a prime focus on Docker, Kubernetes, and Linux systems.',
    takeaways: [
      'Acquired hands-on experience in containerizing applications and environment configuration with Docker.',
      'Learned orchestration principles, cluster management, and application scaling with Kubernetes.',
      'Explored Linux container runtimes, namespace isolation, and secure deployment configurations.'
    ],
    color: 'from-purple-500/20 to-indigo-500/5',
    accentHex: '#a855f7',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(168,85,247,0.07)]',
    tagClasses: 'text-[#e9d5ff] bg-[#a855f7]/14',
    badgeTextColor: 'text-[#f3e8ff]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    id: 'rtc-techutsav-2026',
    title: 'Anant Nirmal Techutsav 2K26 Certificate of Participation',
    issuer: 'Rajgad Technical Campus (RTC)',
    date: 'April 7, 2026',
    year: '2026',
    serial: 'NO. RTC–2026–TECH',
    image: '/certifications/techutsav-2026.jpg',
    credentialId: 'RTC-TECHUTSAV-2K26',
    verifyUrl: 'http://www.rajgad.edu.in',
    skills: ['Project Competition', 'Presentation Skills', 'Engineering Principles', 'Problem Solving'],
    description: 'Participated in the "ANANT NIRMAL TECHUTSAV 2K26" State Level Project Competition organized by Innovation Cell & IQAC Cell of Rajgad Technical Campus.',
    takeaways: [
      'Showcased and defended a technical project before an expert panel of evaluators.',
      'Competed with projects from across the state, gaining insights into diverse engineering solutions.',
      'Demonstrated strong presentation, analytical reasoning, and software engineering capabilities.'
    ],
    color: 'from-amber-500/20 to-orange-500/5',
    accentHex: '#d97706',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(217,119,6,0.07)]',
    tagClasses: 'text-[#fef3c7] bg-[#d97706]/14',
    badgeTextColor: 'text-[#fffbeb]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <path d="M12 4L2 9l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 'nptel-sustainability-2026',
    title: 'NPTEL Online Certification - Education for Sustainable Development',
    issuer: 'IIT Kharagpur (NPTEL)',
    date: 'Jan-Apr 2026',
    year: '2026',
    serial: 'Roll No: NPTEL26HS58S1352000551',
    image: '/certifications/nptel-sustainability.png',
    credentialId: 'NPTEL26HS58S1352000551',
    verifyUrl: 'https://nptel.ac.in/noc',
    skills: ['Sustainable Development', 'Environmental Awareness', 'Social Responsibility', 'Education Policy'],
    description: 'Awarded Elite status for successfully completing the NPTEL Online Certification course on Education for Sustainable Development, run by Indian Institute of Technology, Kharagpur.',
    takeaways: [
      'Mastered core concepts of sustainable development goals, environmental policies, and educational integrations.',
      'Scored 25/25 on online assignments and demonstrated strong performance in the proctored national exam.',
      'Achieved Elite status certification with a consolidated score of 75%.'
    ],
    color: 'from-blue-500/20 to-teal-500/5',
    accentHex: '#1e3a8a',
    accentShadow: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.45),0_20px_44px_-18px_rgba(0,0,0,0.7),0_0_0_1px_rgba(30,58,138,0.07)]',
    tagClasses: 'text-[#93c5fd] bg-[#1e3a8a]/14',
    badgeTextColor: 'text-[#bfdbfe]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[19px] h-[19px]">
        <path d="M12 4L2 9l10 5 10-5-10-5z"/><path d="M6 11.5V17c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5.5"/>
      </svg>
    ),
  },
];

const ISSUERS = ['All', 'Google', 'IIT', 'WLUG', 'RTC'];

function StaggerCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.215, 0.610, 0.355, 1.000],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function CertificationsContent() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIssuer, setActiveIssuer] = useState('All');

  // Prevent scroll when lightbox modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  // Filter certifications based on search query AND active issuer filter
  const filteredCertifications = ALL_CERTIFICATIONS.filter(cert => {
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesIssuer = 
      activeIssuer === 'All' || 
      cert.issuer.toLowerCase().includes(activeIssuer.toLowerCase());

    return matchesSearch && matchesIssuer;
  });

  const allSkills = [...new Set(ALL_CERTIFICATIONS.flatMap(c => c.skills))];

  return (
    <section className="relative min-h-screen bg-[#0A0A0B] text-white pt-24 sm:pt-28 pb-24 overflow-x-hidden select-none">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#ff6b3d]/[0.012] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[700px] h-[700px] bg-[#8c6eff]/[0.01] rounded-full blur-[180px] pointer-events-none" />
      
      {/* Clean Grid Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 65% 60% at 50% 40%, black, transparent 90%)',
        }}
      />

      <Container className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ─── Header Section ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-14"
        >
          {/* Back Button */}
          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2.5 text-[11px] font-mono font-semibold tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-300 mb-8 group"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/5 bg-white/[0.02] group-hover:bg-white/[0.08] group-hover:border-white/10 transition-all duration-300">
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            </span>
            Back to Portfolio
          </Link>

          {/* Headline and Description Bento Card */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-end">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] text-[#ffb088] uppercase font-bold py-1 px-3.5 rounded-full border border-white/5 bg-white/[0.03]">
                  <BadgeCheck size={11} className="text-[#ff6b3d]" />
                  Credentials Ledger
                </span>
              </div>
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.03]"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Certifications &<br />
                <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ffb088] to-[#ff6b3d] bg-clip-text text-transparent">Achievements</span>
              </h1>
              <p className="text-white/50 text-sm sm:text-[15px] max-w-lg mt-4 leading-relaxed font-light font-jakarta">
                Verified industry certifications, academic credentials, and hands-on developer accomplishments in modern AI pipelines, Azure workloads, and algorithms.
              </p>
            </div>

            {/* Premium Stats Bento Card */}
            <div className="grid grid-cols-2 gap-3 p-5 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-[#121214] to-[#0A0A0A] backdrop-blur-md shadow-2xl">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
                <span className="block text-2xl font-black text-white font-mono leading-none">
                  {ALL_CERTIFICATIONS.length.toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] text-white/35 font-mono uppercase tracking-wider block mt-1.5">Certifications</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
                <span className="block text-2xl font-black text-white font-mono leading-none">
                  {new Set(ALL_CERTIFICATIONS.map(c => c.issuer)).size.toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] text-white/35 font-mono uppercase tracking-wider block mt-1.5">Platforms</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
                <span className="block text-2xl font-black text-white font-mono leading-none">{allSkills.length}</span>
                <span className="text-[9px] text-white/35 font-mono uppercase tracking-wider block mt-1.5">Skills Verified</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
                <span className="block text-2xl font-black text-white font-mono leading-none">2026</span>
                <span className="text-[9px] text-white/35 font-mono uppercase tracking-wider block mt-1.5">Latest Update</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Search and Brand Filters ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]"
        >
          {/* Glassmorphic Search box */}
          <div className="relative w-full md:max-w-xs">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35" />
            <input
              type="text"
              placeholder="Search certs or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-white/35 focus:outline-none focus:border-[#ff6b3d]/40 focus:bg-white/[0.04] transition-all duration-300 font-light"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <X size={10} />
              </button>
            )}
          </div>

          {/* Quick filter chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest mr-1.5 flex items-center gap-1 font-bold">
              <Tag size={10} /> Filter by:
            </span>
            {ISSUERS.map(issuer => (
              <button
                key={issuer}
                onClick={() => setActiveIssuer(issuer)}
                className={`py-1.5 px-3.5 rounded-full text-[10px] font-mono font-medium tracking-wider transition-all duration-300 border ${
                  activeIssuer === issuer 
                    ? 'bg-[#ff6b3d] text-black border-[#ff6b3d] font-bold shadow-[0_4px_12px_rgba(255,107,61,0.18)]' 
                    : 'bg-white/[0.02] text-white/60 border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ─── Grid View (Using Homepage Wallet-Pass Aesthetic) ──── */}
        <AnimatePresence mode="popLayout">
          {filteredCertifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 border border-dashed border-white/[0.08] rounded-[24px] bg-white/[0.01]"
            >
              <Search size={28} className="mx-auto text-white/20 mb-4 animate-bounce" />
              <p className="text-sm text-white/40 mb-1">No certifications match your active filters</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveIssuer('All'); }}
                className="text-xs text-[#ff6b3d] font-mono font-bold uppercase mt-2 hover:underline"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
            >
              {filteredCertifications.map((cert, i) => (
                <StaggerCard key={cert.id} index={i}>
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className={`group relative overflow-hidden w-full max-w-[420px] mx-auto rounded-[28px] bg-gradient-to-br from-[#1c1f26] via-[#16181d] to-[#121419] border border-white/10 p-5 pb-0 cursor-pointer transition-transform duration-500 ease-out select-none will-change-transform z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${cert.accentShadow}`}
                  >
                    {/* Gloss Sheen */}
                    <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/[0.055] to-transparent pointer-events-none" />
                    
                    {/* Hairline rim */}
                    <div className="absolute inset-0 rounded-[28px] border border-white/5 pointer-events-none z-[3]" />

                    {/* Film grain noise overlay */}
                    <div 
                      className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-[4] rounded-[28px]"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")` }}
                    />

                    {/* Verified Hover Badge overlay */}
                    <span className="absolute left-1/2 top-4 -translate-x-1/2 flex items-center gap-1 text-[#ffb088] text-[9.5px] tracking-wider uppercase font-medium font-mono whitespace-nowrap opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-20">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path d="M20 6L9 17l-5-5"/></svg>
                      Verified
                    </span>

                    {/* Document Artwork */}
                    <div className="h-[155px] rounded-[17px] relative overflow-hidden mb-2 border border-white/[0.07] bg-[#0c0c0d]">
                      <div className="absolute inset-0">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          sizes="360px"
                          className="object-cover opacity-100 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <span className="absolute left-4 bottom-3.5 text-[9px] tracking-wider text-white/40 font-mono z-[2]">{cert.serial}</span>
                      <div className={`absolute right-3.5 bottom-[-16px] w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gradient-to-br from-white/[0.12] to-white/[0.02] backdrop-blur-[6px] border border-white/[0.14] shadow-[0_8px_18px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] z-[3] ${cert.badgeTextColor}`}>
                        {cert.icon}
                      </div>
                    </div>

                    {/* Card Description Elements */}
                    <div className="pt-2 pb-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-block text-[9.5px] font-semibold tracking-wider uppercase py-1 px-2.5 rounded-[6px] ${cert.tagClasses}`}>{cert.issuer}</span>
                        <span className="text-[11px] text-white/40 tracking-wider font-mono">{cert.year}</span>
                      </div>
                      <h3 
                        className="text-[16px] font-bold leading-[1.35] text-[#f2f1ee] mb-2 line-clamp-1 group-hover:text-white transition-colors"
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        {cert.title}
                      </h3>
                      <p className="text-[12.5px] text-white/40 leading-relaxed font-light line-clamp-2">
                        {cert.description}
                      </p>
                    </div>

                    {/* Ticket Stub Divider */}
                    <div className="relative -mx-5 px-5 py-4 flex items-center justify-between border-t border-dashed border-white/10 mt-auto">
                      {/* Ticket punches */}
                      <div className="absolute left-[-8px] top-[-8px] w-4 h-4 rounded-full bg-[#0A0A0B]" />
                      <div className="absolute right-[-8px] top-[-8px] w-4 h-4 rounded-full bg-[#0A0A0B]" />
                      
                      <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-white/50 font-mono group-hover:text-[#ff6b3d] transition-colors duration-300">
                        View Verification Details
                      </span>
                      <ChevronRight size={13} className="text-[#ff6b3d] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </StaggerCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Detailed Certificate Lightbox Modal ──────────────── */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl"
            >
              {/* Backdrop tap to close */}
              <div 
                className="absolute inset-0" 
                onClick={() => setSelectedCert(null)}
              />

              {/* Bento Grid Modal Container */}
              <motion.div
                initial={{ scale: 0.94, y: 25, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.94, y: 25, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                className="relative w-full max-w-5xl bg-[#111113] border border-white/[0.08] rounded-[28px] overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.9)] z-10 max-h-[92vh] flex flex-col md:flex-row"
              >
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute right-5 top-5 w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.12] transition-all z-30 cursor-pointer group"
                >
                  <X size={14} className="text-white/50 group-hover:text-white transition-colors" />
                </button>

                {/* Left Side: Dynamic Document Image Panel */}
                <div className="relative md:w-[55%] bg-[#070708] flex items-center justify-center p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/[0.06] min-h-[220px] md:min-h-0">
                  {/* Subtle color wash behind certificate */}
                  <div 
                    className="absolute inset-0 opacity-[0.06]"
                    style={{ background: `radial-gradient(circle at center, ${selectedCert.accentHex}, transparent 65%)` }}
                  />
                  
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      fill
                      priority
                      className="object-contain bg-white"
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                  </div>
                  
                  {/* Download Action */}
                  <a
                    href={selectedCert.image}
                    download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono font-bold uppercase tracking-wider text-white/50 hover:bg-white/[0.12] hover:text-white transition-all duration-300 backdrop-blur-md"
                  >
                    <Download size={12} /> Download Copy
                  </a>
                </div>

                {/* Right Side: Ledger details Panel */}
                <div className="md:w-[45%] p-6 sm:p-8 overflow-y-auto flex flex-col justify-between max-h-[50vh] md:max-h-[92vh]">
                  <div className="flex-1">
                    {/* Issuer & Date Row */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center" style={{ color: selectedCert.accentHex }}>
                        {selectedCert.icon}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white/80 leading-none">{selectedCert.issuer}</span>
                        <span className="text-[10px] font-mono text-white/35 block mt-1">{selectedCert.date}</span>
                      </div>
                    </div>

                    {/* Heading Title */}
                    <h2 
                      className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mb-4"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {selectedCert.title}
                    </h2>

                    {/* Summary Description */}
                    <p className="text-[13px] text-white/45 leading-[1.65] font-light mb-7">
                      {selectedCert.description}
                    </p>

                    {/* Key takeaways checklists */}
                    <div className="mb-7">
                      <h4 className="text-[10px] font-mono uppercase text-white/30 tracking-[0.15em] mb-3 flex items-center gap-1.5 font-bold">
                        <BookOpen size={12} className="text-white/20" /> Key Deliverables & Learnings
                      </h4>
                      <ul className="space-y-3">
                        {selectedCert.takeaways.map((takeaway, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: selectedCert.accentHex }} />
                            <span className="text-[12.5px] text-white/60 leading-relaxed font-light">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill Tags */}
                    <div className="mb-8">
                      <h4 className="text-[10px] font-mono uppercase text-white/30 tracking-[0.15em] mb-3 flex items-center gap-1.5 font-bold">
                        <Award size={12} className="text-white/20" /> Skills Verified
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill) => (
                          <span key={skill} className="text-[10px] font-mono text-white/60 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verification & ID Panel */}
                  <div className="pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    {/* ID information block */}
                    {selectedCert.credentialId && (
                      <div>
                        <span className="block text-[8px] font-mono uppercase text-white/20 tracking-[0.15em] font-semibold mb-0.5">
                          Credential ID
                        </span>
                        <span className="text-[10.5px] font-mono text-white/45 select-all font-semibold">
                          {selectedCert.credentialId}
                        </span>
                      </div>
                    )}

                    {/* Verification Button link */}
                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 active:scale-95 group/btn"
                        style={{
                          background: selectedCert.accentHex,
                          color: '#000',
                        }}
                      >
                        Verify Credential 
                        <ShieldCheck size={14} className="transition-transform group-hover/btn:scale-110" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </section>
  );
}
