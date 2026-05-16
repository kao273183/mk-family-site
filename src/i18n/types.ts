// Type definition for the per-locale translation objects. en.ts and zh-tw.ts
// both satisfy this shape so adding a new locale is one new file.

export type Lang = "en" | "zh-tw";

export interface Translation {
  // Common UI / nav
  nav: {
    family: string;
    qa: string;
    spec: string;
    plan: string;
    github: string;
  };
  footer: {
    support: string;
    builtBy: string;
  };

  // Hub
  hub: {
    hero: {
      eyebrow: string;
      title: string;          // supports inline <span class="accent">
      altName: string;
      sub: string;
      ctaPrimary: string;
      ctaGhost: string;
    };
    members: {
      eyebrow: string;
      title: string;
      sub: string;
      deepDive: string;
    };
    future: {
      eyebrow: string;
      title: string;
      sub: string;
      tag: string;
    };
    loop: {
      eyebrow: string;
      title: string;
      sub: string;
      steps: { name: string; owner: string; blurb: string }[];
    };
    compat: {
      label: string;
      runnersLabel: string;
    };
    install: {
      eyebrow: string;
      title: string;
      sub: string;
    };
  };

  // qa-master deep
  qa: {
    hero: {
      eyebrow: string;
      title: string;
      altName: string;
      sub: string;
    };
    features: {
      eyebrow: string;
      title: string;
      sub: string;
      cards: { icon: string; title: string; body: string }[];
    };
    pipeline: {
      eyebrow: string;
      title: string;
      sub: string;
    };
    knowledge: {
      eyebrow: string;
      title: string;
      sub: string;
      layers: { name: string; body: string }[];
    };
    coach: {
      eyebrow: string;
      title: string;
      sub: string;
      lenses: { name: string; body: string }[];
    };
    tools: {
      eyebrow: string;
      title: string;
      sub: string;
      groups: { name: string; items: { tool: string; purpose: string }[] }[];
    };
    notFor: {
      eyebrow: string;
      title: string;
      sub: string;
      rows: { not: string; instead: string }[];
    };
    adapters: {
      eyebrow: string;
      title: string;
      sub: string;
      rows: { src: string; auth: string; since: string }[];
    };
    workflows: {
      eyebrow: string;
      title: string;
      sub: string;
      items: { prompt: string; chain: string }[];
    };
    samples: {
      eyebrow: string;
      title: string;
      sub: string;
      optimizationPlan: string;
      testReport?: string;
    };
    terminal: {
      line1: string;
      cmt1: string;
      out1: string;
      out2: string;
      line2: string;
    };
  };

  // spec-master deep
  spec: {
    hero: {
      eyebrow: string;
      title: string;
      altName: string;
      sub: string;
    };
    notFor: {
      eyebrow: string;
      title: string;
      sub: string;
      rows: { not: string; instead: string }[];
    };
    tools: {
      eyebrow: string;
      title: string;
      sub: string;
      groups: { name: string; items: { tool: string; purpose: string }[] }[];
    };
    adapters: {
      eyebrow: string;
      title: string;
      sub: string;
      rows: { src: string; auth: string; since: string }[];
    };
    workflows: {
      eyebrow: string;
      title: string;
      sub: string;
      items: { prompt: string; chain: string }[];
    };
    samples: {
      eyebrow: string;
      title: string;
      sub: string;
      optimizationPlan: string;
      coverageMatrix: string;
    };
  };

  // plan-master deep
  plan: {
    hero: {
      eyebrow: string;
      title: string;
      altName: string;
      sub: string;
    };
    why: {
      eyebrow: string;
      title: string;
      sub: string;
    };
    notFor: {
      eyebrow: string;
      title: string;
      sub: string;
      rows: { not: string; instead: string }[];
    };
    tools: {
      eyebrow: string;
      title: string;
      sub: string;
      groups: { name: string; items: { tool: string; purpose: string }[] }[];
    };
    adapters: {
      eyebrow: string;
      title: string;
      sub: string;
      rows: { src: string; auth: string; since: string }[];
    };
    workflows: {
      eyebrow: string;
      title: string;
      sub: string;
      items: { prompt: string; chain: string }[];
    };
    samples: {
      eyebrow: string;
      title: string;
      sub: string;
      pass1Title: string;
      pass1: string;
      pass2Title: string;
      pass2: string;
      deltaCaption: string;
    };
  };

  // Shared CTAs
  cta: {
    quickStart: string;
    readDocs: string;
    sibling: string;
    install: string;
    github: string;
    pypi: string;
    meetFamily: string;
  };

  // Common
  common: {
    install: {
      titleHub: string;
      titleQa: string;
      titleSpec: string;
      titlePlan: string;
      explain: string;
    };
    status: {
      eyebrow: string;
      title: string;
    };
  };
}
