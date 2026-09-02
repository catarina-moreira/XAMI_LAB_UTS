---
title: Adding content to this website
description: How lab members can add people, publications, videos and tutorials by editing simple files on GitHub — no coding required.
author: XAMI Lab
date: 2026-09-02
---

Everything on this website lives in plain text files inside the
[`xami-lab-uts.github.io`](https://github.com/XAMI-LAB-UTS/xami-lab-uts.github.io) repository.
When a file is added or edited on the `main` branch, the site rebuilds and
redeploys automatically within a couple of minutes. You can do everything from
the GitHub web interface — no local setup needed.

## Add yourself to the People page

Create a file `src/content/people/your-name.md`:

```markdown
---
name: "Your Name"
group: phd                # leadership | phd | masters | collaborators
role: "PhD Student"
school: "Data Science Institute"
university: "University of Technology Sydney"
photo: "/assets/members/your-name.jpg"
email: "you@example.edu"
linkedin: "https://www.linkedin.com/in/you"
scholar: "https://scholar.google.com/citations?user=..."
order: 10                 # position within your group (lower = earlier)
---
```

Upload your photo (square-ish, at least 320×320) to `public/assets/members/`.
When you leave the lab, don't delete your file — set `alumni: true` instead.

## Add a publication

Create a file `src/content/publications/YYYY-short-title.yaml`:

```yaml
title: "Title of the Paper"
authors: "First Author, Second Author, Third Author"
venue: "Journal or Conference Name, 2026"
year: 2026
type: journal             # journal | conference | preprint | dataset
doi: "https://doi.org/..."
code: "https://github.com/..."
abstract: "One-paragraph abstract."
bibtex: "@article{key, title={...}, author={...}, year={2026}}"
```

Only `title`, `authors`, `venue`, `year` and `type` are required.

## Add a talk or video

Create a file `src/content/videos/my-talk.yaml`:

```yaml
title: "Conference Name '26"
description: "Title of the talk"
youtubeId: "dQw4w9WgXcQ"      # the part after v= in the YouTube URL
section: conferences           # getting-started | conferences | training
speakers: ["Your Name"]
order: 1
```

## Write a tutorial

Create `src/content/tutorials/my-tutorial.md` with the same frontmatter shape as
this file, then write the tutorial in Markdown below the `---`. Code blocks,
images and links all work.

## Previewing locally (optional)

```bash
git clone https://github.com/XAMI-LAB-UTS/xami-lab-uts.github.io
cd xami-lab-uts.github.io
npm install
npm run dev
```

Then open `http://localhost:4321`.
