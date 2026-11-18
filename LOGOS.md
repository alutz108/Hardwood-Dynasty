# Hardwood Classics logo library

- `public/logos/<team-id>.png` - 365 original 512x512 logos with transparent backgrounds, one per Division I team.
- `team-logos.json` - maps every team ID to its logo file, with the team's name, conference, abbreviation, colors and logo style.
- `logos.js` - the design system that draws every logo. The game uses it directly, so logos look identical on PC and iPhone, work offline, and stay sharp at any size.

Team IDs are the team name in lowercase with punctuation removed and spaces turned into hyphens: `duke`, `north-carolina`, `st-johns`, `miami-oh`, `texas-am`.

All artwork is original: a basketball, generic badge shapes, the school's colors and a short abbreviation. No university marks, mascots or wordmarks are used.

To use a PNG anywhere else in your project: `<img src="public/logos/duke.png" alt="Duke">`.
