# Trades Website Template

A fast, mobile-first, SEO-ready one-page website template for tradespeople and local service businesses: plumbers, electricians, builders, roofers and cleaners.

Built by [Victor Olaitan](https://github.com/volaitan) of [Wallasey WebWorks](https://wallaseywebworks.co.uk), from patterns used on real small-business client sites.

**Live demo:** https://volaitan.github.io/trades-website-template/

## Features

- **No build step and no frameworks.** Plain HTML, CSS and JavaScript that loads fast on any host.
- **Mobile-first.** Responsive layout, a hamburger menu and a sticky "Call now" bar on phones.
- **Local SEO built in.** Meta tags, Open Graph tags, a canonical link and `LocalBusiness` (schema.org) structured data.
- **Accessible.** A skip link, semantic landmarks, visible focus styles, ARIA on the menu and support for reduced motion.
- **Quote form.** Checks the required fields and posts to a form service such as Formspree. If no service is set, it opens the visitor's email app instead.
- **One place to rebrand.** Change the colours and font in the `:root` block of `styles.css`.

## Sections

Header → Hero with call-to-action → Services → Why us → Areas covered → Reviews → Quote form → Footer

## Using it for a client

1. Clone the repo:
   ```bash
   git clone https://github.com/volaitan/trades-website-template.git
   ```
2. In `index.html`, replace the business name, phone number, email, areas and services. Search for `example` and `0000` to find every placeholder.
3. Update the JSON-LD structured data block in the `<head>`.
4. Change the brand colours at the top of `styles.css`.
5. Replace the placeholder reviews with the client's real reviews.
6. Optional: set `data-endpoint` on the form to a Formspree (or similar) URL.
7. Deploy to GitHub Pages, Netlify or any static host.

## Project structure

```
├── index.html        # Page content and SEO markup
├── styles.css        # All styling; brand variables at the top
├── script.js         # Mobile menu and quote form
└── assets/
    └── favicon.svg
```

## Licence

MIT. Free to use and adapt.
