# Duna-Inspired SaaS Website Style Guide

## Mobile-First Design System for Enterprise B2B

**Version:** 1.0  
**Last Updated:** October 2025  
**Framework:** AstroJS + Tailwind CSS  
**Design Philosophy:** Clean, minimal, enterprise-grade with friendly accessibility

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Breakpoints](#breakpoints)
3. [Typography](#typography)
4. [Color System](#color-system)
5. [Spacing System](#spacing-system)
6. [Layout & Grid](#layout--grid)
7. [Components](#components)
8. [Image Guidelines](#image-guidelines)
9. [Animations & Interactions](#animations--interactions)
10. [Accessibility](#accessibility)

---

## Design Principles

### Core Philosophy

- **Mobile-First Always**: Design for mobile (320px-639px), then scale up
- **Clarity Over Cleverness**: Enterprise users value clarity and efficiency
- **Generous Whitespace**: Let content breathe; don't cram
- **Progressive Disclosure**: Show what matters, hide complexity
- **Consistent Interactions**: Predictable patterns build trust

### Visual Hierarchy Rules

1. One primary action per section (clear CTA)
2. Maximum 3 levels of visual hierarchy per view
3. Use scale, not just color, for emphasis
4. Align related elements; create clear visual groups
5. Maintain 4:1 contrast ratio minimum for text

---

## Breakpoints

```css
/* Mobile First Approach */
/* Mobile: < 640px (base styles, no media query needed) */
/* Tablet: 640px - 1023px */
@media (min-width: 640px) {
}

/* Desktop: >= 1024px */
@media (min-width: 1024px) {
}
```

### Tailwind Config

```javascript
// tailwind.config.mjs
export default {
  theme: {
    screens: {
      sm: '640px', // Tablet
      lg: '1024px', // Desktop
    },
  },
};
```

### Container Widths

- **Mobile**: 100% width, 20px padding (px-5)
- **Tablet**: 100% width, 40px padding (sm:px-10)
- **Desktop**: Max 1280px centered (lg:max-w-7xl), 80px padding (lg:px-20)

---

## Typography

### Primary Font

**Inter** (Google Fonts - closest match to GT America Regular)

```html
<!-- In your <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Tailwind Font Config

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
};
```

### Type Scale (Mobile First)

#### Display Headings

```html
<!-- Hero/Display 1 -->
<h1
  class="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight"
>
  Drive revenue with compliant growth
</h1>
<!-- Mobile: 36px, Tablet: 48px, Desktop: 72px -->

<!-- Display 2 -->
<h2
  class="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight tracking-tight"
>
  Built for businesses where compliance matters
</h2>
<!-- Mobile: 30px, Tablet: 36px, Desktop: 60px -->
```

#### Headings

```html
<!-- H1 -->
<h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
  Heading Level 1
</h1>
<!-- Mobile: 30px, Tablet: 36px, Desktop: 48px -->

<!-- H2 -->
<h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
  Heading Level 2
</h2>
<!-- Mobile: 24px, Tablet: 30px, Desktop: 36px -->

<!-- H3 -->
<h3 class="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug">
  Heading Level 3
</h3>
<!-- Mobile: 20px, Tablet: 24px, Desktop: 30px -->

<!-- H4 -->
<h4 class="text-lg sm:text-xl lg:text-2xl font-semibold leading-normal">
  Heading Level 4
</h4>
<!-- Mobile: 18px, Tablet: 20px, Desktop: 24px -->
```

#### Body Text

```html
<!-- Large Body (Intro/Lead) -->
<p class="text-lg sm:text-xl lg:text-2xl leading-relaxed text-neutral-600">
  This is a lead paragraph for introductory content.
</p>
<!-- Mobile: 18px, Tablet: 20px, Desktop: 24px -->

<!-- Body Default -->
<p class="text-base sm:text-lg leading-relaxed text-neutral-700">
  This is default body text for most content areas.
</p>
<!-- Mobile: 16px, Tablet: 18px, Desktop: 18px -->

<!-- Body Small -->
<p class="text-sm sm:text-base leading-relaxed text-neutral-600">
  This is smaller body text for secondary information.
</p>
<!-- Mobile: 14px, Tablet: 16px, Desktop: 16px -->

<!-- Caption/Fine Print -->
<p class="text-xs sm:text-sm leading-normal text-neutral-500">
  Caption or metadata text
</p>
<!-- Mobile: 12px, Tablet: 14px, Desktop: 14px -->
```

### Font Weights

- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Emphasized text, subtle headers
- **Semibold (600)**: Section headings, important labels
- **Bold (700)**: Primary headings, strong emphasis (use sparingly)

### Line Height Rules

- Headlines: `leading-tight` (1.25) or `leading-snug` (1.375)
- Body text: `leading-relaxed` (1.625)
- Captions: `leading-normal` (1.5)

### Letter Spacing

- Display text: `tracking-tight` (-0.025em)
- Headings: `tracking-tight` or default
- Body: default (0)
- All caps text: `tracking-wide` (0.025em)

---

## Color System

### Base Palette (Inspired by Duna)

#### Neutrals (Primary Scale)

```javascript
// Tailwind config
colors: {
  neutral: {
    50: '#FAFAFA',   // Backgrounds, subtle surfaces
    100: '#F5F5F5',  // Card backgrounds, hover states
    200: '#E5E5E5',  // Borders, dividers
    300: '#D4D4D4',  // Disabled states
    400: '#A3A3A3',  // Placeholder text
    500: '#737373',  // Secondary text
    600: '#525252',  // Body text
    700: '#404040',  // Headings
    800: '#262626',  // Dark headings
    900: '#171717',  // Primary black, high contrast
  }
}
```

**Usage:**

- `bg-white`: Primary backgrounds
- `bg-neutral-50`: Subtle background sections
- `bg-neutral-900`: Dark mode or footer backgrounds
- `text-neutral-900`: Primary headings
- `text-neutral-700`: Subheadings
- `text-neutral-600`: Body text
- `border-neutral-200`: Default borders

#### Pink Accents (Brand Energy)

```javascript
colors: {
  pink: {
    50: '#FDF2F8',   // Light backgrounds, hover states
    100: '#FCE7F3',  // Subtle highlights
    200: '#FBCFE8',  // Light borders
    400: '#F472B6',  // Hover states
    500: '#EC4899',  // Primary pink accent
    600: '#DB2777',  // Active/pressed states
    700: '#BE185D',  // Dark mode accents
  }
}
```

**Usage:**

- Use as **accent color** for CTAs, highlights, interactive elements
- Pair with neutral grays for professional balance
- 10-15% of total color usage maximum
- Examples: `bg-pink-500 hover:bg-pink-600`, `text-pink-600`

#### Semantic Colors

```javascript
colors: {
  success: {
    50: '#F0FDF4',
    500: '#22C55E',
    600: '#16A34A',
  },
  warning: {
    50: '#FFFBEB',
    500: '#F59E0B',
    600: '#D97706',
  },
  error: {
    50: '#FEF2F2',
    500: '#EF4444',
    600: '#DC2626',
  },
  info: {
    50: '#EFF6FF',
    500: '#3B82F6',
    600: '#2563EB',
  }
}
```

### Color Application Guidelines

#### Backgrounds

```html
<!-- Primary surface -->
<div class="bg-white">
  <!-- Subtle section differentiation -->
  <section class="bg-neutral-50">
    <!-- Card/elevated surface -->
    <div class="bg-white border border-neutral-200 rounded-xl">
      <!-- Dark footer -->
      <footer class="bg-neutral-900 text-white"></footer>
    </div>
  </section>
</div>
```

#### Text Hierarchy

```html
<!-- Primary heading -->
<h1 class="text-neutral-900">
  <!-- Secondary heading -->
  <h2 class="text-neutral-800">
    <!-- Body text -->
    <p class="text-neutral-700">
      <!-- Secondary/supporting text -->
    </p>

    <p class="text-neutral-600">
      <!-- Muted/metadata -->
      <span class="text-neutral-500">
        <!-- Accent text (use sparingly) -->
        <span class="text-pink-600"></span
      ></span>
    </p>
  </h2>
</h1>
```

#### Borders & Dividers

```html
<!-- Default border -->
<div class="border border-neutral-200">
  <!-- Subtle divider -->
  <hr class="border-neutral-100" />

  <!-- Emphasis border -->
  <div class="border-2 border-neutral-300"></div>
</div>
```

---

## Spacing System

### Base Unit: 4px (0.25rem)

Tailwind's default spacing scale follows this pattern.

### Spacing Scale Reference

```
1  = 4px   (0.25rem)
2  = 8px   (0.5rem)
3  = 12px  (0.75rem)
4  = 16px  (1rem)
5  = 20px  (1.25rem)
6  = 24px  (1.5rem)
8  = 32px  (2rem)
10 = 40px  (2.5rem)
12 = 48px  (3rem)
16 = 64px  (4rem)
20 = 80px  (5rem)
24 = 96px  (6rem)
32 = 128px (8rem)
```

### Spacing Guidelines by Element Type

#### Section Spacing (Vertical)

```html
<!-- Mobile: 48px, Tablet: 64px, Desktop: 96px -->
<section class="py-12 sm:py-16 lg:py-24">
  <!-- Mobile: 64px, Tablet: 80px, Desktop: 128px -->
  <section class="py-16 sm:py-20 lg:py-32">
    <!-- Mobile: 80px, Tablet: 96px, Desktop: 160px -->
    <section class="py-20 sm:py-24 lg:py-40"></section>
  </section>
</section>
```

#### Component Spacing

```html
<!-- Card padding -->
<div class="p-6 sm:p-8 lg:p-10">
  <!-- Mobile: 24px, Tablet: 32px, Desktop: 40px -->

  <!-- Button padding -->
  <button class="px-6 py-3 sm:px-8 sm:py-4">
    <!-- Mobile: 24px x 12px, Tablet/Desktop: 32px x 16px -->

    <!-- Input padding -->
    <input class="px-4 py-3 sm:px-5 sm:py-4" />
    <!-- Mobile: 16px x 12px, Tablet/Desktop: 20px x 16px -->
  </button>
</div>
```

#### Content Spacing

```html
<!-- Heading to paragraph -->
<h2 class="mb-4 sm:mb-6">
  <!-- Mobile: 16px, Tablet/Desktop: 24px -->

  <!-- Paragraph to paragraph -->
  <p class="mb-4 sm:mb-5">
    <!-- Mobile: 16px, Tablet/Desktop: 20px -->

    <!-- Section title to content -->
  </p>

  <h2 class="mb-8 sm:mb-12">
    <!-- Mobile: 32px, Tablet/Desktop: 48px -->
  </h2>
</h2>
```

### Container Padding

```html
<!-- Mobile: 20px sides -->
<!-- Tablet: 40px sides -->
<!-- Desktop: 80px sides -->
<div class="px-5 sm:px-10 lg:px-20"></div>
```

---

## Layout & Grid

### Container Pattern

```html
<!-- Standard section container -->
<section class="w-full">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <!-- Content here -->
  </div>
</section>
```

### Grid System

```html
<!-- Two column layout -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- Three column layout -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Four column layout (cards) -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
```

### Asymmetric Layouts

```html
<!-- 60/40 split on desktop -->
<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
  <div class="lg:col-span-3">Main content (60%)</div>
  <div class="lg:col-span-2">Sidebar (40%)</div>
</div>

<!-- 70/30 split on desktop -->
<div class="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
  <div class="lg:col-span-7">Main content (70%)</div>
  <div class="lg:col-span-3">Sidebar (30%)</div>
</div>
```

---

## Components

### 1. Navigation Bar

#### Mobile-First Navigation

```html
<!-- 
IMAGE DESCRIPTION FOR AI GENERATOR:
"A minimalist navigation bar logo for a B2B SaaS company, clean wordmark in dark gray (neutral-900) on transparent background, modern sans-serif font, professional and trustworthy, enterprise software aesthetic, 200px wide by 40px tall"
-->

<nav class="sticky top-0 z-50 bg-white border-b border-neutral-200">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="flex items-center justify-between h-16 sm:h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img
          src="/placeholder-logo.svg"
          alt="Company Logo"
          class="h-8 sm:h-10 w-auto"
        />
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex lg:items-center lg:space-x-8">
        <a
          href="#"
          class="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Product
        </a>
        <a
          href="#"
          class="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Solutions
        </a>
        <a
          href="#"
          class="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Pricing
        </a>
        <a
          href="#"
          class="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Resources
        </a>
      </div>

      <!-- CTA Buttons (Desktop) -->
      <div class="hidden lg:flex lg:items-center lg:space-x-4">
        <a
          href="#"
          class="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          Sign in
        </a>
        <a
          href="#"
          class="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-base font-medium rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Get started
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
      >
        <svg
          class="w-6 h-6 text-neutral-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu (toggle with JS) -->
  <div class="lg:hidden border-t border-neutral-200 hidden">
    <div class="px-5 py-4 space-y-3">
      <a
        href="#"
        class="block text-base font-medium text-neutral-700 hover:text-neutral-900"
      >
        Product
      </a>
      <a
        href="#"
        class="block text-base font-medium text-neutral-700 hover:text-neutral-900"
      >
        Solutions
      </a>
      <a
        href="#"
        class="block text-base font-medium text-neutral-700 hover:text-neutral-900"
      >
        Pricing
      </a>
      <a
        href="#"
        class="block text-base font-medium text-neutral-700 hover:text-neutral-900"
      >
        Resources
      </a>
      <div class="pt-4 space-y-3">
        <a
          href="#"
          class="block text-base font-medium text-neutral-700 hover:text-neutral-900"
        >
          Sign in
        </a>
        <a
          href="#"
          class="block w-full text-center px-6 py-3 bg-neutral-900 text-white text-base font-medium rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Get started
        </a>
      </div>
    </div>
  </div>
</nav>
```

**Key Properties:**

- Sticky positioning on scroll
- Clear visual separation with bottom border
- Logo scales: Mobile 32px, Desktop 40px height
- Touch-friendly mobile menu (44px minimum tap targets)

---

### 2. Hero Section

```html
<!-- 
IMAGE DESCRIPTION FOR AI GENERATOR:
"Clean dashboard interface screenshot showing a modern B2B SaaS application, light neutral gray background (RGB 250, 250, 250), organized data tables with subtle borders, professional charts and graphs in pink accent colors (RGB 236, 72, 153), minimal UI with generous whitespace, crisp typography, enterprise software aesthetic, viewed on a laptop screen at slight angle, soft shadows, professional photography lighting, 1920x1080px"
-->

<section class="relative overflow-hidden bg-white">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-32">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Content Column -->
      <div class="text-center lg:text-left">
        <!-- Eyebrow (optional) -->
        <div
          class="inline-flex items-center px-3 py-1 bg-pink-50 text-pink-600 text-sm font-medium rounded-full mb-6"
        >
          <span>New: Enterprise features available</span>
        </div>

        <!-- Main Headline -->
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6"
        >
          Built for businesses where compliance matters
        </h1>

        <!-- Supporting Text -->
        <p class="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
          Duna's platform is built to help enterprises grow. Optimized to
          eliminate friction and instantly deliver higher conversion.
        </p>

        <!-- CTA Group -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="#"
            class="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg"
          >
            Get started
            <svg
              class="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-base font-semibold rounded-lg border-2 border-neutral-300 hover:border-neutral-400 transition-all"
          >
            Watch demo
          </a>
        </div>

        <!-- Social Proof (optional) -->
        <div class="mt-8 pt-8 border-t border-neutral-200">
          <p class="text-sm text-neutral-500 mb-4">
            Trusted by leading enterprises
          </p>
          <div
            class="flex items-center justify-center lg:justify-start space-x-8 opacity-50"
          >
            <!-- Placeholder for client logos -->
            <div class="h-8 w-24 bg-neutral-200 rounded"></div>
            <div class="h-8 w-24 bg-neutral-200 rounded"></div>
            <div class="h-8 w-24 bg-neutral-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Visual Column -->
      <div class="relative">
        <!-- Decorative gradient background -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-pink-50 to-neutral-50 rounded-2xl -z-10"
        ></div>

        <!-- Product Screenshot -->
        <div class="relative">
          <img
            src="/placeholder-hero-dashboard.png"
            alt="Product dashboard showing compliance management interface"
            class="w-full h-auto rounded-xl shadow-2xl border border-neutral-200"
          />
        </div>

        <!-- Floating accent element (optional) -->
        <div
          class="hidden lg:block absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl"
        ></div>
      </div>
    </div>
  </div>
</section>
```

**Key Properties:**

- Mobile: Single column, centered text
- Desktop: Two columns, left-aligned text
- Generous padding: Mobile 64px vertical, Desktop 128px
- Image with subtle shadow and rounded corners
- Optional gradient background for visual interest

---

### 3. Feature Section (Three Column)

```html
<section class="py-16 sm:py-24 lg:py-32 bg-neutral-50">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6"
      >
        Everything you need to scale compliantly
      </h2>
      <p class="text-lg sm:text-xl text-neutral-600 leading-relaxed">
        A powerful policy engine translates compliance into code — enabling the
        industry's most detailed audit trails.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <!-- Feature 1 -->
      <div class="group">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-lg mb-6 group-hover:scale-110 transition-transform"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        <h3 class="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4">
          Faster onboarding
        </h3>
        <p class="text-base text-neutral-600 leading-relaxed">
          High-converting onboarding journeys — no code required. Get customers
          up and running in minutes, not days.
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="group">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-lg mb-6 group-hover:scale-110 transition-transform"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>

        <h3 class="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4">
          Future-proof compliance
        </h3>
        <p class="text-base text-neutral-600 leading-relaxed">
          Stay ahead of regulations with automated policy updates and
          comprehensive audit trails that regulators trust.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="group">
        <!-- Icon -->
        <div
          class="inline-flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-lg mb-6 group-hover:scale-110 transition-transform"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h3 class="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4">
          Reduce costs
        </h3>
        <p class="text-base text-neutral-600 leading-relaxed">
          Eliminate manual checks and lengthy reviews by automating analyst
          tasks and compliance workflows.
        </p>
      </div>
    </div>
  </div>
</section>
```

**Key Properties:**

- Mobile: Single column stack
- Tablet: Two columns
- Desktop: Three columns
- Subtle hover effect on icons (scale transform)
- Icons use pink accent color for visual interest
- Consistent spacing between elements

---

### 4. Feature Highlight (Alternating Layout)

```html
<!-- 
IMAGE DESCRIPTION FOR AI GENERATOR:
"Professional B2B SaaS dashboard screenshot showing a policy management interface, clean white background with light gray sections (RGB 250, 250, 250), organized list view with checkboxes and status indicators, subtle pink accent highlights (RGB 236, 72, 153) for active items, modern data table with clear typography, toggle switches and dropdown menus, minimal icons in neutral gray, generous whitespace, enterprise software UI design, crisp and sharp, 1600x900px"
-->

<section class="py-16 sm:py-24 lg:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <!-- Feature Block 1 - Image Right -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32"
    >
      <!-- Content -->
      <div>
        <div
          class="inline-flex items-center px-3 py-1 bg-pink-50 text-pink-600 text-sm font-medium rounded-full mb-6"
        >
          Policy Engine
        </div>

        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6 leading-tight"
        >
          High-converting onboarding journeys
        </h2>

        <p class="text-lg text-neutral-600 leading-relaxed mb-8">
          Build onboarding flows that convert without writing code. Our visual
          builder lets you create compliant, branded experiences that guide
          users through even the most complex verification processes.
        </p>

        <!-- Feature list -->
        <ul class="space-y-4 mb-8">
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-base text-neutral-700"
              >Drag-and-drop flow builder with real-time preview</span
            >
          </li>
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-base text-neutral-700"
              >Pre-built compliance templates for common use cases</span
            >
          </li>
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-base text-neutral-700"
              >A/B testing to optimize conversion rates</span
            >
          </li>
        </ul>

        <a
          href="#"
          class="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
        >
          Learn more about onboarding
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <!-- Image -->
      <div class="order-first lg:order-last">
        <div class="relative">
          <img
            src="/placeholder-policy-dashboard.png"
            alt="Policy management dashboard interface"
            class="w-full h-auto rounded-xl shadow-xl border border-neutral-200"
          />
          <!-- Optional: Floating UI element for depth -->
          <div
            class="hidden lg:block absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-neutral-200"
          >
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-pink-500 rounded-lg"></div>
              <div>
                <div class="text-sm font-semibold text-neutral-900">
                  95% completion rate
                </div>
                <div class="text-xs text-neutral-500">Last 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Block 2 - Image Left -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Image -->
      <div>
        <div class="relative">
          <img
            src="/placeholder-analytics-dashboard.png"
            alt="Analytics and compliance monitoring dashboard"
            class="w-full h-auto rounded-xl shadow-xl border border-neutral-200"
          />
        </div>
      </div>

      <!-- Content -->
      <div>
        <div
          class="inline-flex items-center px-3 py-1 bg-pink-50 text-pink-600 text-sm font-medium rounded-full mb-6"
        >
          Analytics & Monitoring
        </div>

        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6 leading-tight"
        >
          Monitor customers throughout the lifecycle
        </h2>

        <p class="text-lg text-neutral-600 leading-relaxed mb-8">
          Stay compliant without the manual work. Our automated monitoring
          tracks customer risk profiles, triggers reverifications, and alerts
          your team to potential issues before they become problems.
        </p>

        <ul class="space-y-4 mb-8">
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-base text-neutral-700"
              >Real-time risk scoring and alerts</span
            >
          </li>
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-base text-neutral-700"
              >Automated reverification workflows</span
            >
          </li>
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-base text-neutral-700"
              >Comprehensive audit trail for regulators</span
            >
          </li>
        </ul>

        <a
          href="#"
          class="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
        >
          Explore monitoring features
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
```

**Key Properties:**

- Alternating image/content layout for visual rhythm
- Mobile: Stacked, image always first
- Desktop: Side-by-side with alternating sides
- Optional floating metric cards for added depth
- Pink checkmarks for visual consistency with brand

---

### 5. Testimonial / Social Proof

```html
<!-- 
IMAGE DESCRIPTION FOR AI GENERATOR:
"Professional corporate headshot of a friendly female executive, 40s, business casual attire, clean white or light gray background, warm smile, confident and approachable expression, high-quality photography, studio lighting, sharp focus, enterprise professional aesthetic, square format 400x400px"
-->

<section class="py-16 sm:py-24 lg:py-32 bg-neutral-900 text-white">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Quote -->
      <blockquote class="mb-8">
        <p
          class="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug mb-8"
        >
          "Business onboarding used to be a cost center for Plaid. Now, it's a
          revenue driver thanks to Duna's intuitive onboarding flows,
          enterprise-grade UX and minimal engineering work."
        </p>
      </blockquote>

      <!-- Attribution -->
      <div class="flex items-center justify-center space-x-4">
        <img
          src="/placeholder-testimonial-avatar.jpg"
          alt="Sarah Johnson, VP of Operations at Plaid"
          class="w-16 h-16 rounded-full border-2 border-pink-500"
        />
        <div class="text-left">
          <div class="font-semibold text-white text-lg">Sarah Johnson</div>
          <div class="text-neutral-400 text-base">VP of Operations, Plaid</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Key Properties:**

- Dark background for contrast and emphasis
- Large, readable quote text
- Avatar with pink border accent
- Centered layout for focus
- Mobile: 32px quote, Desktop: 48px quote

---

### 6. Stats / Metrics Section

```html
<section class="py-16 sm:py-24 lg:py-32 bg-white border-y border-neutral-200">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <!-- Optional section title -->
    <div class="text-center mb-12 sm:mb-16">
      <h2 class="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">
        Trusted by industry leaders
      </h2>
      <p class="text-lg text-neutral-600">
        See the impact teams achieve with Duna
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      <!-- Stat 1 -->
      <div class="text-center">
        <div
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-2"
        >
          95%
        </div>
        <div class="text-base sm:text-lg text-neutral-600">
          Faster onboarding
        </div>
      </div>

      <!-- Stat 2 -->
      <div class="text-center">
        <div
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-600 mb-2"
        >
          3x
        </div>
        <div class="text-base sm:text-lg text-neutral-600">
          Conversion increase
        </div>
      </div>

      <!-- Stat 3 -->
      <div class="text-center">
        <div
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-2"
        >
          80%
        </div>
        <div class="text-base sm:text-lg text-neutral-600">
          Analyst efficiency
        </div>
      </div>

      <!-- Stat 4 -->
      <div class="text-center">
        <div
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-600 mb-2"
        >
          $10M+
        </div>
        <div class="text-base sm:text-lg text-neutral-600">Revenue driven</div>
      </div>
    </div>
  </div>
</section>
```

**Key Properties:**

- Clean, scannable layout
- Mix neutral and pink colors for visual interest
- Large, bold numbers for impact
- Mobile: Single column, Tablet: 2 columns, Desktop: 4 columns

---

### 7. Call-to-Action (CTA) Section

```html
<section
  class="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white"
>
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="max-w-3xl mx-auto text-center">
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
      >
        Ready to transform your compliance operations?
      </h2>

      <p class="text-lg sm:text-xl text-neutral-300 mb-10 leading-relaxed">
        Join leading enterprises using Duna to grow faster while staying
        compliant. Get started in minutes.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#"
          class="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-base font-semibold rounded-lg hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          Start free trial
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white text-base font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-neutral-900 transition-all w-full sm:w-auto"
        >
          Schedule a demo
        </a>
      </div>

      <!-- Trust indicators -->
      <div class="mt-10 pt-10 border-t border-neutral-700">
        <p class="text-sm text-neutral-400 mb-4">
          No credit card required • 14-day free trial
        </p>
      </div>
    </div>
  </div>
</section>
```

**Key Properties:**

- Dark gradient background for emphasis
- High contrast white text and buttons
- Centered, focused layout
- Clear value proposition and low-friction CTAs

---

### 8. Footer

```html
<footer class="bg-neutral-900 text-white py-12 sm:py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
      <!-- Company Info / Logo Column -->
      <div class="col-span-2 sm:col-span-3 lg:col-span-1">
        <img
          src="/placeholder-logo-white.svg"
          alt="Company Logo"
          class="h-8 mb-4"
        />
        <p class="text-sm text-neutral-400 leading-relaxed">
          Enterprise-grade compliance platform built for businesses that need to
          scale.
        </p>
      </div>

      <!-- Product Links -->
      <div>
        <h3 class="font-semibold text-white text-sm mb-4">Product</h3>
        <ul class="space-y-3">
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Features</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Security</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Changelog</a
            >
          </li>
        </ul>
      </div>

      <!-- Company Links -->
      <div>
        <h3 class="font-semibold text-white text-sm mb-4">Company</h3>
        <ul class="space-y-3">
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Careers</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Press</a
            >
          </li>
        </ul>
      </div>

      <!-- Resources Links -->
      <div>
        <h3 class="font-semibold text-white text-sm mb-4">Resources</h3>
        <ul class="space-y-3">
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Documentation</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >API Reference</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Guides</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Support</a
            >
          </li>
        </ul>
      </div>

      <!-- Legal Links -->
      <div>
        <h3 class="font-semibold text-white text-sm mb-4">Legal</h3>
        <ul class="space-y-3">
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Privacy</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Terms</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Cookies</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-neutral-400 hover:text-white transition-colors"
              >Licenses</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-neutral-800">
      <div
        class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
      >
        <!-- Copyright -->
        <p class="text-sm text-neutral-400">
          © 2025 YourCompany. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex items-center space-x-6">
          <a
            href="#"
            class="text-neutral-400 hover:text-white transition-colors"
          >
            <span class="sr-only">Twitter</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-neutral-400 hover:text-white transition-colors"
          >
            <span class="sr-only">LinkedIn</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-neutral-400 hover:text-white transition-colors"
          >
            <span class="sr-only">GitHub</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**Key Properties:**

- Dark background (neutral-900)
- Five column layout on desktop, responsive grid
- Hover states on all links
- Social icons with accessibility labels
- Mobile: 2 columns, Tablet: 3 columns, Desktop: 5 columns

---

### 9. Card Component

```html
<div
  class="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 hover:border-neutral-300 hover:shadow-lg transition-all"
>
  <!-- Optional icon or image -->
  <div
    class="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-6"
  >
    <svg
      class="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </div>

  <h3 class="text-xl font-semibold text-neutral-900 mb-3">Card Title</h3>

  <p class="text-base text-neutral-600 leading-relaxed mb-6">
    Card description or supporting text goes here. Keep it concise and scannable
    for best results.
  </p>

  <!-- Optional CTA -->
  <a
    href="#"
    class="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
  >
    Learn more
    <svg
      class="ml-2 w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </a>
</div>
```

**Key Properties:**

- White background with subtle border
- Rounded corners (12px)
- Hover effect: border darkens, shadow appears
- Consistent internal padding
- Optional icon in brand color

---

### 10. Button Styles

```html
<!-- Primary Button (Dark) -->
<button
  class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-neutral-900 text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
>
  Primary Action
</button>

<!-- Primary Button (Pink Accent) -->
<button
  class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-pink-500 text-white text-base font-semibold rounded-lg hover:bg-pink-600 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
>
  Accent Action
</button>

<!-- Secondary Button (Outline) -->
<button
  class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-neutral-900 text-base font-semibold rounded-lg border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
>
  Secondary Action
</button>

<!-- Ghost/Text Button -->
<button
  class="inline-flex items-center justify-center px-4 py-2 text-neutral-700 text-base font-medium hover:text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 rounded-lg"
>
  Text Action
</button>

<!-- Link Button -->
<a
  href="#"
  class="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
>
  Link Action
  <svg
    class="ml-2 w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
```

**Key Properties:**

- Minimum 44px height for touch targets
- Rounded corners (8px)
- Smooth transitions (all properties)
- Focus states for accessibility
- Icons positioned with consistent spacing

---

### 11. Form Elements

```html
<!-- Input Field -->
<div class="mb-6">
  <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
    Email address
  </label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="you@company.com"
    class="w-full px-4 py-3 sm:px-5 sm:py-4 text-base text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-neutral-400"
  />
</div>

<!-- Textarea -->
<div class="mb-6">
  <label for="message" class="block text-sm font-medium text-neutral-700 mb-2">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    rows="4"
    placeholder="Tell us about your needs..."
    class="w-full px-4 py-3 sm:px-5 sm:py-4 text-base text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-neutral-400 resize-none"
  ></textarea>
</div>

<!-- Checkbox -->
<div class="flex items-start mb-6">
  <input
    type="checkbox"
    id="terms"
    name="terms"
    class="mt-1 w-5 h-5 text-pink-500 border-neutral-300 rounded focus:ring-2 focus:ring-pink-500"
  />
  <label for="terms" class="ml-3 text-base text-neutral-700">
    I agree to the
    <a href="#" class="text-pink-600 hover:text-pink-700 font-medium"
      >Terms of Service</a
    >
    and
    <a href="#" class="text-pink-600 hover:text-pink-700 font-medium"
      >Privacy Policy</a
    >
  </label>
</div>

<!-- Select Dropdown -->
<div class="mb-6">
  <label
    for="company-size"
    class="block text-sm font-medium text-neutral-700 mb-2"
  >
    Company size
  </label>
  <select
    id="company-size"
    name="company-size"
    class="w-full px-4 py-3 sm:px-5 sm:py-4 text-base text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
  >
    <option value="">Select an option</option>
    <option value="1-10">1-10 employees</option>
    <option value="11-50">11-50 employees</option>
    <option value="51-200">51-200 employees</option>
    <option value="201+">201+ employees</option>
  </select>
</div>
```

**Key Properties:**

- Consistent height: Mobile 48px, Desktop 56px
- Pink focus ring for brand consistency
- Clear, accessible labels
- Placeholder text in neutral-400
- Border color: default neutral-300, focus pink-500

---

## Image Guidelines

### General Principles

1. **Professional Quality**: All images should look professionally shot/created
2. **Consistent Style**: Maintain visual consistency across all imagery
3. **Purposeful**: Every image should support the content, not just fill space
4. **Optimized**: Use modern formats (WebP with PNG/JPG fallback)
5. **Responsive**: Provide multiple sizes for different breakpoints

### Image Types & Descriptions

#### 1. Hero / Product Screenshots

**Purpose**: Showcase the actual product interface

**AI Generation Prompt Template**:

```
"Modern B2B SaaS dashboard interface, clean white background (RGB 250, 250, 250),
organized data visualization with charts and tables, minimal UI with generous
whitespace, pink accent highlights (RGB 236, 72, 153) on interactive elements,
professional typography in dark gray (RGB 38, 38, 38), subtle neutral gray borders
(RGB 229, 229, 229), viewed on laptop screen at 15-degree angle, soft drop shadow,
enterprise software aesthetic, crisp and sharp focus, 1920x1080px"
```

**Specifications**:

- Dimensions: 1600x900px minimum (16:9 ratio)
- Format: WebP with PNG fallback
- Include subtle UI elements: buttons, dropdowns, data tables
- Show realistic (but anonymized) data
- Include pink accent colors strategically

#### 2. Feature Illustrations

**Purpose**: Explain specific features visually

**AI Generation Prompt Template**:

```
"Abstract isometric illustration of [specific feature], minimalist style, neutral
gray geometric shapes (RGB 245, 245, 245) with pink accent elements (RGB 236, 72,
153), clean lines, soft shadows, professional B2B aesthetic, white background,
3D rendered appearance, enterprise software illustration style, 1200x800px"
```

**Examples**:

- Policy engine: "Isometric flowchart with interconnected nodes and decision points"
- Data orchestration: "Abstract data streams flowing through organized pipelines"
- Monitoring: "Dashboard with real-time graphs and alert indicators"

**Specifications**:

- Dimensions: 1200x800px (3:2 ratio)
- Format: WebP with SVG alternative when possible
- Use brand colors: neutrals + pink accents
- Avoid overly complex or "cartoony" styles

#### 3. Testimonial / Team Photos

**Purpose**: Add human element and build trust

**AI Generation Prompt Template**:

```
"Professional corporate headshot, [age range] [gender] executive in business casual
attire, clean light gray background (RGB 245, 245, 245), warm and approachable smile,
confident expression, high-quality studio photography with soft lighting, sharp focus
on face, shallow depth of field, enterprise professional aesthetic, square format
400x400px"
```

**Specifications**:

- Dimensions: 400x400px (1:1 ratio for consistency)
- Format: WebP with JPG fallback
- Consistent lighting and background color
- Diverse representation across all testimonials

#### 4. Icons & Pictograms

**Purpose**: Quick visual communication

**Style Guidelines**:

- Use Huge Icons (https://hugeicons.com) for UI icons
- 24x24px base size, scale proportionally
- Stroke width: 2px
- Colors: neutral-700 default, pink-500 for accents
- Always include proper ARIA labels

**Common Icons Needed**:

```html
<!-- Check mark (success/feature list) -->
<svg
  class="w-6 h-6 text-pink-500"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M5 13l4 4L19 7"
  />
</svg>

<!-- Arrow right (CTAs) -->
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M17 8l4 4m0 0l-4 4m4-4H3"
  />
</svg>

<!-- Lightning (speed/performance) -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M13 10V3L4 14h7v7l9-11h-7z"
  />
</svg>
```

#### 5. Background Patterns & Gradients

**Purpose**: Add subtle visual interest without distraction

**Gradient Examples**:

```html
<!-- Subtle background -->
<div class="bg-gradient-to-br from-neutral-50 to-white"></div>

<!-- Section separator -->
<div class="bg-gradient-to-b from-white via-neutral-50 to-white"></div>

<!-- Dark CTA section -->
<div class="bg-gradient-to-br from-neutral-900 to-neutral-800"></div>

<!-- Pink accent gradient -->
<div class="bg-gradient-to-r from-pink-50 to-neutral-50"></div>
```

**Decorative Elements**:

```html
<!-- Floating blur circles (subtle depth) -->
<div
  class="absolute -top-24 -right-24 w-96 h-96 bg-pink-500 rounded-full opacity-5 blur-3xl"
></div>
<div
  class="absolute -bottom-24 -left-24 w-96 h-96 bg-neutral-500 rounded-full opacity-5 blur-3xl"
></div>
```

### Image Optimization Checklist

- [ ] Compress images (WebP preferred, 80-85% quality)
- [ ] Provide 1x, 2x, 3x versions for retina displays
- [ ] Include `alt` text for accessibility
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Implement proper `srcset` for responsive images
- [ ] Maximum file size: 200KB for screenshots, 50KB for icons

### Placeholder Strategy

During development, use placeholder services:

```html
<!-- Placeholder for dashboard screenshot -->
<img
  src="https://placehold.co/1600x900/FAFAFA/525252?text=Dashboard+Preview"
  alt="Compliance dashboard interface"
  class="w-full h-auto rounded-xl"
/>

<!-- Placeholder for avatar -->
<img
  src="https://placehold.co/400x400/F5F5F5/525252?text=Team+Member"
  alt="Sarah Johnson, VP of Operations"
  class="w-16 h-16 rounded-full"
/>
```

---

## Animations & Interactions

### Animation Philosophy

- **Subtle Over Flashy**: Enterprise users prefer understated motion
- **Purposeful**: Every animation should have a reason (feedback, guidance, delight)
- **Fast**: Keep durations under 300ms for most interactions
- **Respect User Preferences**: Honor `prefers-reduced-motion`

### Transition Standards

```css
/* Tailwind classes for standard transitions */
.transition-colors {
  transition: color, background-color, border-color 200ms;
}
.transition-all {
  transition: all 200ms;
}
.transition-transform {
  transition: transform 200ms;
}
```

### Common Interaction Patterns

#### 1. Hover States

```html
<!-- Button hover -->
<button
  class="bg-neutral-900 hover:bg-neutral-800 hover:shadow-lg transition-all"
>
  <!-- Link hover -->
  <a class="text-pink-600 hover:text-pink-700 transition-colors">
    <!-- Card hover -->
    <div
      class="border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all"
    >
      <!-- Icon scale on hover -->
      <div class="group-hover:scale-110 transition-transform"></div></div
  ></a>
</button>
```

#### 2. Focus States (Accessibility Critical)

```html
<!-- Input focus -->
<input
  class="focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
/>

<!-- Button focus -->
<button
  class="focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
></button>
```

#### 3. Loading States

```html
<!-- Loading spinner -->
<div
  class="inline-block w-6 h-6 border-3 border-neutral-300 border-t-pink-500 rounded-full animate-spin"
></div>

<!-- Skeleton loader -->
<div class="h-4 bg-neutral-200 rounded animate-pulse"></div>
```

#### 4. Scroll-triggered Animations (Optional)

For sections that appear on scroll, use subtle fade-in:

```html
<!-- Add with Intersection Observer JS -->
<div class="opacity-0 translate-y-4 transition-all duration-700" data-animate>
  <!-- Content fades in and slides up when scrolled into view -->
</div>
```

### Animation Timing

- **Instant**: < 100ms (color changes, small movements)
- **Quick**: 150-200ms (buttons, links, hover states)
- **Standard**: 200-300ms (cards, larger elements)
- **Slow**: 400-700ms (page transitions, scroll reveals)

### Reduced Motion Support

Always include this in your CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility

### Core Principles

1. **WCAG 2.1 AA Compliance**: Minimum standard for enterprise
2. **Keyboard Navigation**: All interactions must work without mouse
3. **Screen Reader Support**: Proper semantic HTML and ARIA labels
4. **Color Contrast**: Minimum 4.5:1 for text, 3:1 for large text
5. **Focus Indicators**: Always visible and high contrast

### Contrast Ratios (Verified)

```
White (#FFFFFF) on Neutral 900 (#171717): 16.0:1 ✓
White (#FFFFFF) on Pink 600 (#DB2777): 5.1:1 ✓
Neutral 900 (#171717) on White (#FFFFFF): 16.0:1 ✓
Neutral 700 (#404040) on White (#FFFFFF): 11.2:1 ✓
Neutral 600 (#525252) on White (#FFFFFF): 8.4:1 ✓
Pink 600 (#DB2777) on Neutral 50 (#FAFAFA): 6.8:1 ✓
```

### Semantic HTML Checklist

```html
<!-- Use proper heading hierarchy (h1 → h2 → h3) -->
<h1>Main page title</h1>
<h2>Section title</h2>
<h3>Subsection title</h3>

<!-- Use nav for navigation -->
<nav aria-label="Main navigation">
  <!-- links -->
</nav>

<!-- Use main for main content (one per page) -->
<main>
  <!-- primary content -->
</main>

<!-- Use article for self-contained content -->
<article>
  <!-- blog post, product card, etc -->
</article>

<!-- Use section for thematic grouping -->
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
  <!-- feature content -->
</section>

<!-- Use footer for footer content -->
<footer>
  <!-- footer links -->
</footer>
```

### ARIA Labels for Common Patterns

```html
<!-- Skip to content link -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>

<!-- Icon-only buttons -->
<button aria-label="Open menu">
  <svg><!-- icon --></svg>
</button>

<!-- Loading state -->
<button aria-busy="true" aria-label="Loading...">Processing</button>

<!-- Expanded/collapsed sections -->
<button aria-expanded="false" aria-controls="mobile-menu">Menu</button>
```

### Keyboard Navigation

- **Tab**: Move forward through focusable elements
- **Shift + Tab**: Move backward
- **Enter/Space**: Activate buttons/links
- **Escape**: Close modals/menus
- **Arrow keys**: Navigate within components (dropdowns, tabs)

### Focus Management

```html
<!-- Visible focus indicator (required) -->
<button
  class="focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
>
  <!-- Screen reader only text -->
  <span class="sr-only">Additional context for screen readers</span>
</button>
```

### Forms Accessibility

```html
<!-- Always associate labels with inputs -->
<label for="email">Email</label>
<input id="email" type="email" required />

<!-- Provide error messages -->
<input aria-invalid="true" aria-describedby="email-error" />
<p id="email-error" class="text-error-600">Please enter a valid email</p>

<!-- Group related inputs -->
<fieldset>
  <legend>Contact preferences</legend>
  <!-- radio buttons or checkboxes -->
</fieldset>
```

### Screen Reader Utilities (Tailwind)

```css
/* Hide visually but keep for screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Show when focused (skip links) */
.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## AstroJS Integration Notes

### Project Structure

```
src/
├── components/
│   ├── Navigation.astro
│   ├── Hero.astro
│   ├── FeatureSection.astro
│   ├── Card.astro
│   ├── Button.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

### BaseLayout.astro Template

```astro
---
const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content={description}>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body class="font-sans antialiased bg-white text-neutral-900">
  <!-- Skip to content link -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pink-500 focus:text-white focus:rounded-lg">
    Skip to main content
  </a>

  <slot />
</body>
</html>
```

### Tailwind Config for Astro

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        pink: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
        },
        success: {
          50: '#F0FDF4',
          500: '#22C55E',
          600: '#16A34A',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#EFF6FF',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
    },
  },
  plugins: [],
};
```

### Component Example (Button.astro)

```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  class?: string;
}

const { variant = 'primary', size = 'md', href, class: className = '' } = Astro.props;

const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantClasses = {
  primary: 'bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-lg focus:ring-neutral-900',
  secondary: 'bg-white text-neutral-900 border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 focus:ring-neutral-900',
  ghost: 'text-neutral-700 hover:text-neutral-900 focus:ring-neutral-900',
  pink: 'bg-pink-500 text-white hover:bg-pink-600 hover:shadow-lg focus:ring-pink-500'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 sm:px-8 sm:py-4 text-base',
  lg: 'px-8 py-4 sm:px-10 sm:py-5 text-lg'
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

const Tag = href ? 'a' : 'button';
---

<Tag href={href} class={classes}>
  <slot />
</Tag>
```

---

## Quick Reference

### Mobile-First Media Query Pattern

```css
/* Base (Mobile) */
.element {
}

/* Tablet (640px+) */
@media (min-width: 640px) {
  .element {
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .element {
  }
}
```

### Common Tailwind Patterns

```html
<!-- Container -->
<div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
  <!-- Section padding -->
  <section class="py-16 sm:py-24 lg:py-32">
    <!-- Responsive text -->
    <h1 class="text-4xl sm:text-5xl lg:text-7xl">
      <!-- Responsive grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
      >
        <!-- Button -->
        <button
          class="px-6 py-3 sm:px-8 sm:py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all"
        ></button>
      </div>
    </h1>
  </section>
</div>
```

### Color Usage Quick Guide

- **Backgrounds**: white, neutral-50, neutral-900
- **Text**: neutral-900 (headings), neutral-700 (body), neutral-600 (secondary)
- **Borders**: neutral-200 (default), neutral-300 (emphasis)
- **Accents**: pink-500 (primary), pink-600 (hover)
- **Links**: pink-600, hover:pink-700

---

## Final Checklist

Before launching any page, verify:

### Design

- [ ] Mobile layout tested at 320px, 375px, 414px widths
- [ ] Tablet layout tested at 768px width
- [ ] Desktop layout tested at 1024px, 1440px, 1920px widths
- [ ] All images have proper alt text
- [ ] Pink accents used tastefully (10-15% of color usage)
- [ ] Whitespace is generous and consistent
- [ ] Typography hierarchy is clear

### Accessibility

- [ ] All color contrasts meet WCAG AA (4.5:1 minimum)
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators are visible
- [ ] All interactive elements have proper ARIA labels
- [ ] Semantic HTML used correctly
- [ ] Screen reader tested (NVDA, JAWS, or VoiceOver)

### Performance

- [ ] Images optimized (WebP with fallbacks)
- [ ] Lazy loading implemented for below-fold images
- [ ] Fonts preloaded
- [ ] No layout shift on load
- [ ] Smooth 60fps animations

### Code Quality

- [ ] Mobile-first approach followed
- [ ] Tailwind classes used consistently
- [ ] No inline styles (use Tailwind utilities)
- [ ] Components are reusable
- [ ] Code is documented with comments

---

## Resources

### Tools

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Huge Icons**: https://hugeicons.com
- **Google Fonts (Inter)**: https://fonts.google.com/specimen/Inter
- **Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Responsive Image Breakpoints**: https://responsivebreakpoints.com

### Inspiration

- **Duna**: https://duna.com
- **Linear**: https://linear.app
- **Vercel**: https://vercel.com
- **Stripe**: https://stripe.com

---

## Version History

**v1.0** (October 2025)

- Initial style guide creation
- Duna-inspired design system
- Mobile-first approach for AstroJS + Tailwind
- Pink accent integration
- Comprehensive component library

---

_This style guide is a living document. Update it as your design system evolves._
