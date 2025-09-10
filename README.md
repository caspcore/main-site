# Caspcore - AI-Powered MiCA Compliance Platform

A modern, responsive website for Caspcore, an AI-powered SaaS platform that helps crypto providers achieve MiCA compliance without the need for expensive legal teams.

## 🚀 Features

- **Modern Design**: Built with Next.js, TypeScript, and TailwindCSS
- **UI Components**: Using shadcn/ui for consistent, accessible components
- **Animations**: Smooth animations with Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with SEO best practices for better search engine visibility
- **GitHub Pages Ready**: Configured for easy deployment on GitHub Pages

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/main-site.git
cd main-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/main-site`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` directory
3. Deploy the `out` directory to GitHub Pages

## 📁 Project Structure

```
src/
├── app/
│   ├── demo/
│   │   └── page.tsx          # Demo request page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── about-section.tsx     # About section component
│   ├── cta-section.tsx       # Call-to-action section
│   ├── features-section.tsx  # Features section
│   ├── footer.tsx            # Footer component
│   ├── hero-section.tsx      # Hero section
│   └── navigation.tsx        # Navigation component
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Design System

The website uses a black, grey, and white color scheme:

- **Primary**: Black (#000000)
- **Secondary**: Dark Grey (#404040)
- **Accent**: Medium Grey (#666666)
- **Background**: White and light grey tones

## 📱 Pages

- **Homepage** (`/`): Landing page with hero, features, about, and CTA sections
- **Demo Request** (`/demo`): Contact form for requesting product demos

## 🔧 Customization

### Colors
Update the color scheme in `src/app/globals.css`:

```css
:root {
  --primary-color: #000000;
  --secondary-color: #404040;
  /* ... other colors */
}
```

### Content
Update the content in the respective component files in `src/components/`.

## 📈 SEO Features

- Meta tags for social media sharing
- Open Graph and Twitter Card support
- Semantic HTML structure
- Optimized images and loading
- Mobile-first responsive design

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Caspcore. All rights reserved.