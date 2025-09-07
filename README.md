# Roy Davidi - Fintech & AI Systems Integration Portfolio

A professional portfolio website showcasing expertise in financial technology, algorithmic trading systems, and AI integration. Built with Next.js 15, TypeScript, and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

- **Modern Design**: Luxurious black and gold fintech aesthetics
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with Next.js 15 App Router
- **SEO Ready**: Comprehensive meta tags and OpenGraph support
- **Accessible**: WCAG compliant with proper semantic HTML
- **Type Safe**: Full TypeScript implementation
- **Production Ready**: Optimized for deployment with proper error handling

### 🎨 Sections

- **Hero Section**: Professional introduction with animated elements
- **About & Skills**: Technical expertise and background
- **Education & Vision**: Academic background and professional philosophy
- **Portfolio**: Showcase of projects and achievements
- **Contact**: Professional contact form and information

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 15.3.5 (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion 12+ with custom transitions
- **Icons**: Lucide React for consistent iconography

### UI Components & Libraries
- **Component Library**: shadcn/ui with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: Sonner for user feedback
- **Responsive Design**: Custom breakpoints and utilities

### Development Tools
- **Package Manager**: npm with lock file for consistency
- **Code Quality**: ESLint with Next.js configuration
- **Build Tool**: Next.js built-in compiler with SWC
- **Development**: Hot reload with Turbopack (optional)

## 📋 Prerequisites

- **Node.js**: Version 18.17 or higher
- **npm**: Version 9+ (comes with Node.js)
- **Git**: For version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd roy-davidi-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the environment variables as needed
nano .env.local
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🏗 Project Structure

```
roy-davidi-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles with design system
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── hero-section.tsx  # Hero section component
│   │   ├── about-skills-section.tsx
│   │   ├── education-vision-section.tsx
│   │   ├── portfolio-section.tsx
│   │   └── contact-section.tsx
│   ├── lib/                  # Utility functions and configurations
│   ├── hooks/                # Custom React hooks
│   └── visual-edits/         # Development-only visual editing tools
├── public/                   # Static assets
├── .env.example             # Environment variables template
├── next.config.ts          # Next.js configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## 🎨 Design System

The portfolio uses a custom design system with:

- **Colors**: Black background (#000000) with gold accents (#FFD700)
- **Typography**: Playfair Display (headings) and Roboto (body text)
- **Spacing**: Consistent spacing scale with Tailwind utilities
- **Components**: Custom design tokens defined in `globals.css`

### Color Palette

```css
--color-background: #000000    /* Pure black background */
--color-foreground: #FFFFFF    /* White text */
--color-primary: #FFD700       /* Gold accent */
--color-secondary: #212121     /* Dark gray */
--color-muted: #1A1A1A         /* Subtle background */
--color-border: #404040        /* Border color */
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**: Ensure your code is in a GitHub repository

2. **Connect to Vercel**:
   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel
   
   # Deploy from command line
   vercel --prod
   ```

3. **Or use Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

4. **Environment Variables**: Set up environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add production values from `.env.example`

### Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Node Version**: 18 or higher

### Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Deploy to Digital Ocean App Platform

1. Create a new app from GitHub repository
2. Set build command: `npm run build`
3. Set run command: `npm start`
4. Configure environment variables

### Self-Hosted Deployment

```bash
# Build the application
npm run build

# Start production server
npm start

# Or use PM2 for production
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run dev:turbo    # Start with Turbopack (experimental)

# Production
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint for code quality
```

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and proper alt text
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Visible focus indicators

## 🔧 Configuration

### Environment Variables

Key environment variables for production:

```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_TELEMETRY_DISABLED=1
GENERATE_SOURCEMAP=false
```

### Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Font Optimization**: Google Fonts with `font-display: swap`
- **Bundle Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered pages for better performance
- **Compression**: Gzip compression enabled by default

### SEO Configuration

- **Meta Tags**: Comprehensive meta tags in `layout.tsx`
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD for better search visibility
- **Sitemap**: Auto-generated sitemap for search engines

## 🔒 Security

- **Content Security Policy**: Configured in `next.config.ts`
- **HTTPS Only**: Enforce HTTPS in production
- **Environment Variables**: Sensitive data kept server-side
- **Dependencies**: Regular security updates

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement`
3. Commit changes: `git commit -am 'Add improvement'`
4. Push to branch: `git push origin feature/improvement`
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Strict mode enabled with proper typing
- **ESLint**: Follow Next.js recommended rules
- **Naming**: Use PascalCase for components, camelCase for functions
- **Imports**: Absolute imports using `@/` alias

### Component Guidelines

- **Single Responsibility**: Each component has one clear purpose
- **Prop Interfaces**: Define TypeScript interfaces for all props
- **Export Pattern**: Use named exports for components
- **File Structure**: Keep components in appropriate directories

### Performance Best Practices

- **React Server Components**: Use server components by default
- **Client Components**: Only use `"use client"` when necessary
- **Image Optimization**: Always use Next.js Image component
- **Bundle Analysis**: Regular bundle size monitoring

## 🔄 Updates and Maintenance

### Dependency Updates

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update Next.js specifically
npm install next@latest react@latest react-dom@latest
```

### Security Updates

```bash
# Audit dependencies
npm audit

# Fix vulnerabilities automatically
npm audit fix
```

## 📊 Performance Monitoring

- **Core Web Vitals**: Monitored through Vercel Analytics
- **Bundle Size**: Tracked in build output
- **Lighthouse**: Regular performance audits
- **Real User Monitoring**: Optional integration with monitoring services

## 📄 License

This project is proprietary and belongs to Roy Davidi. All rights reserved.

## 📞 Contact

**Roy Davidi**
- Portfolio: [Your Domain](https://your-domain.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your-email@domain.com

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**

*This portfolio showcases expertise in fintech, algorithmic trading, and AI systems integration. Every aspect of the codebase demonstrates professional-grade development practices and modern web technologies.*