---
title: "AI Ruleset: Use This in Your Designs"
author: Tim Eaton
publicationDate: 2025-11-05
editDate: 2026-06-15
slug: fluid-design-ruleset
featured: false
public: true
description: My starting point for creating accessible, fluid designs with AI.
category: design
---

Over the past few years, I've been refining my approach to web design, moving away from rigid breakpoints and fixed layouts toward something more natural and flexible. That work, aided by multitudes of websites and resources like [Piccalilli](https://piccalil.li), [Every Layout](https://every-layout.dev), and [Smashing Magazine](https://www.smashingmagazine.com), has culminated in what I'm calling my Fluid Design Ruleset — a comprehensive set of guidelines and CSS principles that maintain fluidity across browsers and devices.

Thanks to [Google NotebookLM](https://notebooklm.google.com/) for helping me to develop this, and other rulesets that involve a lot of research.

I'm definitely not the first to say it: let the browser do what it does best. I still see this pitfall a lot in different teams. Instead of fighting against each browser and phone by trying to compare pixels and Browserstack, it's so much easier to set `min` and `max` values and let CSS `clamp()` figure the details out based on the viewport.

I built this on a lot of people's shoulders: the ruleset draws heavily from the excellent work at [Utopia.fyi](https://utopia.fyi) (among the others linked here), which helped me learn "elegant scaling without breakpoints."

I worked with AI to create rulesets that AI understands. (It's always useful to ask a coding agent to summarize itself for itself in the future.)

It's one combined doc now: the same file explains the philosophy and the reasoning behind each decision with practical examples, while also serving as machine-readable instructions for AI coding assistants like Claude or Warp — priorities, directives, and examples included. Read it yourself, then throw it in your rules file or reference it while you're coding.

The fluid grids are like magic. The ruleset emphasizes semantic HTML, progressive enhancement, and accessibility — it now targets WCAG 2.2 AA, EN 301 549, the European Accessibility Act, and the EU AI Act. There are fluid typography scales, spacing systems, and even guidance on when to use CSS Grid versus Flexbox. If you've read my earlier post about [responsive typography with CSS clamps](/posts/fluid-font-size), this builds on those concepts and extends them to AI guidelines.

You can [download the Fluid Design Ruleset v3.2](/yakbrother-fluid-design-ruleset-v3.2.zip) and use it however you'd like.

But remember... Never trust AI with your CSS and accessibility. Review the code or suffer!
