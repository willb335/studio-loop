# Hero Section: Visual Calculator Variation - Implementation Guide

**Last Updated:** October 26, 2025  
**Component Type:** Interactive React Component  
**Purpose:** Personalize the silent churn problem and drive waitlist conversions through engagement

---

## Table of Contents

1. [Overview](#overview)
2. [Design Specification](#design-specification)
3. [Technical Implementation](#technical-implementation)
4. [Component Architecture](#component-architecture)
5. [Integration Guide](#integration-guide)
6. [Testing & Optimization](#testing--optimization)

---

## Overview

### Concept

The Visual Calculator Variation transforms the hero section from passive consumption to active engagement. Users input their studio's metrics and immediately see their personalized churn loss—making the $47,000 problem tangible and urgent.

### Key Benefits

- **Personalization:** Each visitor sees their own numbers
- **Engagement:** Interactive elements increase time on page
- **Trust:** Transparent calculations build credibility
- **Urgency:** Real-time results create immediate action motivation
- **Mobile-First:** Touch-optimized for mobile users

### User Flow

1. User lands on page, sees headline: "What's Your Studio's Silent Churn Number?"
2. Calculator pre-populated with industry averages (50 members/month)
3. User adjusts slider or inputs their own numbers
4. Real-time calculation shows their annual loss
5. Recovery potential displayed (35-46% with automated follow-ups)
6. CTA button emphasizes personalized recovery amount
7. User clicks → scrolls to waitlist form

---

## Design Specification

### Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION (bg-white with pink gradient overlay)         │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  H1: What's Your Studio's Silent Churn Number?      │   │
│  │  Subheadline: [2 lines, neutral-600]                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  INTERACTIVE CALCULATOR CARD                         │   │
│  │  ┌──────────────────────────────────────────────┐   │   │
│  │  │  INPUT SECTION (gradient bg-pink-50→rose-50) │   │   │
│  │  │                                                │   │   │
│  │  │  New Members/Month:  [  50  ]  ←→            │   │   │
│  │  │  (slider + number input)                      │   │   │
│  │  │                                                │   │   │
│  │  │  Lifetime Value:     [ $212 ]  ←→            │   │   │
│  │  │  (slider + number input)                      │   │   │
│  │  └──────────────────────────────────────────────┘   │   │
│  │                                                       │   │
│  │  ┌──────────────────────────────────────────────┐   │   │
│  │  │  RESULT SECTION (bg-white)                   │   │   │
│  │  │                                                │   │   │
│  │  │  Annual Churn Loss (37% dropout rate):       │   │   │
│  │  │  ┌────────────────────────────────────────┐  │   │   │
│  │  │  │  $47,064                                │  │   │   │
│  │  │  │  (large, bold, text-rose-600)          │  │   │   │
│  │  │  └────────────────────────────────────────┘  │   │   │
│  │  │                                                │   │   │
│  │  │  With automated follow-ups:                   │   │   │
│  │  │  ┌────────────────────────────────────────┐  │   │   │
│  │  │  │  Recover $16,472 - $21,649/year        │  │   │   │
│  │  │  │  (green-600, semibold)                 │  │   │   │
│  │  │  └────────────────────────────────────────┘  │   │   │
│  │  │                                                │   │   │
│  │  │  [Your ROI: 47x-62x in year one]            │   │   │
│  │  └──────────────────────────────────────────────┘   │   │
│  │                                                       │   │
│  │  ┌──────────────────────────────────────────────┐   │   │
│  │  │  [CTA BUTTON: Recover My $16K-21K →]        │   │   │
│  │  └──────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TRUST BAR (4 checkmark items)                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  HERO IMAGE (app screenshot)                         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Color Palette

```css
/* Primary Colors */
--rose-50: rgb(255, 241, 242);
--rose-100: rgb(255, 228, 230);
--rose-600: rgb(225, 29, 72);
--pink-50: rgb(253, 242, 248);
--pink-100: rgb(252, 231, 243);
--pink-300: rgb(249, 168, 212);
--pink-400: rgb(244, 114, 182);
--pink-600: rgb(219, 39, 119);

/* Accent Colors */
--green-50: rgb(240, 253, 244);
--green-600: rgb(22, 163, 74);
--green-700: rgb(21, 128, 61);

/* Neutral Colors */
--neutral-600: rgb(82, 82, 91);
--neutral-700: rgb(63, 63, 70);
--neutral-900: rgb(24, 24, 27);
--white: rgb(255, 255, 255);
```

### Typography

```css
/* Headlines */
h1: font-size: 2.5rem (mobile) → 4rem (desktop)
     font-weight: 700 (bold)
     line-height: 1.2
     letter-spacing: -0.02em
     color: var(--neutral-900)

/* Subheadline */
p: font-size: 1.125rem (mobile) → 1.25rem (desktop)
   font-weight: 400
   line-height: 1.6
   color: var(--neutral-600)

/* Calculator Labels */
label: font-size: 0.875rem
       font-weight: 500
       color: var(--neutral-700)

/* Results */
.result-large: font-size: 3rem (mobile) → 4rem (desktop)
               font-weight: 700
               color: var(--rose-600)

.recovery-amount: font-size: 1.25rem
                  font-weight: 600
                  color: var(--green-600)
```

### Spacing & Layout

```css
/* Container */
max-width: 1200px
padding: 2rem (mobile) → 4rem (desktop)

/* Calculator Card */
padding: 2rem (mobile) → 3rem (desktop)
border-radius: 1.5rem
box-shadow: 0 20px 50px rgba(251, 113, 133, 0.15)

/* Vertical Spacing */
gap between elements: 1.5rem (mobile) → 2rem (desktop)
```

### Interaction States

```css
/* Slider */
default: accent-color: var(--pink-400)
hover: scale: 1.02, shadow increase
active: scale: 0.98
focus: outline: 2px solid var(--pink-400), outline-offset: 2px

/* Number Input */
default: border: 2px solid var(--pink-300)
hover: border-color: var(--pink-400)
focus: border-color: var(--pink-600), ring: 2px var(--pink-200)

/* CTA Button */
default: bg: var(--pink-400), shadow: 0 4px 14px rgba(244, 114, 182, 0.3)
hover: bg: var(--pink-600), shadow: 0 6px 20px rgba(244, 114, 182, 0.4), translateY: -2px
active: translateY: 0
```

---

## Technical Implementation

### Tech Stack

- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS (existing project setup)
- **Animation:** Framer Motion (for smooth transitions)
- **Build:** Astro (existing framework)
- **State Management:** React useState (no external library needed)

### Project Structure

```
src/
├── components/
│   ├── Hero.astro                    # Updated to import ChurnCalculator
│   ├── ChurnCalculator.tsx           # Main React component
│   └── calculator/
│       ├── ChurnCalculator.tsx       # Exported component
│       ├── SliderInput.tsx           # Reusable slider component
│       ├── ResultsDisplay.tsx        # Results card component
│       ├── CTAButton.tsx             # CTA button component
│       └── types.ts                  # TypeScript interfaces
├── styles/
│   └── calculator.css                # Component-specific styles
└── utils/
    └── churnCalculations.ts          # Business logic
```

---

## Component Architecture

### 1. Type Definitions (`types.ts`)

```typescript
// src/components/calculator/types.ts

export interface CalculatorInputs {
  monthlyMembers: number;
  lifetimeValue: number;
}

export interface ChurnResults {
  annualMembers: number;
  churnedMembers: number;
  annualLoss: number;
  recoveryLow: number;
  recoveryHigh: number;
  roiLow: number;
  roiHigh: number;
}

export interface SliderConfig {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}
```

### 2. Calculation Logic (`churnCalculations.ts`)

```typescript
// src/utils/churnCalculations.ts

import type {
  CalculatorInputs,
  ChurnResults,
} from '../components/calculator/types';

const CHURN_RATE = 0.37; // 37% industry average
const RECOVERY_LOW = 0.35; // 35% churn reduction
const RECOVERY_HIGH = 0.46; // 46% churn reduction
const ANNUAL_COST = 348; // $29/month × 12

export function calculateChurnImpact(inputs: CalculatorInputs): ChurnResults {
  const { monthlyMembers, lifetimeValue } = inputs;

  // Annual calculations
  const annualMembers = monthlyMembers * 12;
  const churnedMembers = Math.round(annualMembers * CHURN_RATE);
  const annualLoss = churnedMembers * lifetimeValue;

  // Recovery potential
  const recoveryLow = Math.round(annualLoss * RECOVERY_LOW);
  const recoveryHigh = Math.round(annualLoss * RECOVERY_HIGH);

  // ROI calculations (net recovery / annual cost)
  const roiLow = Math.round((recoveryLow - ANNUAL_COST) / ANNUAL_COST);
  const roiHigh = Math.round((recoveryHigh - ANNUAL_COST) / ANNUAL_COST);

  return {
    annualMembers,
    churnedMembers,
    annualLoss,
    recoveryLow,
    recoveryHigh,
    roiLow,
    roiHigh,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
```

### 3. Slider Input Component (`SliderInput.tsx`)

```typescript
// src/components/calculator/SliderInput.tsx

import React from 'react';
import type { SliderConfig } from './types';

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  config: SliderConfig;
  prefix?: string;
  suffix?: string;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  onChange,
  config,
  prefix = '',
  suffix = '',
}) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= config.min && newValue <= config.max) {
      onChange(newValue);
    }
  };

  return (
    <div className="slider-input-wrapper">
      <label className="block text-sm font-medium text-neutral-700 mb-3">
        {label}
      </label>

      <div className="flex items-center gap-4">
        {/* Slider */}
        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={handleSliderChange}
          className="flex-1 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer
                     accent-pink-400 hover:accent-pink-500 transition-all
                     focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          aria-label={label}
        />

        {/* Number Input */}
        <div className="relative">
          {prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 font-semibold">
              {prefix}
            </span>
          )}
          <input
            type="number"
            min={config.min}
            max={config.max}
            step={config.step}
            value={value}
            onChange={handleInputChange}
            className={`w-28 text-center text-2xl font-bold border-2 border-pink-300 
                       rounded-lg py-2 transition-all
                       hover:border-pink-400 focus:border-pink-600 focus:ring-2 
                       focus:ring-pink-200 focus:outline-none
                       ${prefix ? 'pl-6' : 'pl-3'} pr-3`}
            aria-label={`${label} input`}
          />
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 text-sm">
              {suffix}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
```

### 4. Results Display Component (`ResultsDisplay.tsx`)

```typescript
// src/components/calculator/ResultsDisplay.tsx

import React from 'react';
import { motion } from 'framer-motion';
import type { ChurnResults } from './types';
import { formatCurrency } from '../../utils/churnCalculations';

interface ResultsDisplayProps {
  results: ChurnResults;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div className="bg-white rounded-xl p-6 space-y-4 border-2 border-pink-100">
      {/* Annual Loss */}
      <div>
        <p className="text-sm text-neutral-600 mb-2">
          Annual churn loss{' '}
          <span className="text-neutral-500">(37% dropout rate)</span>:
        </p>
        <motion.div
          key={results.annualLoss}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-5xl font-bold text-rose-600 leading-tight"
        >
          {formatCurrency(results.annualLoss)}
        </motion.div>
        <p className="text-xs text-neutral-500 mt-2">
          {results.churnedMembers} lost members × $
          {results.annualLoss / results.churnedMembers} avg LTV
        </p>
      </div>

      {/* Recovery Potential */}
      <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
        <p className="text-sm text-neutral-700 mb-2 font-medium">
          With automated follow-ups (35-46% churn reduction):
        </p>
        <motion.div
          key={`${results.recoveryLow}-${results.recoveryHigh}`}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-2xl font-semibold text-green-700"
        >
          Recover {formatCurrency(results.recoveryLow)} -{' '}
          {formatCurrency(results.recoveryHigh)}/year
        </motion.div>
        <p className="text-xs text-green-600 mt-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">
            Your ROI: {results.roiLow}x-{results.roiHigh}x in year one
          </span>
        </p>
      </div>

      {/* Industry Data Attribution */}
      <p className="text-xs text-neutral-500 text-center pt-2 border-t border-neutral-200">
        Based on IHRSA industry data and FitGrid case studies
      </p>
    </div>
  );
};
```

### 5. CTA Button Component (`CTAButton.tsx`)

```typescript
// src/components/calculator/CTAButton.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../utils/churnCalculations';

interface CTAButtonProps {
  recoveryLow: number;
  recoveryHigh: number;
  onClick: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  recoveryLow,
  recoveryHigh,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-4 px-8 bg-pink-400 text-white font-semibold text-lg
                 rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl
                 transition-all duration-200 flex items-center justify-center gap-3
                 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
      aria-label={`Recover ${formatCurrency(recoveryLow)} to ${formatCurrency(
        recoveryHigh
      )} annually`}
    >
      <span>
        Recover My {formatCurrency(recoveryLow).replace('.00', '')}-
        {formatCurrency(recoveryHigh).replace('.00', '')}
      </span>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </motion.button>
  );
};
```

### 6. Main Calculator Component (`ChurnCalculator.tsx`)

```typescript
// src/components/calculator/ChurnCalculator.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SliderInput } from './SliderInput';
import { ResultsDisplay } from './ResultsDisplay';
import { CTAButton } from './CTAButton';
import { calculateChurnImpact } from '../../utils/churnCalculations';
import type { CalculatorInputs, SliderConfig } from './types';

const MEMBERS_CONFIG: SliderConfig = {
  min: 10,
  max: 200,
  step: 5,
  defaultValue: 50,
};

const LTV_CONFIG: SliderConfig = {
  min: 100,
  max: 500,
  step: 10,
  defaultValue: 212,
};

export const ChurnCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyMembers: MEMBERS_CONFIG.defaultValue,
    lifetimeValue: LTV_CONFIG.defaultValue,
  });

  const results = calculateChurnImpact(inputs);

  const handleCTAClick = () => {
    // Smooth scroll to waitlist form
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Track analytics event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'calculator_cta_click', {
        monthly_members: inputs.monthlyMembers,
        lifetime_value: inputs.lifetimeValue,
        annual_loss: results.annualLoss,
        recovery_amount: results.recoveryHigh,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-3xl mx-auto"
    >
      {/* Calculator Card */}
      <div
        className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-2xl 
                      overflow-hidden border-2 border-pink-100"
      >
        {/* Input Section */}
        <div className="p-6 sm:p-8 space-y-6">
          <SliderInput
            label="New members per month"
            value={inputs.monthlyMembers}
            onChange={(value) =>
              setInputs({ ...inputs, monthlyMembers: value })
            }
            config={MEMBERS_CONFIG}
          />

          <SliderInput
            label="Average lifetime value per member"
            value={inputs.lifetimeValue}
            onChange={(value) => setInputs({ ...inputs, lifetimeValue: value })}
            config={LTV_CONFIG}
            prefix="$"
          />
        </div>

        {/* Results Section */}
        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <ResultsDisplay results={results} />
        </div>

        {/* CTA Section */}
        <div className="px-6 pb-8 sm:px-8">
          <CTAButton
            recoveryLow={results.recoveryLow}
            recoveryHigh={results.recoveryHigh}
            onClick={handleCTAClick}
          />

          {/* Fine Print */}
          <p className="text-center text-xs text-neutral-500 mt-4">
            Based on 37% industry churn rate and 35-46% retention improvement
            with automated follow-ups
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChurnCalculator;
```

---

## Integration Guide

### Step 1: Install Dependencies

```bash
# In your project root
pnpm add framer-motion
pnpm add -D @types/react @types/react-dom
```

### Step 2: Update Astro Config

```javascript
// astro.config.mjs

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
});
```

### Step 3: Create Component Files

Create all the component files listed in the Component Architecture section above.

### Step 4: Update Hero.astro

```astro
---
// src/components/Hero.astro

import { Image } from 'astro:assets';
import heroImage from '../assets/app/hero.png';
import ChurnCalculator from './calculator/ChurnCalculator';
---

<section class="relative w-full bg-white overflow-hidden" aria-labelledby="hero-heading">
  <div class="absolute inset-0 bg-gradient-radial-pink opacity-30" aria-hidden="true"></div>

  <div class="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
    <div class="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">

      <!-- Content -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h1 id="hero-heading" class="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight mb-5 sm:mb-6" style="color: var(--neutral-900);">
          What's Your Studio's Silent Churn Number?
        </h1>

        <p class="font-body text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10" style="color: var(--neutral-600);">
          Most owners don't realize how much first-class dropout costs them. Industry average: 37% of new members never return. Use our calculator below to see your real number—and what automated follow-ups could recover.
        </p>
      </div>

      <!-- Interactive Calculator -->
      <div class="mb-12 sm:mb-16">
        <ChurnCalculator client:load />
      </div>

      <!-- Trust Bar -->
      <div class="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-14 text-sm sm:text-base" style="color: var(--neutral-700);">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" style="color: rgb(251, 113, 133);" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Free calculator, no signup</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" style="color: rgb(251, 113, 133);" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Based on IHRSA data</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" style="color: rgb(251, 113, 133);" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Solution: $29/month</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" style="color: rgb(251, 113, 133);" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>90% less than FitGrid</span>
        </div>
      </div>

      <!-- App Screenshot -->
      <div class="max-w-5xl mx-auto">
        <Image
          src={heroImage}
          alt="StudioLoop instructor dashboard showing class management and member engagement"
          class="w-full h-auto rounded-xl sm:rounded-2xl shadow-hero"
          loading="eager"
          widths={[640, 768, 1024, 1280, 1536]}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        />
      </div>

    </div>
  </div>
</section>

<style>
  .shadow-hero {
    box-shadow: 0 20px 50px rgba(251, 113, 133, 0.15);
  }
</style>
```

### Step 5: Add Custom Styles (Optional)

```css
/* src/styles/calculator.css */

/* Custom slider styling for better cross-browser support */
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(244, 114, 182);
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type='range']::-webkit-slider-thumb:hover {
  background: rgb(219, 39, 119);
  transform: scale(1.1);
}

input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(244, 114, 182);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type='range']::-moz-range-thumb:hover {
  background: rgb(219, 39, 119);
  transform: scale(1.1);
}

/* Number input spin buttons */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 1;
  height: 40px;
}
```

Import this in your `Layout.astro`:

```astro
---
import '../styles/calculator.css';
---
```

---

## Testing & Optimization

### A/B Testing Variants

Test these variations to optimize conversion:

#### Variant A: Industry Average (Control)

- Pre-populated: 50 members/month, $212 LTV
- Headline: "What's Your Studio's Silent Churn Number?"

#### Variant B: Conservative Numbers

- Pre-populated: 30 members/month, $200 LTV
- Lower initial shock value, potentially more believable

#### Variant C: Aggressive Numbers

- Pre-populated: 75 members/month, $250 LTV
- Higher impact, may work better for larger studios

#### Variant D: No Pre-Population

- Sliders start at minimum values
- Forces user to input their own numbers (higher engagement, lower completion)

### Analytics Tracking

Track these events:

```javascript
// Calculator interaction started
gtag('event', 'calculator_interaction', {
  event_category: 'engagement',
  event_label: 'churn_calculator',
});

// Slider adjusted
gtag('event', 'slider_adjusted', {
  slider_type: 'monthly_members', // or 'lifetime_value'
  new_value: value,
});

// CTA clicked from calculator
gtag('event', 'calculator_cta_click', {
  monthly_members: inputs.monthlyMembers,
  lifetime_value: inputs.lifetimeValue,
  annual_loss: results.annualLoss,
  recovery_amount: results.recoveryHigh,
});

// Form submission correlation
// Track if user came from calculator CTA vs other CTAs
```

### Performance Optimization

```typescript
// Debounce calculations for better performance
import { debounce } from 'lodash';

const debouncedCalculation = debounce((inputs: CalculatorInputs) => {
  const results = calculateChurnImpact(inputs);
  setResults(results);
}, 100);
```

### Mobile Optimization Checklist

- [ ] Touch targets minimum 44×44px
- [ ] Slider thumb size 24×24px for easier grabbing
- [ ] Number inputs use `inputmode="numeric"` on mobile
- [ ] Results display uses `font-size: clamp()` for responsive text
- [ ] Calculator card max-width for better tablet experience
- [ ] Adequate spacing between sliders (min 2rem)
- [ ] Test on iOS Safari, Android Chrome, and common devices

### Accessibility Checklist

- [ ] All inputs have associated labels
- [ ] Slider has `aria-label` attributes
- [ ] Focus states visible on all interactive elements
- [ ] Color contrast ratio ≥ 4.5:1 for all text
- [ ] Keyboard navigation works (Tab, Arrow keys for slider)
- [ ] Screen reader announces result changes
- [ ] CTA button has descriptive `aria-label`

### Success Metrics

Track these KPIs:

1. **Calculator Interaction Rate:** % of visitors who adjust sliders

   - Target: 40-60%

2. **Completion Rate:** % who adjust both sliders

   - Target: 60-80% of those who start

3. **Time on Calculator:** Average engagement time

   - Target: 45-90 seconds

4. **CTA Click Rate (from calculator):** % who click calculator CTA

   - Target: 25-35%

5. **Calculator → Waitlist Conversion:** % who complete form after using calculator
   - Target: 18-25% (higher than general traffic)

---

## Deployment Checklist

### Pre-Launch

- [ ] All TypeScript types defined and validated
- [ ] Unit tests for calculation logic
- [ ] Component tests for React components
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit passed
- [ ] Performance audit (<3s LCP, <100ms FID)
- [ ] Analytics events firing correctly
- [ ] Error boundary implemented for React components

### Launch Day

- [ ] A/B test configured (50/50 split: current hero vs calculator hero)
- [ ] Monitoring dashboard set up
- [ ] Heatmap tracking enabled (Hotjar/Clarity)
- [ ] Session recording enabled for debugging
- [ ] Backup plan ready (easy rollback to current hero)

### Post-Launch (Week 1)

- [ ] Monitor calculator interaction rate daily
- [ ] Check for JavaScript errors in console
- [ ] Review session recordings for UX issues
- [ ] Analyze drop-off points in funnel
- [ ] Collect qualitative feedback (if possible)
- [ ] Iterate based on data

---

## Troubleshooting

### Common Issues

**Issue: Calculator not rendering**

- Check React hydration: `client:load` directive in Astro
- Verify Framer Motion installed correctly
- Check browser console for errors

**Issue: Calculations incorrect**

- Verify `CHURN_RATE` constant (0.37)
- Check rounding logic in `calculateChurnImpact`
- Test edge cases (min/max values)

**Issue: Performance lag**

- Implement debouncing on slider changes
- Use `React.memo` for ResultsDisplay component
- Check for unnecessary re-renders

**Issue: Mobile slider hard to use**

- Increase thumb size to 24×24px
- Add more padding around slider
- Test touch target size (min 44×44px)

---

## Future Enhancements

### Phase 2 Features

1. **Social Proof Integration**

   - Display "X studio owners calculated their churn today"
   - Real-time counter of calculations performed

2. **Email Capture in Calculator**

   - "Email me my results" option
   - Pre-fill waitlist form with calculation data

3. **Comparison Mode**

   - Show "vs industry average" comparison
   - Benchmark against similar studio sizes

4. **Advanced Inputs**

   - Studio size selector (small/medium/large presets)
   - Current retention rate input
   - Class type/niche selector

5. **Results Sharing**
   - "Share these results" social buttons
   - Generate shareable image with results

### Long-Term Vision

- Integrate with CRM to show real churn data
- Predictive modeling based on studio type
- ROI comparison tool (vs other retention strategies)
- Interactive churn prevention checklist

---

## References

- IHRSA Industry Benchmarks: [Source needed]
- FitGrid Case Studies: [fitgrid.com/case-studies](https://www.fitgrid.com/case-studies)
- React TypeScript Best Practices: [react-typescript-cheatsheet.netlify.app](https://react-typescript-cheatsheet.netlify.app)
- Framer Motion Docs: [framer.com/motion](https://www.framer.com/motion/)
- Tailwind CSS Docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Document Status:** Ready for Implementation  
**Estimated Development Time:** 12-16 hours  
**Priority Level:** High (Phase 1 optimization)
