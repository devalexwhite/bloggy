---
title: New Thinkpad Means Back to Mac OS
publishDate: '2026-04-24'
description: 'On Wednesday I picked up a new (to me) Thinkpad P14s Gen 4. I was

  excited to finally get off my System76 Pang12, a computer that works,

  but has a l...'
tags: []
---

On Wednesday I picked up a new (to me) Thinkpad P14s Gen 4. I was
excited to finally get off my System76 Pang12, a computer that works,
but has a long list of hardware and reliability issues.

![Thinkpad P14S G4](/content/images/new-thinkpad-means-back-to-mac-os/tempimagelqctdr.avif)


Thinkpad P14S G4

Thinkpad in hand, I installed Ubuntu 25.10 and immediately put it to
work with a night of trimming down my client request backlog. The
computer was incredible! Amazing keyboard, vastly better trackpad,
perfect 14” form factor and everything worked out of the box on Ubuntu.
Heck, it even had a usable webcam!

![Mastodon Post](/content/images/new-thinkpad-means-back-to-mac-os/tempimagewqirow.avif)


Mastodon Post

But like a majority of things in my life, something always goes
wrong. I knew it was too perfect, and wondered what I was going to find
that ruined the joy.

How about complete system crashes when you plug/unplug the system?
Yep, that’ll do it. I spent all of yesterday and this morning debugging.
Multiple distress, a long list of kernel params, different chargers and
tweaking bios settings. Nada. About 50% of the time when you unplug,
Gnome will slowly start to lock up, then the system restarts. Looking at
logs it’s caused by a `data fabric sync flood event`.

At first I thought it might be related to the WiFi chips (based on
pre-crash logs). Disabled via bios and still crashes. I’ve tested RAM,
SSD and battery, all good. I have a new battery coming Monday just in
case, but fully expect it won’t help.

I’m out $500 USD, and honestly, I’m done with Linux for now. I love
Gnome and Fedora+Ubuntu, but it’ll be a few years before I buy a new
laptop after throwing away money on the Thinkpad (and the Pang12 2 years
ago).

Back to Mac OS Tahoe it is. Liquid ass and all.

I’m hopeful that the Thinkpad problems are just on Linux. My wife has
been wanting a laptop and she’s not ready to jump off Windows making it
the perfect computer for her.
