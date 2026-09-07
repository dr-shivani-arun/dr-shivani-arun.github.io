# 🖼️ Image Upload Guide — Dr. Shivani Arun Portfolio

> **For non-technical helpers:** This page tells you exactly which images to add, where to put them, and how the website will look once you replace the placeholders. **You do not need to touch any code — just drop files into the right folder.**

---

## 🎯 Quick Summary

| What image | Where it appears | File to replace | Recommended size |
|---|---|---|---|
| Your headshot | Home page hero + About page | `public/avatar.svg` | 800×800 px (square) or 4:5 |
| Research cover | Each research card (grid) | `public/placeholders/research-cover-*.svg` | 800×500 px (16:10) |
| Any custom research cover | One specific research card | Set in CMS (see below) | 800×500 px (16:10) |

---

## 1️⃣ Your Headshot (Hero + About)

**Replace this file:**
```
public/avatar.svg
```

**How to do it (easiest):**
1. Find your photo on your computer (e.g. `my-photo.jpg`).
2. Open the folder `public/` (inside the portfolio folder).
3. **Delete** the file named `avatar.svg`.
4. **Copy** your photo into that same folder and **rename it** to `avatar.jpg`.
   - If your photo is a PNG, name it `avatar.png` instead.
5. That's it — the website automatically picks it up.

**Recommended:** A clear head-and-shoulders photo, well-lit, facing forward. Square or slightly taller than wide works best.

---

## 2️⃣ Research Cover Images (the cards on the Research page)

Each research publication/project gets a cover image on its card. There are **two ways** to add them:

### Option A — Use the ready-made placeholders (no action needed)
The site already shows nice themed placeholder images (teal/blue gradients) so the Research page looks complete right away. **You can leave these as-is.**

### Option B — Replace the themed placeholders (one photo for all)
If you want one real image used across all research cards:
1. Put your image in `public/assets/research/` (create this folder if needed).
2. Replace these files with your image (keeping the same name):
   - `public/placeholders/research-cover-oral.svg` → oral health research
   - `public/placeholders/research-cover-digital.svg` → MOOC / digital health
   - `public/placeholders/research-cover-community.svg` → community health
   - `public/placeholders/research-cover-placeholder.svg` → everything else

### Option C — A unique cover per research paper (easiest via the admin panel)
1. Open the admin panel: click **Open CMS Admin** on the Research page (or go to `/admin/`).
2. Log in with GitHub (the same account that owns the repository).
3. Open a research entry (or create a new one).
4. There is now a **Cover Image** field with a "Choose Image" button.
5. Click it, upload your image, and save.
6. That image will appear on that specific research card.

**Recommended size for covers:** 800 × 500 px, JPG or PNG. Landscape (wider than tall) looks best.

---

## 📁 Folder Map

```
public/
├── avatar.svg              ← YOUR HEADSHOT (replace this)
├── favicon.svg              ← Website icon in browser tab (leave as-is)
├── og.svg                   ← Image shown when you share the site on social media (leave as-is)
└── placeholders/
    ├── research-cover-placeholder.svg        ← default cover
    ├── research-cover-oral.svg               ← oral health cards
    ├── research-cover-digital.svg            ← MOOC / digital health cards
    └── research-cover-community.svg          ← community health cards
```

---

## ✅ Done? Run this to see your changes live

After replacing any image, run this command in the terminal (from the portfolio folder):

```bash
npm run build
```

Then open `dist/index.html` in your browser, or push to GitHub and the site updates automatically.

---

## ❓ Need help?

- For a single headshot → just replace `public/avatar.svg`.
- For research pictures → use the **CMS admin panel** (Option C) — it's the simplest and needs no file renaming.
- If something looks broken, double-check the file is named exactly as above and is a normal image file (`.jpg`, `.png`, `.svg`, `.webp`).