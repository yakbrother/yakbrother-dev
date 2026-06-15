---
title: "Droning Ukulele and the Math Behind My Chord Atlas"
author: Tim Eaton
publicationDate: 2026-06-15
slug: droning-ukulele-chord-atlas
featured: false
public: true
description: Reentrant tuning, ringing open strings, and the calculations behind my new ukulele chord atlas.
category: dev
---

I built a thing: the [Uke Chord Atlas](https://uke-atlas.netlify.app/) — every key, every voicing, in standard GCEA tuning, plus an identifier that names a shape you stumble into. It started as a way to scratch my own itch, and it turned into a fun little exercise in turning music into arithmetic.

The whole project really hinges on one quirk of the ukulele: it's tuned _reentrant_. That high G string isn't the lowest note — it's pitched above the C and E next to it. String order stops matching pitch order, which is exactly what gives the uke its bright, ringing character, and exactly what makes it a little annoying to model in code.

## Droning

That reentrant high G is also why the ukulele loves to _drone_. When you let an open string ring underneath a moving chord shape, it acts like a pedal tone — a constant pitch the harmony floats over. Because the open strings (G, C, E, A) land on chord tones so often, you can leave them ringing through chord changes and get that harp-like shimmer almost for free. A lot of what sounds "uke-y" is really just open strings refusing to shut up.

## Turning notes into numbers

Once you stop thinking in note _names_ and start thinking in numbers, the math gets clean. Every note becomes a pitch class — a number from 0 to 11 — so an octave just wraps around with modulo 12.

- Open strings: G=7, C=0, E=4, A=9.
- A fret raises a string by that many semitones: `pitchClass = (openString + fret) % 12`.
- A chord is just a set of pitch classes relative to its root. A major triad is `{0, 4, 7}`.

To generate _every_ voicing, the atlas enumerates fret combinations across the four strings, then keeps only the ones where each note belongs to the chord's set and all the required tones show up. Then it scores them — how wide a stretch your hand needs, how many open strings ring, whether the root sits in the bass.

That last part is where reentrant tuning bites back. You can't assume string 4 is the lowest-sounding note, so detecting inversions and slash chords means sorting by _actual pitch_, not by string number. The identifier runs the same logic in reverse: take the four pitch classes, normalize them, and match against chord templates across all twelve possible roots.

## Go make some noise

It's [live now](https://uke-atlas.netlify.app/). Pick a key, find a voicing with a fat open-string drone, and let it ring.
