---
title: Installing JPilot on Arch
publishDate: '2026-05-11'
description: 'This post is a quick tip for anyone else running into issues

  installing the Palm Pilot desktop software,JPiloton Arch Linux. If you just try

  instal...'
tags: []
---

![Screenshot of JPilot](/content/images/installing-jpilot-on-arch/Screenshot.png)


Screenshot of JPilot

This post is a quick tip for anyone else running into issues
installing the Palm Pilot desktop software, [JPilot](https://www.jpilot.org/) on Arch Linux. If you just try
installing via `yay -S jpilot`, the build will fail as the
dependency `pilot-link` no longer builds on modern systems.
The solution is to first install `pilot-link-git`, then
`jpilot`.

1. `yay -S pilot-link-git`
2. `yay -S jpilot`
3. Profit!
