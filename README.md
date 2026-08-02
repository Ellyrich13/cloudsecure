# CloudSecure

A fictional cybersecurity SaaS marketing site, built as a self-directed frontend project to practice multi-page routing, product/pricing page design, and marketing UI patterns.

**Live site:** https://ellyrich13.github.io/cloudsecure/

## Overview

CloudSecure simulates a real enterprise SaaS product website — home page, feature breakdown, pricing tiers, company/team page, and contact form — demonstrating the kind of multi-page marketing site frontend developers commonly build for real products.

## Features

- Genuine multi-page routing (not a single scrolling page) via React Router
- Responsive navigation with mobile hamburger menu
- Hero section with stats and a rotating image slideshow
- Features page with icon-based cards
- Pricing page with a highlighted "most popular" tier
- About page with company mission and team section
- Contact form with live email delivery via Formspree
- Scroll-triggered and staggered fade-in animations throughout

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) — client-side routing
- [Vite](https://vitejs.dev/) — build tooling
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Lucide React](https://lucide.dev/) — icons
- [Formspree](https://formspree.io/) — contact form backend
- Deployed via [GitHub Pages](https://pages.github.com/)

## Project Structure
src/
├── components/ # Shared components (Navbar, Footer, FadeIn, Slideshow)
├── pages/ # Route-level pages (Home, Features, Pricing, About, Contact)
├── data/ # Typed content data (features, pricing, team, slides)
├── types/ # Shared TypeScript interfaces
├── App.tsx
└── main.tsx
## Getting Started

```bash
git clone https://github.com/Ellyrich13/cloudsecure.git
cd cloudsecure
npm install
npm run dev
```

## Deployment Notes

Deployed to GitHub Pages via the `gh-pages` package. Since GitHub Pages doesn't natively support client-side routing on page refresh, a `404.html` redirect workaround is included in `public/` to correctly restore deep links (e.g. `/cloudsecure/pricing`) on direct load.

```bash
npm run deploy
```

## Related Projects

This is one of three linked projects in a broader self-directed portfolio series:

- [Portfolio](https://ellyrich13.github.io/portfolio/) — personal portfolio site
- [IT Operations Dashboard](https://ellyrich13.github.io/it-ops-dashboard/) — enterprise IT ops admin dashboard

## Contact

- Email: elliothammond13@gmail.com
- LinkedIn: [linkedin.com/in/elliot-hammond](https://linkedin.com/in/elliot-hammond)