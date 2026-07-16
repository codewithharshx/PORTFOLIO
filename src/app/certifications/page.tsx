import type { Metadata } from 'next';
import CertificationsContent from './CertificationsContent';

export const metadata: Metadata = {
  title: 'Certifications & Credentials | Harshwardhan Sathe',
  description: "Explore the verified technical certifications, internships, and professional qualifications of Harshwardhan Sathe in AI, Data Science, and MERN Stack Development.",
  openGraph: {
    title: 'Certifications & Credentials | Harshwardhan Sathe',
    description: "Explore the verified technical certifications, internships, and professional qualifications of Harshwardhan Sathe.",
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Harshwardhan Sathe Certifications',
      }
    ],
  }
};

export default function CertificationsPage() {
  return <CertificationsContent />;
}
