# SeeFirst Deployment Guide

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Set up Supabase
# 1. Create a Supabase project at supabase.com
# 2. Copy your project URL and anon key
# 3. Create .env.local with:
#    NEXT_PUBLIC_SUPABASE_URL=<your-url>
#    NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>

# Run database schema
# 1. Go to Supabase dashboard > SQL Editor
# 2. Copy contents of database.sql
# 3. Paste and run in SQL Editor

# Run dev server
npm run dev
# Visit http://localhost:3000
```

## Deploy to Vercel

### 1. Create GitHub Repository (if needed)

```bash
# Create repo on GitHub: github.com/new
# Add remote:
git remote add origin https://github.com/YOUR_USERNAME/seefirst.git
git push -u origin main
```

### 2. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# - NEXT_PUBLIC_SUPABASE_URL
# - NEXT_PUBLIC_SUPABASE_ANON_KEY
# - (others as needed for payment/messaging)
```

### 3. Set Supabase for Production

```bash
# Supabase dashboard > Settings > Project Settings > API
# Copy Production URL and Anon Key
# Update Vercel environment variables with production credentials
```

## Project Structure

```
seefirst/
├── app/
│   ├── page.tsx              # Home page (hero + 5-beat story)
│   ├── layout.tsx            # Root layout + header
│   ├── globals.css           # Tailwind + global styles
│   ├── api/
│   │   └── orders/           # Order management API
│   ├── buyers/
│   │   └── order/            # Buyer order tracker (Moment 3)
│   ├── sellers/
│   │   └── request/          # Seller request landing (Moment 1)
│   └── agent/
│       └── checklist/        # Agent checklist (7 steps)
├── public/
│   ├── seefirst-*.svg        # Logo, icons, tracker, badge
│   └── (images when photographed)
├── docs/
│   ├── ASSET_MANIFEST.md     # All 44 assets
│   ├── PHOTOGRAPHY_BRIEF.md  # Shot list for photographer
│   └── ...
├── database.sql              # Supabase schema (run in SQL Editor)
├── .env.example              # Environment template
├── tailwind.config.js        # Design tokens
├── next.config.js
├── tsconfig.json
└── package.json
```

## Testing Flows (MVP)

### 1. Buyer Flow
- Visit `http://localhost:3000`
- Click "I'm buying"
- (Form not yet built; shows on `/buyers/order`)
- See order tracker with seal confirmation

### 2. Seller Flow
- Visit `/sellers/request`
- See "Moment 1": buyer info, item, price
- Click "I accept" → flows to verification
- Shows seller decision path

### 3. Agent Flow
- Visit `/agent/checklist`
- See 7-step guided checklist
- Each step unlocks next
- Shows "Earned ₵20" on completion

## What's Not Yet Built

These require Supabase connection + user setup:

- [ ] Full buyer request form (`/start`)
- [ ] Payment integration (Paystack)
- [ ] Live Supabase queries (API routes use mocks)
- [ ] WhatsApp messaging integration
- [ ] Video call integration
- [ ] Admin dashboard (`/admin`)
- [ ] Public seller record page (`/r/[handle]`)
- [ ] User authentication flows

## Next Steps

1. **Connect to Supabase**
   - Run `database.sql` in Supabase SQL Editor
   - Update `.env.local` with credentials
   - Test API routes query real data

2. **Commission Photography**
   - Send `docs/PHOTOGRAPHY_BRIEF.md` to photographer
   - Use shots to replace placeholder images
   - Update hero + timeline images on home page

3. **Set Up Integrations**
   - Paystack: get test keys, add to env
   - WhatsApp: set up business account
   - Video call: choose Twilio or Agora

4. **Build Missing Pages**
   - Buyer request form
   - Seller verification flow
   - Admin dashboard
   - Seller record page

## Deployment Checklist

Before going live:

- [ ] Supabase project created + schema running
- [ ] Vercel project linked to GitHub
- [ ] Environment variables set in Vercel
- [ ] All integrations configured (payment, messaging, video)
- [ ] Real photography shots in place
- [ ] Legal review (terms, privacy, recording consent)
- [ ] Payment provider approval (e.g., Paystack live keys)
- [ ] WhatsApp Business template approval
- [ ] Testing on real mobile device (360px width)
- [ ] Performance check (Lighthouse &gt;90)

## Database Access

During test phase, access Supabase dashboard to:
- View orders in real-time
- Manually transition orders (if API broken)
- Seed test data
- Check RLS policies working

```sql
-- Check orders
SELECT id, state, price_ghs FROM orders ORDER BY created_at DESC;

-- Check disputes
SELECT id, reason_code FROM disputes;

-- Add test user
INSERT INTO users (phone, name, role)
VALUES ('+233501234567', 'Test Agent', 'agent');
```

## Support

- Schema questions: see `/database.sql` comments
- API questions: see `/app/api/orders/route.ts`
- Design tokens: see `/tailwind.config.js`
- Photography: see `/docs/PHOTOGRAPHY_BRIEF.md`
- Architecture: see `/docs/PROMPT_2_COMPLETE.md` (Prompt 2 output)