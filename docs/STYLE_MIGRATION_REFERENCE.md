# Style Migration Quick Reference

## One-Page Cheat Sheet for Duna-Inspired Updates

### Color Find & Replace

Use your editor's find-and-replace to make these changes across all `.astro` files:

```
Find                    → Replace
--------------------------------------------------
bg-indigo-600          → bg-neutral-900
bg-indigo-700          → bg-neutral-800
hover:bg-indigo-700    → hover:bg-neutral-800
text-indigo-600        → text-neutral-900
border-indigo-200      → border-neutral-200

bg-emerald-500         → bg-pink-500
bg-emerald-600         → bg-pink-600
text-emerald-600       → text-pink-500

bg-gray-50             → bg-neutral-50
bg-gray-100            → bg-neutral-100
bg-gray-200            → bg-neutral-200
bg-gray-500            → bg-neutral-500
bg-gray-600            → bg-neutral-600
bg-gray-700            → bg-neutral-700
bg-gray-900            → bg-neutral-900

text-gray-500          → text-neutral-500
text-gray-600          → text-neutral-600
text-gray-700          → text-neutral-700
text-gray-900          → text-neutral-900

border-gray-200        → border-neutral-200
border-gray-300        → border-neutral-300
```

---

### Container Padding Update

**Old Pattern:**
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

**New Pattern:**
```html
<div class="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
```

---

### Section Padding Update

**Old Pattern:**
```html
<section class="py-20">
```

**New Pattern (Standard):**
```html
<section class="py-16 sm:py-24 lg:py-32">
```

---

### Heading Typography Updates

**Find & Replace:**
```
font-bold              → font-semibold
```

**Add these classes to H1:**
```
leading-tight tracking-tight
```

**Example:**
```html
<!-- Before -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">

<!-- After -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight mb-6">
```

---

### Button Style Updates

**Primary Button:**
```html
<!-- Before -->
<button class="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors">

<!-- After -->
<button class="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2">
```

**Key additions:**
- `inline-flex items-center justify-center`
- `transition-all` instead of `transition-colors`
- `hover:shadow-lg`
- `focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2`

---

### Icon Updates

**Replace emoji checkmarks with SVG:**

```html
<!-- Before -->
<span class="text-emerald-600 text-xl">✓</span>

<!-- After -->
<svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
</svg>
```

**Add arrow to CTA buttons:**

```html
<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
</svg>
```

---

### Gradient Updates

**Hero/Pricing Sections:**
```html
<!-- Before -->
from-indigo-50 via-white to-pink-50

<!-- After -->
from-neutral-50 via-white to-pink-50
```

**Dark Sections (Waitlist):**
```html
<!-- New -->
from-neutral-900 to-neutral-800
```

---

### Card Component Pattern

```html
<div class="group bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 hover:border-neutral-300 hover:shadow-lg transition-all">
  <!-- Icon with pink background -->
  <div class="inline-flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-lg mb-6 group-hover:scale-110 transition-transform">
    <span class="text-2xl">🎯</span>
  </div>
  
  <!-- Content -->
  <h3 class="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3">Title</h3>
  <p class="text-base text-neutral-600 leading-relaxed">Description</p>
</div>
```

---

### Input Field Pattern

```html
<input
  type="email"
  class="w-full px-4 py-3 sm:px-5 sm:py-4 text-base text-neutral-900 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-neutral-400"
  placeholder="you@studio.com"
/>
```

**Key features:**
- Focus ring: `focus:ring-pink-500` (pink accent!)
- Placeholder: `placeholder:text-neutral-400`

---

### Typography Scale Reference

```html
<!-- Display (Hero H1) -->
text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight

<!-- H2 (Section Headers) -->
text-3xl sm:text-4xl lg:text-5xl font-semibold

<!-- H3 (Cards) -->
text-xl sm:text-2xl font-semibold

<!-- Lead Paragraph -->
text-lg sm:text-xl text-neutral-600 leading-relaxed

<!-- Body -->
text-base text-neutral-700 leading-relaxed

<!-- Small/Caption -->
text-sm text-neutral-500
```

---

### Color Usage Rules

**Use Neutral 900 for:**
- Primary CTAs
- Logo text
- Main headings
- Dark backgrounds

**Use Pink 500/600 for:**
- Feature icons (bg-pink-500)
- Accent highlights
- Important metrics
- Checkmarks
- Link colors

**Use Neutral 50 for:**
- Section backgrounds
- Card highlighted areas
- Subtle surfaces

**Use Neutral 200 for:**
- Borders
- Dividers

---

### Spacing Shortcuts

**Container:**
```
px-5 sm:px-10 lg:px-20
```

**Section Vertical:**
```
py-16 sm:py-24 lg:py-32
```

**Card Padding:**
```
p-6 sm:p-8
```

**Grid Gaps:**
```
gap-8 lg:gap-12
```

---

### Component-Specific Updates

**Navigation Height:**
```
h-16 sm:h-20
```

**Pricing Card Border:**
```
border-2 border-neutral-200
```

**Footer Border:**
```
border-t border-neutral-800
```

**Table Highlight Column:**
```
bg-neutral-50
```

---

### Pink Accent Placements

✅ **Use pink for:**
- Feature card icon backgrounds (`bg-pink-500`)
- Checkmark SVG icons (`text-pink-500`)
- Price emphasis text (`text-pink-600`)
- "10x cheaper" text (`text-pink-600`)
- Eyebrow badges (`bg-pink-50 text-pink-600`)
- Input focus rings (`focus:ring-pink-500`)

❌ **Don't use pink for:**
- Primary buttons (use neutral-900)
- Navigation elements
- Body text
- Borders

---

### Before/After Visual Map

```
Component       | Before        | After
----------------|---------------|----------------
Logo            | Indigo 600    | Neutral 900
Primary Button  | Indigo 600    | Neutral 900
Checkmarks      | Emerald 600   | Pink 500
Feature Icons   | Emoji only    | Pink 500 bg + emoji
Backgrounds     | Gray 50       | Neutral 50
Headings        | Gray 900      | Neutral 900
Body Text       | Gray 600/700  | Neutral 600/700
Borders         | Gray 200      | Neutral 200
Footer BG       | Gray 900      | Neutral 900
Dark Sections   | Indigo grad.  | Neutral grad.
```

---

### Implementation Order

1. **Global CSS** - Add neutral color variables
2. **Find/Replace** - Update all color classes
3. **Container/Spacing** - Update padding patterns
4. **Typography** - font-bold → font-semibold
5. **Buttons** - Add focus states, shadows
6. **Icons** - Replace emoji with SVG
7. **Final Pass** - Test responsive, accessibility

---

### Testing Shortcuts

**Mobile Test:**
```bash
# Chrome DevTools
Ctrl/Cmd + Shift + M
# Set to iPhone SE (375px)
```

**Color Contrast:**
- Neutral 900 on white: ✅ 16:1
- Neutral 600 on white: ✅ 8.4:1
- Pink 600 on white: ✅ 5.1:1
- Pink 600 on neutral-50: ✅ 6.8:1

---

### Pro Tips

1. **Use Multi-Cursor** in VS Code for bulk updates
2. **Test one component at a time** - don't update everything at once
3. **Keep a browser tab open** - see changes live with Astro dev server
4. **Take screenshots** before changes for comparison
5. **Git commit after each component** - easy to rollback if needed

---

## Need Help?

- **Full Details:** See `STYLE_IMPLEMENTATION_GUIDE.md`
- **Design System:** See `STYLE_GUIDE.md`
- **Architecture:** See `ARCHITECTURE.md`