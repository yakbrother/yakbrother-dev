---
title: "Upgrading to Variable Fonts"
description: "Modernizing the blog's typography with Google Fonts variable fonts"
slug: upgrading-to-variable-fonts
category: design
author: Tim Eaton
publicationDate: 2025-09-02
public: true
---

I've just upgraded the blog's typography to use variable fonts from Google Fonts:

- **Radio Canada** - A clean, modern sans-serif for body text
- **Miriam Libre** - A distinctive sans-serif for headings
- **Fira Code** - A monospace font with ligatures for code

## Why Variable Fonts?

Variable fonts offer several advantages:

1. **File size efficiency** - One file contains multiple weights
2. **Smoother transitions** - Continuous weight variation
3. **Better performance** - Fewer HTTP requests
4. **More design flexibility** - Fine-grained weight control

## Implementation

Here's how to use these fonts in your Astro project:

1. Add Google Fonts links to your head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Miriam+Libre:wght@400..700&family=Radio+Canada:ital,wght@0,300..700;1,300..700&display=swap"
  rel="stylesheet"
/>
```

2. Create utility classes for different weights:

```css
/* Radio Canada Example */
.radio-canada-regular {
  font-family: "Radio Canada", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

/* Miriam Libre Example */
.miriam-libre-bold {
  font-family: "Miriam Libre", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

/* Fira Code Example */
.fira-code-medium {
  font-family: "Fira Code", monospace;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
```

3. Use the classes in your markup:

```html
<h1 class="miriam-libre-bold">Title</h1>
<p class="radio-canada-regular">Body text</p>
<code class="fira-code-medium">Code snippet</code>
```

The fonts are now being served by Google Fonts, which means they'll be fast, reliable, and automatically optimized for different devices and browsers.

_Updated: 2025-09-02_
