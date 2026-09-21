# ML for Environmental Forecasting — seminar series

Website for the seminar series run by the Environmental Forecasting (EF) mission at
The Alan Turing Institute.

**Live page:** https://shaerdan.github.io/ef-ml-seminars/
**Repository:** https://github.com/Shaerdan/ef-ml-seminars

## How the site works

- **No build step.** GitHub Pages serves the files exactly as committed
  (`.nojekyll` switches Jekyll off).
- [`seminars.js`](seminars.js) — series info + one object per seminar. **This is the file to edit.**
- [`topics.js`](topics.js) — topics of interest.
- `site.js` renders both into `index.html`; `style.css` is the styling.
- Upcoming vs past is decided automatically from each seminar's `date`.
  The earliest upcoming seminar is shown as **Next**. Seminars with `date: null` show as "Date TBC"
  and stay in the upcoming list.

## Add or update a seminar

1. Open [`seminars.js`](seminars.js) on GitHub and press the pencil icon (edit in browser).
2. Copy the commented template block at the bottom of `SEMINARS`, uncomment it, fill it in.
3. Commit to `main`. Pages redeploys within about a minute.
4. To broadcast, link straight to the seminar: `https://<site>/#<id>` (the **Permalink** on each card).

| field | type | notes |
|---|---|---|
| `id` | string | short, unique, URL-safe (`2026-briol`); used for permalinks and the calendar entry |
| `title`, `speaker`, `affiliation` | string | shown on the card |
| `speaker_url` | URL or `null` | speaker name becomes a link |
| `date` | `"YYYY-MM-DD"` or `null` | `null` = TBC |
| `time` | string or `null` | e.g. `"14:00–15:00 (UK time)"`; first `HH:MM` is used for the calendar entry |
| `duration_min` | number | calendar entry length (default 60) |
| `location` | string | room, "Online", "Hybrid" |
| `online` | URL or `null` | **see the privacy note below before filling this in** |
| `abstract`, `bio` | string or `null` | plain text; a blank line starts a new paragraph |
| `tags` | list of strings | shown as chips |
| `slides`, `recording` | URL or `null` | add after the talk |

## Topics of interest

Members can either:

- open an issue with the **Suggest a topic** or **Suggest a speaker** form
  (Issues → New issue), or
- edit [`topics.js`](topics.js) directly (`status`: `wanted`, `scheduled`, `covered`).

## Preview locally

Open `index.html` in a browser (double-click it). No server is needed.

## Publish on GitHub Pages

Settings → Pages → *Build and deployment* → Source: **Deploy from a branch** →
Branch: `main`, folder `/ (root)` → Save. The URL appears at the top of that page
after the first deploy (about a minute). Then put that URL at the top of this README and
set `repo:` in `seminars.js` to the repository URL so the "Suggest…" and "Edit" links work.

> **Privacy:** a GitHub Pages site is **publicly readable even when the repository is private**
> (unless the org is on Enterprise Cloud with access control). Do not commit private meeting
> links or passcodes; keep `online: null` and circulate joining details by email.

> **Plan limit:** Pages from a **private** repository requires GitHub Pro, Team or Enterprise.
> On a Free personal account only public repositories publish. To check the page before it is
> public, preview locally (above) — that is what the page will look like.

## Move to the organisation

Either:

- **Transfer** (keeps history, issues and stars): Settings → General → *Danger Zone* →
  Transfer ownership → `alan-turing-institute` (you need permission to create repos there), or
- **Push to a fresh org repo:** create the empty repository in the org, then

  ```bash
  git remote set-url origin git@github.com:alan-turing-institute/ef-ml-seminars.git
  git push -u origin main
  ```

After moving: enable Pages in the new repo (as above), update `repo:` in `seminars.js`,
and update the live URL in this README. The site becomes
`https://alan-turing-institute.github.io/ef-ml-seminars/`.
