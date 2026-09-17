# riverwood.town

The public landing page for **Riverwood**, a small social federation community at [riverwood.town](https://riverwood.town).

Riverwood provides two connected services:

- [Mastodon](https://social.riverwood.town) for social posts and federation
- [Matrix](https://chat.riverwood.town) for private and community chat

Mastodon is the shared identity provider, so members begin with one Mastodon account and can use the same login for Matrix.

## The website

The site is a lightweight, responsive landing page built with plain HTML, CSS, and JavaScript. Its illustrated town, autumn palette, typography, and day/night presentation draw inspiration from the atmosphere of *Night in the Woods* while using original code and artwork made for Riverwood.

The website includes:

- A responsive illustrated cover with automatic and manual day/night modes
- Direct links to the Mastodon and Matrix services
- A prominent explanation of the shared account system
- About, legal notice, website privacy, and Matrix privacy pages
- Social embed metadata and reusable Riverwood brand assets
- Matrix delegation and discovery documents
- Mastodon WebFinger discovery through a Cloudflare Worker
- MatrixRTC discovery for the Riverwood LiveKit service

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Landing page and illustrated town scene |
| `styles.css` | Landing-page layout, illustration, themes, and responsive styles |
| `script.js` | Theme switching and small interactive behavior |
| `about.html` | About page and legal notice |
| `privacy.html` | Privacy information for the public website |
| `matrix-privacy.html` | Privacy information for the Matrix service |
| `subpage.css` | Shared styles for the information pages |
| `.well-known/matrix/` | Matrix client, federation, and support discovery documents |
| `worker.js` | Mastodon discovery redirects and static-asset fallback |
| `wrangler.jsonc` | Cloudflare Worker and static-assets configuration |
| `_headers` | Response headers for the Matrix discovery documents |
| `brand/` | Reusable SVG, PNG, and WebP Riverwood icons |
| `style-guide.md` | Visual direction, palette, typography, and illustration notes |

## Local development

For the complete Worker behavior, including WebFinger redirects, run the project with Wrangler:

```sh
npx wrangler dev
```

For static page work only, any local web server is sufficient:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deployment

The production site is configured as a Cloudflare Worker with static assets. Deploy it from the repository root:

```sh
npx wrangler deploy
```

The Worker handles these dynamic discovery routes and forwards them to `social.riverwood.town` while preserving request query parameters:

- `/.well-known/webfinger`
- `/.well-known/host-meta`
- `/.well-known/nodeinfo`

The static Matrix discovery files remain available beneath `/.well-known/matrix/`.

After deployment, WebFinger can be checked with:

```sh
curl -iL 'https://riverwood.town/.well-known/webfinger?resource=acct:USERNAME@riverwood.town'
```

Replace `USERNAME` with an existing local Mastodon username. A successful request ends with a JSON WebFinger document from `social.riverwood.town`.

## Brand assets

The `brand/` directory contains reusable versions of the Riverwood tree mark:

- `riverwood-icon-512.png` — amber-background PNG
- `riverwood-app-icon.webp` — amber-background lossless WebP
- `riverwood-favicon-transparent.webp` — transparent lossless WebP
- `riverwood-icon.svg` and `riverwood-favicon-transparent.svg` — scalable sources

The original browser favicon remains `favicon.svg` because it can adapt its color to the browser’s preferred theme.

## AI-assisted development disclosure

This website was developed with substantial assistance from **OpenAI Codex**. AI assistance was used to draft and revise HTML, CSS, JavaScript, Cloudflare configuration, documentation, and portions of the website copy. The Riverwood maintainer supplied the creative direction, reference material, service configuration, legal details, and iterative feedback, and reviewed the resulting work before publication.

AI-generated suggestions can contain mistakes. The maintainer remains responsible for reviewing the code, testing deployments, keeping service information current, and obtaining professional advice where legal or operational accuracy matters. No claim is made that AI assistance replaces a security audit or legal review.

The public website does not use an AI service at runtime. Visiting `riverwood.town` does not send page content, form data, or visitor information to OpenAI as part of this project.

## Design attribution

*Night in the Woods* is the work of its respective creators and rights holders. Riverwood is an independent community project and is not affiliated with or endorsed by the game’s creators, publishers, or rights holders.
