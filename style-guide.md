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
- **Parallax depth, always moving slightly** — even without scroll, a barely-perceptible drift in the back layers (clouds, birds, a distant window light flicker) sells "the town keeps going whether you're watching or not."
- Keep all of this *ambient*, never demanding attention — it should reward noticing, not interrupt reading.

---

## 5. Shape & Motif (carried over, refined)

- Flat silhouettes for rooftops, power lines, hills — unchanged from v1, this was correct.
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
