# StudioLoop Landing Page Architecture

## Overview

A modern, conversion-focused single-page landing site designed to validate interest in StudioLoop - an affordable FitGrid alternative for boutique fitness studios.

---

## Design System

### Color Palette

**Primary Colors:**

- **Brand Primary**: `#6366F1` (Indigo) - Trust, technology, professionalism
- **Brand Secondary**: `#EC4899` (Pink) - Energy, fitness, vitality
- **Accent**: `#10B981` (Emerald) - Success, growth, positive outcomes

**Neutral Colors:**

- **Background**: `#FFFFFF` (White)
- **Surface**: `#F9FAFB` (Gray 50)
- **Text Primary**: `#111827` (Gray 900)
- **Text Secondary**: `#6B7280` (Gray 500)
- **Border**: `#E5E7EB` (Gray 200)

**Semantic Colors:**

- **Success**: `#10B981` (Emerald)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)

### Typography

**Font Pairing: Inter + Poppins**
- **Headings**: [Poppins](https://fonts.google.com/specimen/Poppins) - Modern, geometric, confident
  - Weights: 600 (SemiBold) for H1/H2, 500 (Medium) for H3
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) - Highly readable, professional
  - Weights: 400 (Regular) for body, 500 (Medium) for emphasis

**Why This Pairing?**
- Poppins provides bold, attention-grabbing headlines
- Inter offers exceptional readability for longer content
- Both are optimized for screen display
- Professional yet approachable (perfect for fitness tech)

**Scale**:
  - H1: 3.5rem (56px) desktop, 2.5rem (40px) mobile - Poppins SemiBold
  - H2: 2.5rem (40px) desktop, 2rem (32px) mobile - Poppins SemiBold
  - H3: 1.875rem (30px) - Poppins Medium
  - Body: 1.125rem (18px) - Inter Regular
  - Small: 0.875rem (14px) - Inter Regular

**Implementation**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
```

**CSS Configuration**:
```css
:root {
  --font-heading: 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

### Spacing System

Following Tailwind's 4px base scale:

- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)

---

## Page Structure

### Layout Flow

```
┌─────────────────────────────────┐
│  Navigation (sticky)            │
├─────────────────────────────────┤
│  Hero Section                   │
│  - Headline                     │
│  - Subheadline                  │
│  - Waitlist CTA                 │
│  - Social proof hint            │
├─────────────────────────────────┤
│  Problem Statement              │
│  - Cost comparison visual       │
├─────────────────────────────────┤
│  Features Section               │
│  - For Instructors              │
│  - For Studio Owners            │
│  - For Members                  │
├─────────────────────────────────┤
│  How It Works                   │
│  - 5-step process               │
├─────────────────────────────────┤
│  Comparison Table               │
│  - StudioLoop vs FitGrid        │
├─────────────────────────────────┤
│  Pricing Section                │
│  - Single clear price           │
│  - What's included              │
├─────────────────────────────────┤
│  Waitlist Form (Prominent)      │
│  - Email, Studio Name, Role     │
├─────────────────────────────────┤
│  Footer                         │
│  - Links, contact info          │
└─────────────────────────────────┘
```

---

## Component Architecture

### 1. Navigation Component

**File**: `src/components/Navigation.astro`

- Sticky header with logo
- Simple, minimal design
- "Join Waitlist" CTA button (scrolls to form)
- Mobile-responsive hamburger (if needed)

### 2. Hero Section

**File**: `src/components/Hero.astro`

- **Headline**: "The Affordable FitGrid Alternative for Boutique Studios"
- **Subheadline**: "Connect with your members through automated post-class follow-ups. Just $29/month. No annual contract."
- **Primary CTA**: Large "Join the Waitlist" button
- **Visual Element**: Simple illustration or gradient background

### 3. Problem Statement Section

**File**: `src/components/ProblemStatement.astro`

- Visual comparison: "$169+/month" vs "$29/month"
- Brief pain points:
  - "FitGrid is too expensive for small studios"
  - "Annual contracts lock you in"
  - "Too many features you don't need"
  - "Improved UX over FitGrid"

### 4. Features Section

**File**: `src/components/Features.astro`

**Sub-components**:

- `FeatureCard.astro` (reusable card component)

**Three Column Layout**:

**Column 1: For Instructors**

- Automatic post-class emails
- Customizable templates
- Simple CMS management
- Personal connection with members

**Column 2: For Studio Owners**

- 10-star rating system
- Instructor dashboard
- Response rate tracking
- Member engagement insights

**Column 3: For Members**

- Personalized follow-up emails
- One-click rating (no login)
- Direct feedback to instructors
- Better studio experience

### 5. How It Works Section

**File**: `src/components/HowItWorks.astro`

**5-Step Process**:

1. Connect MindBody account (5 minutes)
2. Invite instructors to platform
3. Instructors customize email templates
4. Members automatically receive post-class emails and review-class emails
5. Studio owner views dashboard & analytics

**Visual**: Numbered steps with icons and brief descriptions

### 6. Comparison Table

**File**: `src/components/ComparisonTable.astro`

**Table Structure**:

```
| Feature              | FitGrid      | StudioLoop  |
|---------------------|--------------|-------------|
| Price               | $169-325/mo  | $29/mo      |
| Setup Time          | 2-3 weeks    | 5 minutes   |
| Contract            | Annual       | Monthly     |
| Post-class emails   | ✓            | ✓           |
| Instructor ratings  | ✓            | ✓           |
| Complex analytics   | ✓            | ✗           |
| Best For            | Large multi  | Small-med   |
```

**Design**:

- Highlight StudioLoop column with subtle background color
- Use checkmarks and x-marks (not just text)
- Mobile: Stack into card format

### 7. Pricing Section

**File**: `src/components/Pricing.astro`

**Content**:

- Large "$29/month" headline
- "No annual contract • Cancel anytime"
- What's included:
  - Unlimited instructors
  - Unlimited classes
  - Unlimited members
  - MindBody integration
  - Email customization
  - Analytics dashboard
  - Email support

**Visual**: Single pricing card, clean and prominent

### 8. Waitlist Form

**File**: `src/components/WaitlistForm.astro`

**Form Fields**:

1. Email (required, validated)
2. Studio Name (required)
3. Studio Website (optional)
3. Role (dropdown: Studio Owner / Instructor / Other)
4. Optional: Studio size (1-5, 6-10, 11-20, 21+ instructors)

**Form Behavior**:

- Client-side validation
- Clear success message after submission
- Loading state during submission
- Error handling

**Submission Options** (to discuss with user):

- Static form → Email service, formspark.io
- API endpoint (need backend)
- Google Sheets integration
- Email mailto fallback

### 9. Footer

**File**: `src/components/Footer.astro`

**Content**:

- Logo
- Brief tagline
- Contact email
- Links: Privacy Policy (TBD), Terms (TBD)
- Social media placeholders (optional)
- "Built for boutique fitness studios"

---

## Responsive Design Strategy

### Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Considerations

- Stack all multi-column layouts vertically
- Larger touch targets (min 44px)
- Simplified navigation
- Condensed comparison table (card-based)
- Form optimized for mobile keyboards

---

## Content Strategy

### Copywriting Principles

1. **Clear Value Proposition**: Lead with price savings
2. **Simple Language**: Avoid jargon, speak plainly
3. **Benefit-Focused**: What they get, not what we do
4. **Urgency/Scarcity**: Limited launch pricing, waitlist positioning

### Key Messages

- **Hero**: Affordable alternative, simple setup, no commitment
- **Features**: Focus on time savings and member engagement
- **Comparison**: Emphasize 80% cost savings
- **Pricing**: Transparent, simple, no hidden fees
- **CTA**: Join waitlist for early access pricing

---

## Technical Implementation

### File Structure

```
src/
├── components/
│   ├── Navigation.astro
│   ├── Hero.astro
│   ├── ProblemStatement.astro
│   ├── Features.astro
│   ├── FeatureCard.astro
│   ├── HowItWorks.astro
│   ├── ComparisonTable.astro
│   ├── Pricing.astro
│   ├── WaitlistForm.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro (update with proper meta tags)
├── pages/
│   └── index.astro (main landing page)
└── styles/
    └── global.css (already configured with Tailwind)
```

### Meta Tags & SEO

```html
<title>StudioLoop - Affordable FitGrid Alternative | $29/month</title>
<meta
  name="description"
  content="Connect with your fitness members through automated post-class follow-ups. Built for boutique studios using MindBody. Just $29/month, no contract."
/>
<meta
  property="og:title"
  content="StudioLoop - The Affordable FitGrid Alternative"
/>
<meta
  property="og:description"
  content="Automated post-class emails for fitness studios. 80% cheaper than FitGrid."
/>
<meta property="og:type" content="website" />
```

### Performance Optimization

- Lazy load images below the fold
- Inline critical CSS
- Minimize JavaScript (form validation only)
- Optimize font loading
- Compress images

---


## Development Phases

### Phase 1: Core Structure (Day 1)

- Set up component files
- Implement basic layout structure
- Configure color system in Tailwind
- Create navigation and footer

### Phase 2: Content Sections (Day 2)

- Build hero section
- Create features section
- Implement comparison table
- Add pricing section

### Phase 3: Interactivity (Day 3)

- Build waitlist form
- Add form validation
- Implement smooth scrolling
- Add micro-interactions

### Phase 4: Polish & Testing (Day 4)

- Responsive design refinement
- Cross-browser testing
- Performance optimization
- Copy refinement

---

## Success Metrics to Track

Once launched, track:

1. **Conversion Rate**: Visitors → Waitlist signups
2. **Bounce Rate**: Are people reading past hero?
3. **Section Engagement**: Which sections get most attention?
4. **Device Distribution**: Mobile vs Desktop traffic
5. **Time on Page**: How long are visitors engaging?

**Target**: 10-15% conversion rate for targeted traffic (Reddit, fitness forums)

---

## Next Steps

1. Review and approve this architecture plan
2. Confirm form submission strategy
3. Provide any brand assets (logo if exists)
4. Switch to Code mode to begin implementation
5. Deploy to Vercel for testing

---

## Project Details (Confirmed)

1. **Logo**: User will create custom logo
2. **Domain**: studioloop.vercel.app
3. **Analytics**: Vercel Analytics + Microsoft Clarity (both free) - see ANALYTICS_AND_TRACKING.md
4. **Form Service**: Formspark.io
5. **Launch Timeline**: 1 week from now
6. **Fonts**: Inter (body) + Poppins (headings)

## Pre-Launch Checklist

- [ ] Set up Vercel project
- [ ] Configure Formspark form
- [ ] Add Vercel Analytics
- [ ] Install Microsoft Clarity
- [ ] Test form submissions
- [ ] Create logo and favicon
- [ ] Write privacy policy (basic, for form collection)
- [ ] Test on mobile devices
- [ ] Check Core Web Vitals
- [ ] Prepare Reddit/forum posts

## Related Documentation

- **Analytics Setup**: See [ANALYTICS_AND_TRACKING.md](ANALYTICS_AND_TRACKING.md) for detailed analytics implementation
- **Page Flow**: See [PAGE_FLOW.md](PAGE_FLOW.md) for visual component hierarchy and user journey
