# Design Language: "Possum Springs" — Inspired by Night in the Woods
### v2 — revised after reference review

The game's identity isn't one mood, it's a *contrast engine*: warm autumn day against electric, slightly threatening night. And its UI doesn't look designed — it looks found, hand-made, a little broken. This version leans into both of those instead of smoothing them into one cozy palette.

---

## 1. Color — two palettes, not one

The single biggest miss in v1: NITW's whole visual identity runs on the **swing between day and night**, not a single dusk tone. A real implementation should let sections (or a toggle) shift between these.

### Night palette (from the title/cover art)
| Token | Hex | Use |
|---|---|---|
| `night-black` | `#05070C` | Deepest background |
| `night-sky` | `#0D1B2E` | Primary night background |
| `night-glow-cyan` | `#8FE3E0` | Glowing title text, moonlight, cold highlights |
| `night-red` | `#6B1F2A` | Ground/foreground silhouettes — the game uses a **red-brown ground**, not purple |
| `night-red-deep` | `#3D1017` | Darkest foreground shadow |

### Day / autumn palette
| Token | Hex | Use |
|---|---|---|
| `day-amber` | `#E8834E` | Sunlight, porch lights, warm accents |
| `day-coral` | `#D66B6B` | Falling leaves, secondary accent |
| `day-cream` | `#F0E6D2` | Text on dark, paper tones |
| `day-dusk-purple` | `#2B2140` | Transitional sky (sunset only — not a resting state) |

**Rule change from v1:** don't let the purple dusk tone sit as the "default" background anymore — it's a five-minute transition state between the two real palettes, day and night. Most of the site should commit to one or the other per section, with an actual transition (not a static gradient) marking the handoff — a scroll-triggered or toggled sky change works well.

---

## 2. Typography — same fonts, rougher treatment

- **Display:** still a jagged/hand-lettered feel (Caveat, Kalam, or for closer accuracy, something with torn/spiky edges like the in-game logo — consider adding a subtle clip-path "torn" mask behind display text rather than relying on the font alone).
- **Body / UI:** keep Quicksand for readability, but menus and diegetic UI elements should switch to a **mismatched, photocopy-flyer combination** — a bold slab or serif headline over a lighter serif body, like a hand-typed notice. This is deliberate inconsistency, not polish.
- Glow matters as much as the letterform: the title treatment uses a soft outer glow (cyan on night sections, amber on day sections) — flat colored type alone won't read as on-brand.

---

## 3. UI Language — diegetic and hand-made, not modern-overlay

This is the biggest addition from v1. NITW's options and menus don't look like software — they look like **found objects**: a photocopied page, a note pinned to something, a hand-drawn circle annotating one setting, a wry quote from a side character. Apply that logic to real UI:

- **Menus as objects, not panels.** Give settings/nav a slightly rotated, paper-toned card with a drop texture (photocopy grain, slightly warped edges) instead of a clean rounded modal.
- **Hand annotation as a UI affordance.** A circled option, an arrow, a scribble — these can mark "recommended" or "new" instead of a badge or pill.
- **Voice in the chrome.** Real copy, not labels — a settings header can carry a joke or a piece of character voice the way NITW's does ("Options... they're good!" –Dr. Hank), rather than just saying "Settings."
- **Dialogue as spatial UI.** If you ever need a choice/decision pattern on the site (e.g. a "choose your path" nav), borrow the game's carousel-in-a-speech-bubble pattern — options appear directly above/near the relevant content, not on a separate global menu bar.
- **Torn/spiky containment shapes.** The title card is bounded by a jagged, torn-paper silhouette, not a rectangle or rounded card. Use this specifically for hero/title moments — it's the single most recognizable shape in the game's UI.

---

## 4. A living world — ambient motion is the point

NITW's town feels inhabited through small, constant background motion, not big interactive flourishes:

- **Blinking lights** — the radio tower has a slow, irregular blink (not a clean metronomic pulse — real lights drift out of sync).
- **Traffic and pedestrians** — cars and background characters cross the parallax layers on their own timers, indifferent to the viewer, reinforcing that this is a lived-in place, not a stage set for the visitor.
- **Broad, readable depth planes** — a sky, one distant land silhouette, a town strip, and a foreground are enough. Clouds, falling leaves, and a distant window flicker can move inside those planes; motion should not require extra scenery layers.
- Keep all of this *ambient*, never demanding attention — it should reward noticing, not interrupt reading.

---

## 5. Shape & Motif (carried over, refined)

- Flat silhouettes for rooftops, power lines, hills — unchanged from v1, this was correct.
- **Town scenes use two to four depth layers maximum.** Compose them like a side-on stage, with a continuous street and large overlapping shapes. Do not build a panoramic stack of mountain ranges, rivers, tree fields, and scattered buildings.
- **Ground is red-brown at night, not purple** — correct this specifically; the purple was a v1 error.
- Circles as light sources — porch lights, tower beacons, moons — still correct, now split by palette (amber glow by day, cyan-white glow by night).
- Border radius stays small (4–8px) for cards, but **title/hero containers use the torn-paper silhouette instead of a rounded rectangle.**

---

## 6. Voice & Copy (refined)

- Still conversational and wry — but now specifically: **let the UI itself have a character's voice**, the way "Options" does. A footer, an empty state, a settings panel are all opportunities for a small joke or aside, not just a neutral label.

---

## 7. Motion

- Slow, floaty easing for foreground/content — unchanged.
- **Ambient background motion is now a first-class citizen**, not just a "signature moment": tower blink, drifting clouds, a car passing every so often, timed independently so nothing feels choreographed to the viewer.
- Day → night transition (if used) should feel like real dusk: gradual, a few minutes of purple handoff, not a hard cut.

---

## 8. What to avoid (updated)

- A single "dusk purple" background treated as the default resting state — it's a transition, not a home base.
- Clean rounded modal/card UI for anything meant to feel diegetic (menus, settings, choices) — these should look hand-made.
- Perfectly synchronized ambient animation (blinking lights, traffic) — real towns are messier than that.
- Losing the night palette's electric cyan-on-black-red contrast by softening it into pastel purple.


## Riverwood implementation notes

The landing page translates the reference into an original Pacific Northwest town, rather than recreating Possum Springs (a Rust Belt setting). The cover follows the game's side-on, stage-like town compositions using four visual depth planes: a luminous sky, two crisp overlapping mountain silhouettes, cropped rear façades, and an inhabited street that meets a level sidewalk and road. Mountain peaks should rise above the roofs in the open gaps while remaining behind every building. Tall buildings enter from the edges instead of forming a distant skyline. Buildings that meet a viewport edge continue beyond it as complete façades; avoid miniature gables or narrow fragments that have no plausible street-level scale. Entrances on the same visual plane share a common baseline and comparable human scale. Low HVAC boxes and an occasional capped chimney break up long rooflines without becoming another scenic layer. A slim lattice radio tower sits on the clear far-left rear roof, outside the tree silhouette. Its warmer daytime line and blue-gray night line retain enough contrast to show the lattice without pulling it into the foreground. Every horizontal bar terminates on the sloping outer legs, and each diagonal connects the shared corners of one complete lattice bay. The beacon and both legs remain inside the composition at every supported width; the beacon stays muted during the day and slowly pulses red at night. The central tree uses one continuous, broad canopy mass behind a strongly forked trunk. Scale the whole tree around its ground contact so its outer limbs remain inset from the scene edges and its tallest branch stays below the primary copy. Its limbs narrow in clear stages—heavy structural branches, medium offshoots, then a few fine terminal twigs—and follow long curves rather than short angular stubs. Sparse leaves sit near selected tips. Slim utility poles carry one naturally sagging cable with small insulators. The fence uses evenly spaced, broad pointed boards, two horizontal rails, sturdy posts, and one braced gate so its silhouette remains legible at mobile size. The high-mounted curved street lamp has a small, flat head. Its lens stays muted by day; at night the warm bulb gains a restrained glow and a short, softly fading cone beneath it. Together with masonry patterns, cyan daytime windowpanes, properly scaled entrances, simple storefront signs, and a few curved leaves, these details make the street feel close and inhabited.

Cover copy sits over a soft, palette-matched radial haze so the illustration can remain layered without reducing text contrast. The primary “Make yourself at home” button appears only at mobile widths, where the compact layout benefits from an immediate call to action; desktop visitors reach the service choices directly below the cover.

On mobile, avoid shrinking the entire desktop cover into a narrow strip. Give the hero more vertical space, enlarge the town illustration beyond the viewport width, and crop its outer façades deliberately. Keep the copy in a clear upper region and the town in a dedicated lower region. Mobile uses one continuous CSS sky across the whole hero; hide the SVG's duplicate sky while retaining its sun, stars, buildings, and street. Let the illustration overflow its internal town region so tall branches are never clipped at an artificial horizontal boundary. The single background light uses an oversized radial gradient that fades beyond the text area without visible seams.

On wide screens, let the cover height grow with its width so the bottom-anchored town does not crop away the sky or the top of the radio tower. Night skies use sparse points and small four-point stars with varied timing; each star changes brightness and scale independently, producing a quiet sparkle rather than a synchronized flash.

Utility text must remain readable rather than becoming decorative texture. Divider labels use roughly 10px type on desktop and no less than 7.5px in the narrowest layout; footer copy uses 12px type, with an 11px minimum for the mobile link.
The three community-value labels in the about section use 12px medium-weight text so their small icons do not force the words into caption sizing.

The visual review draws on the game's environmental compositions and the creators’ discussion of building a town that feels like home: [Road to the IGF: Infinite Fall’s Night in the Woods](https://www.gamedeveloper.com/business/road-to-the-igf-infinite-fall-s-i-night-in-the-woods-i-) and [Scott Benson’s GDC design postmortem](https://www.gdcvault.com/play/1024984/Nuke-Possum-Springs-A-Night). Design choices here are our interpretation, not official game guidelines.

For Riverwood, use Fraunces for expressive, slightly irregular editorial headlines and DM Sans for readable navigation and body text, with Georgia/sans-serif fallbacks. Keep the main reading surface calm; reserve illustrative detail for the cover. Day commits to a late-autumn palette: burnt-orange sky, brick red buildings and ground, plum silhouettes, cream signs, and golden windows. Night commits to the guide's electric contrast: near-black and navy sky, cyan highlights, warm windows, and red-brown ground. Purple belongs in the day scene only as a shadow color, rather than becoming a dusk background.

The system color preference applies on first visit. A pill switch in the cover's top-right corner stores an explicit choice locally; the Riverwood mark sits alone in the opposite corner, without a separate header. Night mode changes the windowpanes from cool cyan to warm amber and adds a restrained glow. Theme changes take less than a second; a multi-minute transition would delay a functional control. A handful of curved leaves fall on separate timings and paths, while night stars move independently; reduced-motion preferences disable animation and leave a few leaves resting in place.

Implementation: static index.html, styles.css, and script.js; no build step. Original SVG scenery remains editable and recolors with CSS variables. Google Fonts is optional; fallback fonts keep the page usable if unavailable. Service URLs are centralized in script.js and also supplied as HTML fallbacks. The site explains existing shared authentication; it does not implement the authentication backend.
