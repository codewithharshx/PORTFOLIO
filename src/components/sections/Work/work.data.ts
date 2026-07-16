export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  hoverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
  // Extended case study details for iOS UI design detail sheet
  longDescription: string;
  role: string;
  timeline: string;
  category: string;
  challenges: string;
  solution: string;
  metrics: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mane Bazar",
    tagline: "Full Stack Grocery E-Commerce Platform",
    description: "A feature-rich full-stack grocery e-commerce platform inspired by Blinkit and Zepto. Built with the MERN stack, featuring secure authentication, Razorpay payments, admin dashboard, and real-time order management.",
    features: [
      "Secure JWT & Google OAuth authentication",
      "Shopping cart with real-time updates",
      "Product catalog with categories and search",
      "Admin dashboard for inventory & order management",
      "Razorpay payment gateway integration",
      "Responsive design for all devices"
    ],
    techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Google OAuth", "Razorpay", "REST APIs"],
    image: "/images/projects/project1.png",
    hoverImage: "/images/projects/project1-hover.png",
    liveUrl: "",
    githubUrl: "https://github.com/codewithharshx",
    color: "34, 197, 94",
    longDescription: "Mane Bazar is a complete grocery e-commerce platform built to replicate the experience of modern delivery apps like Blinkit and Zepto. Developed with the full MERN stack, it features a seamless shopping experience with product browsing, cart management, and secure checkout powered by Razorpay. The platform includes a comprehensive admin dashboard for managing inventory, orders, and customers.",
    role: "Full Stack MERN Developer",
    timeline: "2025",
    category: "E-Commerce Platform",
    challenges: "Implementing real-time cart synchronization and building a secure payment flow that handles edge cases like network failures and duplicate transactions.",
    solution: "Built an optimistic UI with backend cart sync, and used Razorpay webhook verification with idempotency keys to ensure reliable payment processing.",
    metrics: ["Secure Auth: JWT + Google OAuth", "Payment Gateway: Razorpay", "Responsive: All screen sizes"],
    screenshots: ["/images/projects/project1.png", "/images/projects/project1-hover.png"]
  },
  {
    id: 2,
    title: "Personal Finance AI Advisor",
    tagline: "AI-Powered Financial Assistant & Budget Planner",
    description: "An intelligent personal finance advisor powered by Python and Machine Learning. Analyzes spending habits, tracks expenses, and delivers smart AI-driven recommendations to help users improve their financial health.",
    features: [
      "Expense tracking and categorization",
      "AI-powered budget planning recommendations",
      "Spending pattern analysis using ML",
      "Smart financial insights dashboard",
      "Personalized saving suggestions"
    ],
    techStack: ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    image: "/images/projects/project2.png",
    hoverImage: "/images/projects/project2-hover.png",
    liveUrl: "",
    githubUrl: "https://github.com/codewithharshx",
    color: "139, 92, 246",
    longDescription: "The Personal Finance AI Advisor is a Python-based intelligent financial assistant designed to help users understand their spending habits and make smarter financial decisions. Using machine learning models trained on transaction patterns, it provides personalized budget recommendations and identifies areas for improvement. The system analyzes income vs. expense ratios and delivers actionable AI insights.",
    role: "Python & ML Developer",
    timeline: "2025",
    category: "AI & Machine Learning",
    challenges: "Building an ML model that generates meaningful, personalized financial advice from limited transaction history while avoiding generic recommendations.",
    solution: "Applied clustering algorithms (K-Means) to group spending patterns and used regression models to predict future expenses, enabling personalized budget forecasting.",
    metrics: ["ML Model Accuracy: High", "Expense Categories: 10+", "AI Insights: Real-time"],
    screenshots: ["/images/projects/project2.png", "/images/projects/project2-hover.png"]
  },
  {
    id: 3,
    title: "Jewellery Shop Management",
    tagline: "Complete Inventory & Billing Platform",
    description: "A comprehensive jewellery shop management system built with React and Node.js. Features role-based access control, inventory management, billing system, and complete customer record management.",
    features: [
      "Complete inventory management system",
      "Automated billing and invoice generation",
      "Customer records and history",
      "Role-Based Access Control (Admin/Staff)",
      "Sales reports and analytics",
      "JWT-secured API endpoints"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "JWT Authentication", "MongoDB", "REST APIs"],
    image: "/images/projects/project3.png",
    hoverImage: "/images/projects/project3-hover.png",
    liveUrl: "",
    githubUrl: "https://github.com/codewithharshx",
    color: "251, 191, 36",
    longDescription: "The Jewellery Shop Management System is a full-stack business application designed to streamline operations for jewellery retailers. It provides complete inventory tracking, automated billing with GST calculations, and a detailed customer management portal. The system implements strict role-based access control ensuring managers and staff have appropriate permissions.",
    role: "Full Stack Developer",
    timeline: "2025",
    category: "Business Management System",
    challenges: "Implementing a flexible role-based permission system that allows granular control over which staff members can view, edit, or delete records without creating security vulnerabilities.",
    solution: "Designed a middleware-based RBAC system with JWT tokens carrying role claims, validated server-side on every API request with protected route guards on the frontend.",
    metrics: ["RBAC: Admin + Staff roles", "Billing: Automated invoices", "Security: JWT Protected APIs"],
    screenshots: ["/images/projects/project3.png", "/images/projects/project3-hover.png"]
  },
];
