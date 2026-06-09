---
title: I Use Arch BTW
publishDate: '2026-04-27'
description: 'In myprevious

  postI talked about my frustration that the used Thinkpad I bought

  was crashing when unplugged in Linux. My conclusion at the end of t...'
tags: []
---

In my [previous
post](https://thatalexguy.dev/new-thinkpad-means-back-to-mac-os) I talked about my frustration that the used Thinkpad I bought
was crashing when unplugged in Linux. My conclusion at the end of the
post was that I would return to Mac OS.

Well that lasted about 1 day. I’m back to Linux on the Thinkpad,
here’s what happened (with added rants about Mac OS and Windows):

After using Linux on my System76 for a few months, Mac OS felt…old?
Everything was laggy: the animation for switching spaces, launching
apps, even typing. Sure, my Mac is a 5+ year old computer at this point
(14” MacBook M1 Pro), but still, it shouldn’t feel *that*
bad.

Then there’s how Apple treats you like a child. Want to install that
app you downloaded? No, it’s too dangerous (aka the developer didn’t pay
us)! We recommend you just throw it away.

In parallel to dealing with Mac OS, I went through the
*terrible* process of installing Windows 11 on the Thinkpad with
the idea of giving it to my wife. Seriously, I can’t properly articulate
how awful Windows 11 is these days (but I can try).

First off, just getting a bootable ISO is a pain. You can’t just
flash with any normal program, you’re expected to use another Windows
computer to setup a USB. Thankfully I found a Mac app ([WinDiskWriter](https://github.com/TechUnRestricted/WinDiskWriter))
that could do it. It took 2 tries though, the first time I choose exFat
and it wouldn’t boot, so I tried again with fat32.

Once you’re in the installer, the shit show truly begins. Off the
bat, the installer has a completely different design language then
Windows 11. The built-in disk practitioner is one of the worst I’ve used
(compared to Linux installers). The install process takes forever and
the computer has to reboot 3-4 times. Again, compared to Linux, this is
so bizarre. Almost every distro out there has a live environment, an
intuitive installer (not you Fedora), takes ~10 minutes and doesn’t
reboot a single time.

Finally you get to the post-install setup wizard. It’s filled with
laggy animations, how wonderful! Right off the bat it required me to be
on the internet, but it didn’t recognize my WiFi. There was a “load
driver” button though, so I downloaded the WiFi driver from Lenovo onto
a USB drive. Nope, not recognized. I had to unplug one of my WiFi APs
and use it’s ethernet to finish the install. While doing this, screen
kept flashing as it tried to figure out the display drivers.

Again, Linux just works. WiFi, graphics, etc.

Once online I of course had to login to a Microsoft account. I also
had to agree to sell my information to advertisers. Then I was presented
with **7 pages** of upsells. I’m not kidding! “Subscribe to
Gamepass”, “How about Office 365?”, “You need Onedrive, right?”.

Buying a used car from a sketchy salesman is a better experience than
installing Windows.

Once everything was **finally** installed, I had to
“check updates” and reboot multiple times. It’s funny how installing all
the available updates just leads to more updates after reboot. Why not,
ya know, install them all at once?

But here’s where something good finally happened!

First, I verified that the Thinkpad worked perfectly in Windows, no
crashing at all when unplugged. I also noticed a “Lenovo Updater” app
got auto installed. After running the app, it found one “critical”
firmware update for my SSD. This update wasn’t found by
`fwupdmgr` in Linux, and there was no way to get the firmware
on the Lenovo site beyond the Windows `.exe`.

The next day, I got fed up with Mac OS and decided I would bite the
bullet and order a Framework. I could have gone back to the System76,
but once you ride a Cervelo it’s hard to get back on a Huffy ya’
know?

In a last ditch effort, I flashed EndeavourOS to a USB to try one
more time with the Thinkpad. My thought was Arch would be bleeding edge
and have a higher chance of working.

Sure enough, no more crashes! I stress tested quite a bit across a
few reboots and it was rock solid!

I’m 90% the issue was the SSD firmware, but it *might* be
Arch. I’m honestly pretty happy with EndeavourOS so I didn’t try Ubuntu
or Fedora, instead I happily wiped Windows with a EndeavourOS + GNOME
install.

I’m overjoyed that the Thinkpad is rock solid now, it’s such a great
little machine! I have a feeling my future laptops are going to be
Thinkpads, but I expect this will last me quite awhile.

---

TL;DR for those facing the issues I did:

To fix AMD data fabric sync flood event in Linux when plugging in or
unplugging the charger on a Lenovo Thinkpad P14s Generation 4 that leads
to a full system reboot, install the NVMe Solid State Drive Firmware
Update from the [Lenovo
Support](https://pcsupport.lenovo.com/us/en/products/laptops-and-netbooks/thinkpad-p-series-laptops/thinkpad-p14s-gen-4-type-21k5-21k6/21k5/downloads/driver-list/component?name=Storage&id=F3491C79-0A9D-4DD8-A593-A73FE52CA54C) website. You will need Windows 11 to install the driver, but
can switch back to Linux after install.
