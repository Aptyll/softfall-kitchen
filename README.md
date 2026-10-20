# Softfall Kitchen

Watch [Softfall](https://store.steampowered.com/app/5244550/Softfall/) get made: every idea, every
round of art, every pick. Like an open kitchen, the cooking happens where people can see it.

Plain HTML, no build step, no packages. Open `index.html` to preview it; GitHub Pages serves it.

## How it works

- `kitchen.js` holds everything the page shows: one entry per **dish** (one feature, look or Short).
- A dish has a **stage**: `board` (an idea), `cooking` (being made), `served` (in the game).
- A cooking or served dish has **rounds**: one sheet of options Noah looked at, its picture, and
  what came of it. Rejected rounds stay: they are the point.
- `app.js` draws two views from that list: the board (`#/`) and one dish (`#/<id>`).
- Art lives in `art/<dish id>/`.

## Adding to it

**A new idea:** add `{ id, name, stage: 'board', line }` to `kitchen.js`.

**A new round** (after Noah has seen a concept sheet or a Short storyboard):
1. Copy the sheet to `art/<dish id>/round-<n>.png` (PNG, saved with optimize; keep it under 1.5 MB).
2. Add `{ name: 'Round <n>', date: 'YYYY-MM-DD', img, note }` to the dish's `rounds`. The note is
   one or two short sentences: what the round tried and what Noah picked, or that none was picked.
3. If the dish was on the board, move it to `cooking` and give it a `cover` (a crop of real art).

**Serving a dish:** only when Noah says so. Set `stage: 'served'`, its `patch`, and add an
`In the game` round (`served: true`) with a real in-game screenshot.

**A Short:** a round with `video` (a web copy: 540x960 H.264, `-movflags +faststart`, under 3 MB),
`poster`, and `link` to YouTube.

## Rules

- Only what Noah has seen. No drafts he never looked at, no code-only work, no stats.
- Real art only, at whole-pixel scales (`image-rendering: pixelated`). Anything staged says so.
- No blood. Say "bots", never "AI".
- Write like the game: short, plain, present tense.
