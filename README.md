# mk-family-site

Landing site for the **mk-\*** family of MCP servers. Deployed to
[mcp.chenjundigital.com](https://mcp.chenjundigital.com).

## Pages

- `/` — family hub
- `/qa-master` — [mk-qa-master](https://github.com/kao273183/mk-qa-master) deep page
- `/spec-master` — [mk-spec-master](https://github.com/kao273183/mk-spec-master) deep page

## Adding a new family member

Two edits:

1. Add the entry to `src/data/family.json` (current members or future).
2. Create a `src/pages/<slug>.astro` deep page mirroring `qa-master.astro`.

## Stack

[Astro](https://astro.build) static site, hosted on Vercel.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # serve the built site
```

## Deploy

Push to `main`. Vercel auto-deploys.

Custom domain `mcp.chenjundigital.com` configured in Vercel; the
`public/CNAME` file is a holdover from GitHub Pages and harmless on
Vercel.

## License

MIT — see the family member repos for the license that ships with each
MCP. The site itself follows the same terms.
