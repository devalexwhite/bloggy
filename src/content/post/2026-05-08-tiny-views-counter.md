---
title: Tiny Visitor Counter
publishDate: '2026-05-08'
description: "I created a tiny script for counting per-page visitors on your site.\n\
  It\u2019s as simple as uploading the PHP file to your server and pointing a<img\
  \ />t..."
tags: []
---

I created a tiny script for counting per-page visitors on your site.
It’s as simple as uploading the PHP file to your server and pointing a
`<img />` tag to it. Leveraging the script as an image
is an attempt to seed out bots (since they typically don’t render
images).

Here’s a live version of the script:

![](/visitors/index.php)

You can grab the script [on my
Codeberg](https://codeberg.org/thatalexguy/TinyVisitors).

To setup with [Pure Blog](https://pureblog.org), upload
the PHP file to your `public` folder and add the following
HTML to your page and post footer HTML under Settings->Site (this
assumes the script was uploaded to
`/visitors/index.php`):

```
<figure class="visitor-count"><figcaption>Page View Count</figcaption><img src="/visitors/index.php" width="78" height="20" alt="view count number" /></figure>
```
