import type { Metadata } from 'next';
import ResumePageContent from './ResumePageContent';

export const metadata: Metadata = {
  title: 'Resume | Harshwardhan Sathe',
  description: "View, download, or print Harshwardhan Sathe's professional resume. AI & Data Science Engineer and MERN Developer specializing in React.js, Node.js, Python, and Machine Learning.",
  openGraph: {
    title: 'Resume | Harshwardhan Sathe',
    description: "View, download, or print Harshwardhan Sathe's professional resume.",
    type: 'profile',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Harshwardhan Sathe Resume',
      }
    ],
  }
};

export default function ResumePage() {
  return <ResumePageContent />;
}
