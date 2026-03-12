# TechInTech - Technology News Platform

A modern, fast technology news website built with React, TypeScript, and Tailwind CSS.

## Features

- **Homepage**: Hero section, trending articles, newsletter signup, recommended posts
- **Article Page**: Full article with continuous scroll, reading progress bar, sticky sidebar
- **Category Page**: Grid layout with latest news
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Performance**: Optimized images, lazy loading, code splitting
- **SEO**: Proper meta tags, semantic HTML, structured data ready

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ykayiwa/techintechfront.git
cd techintechfront
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Custom Server

The `dist/` folder contains static files that can be served by any web server:

- Nginx
- Apache
- Cloudflare Pages
- Netlify
- AWS S3 + CloudFront

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── pages/            # Page components (Article, Category)
├── sections/         # Page sections (Header, Hero, Footer, etc.)
├── App.tsx           # Main app component
└── index.tsx         # Entry point

public/
├── assets/           # Static assets
│   ├── images/       # Image files
│   └── icons/        # SVG icons
└── index.html        # HTML template
```

## Customization

### Colors

The primary brand color is lime green (`#d4f931`). Update in `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: "#d4f931",
    dark: "#b8d92a",
  },
}
```

### Content

Article content is currently in `src/pages/ArticlePage.tsx` (demo data).

For production, integrate with a headless CMS like:
- Sanity
- Strapi
- Contentful
- WordPress REST API

### Images

Place images in `public/assets/images/` and reference them with:
```tsx
<img src="/assets/images/articles/my-image.jpg" />
```

## SEO Optimization

- Update meta tags in `index.html`
- Add Open Graph tags for social sharing
- Implement structured data (JSON-LD)
- Create sitemap.xml
- Configure robots.txt

## Performance Checklist

- [ ] Optimize images (WebP format)
- [ ] Enable lazy loading
- [ ] Add service worker for offline support
- [ ] Configure CDN for assets
- [ ] Enable gzip/brotli compression
- [ ] Monitor Core Web Vitals

## License

MIT License - feel free to use this for your own projects.

## Support

For questions or issues, please open a GitHub issue.
