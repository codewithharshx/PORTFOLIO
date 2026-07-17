# 🚀 Harshwardhan Ramdas Sathe - Portfolio

Modern, high-performance portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

**Live Site**: [https://harshwardhansathe.vercel.app](https://harshwardhansathe.vercel.app/)

---

## ✨ Features

- ⚡ **Next.js 16** with App Router and Turbopack
- 🎨 **Modern UI** with Tailwind CSS, Framer Motion, and GSAP animations
- 📱 **Fully Responsive** design for all devices
- 🎯 **SEO Optimized** with meta tags, sitemap, and structured data
- 📊 **Visitor Tracking** with Upstash Redis
- 📧 **Contact Form** with email notifications
- 🔥 **GitHub Contributions** heatmap integration
- 🤖 **AI Chatbot** with comprehensive portfolio knowledge base
- 🌐 **Custom Domain** support
- 🔒 **Type-Safe** with TypeScript
- ⚡ **Performance Optimized** (Lighthouse 90+ scores)

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React, React Icons

### Backend & APIs

- **Email**: Nodemailer (SMTP)
- **Database**: Upstash Redis (visitor tracking)
- **GitHub API**: Contributions data

### Deployment

- **Hosting**: Vercel
- **Domain**: harshwardhansathe.vercel.app
- **SSL**: Automatic (Let's Encrypt)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/codewithharshx/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:

   ```env
   GITHUB_TOKEN=your_github_token
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   SMTP_FROM=noreply@harshwardhansathe.vercel.app
   ADMIN_EMAIL=harshwardhansathe1@gmail.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Documentation

Complete documentation is available in the [`docs/`](./docs) folder:

### Quick Links

- 🚀 **[Vercel Deployment Guide](./docs/VERCEL-DEPLOYMENT-GUIDE.md)** - Deploy to production
- ✅ **[Production Checklist](./docs/PRODUCTION-CHECKLIST.md)** - Pre-deployment verification
- 🌐 **[Custom Domain Setup](./docs/CUSTOM-DOMAIN-SETUP.md)** - Configure your domain
- 📊 **[Redis Setup Guide](./docs/QUICK-REDIS-SETUP.md)** - Enable visitor tracking
- 🔍 **[SEO Implementation](./docs/SEO-IMPLEMENTATION.md)** - SEO optimization

---

## 📁 Project Structure

```text
portfolio/
├── docs/                      # Documentation files
├── public/                    # Static assets
│   ├── images/               # Images and graphics
│   ├── icons/                # Icons and logos
│   ├── robots.txt            # SEO robots file
│   └── sitemap.xml           # Static sitemap
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── sitemap.ts        # Dynamic sitemap
│   ├── components/           # React components
│   │   ├── sections/         # Page sections
│   │   ├── layout/           # Layout components
│   │   ├── ui/               # UI components
│   │   └── analytics/        # Analytics components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── styles/               # Global styles
│   └── types/                # TypeScript types
├── .env                      # Environment variables (local)
├── .env.example              # Environment variables template
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Add environment variables
4. Deploy!

### Environment Variables for Production

Required variables in Vercel:

```env
GITHUB_TOKEN
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
SMTP_FROM
ADMIN_EMAIL
NEXT_PUBLIC_SITE_URL
UPSTASH_REDIS_REST_URL (auto-added)
UPSTASH_REDIS_REST_TOKEN (auto-added)
```

---

## 📊 Portfolio Sections

- **Hero**: Animated introduction with fluid spotlight effect
- **About**: Profile, Bento grid, timeline, certifications, and expertise
- **Skills**: Tech stack with animated icon marquee
- **Work**: Project showcase with detail modals
- **GitHub**: Contributions heatmap
- **Contact**: Form with email notifications
- **AI Chatbot**: Intelligent portfolio assistant

---

## 🎨 Customization

### Update Personal Information

Edit `src/lib/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your@email.com',
  // ... other info
};
```

### Update Projects

Edit `src/components/sections/Work/work.data.ts`

### Update Skills

Edit `src/components/sections/Skills/skills.data.ts`

### Update Chatbot

Edit `src/lib/chatbot-data.ts`

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

### Harshwardhan Ramdas Sathe

- Website: [harshwardhansathe.vercel.app](https://harshwardhansathe.vercel.app)
- Email: [harshwardhansathe1@gmail.com](mailto:harshwardhansathe1@gmail.com)
- GitHub: [@codewithharshx](https://github.com/codewithharshx)
- LinkedIn: [Harshwardhan Sathe](https://www.linkedin.com/in/harshwardhan-sathe-774945332/)
- Instagram: [@harsh_r_s_11](https://www.instagram.com/harsh_r_s_11)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [Vercel](https://vercel.com) - Hosting platform
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Advanced animations
- [Upstash](https://upstash.com) - Redis database

---

*Built with ❤️ by [Harshwardhan Ramdas Sathe](https://github.com/codewithharshx)*
