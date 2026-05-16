import type { Translation } from "./types";

const en: Translation = {
  nav: {
    family: "Family",
    qa: "QA Master",
    spec: "Spec Master",
    github: "GitHub",
  },
  footer: {
    support: "☕ Support",
    builtBy: "MIT License · Built by",
  },

  hub: {
    hero: {
      eyebrow: "Open source · Model Context Protocol · AI-QA Family",
      title: 'The <span class="accent">mk-*</span> family.<br/>AI QA, decomposed.',
      altName: "AI 大師系列 · MK FAMILY",
      sub: "An opinionated family of MCP servers for AI-driven QA workflows. Each member owns one job in the loop — <strong>specs</strong> in, <strong>tests</strong> out, <strong>coverage</strong> tracked, <strong>suite</strong> coached. Compose them in your Claude / Cursor / Codex / Gemini config and let the AI drive.",
      ctaPrimary: "Meet the family →",
      ctaGhost: "View on GitHub",
    },
    members: {
      eyebrow: "Current members",
      title: 'Two MCPs. <span class="accent">One loop.</span>',
      sub: "mk-qa-master runs the tests. mk-spec-master tracks what's tested. Together they form the spec → test → coverage → coach loop — composable in any MCP client, no MCP-to-MCP RPC required.",
      deepDive: "Deep dive →",
    },
    future: {
      eyebrow: "Coming soon",
      title: 'Two more members <span class="accent">in design</span>',
      sub: "Same coach-layer pattern, different domains. Designed for the same MCP client config so adding the next layer is one block of JSON.",
      tag: "In design",
    },
    loop: {
      eyebrow: "The loop",
      title: 'Specs → Tests → Coverage → <span class="accent">Coach</span>',
      sub: "Each MCP owns one segment. The AI client chains them in any session. The loop never runs in isolation — every step feeds the next.",
      steps: [
        { name: "Specs", owner: "spec-master", blurb: "Linear / JIRA / Notion / Figma / GitHub Issues / Markdown" },
        { name: "Tests", owner: "qa-master", blurb: "pytest / Jest / Cypress / Go test / Maestro · web + mobile" },
        { name: "Coverage", owner: "spec-master", blurb: "spec ↔ test matrix · drift detection · auto-link via @spec tags" },
        { name: "Coach", owner: "both", blurb: "optimization plan · spec-quality grader · MCP usage telemetry" },
      ],
    },
    compat: {
      label: "Works with any MCP-compatible client",
      runnersLabel: "Drives or reads from these systems",
    },
    install: {
      eyebrow: "Install",
      title: 'Drop both into your <span class="accent">MCP client config</span>',
      sub: "One JSON block. The AI client chains them automatically.",
    },
  },

  qa: {
    hero: {
      eyebrow: "Member 1 · Execution side of the loop",
      title: 'Let\'s make <span class="accent">QA</span> simple.',
      altName: "AI 測試大師 · MK QA MASTER",
      sub: "mk-qa-master is an MCP server that drives <strong>web</strong> (pytest / Jest / Cypress / Go) and <strong>mobile</strong> (Maestro on iOS + Android, incl. BlueStacks) test suites — writes the next round from a URL or a live screen, and acts as your data-driven QA advisor every single run.",
    },
    features: {
      eyebrow: "What it does",
      title: 'Three jobs. <span class="accent">One server.</span> Web + mobile.',
      sub: "Ranked by how often you actually use them.",
      cards: [
        {
          icon: "▶",
          title: "Run tests, web or mobile",
          body: "Switch runners with a single <code>QA_RUNNER</code> env var: pytest / Jest / Cypress / Go for web, <code>maestro</code> for iOS Simulator, Android Emulator, real devices, and BlueStacks. Auto-retry, JUnit XML, screenshots, Playwright <code>trace.zip</code> / Maestro recordings — out of the box.",
        },
        {
          icon: "✎",
          title: "Write tests from a URL or a screen",
          body: "<code>analyze_url</code> probes the DOM; <code>analyze_screen</code> dumps the live mobile hierarchy. Both surface form / cta / nav / tab-bar modules with real selectors, then <code>generate_test</code> emits runnable pytest <em>or</em> Maestro YAML — not <code># TODO</code> placeholders.",
        },
        {
          icon: "⚡",
          title: "Your QA optimization advisor",
          body: "Every run archives a snapshot and writes a new <code>optimization-plan.md</code>. Flaky vs. broken vs. slow-regression — ranked by evidence, not by gut. Same loop works for web and mobile.",
        },
      ],
    },
    pipeline: {
      eyebrow: "The pipeline",
      title: "A self-correcting loop",
      sub: "Every run feeds the optimizer; the optimizer points at the weakest link; the next run attacks it first. Without this loop, AI is just a faster monkey tester.",
    },
    knowledge: {
      eyebrow: "QA knowledge in three layers",
      title: "Domain context, not just DOM",
      sub: "A DOM-only analyzer produces 'empty field should error' — monkey testing in a new wrapper. We layer real QA knowledge on top.",
      layers: [
        {
          name: "Built-in",
          body: "ISTQB's seven principles, equivalence partitioning, decision tables, state transitions, the test pyramid, shift-left, mobile checklists, QA metrics — baked into the server.",
        },
        {
          name: "Your file",
          body: "Drop a <code>qa-knowledge.md</code> in your project root: business rules, historical bugs, standard assertion copy, user journeys, technical constraints. Run <code>init_qa_knowledge</code> to scaffold one.",
        },
        {
          name: "Per-test inline",
          body: "Pass a <code>business_context</code> slice into <code>generate_test</code>; it gets printed as a <code># Business context:</code> block inside the test, so reviewers see <em>why</em> without leaving the file.",
        },
      ],
    },
    coach: {
      eyebrow: "The advisor",
      title: "Three lenses on every run",
      sub: "After each run, the advisor reads history/ and telemetry, then writes a ranked action list. Three perspectives:",
      lenses: [
        {
          name: "Suite quality",
          body: "Per-test outcome strings like <code>PFPFP</code> feed a flake score. Cross-reference error signatures: three consecutive fails with the same signature → marked <em>broken</em> (a real bug, not flake).",
        },
        {
          name: "MCP usability",
          body: "Tool telemetry surfaces top tools, error rate, repeated args, and common A→B chains. Tells you where to ship a meta-tool or cache.",
        },
        {
          name: "AI effectiveness",
          body: "Did the test <code>generate_test</code> wrote show up in the next run? Did the modules <code>analyze_url</code> detected get matching test files? Adoption rate vs. coverage gap — tracked.",
        },
      ],
    },
    tools: {
      eyebrow: "Tools",
      title: '16 tools across <span class="accent">5 categories</span>',
      sub: "You don't need to memorize names — the prompting cookbook in the README has natural-language phrasings for both web and mobile.",
      groups: [
        { label: "Discover", items: ["get_runner_info", "list_tests", "analyze_url", "analyze_screen"] },
        { label: "Generate", items: ["generate_test", "auto_generate_tests", "codegen", "init_qa_knowledge", "get_qa_context"] },
        { label: "Run", items: ["run_tests", "run_failed"] },
        { label: "Report", items: ["get_test_report", "get_failure_details", "generate_html_report", "get_test_history"] },
        { label: "Advisor", items: ["get_optimization_plan"] },
      ],
    },
    terminal: {
      line1: "Test https://your-site/login — one case per module",
      cmt1: "# Claude calls the MCP server →",
      out1: "4 modules · 12 endpoints · 18 candidate cases",
      out2: "Next: flaky checkout-flow, broken coupon-rule",
      line2: "What's the next thing I should fix?",
    },
  },

  spec: {
    hero: {
      eyebrow: "Member 2 · Traceability side of the loop",
      title: 'Specs in.<br/><span class="accent">Scenarios out.</span>',
      altName: "AI 規格大師 · MK SPEC MASTER",
      sub: "mk-spec-master reads specs from <strong>Linear / JIRA / GitHub Issues / Notion / Figma / Markdown</strong> and turns them into structured scenarios you hand to any test runner. Keeps a live <strong>spec ↔ test</strong> coverage matrix and grades the specs themselves — the differentiator vs Kiro / Spec Kit / Jama.",
    },
    notFor: {
      eyebrow: "Scope",
      title: "What this is <em>not</em>",
      sub: "mk-spec-master sits between your spec source and your test runner. It's not the editor, runner, or LLM.",
      rows: [
        { not: "A spec editor", instead: "Linear / JIRA / Notion / Markdown — keep writing specs where you already do" },
        { not: "A test runner", instead: "mk-qa-master (pytest / Jest / Cypress / Go test / Maestro)" },
        { not: "An issue tracker UI", instead: "Linear / JIRA / Notion's native interface" },
        { not: "A spec → code generator", instead: "GitHub Spec Kit, AWS Kiro" },
        { not: "An LLM", instead: "Leverages your AI client (Claude / Cursor / Codex / Gemini) for reasoning" },
      ],
    },
    tools: {
      eyebrow: "Tool surface",
      title: '15 tools across <span class="accent">6 roles</span>',
      sub: "Grouped by role. Each group is one layer in the spec → test → coverage → coach loop.",
      groups: [
        {
          name: "Meta — orientation",
          items: [{ tool: "get_spec_source_info", purpose: "Active adapter + all available. Call this first." }],
        },
        {
          name: "Discovery — find + load specs",
          items: [
            { tool: "list_specs", purpose: "Filter by status / label / limit." },
            { tool: "fetch_spec", purpose: "Pull a single spec by id." },
            { tool: "parse_spec", purpose: "Heuristic AC extraction (en + zh-TW + zh-CN headings). Returns ac_hash." },
          ],
        },
        {
          name: "Generation — specs → testable artifacts",
          items: [
            { tool: "extract_scenarios", purpose: "AC → scenarios with happy / edge / error classification." },
            { tool: "generate_test_plan", purpose: "One-shot markdown plan ready to hand to mk-qa-master." },
          ],
        },
        {
          name: "Coverage & drift",
          items: [
            { tool: "link_test_to_spec", purpose: "Record that a test verifies a spec; stores title / source / ac_hash." },
            { tool: "auto_link_tests", purpose: "Scan test files for @spec: tags. Python / JS / TS / Go." },
            { tool: "get_coverage_matrix", purpose: '"Which specs have no tests" in one call.' },
            { tool: "get_drift_report", purpose: "fresh / drifted / unknown / stranded buckets." },
          ],
        },
        {
          name: "Coach — quality + prioritization",
          items: [
            { tool: "analyze_spec_quality", purpose: "Vague language, implementation-leak AC, unclear role refs." },
            { tool: "propose_spec_improvements", purpose: "PM-facing markdown with concrete rewrites." },
            { tool: "get_optimization_plan", purpose: "Three-layer prioritized plan: coverage + quality + drift." },
          ],
        },
        {
          name: "Knowledge — domain methodology",
          items: [
            { tool: "init_spec_knowledge", purpose: "Starter spec-knowledge.md (EARS, INVEST, AC quality rules)." },
            { tool: "get_spec_context", purpose: "Read the methodology file; optional section filter." },
          ],
        },
      ],
    },
    adapters: {
      eyebrow: "Source adapters",
      title: "6 sources, one tool surface",
      sub: "Switch via the <code>SPEC_SOURCE</code> env var. Same tools, six different backends.",
      rows: [
        { src: "markdown_local", auth: "none", since: "0.1.0" },
        { src: "github_issues", auth: "gh auth login or GITHUB_TOKEN", since: "0.1.0" },
        { src: "linear", auth: "LINEAR_API_KEY + SPEC_PROJECT_KEY", since: "0.2.2" },
        { src: "jira", auth: "JIRA_BASE_URL + JIRA_EMAIL + JIRA_API_TOKEN", since: "0.2.3" },
        { src: "notion", auth: "NOTION_TOKEN + database id as SPEC_PROJECT_KEY", since: "0.3.0" },
        { src: "figma", auth: "FIGMA_TOKEN + file key as SPEC_PROJECT_KEY", since: "0.3.1" },
      ],
    },
    workflows: {
      eyebrow: "Workflows",
      title: 'Four prompts cover <span class="accent">~90%</span> of real use',
      sub: "One sentence to the AI client; the tools chain automatically.",
      items: [
        {
          prompt: "Fetch LIN-123, extract scenarios, generate Playwright tests with mk-qa-master, run them, and update the coverage matrix.",
          chain: "fetch_spec → parse_spec → extract_scenarios → mk-qa-master.generate_test (×N) → link_test_to_spec (×N) → mk-qa-master.run_tests → get_coverage_matrix",
        },
        {
          prompt: "Review every in-progress spec for quality issues and give me a prioritized improvement plan.",
          chain: "list_specs(status='in-progress') → analyze_spec_quality → propose_spec_improvements → get_optimization_plan",
        },
        {
          prompt: "Sync the spec ↔ test index from the test source — I just renamed a bunch of files.",
          chain: "auto_link_tests → get_coverage_matrix",
        },
        {
          prompt: "Load the spec-knowledge methodology and tell me which source is active before we start.",
          chain: "get_spec_source_info → get_spec_context",
        },
      ],
    },
    samples: {
      eyebrow: "Sample output",
      title: "What you actually get",
      sub: "Two of the most-shown outputs — both ready to paste into Slack, JIRA, or a sprint planning doc.",
      optimizationPlan: `# Optimization plan

_Coverage matrix: 23 spec(s) tracked, 4 untested._
_Spec quality: 23 spec(s) analyzed, 17 finding(s)._
_Drift: 2 drifted, 0 stranded, 5 without ac_hash._

## 🔴 Layer 1 — Coverage gaps

**Specs with zero tests** (ranked first — every business risk lives here):
- \`LIN-204\` — Apply promo code at checkout
- \`LIN-211\` — Refund flow

## 🟡 Layer 2 — Spec quality

### \`LIN-098\` — Checkout latency  (score: 80/100, findings: 4)
- 🟡 \`ac-1\`: Quantify (e.g., 'response within 200 ms')  (evidence: \`fast\`)
- 🔴 \`ac-3\`: Rewrite to describe what the user observes  (evidence: \`redis\`)

## 🔵 Layer 3 — Process drift

**Drifted** (spec changed since link — review affected tests):
- \`LIN-123\` — Apply discount at checkout · 4 test(s) potentially stale`,
      coverageMatrix: `# Coverage matrix

- Specs tracked: 23
- Specs shown (min_tests=0): 23
- Specs with zero tests: 4

| Spec      | Title                          | Tests | Last status |
|-----------|--------------------------------|------:|-------------|
| \`LIN-204\` | Apply promo code at checkout   |     0 | —           |
| \`LIN-123\` | Apply discount at checkout     |     4 | passed      |`,
    },
  },

  cta: {
    quickStart: "Quick Start →",
    readDocs: "Read the docs",
    sibling: "Sibling →",
    install: "Install",
    github: "GitHub",
    pypi: "PyPI",
    meetFamily: "Meet the family →",
  },

  common: {
    install: {
      titleHub: "Drop both into your MCP client config",
      titleQa: "Add to your MCP client config",
      titleSpec: "Add to your MCP client config",
      explain: "Restart your client, then talk to the AI like you always do.",
    },
    status: {
      eyebrow: "Status",
      title: "Latest release",
    },
  },
};

export default en;
