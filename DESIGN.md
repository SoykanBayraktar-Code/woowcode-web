# WOOWCODE — DESIGN.md

> The design system for woowcode.com. Read this before building or changing any page.
> Positioning: **an iOS & mobile app studio that ships its own apps** — "Fikirden App Store'a / From idea to App Store".
> References: Apple (product-tile rhythm), Framer (black canvas + per-product gradient spotlight cards),
> Expo (device mockup as hero), Linear (dark surface ladder, hairlines). Source: `VoltAgent/awesome-design-md`.

## 1. Principles

1. **The product speaks.** Our apps (screenshots, icons, device frames) carry the colour and the wow. Chrome stays monochrome and quiet.
2. **One brand accent, many app accents.** The iOS blue→indigo gradient (`#0A84FF → #5E5CE6`) belongs to the WOOWCODE logo and tiny status details. Each app brings its own `accent` (from `src/lib/apps.ts`) to its card and page.
3. **At most three "wow" moments per page.** Everything else is calm: generous space, tight type, hairlines.
4. **Every claim is real.** No invented ratings, download counts or client logos.

## 2. Colour tokens (`src/app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--background` | `#07090d` | Page canvas |
| `--background-secondary` | `#0b0e14` | Raised panels, CTA band |
| `--background-tertiary` | `#121722` | Inputs, code chips |
| `--foreground` | `#f2f4f8` | Headlines, primary text |
| `--foreground-muted-bright` | `#c4cbd8` | Body on cards |
| `--foreground-muted` | `#98a1b3` | Secondary text (≥ 4.5:1 on canvas) |
| `--border-color` / `-bright` | white 8% / 14% | Hairlines |
| `--azure` `--azure-soft` | `#0A84FF` `#7CB8FF` | Brand (iOS blue), links on dark |
| `--mint` `--mint-deep` | `#A5A3FF` `#5E5CE6` | Brand indigo (legacy name): status dots, focus ring, eyebrow bullet |
| `--gradient-text` | `#7CB8FF → #A5A3FF` | Highlight words in headlines (1 per heading max) |

App accents live in `apps.ts` as `{ from, to, glow }` and are applied inline.

## 3. Typography

- **Geist** (sans) for everything, **Geist Mono** for eyebrows, tags, code, metadata.
- Display: weight 600, `letter-spacing: -0.04em`, `line-height: 1.02` (`.heading-xl`). Section titles: `.heading-lg` (-0.03em, 1.1).
- Body copy on new pages: **17px / 1.6**. Never below 15px for paragraphs.
- Eyebrow: `.eyebrow` — mono 12px, tracking 0.14em, indigo square bullet. Write uppercase strings for the mono labels in code (do not rely on CSS `uppercase` — Turkish `i/İ`).

## 4. Shape & depth

- Radii: 12px (chips, small controls) · 20px (`.card-line` cards) · 32px (spotlight cards) · pill (buttons) · app icons 22.5% (squircle-like).
- Depth comes from light, not shadows: radial accent glows behind products, `bg-grid` masks, `noise` grain.
- Shadows only under devices/app icons.

## 5. Components

| Component | File | Notes |
|---|---|---|
| Logo / LogoMark | `components/brand/Logo.tsx` | App-icon mark + "woow**code**" + tagline |
| Section header | `components/sections/SectionHeader.tsx` | eyebrow + title + highlight + lead + optional action |
| Buttons | `.btn-primary` (white pill), `.btn-ghost` (dark pill) | `active:scale-95` |
| App icon | `components/apps/AppIcon.tsx` | Image or generated monogram in app accent |
| App Store button | `components/apps/AppStoreButton.tsx` | Own artwork, no Apple logo; hidden in prod without `appStoreId` |
| iPhone frame | `components/apps/DeviceFrame.tsx` | Pure CSS, Dynamic Island, 1206×2622 screenshots |
| Spotlight card | `components/apps/AppSpotlightCard.tsx` | Cursor light + 3D tilt, app accent background |
| Feature icons | `components/apps/FeatureIcon.tsx` | Heroicons-style 24px strokes, no emoji |
| Legal pages | `components/apps/PolicyShell.tsx` | Narrow prose column |

## 6. Motion

- Entrances: 0.6–0.8s, ease `[0.22, 1, 0.36, 1]`, fade + 16–30px rise (optionally blur 6px→0).
- Micro-interactions: 150–300ms. Hover never shifts layout.
- Continuous motion (floating phone, marquee) must stop under `prefers-reduced-motion`.

## 7. Layout

- Container: `.container-x` (max 80rem, 16/24/32px gutters).
- Section rhythm: `py-24 lg:py-36`, separated by a 1px top hairline.
- Breakpoints to verify: 375, 768, 1024, 1440. No horizontal scroll.
- Fixed floating header: pages start content at `pt-32`+.

## 8. Adding an app

See the header comment in `src/lib/apps.ts`. Assets go in `public/apps/<slug>/` (`icon.webp` 512px, `icon.png` 256px, `screen-N.webp` ~600px wide). Policies in `content/<slug>/`.

## 9. Don'ts

- No emoji icons, no stock photos of people pointing at screens.
- No second gradient in a heading; no gradient backgrounds on whole sections (accents live in cards/glows).
- No fake social proof. No Apple logo artwork unless it's Apple's official badge used per their guidelines.
