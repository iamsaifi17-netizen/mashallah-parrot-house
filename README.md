# MashAllah Parrot House — Website

A premium, production-ready e-commerce-style website for MashAllah Parrot House (Karachi, Pakistan), built with Next.js, TypeScript, and Tailwind CSS.

This guide assumes **no coding experience**. Follow it top to bottom.

---

## 1. What's included

- Home, About, Shop, Product Detail, Gallery, Bird Care Blog, FAQ, and Contact pages
- Search, category filters, and sorting on the Shop page
- WhatsApp "Book Now" buttons on every bird listing (pre-fills a message with the bird's name and price)
- A simple `/admin` dashboard to add, edit, and delete birds and reviews (see section 8 — important limitations)
- Real photos of both owners used in the About and Home pages
- SEO metadata, responsive design, and accessibility basics (keyboard focus states, alt text)

### About the bird photos
You uploaded real photos of **yourselves** (Atta ur Rehman and Muhammad Imran), which are used throughout the site. You did **not** upload individual photos of your birds, cage setups, or shop, so those spots currently show an elegant placeholder graphic instead of a real photo. Nothing is broken — see section 5 for how to drop in real photos in two minutes each.

---

## 2. Installing the project on your computer

1. Install [Node.js](https://nodejs.org) (choose the "LTS" version) — this only needs to be done once.
2. Unzip the project folder anywhere on your computer.
3. Open a terminal (Command Prompt on Windows, Terminal on Mac) inside that folder.
4. Run:
   ```
   npm install
   ```
   This downloads everything the website needs. It only needs to be run once (and again if you ever delete the `node_modules` folder).
5. Run:
   ```
   npm run dev
   ```
6. Open your browser to **http://localhost:3000** — your website is now running on your computer.

---

## 3. Editing text on the website

Almost all the text lives in one file: **`lib/data.ts`**. Open it in any text editor (even Notepad, though a free tool like [VS Code](https://code.visualstudio.com) is easier to read).

- **Bird listings** — under `export const parrots = [ ... ]`. Each bird is one block between `{` and `}`.
- **Categories** — under `export const categories = [ ... ]`.
- **Customer reviews** — under `export const reviews = [ ... ]`.
- **Blog posts** — under `export const blogPosts = [ ... ]`.
- **FAQs** — under `export const faqs = [ ... ]`.

Business details (phone, WhatsApp, email, hours) are in **`lib/utils.ts`** near the top, inside `export const BUSINESS = { ... }`.

After editing any file, save it — if `npm run dev` is running, the site updates automatically in your browser.

---

## 4. How to change bird information

Open `lib/data.ts` and find the bird by its `name`. Each bird has fields you can edit directly:

```
price: 185000,        // change the number, no commas
age: "8 months",
gender: "Male",
colour: "Grey with red tail",
health: "Excellent — vet checked on arrival",
vaccinated: true,     // or false
availability: "In Stock",   // "In Stock" | "Booked" | "Coming Soon"
description: "Rehan is a young Congo African Grey...",
```

To **add a brand-new bird**, copy an existing bird's whole block (from `{` to `}`), paste it as a new entry in the list, give it a unique `slug` (no spaces, all lowercase, e.g. `"cockatiel-milo"`), and update its details.

To **remove a bird**, delete its entire block.

You can also do all of this without touching code, using the **Admin Dashboard** — see section 8.

---

## 5. How to replace images

1. Take or choose your photo (JPG or PNG, ideally at least 1000px wide).
2. Place it inside the matching folder in `public/images/`:
   - Bird photos → `public/images/parrots/`
   - Gallery photos → `public/images/gallery/`
   - Owner photos → `public/images/owners/`
3. In `lib/data.ts`, update the bird's `images: [...]` array to point to your new file, e.g.:
   ```
   images: ["/images/parrots/rehan-1.jpg", "/images/parrots/rehan-2.jpg"],
   ```
4. Save — the real photo now shows instead of the placeholder graphic.

To replace an owner's photo, replace the file in `public/images/owners/` (keep the same filename) or update the path in `app/page.tsx` and `app/about/page.tsx`.

---

## 6. How to update prices

Same as bird info (section 4) — change the `price:` number for that bird in `lib/data.ts`, or use the Admin Dashboard.

---

## 7. How to add new bird categories

Open `lib/data.ts`, find `export const categories = [ ... ]`, and copy an existing category block:

```
{
  slug: "cockatoo",
  name: "Cockatoo",
  blurb: "Striking crested parrots known for their affectionate nature.",
  image: "/images/parrots/cockatoo.jpg",
},
```

Then set that same `slug` (e.g. `"cockatoo"`) as the `category` field on any bird that belongs to it.

---

## 8. Admin Dashboard — what it can and can't do

Visit **`/admin`** (e.g. `http://localhost:3000/admin`, or `yourdomain.com/admin` once live). The default passcode is:

```
parrot2026
```

**Change this before launch** by opening `app/admin/page.tsx` and editing the `ADMIN_PASSCODE` value near the top.

**What it does:** lets you add, edit, and delete bird listings and customer reviews through a form, right in the browser — no code needed.

**Important limitation:** this dashboard saves changes in your **current browser only** (using a technology called `localStorage`). It is perfect for setting up your content before launch, but:
- Changes made in the admin dashboard on your laptop won't appear for a customer browsing on their phone.
- Clearing your browser data will erase admin changes (bird listings from `lib/data.ts` itself are unaffected and will still show).

**Making the admin dashboard live for everyone:** to have real, shared, multi-device admin editing (the kind a growing business eventually wants), you need a database. The simplest free option for a site like this is [Supabase](https://supabase.com) (a free Postgres database) or [Vercel Postgres](https://vercel.com/storage/postgres). This requires a developer to:
1. Create a database with a `parrots` table matching the fields in `lib/data.ts`.
2. Replace the `lib/adminStore.ts` localStorage calls with database read/write calls.
3. Add real login (e.g. a single admin email/password via [Clerk](https://clerk.com) or [NextAuth](https://next-auth.js.org)) instead of the passcode.

If you'd like, this is a well-scoped follow-up project — the current structure (`lib/data.ts` as the single source of bird data) was built specifically to make this upgrade straightforward later.

**Managing bookings:** the site currently routes every "Book Now" and contact form into a pre-filled WhatsApp message, which is the fastest way for a two-person business to receive and respond to real inquiries without missing anything in a dashboard. A formal bookings table can be added at the same time as the database upgrade above.

---

## 9. Deploying the website online

### Step A — Put the project on GitHub
1. Create a free account at [github.com](https://github.com).
2. Create a new repository (e.g. `mashallah-parrot-house`).
3. Follow GitHub's on-screen instructions to upload this project folder ("...or push an existing repository from the command line").

### Step B — Deploy on Vercel (recommended, made by the creators of Next.js)
1. Go to [vercel.com](https://vercel.com) and sign up (free).
2. Click "Add New Project" and select your GitHub repository.
3. Leave all settings as default and click **Deploy**.
4. In a couple of minutes, you'll get a live link like `mashallah-parrot-house.vercel.app`.

### Step B (alternative) — Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and sign up (free).
2. Click "Add new site" → "Import an existing project" → connect your GitHub repository.
3. Build command: `npm run build`. Publish directory: `.next`.
4. Click **Deploy site**.

### Step C — Connect your own domain (e.g. mashallahparrothouse.pk)
1. Buy a domain from any registrar (e.g. Namecheap, GoDaddy, or a local Pakistani registrar).
2. In Vercel or Netlify, go to your project's **Domain settings** and add your domain.
3. They'll show you 1–2 DNS records to add. Log into your domain registrar, find "DNS settings," and add those records exactly as shown.
4. Wait 10 minutes to a few hours for DNS to update — your domain will then show your website.

---

## 10. Project structure (for developers)

```
app/                  Next.js pages (App Router)
  page.tsx            Home
  about/              About Us
  shop/               Shop grid + [slug] product detail
  gallery/            Gallery
  blog/               Bird Care Blog + [slug] posts
  faq/                FAQ accordion
  contact/            Contact form + business info
  admin/              Admin dashboard (localStorage-based)
components/           Reusable UI components (Navbar, Footer, ParrotCard, etc.)
lib/
  data.ts             ALL site content: parrots, categories, reviews, blog, FAQ
  utils.ts            Business info (phone/WhatsApp/email/hours) + helpers
  adminStore.ts        localStorage persistence for the admin dashboard
public/images/        All images, organized by type
```

Built with: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.

---

## 11. Design system

| Token | Value |
|---|---|
| Emerald Deep | `#0B4630` |
| Emerald | `#146B45` |
| Forest | `#0F3D2A` |
| Gold | `#C9A24B` |
| Beige | `#F4EEDD` |
| Charcoal | `#1B1B18` |
| Display font | Fraunces (serif) |
| Body font | Manrope (sans-serif) |

All colours are defined once in `tailwind.config.ts` — change a value there to re-theme the entire site.

---

## 12. Support

For code-level changes beyond this guide, any freelance Next.js/React developer will be able to work with this codebase — it follows standard, well-documented conventions throughout.
