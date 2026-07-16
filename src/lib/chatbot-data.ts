// Chatbot Knowledge Base - Comprehensive information about Harshwardhan Ramdas Sathe

export const CHATBOT_CONTEXT = {
  // Personal Information
  personal: {
    name: "Harshwardhan Ramdas Sathe",
    firstName: "Harshwardhan",
    lastName: "Sathe",
    nickname: "Harsh",
    jobTitle: "AI & Data Science Engineer | MERN Developer",
    tagline: "Building intelligent solutions with AI and the MERN stack",
    email: "harshwardhansathe1@gmail.com",
    phone: "+91 8879970396",
    location: "Thane, Maharashtra, India",
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Hindi", "Marathi"],
    bio: "I'm a B.Tech AI & Data Science student at ADCET Ashta and a MERN Stack Developer passionate about building intelligent software, scalable web applications, and AI-powered solutions. I'm currently Department Leader – AI & DS at the Training & Placement Cell (TPC) and have co-authored an IEEE conference paper. My featured projects include Mane Bazar (grocery e-commerce), Personal Finance AI Advisor, and Jewellery Shop Management System.",
    shortBio: "AI & Data Science Engineer and MERN Developer specializing in React, Node.js, Python, and AI-powered web applications.",
    currentStatus: "B.Tech AI & DS student at ADCET Ashta, Department Leader at TPC, and actively building MERN + AI projects.",
    yearsOfExperience: "1+",
    projectsBuilt: "3+",
    linesOfCode: "50,000+",
    coffeeConsumed: "342 cups",
    availableForWork: true,
    workPreference: ["Internship", "Freelance", "Contract", "Full-time"],
    responseTime: "Usually within 24 hours",
  },

  // Detailed Skills
  skills: {
    languages: ["Python", "JavaScript", "Java"],
    frontend: {
      languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      frameworks: ["React.js", "Vite", "Next.js"],
      styling: ["Tailwind CSS", "CSS Modules", "SCSS"],
      animation: ["Framer Motion", "GSAP", "CSS Animations"],
      stateManagement: ["React Context", "useState", "useReducer"],
      testing: ["Jest", "React Testing Library"],
      tools: ["Vite", "ESLint", "Prettier"],
    },
    backend: {
      languages: ["Node.js", "Python", "Java"],
      frameworks: ["Express.js", "FastAPI"],
      apis: ["REST APIs", "JSON APIs"],
      authentication: ["JWT", "Google OAuth", "Bcrypt"],
      caching: ["Redis"],
    },
    databases: {
      nosql: ["MongoDB", "Mongoose"],
      sql: ["MySQL", "SQLite"],
      orm: ["Mongoose", "Prisma"],
      cloud: ["MongoDB Atlas"],
    },
    ai_ml: {
      frameworks: ["Scikit-learn", "TensorFlow (basics)"],
      nlp: ["NLTK", "SpaCy (basics)"],
      tools: ["Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      apis: ["OpenAI API (basics)"],
      specializations: ["Machine Learning", "Data Analysis", "Predictive Modeling", "K-Means Clustering", "Regression", "Classification"],
    },
    devops: {
      cloud: ["Vercel", "Render", "Railway"],
      containers: ["Docker (basics)"],
      ci_cd: ["GitHub Actions (basics)"],
      monitoring: ["Vercel Analytics"],
    },
    payments: ["Razorpay"],
    tools: {
      ide: ["VS Code"],
      design: ["Figma (basics)", "Canva"],
      api: ["Postman"],
      version_control: ["Git", "GitHub"],
      productivity: ["Notion", "Trello"],
    },
    other: ["JWT Authentication", "RBAC", "Data Science", "Computer Vision", "Power BI", "SEO"],
  },

  // Detailed Projects
  projects: [
    {
      name: "Mane Bazar",
      type: "E-Commerce Platform",
      tagline: "Full Stack Grocery E-Commerce Platform",
      description: "A feature-rich full-stack grocery e-commerce platform inspired by Blinkit and Zepto. Built with the MERN stack, featuring secure authentication, Razorpay payments, admin dashboard, and real-time order management.",
      longDescription: "Mane Bazar is a complete grocery e-commerce platform built to replicate the experience of modern delivery apps like Blinkit and Zepto. Developed with the full MERN stack, it features a seamless shopping experience with product browsing, cart management, and secure checkout powered by Razorpay. The platform includes a comprehensive admin dashboard for managing inventory, orders, and customers.",
      techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Google OAuth", "Razorpay", "REST APIs"],
      features: [
        "Secure JWT & Google OAuth authentication",
        "Shopping cart with real-time updates",
        "Product catalog with categories and search",
        "Admin dashboard for inventory & order management",
        "Razorpay payment gateway integration",
        "Responsive design for all devices",
      ],
      challenges: "Implementing real-time cart synchronization and building a secure payment flow that handles edge cases like network failures and duplicate transactions.",
      solution: "Built an optimistic UI with backend cart sync, and used Razorpay webhook verification with idempotency keys to ensure reliable payment processing.",
      status: "Completed",
      github: "https://github.com/codewithharshx",
    },
    {
      name: "Personal Finance AI Advisor",
      type: "AI & Machine Learning",
      tagline: "AI-Powered Financial Assistant & Budget Planner",
      description: "An intelligent personal finance advisor powered by Python and Machine Learning. Analyzes spending habits, tracks expenses, and delivers smart AI-driven recommendations to help users improve their financial health.",
      longDescription: "The Personal Finance AI Advisor is a Python-based intelligent financial assistant designed to help users understand their spending habits and make smarter financial decisions. Using machine learning models trained on transaction patterns, it provides personalized budget recommendations and identifies areas for improvement. The system analyzes income vs. expense ratios and delivers actionable AI insights.",
      techStack: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      features: [
        "Expense tracking and categorization",
        "AI-powered budget planning recommendations",
        "Spending pattern analysis using ML",
        "Smart financial insights dashboard",
        "Personalized saving suggestions",
      ],
      challenges: "Building an ML model that generates meaningful, personalized financial advice from limited transaction history.",
      solution: "Applied K-Means clustering to group spending patterns and regression models to predict future expenses, enabling personalized budget forecasting.",
      status: "Completed",
      github: "https://github.com/codewithharshx",
    },
    {
      name: "Jewellery Shop Management",
      type: "Business Management System",
      tagline: "Complete Inventory & Billing Platform",
      description: "A comprehensive jewellery shop management system built with React and Node.js. Features role-based access control, inventory management, billing system, and complete customer record management.",
      longDescription: "The Jewellery Shop Management System is a full-stack business application designed to streamline operations for jewellery retailers. It provides complete inventory tracking, automated billing with GST calculations, and a detailed customer management portal. The system implements strict role-based access control ensuring managers and staff have appropriate permissions.",
      techStack: ["React.js", "Node.js", "Express.js", "JWT Authentication", "MongoDB", "REST APIs"],
      features: [
        "Complete inventory management system",
        "Automated billing and invoice generation",
        "Customer records and history",
        "Role-Based Access Control (Admin/Staff)",
        "Sales reports and analytics",
        "JWT-secured API endpoints",
      ],
      challenges: "Implementing a flexible role-based permission system that allows granular control without creating security vulnerabilities.",
      solution: "Designed a middleware-based RBAC system with JWT tokens carrying role claims, validated server-side on every API request.",
      status: "Completed",
      github: "https://github.com/codewithharshx",
    },
  ],

  featuredProjects: ["Mane Bazar", "Personal Finance AI Advisor"],

  // Journey/Timeline
  journey: [
    {
      year: "2023",
      title: "Beginning of the Journey",
      description: "Started B.Tech in AI & Data Science at Annasaheb Dange College of Engineering & Technology (ADCET), Ashta. Began learning programming fundamentals, HTML, CSS, and JavaScript.",
      achievements: ["Started B.Tech at ADCET Ashta", "Learned web fundamentals", "Built first static websites"],
      skills_learned: ["HTML5", "CSS3", "JavaScript", "Python Basics"],
    },
    {
      year: "2024",
      title: "Going Full Stack",
      description: "Dived deep into MERN Stack development. Built the Jewellery Shop Management System. Participated in technical events including Discovery 2024. Joined Training & Placement Cell.",
      achievements: ["Built Jewellery Shop Management System", "Organized Discovery 2024", "Joined TPC"],
      skills_learned: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    },
    {
      year: "2025",
      title: "AI & Growth Phase",
      description: "Completed Python Internship at Prepgrad (Aug–Sep 2025), working on Data Analysis and Power BI dashboards. Built Personal Finance AI Advisor using ML. Co-authored an IEEE conference paper. Organized Codathon 2025, Discovery 2025, and Neuroverse 2025.",
      achievements: ["Python Internship at Prepgrad", "Co-authored IEEE conference paper", "Built AI Finance Advisor", "Organized Codathon & Neuroverse 2025"],
      skills_learned: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Power BI", "Data Analysis"],
    },
    {
      year: "2026",
      title: "Leadership & Full Stack Mastery",
      description: "Became Department Leader – AI & DS at TPC (February 2026), coordinating placement drives and helping 100+ students with career development. Built Mane Bazar, a full-stack grocery e-commerce platform with Razorpay payments and Google OAuth.",
      achievements: ["Promoted to TPC Department Leader", "Built Mane Bazar", "Razorpay & OAuth integration", "Helping 100+ students"],
      skills_learned: ["Google OAuth", "Razorpay", "Admin Dashboards", "Team Leadership"],
      isCurrent: true,
    },
    {
      year: "Future",
      title: "Scaling AI & Engineering",
      description: "Aiming to master advanced AI/ML systems, contribute to open source, and build production-grade AI-powered web applications that impact real people.",
      achievements: ["Goals: ML research", "Open source contributions", "Production AI products"],
      skills_learned: ["Deep Learning", "NLP", "System Design", "Microservices"],
    },
  ],

  // Education
  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Annasaheb Dange College of Engineering & Technology (ADCET), Ashta",
    duration: "2023 – Present",
    location: "Ashta, Sangli, Maharashtra",
  },

  // Experience
  experience: [
    {
      role: "Department Leader – AI & DS",
      organization: "Training & Placement Cell (TPC), ADCET Ashta",
      duration: "February 2026 – Present",
      description: "Coordinating placement drives and helping 100+ students with career development in the AI & Data Science domain.",
    },
    {
      role: "Python Internship",
      organization: "Prepgrad",
      duration: "Aug 2025 – Sep 2025",
      description: "Worked on Data Analysis projects and created Power BI dashboards for business intelligence reporting.",
    },
  ],

  // Achievements
  achievements: [
    "Co-authored an IEEE conference paper",
    "Department Leader – AI & DS at TPC (helping 100+ students)",
    "Completed Python Internship at Prepgrad",
    "Built 3+ production full-stack and AI projects",
    "Organized Codathon 2025, Discovery 2024 & 2025, Neuroverse 2025",
    "Power BI certified",
  ],

  // Services
  services: [
    {
      name: "Full Stack MERN Development",
      description: "End-to-end web application development from concept to deployment using MongoDB, Express, React, and Node.js",
      includes: ["Custom web applications", "E-commerce platforms", "Admin dashboards", "REST API design"],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "AI/ML Solutions with Python",
      description: "Build AI-powered features and ML models using Python, Scikit-learn, and data analysis libraries",
      includes: ["ML model development", "Data analysis", "Predictive modeling", "Data visualization"],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      name: "API Design & Development",
      description: "Design and build robust, secure RESTful APIs with JWT authentication and role-based access control",
      includes: ["REST APIs", "JWT auth", "RBAC", "API documentation"],
      technologies: ["Node.js", "Express.js", "JWT", "MongoDB"],
    },
    {
      name: "Payment Integration",
      description: "Integrate Razorpay payment gateway with secure webhook verification and order management",
      includes: ["Razorpay integration", "Order management", "Payment tracking", "Webhook verification"],
      technologies: ["Razorpay", "Node.js", "Express.js"],
    },
    {
      name: "UI/UX Frontend Development",
      description: "Create beautiful, responsive user interfaces with React.js and modern CSS",
      includes: ["Responsive design", "Animations", "Custom components", "Cross-browser compatibility"],
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Database Design",
      description: "Design efficient MongoDB schemas and SQL databases for scalable applications",
      includes: ["Schema design", "Indexing", "Query optimization", "Data modeling"],
      technologies: ["MongoDB", "Mongoose", "MySQL", "SQL"],
    },
  ],

  // Pricing
  pricing: {
    consultation: "Free initial consultation",
    hourlyRange: "Negotiable based on project complexity",
    projectBased: "Custom quotes for project-based work",
    retainer: "Open to internship and long-term engagements",
  },

  // Work Process
  workProcess: [
    { step: 1, title: "Discovery", description: "Understanding your requirements, goals, and vision" },
    { step: 2, title: "Planning", description: "Creating a detailed roadmap and technical specification" },
    { step: 3, title: "Development", description: "Building with regular updates and feedback loops" },
    { step: 4, title: "Testing", description: "Thorough testing to ensure quality and performance" },
    { step: 5, title: "Launch", description: "Deploying to production with monitoring" },
    { step: 6, title: "Support", description: "Ongoing maintenance and improvements" },
  ],

  // FAQ
  faq: [
    {
      question: "Are you available for internships?",
      answer: "Yes! I'm actively looking for internship and entry-level opportunities in Full Stack Development or AI/ML roles.",
    },
    {
      question: "What is your preferred tech stack?",
      answer: "I love the MERN stack (MongoDB, Express, React, Node.js) for web apps and Python + Scikit-learn for AI/ML projects.",
    },
    {
      question: "Can you work on freelance projects?",
      answer: "Yes, I take on freelance projects alongside my studies. Reach out to discuss your requirements and timeline.",
    },
    {
      question: "Do you have experience with payments?",
      answer: "Yes! I've integrated Razorpay payment gateway in Mane Bazar with webhook verification and order management.",
    },
    {
      question: "What is your availability?",
      answer: "I'm currently a B.Tech student and available for part-time internships, freelance work, or project collaborations.",
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Absolutely! I'm comfortable jumping into existing projects, understanding the architecture, and contributing effectively.",
    },
  ],

  // Social Links
  social: {
    github: "https://github.com/codewithharshx",
    linkedin: "https://www.linkedin.com/in/harshwardhan-sathe-774945332/",
    instagram: "https://www.instagram.com/harsh_r_s_11",
    twitter: "https://www.instagram.com/harsh_r_s_11",
    portfolio: "https://harshwardhansathe.vercel.app",
    email: "harshwardhansathe1@gmail.com",
  },

  // Fun facts
  funFacts: [
    "I started coding in 2023 and haven't stopped since.",
    "I've organized events for 100s of students at ADCET.",
    "I co-authored an IEEE conference paper as a student.",
    "I consumed 342 cups of coffee while building projects.",
    "I'm passionate about AI and its real-world applications.",
    "I build full-stack apps from scratch — frontend to backend to database.",
    "I'm based in Thane, Maharashtra, but code for the world.",
    "My MERN stack goes: MongoDB → Express → React → Node.",
    "I use Python for everything AI-related and JavaScript for the web.",
    "I learn by building real projects, not just following tutorials.",
  ],

  // Interests
  interests: [
    "AI & Machine Learning",
    "Full Stack MERN Development",
    "Data Science & Analytics",
    "Open Source",
    "UI/UX Design",
    "Computer Vision",
    "Teaching & Mentoring",
    "Problem Solving",
  ],

  // Portfolio sections
  sections: {
    hero: { name: "Home", link: "#hero", description: "Welcome section with introduction" },
    about: { name: "About Me", link: "#about", description: "Learn more about Harshwardhan" },
    skills: { name: "Skills", link: "#skills", description: "Technologies and expertise" },
    projects: { name: "Projects", link: "#work", description: "Portfolio of projects" },
    services: { name: "Services", link: "#contact", description: "What Harshwardhan offers" },
    contact: { name: "Contact", link: "#contact", description: "Get in touch" },
  },
};

// Pre-computed responses for common questions
export const QUICK_RESPONSES: Record<string, string> = {
  // Greetings
  'hi': "Hey there! 👋 I'm Harshwardhan's AI assistant. How can I help you learn more about him today?",
  'hello': "Hello! Welcome to Harshwardhan's portfolio. What would you like to know?",
  'hey': "Hi! I'm here to tell you all about Harshwardhan. Ask me anything!",
  'good morning': "Good morning! ☀️ Welcome to Harshwardhan's portfolio. How can I assist you today?",
  'good afternoon': "Good afternoon! Welcome! What would you like to know about Harshwardhan?",
  'good evening': "Good evening! 🌙 Thanks for visiting. How can I help you?",

  // Identity Questions
  'name': `My name is **${CHATBOT_CONTEXT.personal.name}**. I'm his AI assistant here to help!`,
  'your name': `I'm **${CHATBOT_CONTEXT.personal.name}'s AI assistant**. Ask me anything about his work!`,
  'what is your name': `I'm **${CHATBOT_CONTEXT.personal.name}'s AI assistant**. Harshwardhan is a ${CHATBOT_CONTEXT.personal.jobTitle}.`,

  // About Questions
  'who are you': `I'm an AI assistant for **Harshwardhan Ramdas Sathe**, a ${CHATBOT_CONTEXT.personal.jobTitle} based in ${CHATBOT_CONTEXT.personal.location}. I can tell you about his skills, projects, experience, and more!`,
  'who is harshwardhan': `**Harshwardhan Ramdas Sathe** is a ${CHATBOT_CONTEXT.personal.jobTitle}. ${CHATBOT_CONTEXT.personal.bio}`,
  'tell me about yourself': `**Harshwardhan Ramdas Sathe** is a ${CHATBOT_CONTEXT.personal.jobTitle} based in ${CHATBOT_CONTEXT.personal.location}.\n\n${CHATBOT_CONTEXT.personal.bio}\n\n📊 **Quick Stats:**\n• ${CHATBOT_CONTEXT.personal.yearsOfExperience} years of experience\n• ${CHATBOT_CONTEXT.personal.projectsBuilt} production projects built\n• Currently: ${CHATBOT_CONTEXT.personal.currentStatus}`,
  'tell me about harshwardhan': `**Harshwardhan Ramdas Sathe** is a passionate ${CHATBOT_CONTEXT.personal.jobTitle}.\n\n${CHATBOT_CONTEXT.personal.bio}`,
  'introduce yourself': `Hi! I'm the AI assistant for **Harshwardhan Ramdas Sathe**. Harshwardhan is a ${CHATBOT_CONTEXT.personal.jobTitle} who specializes in building modern web applications and AI solutions. I can help you learn about his skills, projects, and how to work with him!`,
  'what do you do': `Harshwardhan is a **${CHATBOT_CONTEXT.personal.jobTitle}** who builds:\n\n• Full Stack MERN web applications\n• AI-powered ML solutions with Python\n• E-commerce platforms with payment integrations\n• RESTful APIs with secure JWT auth\n\nHe's passionate about creating intelligent digital experiences!`,

  // Contact Questions
  'email': `📧 You can reach Harshwardhan at: **${CHATBOT_CONTEXT.personal.email}**`,
  'phone': `📱 Harshwardhan's phone number is: **${CHATBOT_CONTEXT.personal.phone}**`,
  'phone number': `📱 Harshwardhan's phone number is: **${CHATBOT_CONTEXT.personal.phone}**`,
  'contact': `**Get in Touch:**\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n📱 Phone: ${CHATBOT_CONTEXT.personal.phone}\n\n👉 [Go to Contact Section](#contact)`,
  'how can i contact you': `**Contact Harshwardhan:**\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n📱 Phone: ${CHATBOT_CONTEXT.personal.phone}\n💼 LinkedIn: ${CHATBOT_CONTEXT.social.linkedin}\n\n👉 [Go to Contact Section](#contact)`,
  'how to reach you': `**Reach out to Harshwardhan:**\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n📱 Phone: ${CHATBOT_CONTEXT.personal.phone}\n\nHe typically responds within ${CHATBOT_CONTEXT.personal.responseTime}!`,

  // Location Questions
  'location': `📍 Harshwardhan is based in **${CHATBOT_CONTEXT.personal.location}**, India!`,
  'where are you from': `📍 Harshwardhan is from **${CHATBOT_CONTEXT.personal.location}**, Maharashtra, India!`,
  'where do you live': `📍 Harshwardhan lives in **${CHATBOT_CONTEXT.personal.location}**, India.`,
  'where are you located': `📍 Harshwardhan is located in **${CHATBOT_CONTEXT.personal.location}**.\n\n🌍 Timezone: ${CHATBOT_CONTEXT.personal.timezone}\n🎓 Studying at ADCET Ashta, Sangli`,
  'which country': `🇮🇳 Harshwardhan is based in **India**, specifically in ${CHATBOT_CONTEXT.personal.location}.`,

  // Availability & Hiring
  'available': CHATBOT_CONTEXT.personal.availableForWork
    ? "✅ **Yes!** Harshwardhan is currently available for internships, freelance, and contract opportunities. Reach out to discuss your project!"
    : "⏳ Harshwardhan is currently busy with existing commitments, but feel free to reach out for future projects.",
  'are you available': CHATBOT_CONTEXT.personal.availableForWork
    ? "✅ **Yes!** Harshwardhan is currently available for new projects and opportunities!"
    : "⏳ Currently busy, but open to discussing future opportunities.",
  'can i hire you': `Yes! Harshwardhan is ${CHATBOT_CONTEXT.personal.availableForWork ? '**currently available**' : 'open to opportunities'}.\n\n**To connect:**\n1. Go to the Contact Section\n2. Send a message describing your project\n3. He'll respond within ${CHATBOT_CONTEXT.personal.responseTime}\n\n👉 [Go to Contact Section](#contact)`,
  'how can i hire you': `**How to Connect with Harshwardhan:**\n\n1. 📝 Visit the Contact Section\n2. 💬 Describe your project requirements\n3. 📧 Or email directly: ${CHATBOT_CONTEXT.personal.email}\n\nHe responds within ${CHATBOT_CONTEXT.personal.responseTime}!\n\n👉 [Go to Contact Section](#contact)`,
  'hire': `**Connect with Harshwardhan:**\n\n✅ Currently available for:\n${CHATBOT_CONTEXT.personal.workPreference.map(w => `• ${w}`).join('\n')}\n\n📧 Email: ${CHATBOT_CONTEXT.personal.email}\n👉 [Go to Contact Section](#contact)`,

  // Skills Questions
  'what are your skills': `**Harshwardhan's Key Skills:**\n\n🐍 **Languages:** Python, JavaScript, Java\n⚛️ **Frontend:** React.js, HTML5, CSS3, Tailwind CSS\n⚙️ **Backend:** Node.js, Express.js, REST APIs\n🗄️ **Database:** MongoDB, SQL\n🤖 **AI/ML:** Scikit-learn, Pandas, NumPy\n🔐 **Auth:** JWT, Google OAuth\n\n👉 [View All Skills](#skills)`,
  'tech stack': `**Harshwardhan's Tech Stack:**\n\n⚛️ **Frontend:** React.js, Vite, Tailwind CSS, HTML5, CSS3\n⚙️ **Backend:** Node.js, Express.js, REST APIs\n🗄️ **Databases:** MongoDB, SQL\n🤖 **AI/ML:** Python, Scikit-learn, Pandas, NumPy\n🔐 **Auth:** JWT, Google OAuth\n💳 **Payments:** Razorpay\n🛠️ **Tools:** Git, GitHub, VS Code, Postman\n\n**Core Stack:** React + Node.js + MongoDB + Express (MERN)`,
  'what technologies do you use': `**Technologies Harshwardhan Uses:**\n\n• **Languages:** Python, JavaScript, Java\n• **Frontend:** React.js, HTML5, CSS3, Tailwind\n• **Backend:** Node.js, Express.js\n• **Databases:** MongoDB, SQL\n• **AI/ML:** Scikit-learn, Pandas, NumPy\n\n👉 [View All Skills](#skills)`,
  'favorite stack': "🛠️ Harshwardhan's favorite stack is **MERN (MongoDB + Express + React + Node.js)**. He loves combining it with Python for AI-powered features!",
  'what is your favorite technology': "🛠️ Harshwardhan loves **React.js** for the frontend, **Node.js/Express** for the backend, and **Python with Scikit-learn** for AI/ML tasks. He's passionate about the MERN stack!",
  'best at': "Harshwardhan excels at **Full Stack MERN Development** and **Python-based AI/ML solutions**. He's built production e-commerce and AI advisor applications!",

  // Project Questions
  'show me your projects': `**Harshwardhan's Projects:**\n\n🛒 **Mane Bazar** - Full Stack Grocery E-Commerce Platform\n🤖 **Personal Finance AI Advisor** - AI-Powered Budget Planner\n💍 **Jewellery Shop Management** - Inventory & Billing Platform\n\n👉 [View All Projects](#work)`,
  'what projects have you built': `**Projects Built by Harshwardhan:**\n\n1. **Mane Bazar** - MERN grocery e-commerce with Razorpay & Google OAuth\n2. **Personal Finance AI Advisor** - Python ML financial advisor\n3. **Jewellery Shop Management** - Full-stack RBAC business system\n\n👉 [View All Projects](#work)`,
  'your work': `**Harshwardhan's Work:**\n\nHe has built ${CHATBOT_CONTEXT.personal.projectsBuilt} production projects spanning e-commerce, AI, and business management.\n\n**Featured:** Mane Bazar, Personal Finance AI Advisor\n\n👉 [View Projects](#work)`,
  'portfolio': `**Harshwardhan's Portfolio:**\n\nIncludes ${CHATBOT_CONTEXT.personal.projectsBuilt} projects ranging from MERN e-commerce platforms to AI-powered financial tools.\n\n👉 [View All Projects](#work)`,

  // Specific Projects
  'tell me about mane bazar': `**🛒 Mane Bazar - Grocery E-Commerce Platform**\n\n${CHATBOT_CONTEXT.projects[0].longDescription}\n\n**Tech:** React, Node.js, MongoDB, Razorpay, JWT, Google OAuth\n**Status:** Completed\n\n👉 [View Projects](#work)`,
  'what is mane bazar': `**Mane Bazar** is Harshwardhan's full-stack grocery e-commerce platform inspired by Blinkit and Zepto.\n\n**Features:**\n• Razorpay payment integration\n• Google OAuth login\n• Admin dashboard\n• Real-time cart\n\n👉 [View Projects](#work)`,
  'tell me about finance advisor': `**🤖 Personal Finance AI Advisor**\n\n${CHATBOT_CONTEXT.projects[1].longDescription}\n\n**Tech:** Python, Scikit-learn, Pandas, NumPy, Matplotlib\n**Status:** Completed\n\n👉 [View Projects](#work)`,
  'tell me about jewellery': `**💍 Jewellery Shop Management System**\n\nA full-stack business management system for jewellery retailers with RBAC, billing, and inventory.\n\n**Tech:** React, Node.js, MongoDB, JWT\n**Status:** Completed\n\n👉 [View Projects](#work)`,

  // Experience
  'experience': `**Harshwardhan's Experience:**\n\n🎓 B.Tech AI & DS at ADCET Ashta (2023 – Present)\n👨‍💼 TPC Department Leader – AI & DS (Feb 2026 – Present)\n💼 Python Intern at Prepgrad (Aug–Sep 2025)\n📄 IEEE Conference Paper Co-author\n\n👉 [Learn More](#about)`,
  'how much experience': `Harshwardhan has **${CHATBOT_CONTEXT.personal.yearsOfExperience} year** of hands-on development experience, with ${CHATBOT_CONTEXT.personal.projectsBuilt} production projects built using MERN stack and Python/ML!`,
  'internship': `💼 **Internship at Prepgrad (Aug–Sep 2025)**:\n\nWorked on **Python & Data Analysis** projects and built **Power BI dashboards** for business intelligence.\n\n👉 [Learn More](#about)`,
  'your journey': `**Harshwardhan's Journey:**\n\n2023 - Started B.Tech AI & DS at ADCET Ashta\n2024 - Built Jewellery Shop Management, organized Discovery 2024\n2025 - Python Intern at Prepgrad, co-authored IEEE paper, AI Finance Advisor\n2026 - TPC Department Leader, built Mane Bazar\n\n👉 [View Full Journey](#about)`,

  // Education
  'education': `**Education:**\n\n🎓 B.Tech in AI & Data Science (2023 – Present)\n🏛️ Annasaheb Dange College of Engineering & Technology (ADCET), Ashta\n📍 Sangli, Maharashtra\n\nHarshwardhan believes in learning by building real projects!`,
  'where did you study': `🎓 Harshwardhan is pursuing **B.Tech in Artificial Intelligence & Data Science** at **ADCET Ashta** (Sangli, Maharashtra).`,
  'college': `🏛️ Harshwardhan studies at **Annasaheb Dange College of Engineering & Technology (ADCET)**, Ashta, Sangli.\n\n📅 2023 – Present (B.Tech AI & DS)`,
  'adcet': `**ADCET Ashta** (Annasaheb Dange College of Engineering & Technology) is where Harshwardhan is pursuing his **B.Tech in AI & Data Science** (2023 – Present).\n\nHe's also Department Leader – AI & DS at the TPC there!`,
  'your qualification': `**Qualifications:**\n\n🎓 B.Tech in AI & Data Science (Pursuing) – ADCET Ashta\n💻 ${CHATBOT_CONTEXT.personal.yearsOfExperience}+ year practical experience\n🚀 ${CHATBOT_CONTEXT.personal.projectsBuilt} production projects\n📄 IEEE Conference Paper Co-author\n📊 Power BI Certified`,

  // Achievements
  'achievements': `**Harshwardhan's Achievements:**\n\n📄 Co-authored an IEEE Conference Paper\n👨‍💼 TPC Department Leader (AI & DS) – helping 100+ students\n🏆 Organized Codathon 2025, Neuroverse 2025, Discovery 2024 & 2025\n💼 Python Internship at Prepgrad\n📊 Power BI Certified`,

  // Social Links
  'github': `🐙 **GitHub:** ${CHATBOT_CONTEXT.social.github}\n\nCheck out Harshwardhan's projects and code!`,
  'linkedin': `💼 **LinkedIn:** ${CHATBOT_CONTEXT.social.linkedin}\n\nConnect with Harshwardhan professionally!`,
  'instagram': `📸 **Instagram:** ${CHATBOT_CONTEXT.social.instagram}\n\nFollow Harshwardhan on Instagram!`,
  'social links': `**Connect with Harshwardhan:**\n\n🐙 GitHub: ${CHATBOT_CONTEXT.social.github}\n💼 LinkedIn: ${CHATBOT_CONTEXT.social.linkedin}\n📸 Instagram: ${CHATBOT_CONTEXT.social.instagram}\n🌐 Portfolio: ${CHATBOT_CONTEXT.social.portfolio}`,

  // Navigation
  'show all sections': `**📍 Portfolio Sections:**\n\n• [🏠 Home](#hero) - Welcome section\n• [👤 About Me](#about) - Learn about Harshwardhan\n• [🛠️ Skills](#skills) - Technologies & expertise\n• [🚀 Projects](#work) - Portfolio of work\n• [📧 Contact](#contact) - Get in touch`,
  'sections': `**Portfolio Sections:**\n\n• [Home](#hero)\n• [About](#about)\n• [Skills](#skills)\n• [Work](#work)\n• [Contact](#contact)`,
  'navigate': `**Navigate the Portfolio:**\n\n👉 [About Me](#about)\n👉 [Skills](#skills)\n👉 [Projects](#work)\n👉 [Contact](#contact)`,
  'go to projects': `👉 Click here to view projects: [View Projects](#work)`,
  'go to contact': `👉 Click here to contact: [Go to Contact](#contact)`,
  'go to skills': `👉 Click here to view skills: [View Skills](#skills)`,
  'go to about': `👉 Click here to learn more: [About Me](#about)`,

  // Fun Facts
  'fun fact': CHATBOT_CONTEXT.funFacts[Math.floor(Math.random() * CHATBOT_CONTEXT.funFacts.length)],
  'tell me something interesting': `**Fun Fact:** ${CHATBOT_CONTEXT.funFacts[Math.floor(Math.random() * CHATBOT_CONTEXT.funFacts.length)]}\n\nWant to know more about Harshwardhan?`,
  'hobbies': `**Harshwardhan's Interests:**\n\n• AI & Machine Learning\n• Full Stack Web Development\n• Data Science & Analytics\n• Teaching & Mentoring\n• Problem Solving\n\nCoding is both his work and passion!`,

  // Common Questions
  'why should i hire you': `**Why Hire Harshwardhan?**\n\n✅ MERN Stack full-stack expertise\n✅ Python & ML capabilities\n✅ Real production projects shipped\n✅ IEEE paper co-author\n✅ TPC leader with mentoring experience\n✅ Quick learner & clear communicator\n\n👉 [Let's Discuss](#contact)`,
  'what makes you different': `**What Sets Harshwardhan Apart:**\n\n🎯 Full-stack MERN + AI/ML combination\n🚀 Shipped real production projects\n📄 Co-authored an IEEE conference paper\n👨‍💼 Leadership experience at TPC\n💡 Solves real business problems with code\n\nHe builds things that work and scale!`,
  'do you work remotely': `Harshwardhan is **open to remote opportunities**.\n\n🌍 Available for remote/hybrid projects\n⏰ IST timezone (UTC+5:30)\n💬 Clear async communication\n\n👉 [Start a Conversation](#contact)`,
  'timezone': `🕐 Harshwardhan's Timezone: **${CHATBOT_CONTEXT.personal.timezone}**`,
  'languages you speak': `**Languages Harshwardhan Speaks:**\n\n• English (Professional)\n• Hindi (Fluent)\n• Marathi (Native)`,
};

// Response templates for common intents
export const RESPONSE_TEMPLATES = {
  greeting: [
    "Hey there! 👋 I'm Harshwardhan's AI assistant. How can I help you learn more about him today?",
    "Hello! Welcome to Harshwardhan's portfolio. What would you like to know?",
    "Hi! I'm here to tell you all about Harshwardhan. Ask me anything!",
    "Hey! Great to meet you. I can tell you about Harshwardhan's skills, projects, experience, and more. What interests you?",
  ],

  farewell: [
    "Thanks for chatting! Feel free to reach out to Harshwardhan at harshwardhansathe1@gmail.com. Have a great day! 👋",
    "Goodbye! Don't hesitate to contact Harshwardhan if you have any opportunities or questions.",
    "Take care! Harshwardhan would love to hear from you. Connect on LinkedIn or send an email!",
    "Thanks for visiting! Hope this was helpful. Reach out anytime! 🙌",
  ],

  unknown: [
    "I'm not sure about that specific question. Try asking about:\n\n• Skills & tech stack\n• Projects (Mane Bazar, AI Advisor, Jewellery)\n• Education & journey\n• Contact info\n• Achievements\n\nOr reach out to Harshwardhan at harshwardhansathe1@gmail.com!",
    "That's an interesting question! I can help with questions about Harshwardhan's:\n\n• Skills & expertise\n• Projects & portfolio\n• Education & internships\n• Contact & hiring\n\nWhat would you like to know?",
    "I don't have specific info on that, but try asking about skills, projects, or education! Or contact Harshwardhan directly.",
  ],

  thanks: [
    "You're welcome! 😊 Let me know if you have any other questions about Harshwardhan.",
    "Happy to help! Feel free to explore more or reach out to Harshwardhan directly.",
    "Glad I could help! Is there anything else you'd like to know?",
    "Anytime! 🙌 Feel free to ask more questions or visit the Contact section.",
  ],

  capabilities: [
    "**I can tell you about:**\n\n• 👤 Harshwardhan's background & bio\n• 🛠️ Skills and tech stack\n• 🚀 Projects (Mane Bazar, AI Advisor, Jewellery)\n• 📅 Education and journey\n• 💼 Experience & achievements\n• 📧 How to contact or connect\n• 🔗 Social links\n\nWhat would you like to know?",
  ],
};

// Enhanced keywords for intent detection
export const INTENT_KEYWORDS: Record<string, string[]> = {
  // Greetings
  greeting: ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "howdy", "sup", "yo", "hola", "namaste", "what's up", "wassup"],

  // Farewells
  farewell: ["bye", "goodbye", "see you", "later", "take care", "cya", "gtg", "gotta go", "leaving", "exit"],

  // Thanks
  thanks: ["thanks", "thank you", "thx", "ty", "appreciate", "grateful", "helpful", "great help", "awesome"],

  // What can you do
  capabilities: ["what can you do", "help me", "what do you know", "what can i ask", "how can you help", "capabilities", "what are you"],

  // About/Introduction
  about: ["about", "who", "tell me", "yourself", "harshwardhan", "harsh", "introduce", "introduction", "what do you do", "describe", "overview", "summary", "bio", "background"],
  identity: ["name", "your name", "what is your name", "who am i talking to"],

  // Skills
  skills: ["skills", "technologies", "tech stack", "stack", "programming", "languages", "know", "expertise", "proficient", "capable", "abilities", "competencies", "tools", "frameworks"],
  frontend: ["frontend", "front-end", "front end", "react", "html", "css", "tailwind", "vite", "ui", "ux", "user interface"],
  backend: ["backend", "back-end", "back end", "node", "express", "server", "api", "apis", "server side"],
  database: ["database", "db", "mongodb", "sql", "mysql", "nosql", "data storage"],
  ai: ["ai", "machine learning", "ml", "artificial intelligence", "scikit", "sklearn", "pandas", "numpy", "nlp", "python", "data science"],
  payments: ["payment", "razorpay", "gateway", "stripe"],

  // Projects
  projects: ["projects", "work", "portfolio", "built", "created", "developed", "apps", "applications", "showcase", "examples", "what have you built", "show me"],
  mane_bazar: ["mane bazar", "mane", "bazar", "grocery", "ecommerce", "e-commerce", "blinkit", "zepto"],
  finance_advisor: ["finance", "financial", "advisor", "budget", "spending", "money", "ml project", "ai advisor"],
  jewellery: ["jewellery", "jewelry", "jewel", "shop", "inventory", "billing", "rbac"],

  // Experience & Education
  experience: ["experience", "years", "background", "career", "journey", "history", "timeline", "story", "how long", "worked"],
  education: ["education", "study", "studying", "college", "degree", "university", "btech", "b.tech", "adcet", "academic", "school"],
  internship: ["internship", "intern", "prepgrad", "power bi", "data analysis"],
  achievements: ["achievements", "accomplishments", "awards", "recognition", "milestones", "ieee", "paper", "tpc", "leader"],

  // Contact & Hire
  contact: ["contact", "email", "phone", "reach", "get in touch", "connect", "message", "call"],
  hire: ["hire", "hiring", "job", "opportunity", "freelance", "contract", "available", "open to", "work with", "collaborate", "project", "engagement", "work together"],

  // Location & Availability
  location: ["location", "where", "based", "live", "from", "city", "country", "india", "thane", "maharashtra", "timezone"],
  availability: ["availability", "available", "free", "capacity", "timeline", "when", "schedule", "busy"],

  // Social
  social: ["github", "linkedin", "instagram", "social", "links", "follow", "connect", "profile"],

  // Services & FAQ
  services: ["services", "offer", "offerings", "what can you do", "build", "help", "develop"],
  pricing: ["pricing", "price", "cost", "rate", "rates", "charge", "fee", "budget", "how much", "hourly", "quote"],
  process: ["process", "how do you work", "workflow", "methodology", "approach", "stages", "steps"],
  faq: ["faq", "frequently asked", "questions", "common questions"],
  favorite: ["favorite", "preferred", "love", "enjoy", "best"],
};

// Suggestion chains for contextual follow-up questions
export const SUGGESTION_CHAINS: Record<string, string[]> = {
  greeting: [
    "Tell me about yourself",
    "What projects have you built?",
    "What are your skills?",
    "How can I contact you?",
  ],
  about: [
    "What are your skills?",
    "Show me your projects",
    "What's your experience?",
    "How can I hire you?",
  ],
  identity: [
    "Tell me about Harshwardhan",
    "What are your skills?",
    "Show me your projects",
    "How can I contact you?",
  ],
  skills: [
    "Show me your projects",
    "What AI/ML skills do you have?",
    "What's your backend experience?",
    "How can I hire you?",
  ],
  frontend: [
    "What backend skills do you have?",
    "Show me your projects",
    "What's your AI/ML experience?",
    "How can I contact you?",
  ],
  backend: [
    "What frontend skills do you have?",
    "What database skills do you have?",
    "Show me your projects",
    "How can I hire you?",
  ],
  database: [
    "What backend skills do you have?",
    "Show me your projects",
    "How can I contact you?",
    "What's your experience?",
  ],
  ai: [
    "Tell me about the Finance AI Advisor",
    "What MERN projects have you built?",
    "What are your Python skills?",
    "How can I hire you?",
  ],
  projects: [
    "Tell me about Mane Bazar",
    "Tell me about the Finance AI Advisor",
    "Tell me about the Jewellery system",
    "How can I contact you?",
  ],
  mane_bazar: [
    "Tell me about the Finance AI Advisor",
    "What other projects have you built?",
    "What skills did you use?",
    "How can I contact you?",
  ],
  finance_advisor: [
    "Tell me about Mane Bazar",
    "What Python skills do you have?",
    "What other projects have you built?",
    "How can I hire you?",
  ],
  jewellery: [
    "Tell me about Mane Bazar",
    "What other projects have you built?",
    "What are your MERN skills?",
    "How can I contact you?",
  ],
  experience: [
    "What projects have you built?",
    "What are your skills?",
    "Tell me about your education",
    "How can I hire you?",
  ],
  education: [
    "What projects have you built?",
    "What are your skills?",
    "Tell me about your internship",
    "What are your achievements?",
  ],
  internship: [
    "What projects have you built?",
    "Tell me about your education",
    "What are your achievements?",
    "How can I contact you?",
  ],
  achievements: [
    "Tell me about your education",
    "What projects have you built?",
    "What are your skills?",
    "How can I hire you?",
  ],
  contact: [
    "What projects have you built?",
    "What are your skills?",
    "Tell me about yourself",
    "What services do you offer?",
  ],
  hire: [
    "What projects have you built?",
    "What are your skills?",
    "How can I contact you?",
    "What services do you offer?",
  ],
  location: [
    "How can I contact you?",
    "Are you available for remote work?",
    "What are your skills?",
    "Show me your projects",
  ],
  availability: [
    "How can I contact you?",
    "What services do you offer?",
    "What projects have you built?",
    "What are your skills?",
  ],
  social: [
    "How can I contact you?",
    "What projects have you built?",
    "Tell me about yourself",
    "What are your skills?",
  ],
  services: [
    "How can I hire you?",
    "What projects have you built?",
    "What are your skills?",
    "How can I contact you?",
  ],
  pricing: [
    "How can I hire you?",
    "What services do you offer?",
    "How can I contact you?",
    "What projects have you built?",
  ],
  fun: [
    "Tell me about your projects",
    "What are your skills?",
    "Tell me about yourself",
    "How can I contact you?",
  ],
  default: [
    "Tell me about yourself",
    "What are your skills?",
    "Show me your projects",
    "How can I contact you?",
  ],
  unknown: [
    "Tell me about yourself",
    "What are your skills?",
    "Show me your projects",
    "How can I contact you?",
  ],
};
