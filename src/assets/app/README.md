# StudioLoop App Screenshot Placeholders

This directory contains placeholder images for the StudioLoop landing page redesign. These SVG placeholders are temporary and should be replaced with actual app screenshots once available.

## Image Specifications

All images should be **1200 × 800 pixels** in PNG format with Rose Pink (#fb7185) accents.

---

## 1. Instructor Dashboard (`instructor-dashboard.png`)

**Current File**: `instructor-dashboard.png.svg` (SVG placeholder)

**Usage**: Hero section - primary visual

**Dimensions**: 1200 × 800 px

### AI Image Generation Prompt

```
Create a modern, clean instructor dashboard interface for a boutique fitness studio management app. 

Key Elements:
- Top navigation bar with rose pink (#fb7185) accent color
- Left sidebar showing weekly class schedule with times and class names
- Main content area displaying:
  * Member analytics chart with rose pink bars/lines
  * Email campaign statistics (open rates, click rates)
  * Recent member feedback/reviews with 5-star ratings in rose pink
  * Quick action buttons in rose pink
- Clean white background with subtle gray (#f5f5f5) card containers
- Modern sans-serif typography (Inter font family)
- Rounded corners on all UI elements (border-radius: 12-16px)
- Subtle shadows for depth
- Professional, minimalist aesthetic inspired by modern SaaS dashboards
- Show realistic placeholder data (class names like "Spin Class", "Yoga Flow", member names)

Style: Clean, modern, professional UI design with rose pink as primary brand color
Resolution: 1200x800px, high quality
```

---

## 2. Client Feedback (`client-feedback.png`)

**Current File**: `client-feedback.png.svg` (SVG placeholder)

**Usage**: Features section - showing feedback/rating system

**Dimensions**: 1200 × 800 px

### AI Image Generation Prompt

```
Create a member feedback page for a boutique fitness studio app showing detailed ratings and reviews.

Key Elements:
- Page title: "Member Feedback" in dark gray (#525252)
- Multiple feedback cards stacked vertically, each containing:
  * Member name and class attended
  * 10-star rating system (half or full stars in rose pink #fb7185)
  * Detailed written feedback/testimonial
  * Timestamp (e.g., "2 days ago")
  * Response from instructor (optional, in lighter gray box)
- Filter/sort options at top (by class, by rating, by date) with rose pink highlights on active filter
- Clean white cards with subtle shadows
- Rose pink accents for stars, buttons, and interactive elements
- Overall rating summary at top showing average score with large rose pink number
- Modern, accessible design with good contrast
- Show 3-4 realistic feedback examples with varying ratings (8-10 stars)

Style: Clean, modern feedback interface with rose pink star ratings
Resolution: 1200x800px, high quality
```

---

## 3. Email Follow-Up Editor (`email-followup.png`)

**Current File**: `email-followup.png.svg` (SVG placeholder)

**Usage**: Features section and How It Works section - showing email customization

**Dimensions**: 1200 × 800 px

### AI Image Generation Prompt

```
Create an email template editor interface for instructors to customize post-class follow-up emails.

Key Elements:
- Rich text editor toolbar at top with formatting options (bold, italic, lists, etc.) in rose pink (#fb7185) accent
- Email header fields:
  * Subject line input (highlighted in light pink #ffe4e6)
  * Preview text input
- Main email body editor showing a partially written email with:
  * Greeting with personalization tag: "Hi {member_name},"
  * Body text mentioning the class: "Thanks for joining {class_name} today!"
  * Request for feedback with link
  * Instructor signature
- Personalization tag picker sidebar/panel showing available merge tags:
  * {member_name}
  * {class_name}
  * {instructor_name}
  * {class_date}
  * {rating_link}
  (Tags displayed as rose pink pills/chips)
- Preview pane option showing how email will look
- Large "Send" or "Save Template" button in rose pink at bottom right
- Clean, modern interface with white background
- Subtle gray borders and shadows
- Professional email editor aesthetic (think modern email marketing tools)

Style: Modern email editor with rose pink accents and personalization features
Resolution: 1200x800px, high quality
```

---

## Image Treatment Guidelines

All images should be displayed with the following CSS treatment:

```css
.app-screenshot {
  border-radius: 1rem;  /* 16px rounded corners */
  box-shadow: 0 25px 70px rgba(251, 113, 133, 0.2);  /* Pink shadow */
  max-width: 100%;
  height: auto;
}

.app-screenshot-hero {
  border-radius: 1rem;
  box-shadow: 0 25px 70px rgba(251, 113, 133, 0.2);
  max-width: 1100px;
  margin: 0 auto;
}
```

---

## Color Palette Reference

Use these exact colors in generated images:

### Rose Pink Shades
- `#fff1f2` - Lightest pink (backgrounds)
- `#ffe4e6` - Light pink (hover states, highlighted fields)
- `#fecdd3` - Soft pink accents
- `#fda4af` - Medium light pink
- `#fb7185` - **PRIMARY BRAND COLOR** (buttons, stars, highlights)
- `#f43f5e` - Darker pink (hover on buttons)
- `#e11d48` - Dark pink
- `#be123c` - Very dark pink

### Neutral Grays
- `#fafafa` - Lightest background
- `#f5f5f5` - Light background (cards)
- `#e5e5e5` - Borders
- `#d4d4d4` - Light text/placeholders
- `#a3a3a3` - Muted text
- `#737373` - Secondary text
- `#525252` - Body text
- `#404040` - Dark text
- `#262626` - Darker text
- `#171717` - Darkest (headlines)

### Semantic Colors
- `#10b981` - Success green
- `#f59e0b` - Warning amber
- `#ef4444` - Error red

---

## Typography in Screenshots

Use these font families for realistic app screenshots:

- **Headings/Titles**: Poppins (SemiBold 600, Bold 700)
- **Body Text/UI**: Inter (Regular 400, Medium 500, SemiBold 600)

---

## Notes for Designers/AI Tools

1. Keep UI elements clean and modern - avoid clutter
2. Use realistic placeholder content (real names, real class types)
3. Maintain consistent rose pink accent color throughout
4. Show functional, believable interfaces - not abstract mockups
5. Include subtle depth with shadows and layering
6. Ensure text is readable at thumbnail sizes
7. Match the professional, boutique aesthetic of the target market
8. Screenshots should look like a real, working application

---

## Replacement Process

When replacing SVG placeholders with actual PNG screenshots:

1. Generate or capture 1200×800px screenshots
2. Ensure rose pink (#fb7185) is used for primary UI elements
3. Save as PNG format with transparency if needed
4. Name files exactly as specified (e.g., `instructor-dashboard.png`)
5. Place in this directory (`src/assets/app/`)
6. Update image imports in Astro components
7. Test responsive behavior across devices
8. Delete the `.svg` placeholder files

---

## File Checklist

- [x] `instructor-dashboard.png.svg` (placeholder)
- [x] `client-feedback.png.svg` (placeholder)
- [x] `email-followup.png.svg` (placeholder)
- [ ] `instructor-dashboard.png` (final)
- [ ] `client-feedback.png` (final)
- [ ] `email-followup.png` (final)

---

**Last Updated**: Phase 1 Implementation - Foundation & Assets
**Status**: Placeholder SVGs created, awaiting final PNG generation