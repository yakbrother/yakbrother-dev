---
title: "Adding a Dark/Light Theme Toggle to Astro"
description: "How to implement a theme toggle button with a custom SVG icon and smooth transitions in Astro"
slug: adding-theme-toggle
category: dev
author: Tim Eaton
publicationDate: 2025-09-02
public: true
---

Today I added a dark/light theme toggle to my blog. Here's how I implemented it:

## The Theme Toggle Component

First, I created a new component `ThemeToggle.astro` that includes both the toggle button and the theme switching logic:

```astro
---
const { class: className } = Astro.props;
---

<button 
  id="theme-toggle"
  class={`theme-toggle ${className || ''}`}
  title="Toggle dark/light mode"
  aria-label="Toggle dark/light mode"
>
  <svg width="24" height="24" viewBox="0 0 800 800" fill="currentColor">
    <path d="M400 800C620.914 800 800 620.914 800 400C800 179.086 620.914 0 400 0C179.086 0 0 179.086 0 400C0 620.914 179.086 800 400 800ZM400 100C565.685 100 700 234.315 700 400C700 565.685 565.685 700 400 700V100Z"/>
  </svg>
</button>
```

## Theme Switching Logic

The JavaScript handles theme persistence and switching:

```javascript
const theme = (() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
})();

if (theme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

window.localStorage.setItem('theme', theme);

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle('dark');
  localStorage.setItem('theme', element.classList.contains('dark') ? 'dark' : 'light');
}
```

## Styling

The toggle button includes smooth transitions and a rotation animation:

```css
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.theme-toggle:hover {
  color: var(--accent-color);
}

/* Rotation animation for theme toggle */
.theme-toggle svg {
  transition: transform 0.5s ease;
}

:global(.dark) .theme-toggle svg {
  transform: rotate(180deg);
}
```

## Integration

Finally, I added the toggle to the site header:

```astro
<li>
  <ThemeToggle class="theme-toggle-header" />
</li>
```

The theme toggle uses a custom SVG icon that rotates smoothly between dark and light modes, providing a delightful user experience while maintaining accessibility with proper ARIA labels and keyboard navigation.

*Updated: 2025-09-02*
