# Abisheik Portfolio — Complete Setup & Developer Guide

A production-ready personal portfolio for an AI/ML developer built with
**React 18 + Vite + Tailwind CSS + Framer Motion + Recharts**.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Full File Structure](#2-full-file-structure)
3. [Prerequisites](#3-prerequisites)
4. [Installation — Step by Step](#4-installation--step-by-step)
5. [Running the Dev Server](#5-running-the-dev-server)
6. [Building for Production](#6-building-for-production)
7. [Deploying to Vercel](#7-deploying-to-vercel)
8. [Deploying to Netlify](#8-deploying-to-netlify)
9. [Deploying to GitHub Pages](#9-deploying-to-github-pages)
10. [Customising Your Content](#10-customising-your-content)
11. [Adding Your Real Resume](#11-adding-your-real-resume)
12. [Replacing the Profile Photo](#12-replacing-the-profile-photo)
13. [Connecting a Real Contact Form](#13-connecting-a-real-contact-form)
14. [Component Reference](#14-component-reference)
15. [Tailwind Custom Tokens](#15-tailwind-custom-tokens)
16. [Troubleshooting](#16-troubleshooting)

---

## 1. Project Overview

| Feature | Detail |
|---|---|
| Framework | React 18 with Vite 5 |
| Styling | Tailwind CSS 3 + inline styles |
| Animation | Framer Motion 11 |
| Charts | Recharts 2 |
| Icons | Lucide React |
| Data | Local `src/data/db.json` (mock backend) |
| Font | Plus Jakarta Sans (headings/body) + Fira Code (terminal) |
| Sections | Navbar · Hero · About · Education · Skills · Projects · Certifications · Contact |

---

## 2. Full File Structure

After installation your project tree looks like this:

```
abisheik-portfolio/
├── public/
│   ├── favicon.svg          ← gradient "A" logo favicon
│   └── resume.pdf           ← ⚠ ADD YOUR OWN RESUME HERE
│
├── src/
│   ├── data/
│   │   └── db.json          ← ALL dynamic content lives here
│   │
│   ├── components/
│   │   ├── Navbar.jsx       ← sticky pill nav + mobile hamburger
│   │   ├── Hero.jsx         ← profile card + terminal + glass badge
│   │   ├── About.jsx        ← bento grid: progress ring, bio, line chart
│   │   ├── Education.jsx    ← vertical alternating timeline
│   │   ├── Skills.jsx       ← filterable skill card grid
│   │   ├── Projects.jsx     ← project cards with live like toggle
│   │   ├── Certifications.jsx ← cert cards with download button
│   │   └── Contact.jsx      ← social grid + why-card + contact form
│   │
│   ├── App.jsx              ← root: assembles sections + scroll spy
│   ├── main.jsx             ← React DOM entry point
│   └── index.css            ← Tailwind directives + global styles
│
├── index.html               ← Vite root HTML (fonts, meta tags)
├── vite.config.js           ← Vite config + code-splitting
├── tailwind.config.js       ← custom tokens (colours, shadows, fonts)
├── postcss.config.js        ← autoprefixer pipeline
├── package.json             ← all dependencies
├── .eslintrc.cjs            ← ESLint rules
└── .gitignore
```

---

## 3. Prerequisites

Make sure these are installed on your machine before you start:

### Node.js (v18 or higher — v20 LTS recommended)

Check your version:
```bash
node -v
```

If you don't have Node or need to upgrade, download it from:
**https://nodejs.org/en/download**

Or use **nvm** (Node Version Manager) — the recommended way:
```bash
# Install nvm (macOS / Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload your shell then install Node 20
nvm install 20
nvm use 20
node -v  # should print v20.x.x
```

**Windows users:** download the Windows installer from nodejs.org, or use
`winget install OpenJS.NodeJS.LTS` in a PowerShell terminal.

### npm (comes with Node) or pnpm / yarn

```bash
npm -v   # should print 9.x or 10.x
```

### Git (optional but recommended)

```bash
git --version
```

Download from **https://git-scm.com/downloads** if not installed.

### A code editor

**VS Code** is recommended — https://code.visualstudio.com  
Useful extensions to install:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier — Code formatter**
- **ESLint**

---

## 4. Installation — Step by Step

### Step 1 — Create the project folder

Open your terminal (macOS: Terminal / iTerm; Windows: PowerShell or Git Bash):

```bash
mkdir abisheik-portfolio
cd abisheik-portfolio
```

### Step 2 — Recreate the file structure

Create the subdirectories:

```bash
mkdir -p public src/data src/components
```

### Step 3 — Place every file

Copy each file you downloaded into the matching path shown in
[Section 2](#2-full-file-structure). The mapping is:

| Downloaded file | Place it at |
|---|---|
| `package.json` | `abisheik-portfolio/package.json` |
| `vite.config.js` | `abisheik-portfolio/vite.config.js` |
| `tailwind.config.js` | `abisheik-portfolio/tailwind.config.js` |
| `postcss.config.js` | `abisheik-portfolio/postcss.config.js` |
| `index.html` | `abisheik-portfolio/index.html` |
| `.eslintrc.cjs` | `abisheik-portfolio/.eslintrc.cjs` |
| `.gitignore` | `abisheik-portfolio/.gitignore` |
| `favicon.svg` | `abisheik-portfolio/public/favicon.svg` |
| `db.json` | `abisheik-portfolio/src/data/db.json` |
| `main.jsx` | `abisheik-portfolio/src/main.jsx` |
| `index.css` | `abisheik-portfolio/src/index.css` |
| `App.jsx` | `abisheik-portfolio/src/App.jsx` |
| `Navbar.jsx` | `abisheik-portfolio/src/components/Navbar.jsx` |
| `Hero.jsx` | `abisheik-portfolio/src/components/Hero.jsx` |
| `About.jsx` | `abisheik-portfolio/src/components/About.jsx` |
| `Education.jsx` | `abisheik-portfolio/src/components/Education.jsx` |
| `Skills.jsx` | `abisheik-portfolio/src/components/Skills.jsx` |
| `Projects.jsx` | `abisheik-portfolio/src/components/Projects.jsx` |
| `Certifications.jsx` | `abisheik-portfolio/src/components/Certifications.jsx` |
| `Contact.jsx` | `abisheik-portfolio/src/components/Contact.jsx` |

### Step 4 — Install dependencies

From inside `abisheik-portfolio/` run:

```bash
npm install
```

This downloads React, Vite, Tailwind, Recharts, Framer Motion, Lucide React,
and all dev tools into a local `node_modules/` folder. It may take 30–60 seconds.

You should see output ending with something like:
```
added 312 packages in 42s
```

If you prefer **pnpm** (faster, less disk space):
```bash
npm install -g pnpm
pnpm install
```

Or **yarn**:
```bash
npm install -g yarn
yarn install
```

---

## 5. Running the Dev Server

```bash
npm run dev
```

Vite will start a hot-reload dev server. Look for output like:

```
  VITE v5.x.x  ready in 342 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Open **http://localhost:5173** in your browser. The page auto-reloads
every time you save a file — no manual refresh needed.

### Useful dev commands

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with HMR on port 5173 |
| `npm run build` | Type-check + compile for production into `dist/` |
| `npm run preview` | Serve the `dist/` build locally at port 4173 |
| `npm run lint` | Run ESLint across all `.jsx` files |

---

## 6. Building for Production

```bash
npm run build
```

Vite compiles, tree-shakes, minifies, and code-splits everything into `dist/`:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js      ← your app code
│   ├── vendor-[hash].js     ← react + react-dom
│   ├── charts-[hash].js     ← recharts (lazy chunk)
│   ├── motion-[hash].js     ← framer-motion (lazy chunk)
│   └── index-[hash].css     ← compiled Tailwind (purged)
└── resume.pdf               ← copied from public/
```

Preview the production build locally before deploying:

```bash
npm run preview
# Open http://localhost:4173
```

---

## 7. Deploying to Vercel

Vercel is the fastest zero-config option. It detects Vite automatically.

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Inside your project folder
vercel

# Follow the prompts:
# ? Set up and deploy? Yes
# ? Which scope? (your account)
# ? Link to existing project? No
# ? Project name: abisheik-portfolio
# ? In which directory is your code? ./
# ✅ Auto-detected framework: Vite
# ✅ Build command: npm run build
# ✅ Output directory: dist

# For production deployment:
vercel --prod
```

Your site will be live at `https://abisheik-portfolio.vercel.app`

### Option B — Vercel Dashboard (no CLI)

1. Push your project to GitHub (see Step 9 for git setup)
2. Go to **https://vercel.com/new**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done. Every `git push` to `main` auto-deploys.

### Vercel environment variables

If you add a real email service later, add env vars in:
**Vercel Dashboard → Project → Settings → Environment Variables**

---

## 8. Deploying to Netlify

### Option A — Netlify CLI

```bash
npm install -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option B — Netlify Dashboard

1. Go to **https://app.netlify.com/start**
2. Drag and drop your `dist/` folder into the deploy zone  
   **OR** connect your GitHub repo for continuous deployment
3. Build settings (auto-detected for Vite):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**

### netlify.toml (optional — place in root)

Create this file to lock in your settings:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The redirect rule is important — it makes client-side routing work correctly.

---

## 9. Deploying to GitHub Pages

### Step 1 — Install gh-pages

```bash
npm install -D gh-pages
```

### Step 2 — Update vite.config.js

Add your repo name as the base path:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/abisheik-portfolio/',   // ← add this line
})
```

### Step 3 — Add deploy scripts to package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 4 — Push to GitHub and deploy

```bash
# Initialise git (if you haven't already)
git init
git add .
git commit -m "feat: initial portfolio"

# Create a repo on github.com then:
git remote add origin https://github.com/YOUR_USERNAME/abisheik-portfolio.git
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

Your site will be live at:
`https://YOUR_USERNAME.github.io/abisheik-portfolio/`

---

## 10. Customising Your Content

**All content lives in one file: `src/data/db.json`**

You never need to touch a component file just to update text, add a project,
or remove a certification. Just edit the JSON.

### Changing your name, title, and bio

Open `src/components/Hero.jsx` and find these lines:

```jsx
// Line ~70 — your name
<span style={{ color: "#0f0f1a" }}>Abi</span>
<span ...>sheik</span>

// Line ~85 — subtitle
"Generative AI & Python Developer"

// Line ~95 — profile views badge
"1,112"
```

Change them to your own values.

For the bio paragraph in `About.jsx`:

```jsx
// src/components/About.jsx — around line 130
"As an AI Developer, I build intelligent systems using Python..."
```

### Adding a new skill to the grid

Open `src/data/db.json` and add an entry to the `skills` array:

```json
{
  "id": 21,
  "name": "LangChain",
  "category": "FRAMEWORK",
  "emoji": "🔗",
  "color": "#1c3c6e",
  "bg": "#f0f4ff"
}
```

Valid `category` values: `"LANGUAGES"` · `"FRAMEWORK"` · `"VERSIONS"` · `"DATABASE"`

### Adding a new project

```json
{
  "id": 7,
  "title": "RAG Document Q&A",
  "description": "Enterprise document question-answering system using LangChain, ChromaDB, and GPT-4 with 50k-token context.",
  "tag": "PYTHON",
  "tagColor": "#3776AB",
  "tagBg": "#f0f6ff",
  "likes": 0,
  "icon": "📚",
  "from": "#f59e0b",
  "to": "#ef4444"
}
```

The `from` and `to` values are the gradient start/end colours for the
project card banner. Pick any CSS colour string.

### Adding a new certification

```json
{
  "id": 7,
  "title": "TensorFlow Developer",
  "subtitle": "Professional Certificate",
  "provider": "Google",
  "icon": "🧠",
  "color": "#ff6f00",
  "bg": "#fff8f0",
  "year": "2025"
}
```

### Editing the education timeline

Each entry has a `"side"` field (`"left"` or `"right"`) that controls which
side of the timeline the card appears on:

```json
{
  "id": 4,
  "degree": "PhD in Artificial Intelligence",
  "shortDegree": "PhD",
  "institution": "IIT Madras",
  "year": "2025 – 2029",
  "description": "Research focus on multi-modal large language models.",
  "side": "right",
  "color": "#0ea5e9"
}
```

### Changing section gradient colours

Every section's background radial gradient is defined inline in each component
in the `style` prop of the `<section>` tag. For example in `About.jsx`:

```jsx
background: "radial-gradient(ellipse 70% 50% at 20% 80%, #f5f3ff 0%, transparent 55%), #fafafa"
```

Change `#f5f3ff` to any colour to shift the ambient glow.

---

## 11. Adding Your Real Resume

The Resume button in the Hero section uses a native HTML `download` attribute:

```jsx
<a href="/resume.pdf" download="Abisheik_Resume.pdf">
  DOWNLOAD RESUME
</a>
```

To make this work:

1. Export your resume as a PDF from Canva, Notion, Figma, Microsoft Word, or
   Google Docs
2. Rename the file to `resume.pdf`
3. Drop it into the `public/` folder:
   ```
   public/
   ├── favicon.svg
   └── resume.pdf   ← place it here
   ```
4. The download link will work automatically in dev and production

If you want a different filename on download, change the `download` attribute:
```jsx
download="John_Doe_Resume_2025.pdf"
```

---

## 12. Replacing the Profile Photo

Currently the profile uses an emoji (`🧑‍💻`) as the avatar. To use a real photo:

### Step 1 — Add your photo

Place your square profile photo in `public/`:
```
public/
├── favicon.svg
├── resume.pdf
└── profile.jpg    ← your photo (square, min 300×300px)
```

### Step 2 — Edit Hero.jsx

Find the avatar `<div>` (around line 55) and replace the emoji with an `<img>`:

```jsx
// BEFORE — emoji avatar
<div style={{ ...avatarWrapStyle }}>
  🧑‍💻
</div>

// AFTER — real photo
<div style={{ ...avatarWrapStyle, overflow: 'hidden', padding: 0 }}>
  <img
    src="/profile.jpg"
    alt="Abisheik"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    }}
  />
</div>
```

Recommended photo specs:
- **Format:** JPG or WebP
- **Size:** 400×400px minimum, square crop
- **File size:** Under 200KB (compress at squoosh.app)

---

## 13. Connecting a Real Contact Form

The contact form currently simulates a send with a `setTimeout`. To make it
actually send emails, integrate one of these services — all have free tiers:

### Option A — EmailJS (no backend needed, easiest)

1. Sign up at **https://emailjs.com** and create a service + template
2. Install the SDK:
   ```bash
   npm install @emailjs/browser
   ```
3. In `Contact.jsx`, replace the `handleSubmit` function:
   ```jsx
   import emailjs from '@emailjs/browser';

   const handleSubmit = async (e) => {
     e.preventDefault();
     setSending(true);
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           from_name: form.name,
           from_email: form.email,
           message: form.message,
         },
         'YOUR_PUBLIC_KEY'
       );
       setSent(true);
     } catch (err) {
       console.error(err);
       alert('Something went wrong. Please try again.');
     } finally {
       setSending(false);
     }
   };
   ```

### Option B — Formspree (zero code, just change the action)

1. Sign up at **https://formspree.io** and create a form
2. Get your endpoint URL: `https://formspree.io/f/YOUR_FORM_ID`
3. In `Contact.jsx`, change the `onSubmit` to a real fetch:
   ```jsx
   const handleSubmit = async (e) => {
     e.preventDefault();
     setSending(true);
     const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         name: form.name,
         email: form.email,
         message: form.message,
       }),
     });
     if (res.ok) setSent(true);
     setSending(false);
   };
   ```

### Option C — Resend + Vercel Serverless Function

For full control, create `api/contact.js` in your project root:

```js
// api/contact.js  (Vercel Serverless Function)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, message } = req.body;

  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'you@yourdomain.com',
    subject: `New message from ${name}`,
    html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  });

  res.status(200).json({ ok: true });
}
```

Then call `/api/contact` from your contact form's `handleSubmit`.

---

## 14. Component Reference

### Navbar.jsx

| Prop | Type | Description |
|---|---|---|
| `active` | `string` | The currently active section ID (e.g. `"home"`) |
| `onNav` | `(sectionId: string) => void` | Called when a nav link is clicked |

The navbar uses `window.scrollY` to add `.scrolled` styling after 24px of
scroll, and highlights the active link.

---

### Hero.jsx

No props. Self-contained. Key internals:

- **Terminal typewriter:** Uses `useEffect` with `setTimeout` chains to
  simulate per-character typing at 28ms/char for the command line and 14ms/char
  for output lines.
- **Resume download:** `<a href="/resume.pdf" download="Abisheik_Resume.pdf">`
  — place the file in `public/` for this to work.
- **Glass badge:** Absolute-positioned over the terminal with
  `backdrop-filter: blur(16px)`.

---

### About.jsx

No props. Key internals:

- **Circular progress ring:** Pure SVG with animated `stroke-dashoffset`.
  Triggers on mount after a 600ms delay.
- **Recharts LineChart:** `ResponsiveContainer` + `LineChart` with two
  `Line` series — `accuracy` (solid blue) and `val` (dashed purple).
- **Stats grid:** Hardcoded 2×2 grid inside the dark bio card. Edit those
  values directly in `About.jsx` around line 200.

---

### Education.jsx

Reads `db.educationTimeline`. Each item's `side` field is used to set
`flex-direction: row` vs `flex-direction: row-reverse`. On mobile
(< 640px) all cards stack vertically via a CSS media query in `index.css`.

---

### Skills.jsx

Reads `db.skills`. Filter state is local (`useState`). The active filter is
compared against each skill's `category` field. Adding new categories requires
adding the string to the `FILTERS` array at the top of the file:

```jsx
const FILTERS = ["SHOW ALL", "LANGUAGES", "FRAMEWORK", "VERSIONS", "DATABASE", "CLOUD"];
```

---

### Projects.jsx

Reads `db.projects`. Like counts are stored in local React state
(initialised from the DB) so they reset on page refresh. To persist likes,
connect to a backend or use `localStorage`:

```jsx
// Persist likes across refreshes
const [likes, setLikes] = useState(() => {
  const saved = localStorage.getItem('portfolio-likes');
  return saved
    ? JSON.parse(saved)
    : db.projects.reduce((acc, p) => ({ ...acc, [p.id]: p.likes }), {});
});

// Save whenever likes change
useEffect(() => {
  localStorage.setItem('portfolio-likes', JSON.stringify(likes));
}, [likes]);
```

---

### Certifications.jsx

Reads `db.certifications`. The **Download PDF** button is currently a styled
`<button>` with no href. To link real credential PDFs:

```jsx
// Change the button to an anchor tag:
<a
  href={cert.pdfUrl}          // add pdfUrl to your db.json entries
  download
  target="_blank"
  rel="noreferrer"
  className="dl-btn"
>
  ⬇ Download PDF
</a>
```

Then add `"pdfUrl": "/certs/oracle-cloud.pdf"` to each certification object
in `db.json` and place the PDF files in `public/certs/`.

---

### Contact.jsx

No props. Key internals:

- **File attachment:** Uses a hidden `<input type="file">` triggered by a
  styled `<label>`. The filename is displayed once picked.
- **Send simulation:** `setTimeout(1600ms)` swaps the form for a success state.
- **Success reset:** "Send Another" button resets all state back to the empty form.

Replace the `setTimeout` with a real API call as shown in
[Section 13](#13-connecting-a-real-contact-form).

---

## 15. Tailwind Custom Tokens

These custom values are defined in `tailwind.config.js` and available as
Tailwind classes throughout the project:

### Custom colours

```
bg-brand-500        → #3b82f6  (primary blue)
bg-dark             → #0f0f1a  (near-black)
bg-dark-card        → #1e1e2e  (terminal bg)
bg-dark-surface     → #181825  (terminal bar)
bg-dark-navy        → #0f172a  (bio card)
```

### Custom shadows

```
shadow-card         → 0 4px 20px rgba(0,0,0,0.06)
shadow-card-md      → 0 8px 32px rgba(0,0,0,0.08)
shadow-card-lg      → 0 20px 50px rgba(0,0,0,0.10)
shadow-blue         → 0 8px 28px rgba(59,130,246,0.30)
shadow-purple       → 0 8px 28px rgba(139,92,246,0.30)
```

### Custom backgrounds (gradient presets)

```
bg-gradient-hero    → hero section radial gradient
bg-gradient-about   → about section ambient glow
bg-gradient-skills  → skills section pink glow
bg-gradient-certs   → certifications teal glow
bg-gradient-contact → contact bottom blue glow
```

### Custom animations

```
animate-fade-in     → opacity 0→1 over 0.5s
animate-slide-up    → translateY(24px)→0 + fade
animate-slide-right → translateX(-24px)→0 + fade
animate-blink       → cursor blink 1s steps(1)
```

---

## 16. Troubleshooting

### `npm install` fails with EACCES (permission error)

On macOS/Linux, never use `sudo npm install`. Instead, fix npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```
Add the export line to your `~/.bashrc` or `~/.zshrc`.

---

### Port 5173 is already in use

```bash
# Kill whatever is using 5173
lsof -ti:5173 | xargs kill -9

# Or run Vite on a different port
npm run dev -- --port 3000
```

---

### Tailwind classes are not applying

1. Check that `index.css` has the three Tailwind directives at the top:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. Check that `tailwind.config.js` has the correct content paths:
   ```js
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
   ```
3. Make sure `index.css` is imported in `src/main.jsx`:
   ```jsx
   import './index.css'
   ```

---

### Recharts chart is not rendering / shows blank

Recharts requires `ResponsiveContainer` to have a parent with a fixed height.
If you move the About card, make sure its container has an explicit height:

```jsx
<div style={{ height: 200 }}>
  <ResponsiveContainer width="100%" height="100%">
    ...
  </ResponsiveContainer>
</div>
```

---

### Resume download does nothing

- Make sure `resume.pdf` is inside the `public/` folder (not `src/`)
- The path in the anchor must be `/resume.pdf` (root-relative, no `src`)
- In development, Vite serves `public/` at the root automatically
- In production, Vercel/Netlify copies `public/` contents to the site root

---

### Fonts not loading (Plus Jakarta Sans)

The fonts are loaded in `index.html` via Google Fonts. If you're working
offline or behind a firewall, download the fonts locally:

1. Go to **https://fonts.google.com/specimen/Plus+Jakarta+Sans**
2. Download the font family
3. Place `.woff2` files in `public/fonts/`
4. Replace the `<link>` in `index.html` with `@font-face` rules in `index.css`

---

### Build succeeds but deployed site is blank (white screen)

This almost always means a wrong `base` path in `vite.config.js`.

- **Vercel / Netlify:** `base` should be `'/'` (the default, you can omit it)
- **GitHub Pages:** `base` must match your repo name: `'/repo-name/'`

---

### Mobile hamburger menu not showing

The hamburger `<button>` has `display: none` by default and switches to
`display: flex` at ≤ 768px via this CSS in `index.css`:

```css
@media (max-width: 768px) {
  .nav-links  { display: none !important; }
  .hamburger  { display: flex !important; }
}
```

If it's not showing, check that your `Navbar.jsx` still assigns
`className="hamburger"` to the mobile menu button.

---

*Built with ❤️ — Happy coding, Abisheik!*
