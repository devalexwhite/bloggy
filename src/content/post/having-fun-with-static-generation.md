---
title: Having fun with static generation
publishDate: 2026-06-11
description: I've been having a lot of fun with my new blog!
tags: [software]
---

I recently [moved my blog to Astro](https://thatalexguy.dev/posts/playing-with-astro/). Since then I’ve been having an absolute blast with the static site generation process! I love being able to hydrate the site with dynamic data while keeping things fast on the server. It reminds me of HotSyncing data onto a Palm Pilot (how could I not reference Palm Pilots after my [last post](https://thatalexguy.dev/posts/interactive-dive-into-memos/)). Here’s a few cool things that happen when my site is built:

## Fetch and display analytics

I started using [GoatCounter](https://www.goatcounter.com) (awesome service) and have been leveraging their API to show stats on my site via a custom build plugin. My [analytics page](https://thatalexguy.dev/analytics/) now shows statically generated graphs of the analytics data as of the last site build. Additionally, posts now feature a “readers” count in the header.

![Reader count in an article header](/images/fun-with-ssg/readers-header.png)

## Image dithering

The previous iteration of my blog featured dithered images. While this was partly an aesthetic choice, it also greatly reduces the size of images. The downside was the amount of work involved in manually dithering images via ImageMagick for each post.

Thanks to my new build process I was able to build a custom plugin that creates dithered copies of every image across all posts. It replaces images with a dithered copy, and then wraps the image with a link that points to the original full color version. I also have an escape hatch where I can specify a front matter flag in a post to skip dithering.

![Reader count in an article header](/images/fun-with-ssg/dither.png)

##  Webmentions

This functionality came out of the box with my theme ([Astro Sienna](https://astro.build/themes/details/astro-sienna/)). [Webmentions](https://webmention.io) are fetched during build and displayed on the relevant post. I haven't seen this in action yet since I don't have any webmentions, but it's still super cool!

## Meta images

Another plugin that came with my theme is the dynamic generation of meta images for sharing on social media. The plugin gathers info from the post and dynamically generates a png image at build time. Very cool!

![Reader count in an article header](/images/fun-with-ssg/social-card.png)

---

It’s been a lot of fun messing around with my new toy, maybe this means I’ll go longer than 2 months without changing my entire site!

...maybe...
