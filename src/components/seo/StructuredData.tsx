import Script from 'next/script';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.name,
    "jobTitle": PERSONAL_INFO.jobTitle,
    "description": PERSONAL_INFO.bio,
    "url": SITE_URL,
    "image": `${SITE_URL}${PERSONAL_INFO.image}`,
    "email": PERSONAL_INFO.email,
    "telephone": PERSONAL_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": PERSONAL_INFO.location.city,
      "addressRegion": PERSONAL_INFO.location.state,
      "addressCountry": PERSONAL_INFO.location.countryCode
    },
    "sameAs": SOCIAL_LINKS.map(link => link.url),
    "knowsAbout": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Python",
      "Machine Learning",
      "Data Science",
      "REST APIs",
      "Google OAuth",
      "Razorpay",
      "UI/UX Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": PERSONAL_INFO.jobTitle,
      "occupationLocation": {
        "@type": "City",
        "name": `${PERSONAL_INFO.location.city}, ${PERSONAL_INFO.location.state}, ${PERSONAL_INFO.location.country}`
      },
      "skills": "React.js, Node.js, Express.js, MongoDB, MERN Stack, Python, Machine Learning, Data Science"
    },
    "subjectOf": [
      {
        "@type": "CreativeWork",
        "name": "Mane Bazar",
        "description": "Full Stack Grocery E-Commerce Platform built with MERN stack, Razorpay, and Google OAuth."
      },
      {
        "@type": "CreativeWork",
        "name": "Personal Finance AI Advisor",
        "description": "AI-powered financial assistant using Python and Machine Learning to track spending and recommend budgets."
      },
      {
        "@type": "CreativeWork",
        "name": "Jewellery Shop Management System",
        "description": "Complete inventory and billing platform with role-based access control built with React and Node.js."
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "description": SITE_DESCRIPTION,
    "author": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "about": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${PERSONAL_INFO.name} - Web & AI Development Services`,
    "description": "Professional MERN stack development and Python-based AI/ML engineering services by Harshwardhan Ramdas Sathe",
    "provider": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "areaServed": "India",
    "serviceType": "Full Stack MERN & AI Development",
    "keywords": "Harshwardhan Sathe, AI & Data Science Engineer, MERN Developer, Mane Bazar, Personal Finance AI Advisor"
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${PERSONAL_INFO.name} Portfolio`,
    "url": SITE_URL,
    "description": SITE_DESCRIPTION,
    "isPartOf": {
      "@type": "WebSite",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "about": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "primaryImageOfPage": `${SITE_URL}/og-image.png`
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${PERSONAL_INFO.name} Featured Projects`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Mane Bazar",
          "description": "Full Stack Grocery E-Commerce Platform."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Personal Finance AI Advisor",
          "description": "AI-Powered Financial Assistant & Budget Planner."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "Jewellery Shop Management System",
          "description": "Complete Inventory & Billing Platform."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${SITE_URL}/#about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skills",
        "item": `${SITE_URL}/#skills`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Work",
        "item": `${SITE_URL}/#work`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": `${SITE_URL}/#contact`
      }
    ]
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="project-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
