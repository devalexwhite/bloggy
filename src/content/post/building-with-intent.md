---
title: Building With Intent
publishDate: '2026-05-05'
description: "I\u2019m working on a new application called TinyFeeds, it\u2019s a\
  \ native RSS\nfeed reader. Sure there\u2019s thousands of those, but this one is\
  \ mine and\nas such..."
tags: ["software", "development"]
---

I’m working on a new application called TinyFeeds, it’s a native RSS
feed reader. Sure there’s thousands of those, but this one is mine and
as such I’m being extremely intentional about how it’s built.

I believe constraints breed innovation, and as such I’ve outlined a
few constraints for myself in this project.

First off, the file size has to be 5MB or under for the shipped
binary. This is inspired by Matt’s [Fits on a Floppy](https://fitsonafloppy.com/) manifesto. I’m
also inspired by the Palm Pilot apps I use on a daily basis, many of
which are under 5MB. Maintaining a small file size makes you second
guess the need for features, libraries, graphics, etc. In a world where
[Google
Chrome secretly downloads an extra 4GB for a local LLM](https://www.thatprivacyguy.com/blog/chrome-silent-nano-install/), I feel like
small apps are sorely needed.

Second, the application is to be built in Rust and [Iced](https://iced.rs/). This constraint has forced me to
finally dig in and learn Rust. The result is a fast, native application
that has a high level of stability thanks to the tools used to build
it.

Finally, no LLM generated code is to be used. This again forces me to
actually learn the language, focus on code structure, and de-scope
feature bloat. It also makes me feel proud of what I’ve built, something
I never feel when using LLMs.

So how’s it going? Great so far! As I mentioned, TinyFeeds is built
intentionally for me and how I enjoy consuming RSS. With any feed reader
I always filter by unread posts from today. I don’t use folders, tags,
bookmarks, etc. So that’s exactly what TinyFeeds does:

* Reads your feeds from a simple .txt file
* Shows new stories from today
* Only shows a single story at a time
* Remembers what stories you’ve viewed so they aren’t shown again

The UI has been designed to facilitate this. It’s incredibly simple,
but the layout is intentional.

![Screenshot of TinyFeeds](/content/images/building-with-intent/screenshot.png)


Screenshot of TinyFeeds

TinyFeeds won’t be for everyone, heck it might only be something I
want, but that’s the point! I find it a joy to use even in it’s early
state.

While it isn’t ready yet, you can early trial it if you so desire by
[cloning from
Codeberg](https://codeberg.org/thatalexguy/TinyFeeds) and building it yourself (`./build.sh`). The app
currently clocks in at 4MB when built with the build script!

After TinyFeeds, I plan to build similar apps focused on small size,
performance and minimal feature sets. All hand coded. Possibly inspired
by Palm OS apps :-P
