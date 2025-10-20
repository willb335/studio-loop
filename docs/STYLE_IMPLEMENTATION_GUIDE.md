# StudioLoop Style Implementation Guide

## Overview

This guide provides step-by-step instructions to update StudioLoop's visual design from the current indigo/pink/emerald color scheme to a more refined, Duna-inspired design system using neutrals with pink accents.

**Architecture remains unchanged** - we're only updating visual styling, colors, spacing, and typography refinements.

---

## Design System Migration

### Color Palette Changes

#### Before (Current)
- Primary: Indigo (`#6366F1`)
- Secondary: Pink (`#EC4899`)
- Accent: Emerald (`#10B981`)
- Neutrals: Gray (50-900)

#### After (Duna-Inspired)
- Primary: Neutral 900 (`#171717`) - Dark, professional
- Accent: Pink 500 (`#EC4899`) - Energy, highlights
- Neutrals: Neutral (50-900) - More refined than gray
- No emerald, no indigo

### Color Mapping Reference

```
Old → New
------------------------------------------
bg-indigo-600      → bg-neutral-900
bg-indigo-700      → bg-neutral-800
text-indigo-600    → text-neutral-900 OR text-pink-600
border-indigo-200  → border-neutral-200

bg-emerald-500     → bg-pink-500
text-emerald-600   → text-pink-600

bg-gray-50         → bg-neutral-50
bg-gray-900        → bg-neutral-900
text-gray-500      → text-neutral-500
text-gray-600      → text-neutral-600
text-gray-700      → text-neutral-700
text-gray-900      → text-neutral-900
border-gray-200    → border-neutral-200
```

---

## Global CSS Updates

### Update global.css

**Current:**
```css
:root {
  --font-heading: 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

**Add Neutral Color System:**
```css
:root {
  --font-heading: 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  
  /* Neutral color system */
  --neutral-50: #FAFAFA;
  --neutral-100: #F5F5F5;
  --neutral-200: #E5E5E5;
  --neutral-300: #D4D4D4;
  --neutral-400: #A3A3A3;
  --neutral-500: #737373;
  --neutral-600: #525252;
  --neutral-700: #404040;
  --neutral-800: #262626;
  --neutral-900: #171717;
  
  /* Pink accent system */
  --pink-50: #FDF2F8;
  --pink-100: #FCE7F3;
  --pink-200: #FBCFE8;
  --pink-400: #F472B6;
  --pink-500: #EC4899;
  --pink-600: #DB2777;
  --pink-700: #BE185D;
}
```

---

## Component Updates

### 1. Navigation Component

**File:** `src/components/Navigation.astro`

**Before:**
```astro
<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <span class="text-2xl font-semibold text-indigo-600">StudioLoop</span>
      </div>
      <button
        onclick="document.getElementById('waitlist').scrollIntoView({behavior: 'smooth'})"
        class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Join Waitlist
      </button>
    </div>
  </div>
</nav>
```

**After:**
```astro
<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="flex justify-between items-center h-16 sm:h-20">
      <div class="flex items-center">
        <span class="text-2xl font-semibold text-neutral-900">StudioLoop</span>
      </div>
      <button
        onclick="document.getElementById('waitlist').scrollIntoView({behavior: 'smooth'})"
        class="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
      >
        Join Waitlist
      </button>
    </div>
  </div>
</nav>
```

**Key Changes:**
- Logo: `text-indigo-600` → `text-neutral-900`
- Border: `border-gray-200` → `border-neutral-200`
- Button: `bg-indigo-600` → `bg-neutral-900`
- Padding: Updated to `px-5 sm:px-10 lg:px-20` (Duna spacing)
- Height: Added responsive height `h-16 sm:h-20`
- Button: Added focus states and shadow on hover

---

### 2. Hero Component

**File:** `src/components/Hero.astro`

**Before:**
```astro
<section class="bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20 lg:py-32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      The Affordable FitGrid Alternative for Boutique Studios
    </h1>
    <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
      Connect with your members through automated post-class follow-ups.
      Just $29/month. No annual contract.
    </p>
    <button
      onclick="document.getElementById('waitlist').scrollIntoView({behavior: 'smooth'})"
      class="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
    >
      Join the Waitlist
    </button>
    <p class="text-sm text-gray-500 mt-4">
      Join 50+ studios waiting to launch
    </p>
  </div>
</section>
```

**After:**
```astro
<section class="bg-gradient-to-br from-neutral-50 via-white to-pink-50 py-16 sm:py-24 lg:py-32">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 text-center">
    <!-- Optional: Eyebrow badge -->
    <div class="inline-flex items-center px-3 py-1 bg-pink-50 text-pink-600 text-sm font-medium rounded-full mb-6">
      <span>New: Launching Soon</span>
    </div>

    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6">
      The Affordable FitGrid Alternative for Boutique Studios
    </h1>
    
    <p class="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto">
      Connect with your members through automated post-class follow-ups.
      Just $29/month. No annual contract.
    </p>
    
    <button
      onclick="document.getElementById('waitlist').scrollIntoView({behavior: 'smooth'})"
      class="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
    >
      Join the Waitlist
      <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </button>
    
    <p class="text-sm text-neutral-500 mt-6">
      Join 50+ studios waiting to launch
    </p>
  </div>
</section>
```

**Key Changes:**
- Gradient: `from-indigo-50` → `from-neutral-50`
- Padding: Updated to match Duna system
- Heading: `font-bold` → `font-semibold`, added `leading-tight tracking-tight`
- Colors: All gray → neutral
- Button: `bg-indigo-600` → `bg-neutral-900`
- Added optional eyebrow badge with pink accent
- Added arrow icon to CTA button
- Typography improvements for better hierarchy

---

### 3. Features Component

**File:** `src/components/Features.astro`

**Before:**
```astro
<section id="features" class="bg-gray-50 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Everything You Need to Connect with Members
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Simple, powerful features that help you build stronger relationships.
      </p>
    </div>
    <!-- ... features grid ... -->
  </div>
</section>
```

**After:**
```astro
<section id="features" class="bg-neutral-50 py-16 sm:py-24 lg:py-32">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="text-center mb-12 sm:mb-16 lg:mb-20">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">
        Everything You Need to Connect with Members
      </h2>
      <p class="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
        Simple, powerful features that help you build stronger relationships with your fitness community.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {features.map((feature) => (
        <FeatureCard
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </div>
</section>
```

**Key Changes:**
- Background: `bg-gray-50` → `bg-neutral-50`
- Padding: Updated to Duna system with responsive variants
- Heading: Added `lg:text-5xl`, `font-semibold`, better spacing
- Text colors: All gray → neutral
- Grid gap: `gap-8` → `gap-8 lg:gap-12`

---

### 4. FeatureCard Component

**File:** `src/components/FeatureCard.astro`

**Create new styled version:**

```astro
---
interface Props {
  icon: string;
  title: string;
  description: string;
}

const { icon, title, description } = Astro.props;
---

<div class="group bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 hover:border-neutral-300 hover:shadow-lg transition-all">
  <!-- Icon -->
  <div class="inline-flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-lg mb-6 group-hover:scale-110 transition-transform">
    <span class="text-2xl">{icon}</span>
  </div>

  <!-- Title -->
  <h3 class="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3">
    {title}
  </h3>

  <!-- Description -->
  <p class="text-base text-neutral-600 leading-relaxed">
    {description}
  </p>
</div>
```

**Key Changes:**
- Card: White with subtle border (Duna pattern)
- Icon background: Changed to `bg-pink-500` (brand accent)
- Added hover scale effect on icon
- Border hover: `border-neutral-300` with shadow
- Improved padding: `p-6 sm:p-8`
- Typography: Updated to use neutral colors

---

### 5. Pricing Component

**File:** `src/components/Pricing.astro`

**Before:**
```astro
<section id="pricing" class="bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- ... pricing card ... -->
    <div class="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white px-8 py-10">
      <!-- ... -->
    </div>
  </div>
</section>
```

**After:**
```astro
<section id="pricing" class="bg-white py-16 sm:py-24 lg:py-32">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="text-center mb-12 sm:mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">
        Simple, Transparent Pricing
      </h2>
      <p class="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
        No hidden fees. No annual contracts. Just affordable member engagement.
      </p>
    </div>

    <div class="max-w-lg mx-auto">
      <div class="bg-white rounded-xl shadow-xl border-2 border-neutral-200 overflow-hidden">
        <!-- Pricing Header -->
        <div class="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white px-8 py-10 text-center">
          <h3 class="text-2xl font-semibold mb-2">StudioLoop</h3>
          <p class="text-neutral-300 mb-6">Everything you need to connect with members</p>
          <div class="flex items-baseline justify-center">
            <span class="text-5xl sm:text-6xl font-bold">$29</span>
            <span class="text-xl ml-2 text-neutral-300">/month</span>
          </div>
          <p class="text-sm text-neutral-300 mt-4">No annual contract • Cancel anytime</p>
        </div>

        <!-- Features List -->
        <div class="px-8 py-10">
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-pink-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-base text-neutral-700">Unlimited automated post-class emails</span>
            </li>
            <!-- ... more features ... -->
          </ul>

          <button
            onclick="document.getElementById('waitlist').scrollIntoView({behavior: 'smooth'})"
            class="w-full inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
          >
            Join the Waitlist
          </button>

          <p class="text-center text-sm text-neutral-500 mt-6">
            Launch special: First 100 studios get lifetime pricing at $29/month
          </p>
        </div>
      </div>
    </div>

    <!-- Price Comparison -->
    <div class="mt-12 text-center">
      <p class="text-lg text-neutral-600">
        <span class="font-bold text-pink-600">10x cheaper than FitGrid</span> with the features boutique studios actually need
      </p>
    </div>
  </div>
</section>
```

**Key Changes:**
- Background: Simple white instead of gradient
- Card header: `from-indigo-600` → `from-neutral-900`
- Border: `border-indigo-200` → `border-neutral-200`
- Checkmarks: Replace emoji with SVG icons in `text-pink-500`
- Button: Updated to neutral-900
- Price highlight: `text-indigo-600` → `text-pink-600`
- All gray → neutral

---

### 6. Comparison Table Component

**File:** `src/components/ComparisonTable.astro`

**Key Updates:**

```astro
<section id="comparison" class="bg-neutral-50 py-16 sm:py-24 lg:py-32">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="text-center mb-12 sm:mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">
        Why Choose StudioLoop?
      </h2>
      <p class="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
        Get the essential features boutique studios need without the enterprise price tag.
      </p>
    </div>

    <!-- Desktop Table -->
    <div class="hidden lg:block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
      <table class="w-full">
        <thead>
          <tr class="border-b border-neutral-200">
            <th class="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Feature</th>
            <th class="px-6 py-4 text-center text-sm font-semibold text-neutral-600">FitGrid</th>
            <th class="px-6 py-4 text-center text-sm font-semibold text-white bg-neutral-900">
              StudioLoop
              <span class="block text-xs font-normal text-neutral-300 mt-1">Recommended</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200">
          <tr>
            <td class="px-6 py-4 text-sm text-neutral-700">Monthly Price</td>
            <td class="px-6 py-4 text-center text-sm text-neutral-600">$169-325</td>
            <td class="px-6 py-4 text-center text-lg font-bold text-pink-600 bg-neutral-50">$29</td>
          </tr>
          <!-- Add checkmarks as SVG icons instead of emoji -->
          <tr>
            <td class="px-6 py-4 text-sm text-neutral-700">Post-class emails</td>
            <td class="px-6 py-4 text-center">
              <svg class="w-5 h-5 text-neutral-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </td>
            <td class="px-6 py-4 text-center bg-neutral-50">
              <svg class="w-5 h-5 text-pink-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </td>
          </tr>
          <!-- ... more rows ... -->
        </tbody>
      </table>
    </div>

    <!-- Mobile Cards (if needed) -->
    <!-- ... -->
  </div>
</section>
```

**Key Changes:**
- Highlight column: Use subtle `bg-neutral-50` instead of colored background
- Header: `bg-neutral-900` for StudioLoop column
- Checkmarks: SVG icons in `text-pink-500` for StudioLoop, `text-neutral-400` for others
- Price: Bold `text-pink-600` for emphasis
- All borders: Use `border-neutral-200`

---

### 7. Waitlist Form Component

**File:** `src/components/WaitlistForm.astro`

**Key Updates:**

```astro
<section id="waitlist" class="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-16 sm:py-24 lg:py-32">
  <div class="max-w-2xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
        Join the Waitlist
      </h2>
      <p class="text-lg sm:text-xl text-neutral-300 leading-relaxed">
        Be among the first to experience affordable member engagement for your studio.
      </p>
    </div>

    <form
      action="https://submit-form.com/YOUR_FORM_ID"
      method="POST"
      class="space-y-6"
    >
      <div>
        <label for="email" class="block text-sm font-medium text-neutral-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="w-full px-4 py-3 sm:px-5 sm:py-4 text-base text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-neutral-400"
          placeholder="you@studio.com"
        />
      </div>

      <!-- ... more fields ... -->

      <button
        type="submit"
        class="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-base font-semibold rounded-lg hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
      >
        Join Waitlist
        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button>

      <p class="text-center text-sm text-neutral-400 mt-4">
        No credit card required • Get early access pricing
      </p>
    </form>
  </div>
</section>
```

**Key Changes:**
- Background: Dark gradient `from-neutral-900 to-neutral-800`
- Input focus: `focus:ring-pink-500` (pink accent)
- Button: White button on dark background (high contrast)
- Labels: `text-neutral-300` for better readability on dark
- Added arrow icon to submit button

---

### 8. Footer Component

**File:** `src/components/Footer.astro`

**Key Updates:**

```astro
<footer class="bg-neutral-900 text-white py-12 sm:py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
      <!-- Logo/Company Column -->
      <div class="col-span-2 sm:col-span-3 lg:col-span-1">
        <span class="text-2xl font-semibold text-white mb-4 block">StudioLoop</span>
        <p class="text-sm text-neutral-400 leading-relaxed">
          Affordable member engagement for boutique fitness studios.
        </p>
      </div>

      <!-- Links columns -->
      <div>
        <h3 class="font-semibold text-white text-sm mb-4">Product</h3>
        <ul class="space-y-3">
          <li>
            <a href="#features" class="text-sm text-neutral-400 hover:text-white transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" class="text-sm text-neutral-400 hover:text-white transition-colors">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <!-- ... more columns ... -->
    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-neutral-800">
      <p class="text-sm text-neutral-400 text-center">
        © 2025 StudioLoop. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

**Key Changes:**
- Background: `bg-neutral-900`
- Text: `text-neutral-400` for secondary text
- Border: `border-neutral-800` for divider
- Hover states: `hover:text-white`

---

## Typography Refinements

### Heading Styles

Update all headings across components:

```html
<!-- H1 (Hero) -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight">

<!-- H2 (Section Headers) -->
<h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6">

<!-- H3 (Feature Cards) -->
<h3 class="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3">
```

**Key Points:**
- Use `font-semibold` instead of `font-bold` (softer, more refined)
- Add `leading-tight` to large headings
- Add `tracking-tight` to display text
- Always use `text-neutral-900` for headings

### Body Text Styles

```html
<!-- Lead/Intro Paragraph -->
<p class="text-lg sm:text-xl text-neutral-600 leading-relaxed">

<!-- Body Text -->
<p class="text-base text-neutral-700 leading-relaxed">

<!-- Secondary Text -->
<p class="text-sm text-neutral-500">
```

---

## Button Styles

### Primary Button (Dark)

```html
<button class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-neutral-900 text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2">
  Button Text
</button>
```

### Secondary Button (Outline)

```html
<button class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-neutral-900 text-base font-semibold rounded-lg border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2">
  Button Text
</button>
```

### Link Button (Pink Accent)

```html
<a href="#" class="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors">
  Learn more
  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
</a>
```

---

## Spacing Updates

### Container Padding

**Update all sections:**

```html
<!-- Old -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<!-- New (Duna spacing) -->
<div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
```

### Section Padding

```html
<!-- Standard Section -->
<section class="py-16 sm:py-24 lg:py-32">

<!-- Tight Section -->
<section class="py-12 sm:py-16 lg:py-24">

<!-- Generous Section -->
<section class="py-20 sm:py-28 lg:py-40">
```

---

## Icon Guidelines

### Replace Emoji with SVG Icons

**Checkmark Icon:**
```html
<svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
</svg>
```

**Arrow Right Icon:**
```html
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
</svg>
```

**Feature Icons:** Keep emoji for now, but consider replacing with:
- Use pink-500 background: `bg-pink-500`
- White emoji/icon on colored background
- Hover effect: `group-hover:scale-110 transition-transform`

---

## Implementation Checklist

### Phase 1: Global Changes
- [ ] Update `global.css` with neutral color variables
- [ ] Update container padding across all components
- [ ] Update section padding for Duna spacing system

### Phase 2: Component Updates
- [ ] Navigation: Update colors, spacing, button styles
- [ ] Hero: Update gradient, typography, add eyebrow badge
- [ ] Features: Update background, spacing, grid gaps
- [ ] FeatureCard: New card design with white background
- [ ] Pricing: Update card header gradient, checkmarks to SVG
- [ ] ComparisonTable: Update highlight column, icons
- [ ] WaitlistForm: Update dark background, form styles
- [ ] Footer: Update colors, spacing

### Phase 3: Typography Pass
- [ ] Replace `font-bold` with `font-semibold` in headings
- [ ] Add `leading-tight` and `tracking-tight` to large text
- [ ] Update all text colors from gray to neutral
- [ ] Ensure consistent line-height on body text

### Phase 4: Button & Interaction Updates
- [ ] Update all buttons to new primary style
- [ ] Add focus states to all interactive elements
- [ ] Add hover shadow effects
- [ ] Add arrow icons to primary CTAs

### Phase 5: Final Polish
- [ ] Replace emoji checkmarks with SVG icons
- [ ] Verify color contrast ratios (WCAG AA)
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify accessibility (keyboard navigation, focus states)

---

## Testing Checklist

### Visual Consistency
- [ ] All neutral colors are consistent (no stray gray classes)
- [ ] Pink accents used sparingly (10-15% of color usage)
- [ ] No indigo or emerald colors remain
- [ ] Spacing follows Duna system throughout

### Responsive Design
- [ ] Mobile (375px): All layouts stack properly
- [ ] Tablet (768px): Grid layouts work correctly
- [ ] Desktop (1440px): Maximum width constraints work
- [ ] Typography scales appropriately

### Accessibility
- [ ] All color contrasts meet WCAG AA (4.5:1 minimum)
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works throughout
- [ ] Screen reader friendly (semantic HTML, ARIA labels)

### Performance
- [ ] No layout shift on page load
- [ ] Smooth transitions (200-300ms)
- [ ] Optimized font loading
- [ ] CSS organized and minified

---

## Before & After Summary

### Color Changes
| Element | Before | After |
|---------|--------|-------|
| Primary CTA | Indigo 600 | Neutral 900 |
| Logo | Indigo 600 | Neutral 900 |
| Checkmarks | Emerald 600 | Pink 500 |
| Backgrounds | Gray 50 | Neutral 50 |
| Text | Gray 600/700/900 | Neutral 600/700/900 |
| Borders | Gray 200 | Neutral 200 |

### Visual Improvements
- ✅ More sophisticated neutral palette
- ✅ Pink used strategically for accents
- ✅ Better visual hierarchy with spacing
- ✅ Improved typography with semibold weights
- ✅ Subtle hover effects and transitions
- ✅ Professional, enterprise-grade aesthetic
- ✅ Better accessibility with focus states

---

## Quick Reference: Color Usage

### When to Use Each Color

**Neutral 900 (Dark):**
- Primary CTAs
- Logo text
- Main headings
- Footer background

**Neutral 700-800:**
- Body text
- Subheadings
- Secondary elements

**Neutral 500-600:**
- Secondary text
- Muted content
- Placeholders

**Neutral 200-300:**
- Borders
- Dividers
- Disabled states

**Neutral 50-100:**
- Section backgrounds
- Card backgrounds
- Subtle surfaces

**Pink 500-600:**
- Feature icons
- Accent highlights
- Link hover states
- Call-out text
- Important metrics

**Pink 50:**
- Background for badges
- Subtle highlights
- Eyebrow components

---

## Resources

- **Style Guide:** `docs/STYLE_GUIDE.md` (Full Duna design system)
- **Architecture:** `docs/ARCHITECTURE.md` (Component structure)
- **Implementation:** `docs/IMPLEMENTATION_GUIDE.md` (Build instructions)

---

## Questions or Issues?

If you encounter issues during implementation:
1. Verify all color classes use `neutral` instead of `gray`
2. Check spacing follows the new container pattern
3. Ensure buttons have proper focus states
4. Validate color contrast ratios
5. Test on mobile devices

**Ready to implement?** Switch to Code mode and start with Phase 1: Global Changes.