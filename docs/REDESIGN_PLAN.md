
# StudioLoop Landing Page Redesign Plan

## Overview

Complete redesign of the StudioLoop landing page inspired by [aboardhr.com](https://www.aboardhr.com), focusing on visual impact through app screenshots, benefit-driven messaging, and a modern Rose Pink color palette. This redesign prioritizes showing the product through images to grab user attention immediately.

---

## Design Philosophy (Inspired by aboardhr.com)

### Key Principles

1. **Show, Don't Just Tell**: Prominent app screenshots throughout the page
2. **Benefit-Focused Headlines**: Emotional, benefit-driven copy over feature lists
3. **Visual Hierarchy**: Large hero image, clear CTAs, generous white space
4. **Modern Aesthetic**: Clean, minimal design with bold accents
5. **Trust Through Transparency**: Show the actual product interface

### Visual Inspiration from aboardhr.com

- **Large hero with app screenshot** in rounded container with subtle shadow/gradient border
- **Emoji integration** for personality and visual markers (temporary - to be replaced with HugeIcons SVGs)
- **Product screenshots** integrated naturally throughout sections
- **Simple, clean navigation** with prominent CTA button
- **Generous spacing** between sections for breathing room
- **Centered layouts** for most content sections

---

## Color System - Rose Pink Palette

### Primary Colors

```css
/* Rose Pink Shades (Primary Brand) */
--pink-50: #fff1f2;    /* Lightest - backgrounds */
--pink-100: #ffe4e6;   /* Light - hover states */
--pink-200: #fecdd3;   /* Soft accents */
--pink-300: #fda4af;   /* Medium light */
--pink-400: #fb7185;   /* PRIMARY BRAND COLOR - Rose Pink */
--pink-500: #f43f5e;   /* Darker pink */
--pink-600: #e11d48;   /* Dark pink */
--pink-700: #be123c;   /* Very dark */
--pink-800: #9f1239;   /* Almost red */
```

### Neutral Colors

```css
/* Grays - Based on Tailwind neutral palette */
--neutral-50: #fafafa;   /* Background */
--neutral-100: #f5f5f5;  /* Light background */
--neutral-200: #e5e5e5;  /* Border */
--neutral-300: #d4d4d4;  /* Light text */
--neutral-400: #a3a3a3;  /* Muted text */
--neutral-500: #737373;  /* Secondary text */
--neutral-600: #525252;  /* Body text */
--neutral-700: #404040;  /* Dark text */
--neutral-800: #262626;  /* Darker */
--neutral-900: #171717;  /* Darkest - headlines */
```

### Semantic Colors

```css
--success: #10b981;   /* Green - Emerald 500 */
--warning: #f59e0b;   /* Amber 500 */
--error: #ef4444;     /* Red 500 */
```

### Color Usage Guidelines

- **Primary Pink (#fb7185)**: CTAs, highlights, important UI elements in screenshots
- **Pink-50/100**: Section backgrounds, subtle accents
- **Neutral-900**: Headlines, primary text
- **Neutral-600**: Body text
- **White**: Main background, card backgrounds

---

## Typography

### Font Stack (Keep Existing)

- **Headings**: Poppins (600 SemiBold, 700 Bold)
- **Body**: Inter (400 Regular, 500 Medium, 600 SemiBold)

### Updated Type Scale

```css
/* Headlines - Larger for impact */
h1: 3.5rem (56px) desktop / 2.25rem (36px) mobile - Poppins Bold
h2: 2.75rem (44px) desktop / 2rem (32px) mobile - Poppins SemiBold
h3: 2rem (32px) desktop / 1.5rem (24px) mobile - Poppins Medium
h4: 1.5rem (24px) - Poppins Medium

/* Body Text */
body-large: 1.25rem (20px) - Inter Regular
body: 1.125rem (18px) - Inter Regular
body-small: 1rem (16px) - Inter Regular
small: 0.875rem (14px) - Inter Regular
```

---

## Image Specifications & AI Generation Prompts

### Required App Screenshots

All screenshots should be created with:
- **Design System**: shadcn/ui components
- **Color Palette**: Rose Pink (#fb7185) accents with neutral grays
- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **Style**: Clean, minimal, professional
- **Format**: PNG with transparency where appropriate

### 1. Instructor Dashboard Screenshot

**Filename**: `instructor-dashboard.png`  
**Dimensions**: 1200x800px  
**Location**: `/src/assets/app/`

**AI Generation Prompt**:
```
Create a modern web application dashboard screenshot for a fitness studio management app. 

Layout & Structure:
- Clean sidebar navigation on the left with icons
- Main content area showing an instructor dashboard
- Top header with user profile and notifications
- Cards layout with metrics and recent activity

Design Specifications:
- Use shadcn/ui components (modern, minimal aesthetic)
- Primary color: Rose Pink (#fb7185) for buttons, icons, and accents
- Background: White and very light gray (#fafafa)
- Typography: Inter font family
- Card components with subtle shadows and rounded corners (border-radius: 12px)
- Icons in rose pink color

Content to Display:
- "Welcome back, Sarah!" greeting at top
- 3-4 stat cards showing: "Classes This Week: 12", "Average Rating: 9.2/10", "Response Rate: 87%", "Active Members: 234"
- "Recent Classes" section with list of 3-4 classes showing class name, time, attendance count
- "Quick Actions" section with buttons: "Create Follow-up", "View Schedule", "Member Feedback"
- Navigation items: Dashboard, Classes, Members, Messages, Settings

UI Elements:
- Use rounded buttons with rose pink background
- Clean table/list layouts with hover states
- Small avatars/profile pictures where appropriate
- Rose pink accent color for important data points
- Minimal, professional aesthetic matching shadcn/ui design system

Technical Requirements:
- 1200x800px resolution
- PNG format
- Realistic but clean UI (not cluttered)
- Professional color scheme: rose pink (#fb7185), grays, and white
- Modern, approachable aesthetic suitable for fitness industry
```

### 2. Client Feedback Page Screenshot

**Filename**: `client-feedback.png`  
**Dimensions**: 1200x800px  
**Location**: `/src/assets/app/`

**AI Generation Prompt**:
```
Create a modern web application client feedback interface screenshot for a fitness studio app.

Layout & Structure:
- Header with "Member Feedback" title
- Filter/sort controls at top (dropdown menus, date range)
- List/grid of feedback cards from multiple members
- Each card shows member name, class attended, rating, and comment

Design Specifications:
- Use shadcn/ui components with modern, card-based layout
- Primary color: Rose Pink (#fb7185) for ratings, icons, positive elements
- Background: White cards on light gray background (#fafafa)
- Typography: Inter font family, clean hierarchy
- Star rating system using rose pink stars
- Rounded corners (border-radius: 12px) on all cards

Content to Display:
- 4-5 feedback cards visible
- Each card contains:
  * Member avatar (circular, small)
  * Member name (e.g., "Emma Rodriguez", "Michael Chen")
  * Class name (e.g., "Power Yoga - Monday 6pm")
  * 10-star rating displayed as pink stars (show ratings like 9/10, 8/10)
  * Short feedback comment (1-2 sentences, positive)
  * Timestamp (e.g., "2 hours ago", "Yesterday")
- Overall stats at top: "Average Rating: 9.1/10", "Total Responses: 89 this week"
- Filter buttons: "All Classes", "This Week", "High Ratings", "Needs Follow-up"

UI Elements:
- Rose pink filled stars for ratings
- Gray outline stars for unfilled ratings
- Clean typography hierarchy
- Subtle hover effects on cards
- "Reply" button in rose pink on each card
- Tag/badge system for class types in soft gray
- Responsive card grid layout

Technical Requirements:
- 1200x800px resolution
- PNG format
- Professional, clean interface
- Rose pink (#fb7185) as primary accent color
- Show real-looking (but fake) member feedback data
- Emphasize the 10-star rating system clearly
```

### 3. Follow-Up Email Page Screenshot

**Filename**: `email-followup.png`  
**Dimensions**: 1200x800px  
**Location**: `/src/assets/app/`

**AI Generation Prompt**:
```
Create a modern email composition/follow-up interface screenshot for a fitness studio management app.

Layout & Structure:
- Split layout: left sidebar with email templates, main area showing email composer
- Email composer in center with WYSIWYG editor
- Preview pane or list of recipients at right/bottom
- Header with "Post-Class Follow-Up" title

Design Specifications:
- Use shadcn/ui components with clean, email-focused layout
- Primary color: Rose Pink (#fb7185) for buttons, send button, and accents
- Background: White composer area on light gray background (#fafafa)
- Typography: Inter font family for UI, readable serif/sans for email preview
- Modern email editor interface with formatting toolbar

Content to Display:
- Email composition area showing:
  * "To:" field showing "23 members from Power Yoga - Tuesday 6pm"
  * Subject line: "Thanks for an amazing class today! 🎉"
  * Email body with formatted text:
    "Hi [First Name],
    
    Thank you for joining today's Power Yoga class! Your energy and dedication made it special.
    
    I'd love to hear your feedback:
    [Rate Your Class: 1-10 stars shown as buttons]
    
    See you next time!
    
    Sarah Martinez
    Lead Yoga Instructor"
  
- Left sidebar with "Templates" section:
  * "Post-Class Thank You" (selected/active)
  * "New Member Welcome"
  * "Class Reminder"
  * "Special Event Invitation"
  * "+ Create New Template"

- Bottom stats/info:
  * "Scheduled to send: After class ends"
  * "Estimated delivery: In 15 minutes"
  * Small icons showing: delivery rate, open rate stats

- Top toolbar:
  * Send button (prominent, rose pink)
  * Save as Draft
  * Preview button
  * Insert merge tags dropdown (showing options like [First Name], [Class Name])

UI Elements:
- Rose pink "Send" button (prominent, right side)
- Clean WYSIWYG editor with formatting toolbar (bold, italic, lists, links)
- Template selector on left with rose pink accent for active template
- Merge tag chips in light pink/gray (e.g., "[First Name]")
- Preview of rating buttons in email (10 numbered buttons in rose pink)
- Professional email preview aesthetic
- Modern, uncluttered interface

Technical Requirements:
- 1200x800px resolution
- PNG format
- Show realistic email composition interface
- Rose pink (#fb7185) as primary accent color
- Clean, professional aesthetic matching shadcn/ui
- Show the automation/scheduled send aspect clearly
- Display member personalization features (merge tags)
```

### Hero Image Treatment

All app screenshots in the hero and throughout the page should be displayed with:
- **Rounded corners**: `border-radius: 1rem` (16px)
- **Subtle shadow**: `box-shadow: 0 20px 60px rgba(251, 113, 133, 0.15)`
- **Gradient border** (optional): Subtle pink gradient overlay on edges
- **Responsive sizing**: Scale down proportionally on mobile
- **Background treatment**: Float over subtle gradient or solid background

---

## Page Structure - Simplified

### New Section Order

```
1. Navigation (Sticky)
2. Hero Section (with large app screenshot)
3. Features Section (with app images & emojis)
4. How It Works Section (with app screenshots)
5. Comparison Table (with pink accents)
6. Waitlist Form Section
7. Footer
```

**Removed Sections**:
- ❌ Problem Statement
- ❌ Pricing Section

---

## Component Architecture - Detailed Redesigns

### 1. Navigation Component

**File**: `src/components/Navigation.astro`

**Design Changes**:
- Clean, minimal navbar with white background
- Rose pink accent for hover states
- Prominent "Join Waitlist" button in rose pink
- Smooth scroll behavior to form section
- Sticky positioning with subtle shadow on scroll

**Layout**:
```
┌─────────────────────────────────────────────┐
│ [StudioLoop Logo]          [Join Waitlist]  │
│                              (Pink Button)   │
└─────────────────────────────────────────────┘
```

**Visual Specs**:
- Height: 80px
- Background: White with border-bottom on scroll
- Logo: Text-based or icon (left-aligned)
- CTA Button: Rose pink (#fb7185) with rounded corners (24px)
- Typography: Inter Medium, 16px

---

### 2. Hero Section (Inspired by aboardhr.com)

**File**: `src/components/Hero.astro`

**Design Concept**:
Large, benefit-focused headline with massive app screenshot below, similar to aboardhr's hero treatment. The screenshot should be the dominant visual element.

**Layout**:
```
┌─────────────────────────────────────────────┐
│                                             │
│         [Large Benefit-Driven Headline]      │
│           "Your Members Deserve             │
│           Better Follow-Ups"                │
│                                             │
│              [Supporting Copy]              │
│                                             │
│         [Primary CTA]  [Secondary CTA]      │
│                                             │
│    ┌─────────────────────────────────┐     │
│    │                                 │     │
│    │   [Instructor Dashboard         │     │
│    │    Screenshot]                  │     │
│    │   Large, rounded, with subtle   │     │
│    │   pink gradient border          │     │
│    │                                 │     │
│    └─────────────────────────────────┘     │
│                                             │
└─────────────────────────────────────────────┘
```

**Content**:
- **Headline**: "Your Members Deserve Better Follow-Ups" 
  - Font: Poppins Bold, 56px (desktop) / 36px (mobile)
  - Color: Neutral-900
  - Max-width: 900px
  - Line height: 1.1

- **Subheadline**: "Strengthen connections with automated, personalized post-class emails. Built for boutique fitness studios. Just $29/month."
  - Font: Inter Regular, 20px (desktop) / 18px (mobile)
  - Color: Neutral-600
  - Max-width: 700px
  - Line height: 1.6

- **Primary CTA**: "Join the Waitlist"
  - Background: Rose pink (#fb7185)
  - Padding: 16px 32px
  - Border-radius: 12px
  - Font: Inter SemiBold, 18px
  - Hover: Darker pink (#f43f5e)

- **Secondary CTA**: "See How It Works" (scroll to How It Works)
  - Background: Transparent
  - Border: 2px solid neutral-200
  - Same sizing as primary
  - Color: Neutral-700

**App Screenshot Treatment**:
- Image: Instructor Dashboard (instructor-dashboard.png)
- Max-width: 1100px
- Border-radius: 16px
- Shadow: `0 25px 70px rgba(251, 113, 133, 0.2)`
- Optional: Add subtle gradient border using `::before` pseudo-element
- Margin-top: 60px from CTAs
- Responsive: Full width on mobile with 20px horizontal padding

**Background**:
- Clean white background
- Optional: Very subtle radial gradient from pink-50 to white
- Padding: 120px top, 100px bottom (desktop)

---

### 3. Features Section (Redesigned with Images)

**File**: `src/components/Features.astro`

**Design Concept**:
Instead of simple icon-text cards, create a more visual section with app screenshot snippets and emoji placeholders. Alternate layout: text-left with image-right, then flip.

**Layout Pattern** (Alternating):
```
┌─────────────────────────────────────────────┐
│  Feature 1: Text Left / Image Right          │
│  ┌─────────┐              ┌────────────┐    │
│  │ 📧 Emoji │              │   [App     │    │
│  │ Title   │              │   Screen   │    │
│  │ Descrip │              │   Snippet] │    │
│  └─────────┘              └────────────┘    │
├─────────────────────────────────────────────┤
│  Feature 2: Image Left / Text Right          │
│  ┌────────────┐              ┌─────────┐    │
│  │   [App     │              │ 🎯 Emoji │    │
│  │   Screen   │              │ Title   │    │
│  │   Snippet] │              │ Descrip │    │
│  └────────────┘              └─────────┘    │
└─────────────────────────────────────────────┘
```

**Features** (6 total - showcase in 3 rows):

**Row 1**: Automated Post-Class Emails
- Emoji: 📧 (placeholder for mail icon)
- Title: "Automated Post-Class Emails"
- Description: "Send personalized follow-ups automatically after every class. Your members feel valued without any manual work."
- Image: Email follow-up screenshot (cropped to show email editor)
- Layout: Text left, image right

**Row 2**: 10-Star Member Feedback
- Emoji: ⭐ (placeholder for star icon)
- Title: "Detailed Member Feedback"
- Description: "Collect meaningful insights with our 10-star rating system. Understand what your members love and where to improve."
- Image: Client feedback page screenshot (cropped to show ratings)
- Layout: Image left, text right

**Row 3**: Seamless MindBody Integration
- Emoji: 🔗 (placeholder for integration icon)
- Title: "One-Click MindBody Sync"
- Description: "Connect your MindBody account in minutes. We automatically sync classes, instructors, and member lists."
- Image: Dashboard showing integration status (could use dashboard screenshot)
- Layout: Text left, image right

**Additional Features** (Smaller cards grid below):

Display 3 more features in simple cards with emojis:
- 💰 Affordable Pricing - "Just $29/month. No contracts, no surprises."
- ⚡ 5-Minute Setup - "Get started faster than brewing coffee."
- 📊 Simple Analytics - "Track engagement without complexity."

**Visual Specs**:
- Section Background: White
- Alternating row backgrounds: White / Pink-50
- Section padding: 120px vertical
- Max-width: 1200px
- Image treatment: Rounded (12px), shadow, responsive
- Emoji size: 48px
- Title: Poppins SemiBold, 32px, Neutral-900
- Description: Inter Regular, 18px, Neutral-600, max-width 500px
- Spacing between rows: 80px

---

### 4. How It Works Section (Redesigned with Visual Flow)

**File**: `src/components/HowItWorks.astro`

**Design Concept**:
Clean, numbered steps with app screenshots showing the actual process. Make it feel like a journey through the product.

**Layout**:
```
┌─────────────────────────────────────────────┐
│          "How StudioLoop Works"              │
│         [Section Headline + Description]     │
│                                             │
│   ┌──[1]────────────────────────┐          │
│   │ 📝 Connect Your Studio       │          │
│   │ Description text here        │          │
│   │ [Small screenshot/diagram]   │          │
│   └──────────────────────────────┘          │
│              ↓                               │
│   ┌──[2]────────────────────────┐          │
│   │ 🎨 Customize Your Messages   │          │
│   │ Description text here        │          │
│   │ [Email template screenshot]  │          │
│   └──────────────────────────────┘          │
│              ↓                               │
│   ┌──[3]────────────────────────┐          │
│   │ 🚀 Go Live Instantly         │          │
│   │ Description text here        │          │
│   │ [Dashboard screenshot]       │          │
│   └──────────────────────────────┘          │
│                                             │
│         [CTA Button]                        │
└─────────────────────────────────────────────┘
```

**Steps** (Simplified to 3 main steps):

**Step 1**: Connect Your Studio
- Emoji: 🔗 (placeholder for connect icon)
- Title: "Connect Your Studio in Minutes"
- Description: "Link your MindBody account with one click. We'll automatically import your classes, instructors, and member list. No data entry needed."
- Visual: Illustration/screenshot showing connection process or dashboard with "Connected" status

**Step 2**: Customize Your Messages
- Emoji: ✏️ (placeholder for edit icon)
- Title: "Create Your Perfect Follow-Up"
- Description: "Choose from templates or write your own. Add your studio's personality. Insert member names and class details automatically."
- Visual: Email editor screenshot (email-followup.png cropped)

**Step 3**: Engage Your Members
- Emoji: 💌 (placeholder for engagement icon)
- Title: "Watch Engagement Grow"
- Description: "Emails send automatically after each class. Members rate their experience with one click. You track it all in your dashboard."
- Visual: Dashboard or feedback page screenshot

**Visual Specs**:
- Section Background: Light gradient (white to pink-50)
- Section padding: 120px vertical
- Max-width: 900px for content
- Step cards: White background, rounded (16px), shadow
- Step numbers: Large circle, rose pink background, white text, 60px diameter
- Connector arrows: Subtle gray with pink accent
- Emoji size: 40px
- Title: Poppins SemiBold, 28px
- Description: Inter Regular, 18px, line-height 1.7
- Spacing between steps: 60px
- CTA at bottom: "Start Your Free Setup" (rose pink button)

---

### 5. Comparison Table (Refreshed with Pink Accents)

**File**: `src/components/ComparisonTable.astro`

**Design Changes**:
- Rose pink highlights instead of generic green/blue
- More visual emphasis on StudioLoop column
- Cleaner, more modern table design
- Better mobile experience

**Key Updates**:
- StudioLoop column background: Subtle pink-50
- Checkmarks: Rose pink color (#fb7185) instead of generic green
- Price row: Large, bold "$29" in rose pink
- "Recommended" badge: Rose pink with white text
- Table borders: Very light neutral-200
- Hover effects: Subtle pink tint on rows

**Content** (Keep existing comparison points):
- Monthly Price: $169-325 vs **$29**
- Post-class emails: ✓ vs ✓ (pink)
- MindBody integration: ✓ vs ✓ (pink)
- Annual contract: Required vs **No contract** (pink checkmark)
- Setup time: Complex vs **5 minutes**
- Built for boutique studios: Enterprise focus vs ✓ (pink)

**Visual Specs**:
- Section background: White
- Table background: White with pink-50 for StudioLoop column
- Border-radius on table: 16px
- Section padding: 100px vertical
- Max-width: 1100px
- Mobile: Card-based comparison (stacked)

---

### 6. Waitlist Form (Enhanced)

**File**: `src/components/WaitlistForm.astro`

**Design Improvements**:
- Larger, more prominent form
- Rose pink submit button
- Better visual hierarchy
- Success message with pink accent
- Clear value proposition above form

**Layout**:
```
┌─────────────────────────────────────────────┐
│     "Ready to Transform Member Engagement?"  │
│              [Benefit Statement]             │
│                                             │
│   ┌─────────────────────────────────┐       │
│   │  [Email Input]                  │       │
│   │  [Studio Name Input]            │       │
│   │  [Role Dropdown]                │       │
│   │                                 │       │
│   │  [Join Waitlist Button]         │       │
│   │     (Rose Pink, Prominent)      │       │
│   │                                 │       │
│   │  "Join 200+ studios waiting..." │       │
│   └─────────────────────────────────┘       │
└─────────────────────────────────────────────┘
```

**Visual Specs**:
- Section background: Pink-50
- Form container: White, rounded (20px), shadow
- Max-width: 600px
- Section padding: 120px vertical
- Input fields: Large (56px height), rounded (12px)
- Submit button: Rose pink, full-width, 60px height
- Typography: Inter Medium for labels, 16px
- Social proof text: Small, neutral-500, below button

---

### 7. Footer (Simplified)

**File**: `src/components/Footer.astro`

**Design**:
- Minimal, clean footer
- Rose pink accent for links on hover
- Simple layout with essential links only

**Content**:
- Logo/Brand name
- Contact email
- Links: Privacy, Terms
- Copyright notice
- Built with love for boutique studios

---

## TailwindCSS Configuration Updates

### Update `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Rose Pink Palette
        pink: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',  // Primary Brand Color
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pink': '0 25px 70px rgba(251, 113, 133, 0.2)',
        'pink-lg': '0 30px 80px rgba(251, 113, 133, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-pink': 'linear-gradient(135deg, #fff1f2 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
```

---

## Implementation Approach

### Phase 1: Foundation & Assets (Day 1)

**Tasks**:
1. ✅ Update TailwindCSS configuration with Rose Pink palette
2. ✅ Create placeholder images with correct dimensions
3. ✅ Add image generation prompts to code comments
4. ✅ Update global styles with new color variables

**Files to Update**:
- `tailwind.config.mjs`
- `src/styles/global.css`
- Create `/src/assets/app/` directory
- Add placeholder images (can use solid color placeholders initially)

### Phase 2: Core Components (Day 2)

**Tasks**:
1. ✅ Redesign Hero section with new headline and image
2. ✅ Update Navigation with cleaner design
3. ✅ Redesign Features section with alternating layout
4. ✅ Update Waitlist Form with enhanced design

**Files to Create/Update**:
- `src/components/Hero.astro` (major redesign)
- `src/components/Navigation.astro` (cleanup)
- `src/components/Features.astro` (complete redesign)
- `src/components/WaitlistForm.astro` (enhance)

### Phase 3: Secondary Components (Day 3)

**Tasks**:
1. ✅ Redesign How It Works with visual flow
2. ✅ Update Comparison Table with pink accents
3. ✅ Simplify Footer
4. ✅ Update page structure (remove Problem Statement & Pricing)

**Files to Update**:
- `src/components/HowItWorks.astro` (redesign)
- `src/components/ComparisonTable.astro` (refresh)
- `src/components/Footer.astro` (simplify)
- `src/pages/index.astro` (remove sections)
- Delete `src/components/ProblemStatement.astro`
- Delete `src/components/Pricing.astro`

### Phase 4: Polish & Testing (Day 4)

**Tasks**:
1. ✅ Responsive design testing
2. ✅ Cross-browser testing
3. ✅ Performance optimization
4. ✅ Accessibility checks
5. ✅ Copy refinement
6. ✅ Final review against aboardhr.com inspiration

---

## Responsive Design Strategy

### Breakpoints (Keep Tailwind defaults)

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (xl)

### Mobile-Specific Considerations

**Hero Section**:
- Stack headline and image vertically
- Reduce headline size: 36px → 28px
- Single column CTAs
- Smaller app screenshot with maintained aspect ratio

**Features Section**:
- All text-image rows become stacked (image on top, text below)
- Maintain order for reading flow
- Full-width images with horizontal padding
- Smaller emoji size: 36px

**How It Works**:
- Vertical-only layout
- Smaller step numbers: 48px diameter
- Remove connector arrows or simplify
- Stack content in logical order

**Comparison Table**:
- Convert to card-based layout
- Show FitGrid vs StudioLoop in alternating cards
- Maintain pink highlights for StudioLoop
- Easier to scan vertically

**Navigation**:
- Simplified header with logo and button only
- Button might become icon on very small screens
- Sticky behavior maintained

---

## Emoji Placeholder Strategy

### Current Emoji Placeholders

All emojis are **temporary** and will be replaced with HugeIcons SVGs later.

**Features**:
- 📧 → HugeIcons: Mail/Email icon
- ⭐ → HugeIcons: Star icon
- 🔗 → HugeIcons: Link/Integration icon
- 💰 → HugeIcons: Dollar/Money icon
- ⚡ → HugeIcons: Lightning/Speed icon
- 📊 → HugeIcons: Chart/Analytics icon

**How It Works**:
- 🔗 → HugeIcons: Plugin/Connect icon
- ✏️ → HugeIcons: Edit/Pen icon
- 💌 → HugeIcons: Envelope/Heart icon

### Icon Styling (When Replaced)

```css
.feature-icon {
  width: 48px;
  height: 48px;
  color: #fb7185; /* Rose pink */
  stroke-width: 1.5;
}
```

---

## Copy & Messaging Guidelines

### Hero Section

**Primary Headline**: "Your Members Deserve Better Follow-Ups"
- **Why this works**: Benefit-focused, emotional, emphasizes member value
- **Alternative options**: 
  - "Build Stronger Connections After Every Class"
  - "Turn Every Class Into a Lasting Relationship"

**Subheadline**: "Strengthen connections with automated, personalized post-class emails. Built for boutique fitness studios. Just $29/month."
- **Tone**: Professional but approachable
- **Focus**: Benefit + target audience + price point

### Features Section

**Headline**: "Everything You Need to Connect with Members"
- **Subheadline**: "Simple, powerful features that help you build stronger relationships with your fitness community."

**Feature Copy Principles**:
- Start with benefit, not feature
- Use active voice
- Keep under 2 sentences per feature
- Emphasize ease of use and time savings

### How It Works Section

**Headline**: "Get Started in Minutes"
- **Subheadline**: "Three simple steps to transform your member engagement."

**Step Copy**:
- Use action verbs
- Emphasize speed and simplicity
- Include member benefit in each step

### Comparison Section

**Headline**: "The Smart Choice for Boutique Studios"
- **Subheadline**: "All the features you need, none of the complexity you don't."

---

## Success Metrics

### Visual Impact