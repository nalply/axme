# Markdown Text editor like Obsidian or Typora

## Why?

Both Obsidian and Typora are proprietary software based on or containing an
editor which runs -- I believe -- on ProseMirror. However how exactly they
do it is their own secret sauce. The idea is: it looks like WYSIWYG, but as
soon as your cursor is on some text, the Markdown formatting appears.

It's neat. No need to split to the rendered view and the raw Markdown text.

It's the best of two worlds: Programmers use their Markdown formatting 
special characters and non-programmers use their formatting controls as they
know them from their text-processing software.

This is intended as a minimal desktop application: Load and save Markdown
text files and edit them with the default ProseMirror configuration.

Later this might be split off into axme-simple if I see the need to expand
the editor. Also a web component might be come from this for editing online.

I also want to examine a Markdown variant, AxMark, but that's for later...

Or I might get bored and abandon this project half-finisehd.

## Current state

Not yet even alpha: just trying things out... Will this work? Is it
complicated?

## Architecture as per now

- Tauri for cross-platform environment (think lightweight Electron)
- TypeScript to avoid many typical JavaScript runtime problems
- Modern Web dev server to avoid bundling during development
- Rollup for production bundling
- Prosemirror for WYSIWYG
- prosemirror-markdown

## Todo

- Switch out CodeMirror to ProseMirror
- Add npm scripts

## Probably quite complicated

- Math
- Markdown variants

## Not investigating

- Plugins like Obsidian
- Link management like Obsidian

<small>Copyright 2023 Daniel Ly; SPDX-License-Identifier: ISC+</small>
