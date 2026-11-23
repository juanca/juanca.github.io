# juanca.github.io

Juan Carlos's personal site and the marketing pages for his apps, served by
GitHub Pages straight from `main` (legacy build, no build step). **Anything
merged to `main` is public within a minute**, so changes go on a branch and
through a PR for review. No AI attribution in commits.

## Layout

- `index.html`: the home page, one project card per app (`<app>/card.png`,
  1600×600).
- `<app>/`: one folder per app (`curbwise/`, `conjure/`, `jyn/`), each a
  plain HTML page with inline CSS plus `privacy.html` and `support.html`
  (the App Store needs both URLs), `icon.png`, `hero.png` (1200×630 link
  preview) and `screenshots/`.
- `sitemap.xml`: add every new public page.

## Per app

- **curbwise**: dark page; screenshots in light and dark pairs.
- **jyn**: light page in the app's own palette (paper `#faf8f4`, purple
  `#6e4bf0`, lavender/mint/rose tints). Screenshots come from the jyn repo,
  never by hand: `apps/ios/scripts/screenshots.sh` writes `01-home.png` …
  `09-me.png` on fixed test data at 9:41; resize to 660 px wide. Copy on the
  page uses jyn's vocabulary (wish, offer, granter, Join me; never "helper",
  "request" or "group") and claims only what the app does. The privacy page
  describes what the backend actually stores; check it against the code when
  the backend changes.

Commit subjects name the app: "jyn site: …", "curbwise site: …".
