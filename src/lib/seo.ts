import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';

export function generateSEO(
  title?: string,
  description?: string,
  image?: string,
  keywords?: string[]
): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageImage = image || `${SITE_URL}/og-image.png`;
  
  const defaultKeywords = [
    'Harshwardhan Sathe',
    'Harshwardhan Ramdas Sathe',
    'Harshwardhan Sathe portfolio',
    'Harshwardhan Sathe developer',
    'AI & Data Science Engineer',
    'MERN Stack Developer',
    'Python Developer India',
    'Full Stack MERN Developer',
    'AI Engineer Portfolio',
    'Machine Learning Student',
    'Data Science Portfolio',
    'React Developer India',
    'Node.js Developer India',
    'MongoDB Developer',
    'ADCET Ashta',
    'Annasaheb Dange College',
    'B.Tech AI Data Science',
    'Mane Bazar grocery app',
    'Personal Finance AI Advisor',
    'Jewellery Shop Management System',
    'Thane Developer',
    'Maharashtra Developer India',
    'TPC Department Leader',
    'IEEE Conference Paper',
    'Power BI Certified',
    'Future AI Engineer',
  ];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || defaultKeywords,
    authors: [{ name: 'Harshwardhan Ramdas Sathe', url: SITE_URL }],
    creator: 'Harshwardhan Ramdas Sathe',
    publisher: 'Harshwardhan Ramdas Sathe',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: SITE_URL,
    },
    category: 'technology',
    classification: 'Portfolio',
    other: {
      author: 'Harshwardhan Ramdas Sathe',
      'geo.region': 'IN-MH',
      'geo.placename': 'Thane',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          url: '/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          url: '/android-chrome-512x512.png',
        },
      ],
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: SITE_URL,
      siteName: SITE_NAME,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@harsh_r_s_11',
      site: '@harsh_r_s_11',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'ibL2p6r9xrTKR3U9o5zRTmVlFC4lAP_GheMlBWgOuGo',
    },
    manifest: '/site.webmanifest',
  };
}
