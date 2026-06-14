# Claritix - Build Handoff

This was the original handoff document for the pre-launch build. The current
live brand is **Claritix** at `claritix.co`; use `SPEC.md`, `AGENTS.md`, and
`docs/CLARITIX_UX_SPEC.md` for active work.

Everything needed to start building the site with Claude Code. Files are already
in their correct repo positions - copy this folder's contents into your cloned
GitHub repo as-is.

## What's here

| # | File | Role |
|---|---|---|
| 1 | `SPEC.md` | THE source of truth - full website specification |
| 2 | `CLAUDE.md` | Claude Code's persistent rules - read automatically each session |
| 3 | `kickoff-prompt.txt` | Paste its contents as your FIRST message to Claude Code |
| 4 | `public/brand/claritix/claritix-wordmark.webp` | Active wordmark asset |
| 5 | `public/brand/claritix/claritix-logo.png` | Source/reference logo asset |
| 6 | `public/favicon.*`, `public/icon-*`, `public/og-image.png` | Generated metadata assets |

## Sequence

1. Create a GitHub repo named `insightout` and clone it locally
2. Copy everything in this folder (except this README, optional) into the repo root,
   keeping the structure - SPEC.md, CLAUDE.md, kickoff-prompt.txt at root,
   SVGs under public/brand/
3. Commit and push: `git add -A && git commit -m "Project handoff: spec, rules, brand assets" && git push`
4. Open the repo folder in VS Code with the Claude Code extension installed
5. Open the Claude Code panel and paste the contents of kickoff-prompt.txt
6. Review the Milestone 1 PR it opens, merge, and confirm the site deploys at
   https://<your-username>.github.io/insightout/
7. Then tell Claude Code: "Proceed to Milestone 2" - and review each milestone PR
   before releasing the next

## Still on you (SPEC.md §8 / §10)

- Domain is live at `claritix.co`
- Fourth industry slot decision (defaults to three labels)
- Founder bio (~120 words) + contact email - needed by Milestone 5
- Advisory Circle MOUs - parked, section ships dark
