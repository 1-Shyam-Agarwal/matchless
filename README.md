# Matchless Corporate Gifting — Website

A premium corporate gifting **catalogue and enquiry** website.

> **This is not an e-commerce site.** There is no cart, no checkout, no payment
> gateway and no "Buy Now" anywhere. Every product leads to *Enquire Now*,
> *Request Pricing* or *Get a Quote*. Customers contact you; you quote and
> close the order offline.

Built with Next.js (React) and exported as plain static HTML, so it can be
hosted anywhere — Vercel, Netlify, Hostinger, GoDaddy, cPanel, S3 — with no
server to maintain.

---

## 1. Do this first — your contact details

Open **`src/data/site.js`**. Everything in `[SQUARE BRACKETS]` is a placeholder
that has not been filled in yet:

```js
phone:        '[ADD PHONE NUMBER]',
phoneE164:    '',              // '+919876543210'  -> makes "Call Us" work
whatsappE164: '',              // '919876543210'   -> makes WhatsApp work
email:        '[ADD EMAIL ADDRESS]',
location:     '[ADD CITY / LOCATION]',
hours:        '[ADD BUSINESS HOURS]',
```

The site checks these automatically:

- **Filled in** → the phone, WhatsApp and email buttons appear and work, across
  the header, footer, contact page, every product page and the mobile bar.
- **Still a placeholder** → the site shows a neutral, quiet note instead of a
  dead link. Nothing looks broken while you gather the details.

`phoneE164` and `whatsappE164` must include the country code. WhatsApp takes
digits only, **no `+`**.

---

## 2. Where the enquiry form goes

Right now the form validates, shows the thank-you message, and then offers the
visitor a one-tap **"Send on WhatsApp"** / **"Send by Email"** button carrying
everything they typed — so no enquiry is lost even before you set anything up.

To also receive submissions automatically in your inbox:

1. Create a free endpoint at [formspree.io](https://formspree.io) or
   [web3forms.com](https://web3forms.com).
2. Paste the URL into `formEndpoint` in `src/data/site.js`.

That is the only change needed. The handoff buttons then disappear because the
form posts directly.

---

## 3. Running and building

```bash
npm install      # once
npm run dev      # preview at http://localhost:3000
npm run build    # produces the `out/` folder
```

**To publish:** upload the entire contents of **`out/`** to your web host, or
connect the project to Vercel/Netlify (they run `npm run build` for you).

Before you go live, set your real domain in `site.url` (`src/data/site.js`) —
it is used for canonical URLs, `sitemap.xml` and social sharing previews.

---

## 4. Adding and editing products

All product data lives in **one file**: `src/data/products.js`. Nothing else
needs to change — the catalogue page, every category page, the homepage
featured strip, the filters and the individual product pages are all generated
from it.

### To add a product

1. Save the photo to `public/images/products/<slug>.jpg`
   (landscape 4:3, about 1100 × 825 px).
2. Copy an existing block in `products.js`, paste it, and edit the fields.
3. `slug` must be unique and lowercase-with-hyphens — it becomes the URL
   `/products/<slug>/`.

```js
{
  slug: 'my-new-gift-set',
  name: 'My New Gift Set',
  image: `${P}/my-new-gift-set.jpg`,
  categories: ['corporate-gift-hampers', 'employee-gifts'], // first = main
  occasions: ['festive-gifting', 'client-appreciation'],
  giftType: 'Gift Set',                    // powers the "Gift Type" filter
  short: 'One line for the product card.',
  description: 'A paragraph for the product page.',
  features: ['What is in the set', 'Materials and finish'],
  customization: ['Logo debossing', 'Pen engraving'],
  tags: ['Two-piece set'],
  featured: true,                          // show on the homepage
  moq: null,                               // or 'Minimum 50 units'
},
```

Category slugs come from `src/data/categories.js`, occasion slugs from
`src/data/occasions.js`. Use those exact strings or the product will not appear
under them.

Adding 50+ products needs no design work — just more blocks in this file.

### To add a category

Add a block to `src/data/categories.js` and drop a 900 × 675 image at
`public/images/categories/<slug>.jpg`. Set `featured: true` to surface it on the
homepage.

### Other editable content

| What | File |
| --- | --- |
| "Why Choose Matchless" points | `src/data/content.js` → `whyMatchless` |
| The 5-step process | `src/data/content.js` → `processSteps` |
| Customization capabilities | `src/data/content.js` → `customCapabilities` |
| About page points | `src/data/content.js` → `aboutPoints` |
| Navigation links | `src/data/site.js` → `navLinks` |
| Pre-filled WhatsApp messages | `src/data/site.js` → `whatsappMessages` |

---

## 5. Replacing the images with your own photographs

Every image is a plain `.jpg` in `public/images/`. **Overwrite the file, keep
the filename** — no code changes needed.

```
public/images/
  brand/       matchless-logo.png          (transparent, for light backgrounds)
               matchless-logo-original.png (the original file you supplied)
  hero/        homepage and section imagery
  categories/  one per category slug        (900 × 675)
  products/    one per product slug         (1100 × 825)
```

The current photography was extracted from your own **Prestige Series**,
**Signature Series** and gift-set catalogues, so it shows real products. When
you have your own studio shots, drop them in over the top.

**Note on sourcing:** some images came from supplier catalogues (Anita Diaries,
United). Confirm you are entitled to publish those before the site goes live,
or swap them for your own photographs. Images showing third-party company logos
were deliberately excluded so the site never implies a client relationship you
have not agreed.

---

## 6. Project structure

```
src/
  app/                    pages (one folder = one URL)
    page.jsx              /
    about/                /about/
    categories/           /categories/  and  /categories/[slug]/
    products/             /products/    and  /products/[slug]/
    custom-gifting/       /custom-gifting/
    contact/              /contact/
    quote/                /quote/
    globals.css           design tokens, base styles, buttons, forms
    components.css        component styles
    sitemap.js            generates sitemap.xml
    robots.js             generates robots.txt
  components/             reusable UI (Navbar, Footer, ProductCard, …)
  data/                   >>> all editable content lives here <<<
  lib/seo.js              page metadata + structured data helpers
public/                   images, favicons — served as-is
```

---

## 7. Brand and design system

Colours are taken from the logo and defined once at the top of
`src/app/globals.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `--navy-800` | `#15233f` | headings, navigation, dark sections |
| `--navy-900` | `#0d1728` | footer, top bar |
| `--gold-400` | `#d9a353` | buttons, rules, accents |
| `--gold-600` | `#8f5d1c` | small gold text (accessible on cream) |
| `--cream` | `#faf7f1` | alternate section backgrounds |

Change a value there and it updates across the whole site. Typography is
Plus Jakarta Sans (headings) and Inter (body), self-hosted at build time.

---

## 8. What has been checked

- **51 static pages** build and export cleanly.
- **No broken internal links and no missing images** across the whole export.
- **No horizontal scrolling** at 360 px, 390 px, 768 px or desktop.
- **26/26 interactive tests pass**: form validation (required fields, email
  format, success confirmation), category/occasion/type filters, search,
  filter reset, deep links, mobile drawer open/close, and no JavaScript errors
  on any page.
- **Accessibility**: colour contrast meets WCAG AA for all body text, visible
  focus outlines, labelled form fields with error messages tied to inputs,
  semantic headings with no skipped levels, alt text on every image, skip link,
  and the closed mobile menu is `inert` so it cannot be tabbed into.
- **SEO**: unique titles and meta descriptions per page, canonical URLs, Open
  Graph and Twitter cards, `sitemap.xml`, `robots.txt`, and Organization,
  Product and BreadcrumbList structured data. Product schema deliberately
  carries **no invented price** — it points to the quote page instead.
- **Enquiry-only verified**: an automated check across every page confirms the
  words *add to cart, buy now, checkout, shopping cart, pay now* appear
  nowhere, and there are no payment inputs.
- **Content honesty**: no invented clients, testimonials, statistics, awards,
  years of experience, addresses or partnerships. Product copy describes only
  what is visible in your own catalogue photography.

---

## 9. Still to supply

- Phone, WhatsApp, email, location, business hours → `src/data/site.js`
- Real domain → `site.url`
- Form endpoint (optional) → `formEndpoint`
- Your own product photography → `public/images/products/`
- Company story / credentials for the About page → `src/data/content.js`
- Social profile links → `contact.linkedin`, `contact.instagram`
