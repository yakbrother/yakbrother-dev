---
title: Allons-Y - Basic CSS Typography
author: Tim Eaton
publicationDate: 2023-05-14T03:42:51Z
slug: allonz-y-basic-typography
featured: false
public: true
description: A few notes on starting my first UI framework.
category: dev
---

<b>UPDATE 01/09/2025</b>: this has changed drastically - I will post about the new version later.

Part of me appreciates Tailwind CSS. It’s easy to use, especially for layouts, but I think that “utility” approaches to CSS are a bit much sometimes. This is especially the case in rendering dynamic content - such as a blog or user-edited pages.

Even if I’m writing only static code, there really is nothing uglier than a long list of:

```
<p class=“text-base font-light leading-relaxed mt-0 mb-4 text-gray-400">Paragraph one...</p>
<p class=“text-base font-light leading-relaxed mt-0 mb-4 text-gray-400">Paragraph two...</p>
<p class=“text-base font-light leading-relaxed mt-0 mb-4 text-gray-400">Paragraph three...</p>
<p class=“text-base font-light leading-relaxed mt-0 mb-4 text-gray-400">Paragraph four...</p>
```

So I usually end up mocking up the first page with Tailwind and then eventually switching over to my own CSS using a more classical approach.

I noticed that I almost always use a basic text typography, regardless of font or colour, so I decided to finally package it all in one place to copy and paste into new web projects. I’m calling my first attempt “Allonz-y.css” (“let’s go!” In French), since it can just be dropped in anywhere.

[It looks something like this] (https://www.yakdrive.io/allonz-y/) . All the colors or fonts can be changed, as can the base text size, and the code will adapt.

This is a work in progress, and mostly for my own use, but it was a fun little project using [Golden Ratio Typography](https://pearsonified.com/golden-ratio-typography-intro/) and my own personal preferences.

You can see the GitHub source code at [https://github.com/yakbrother/allonz-y.css](https://github.com/yakbrother/allonz-y.css)
