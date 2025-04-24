---
title: Responsive Typography with CSS Clamps - My Current Approach
author: Tim Eaton
publicationDate: 2025-03-24T03:42:51Z
slug: fluid-font-size
featured: false
public: true
description: My approach to fluid text in my designs.
category: dev
---

<i>A basic knowledge of CSS is required to understand this post</i>

I've always hated using media queries to change things like text size, spacer size, and grids, so recently I've gotten very interested in "fluid web design" instead of "responsive web design". [Utopia.fyi](https://utopia.fyi) heavily influences the way I'm currently approaching this￼ . This method is based on CSS `clamp()`, allowing for a fluid and dynamic way to manage font sizes without the complexity of multiple breakpoints. Let’s take a look.

##Understanding `clamp()`
The `clamp()` function in CSS is a versatile utility that defines a size based on a range of values. It takes three parameters: a minimum value, a preferred value that can adjust based on the viewport size, and a maximum value. You can watch this in action if you resize the browser on a desktop or laptop machine.

I'm using this code to represent different-sized steps. I usually add them as variables in the root element:

```
:root {
  --step--1: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);
  etc...
}
```

These values can be easily chosen with a tool like [https://clamp.font-size.app/](https://clamp.font-size.app/) or [https://royalfig.github.io/fluid-typography-calculator/](https://royalfig.github.io/fluid-typography-calculator/) to calculate units you may be used to.

Note that each step represents a different general size, with the values adjusting dynamically as the viewport width changes (vw stands for viewport width). For text, 0.9158rem + 0.1087vw allows the font size to grow as the viewport increases, ensuring the text remains proportionate and accessible across various devices.

Beyond text, note that the steps can be applied to padding, margins, or gaps, so your grid can shrink along with the text for more readability.

## What's so bad about media queries?

This is more elegant than using media queries, which seem more arbitrary as we browse the web on different screen sizes (fold-out displays, anyone?). If done consistently, this method should look proportional regardless of the screen.

It also doesn't cause a "jump" in font size on a laptop or desktop screen as you resize the browser and hit a specific breakpoint—fluidity looks much more polished.

By sizing this way and using fluid grids with `min-width()`, I could reduce most of my designs just to include a single media query (when a menu would change into a menu list for small screens).

Try it out on this site! Since it's a straightforward design, the change is subtle, but try this out on a beautiful site like [https://chriskirknielsen.com](https://chriskirknielsen.com) , and you'll see the impressive results.
