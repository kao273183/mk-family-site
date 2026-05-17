import type { Translation } from "./types";

const zhTw: Translation = {
  nav: {
    family: "家族",
    qa: "測試大師",
    spec: "規格大師",
    plan: "規劃大師",
    github: "GitHub",
  },
  footer: {
    support: "☕ 請我喝杯咖啡",
    builtBy: "MIT License · Built by",
  },

  hub: {
    hero: {
      eyebrow: "開源 · Model Context Protocol · AI 開發家族",
      title: 'mk-<span class="accent">*</span> 家族<br/>把 AI 開發流程拆開來做',
      altName: "AI 大師系列 · MK FAMILY",
      sub: "為 AI 驅動軟體開發流程設計的 MCP server 家族。每支只做一件事——<strong>點子</strong>排序、<strong>規格</strong>產出、<strong>測試</strong>生成、<strong>覆蓋率</strong>追蹤、<strong>套件</strong>被教練、<strong>趨勢</strong>跨時間自我強化。把它們塞進 Claude / Cursor / Codex / Gemini 的 config，讓 AI 來開車。",
      ctaPrimary: "看看家族成員 →",
      ctaGhost: "到 GitHub 看原始碼",
    },
    members: {
      eyebrow: "目前成員",
      title: '三支 MCP。<span class="accent">一條完整 pipeline。</span>',
      sub: "mk-plan-master 排序點子。mk-spec-master 把規格變場景、追測試覆蓋。mk-qa-master 跑測試。三支組成 idea → plan → spec → test → coverage → coach 完整迴圈——任何 MCP client 都能合起來用，不需要 MCP-to-MCP RPC。",
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
      title: '計劃 → 規格 → 程式碼 → 測試 → 覆蓋率 → <span class="accent">教練</span>',
      sub: "三支 MCP 各負責一段，AI client 自動串接。中間的「寫程式碼」一格故意交給你的 IDE（Claude Code / Cursor / Copilot）——家族不碰這層、不重造 IDE 的輪子。TDD 框架下，測試是規格的可執行版本，你的 IDE 把紅燈一條條變綠。然後從教練回到計劃、看下一個 idea。",
      steps: [
        { name: "計劃", owner: "plan-master", blurb: "Linear / JIRA / Notion / Markdown · RICE 排序 + 資深 PM 分析 + spec-draft bridge" },
        { name: "規格", owner: "spec-master", blurb: "Linear / JIRA / Notion / Figma / GitHub Issues / Markdown" },
        { name: "程式碼", owner: "你的 IDE", blurb: "Claude Code · Cursor · Copilot——AI 對著紅燈測試寫 app 程式碼，家族故意不碰這層" },
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
      title: '把三支都丟進你的 <span class="accent">MCP client config</span>',
      sub: "一段 JSON。AI client 會自動串：點子 → 計劃 → 規格 → 測試。",
    },
  },

  qa: {
    hero: {
      eyebrow: "成員 1 · 迴圈的執行端",
      title: '讓我們把 <span class="accent">QA</span> 簡單化。',
      altName: "AI 測試大師 · MK QA MASTER",
      sub: "mk-qa-master 是一個 MCP server，讓 AI client 幫你跑 <strong>Web</strong>（pytest / Jest / Cypress / Go）、<strong>手機</strong>（Maestro · iOS + Android · 含 BlueStacks）跟 <strong>API</strong> 測試（你 pytest / Jest / Cypress / Go test 裡用 httpx / supertest / cy.request 寫的 API 測試一樣吃）——從 URL 或當下手機畫面寫下一輪 TC，每跑完一次當你的「資料驅動 QA 優化顧問」。",
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
      steps: [
        { name: "分析", tool: "analyze_url / analyze_screen", blurb: "Web 偵測 DOM、手機抓 hierarchy → form / cta / nav 模塊 + 真實 selector。" },
        { name: "產生", tool: "generate_test / auto_generate_tests", blurb: "對抓到的模塊產可直接跑的 pytest .py 或 Maestro .yaml——不是 # TODO 占位符。" },
        { name: "執行", tool: "run_tests / run_failed", blurb: "驅動原生 runner，產 JUnit XML、截圖、trace.zip / Maestro 錄影。" },
        { name: "回報", tool: "get_test_report / get_failure_details", blurb: "outcome 字串 + error signature + history 快照。下一步餵給顧問。" },
        { name: "顧問", tool: "get_optimization_plan", blurb: "三個視角（套件 / MCP / AI）→ 排序好的下次 run 行動清單。迴圈在這裡閉合。" },
      ],
      loopback: "↻ 下次 run 優先攻最弱的那條",
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
    notFor: {
      eyebrow: "範圍",
      title: "這「<em>不</em>」是什麼",
      sub: "mk-qa-master 站在 AI client 跟測試 framework 之間。它不是 framework、不是 LLM、不是 CI runner、不是 source-code 分析器、也不是 SaaS UI。",
      rows: [
        { not: "測試 framework", instead: "你帶 pytest / Jest / Cypress / Go test / Maestro 進來——qa-master 負責驅動它們" },
        { not: "LLM", instead: "推理交給你的 AI client（Claude / Cursor / Codex / Gemini）。qa-master 只 expose tool" },
        { not: "CI runner", instead: "本地跑 + 產 JUnit XML / HTML 報告。把 JUnit 接進 GitHub Actions / Jenkins / GitLab 是你的事" },
        { not: "原始碼分析器", instead: "分析的是 live DOM（Web）/ view hierarchy（手機），不是你 repo 的 source code" },
        { not: "SaaS 儀表板", instead: "MCP-native，住在 AI client 裡。HTML 報告就是一個自包含 .html 檔" },
      ],
    },
    tools: {
      eyebrow: "Tool 表",
      title: '16 個 tool、分 <span class="accent">5 個角色</span>',
      sub: "按角色分組。每組是 analyze → generate → run → report → advise 迴圈的一層。README 的 prompting cookbook 有中文自然語句寫法——你很少需要自己叫 tool 名稱。",
      groups: [
        {
          name: "Discover — 暖機 + 掃描",
          items: [
            { tool: "get_runner_info", purpose: "目前用哪個 runner、有哪些可用——session 第一個叫，讓 AI 知道後面要產 Playwright .py 還是 Maestro .yaml" },
            { tool: "list_tests", purpose: "用 runner 原生機制列全部可執行測試——pytest --collect-only、jest --listTests、cypress glob、go -list、maestro YAML 遞迴" },
            { tool: "analyze_url", purpose: "Web：偵測 live URL → form / nav / dialog / cta 模塊 + selectors + 頁面打過的 API endpoints + 跑版警告 + candidate TC" },
            { tool: "analyze_screen", purpose: "手機：dump <code>maestro hierarchy</code> → form / cta / tab_bar 模塊 + candidate TC，自動濾掉 iOS 狀態列 + asset 名稱噪音" },
          ],
        },
        {
          name: "Generate — 模塊變可跑測試",
          items: [
            { tool: "generate_test", purpose: "test 骨架；帶 analyze_url/analyze_screen 的 <code>module</code> 進來時，產可直接跑的 Playwright .py 或 Maestro .yaml——真 selector、不是 <code># TODO</code>" },
            { tool: "auto_generate_tests", purpose: "一鍵：analyze_url → 每個 module 產一條 test。給 URL，回 tests/ 資料夾" },
            { tool: "codegen", purpose: "啟動 Playwright codegen（Web）/ 提示用 <code>maestro studio</code>（手機）。錄基準 happy-path 用" },
            { tool: "init_qa_knowledge", purpose: "在 project root 起 qa-knowledge.md 範本——業務規則 / 歷史 Bug / 標準斷言 / user journey / 技術約束" },
            { tool: "get_qa_context", purpose: "讀 qa-knowledge.md（內建 ISTQB fallback）。把相關段落帶進 generate_test.business_context 寫有業務知識的測試" },
          ],
        },
        {
          name: "Run — 執行測試套件",
          items: [
            { tool: "run_tests", purpose: "用 active runner 跑；產 report.json + JUnit XML、snapshot 到 history/、自動更新 optimization-plan.md。可選 <code>filter</code>" },
            { tool: "run_failed", purpose: "只重跑上次失敗——pytest --lf、jest --onlyFailures、cypress/go 反查、maestro nodeid → .yaml。比整套快很多" },
          ],
        },
        {
          name: "Report — 看剛剛發生什麼",
          items: [
            { tool: "get_test_report", purpose: "摘要：passed / failed / skipped / flaky_in_run / duration。便宜——多輪操作中間反覆查狀態用" },
            { tool: "get_failure_details", purpose: "每條失敗的 message + screenshot + Playwright trace.zip + video 路徑 + 解析的 step 序列。「為什麼 fail」一鍵答" },
            { tool: "generate_html_report", purpose: "把最近一次 run 渲染成一個自包含 HTML——base64 截圖、trend sparkline、Passed 收合 / Failed 展開。可丟 Slack" },
            { tool: "get_test_history", purpose: "最近 N 次歸檔 run 摘要——flake / duration 退化 / pass-rate trend。要可執行建議接 get_optimization_plan" },
          ],
        },
        {
          name: "Advisor — 自我強化教練",
          items: [
            { tool: "get_optimization_plan", purpose: "三層排序好的行動清單：套件品質（flake / broken / slow_regression）+ MCP 使用（top tool、重複 args、錯誤率）+ AI 效益（generate_test 採用率、覆蓋缺口）。每次 run 自動寫 optimization-plan.md" },
          ],
        },
      ],
    },
    adapters: {
      eyebrow: "Runner",
      title: "7 個 runner、共用一組 tool",
      sub: "用 <code>QA_RUNNER</code> 環境變數切。七種 framework、同一個 MCP 介面——四種 Web、手機走 Maestro、<strong>API 走 Schemathesis</strong>（OpenAPI / Swagger，v0.6.0 起）或 <strong>Newman</strong>（Postman collection，v0.6.1 起）。既有的 API 測試（pytest + <code>httpx</code> / Jest + <code>supertest</code> / Cypress <code>cy.request()</code> / Go <code>httptest</code>）繼續搭原 runner、不用搬家。Pact provider 驗證在 v0.7.0 roadmap。",
      rows: [
        { src: "pytest-playwright", auth: "QA_RUNNER=pytest", since: "0.1.0" },
        { src: "jest", auth: "QA_RUNNER=jest", since: "0.2.0" },
        { src: "cypress", auth: "QA_RUNNER=cypress", since: "0.2.0" },
        { src: "go test", auth: "QA_RUNNER=go", since: "0.2.0" },
        { src: "maestro（iOS + Android + BlueStacks）", auth: "QA_RUNNER=maestro（+ 選用 QA_ANDROID_HOST 給 BlueStacks）", since: "0.3.0" },
        { src: "schemathesis（OpenAPI / Swagger）", auth: "QA_RUNNER=schemathesis + QA_OPENAPI_URL（http(s):// 或 file://）；裝 mk-qa-master[api]", since: "0.6.0" },
        { src: "newman（Postman collection）", auth: "QA_RUNNER=newman + QA_POSTMAN_COLLECTION（路徑）；系統前置：npm install -g newman", since: "0.6.1" },
      ],
    },
    workflows: {
      eyebrow: "工作流程",
      title: '四個 prompt 涵蓋 <span class="accent">~90%</span> 的真實用法',
      sub: "一句話給 AI client，工具自動串。",
      items: [
        {
          prompt: "測 https://your-site/login——分析頁面、對每個模塊寫測試、跑、再告訴我要修什麼。",
          chain: "analyze_url → generate_test (×N modules) → run_tests → get_failure_details → get_optimization_plan",
        },
        {
          prompt: "我剛加了三個新功能頁——analyzer 找到什麼就自動產測試、跑起來。",
          chain: "auto_generate_tests(url=...) → run_tests → get_test_report → get_optimization_plan",
        },
        {
          prompt: "這週測試套件哪裡爛——給我排序好的行動清單，不要憑感覺。",
          chain: "get_test_history(limit=30) → get_optimization_plan(history_limit=30, telemetry_limit=2000)",
        },
        {
          prompt: "在 iOS Simulator 上測我 app 的條碼按鈕，順便告訴我它會不會 flaky。",
          chain: "analyze_screen(app_id='com.example.app', launch_app=true) → generate_test(module=<cta>) → run_tests → get_optimization_plan",
        },
      ],
    },
    samples: {
      eyebrow: "範例輸出",
      title: "你實際會拿到什麼",
      sub: "跟 spec-master 同一套形式——markdown，可直接 paste 進 Slack / JIRA / sprint planning doc。每次 run 完自動寫。",
      optimizationPlan: `# Optimization Plan — 2026-05-12T14:03:40

_Based on 6 archived runs._

## Prioritized Actions

### 1. 🔴 HIGH — flaky
- **Target**: \`tests/test_login.py::test_invalid_credentials\`
- **Evidence**: flake_score=0.4, outcomes=PFPFP, rerun_count=1
- **Suggestion**: 加 explicit wait（wait_for_response / locator wait）
- **auto_action_hint**: \`get_failure_details(test_id="test_invalid_credentials")\`

### 2. 🟡 MEDIUM — coverage_gap
- **Target**: \`register_form\`（analyze_url 在 /register 偵測到的模塊）
- **Evidence**: analyze_url 偵測但 repo 內找不到對應 test_*.py
- **Suggestion**: \`generate_test(description="...", filename="test_register_form.py")\`

### 3. 🟡 MEDIUM — slow_regression
- **Target**: \`tests/test_checkout.py::test_full_flow\`
- **Evidence**: 最近 6 次 run，median duration 1.8× baseline
- **Suggestion**: 看 network wait 用法、固定 fixture data、考慮 parallel mark

## MCP usability
- Top tool：\`run_tests\` (38%) · \`analyze_url\` (22%) · \`get_failure_details\` (14%)
- 常見呼叫鏈：\`analyze_url → generate_test\`（出現 17 次）
- 錯誤率：2.3%（1 次 analyze_url 在慢 staging 上 timeout）

## AI 有效度
- generate_test 採用率：11 條產出有 9 條出現在下次 run（82%）
- 覆蓋缺口：1 個 analyze_url 偵測的模塊沒有對應 test 檔（\`register_form\`）`,
      testReport: `# Test Report — pytest-playwright

- total: 23
- passed: 19
- failed: 3
- flaky_in_run: 1   ← auto-retry 救回
- skipped: 0
- duration: 31.4s

## Failures
1. \`tests/test_login.py::test_invalid_credentials\`
   - message: \`AssertionError: 預期錯誤訊息未顯示\`
   - screenshot: \`test-results/.../test-failed-1.png\`
   - trace:      \`test-results/.../trace.zip\`
   - video:      \`test-results/.../video.webm\`

2. \`tests/test_coupon.py::test_idempotency\`
   - message: \`Timeout 等 /api/coupon (5000ms)\`
   - last step: \`Page.waitForResponse('/api/coupon')\``,
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

  plan: {
    hero: {
      eyebrow: "成員 3 · 迴圈的規劃端",
      title: '點子進。<br/><span class="accent">排序好的計劃出。</span>',
      altName: "AI 規劃大師 · MK PLAN MASTER",
      sub: "mk-plan-master 讀 <strong>Markdown / Linear / JIRA / Notion</strong> 裡的點子，做 idea triage、跑 RICE / Impact-Effort 排序，產一份能直接餵 <code>mk-spec-master.parse_spec</code> 的 spec draft。<strong>analyze_initiative</strong> 是核心——強制 AI 走資深 PM 分析 SOP，不再用兩段話亂猜 RICE。內建決策歷史 + 簽名 + telemetry，把 mk-spec-master v0.4 的自我強化模式套到上游。",
    },
    why: {
      eyebrow: "為什麼這支存在",
      title: "把 Idea → Plan → Spec → Code → Test 的迴圈補上游那一格",
      sub: "mk-spec-master 和 mk-qa-master 已經顧到右半邊。上游那個「30~200 個點子怎麼變成排序好的季度 roadmap、再吐成 spec draft」的缺口，沒有人做 MCP-native。mk-plan-master 把那一格補起來——而且 generate_spec_draft 的輸出 verbatim 餵進 mk-spec-master.parse_spec，沒有手動 reformat、沒有 copy-paste 脆弱性。",
    },
    notFor: {
      eyebrow: "範圍",
      title: "這「<em>不</em>」是什麼",
      sub: "mk-plan-master 站在點子來源跟 spec 之間。它不是 web crawler、不是 code writer、不是 LLM、不是 SaaS UI。",
      rows: [
        { not: "Web crawler", instead: "AI client 自己用 WebFetch / chat 蒐集，再呼叫 add_initiative 寫成 markdown" },
        { not: "Code writer", instead: "spec_draft 進 mk-spec-master → 程式碼留給 IDE（Claude Code / Cursor / Copilot）" },
        { not: "LLM", instead: "推理交給你的 AI client（Claude / Cursor / Codex / Gemini）。analyze_initiative 只 scaffold prompt、不呼叫 LLM" },
        { not: "Productboard / Aha! 替代 UI", instead: "MCP-native，住在 AI client 裡。直接讀你原本就在用的 Linear / JIRA / Notion" },
        { not: "Spec 編輯器", instead: "mk-spec-master + 你原本就用的 Linear / JIRA / Notion / Markdown" },
      ],
    },
    tools: {
      eyebrow: "Tool 表",
      title: '15 個 tool、分 <span class="accent">9 個角色</span>',
      sub: "按角色分組。每組是 idea → plan → spec → memory 流水線的一層。",
      groups: [
        {
          name: "Meta — 暖機",
          items: [{ tool: "get_plan_source_info", purpose: "目前用哪個 adapter、有哪些可用、版本——session 第一個叫" }],
        },
        {
          name: "Discovery — 找跟讀點子",
          items: [
            { tool: "list_initiatives", purpose: "依 status / label / limit 過濾。Linear: triage / backlog / unstarted；JIRA: To Do；Notion: Triage / Backlog / Idea" },
            { tool: "fetch_initiative", purpose: "依 id 拉單一 initiative，回傳含 raw_metadata（RICE 輸入：reach / impact / confidence / effort / okr）" },
          ],
        },
        {
          name: "Capture — chat / WebFetch 接手",
          items: [
            { tool: "add_initiative", purpose: "把 AI 透過 WebFetch / chat / 通話筆記蒐集到的點子寫成 initiatives/<id>.md。**家族不爬 URL**——你 summarize、這支寫。自動產 IDEA-NNN" },
          ],
        },
        {
          name: "Analysis — 資深 PM SOP",
          items: [
            { tool: "analyze_initiative", purpose: "**核心 meta-tool**。強制 AI 跑資深 PM 分析 SOP——target users / competition / market signal / risks / MVP scope / out-of-scope / RICE rationale。三個 framework：default（7 段）/ lite（4 段）/ lean_canvas（9 格）。不呼叫 LLM，只 scaffold prompt" },
          ],
        },
        {
          name: "Scoring — 排序 backlog",
          items: [
            { tool: "score_initiative", purpose: "RICE 或 Impact-Effort 打分。Tier：P0 > 25、P1 10..25、P2 3..10、P3 < 3。寫一筆 scored decision 到 index.json" },
            { tool: "rank_backlog", purpose: "全 backlog 打分、回 top-N。**自動 archive snapshot**（debounce 5 分鐘）餵 get_planning_history / get_decision_signature 算 trend" },
          ],
        },
        {
          name: "Bridge — 家族鎖鏈",
          items: [
            { tool: "generate_spec_draft", purpose: "**家族橋接 tool**。產出 markdown spec draft，shape 成 mk-spec-master.parse_spec(raw_text=...) 能 verbatim 吃。三個 template：default / lite / detailed" },
          ],
        },
        {
          name: "Roadmap — 季度規劃",
          items: [
            { tool: "generate_roadmap", purpose: "把排序後 backlog 塞進季度 markdown roadmap，吃 capacity envelope（engineer-months × 4 person-weeks）扣 buffer（預設 20%）。Greedy score-per-effort packer" },
            { tool: "analyze_roadmap_balance", purpose: "把 top-N 分 feature / tech_debt / strategic / unlabeled 桶子，回 ratio + score-share + heuristic 建議。「roadmap 平衡嗎？tech debt 餓死了嗎？」" },
          ],
        },
        {
          name: "Knowledge — 方法論",
          items: [
            { tool: "init_plan_knowledge", purpose: "起 plan-knowledge.md：RICE / WSJF / Impact-Effort / OKR / INVEST / personas + 待填 OKR / strategic bets / tech-debt / glossary 段落。idempotent" },
            { tool: "get_plan_context", purpose: "讀 plan-knowledge.md（內建 fallback），可選 section 過濾。session 開頭叫，後續每個 score 都吃到同一份方法論" },
          ],
        },
        {
          name: "Self-reinforcement — 跨時間自我強化",
          items: [
            { tool: "get_planning_history", purpose: "Trend 差：當下 vs ~7d / ~30d 的 top-10 churn + 平均分數。「有進步嗎？同一個點子永遠最頂？」" },
            { tool: "get_decision_signature", purpose: "Chronic pattern：**ghost**（top-10 出現 >50% 但從沒 spec_generated）、**whiplash**（RICE 分數震盪 >50%）、**orphan OKR**（index 有但 top-10 沒對應 initiative）" },
            { tool: "get_telemetry", purpose: "聚合 telemetry.jsonl（只記 name + duration + ok，**永遠不記**參數內容）：top tools、error rate、p50 / p95 / p99、dead surface" },
          ],
        },
      ],
    },
    adapters: {
      eyebrow: "來源 adapter",
      title: "4 個來源、共用一組 tool",
      sub: "用 <code>PLAN_SOURCE</code> 環境變數切。同樣的工具，四種後端。",
      rows: [
        { src: "markdown_local", auth: "不用", since: "0.1.0" },
        { src: "linear", auth: "LINEAR_API_KEY (+ PLAN_PROJECT_KEY 選用)", since: "0.1.0" },
        { src: "jira", auth: "JIRA_BASE_URL + JIRA_EMAIL + JIRA_API_TOKEN (+ PLAN_PROJECT_KEY 選用)", since: "0.1.0" },
        { src: "notion", auth: "NOTION_TOKEN + database id 當 PLAN_PROJECT_KEY", since: "0.1.0" },
      ],
    },
    workflows: {
      eyebrow: "工作流程",
      title: '四個 prompt 涵蓋 <span class="accent">~90%</span> 的真實用法',
      sub: "一句話給 AI client，工具自動串。",
      items: [
        {
          prompt: "我從客戶 call 整理了一個 feature idea——capture 成 initiative、跑 analyze_initiative、score、再產一份 detailed spec draft 餵 mk-spec-master。",
          chain: "add_initiative → analyze_initiative → add_initiative(overwrite=true) → score_initiative → generate_spec_draft(template='detailed') → mk-spec-master.parse_spec",
        },
        {
          prompt: "每週一把我的 Linear triage backlog 用 RICE 排序，秀對上週、上月的 trend。",
          chain: "rank_backlog(method='rice', limit=10) → get_planning_history(window_days=30)",
        },
        {
          prompt: "對 IDEA-014 跑資深 PM 分析 SOP——我要 target users / competition / market signal / risks / MVP scope / out-of-scope / RICE 理由，分完才打分。",
          chain: "get_plan_context → fetch_initiative('IDEA-014') → analyze_initiative('IDEA-014', framework='default') → add_initiative(overwrite=true) → score_initiative",
        },
        {
          prompt: "把 Notion Triage view 的點子全部拉出來、RICE 排序、4 個工程師 20% buffer 包成 Q3 2026 roadmap，再告訴我 feature/tech-debt/strategic 比例健不健康。",
          chain: "list_initiatives(status='triage') → rank_backlog → generate_roadmap(capacity_engineer_months=12, period='Q3 2026') → analyze_roadmap_balance",
        },
      ],
    },
    samples: {
      eyebrow: "範例輸出",
      title: "為什麼 analyze_initiative 存在 — 一個真實 case",
      sub: "同一個 idea、兩次 pass。AI 預設會用兩段 blurb 亂猜 RICE，產出一個看起來很自信的 P0。analyze_initiative 強制走資深 PM SOP，數字變誠實。",
      pass1Title: "Pass 1 — 沒有 analyze_initiative（AI 直接猜）",
      pass1: `IDEA-001  ·  自助式新手引導精靈
  reach        500
  impact         2
  confidence   0.5
  effort        12  人週
  out_of_scope  []  （無）
  RICE         (500 × 2 × 0.5) / 12  =  41.7   →   P0

漂亮的 P0。看起來是「下季就 ship」的 no-brainer。`,
      pass2Title: "Pass 2 — 走完 analyze_initiative（資深 PM SOP）",
      pass2: `IDEA-002  ·  自助式新手引導精靈（深度分析後）
  reach        250                    ← 收斂到「每季新增付費 SMB 註冊數」、
                                          不是月活訪客總數
  impact         2                    ← 不變
  confidence   0.4                    ← 下調：activation lift 是抄競品 blog 的
                                          假設，沒做自家 funnel cohort、
                                          沒有 holdout 實測
  effort        18  人週               ← 上調：wizard UI 3w + AI 步驟產生器 4w
                                          + analytics & A/B 3w + 多語 2w
                                          + accessibility audit 2w + observability
                                          + feature flag rollout 2w + 法務 2w
  out_of_scope  8 項明列              ← 企業 SSO、品牌客製、multi-tenant theming、
                                          手機原生 onboarding、從競品 import 設定、
                                          影片導覽、角色權限自動分派、SCIM
  RICE         (250 × 2 × 0.4) / 18  =  11.1   →   P1`,
      deltaCaption: "同一個 idea、兩種深度——score 掉 3.8 倍、P0 → P1。「下季就 ship」跟「先驗證」的差別。analyze_initiative 就是讓 AI 走完資深 PM SOP 的那條 SOP，不用真的請一個資深 PM 進會議。",
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
      titleHub: "把三支都丟進你的 MCP client config",
      titleQa: "加進 MCP client config",
      titleSpec: "加進 MCP client config",
      titlePlan: "加進 MCP client config",
      explain: "重啟 client，然後就用你平常跟 AI 對話的方式講就好。",
    },
    status: {
      eyebrow: "狀態",
      title: "最新版本",
    },
  },
};

export default zhTw;
