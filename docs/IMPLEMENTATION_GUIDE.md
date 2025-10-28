# FitnessFollowups Implementation Guide

## Quick Start

This guide provides a step-by-step implementation plan for building the FitnessFollowups landing page based on the architecture defined in [ARCHITECTURE.md](ARCHITECTURE.md).

---

## File Structure to Create

```
src/
├── components/
│   ├── Navigation.astro       ← Sticky nav with logo + CTA
│   ├── Hero.astro             ← Main headline + waitlist CTA
│   ├── ProblemStatement.astro ← Cost comparison visual
│   ├── Features.astro         ← Three-column features
│   ├── FeatureCard.astro      ← Reusable feature card
│   ├── HowItWorks.astro       ← 5-step process
│   ├── ComparisonTable.astro  ← FitnessFollowups vs FitGrid
│   ├── Pricing.astro          ← $29/month pricing card
│   ├── WaitlistForm.astro     ← Form with Formspark
│   └── Footer.astro           ← Footer with links
├── layouts/
│   └── Layout.astro           ← Update with fonts + meta tags
└── pages/
    └── index.astro            ← Main landing page (compose components)
```

---

## Implementation Order

### Phase 1: Foundation (First)

**1. Update Layout.astro**

```astro
---
import "../styles/global.css";

interface Props {
  title?: string;
  description?: string;
}

const {
  title = "FitnessFollowups - Affordable FitGrid Alternative | $29/month",
  description = "Connect with your fitness members through automated post-class follow-ups. Built for boutique studios using MindBody. Just $29/month, no contract."
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="generator" content={Astro.generator} />

    <!-- SEO -->
    <title>{title}</title>
    <meta name="description" content={description} />

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://FitnessFollowups.vercel.app" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">

    <!-- Microsoft Clarity (add after getting project ID) -->
    <!-- <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
    </script> -->
  </head>
  <body class="font-body">
    <slot />
  </body>
</html>
```

**2. Update global.css**

Add font family variables:

```css
@layer base {
  :root {
    --font-heading: 'Poppins', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
  }

  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
  }
}
```

**3. Add Tailwind config for fonts**

Add to `tailwind.config` (in global.css theme):

```css
@theme inline {
  /* ... existing theme ... */

  /* Add font families */
  --font-family-heading: var(--font-heading);
  --font-family-body: var(--font-body);
}
```

---

### Phase 2: Core Components

**Build order** (each component is independent):

1. **Navigation.astro** - Simple sticky header
2. **Footer.astro** - Basic footer
3. **Hero.astro** - Main hero section
4. **WaitlistForm.astro** - Form with Formspark
5. **Features.astro** + **FeatureCard.astro** - Three-column features
6. **ComparisonTable.astro** - FitGrid comparison
7. **Pricing.astro** - Pricing card
8. **ProblemStatement.astro** - Cost comparison
9. **HowItWorks.astro** - 5-step process

---

### Phase 3: Assembly

**Update index.astro** to compose all components:

```astro
---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/Navigation.astro';
import Hero from '../components/Hero.astro';
import ProblemStatement from '../components/ProblemStatement.astro';
import Features from '../components/Features.astro';
import HowItWorks from '../components/HowItWorks.astro';
import ComparisonTable from '../components/ComparisonTable.astro';
import Pricing from '../components/Pricing.astro';
import WaitlistForm from '../components/WaitlistForm.astro';
import Footer from '../components/Footer.astro';
---

<Layout>
  <Navigation />
  <main>
    <Hero />
    <ProblemStatement />
    <Features />
    <HowItWorks />
    <ComparisonTable />
    <Pricing />
    <WaitlistForm />
  </main>
  <Footer />
</Layout>
```

---

## Component Templates

### Navigation.astro Template

```astro
<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <span class="text-2xl font-semibold text-indigo-600">FitnessFollowups</span>
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

### Hero.astro Template

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

### WaitlistForm.astro Template

```astro
<section id="waitlist" class="bg-white py-20">
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-8">Join the Waitlist</h2>
    <form
      action="https://submit-form.com/YOUR_FORM_ID"
      method="POST"
      class="space-y-6"
    >
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="you@studio.com"
        />
      </div>

      <div>
        <label for="studioName" class="block text-sm font-medium text-gray-700 mb-2">
          Studio Name *
        </label>
        <input
          type="text"
          name="studioName"
          id="studioName"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Your Studio Name"
        />
      </div>

      <div>
        <label for="role" class="block text-sm font-medium text-gray-700 mb-2">
          Role *
        </label>
        <select
          name="role"
          id="role"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select your role</option>
          <option value="studio-owner">Studio Owner</option>
          <option value="instructor">Instructor</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Honeypot for spam protection -->
      <input type="text" name="_honeypot" style="display:none" />

      <button
        type="submit"
        class="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Join Waitlist
      </button>
    </form>
  </div>
</section>
```

---

## Key Tailwind Classes to Use

### Color System

- **Primary (Indigo)**: `bg-indigo-600`, `text-indigo-600`, `hover:bg-indigo-700`
- **Secondary (Pink)**: `bg-pink-500`, `text-pink-600`
- **Accent (Emerald)**: `bg-emerald-500`, `text-emerald-600`
- **Neutral**: `bg-gray-50`, `bg-gray-900`, `text-gray-600`

### Typography

- **H1**: `text-4xl sm:text-5xl lg:text-6xl font-bold`
- **H2**: `text-3xl sm:text-4xl font-bold`
- **H3**: `text-2xl font-semibold`
- **Body**: `text-lg text-gray-600`

### Spacing

- **Sections**: `py-16 lg:py-24`
- **Containers**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Responsive Grid

- **3 columns**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **2 columns**: `grid grid-cols-1 lg:grid-cols-2 gap-8`

---

## Icons to Use

Use emojis as placeholders for icons. I will replace with SVGs later.

---

## Smooth Scrolling

Add this script to handle smooth scrolling to sections:

```astro
<script>
  // Smooth scroll to waitlist form
  document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const target = button.getAttribute('data-scroll-to');
      document.getElementById(target)?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
</script>
```

Then use on buttons:

```html
<button data-scroll-to="waitlist">Join Waitlist</button>
```

---

## Testing Checklist

### Before Launch

- [ ] All links work (scroll to waitlist)
- [ ] Form submits successfully to Formspark
- [ ] Responsive on mobile (375px width)
- [ ] Responsive on tablet (768px width)
- [ ] Responsive on desktop (1440px width)
- [ ] Fonts load correctly
- [ ] Images optimized (if any)
- [ ] Meta tags correct
- [ ] Favicon displays
- [ ] No console errors
- [ ] Core Web Vitals pass (Lighthouse)

### After Deploy

- [ ] Vercel Analytics working
- [ ] Microsoft Clarity installed and recording
- [ ] Formspark receives submissions
- [ ] Email notifications work
- [ ] Test from mobile device
- [ ] Share link on private Discord/Slack first

---

## Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial FitnessFollowups landing page"
git push origin main
```

### 2. Deploy to Vercel

1. Go to vercel.com
2. Import GitHub repository
3. Accept default settings (Astro detected automatically)
4. Deploy
5. Domain will be: `your-repo.vercel.app`

### 3. Configure Custom Domain (Optional)

1. Vercel dashboard → Project → Settings → Domains
2. Add: `FitnessFollowups.vercel.app` (or custom domain)
3. Follow DNS instructions

### 4. Enable Vercel Analytics

1. Vercel dashboard → Project → Analytics
2. Toggle "Enable Analytics"
3. Automatic integration (no code needed)

---

## Post-Launch Optimization

### Week 1 Tasks

1. Monitor Clarity recordings daily
2. Check conversion rate
3. Review bounce rate
4. Note any error reports
5. Collect initial feedback

### Quick Wins to Test

1. A/B test different hero headlines
2. Try different CTA button colors
3. Adjust form field order
4. Add/remove sections based on engagement
5. Optimize images if load time is slow

---

## Common Issues & Solutions

**Issue**: Form not submitting

- **Fix**: Check Formspark form ID is correct
- **Fix**: Verify CORS settings in Formspark dashboard

**Issue**: Fonts not loading

- **Fix**: Check preconnect links are in `<head>`
- **Fix**: Verify font weights match CSS

**Issue**: Mobile layout breaks

- **Fix**: Test with Chrome DevTools mobile view
- **Fix**: Ensure all grids have `grid-cols-1` for mobile

**Issue**: Slow page load

- **Fix**: Optimize images with `@astrojs/image`
- **Fix**: Minimize CSS if needed
- **Fix**: Lazy load below-fold content

---

## Ready to Build?

Once you're ready to implement:

1. Switch to Code mode
2. Reference ARCHITECTURE.md for detailed specs
3. Follow this guide for step-by-step implementation
4. Use component templates as starting points
5. Test thoroughly before deploying

**Estimated Time**: 4-6 hours for full implementation
