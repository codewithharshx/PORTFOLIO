import type { Metadata } from 'next';
import { projects } from '@/components/sections/Work/work.data';
import ProjectsPageContent from './ProjectsPageContent';

export const metadata: Metadata = {
  title: 'All Projects | Harshwardhan Sathe — AI & DS Engineer',
  description:
    'Browse the complete portfolio of Harshwardhan Sathe — AI & DS, MERN stack, and Python projects including Mane Bazar, Personal Finance AI Advisor, and Jewellery Shop Management System. Explore detailed case studies and codebases.',
  keywords: [
    'Harshwardhan Sathe projects',
    'AI & DS projects',
    'MERN stack projects',
    'Python machine learning projects',
    'React portfolio projects',
    'web application case studies',
    ...projects.map((p) => p.title),
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'All Projects | Harshwardhan Sathe',
    description:
      'Explore the full collection of full-stack MERN and AI-focused engineering projects built by Harshwardhan Sathe.',
    type: 'website',
    images: [
      {
        url: projects[0]?.image ?? '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Harshwardhan Sathe Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Projects | Harshwardhan Sathe',
    description:
      'Explore the full collection of full-stack MERN and AI-focused engineering projects built by Harshwardhan Sathe.',
  },
};

export default function ProjectsPage() {
  // ItemList structured data for rich search results
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Harshwardhan Sathe — Projects',
    description:
      'Complete list of full-stack MERN and AI-focused web development projects.',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        applicationCategory: project.category,
        url: `https://harshwardhansathe.vercel.app/projects/${project.id}`,
        operatingSystem: 'Web',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ProjectsPageContent projects={projects} />
    </>
  );
}
