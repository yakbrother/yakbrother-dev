---
title: "KeyShelf: Storing Those Pesky Keys for 5 Minutes"
author: Tim Eaton
publicationDate: 2026-07-20
slug: keyshelf-release
featured: false
public: true
description: A tiny macOS menu bar app that holds your API keys while you work, then makes sure they don't end up in your clipboard history.
category: dev
---

Another fun “one morning in claude code” project: [KeyShelf](https://github.com/yakbrother/KeyShelf), a tiny menu bar app for holding API keys while you're actually using them.

The itch, as usual, was my own. Working keys have a way of ending up in the worst places — a note titled "temp", a clipboard manager that faithfully remembers everything, a scrollback buffer. None of those are where a credential should live, even for an afternoon.

## What it does

KeyShelf sits in the menu bar (no dock icon) and holds your keys in a single encrypted vault in the macOS Keychain. Unlocking takes Touch ID or your password, and it locks itself again after five minutes. When you copy a key, the clipboard clears itself 45 seconds later, and the copy is flagged as concealed so clipboard managers know to look away.

That's it. No network access, no dependencies, no account. It's one Swift binary built with SwiftPM, for macOS 14 and up.

## What it doesn't do

This is for short-lived working keys — the ones you're juggling during a dev session. It is not a password manager, and it won't replace whatever your team uses for real secrets management. It just closes the gap between "I need this key for an hour" and "it's now permanently in my clipboard history."

The code is [on GitHub](https://github.com/yakbrother/KeyShelf) if you want to poke at it. Issues and skeptical security questions equally welcome.
