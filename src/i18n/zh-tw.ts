import type { Translation } from "./types";

const zhTw: Translation = {
  nav: {
    family: "家族",
    qa: "測試大師",
    spec: "規格大師",
    github: "GitHub",
  },
  footer: {
    support: "☕ 請我喝杯咖啡",
    builtBy: "MIT License · Built by",
  },

  hub: {
    hero: {
      eyebrow: "開源 · Model Context Protocol · AI-QA 家族",
      title: 'mk-<span class="accent">*</span> 家族<br/>把 AI QA 拆開來做',
      altName: "AI 大師系列 · MK FAMILY",
      sub: "一系列為 AI 驅動 QA 流程設計的 MCP server。每支只做一件事 —— <strong>規格</strong>進、<strong>測試</strong>出、<strong>覆蓋率</strong>追蹤、<strong>套件</strong>被教練、<strong>趨勢</strong>跨時間自我強化。把它們塞進 Claude / Cursor / Codex / Gemini 的 config，讓 AI 來開車。",
      ctaPrimary: "看看家族成員 →",
      ctaGhost: "到 GitHub 看原始碼",
    },
    members: {
      eyebrow: "目前成員",
      title: '兩支 MCP。<span class="accent">一個迴圈。</span>',
      sub: "mk-qa-master 跑測試。mk-spec-master 追測試覆蓋。兩支組成 spec → test → coverage → coach 完整迴圈——任何 MCP client 都能合起來用，不需要 MCP-to-MCP RPC。",
      deepDive: "深度介紹 →",
    },
    future: {
      eyebrow: "規劃中",
      title: '另外兩支 <span class="accent">設計中</span>',
      sub: "同一套教練層 pattern、換不同領域。設計上跟同一份 MCP client config 相容——之後加新成員就是多一段 JSON。",
      tag: "設計中",
    },
    loop: {
      eyebrow: "迴圈",
      title: '規格 → 測試 → 覆蓋率 → <span class="accent">教練</span>',
      sub: "每支 MCP 負責一段。AI client 自動串接。整個迴圈不會單獨跑——每一步都餵下一步。",
      steps: [
        { name: "規格", owner: "spec-master", blurb: "Linear / JIRA / Notion / Figma / GitHub Issues / Markdown" },
        { name: "測試", owner: "qa-master", blurb: "pytest / Jest / Cypress / Go test / Maestro · web + mobile" },
        { name: "覆蓋", owner: "spec-master", blurb: "spec ↔ test 對應矩陣 · drift 偵測 · @spec tag 自動 link" },
        { name: "教練", owner: "兩者", blurb: "optimization plan · 規格品質打分 · MCP 使用 telemetry" },
      ],
    },
    compat: {
      label: "相容所有 MCP client",
      runnersLabel: "驅動或讀取以下系統",
    },
    install: {
      eyebrow: "安裝",
      title: '把兩支都丟進你的 <span class="accent">MCP client config</span>',
      sub: "一段 JSON。AI client 會自動串。",
    },
  },

  qa: {
    hero: {
      eyebrow: "成員 1 · 迴圈的執行端",
      title: '讓我們把 <span class="accent">QA</span> 簡單化。',
      altName: "AI 測試大師 · MK QA MASTER",
      sub: "mk-qa-master 是一個 MCP server，讓 AI client 幫你跑 <strong>Web</strong>（pytest / Jest / Cypress / Go）跟<strong>手機</strong>（Maestro · iOS + Android · 含 BlueStacks）測試套件——從 URL 或當下手機畫面寫下一輪 TC，每跑完一次當你的「資料驅動 QA 優化顧問」。",
    },
    features: {
      eyebrow: "功能",
      title: '三件事。<span class="accent">一個 server。</span>Web + 手機。',
      sub: "按你會用到的頻率排。",
      cards: [
        {
          icon: "▶",
          title: "跨框架跑測試 · Web 跟手機",
          body: "用 <code>QA_RUNNER</code> 環境變數切 framework：Web 走 pytest / Jest / Cypress / Go，手機走 <code>maestro</code>（iOS Simulator、Android Emulator、實體機、BlueStacks 都吃）。內建 auto-retry、JUnit XML、截圖、Playwright <code>trace.zip</code> / Maestro recordings。",
        },
        {
          icon: "✎",
          title: "從 URL 或當下畫面寫測試",
          body: "<code>analyze_url</code> 偵測 DOM、<code>analyze_screen</code> 抓手機畫面 hierarchy。兩者都拆出 form / cta / nav / tab-bar 模塊與真實 selector，再由 <code>generate_test</code> 產生可直接跑的 pytest <em>或</em> Maestro YAML — 不是 <code># TODO</code> 占位符。",
        },
        {
          icon: "⚡",
          title: "你的 QA 優化顧問",
          body: "每次 run 自動快照並寫一份新的 <code>optimization-plan.md</code>。flaky / broken / slow_regression 排序，每條都附證據——不是憑感覺。Web 跟手機共用同一條迴圈。",
        },
      ],
    },
    pipeline: {
      eyebrow: "流程",
      title: "一個會自我修正的迴圈",
      sub: "每次 run 餵 optimizer、optimizer 指出最弱環節、下次 run 優先攻那一環。沒有這個迴圈、AI 只是個更快的 monkey tester。",
    },
    knowledge: {
      eyebrow: "領域知識的三層架構",
      title: "不只看 DOM、更要懂業務",
      sub: "光看 DOM 的 analyzer 只能產「空欄位送出應出錯」這種泛例——就是換包裝的 monkey testing。所以我們疊了三層真 QA 知識。",
      layers: [
        {
          name: "內建",
          body: "ISTQB 七大原則、等價分割、邊界值、決策表、狀態轉換、測試金字塔、Shift-Left、Mobile checklist、QA metrics。全部內建在 server。",
        },
        {
          name: "你的檔案",
          body: "把 <code>qa-knowledge.md</code> 放進專案根目錄：業務規則、歷史 Bug、標準斷言文字、user journey、技術約束。<code>init_qa_knowledge</code> 一鍵起手範本。",
        },
        {
          name: "Per-test inline",
          body: "把領域知識 slice 透過 <code>business_context</code> 帶進 <code>generate_test</code>，自動印成 <code># Business context:</code> 註解區塊在 test 函式裡，reviewer 不用切到別的 wiki 就看得到「為什麼測這個」。",
        },
      ],
    },
    coach: {
      eyebrow: "優化顧問",
      title: "從三個視角看你的工作",
      sub: "每次 run 結束、顧問讀 history/ + telemetry log，寫一份排序好的行動清單。三個視角：",
      lenses: [
        {
          name: "測試品質",
          body: "每條 test 的 outcomes 字串（<code>PFPFP</code>）算 flake_score，加上 error signature 比對。連 3 次失敗 + 相同 signature → 標 <em>broken</em>（真 bug、不是 flake）。",
        },
        {
          name: "MCP 易用性",
          body: "Tool 呼叫 telemetry 找 top tool、錯誤率、重複 args、常見鏈（A→B）。告訴你哪裡可以包 meta-tool 或加 cache。",
        },
        {
          name: "AI 有效度",
          body: "<code>generate_test</code> 寫的測試有沒有出現在下次 run？<code>analyze_url</code> 偵測的模塊有沒有對應 test 檔？採用率 vs 覆蓋缺口、全部追蹤。",
        },
      ],
    },
    tools: {
      eyebrow: "工具",
      title: '16 個 tool、分 <span class="accent">5 類</span>',
      sub: "你不用記名稱——README 裡的 prompting cookbook 有對應的中文 prompt 寫法，Web 跟手機都有。",
      groups: [
        { label: "探索", items: ["get_runner_info", "list_tests", "analyze_url", "analyze_screen"] },
        { label: "產生", items: ["generate_test", "auto_generate_tests", "codegen", "init_qa_knowledge", "get_qa_context"] },
        { label: "執行", items: ["run_tests", "run_failed"] },
        { label: "回報", items: ["get_test_report", "get_failure_details", "generate_html_report", "get_test_history"] },
        { label: "顧問", items: ["get_optimization_plan"] },
      ],
    },
    terminal: {
      line1: "測試 https://your-site/login — 對每個模塊產 1 條 test",
      cmt1: "# Claude 呼叫 MCP server →",
      out1: "4 個模塊 · 12 個 endpoint · 18 條候選 TC",
      out2: "下一步：flaky checkout-flow、broken coupon-rule",
      line2: "下一步該優化什麼？",
    },
  },

  spec: {
    hero: {
      eyebrow: "成員 2 · 迴圈的追蹤端",
      title: '規格進。<br/><span class="accent">場景出。</span>',
      altName: "AI 規格大師 · MK SPEC MASTER",
      sub: "mk-spec-master 讀 <strong>Linear / JIRA / GitHub Issues / Notion / Figma / Markdown</strong> 的規格，轉成結構化場景丟給測試 runner。維持即時 <strong>spec ↔ test</strong> 覆蓋矩陣、對規格本身打分，並從 v0.4 起<strong>跨時間自我強化</strong>——trend、chronic-spec 偵測、工具使用 telemetry。這是相對 Kiro / Spec Kit / Jama 的差異化核心。",
    },
    notFor: {
      eyebrow: "範圍",
      title: "這「<em>不</em>」是什麼",
      sub: "mk-spec-master 站在規格來源跟測試 runner 之間。它不是編輯器、不是 runner、不是 LLM。",
      rows: [
        { not: "規格編輯器", instead: "Linear / JIRA / Notion / Markdown——規格寫在你原本就用的地方" },
        { not: "測試 runner", instead: "mk-qa-master（pytest / Jest / Cypress / Go test / Maestro）" },
        { not: "issue tracker UI", instead: "Linear / JIRA / Notion 各自的原生介面" },
        { not: "spec → code 生成器", instead: "GitHub Spec Kit、AWS Kiro" },
        { not: "LLM", instead: "推理交給你的 AI client（Claude / Cursor / Codex / Gemini）" },
      ],
    },
    tools: {
      eyebrow: "Tool 表",
      title: '18 個 tool、分 <span class="accent">7 個角色</span>',
      sub: "按角色分組。每組是 spec → test → coverage → coach 流水線的一層。",
      groups: [
        {
          name: "Meta — 暖機",
          items: [{ tool: "get_spec_source_info", purpose: "目前用哪個 adapter、有哪些可用——session 第一個叫" }],
        },
        {
          name: "Discovery — 找跟讀規格",
          items: [
            { tool: "list_specs", purpose: "依 status / label / limit 過濾" },
            { tool: "fetch_spec", purpose: "依 id 拉單一 spec 完整內容" },
            { tool: "parse_spec", purpose: "啟發式抽 AC（en + zh-TW + zh-CN 標題格式），回傳 ac_hash" },
          ],
        },
        {
          name: "Generation — 規格變可測物件",
          items: [
            { tool: "extract_scenarios", purpose: "AC → 場景，分 happy / edge / error" },
            { tool: "generate_test_plan", purpose: "一鍵 markdown 計畫，可直接餵 mk-qa-master" },
          ],
        },
        {
          name: "Coverage & drift — 追蹤層",
          items: [
            { tool: "link_test_to_spec", purpose: "記錄某 test 對應某 spec，存 title / source / ac_hash" },
            { tool: "auto_link_tests", purpose: "掃 test 檔抓 @spec: tag。Python / JS / TS / Go" },
            { tool: "get_coverage_matrix", purpose: '「哪些 spec 沒被測」一次回答' },
            { tool: "get_drift_report", purpose: "fresh / drifted / unknown / stranded 四格" },
          ],
        },
        {
          name: "Coach — 品質 + 排序",
          items: [
            { tool: "analyze_spec_quality", purpose: "抓模糊用詞、實作細節洩漏、未定義角色" },
            { tool: "propose_spec_improvements", purpose: "PM 可直接照做的 markdown 改寫建議" },
            { tool: "get_optimization_plan", purpose: "三層整合：覆蓋 + 品質 + drift" },
          ],
        },
        {
          name: "Knowledge — 領域知識",
          items: [
            { tool: "init_spec_knowledge", purpose: "起始 spec-knowledge.md（EARS、INVEST、AC 品質規則）" },
            { tool: "get_spec_context", purpose: "讀方法論檔，可選 section 過濾" },
          ],
        },
        {
          name: "Self-reinforcement — 跨時間自我強化（v0.4）",
          items: [
            { tool: "get_spec_history", purpose: "覆蓋 / 品質 / drift 的 trend：當下 vs ~7 天前 vs ~30 天前" },
            { tool: "get_drift_signature", purpose: "長期問題偵測：unstable / 長期低品質 / 長期沒 ac_hash" },
            { tool: "get_telemetry", purpose: "工具使用 log：熱門 tool、錯誤率、p50/p95、未被呼叫 tool。不記錄參數內容" },
          ],
        },
      ],
    },
    adapters: {
      eyebrow: "來源 adapter",
      title: "6 個來源、共用一組 tool",
      sub: "用 <code>SPEC_SOURCE</code> 環境變數切。同樣的工具，六種後端。",
      rows: [
        { src: "markdown_local", auth: "不用", since: "0.1.0" },
        { src: "github_issues", auth: "gh auth login 或 GITHUB_TOKEN", since: "0.1.0" },
        { src: "linear", auth: "LINEAR_API_KEY + SPEC_PROJECT_KEY", since: "0.2.2" },
        { src: "jira", auth: "JIRA_BASE_URL + JIRA_EMAIL + JIRA_API_TOKEN", since: "0.2.3" },
        { src: "notion", auth: "NOTION_TOKEN + database id 當 SPEC_PROJECT_KEY", since: "0.3.0" },
        { src: "figma", auth: "FIGMA_TOKEN + file key 當 SPEC_PROJECT_KEY", since: "0.3.1" },
      ],
    },
    workflows: {
      eyebrow: "工作流程",
      title: '四個 prompt 涵蓋 <span class="accent">~90%</span> 的真實用法',
      sub: "一句話給 AI client，工具自動串。",
      items: [
        {
          prompt: "用 mk-spec-master 抓 LIN-123、抽場景、丟 mk-qa-master 產 Playwright 測試、跑起來、更新覆蓋矩陣。",
          chain: "fetch_spec → parse_spec → extract_scenarios → mk-qa-master.generate_test (×N) → link_test_to_spec (×N) → mk-qa-master.run_tests → get_coverage_matrix",
        },
        {
          prompt: "把所有 in-progress 的 spec 都做品質檢查，給我優先級改善計畫。",
          chain: "list_specs(status='in-progress') → analyze_spec_quality → propose_spec_improvements → get_optimization_plan",
        },
        {
          prompt: "我剛重新命名一堆 test 檔——掃 source tree 把 spec ↔ test 索引重建一次。",
          chain: "auto_link_tests → get_coverage_matrix",
        },
        {
          prompt: "進規格工作前：把 spec-knowledge 方法論載入，告訴我目前用的是哪個 source。",
          chain: "get_spec_source_info → get_spec_context",
        },
      ],
    },
    samples: {
      eyebrow: "範例輸出",
      title: "你實際會拿到什麼",
      sub: "兩個最常 show 給人看的輸出——markdown 直接 paste 進 Slack / JIRA / sprint planning doc 都能用。",
      optimizationPlan: `# Optimization plan

_Coverage matrix: 23 spec(s) tracked, 4 untested._
_Spec quality: 23 spec(s) analyzed, 17 finding(s)._
_Drift: 2 drifted, 0 stranded, 5 without ac_hash._

## 🔴 Layer 1 — 覆蓋缺口

**零測試的規格**（先看這些——所有業務風險都藏這裡）：
- \`LIN-204\` — Apply promo code at checkout
- \`LIN-211\` — Refund flow

## 🟡 Layer 2 — 規格品質

### \`LIN-098\` — Checkout latency  (score: 80/100, findings: 4)
- 🟡 \`ac-1\`: 量化（例如 'response within 200 ms'）  (evidence: \`fast\`)
- 🔴 \`ac-3\`: 改寫成使用者能觀察到的行為  (evidence: \`redis\`)

## 🔵 Layer 3 — 流程飄移

**Drifted**（規格在 link 之後改過——回頭看哪些 test 過期）：
- \`LIN-123\` — Apply discount at checkout · 4 個 test 可能 stale`,
      coverageMatrix: `# 覆蓋矩陣

- 追蹤的 spec 數：23
- 顯示中（min_tests=0）：23
- 零測試 spec：4

| Spec      | 標題                            | 測試 | 最後狀態 |
|-----------|--------------------------------|------:|---------|
| \`LIN-204\` | Apply promo code at checkout   |     0 | —       |
| \`LIN-123\` | Apply discount at checkout     |     4 | passed  |`,
    },
  },

  cta: {
    quickStart: "快速開始 →",
    readDocs: "看完整文件",
    sibling: "姐妹專案 →",
    install: "安裝",
    github: "GitHub",
    pypi: "PyPI",
    meetFamily: "看看家族成員 →",
  },

  common: {
    install: {
      titleHub: "把兩支都丟進你的 MCP client config",
      titleQa: "加進 MCP client config",
      titleSpec: "加進 MCP client config",
      explain: "重啟 client，然後就用你平常跟 AI 對話的方式講就好。",
    },
    status: {
      eyebrow: "狀態",
      title: "最新版本",
    },
  },
};

export default zhTw;
