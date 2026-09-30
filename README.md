# SeeFirst Test Edition

Safe remote commerce. See it. Seal it. Trust it.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the homepage.

## Architecture

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + custom design system
- **Database**: Supabase (PostgreSQL)
- **Payment**: Paystack
- **Messaging**: WhatsApp Business API
- **Hosting**: Vercel

## Project Structure

```
app/
  ├── page.tsx          # Home page
  ├── layout.tsx        # Root layout
  ├── globals.css       # Global styles
  └── [other pages]
components/            # Reusable components
public/                # Static assets
tailwind.config.js     # Tailwind theme
```

## Design System

See `/tailwind.config.js` for:
- **Colours**: primary green (#2D7F5E), cream (#FBF8F3), accent amber (#C67C2A)
- **Typography**: Fraunces (serif), Inter (sans-serif)
- **Spacing**: Tailwind defaults with custom adjustments

## Development

```bash
# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Deployment

Deploy to Vercel:

```bash
# Create Vercel project
vercel

# Deploy
vercel --prod
```

## Test Plan

This is the SeeFirst 30-day test product. See concept document and build prompts for details.

---

Built with [Next.js](https://nextjs.org/) | Sep 30, 2026
