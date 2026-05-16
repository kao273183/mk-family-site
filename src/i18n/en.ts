import type { Translation } from "./types";

const en: Translation = {
  nav: {
    family: "Family",
    qa: "QA Master",
    spec: "Spec Master",
    plan: "Plan Master",
    github: "GitHub",
  },
  footer: {
    support: "☕ Support",
    builtBy: "MIT License · Built by",
  },

  hub: {
    hero: {
      eyebrow: "Open source · Model Context Protocol · AI Dev Family",
      title: 'The <span class="accent">mk-*</span> family.<br/>AI dev, decomposed.',
      altName: "AI 大師系列 · MK FAMILY",
      sub: "An opinionated family of MCP servers for the full AI-driven dev pipeline. Each member owns one stage — <strong>ideas</strong> ranked, <strong>specs</strong> produced, <strong>tests</strong> generated, <strong>coverage</strong> tracked, <strong>suite</strong> coached, <strong>trend</strong> self-reinforced over time. Compose them in your Claude / Cursor / Codex / Gemini config and let the AI drive.",
      ctaPrimary: "Meet the family →",
      ctaGhost: "View on GitHub",
    },
    members: {
      eyebrow: "Current members",
      title: 'Three MCPs. <span class="accent">One pipeline.</span>',
      sub: "mk-plan-master prioritizes the ideas. mk-spec-master turns specs into scenarios and tracks coverage. mk-qa-master runs the tests. Together they form the idea → plan → spec → test → coverage → coach loop — composable in any MCP client, no MCP-to-MCP RPC required.",
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
      title: 'Plan → Specs → Code → Tests → Coverage → <span class="accent">Coach</span>',
      sub: "Three MCPs, one segment each, chained by the AI client. The middle 'Code' step deliberately lives in your IDE (Claude Code / Cursor / Copilot) — the family doesn't rewrite that layer. Read it as TDD: tests are the executable form of the spec, the IDE flips them red → green, then the coach loops you back to plan-master for the next idea.",
      steps: [
        { name: "Plan", owner: "plan-master", blurb: "Linear / JIRA / Notion / Markdown · RICE ranking + senior-PM analysis + spec-draft bridge" },
        { name: "Specs", owner: "spec-master", blurb: "Linear / JIRA / Notion / Figma / GitHub Issues / Markdown" },
        { name: "Code", owner: "your IDE", blurb: "Claude Code · Cursor · Copilot — AI writes app code against red tests. The family deliberately doesn't touch this layer." },
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
      title: 'Drop all three into your <span class="accent">MCP client config</span>',
      sub: "One JSON block. The AI client chains them automatically: idea → plan → spec → test.",
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
    notFor: {
      eyebrow: "Scope",
      title: "What this is <em>not</em>",
      sub: "mk-qa-master sits between your AI client and your test framework. It's not the framework, the LLM, a CI runner, a source analyzer, or a SaaS UI.",
      rows: [
        { not: "A test framework", instead: "Bring pytest / Jest / Cypress / Go test / Maestro — qa-master drives them" },
        { not: "An LLM", instead: "Reasoning lives in your AI client (Claude / Cursor / Codex / Gemini). qa-master only exposes tools" },
        { not: "A CI runner", instead: "Runs locally + reports JUnit XML / HTML. Wire JUnit into GitHub Actions / Jenkins / GitLab yourself" },
        { not: "A source-code analyzer", instead: "Analyzes the live DOM (web) / view hierarchy (mobile), not your repo source" },
        { not: "A SaaS dashboard", instead: "MCP-native: lives in your AI client. The HTML report is one self-contained file" },
      ],
    },
    tools: {
      eyebrow: "Tool surface",
      title: '16 tools across <span class="accent">5 roles</span>',
      sub: "Grouped by role. Each group is one layer in the analyze → generate → run → report → advise loop. README's prompting cookbook has natural-language phrasings — you rarely name a tool yourself.",
      groups: [
        {
          name: "Discover — orientation + scan",
          items: [
            { tool: "get_runner_info", purpose: "Which runner is active + all available. Call this first so the AI picks the right test template (Playwright .py vs Maestro .yaml)." },
            { tool: "list_tests", purpose: "Enumerate every collectable test under the active runner — pytest --collect-only, jest --listTests, cypress glob, go -list, maestro YAML walk." },
            { tool: "analyze_url", purpose: "Web: probe a live URL — form / nav / dialog / cta modules + selectors + API endpoints the page hits + layout-overflow warnings + candidate TCs." },
            { tool: "analyze_screen", purpose: "Mobile: dump <code>maestro hierarchy</code> → form / cta / tab_bar modules + candidate TCs, noise-filtered (status bar + asset names stripped)." },
          ],
        },
        {
          name: "Generate — modules → runnable tests",
          items: [
            { tool: "generate_test", purpose: "Test skeleton; with <code>module</code> from analyze_url/analyze_screen, a *runnable* Playwright .py or Maestro .yaml with concrete selectors — not <code># TODO</code> stubs." },
            { tool: "auto_generate_tests", purpose: "One-shot: analyze_url → generate_test per module. Hand it a URL, get a tests/ folder back." },
            { tool: "codegen", purpose: "Launch Playwright codegen interactively (web) / hint to <code>maestro studio</code> (mobile). Good for baseline happy-path recording." },
            { tool: "init_qa_knowledge", purpose: "Scaffold qa-knowledge.md in the project root — business rules / past bugs / standard assertions / user journeys / technical constraints." },
            { tool: "get_qa_context", purpose: "Read qa-knowledge.md (built-in ISTQB fallback). Feed a slice into generate_test.business_context for domain-aware tests." },
          ],
        },
        {
          name: "Run — execute the suite",
          items: [
            { tool: "run_tests", purpose: "Execute under the active runner; writes report.json + JUnit XML, snapshots into history/, auto-refreshes optimization-plan.md. Optional <code>filter</code>." },
            { tool: "run_failed", purpose: "Re-run only last failures — pytest --lf, jest --onlyFailures, cypress/go reverse-lookup, maestro nodeid → .yaml. Way faster than re-running the suite." },
          ],
        },
        {
          name: "Report — read what just happened",
          items: [
            { tool: "get_test_report", purpose: "Summary: passed / failed / skipped / flaky_in_run / duration. Cheap — use it between actions instead of re-running." },
            { tool: "get_failure_details", purpose: "Per-failure message + screenshot + Playwright trace.zip + video paths + parsed step sequence. The 「why did it fail」 tool." },
            { tool: "generate_html_report", purpose: "Render the latest run as one self-contained HTML — base64 screenshots, trend sparkline, collapsed Passed, expanded Failed cards. Slack-able." },
            { tool: "get_test_history", purpose: "Last N archived run summaries — flake / duration regression / pass-rate trend. Pair with get_optimization_plan for action items." },
          ],
        },
        {
          name: "Advisor — the self-improvement coach",
          items: [
            { tool: "get_optimization_plan", purpose: "Three-lens prioritized plan: suite quality (flake / broken / slow_regression) + MCP usability (top tools, repeat args, error rate) + AI effectiveness (generate_test adoption, coverage gaps). Writes optimization-plan.md every run." },
          ],
        },
      ],
    },
    adapters: {
      eyebrow: "Runners",
      title: "5 runners, one tool surface",
      sub: "Switch via the <code>QA_RUNNER</code> env var. Same tools, five different frameworks — web on four, mobile on Maestro.",
      rows: [
        { src: "pytest-playwright", auth: "QA_RUNNER=pytest", since: "0.1.0" },
        { src: "jest", auth: "QA_RUNNER=jest", since: "0.2.0" },
        { src: "cypress", auth: "QA_RUNNER=cypress", since: "0.2.0" },
        { src: "go test", auth: "QA_RUNNER=go", since: "0.2.0" },
        { src: "maestro (iOS + Android + BlueStacks)", auth: "QA_RUNNER=maestro (+ optional QA_ANDROID_HOST for BlueStacks)", since: "0.3.0" },
      ],
    },
    workflows: {
      eyebrow: "Workflows",
      title: 'Four prompts cover <span class="accent">~90%</span> of real use',
      sub: "One sentence to the AI client; the tools chain automatically.",
      items: [
        {
          prompt: "Test https://your-site/login — analyze the page, write tests for every module, run them, then tell me what to fix.",
          chain: "analyze_url → generate_test (×N modules) → run_tests → get_failure_details → get_optimization_plan",
        },
        {
          prompt: "I just added three new feature pages — auto-generate tests for everything the analyzer finds and run them.",
          chain: "auto_generate_tests(url=...) → run_tests → get_test_report → get_optimization_plan",
        },
        {
          prompt: "What's wrong with my test suite this week — give me a ranked plan, not gut feel.",
          chain: "get_test_history(limit=30) → get_optimization_plan(history_limit=30, telemetry_limit=2000)",
        },
        {
          prompt: "Test the barcode button on my mobile app on the iOS Simulator and tell me if it's flaky.",
          chain: "analyze_screen(app_id='com.example.app', launch_app=true) → generate_test(module=<cta>) → run_tests → get_optimization_plan",
        },
      ],
    },
    samples: {
      eyebrow: "Sample output",
      title: "What you actually get",
      sub: "Same shape as spec-master's plan — markdown, ready to paste into Slack / JIRA / a sprint planning doc. Auto-written after every run.",
      optimizationPlan: `# Optimization Plan — 2026-05-12T14:03:40

_Based on 6 archived runs._

## Prioritized Actions

### 1. 🔴 HIGH — flaky
- **Target**: \`tests/test_login.py::test_invalid_credentials\`
- **Evidence**: flake_score=0.4, outcomes=PFPFP, rerun_count=1
- **Suggestion**: 加 explicit wait (wait_for_response / locator wait)
- **auto_action_hint**: \`get_failure_details(test_id="test_invalid_credentials")\`

### 2. 🟡 MEDIUM — coverage_gap
- **Target**: \`register_form\` (module detected on /register)
- **Evidence**: analyze_url found this module; no matching test_*.py in repo
- **Suggestion**: \`generate_test(description="...", filename="test_register_form.py")\`

### 3. 🟡 MEDIUM — slow_regression
- **Target**: \`tests/test_checkout.py::test_full_flow\`
- **Evidence**: median duration 1.8× baseline across last 6 runs
- **Suggestion**: profile network waits; pin fixture data; consider parallel mark

## MCP usability
- Top tool: \`run_tests\` (38%) · \`analyze_url\` (22%) · \`get_failure_details\` (14%)
- Common chain: \`analyze_url → generate_test\` (17 occurrences)
- Error rate: 2.3% (1 timeout in analyze_url against slow staging)

## AI effectiveness
- generate_test adoption: 9 / 11 generated tests appeared in the next run (82%)
- coverage gap: 1 module from analyze_url has no matching test file (\`register_form\`)`,
      testReport: `# Test Report — pytest-playwright

- total: 23
- passed: 19
- failed: 3
- flaky_in_run: 1   ← auto-retry rescued
- skipped: 0
- duration: 31.4s

## Failures
1. \`tests/test_login.py::test_invalid_credentials\`
   - message: \`AssertionError: expected error text not visible\`
   - screenshot: \`test-results/.../test-failed-1.png\`
   - trace:      \`test-results/.../trace.zip\`
   - video:      \`test-results/.../video.webm\`

2. \`tests/test_coupon.py::test_idempotency\`
   - message: \`Timeout waiting for /api/coupon (5000ms)\`
   - last step: \`Page.waitForResponse('/api/coupon')\``,
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
      sub: "mk-spec-master reads specs from <strong>Linear / JIRA / GitHub Issues / Notion / Figma / Markdown</strong> and turns them into structured scenarios you hand to any test runner. Keeps a live <strong>spec ↔ test</strong> coverage matrix, grades the specs themselves, and (v0.4+) <strong>self-reinforces over time</strong> — trend deltas, chronic-spec detection, tool-usage telemetry. The differentiator vs Kiro / Spec Kit / Jama.",
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
      title: '18 tools across <span class="accent">7 roles</span>',
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
        {
          name: "Self-reinforcement — longitudinal view (v0.4)",
          items: [
            { tool: "get_spec_history", purpose: "Trend deltas current vs ~7d / ~30d across coverage / quality / drift." },
            { tool: "get_drift_signature", purpose: "Chronic-spec detection: unstable / chronic_low_quality / chronic_unhashed." },
            { tool: "get_telemetry", purpose: "Tool-usage log: top tools, error rate, p50/p95, dead surface. No argument values logged." },
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

  plan: {
    hero: {
      eyebrow: "Member 3 · Planning side of the loop",
      title: 'Ideas in.<br/><span class="accent">Prioritized plans out.</span>',
      altName: "AI 規劃大師 · MK PLAN MASTER",
      sub: "mk-plan-master reads ideas from <strong>Markdown / Linear / JIRA / Notion</strong>, runs idea triage, scores with RICE or Impact-Effort, and emits a spec draft shaped to drop straight into <code>mk-spec-master.parse_spec</code>. <strong>analyze_initiative</strong> is the core — it forces the AI through a senior-PM analysis SOP before scoring, so you don't get a confident-looking RICE built from a two-paragraph blurb. Decision history + signature + telemetry built in: mk-spec-master's v0.4 self-reinforcement pattern, applied one step upstream.",
    },
    why: {
      eyebrow: "Why this MCP exists",
      title: "Close the upstream gap in the Idea → Plan → Spec → Code → Test loop",
      sub: "mk-spec-master and mk-qa-master already cover the right half. The upstream piece — turning 30–200 raw ideas (chat snippets, customer calls, URLs, gut hunches) into a prioritized quarterly roadmap and emitting a spec draft — is the gap nobody built MCP-native. mk-plan-master closes it, and generate_spec_draft's output drops verbatim into mk-spec-master.parse_spec — no manual reformat, no copy-paste fragility.",
    },
    notFor: {
      eyebrow: "Scope",
      title: "What this is <em>not</em>",
      sub: "mk-plan-master sits between your idea source and your spec layer. It's not a web crawler, code writer, LLM, or SaaS UI.",
      rows: [
        { not: "A web crawler", instead: "Your AI client summarizes via WebFetch / chat; add_initiative just writes the markdown" },
        { not: "A code writer", instead: "spec_draft → mk-spec-master → code lives in your IDE (Claude Code / Cursor / Copilot)" },
        { not: "An LLM", instead: "Reasoning lives in your AI client (Claude / Cursor / Codex / Gemini). analyze_initiative only scaffolds the prompt — it doesn't call an LLM" },
        { not: "A Productboard / Aha! replacement UI", instead: "MCP-native: lives where the AI lives. Reads your existing Linear / JIRA / Notion — no migration" },
        { not: "A spec editor", instead: "mk-spec-master + your existing Linear / JIRA / Notion / Markdown" },
      ],
    },
    tools: {
      eyebrow: "Tool surface",
      title: '15 tools across <span class="accent">9 roles</span>',
      sub: "Grouped by role. Each group is one layer in the idea → plan → spec → memory loop.",
      groups: [
        {
          name: "Meta — orientation",
          items: [{ tool: "get_plan_source_info", purpose: "Active adapter + all available + version. Call this first so the AI knows whether to expect markdown / Linear / JIRA / Notion semantics." }],
        },
        {
          name: "Discovery — find + load ideas",
          items: [
            { tool: "list_initiatives", purpose: "Filter by status / label / limit. Linear: triage / backlog / unstarted; JIRA: To Do; Notion: Triage / Backlog / Idea." },
            { tool: "fetch_initiative", purpose: "Pull one initiative by id. raw_metadata carries RICE inputs (reach / impact / confidence / effort / okr)." },
          ],
        },
        {
          name: "Capture — chat / WebFetch handoff",
          items: [
            { tool: "add_initiative", purpose: "Persist an idea your AI client already gathered via WebFetch / chat / call notes into initiatives/<id>.md. **The family does NOT crawl** — you summarize, this tool writes. Auto-generates IDEA-NNN." },
          ],
        },
        {
          name: "Analysis — the senior-PM SOP",
          items: [
            { tool: "analyze_initiative", purpose: "**The core meta-tool**. Forces a senior-PM analysis SOP — target users / competition / market signal / risks / MVP scope / out-of-scope / RICE rationale. Three frameworks: default (7 sections) / lite (4) / lean_canvas (9 blocks). Doesn't call an LLM — scaffolds the prompt so the AI doesn't shortcut into a shallow read." },
          ],
        },
        {
          name: "Scoring — prioritize the backlog",
          items: [
            { tool: "score_initiative", purpose: "Score one initiative with RICE or Impact-Effort. Tier thresholds: P0 > 25, P1 10..25, P2 3..10, P3 < 3. Appends a scored decision to index.json." },
            { tool: "rank_backlog", purpose: "Score the whole backlog, return top-N descending. **Auto-archives a snapshot** (debounced 5 min) so get_planning_history / get_decision_signature can compute trend deltas." },
          ],
        },
        {
          name: "Bridge — the family lock-in",
          items: [
            { tool: "generate_spec_draft", purpose: "**The family-bridge tool**. Markdown spec draft shaped so mk-spec-master.parse_spec(raw_text=...) ingests it verbatim — no manual editing. Three templates: default / lite / detailed." },
          ],
        },
        {
          name: "Roadmap — quarterly planning",
          items: [
            { tool: "generate_roadmap", purpose: "Pack the ranked backlog into a quarterly markdown roadmap, respecting an engineering-capacity envelope (engineer-months × 4 person-weeks) minus a buffer (default 20%). Greedy score-per-effort packer." },
            { tool: "analyze_roadmap_balance", purpose: "Classify top-N into feature / tech_debt / strategic / unlabeled buckets, surface ratio + score-share + heuristic advisory. \"Is the roadmap balanced?\" / \"Are we starving tech debt?\"" },
          ],
        },
        {
          name: "Knowledge — methodology",
          items: [
            { tool: "init_plan_knowledge", purpose: "Create plan-knowledge.md from a starter template — RICE / WSJF / Impact-Effort / OKR mapping / INVEST / personas + TODO sections for active OKRs / strategic bets / tech-debt / glossary. Idempotent." },
            { tool: "get_plan_context", purpose: "Read plan-knowledge.md (built-in fallback). Optional section filter. Call near session start so the same methodology + glossary colours every score that follows." },
          ],
        },
        {
          name: "Self-reinforcement — longitudinal view",
          items: [
            { tool: "get_planning_history", purpose: "Trend deltas (current vs ~7d / ~30d) for top-10 snapshots. Surfaces churn + average score. \"Are we improving?\" / \"Is the same idea always at the top?\"" },
            { tool: "get_decision_signature", purpose: "Chronic patterns: **ghost initiatives** (top-10 >50% but never spec_generated), **score whiplash** (RICE swings >50%), **orphan OKRs** (in index, zero top-10 initiatives)." },
            { tool: "get_telemetry", purpose: "Aggregates telemetry.jsonl (name + duration + ok only — **argument values never logged**). Top tools, error rates, p50 / p95 / p99, dead surface." },
          ],
        },
      ],
    },
    adapters: {
      eyebrow: "Source adapters",
      title: "4 sources, one tool surface",
      sub: "Switch via the <code>PLAN_SOURCE</code> env var. Same tools, four different backends.",
      rows: [
        { src: "markdown_local", auth: "none", since: "0.1.0" },
        { src: "linear", auth: "LINEAR_API_KEY (+ optional PLAN_PROJECT_KEY)", since: "0.1.0" },
        { src: "jira", auth: "JIRA_BASE_URL + JIRA_EMAIL + JIRA_API_TOKEN (+ optional PLAN_PROJECT_KEY)", since: "0.1.0" },
        { src: "notion", auth: "NOTION_TOKEN + database id as PLAN_PROJECT_KEY", since: "0.1.0" },
      ],
    },
    workflows: {
      eyebrow: "Workflows",
      title: 'Four prompts cover <span class="accent">~90%</span> of real use',
      sub: "One sentence to the AI client; the tools chain automatically.",
      items: [
        {
          prompt: "I read https://rightclickip.xyz/ — capture it as an initiative, run analyze_initiative on it, score it, and produce a detailed spec draft I can hand to mk-spec-master.",
          chain: "add_initiative → analyze_initiative → add_initiative(overwrite=true) → score_initiative → generate_spec_draft(template='detailed') → mk-spec-master.parse_spec",
        },
        {
          prompt: "Every Monday, rank my Linear triage backlog with RICE and show me the trend vs last week and last month.",
          chain: "rank_backlog(method='rice', limit=10) → get_planning_history(window_days=30)",
        },
        {
          prompt: "Apply the senior-PM analysis SOP to IDEA-014 — I want target users, competition, market signal, risks, MVP scope, out-of-scope, and RICE rationale before I score it.",
          chain: "get_plan_context → fetch_initiative('IDEA-014') → analyze_initiative('IDEA-014', framework='default') → add_initiative(overwrite=true) → score_initiative",
        },
        {
          prompt: "Pull every Notion idea in the Triage view, rank them with RICE, then pack a Q3 2026 roadmap assuming 4 engineers and 20% buffer. Tell me if the feature/tech-debt/strategic mix looks healthy.",
          chain: "list_initiatives(status='triage') → rank_backlog → generate_roadmap(capacity_engineer_months=12, period='Q3 2026') → analyze_roadmap_balance",
        },
      ],
    },
    samples: {
      eyebrow: "Sample output",
      title: "Why analyze_initiative exists — a real case",
      sub: "Same URL, same idea, two passes. By default an AI client shortcuts into a shallow read and emits a confident-looking P0. analyze_initiative forces the senior-PM SOP first; the numbers become honest.",
      pass1Title: "Pass 1 — without analyze_initiative (AI guesses from the URL)",
      pass1: `IDEA-001  ·  One-click IP licensing platform (AI + blockchain)
  reach        500
  impact         2
  confidence   0.5
  effort        12  person-weeks
  out_of_scope  []  (none)
  RICE         (500 × 2 × 0.5) / 12  =  41.7   →   P0

A confident P0. Looks like a no-brainer "ship next quarter."`,
      pass2Title: "Pass 2 — with analyze_initiative (senior-PM SOP)",
      pass2: `IDEA-002  ·  RightClick — One-click IP licensing platform (AI + blockchain)
  reach        250                    ← scoped to "active users per quarter in
                                          initial regions (Singapore + US-west
                                          social)", not raw addressable market
  impact         2                    ← unchanged
  confidence   0.4                    ← dropped: logo wall unverifiable,
                                          AI-contract legal status untested,
                                          two-sided cold-start unproven, no GMV
  effort        18  person-weeks      ← raised: wallet 3w + AI templates 4w
                                          + contracts/NFT 3w + marketplace 3w
                                          + lawyer review + security 3w
                                          + backoffice/observability 2w
  out_of_scope  8 explicit items      ← fiat rails, cross-chain bridging,
                                          derivative auto-royalties (v2), multi-
                                          jurisdiction custom legal, DRM, PRO
                                          collective rights, video/animation, SSO
  RICE         (250 × 2 × 0.4) / 18  =  11.1   →   P1`,
      deltaCaption: "Same URL, same idea — 3.8× drop, P0 → P1. The difference between \"ship next quarter\" and \"validate first.\" analyze_initiative is the SOP that gets you there without needing a senior PM in the room.",
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
      titleHub: "Drop all three into your MCP client config",
      titleQa: "Add to your MCP client config",
      titleSpec: "Add to your MCP client config",
      titlePlan: "Add to your MCP client config",
      explain: "Restart your client, then talk to the AI like you always do.",
    },
    status: {
      eyebrow: "Status",
      title: "Latest release",
    },
  },
};

export default en;
