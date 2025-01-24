---
title: Monoliths vs Side Projects
author: Tim Eaton
publicationDate: 2023-05-20T03:42:51Z
slug: monoliths-vs-side-projects
featured: false
public: true
description: Thoughts after working so long on a monolithic project
category: dev
---

For a while, I worked for a company with a **massive** monolithic repository. Actually, by the time I left, it was two repositories; whatever remained of the original code, some of it still PHP4, from a decade ago; and a Laravel project with all the new refactoring and new features.

Refactoring such a big program into Laravel was actually quite fun. My team often spent hours with huge sheets of paper drawing out new table designs and flowcharts. But one problem was that most of the technology used was based on necessity, for instance deciding between React vs. Vue, or whatever other fun technology might exist out there. Of course we would play around with new frameworks or cool features, but few of them made it into the production site.

Recently, I created a Laravel project from scratch - the first new one I had started in a while - and decided to use Inertia and Vue for the front end. I called the site “the Marx Dormoy Chess Club”, for a fictional organisation in my neighbourhood.

![MDCC website](/assets/images/posts/mdcc-screenshot-1.png)

Now this was fun! I was amazed how quickly and easily Inertia came together (I had never built a site with it), and I found writing quick templates in Vue to be more intuitive than React.

I created a full API and Single Page Application in almost no time. It felt really good to play around with.

Now, this can’t, for obvious reasons, happen in the middle of a large-scale site. But my take-away lesson was: make sure to give myself side projects to play around with other technology, so I can keep having fun as a developer.

My next idea: a scheduling app for my cat... Maybe she won’t use it, but I can still have a good time writing it.
