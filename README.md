# CloudSecure

A fictional cybersecurity SaaS marketing site, built as a self-directed frontend project to practice multi-page routing, product/pricing UI patterns, validated forms, and a sign-up conversion flow.

**Live site:** https://ellyrich13.github.io/cloudsecure/

## Overview

CloudSecure simulates a real enterprise SaaS product website — home page, feature breakdown, pricing tiers, company/team page, contact form, and a sign-up flow driven by pricing selection — demonstrating the kind of multi-page marketing site frontend developers commonly build for real products.

## Features

- Genuine multi-page routing (not a single scrolling page) via React Router
- Responsive navigation with mobile hamburger menu
- Hero section with stats and a rotating image slideshow
- Features page with icon-based cards
- Pricing page with a highlighted "most popular" tier, linking into a real sign-up flow
- **Sign-up flow** — client-side validated form (name, email, password), pre-populated with the selected plan, ending in a genuine success confirmation screen
- **Contact form** — client-side validated (name, valid email, minimum message length) before sending live via Formspree
- About page with company mission and team section
- Scroll-triggered and staggered fade-in animations throughout
- **Automated tests** — form validation logic covered with Vitest
- **CI pipeline** — lint, test, and build run automatically on every push via GitHub Actions

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Formspree](https://formspree.io/)
- Deployed via [GitHub Pages](https://pages.github.com/), CI via [GitHub Actions](https://github.com/features/actions)

## Project Structure
src/
├── components/ # Navbar, Footer, FadeIn, Slideshow
├── pages/ # Home, Features, Pricing, About, Contact, SignUp
├── data/ # Typed content data (features, pricing, team, slides)
├── types/ # Shared TypeScript interfaces
├── utils/ # Shared form validation logic
├── App.tsx
└── main.tsx
## Getting Started

```bash
git clone https://github.com/Ellyrich13/cloudsecure.git
cd cloudsecure
npm install
npm run dev
```

## Testing

```bash
npm run test
```

## Deployment Notes

Deployed to GitHub Pages via the `gh-pages` package. Since GitHub Pages doesn't natively support client-side routing on page refresh, a `404.html` redirect workaround is included in `public/` to correctly restore deep links on direct load.

```bash
npm run deploy
```

## Related Projects

- [Portfolio](https://ellyrich13.github.io/portfolio/)
- [IT Operations Dashboard](https://ellyrich13.github.io/it-ops-dashboard/)

## Contact

- Email: elliothammond13@gmail.com
- LinkedIn: [linkedin.com/in/elliot-hammond](https://linkedin.com/in/elliot-hammond)