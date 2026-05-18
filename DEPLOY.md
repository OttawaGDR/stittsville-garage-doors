# Deploy & DNS — Stittsville Garage Doors

## Live URLs

| URL | Purpose |
|-----|---------|
| https://stittsville-garage-doors.vercel.app | Production (works now) |
| https://stittsvillegaragedoors.ca | Custom domain (after DNS) |
| https://www.stittsvillegaragedoors.ca | www (after DNS) |

**Vercel project:** [gds-ottawa/stittsville-garage-doors](https://vercel.com/gds-ottawa/stittsville-garage-doors)

---

## Step 1 — DNS at your domain registrar

Log in where you bought **stittsvillegaragedoors.ca** (GoDaddy, Namecheap, Google Domains, CIRA registrar, etc.) and open **DNS** or **Manage DNS**.

Add these records (delete conflicting old A/CNAME records for `@` and `www` first):

| Type | Host / Name | Value | TTL |
|------|-------------|-------|-----|
| **A** | `@` (or blank) | `76.76.21.21` | 3600 (or Auto) |
| **A** | `www` | `76.76.21.21` | 3600 |

**Alternative for www only** (if your registrar prefers CNAME):

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `cname.vercel-dns.com` |

Keep the root (`@`) on the **A** record `76.76.21.21`.

DNS can take **15 minutes to 48 hours** to propagate. Vercel will email you when the domain is verified.

Check status:

```bash
vercel domains inspect stittsvillegaragedoors.ca
```

Or: Vercel dashboard → **stittsville-garage-doors** → **Settings** → **Domains**.

---

## Step 2 — GitHub repository

### A. Log in as **OttawaGDR** (one time, in terminal)

```powershell
gh auth login --hostname github.com --git-protocol https --web
```

When the browser opens, sign in as **OttawaGDR** (not another GitHub account).

Verify:

```powershell
gh auth status
```

You should see `Logged in to github.com as OttawaGDR`.

### B. Create repo under OttawaGDR and push

```powershell
cd "c:\Users\smile\OneDrive\Desktop\Stittsville garage door\stittsville-garage-doors"
gh repo create stittsville-garage-doors --public --owner OttawaGDR --source=. --remote=origin --push
```

Repo URL: `https://github.com/OttawaGDR/stittsville-garage-doors`

(Use `--private` instead of `--public` if you prefer.)

### C. Connect GitHub to Vercel (auto-deploy on push)

1. Open https://vercel.com/gds-ottawa/stittsville-garage-doors/settings/git
2. Click **Connect Git Repository**
3. Select **GitHub** → authorize (as the account that owns **OttawaGDR/stittsville-garage-doors**) → choose **stittsville-garage-doors**
4. Production branch: **master** (or **main**)
5. Save — every `git push` will redeploy production

---

## Step 3 — Redirect www → apex (optional)

In Vercel → **Domains** → set primary domain to `stittsvillegaragedoors.ca` and redirect `www` to apex (recommended for SEO).

---

## Quick commands

```bash
pnpm dev          # local preview
pnpm build        # test build
vercel --prod     # manual deploy (if not using Git)
git push          # deploy via GitHub (after Step 2C)
```
