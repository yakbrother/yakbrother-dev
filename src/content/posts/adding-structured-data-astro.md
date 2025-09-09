---
title: "Structured Data (JSON-LD) for AI and Search Engines in Astro"
description: "How to add JSON-LD structured data to your Astro blog for better SEO and AI search visibility."
slug: adding-structured-data-astro
category: dev
author: Tim Eaton
publicationDate: 2025-08-29
public: true
---

Every once in a while, I like to take another look at SEO strategies, since they change over time... And I realized I hadn't done anything to embrace the current world of AI searches. The main thing I learned and added to my blogs is [structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) using JSON-LD.

This makes for nicer looking Google results, better search previews, and all those good things.

## How to Add JSON-LD in Astro

Add a `<script type="application/ld+json">` block to your main head component. For a blog post, use the `BlogPosting` schema from [schema.org](https://schema.org/BlogPosting).

**⚠️ Security Note:** Always use proper templating and escaping when adding dynamic data to JSON-LD. Never use plain string interpolation as it can lead to XSS vulnerabilities.

### ✅ Secure Method (Recommended):

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": [
    new URL('/og-default.jpg', Astro.url).href
  ],
  "author": {
    "@type": "Person",
    "name": "Tim Eaton"
  },
  "publisher": {
    "@type": "Organization",
    "name": "timeaton.dev",
    "logo": {
      "@type": "ImageObject",
      "url": new URL('/favicon-96x96.png', Astro.url).href
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": Astro.url.href
  }
})}
></script>
```

### ❌ Insecure Method (Don't Use):

```astro
<!-- DON'T DO THIS - Vulnerable to XSS attacks -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{title}",
  "description": "{description}",
  "image": [
    "{image ? image : '/og-default.jpg'}"
  ]
}
</script>
```

The secure method uses:
- `JSON.stringify()` to properly escape all dynamic content
- `set:html` directive for safe HTML injection
- `Astro.url.href` and `new URL()` for proper URL construction
- Direct variable references instead of string interpolation

## In general...

- Use the correct [schema type](https://schema.org/docs/full.html) for your content (e.g., `BlogPosting`, `Article`, `Product`)
- Fill in as much detail as possible (author, date, images, etc.)
- Use dynamic values from your content or frontmatter
- Validate your structured data with [Google's Rich Results Test](https://search.google.com/test/rich-results)

## Done!

This was a quick and easy way to update my site for today's searches. If you're using Cursor, it can automatically add structured quite easily, taking the data entry work out of your day.
