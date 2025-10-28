# FitnessFollowups Analytics & Tracking Setup

## Overview

This document outlines the analytics tools, tracking setup, and success metrics for the FitnessFollowups landing page.

---

## Selected Tools Stack

### 1. Vercel Analytics (Primary)

- **Cost**: FREE (included with Vercel hosting)
- **Setup**: Enable in Vercel dashboard (automatic)
- **Features**:
  - Pageview tracking
  - Core Web Vitals monitoring
  - Custom event tracking
  - Real-time analytics
- **Use for**: Basic traffic and conversion tracking

**Setup**:

1. Deploy to Vercel
2. Go to project settings → Analytics
3. Enable Analytics
4. Add to `<head>` section (Vercel does this automatically)

### 2. Microsoft Clarity (Behavior Analysis)

- **Cost**: 100% FREE (unlimited)
- **Setup Time**: 5 minutes
- **Features**:
  - Heatmaps (click, scroll, move)
  - Session recordings
  - Rage clicks detection
  - Dead clicks detection
  - Frustration signals
- **Use for**: Understanding user behavior and drop-off points

**Setup**:

1. Create account at https://clarity.microsoft.com
2. Get tracking code
3. Add to `<head>` section of Layout.astro
4. Verify installation

**Implementation**:

```html
<!-- Microsoft Clarity -->
<script type="text/javascript">
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', 'YOUR_PROJECT_ID');
</script>
```

### 3. Formspark (Form Handling)

- **Cost**: FREE (50 submissions/month), $10/month for 1000
- **Setup Time**: 5 minutes
- **Features**:
  - Spam protection (honeypot + reCAPTCHA)
  - Email notifications
  - CSV/JSON export
  - No backend needed
- **Use for**: Waitlist form submissions

**Setup**:

1. Create account at https://formspark.io
2. Create new form, get form ID
3. Update form action: `https://submit-form.com/YOUR_FORM_ID`
4. Configure email notifications
5. Enable spam protection

**Form Implementation**:

```html
<form action="https://submit-form.com/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <input type="text" name="studioName" required />
  <select name="role" required>
    <option value="studio-owner">Studio Owner</option>
    <option value="instructor">Instructor</option>
    <option value="other">Other</option>
  </select>
  <!-- Honeypot field (hidden) -->
  <input type="text" name="_honeypot" style="display:none" />
  <button type="submit">Join Waitlist</button>
</form>
```

**AJAX Submission (optional)**:

```javascript
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      // Show success message
      form.innerHTML =
        '<p class="success">Thanks! You are on the waitlist.</p>';

      // Track conversion in analytics
      if (window.clarity) {
        clarity('event', 'waitlist_signup');
      }
    }
  } catch (error) {
    // Show error message
    console.error('Form submission error:', error);
  }
}
```

---

## Success Metrics to Track

### Primary Metrics (Week 1-4)

**1. Conversion Rate**

- **Definition**: (Waitlist Signups ÷ Total Visitors) × 100
- **Target**: 10-15% for targeted traffic from Reddit/forums
- **Tool**: Formspark submissions ÷ Vercel Analytics visitors
- **Action**: If < 5%, review form placement and CTA messaging

**2. Traffic Sources**

- **What to Track**: Which Reddit posts/forums drive most traffic
- **Target**: Identify top 3 sources
- **Tool**: Vercel Analytics → Referrers tab
- **Action**: Double down on highest-converting sources

**3. Bounce Rate**

- **Definition**: % of visitors who leave without interacting
- **Target**: < 40%
- **Tool**: Vercel Analytics or Microsoft Clarity
- **Action**: If > 60%, review hero section messaging

**4. Scroll Depth**

- **Key Milestone**: 50% of visitors reach comparison table
- **Target**: 60% scroll past hero section
- **Tool**: Microsoft Clarity heatmaps
- **Action**: If low, make content more scannable

**5. Session Duration**

- **Definition**: Average time spent on page
- **Target**: > 2 minutes for converting visitors
- **Tool**: Vercel Analytics
- **Action**: Track correlation between duration and conversion

### Secondary Metrics (Month 2+)

**6. Device Distribution**

- Mobile vs Desktop vs Tablet
- Optimize for dominant device type

**7. CTA Click-Through Rate**

- Track clicks on "Join Waitlist" buttons
- Identify best-performing CTA locations

**8. Form Abandonment Rate**

- Started form but didn't submit
- Indicates form friction points

**9. Popular Sections**

- Which sections get most attention (Clarity heatmaps)
- Features vs Pricing vs Comparison

**10. Day/Time Patterns**

- When do most signups occur?
- Optimize posting schedule

---

## Event Tracking Setup

### Custom Events to Track

**1. Waitlist Form Submission** (Primary Goal)

```javascript
// After successful submission
if (window.clarity) {
  clarity('event', 'waitlist_signup');
}

// With Vercel Analytics
if (window.va) {
  va.track('Waitlist Signup', { role: formData.get('role') });
}
```

**2. CTA Button Clicks**

```javascript
// Track which CTA got clicked
document.querySelectorAll('.cta-button').forEach((button) => {
  button.addEventListener('click', () => {
    const location = button.dataset.location; // 'hero', 'pricing', etc.
    if (window.va) {
      va.track('CTA Click', { location });
    }
  });
});
```

**3. Scroll Milestones**

```javascript
// Track when users reach key sections
let trackedSections = new Set();

const observerOptions = {
  threshold: 0.5,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionName = entry.target.id;
      if (!trackedSections.has(sectionName)) {
        trackedSections.add(sectionName);
        if (window.va) {
          va.track('Section View', { section: sectionName });
        }
      }
    }
  });
}, observerOptions);

// Observe key sections
['features', 'comparison', 'pricing', 'waitlist'].forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});
```

---

## Tracking Dashboard

### Manual Tracking Sheet (Google Sheets)

Create a simple weekly tracking sheet:

| Week | Visitors | Signups | Conv Rate | Top Source | Bounce Rate | Avg Duration |
| ---- | -------- | ------- | --------- | ---------- | ----------- | ------------ |
| 1    |          |         |           |            |             |              |
| 2    |          |         |           |            |             |              |
| 3    |          |         |           |            |             |              |
| 4    |          |         |           |            |             |              |

**Weekly Review Questions**:

1. Which traffic sources converted best?
2. Where did users drop off? (Clarity insights)
3. Any rage clicks or frustration signals?
4. Mobile vs Desktop performance?
5. What can we improve for next week?

---

## Privacy & Compliance

### Privacy Policy Requirements

Since you're collecting emails, you need a basic privacy policy:

**Minimum Requirements**:

1. What data you collect (email, studio name, role)
2. Why you collect it (waitlist notifications)
3. How you store it (Formspark)
4. Who has access (only you)
5. User rights (can request deletion)

**Simple Template**:

```markdown
# Privacy Policy

Last updated: [DATE]

## Information We Collect

We collect email addresses, studio names, and roles through our waitlist form to notify you when FitnessFollowups launches.

## How We Use Your Information

Your information is used solely to:

- Add you to our product launch waitlist
- Send you updates about FitnessFollowups
- Contact you about early access opportunities

## Data Storage

Your information is securely stored via Formspark and is not shared with third parties.

## Your Rights

You can request deletion of your information at any time by emailing contact@FitnessFollowups.com

## Analytics

We use Vercel Analytics and Microsoft Clarity to understand how visitors use our site. These tools do not collect personally identifiable information.

## Contact

Questions? Email us at contact@FitnessFollowups.com
```

### Cookie Consent

**Good News**: Neither Vercel Analytics nor Microsoft Clarity require cookie consent banners as they don't use cookies for tracking!

- Vercel Analytics: Cookie-free
- Microsoft Clarity: Cookie-free
- No annoying cookie banners needed

---

## Performance Monitoring

### Core Web Vitals Targets

**1. Largest Contentful Paint (LCP)**

- Target: < 2.5 seconds
- What it measures: Loading performance
- How to improve: Optimize images, minimize CSS

**2. First Input Delay (FID)**

- Target: < 100 milliseconds
- What it measures: Interactivity
- How to improve: Minimize JavaScript execution

**3. Cumulative Layout Shift (CLS)**

- Target: < 0.1
- What it measures: Visual stability
- How to improve: Set image dimensions, avoid dynamic content insertion

**Monitoring**: Vercel Analytics automatically tracks these metrics.

---

## Week 1 Action Plan

### Day 1: Setup

- [ ] Deploy to Vercel
- [ ] Enable Vercel Analytics
- [ ] Create Formspark account and configure form
- [ ] Set up Microsoft Clarity

### Day 2-3: Baseline

- [ ] Share on 1-2 small Reddit communities
- [ ] Monitor initial traffic
- [ ] Watch Clarity recordings for user behavior
- [ ] Note any technical issues

### Day 4-7: Optimization

- [ ] Analyze bounce rate and scroll depth
- [ ] Review Clarity heatmaps
- [ ] Identify drop-off points
- [ ] Make quick improvements if needed

### Week 2+: Scale

- [ ] Post on larger subreddits
- [ ] Track which posts convert best
- [ ] Continue optimizing based on data
- [ ] Reach out to engaged waitlist members

---

## Red Flags to Watch For

**High Bounce Rate (> 70%)**

- Problem: Hero section not compelling
- Fix: Test different headlines or value propositions

**Low Scroll Rate (< 30% reach comparison)**

- Problem: Content not engaging
- Fix: Make sections more scannable, add visuals

**High Form Abandonment**

- Problem: Form too complex or broken
- Fix: Simplify form, test on multiple devices

**Zero Conversions from Traffic Source**

- Problem: Wrong audience or poor messaging
- Fix: Adjust targeting or messaging for that source

---

## Success Benchmarks

### Good Performance

- 10-15% conversion rate
- < 40% bounce rate
- 60%+ scroll to comparison table
- 2+ minute average session duration
- 50+ waitlist signups in Week 1

### Excellent Performance

- 15-20% conversion rate
- < 30% bounce rate
- 70%+ scroll to comparison table
- 3+ minute average session duration
- 100+ waitlist signups in Week 1

### Needs Improvement

- < 5% conversion rate
- > 60% bounce rate
- < 40% scroll past hero
- < 1 minute average session duration
- < 20 waitlist signups in Week 1

---

## Cost Summary

| Tool              | Free Tier            | Paid Tier          | When to Upgrade            |
| ----------------- | -------------------- | ------------------ | -------------------------- |
| Vercel Analytics  | 10k events/month     | $10/month for more | After 10k monthly visitors |
| Microsoft Clarity | Unlimited FREE       | N/A                | Never (always free)        |
| Formspark         | 50 submissions/month | $10/month for 1000 | After 50 signups/month     |

**Total Monthly Cost**: $0 for MVP phase (all free tiers)

**Estimated Cost at Scale** (1000 signups/month):

- Vercel Analytics: $0-10/month
- Microsoft Clarity: $0
- Formspark: $10/month
- **Total**: $10-20/month

---

## Next Steps

1. Review this document during setup
2. Create accounts for all three tools
3. Implement tracking code in Layout.astro
4. Test form submission
5. Deploy and verify all tools are working
6. Create tracking spreadsheet
7. Launch and start monitoring!
