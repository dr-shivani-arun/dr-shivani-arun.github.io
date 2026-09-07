# Dr. Shivani Arun — Portfolio

A modern, responsive portfolio website for **Dr. Shivani Arun** — Dentist, Public Health Researcher, Health Educator & MPH Gold Medalist at IISc Bengaluru.

Built with **Astro** + **Tailwind CSS**, content managed via **Decap CMS** (Git-based admin panel).

---

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:4321
```

Build for production:

```bash
npm run build
npm run preview
```

---

## 🖼️ Adding / Replacing Images

See **[IMAGE_UPLOAD_GUIDE.md](IMAGE_UPLOAD_GUIDE.md)** — written for non-technical helpers.

The short version:

| Image | Replace this file |
|---|---|
| Your headshot | `public/avatar.svg` |
| Research cover (all cards) | `public/placeholders/research-cover-*.svg` |
| Cover for one paper | Use the **CMS admin** at `/admin/` → Cover Image field |

---

## 📝 Managing Content (Research, Publications)

Content lives in `src/content/research/*.md` and can also be edited through the web admin panel:

- **Admin panel:** `/admin/` (GitHub login required — must be an owner/collaborator)
- **CMS config:** `public/admin/config.yml`
- **Content schema:** `src/content/config.ts`

---

## 📁 Project Structure

```
src/
├── components/          # Nav, Footer, ResearchCard
├── layouts/             # BaseLayout (shared SEO + chrome)
├── pages/               # Home, About, Experience, Research
└── content/research/    # Research publications (MD frontmatter)
public/
├── avatar.svg           # ← your headshot
├── placeholders/        # ← cover placeholders
└── admin/               # Decap CMS
```

---

## 🌐 Deploy

This repo is configured to deploy automatically to GitHub Pages via `.github/workflows/deploy.yml` (Astro Pages). Push to `main` to publish.