# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the splash/landing page for Madhouse Wallet - a security-first digital wallet optimized for cross-border payments and remittances. The site is built with Next.js 14 (Pages Router) and TypeScript, with a mixed JS/JSX codebase for components and layouts.

## Development Commands

```bash
# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter (ESLint - currently configured to ignore during builds)
npm run lint
```

## Architecture

### Pages Router Structure

- Uses Next.js Pages Router (not App Router)
- Main entry: `src/pages/_app.tsx` wraps app with Redux Provider, ThemeProvider, ToastContainer, and Layout
- Custom `src/pages/_document.tsx` for HTML document structure
- Main landing page: `src/pages/landing-page/index.tsx` composes multiple section components

### Layout System

The app has a dual-layout system managed by `src/Layout/index.jsx`:

- **MainLayout** (`src/Layout/MainLayout/index.jsx`): For public pages with Header and Footer
- **AuthLayout** (`src/Layout/AuthLayout/index.jsx`): For authentication pages

Layouts are selected based on component properties:
- `Component.authRoute = true` → uses AuthLayout
- Otherwise → uses MainLayout

### State Management

Redux Toolkit with a structured store:
- Store configuration: `src/lib/redux/store.js`
- Root reducer: `src/lib/redux/rootReducer.js`
- Slices in: `src/lib/redux/slices/`
- Redux Provider wrapper: `src/lib/providers.jsx`
- Middleware configuration: `src/lib/redux/middleware.js`

### Styling Architecture

Mixed styling approach:
- **Styled Components**: Used for page-specific and component-specific styles (`.jsx` files with "Styled" suffix)
- **Tailwind CSS**: Utility classes via `tailwind.config.ts`, PostCSS
- **Global CSS**: `src/styles/globals.css` and `src/Assets/styles/globals.css`
- **Third-party**: Bootstrap, DaisyUI, Material-UI
- **Font**: Outfit font family from Google Fonts (configured in Layout)

### Component Structure

- Landing page sections: `src/pages/landing-page/` (Herosec, SolutionSec, CardSecstion, FeatureSec, NewFeature, JoinUs, PartnerSec, VideoSec1, VideoSec2)
- Common components: `src/components/common/`
- Header: `src/components/Header/index.tsx`
- Footer: `src/components/Footer/index.jsx`
- Modals: `src/components/Modals/`
- Loader: `src/components/loader/`

## TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Allows JavaScript files alongside TypeScript

## Security Configuration

The `next.config.mjs` enforces security headers on all routes:
- X-Frame-Options: DENY (clickjacking protection)
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy: frame-ancestors 'none'
- X-Content-Type-Options: nosniff
- Strict-Transport-Security: HSTS with preload
- Permissions-Policy: Restricts camera, microphone, geolocation

Do not remove or weaken these headers.

## Image Handling

- Remote images allowed from: `https://media.madhousewallet.com/**`
- SVG files imported as React components via `@svgr/webpack`
- To use SVG as URL: import with `?url` suffix (e.g., `import icon from './icon.svg?url'`)

## Webpack Configuration

Custom webpack config in `next.config.mjs`:
- SVG handling via SVGR (converts SVGs to React components)
- Node.js module fallbacks disabled for browser (`net`, `tls`, `fs` set to false)

## Docker Build

Multi-stage Dockerfile builds both main Next.js app and a `tbtc` React project in `/app/tbtc`:
1. Builds `tbtc` project first
2. Then builds main Next.js app
3. Serves on port 3000

If the `tbtc` directory doesn't exist, the Docker build will fail - this may be a legacy configuration.

## Brand Assets

Official brand assets in `src/Assets/Brand/`:
- **Primary logo**: `logo.png` (raster lockup - DO NOT modify, recolor, or stretch)
- Minimum logo width: 180px
- Clear space: 25% of logo height on all sides
- Brand colors: `#0a0915` (background), `#252038` (button surface), `#E2682B` (accent)

Deprecated SVG logos should not be used. Request vector versions from brand@madhousewallet.com if needed.

## Key Context

- Project is licensed under AGPL-v3.0
- Security issues: Report via GitHub Security Advisory
- Product focus: Cross-border payments, remittances, local cashout options
- Target audience: Individuals receiving remittances, small businesses, crypto beginners
- Main CTA: "Create Wallet" → app.madhousewallet.com/welcome
- Docs: madhouse-wallet.gitbook.io/docs

## Linting Notes

- ESLint configured but builds ignore lint errors (`eslint.ignoreDuringBuilds: true`)
- TypeScript unused vars rule disabled
- If fixing lint issues, be cautious about changing this behavior without discussing with team
