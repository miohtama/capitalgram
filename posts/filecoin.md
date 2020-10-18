---
title: What is the right price for FileCoin and is it worth of mining
description: An analysis how FileCoin price is formed
longDescription: >
    This week, after three years of waiting, a decentralised storage project Filecoin launched their mainnet.
    FileCoin price is in free fall on cryptocurrency exchanges, but still multiple 10x of their ICO price.

## Sharing info ##
author: Mikko Ohtamaa
date:
page_logo: /static/img/content/src/sushi.jpg
page_facebook_type: article
page_twitter_creator: moo9000

layout: layouts/post.njk
header: sushi.jpg
headerImageModeClass: header-image-mode-cover-image header-image-mode-700 header-image-text-white
headerImageBackgrondColor: #eeeeee
postListImageClass: post-list-image-cover


# Discussion
# twitterDiscussionLink: https://twitter.com/moo9000/status/1300384143839240193

---

# Preface

Filecoin raised $200M back in 2017 ICO. The team has been diligently working to bring the
dream of decentralised storage alive since then and finally they delivered last week.
Or did they... the audience is skeptical. So let's look what goes into storage
business and if there is a play for decentralisation there.

# Value promise

FileCoin wants to decentralise storage, ultimately meaning that all (business-to-business)
file saves and publications could be run over their protocols that are FileCoin and IPFS.
The users of the service are unlikely be consumers themselves, but it competes
against Amazon S3, Google Cloud and others. This is my assumption, FileCoin
might find some niche use cases outside a backbone for storage infrastructure,
like censorship-resistant publications, but I will skip the future use cases
in this post and focus only on the competition against centralised storage.

There also exists well-established decentralised competition,
like [Storj Tardigrade](https://tardigrade.io/) and [SIA](https://sia.tech/) but I skip them in this post for the sake of focus.

# What is storage?

From the It/software development perspective there are mainly three use cases for the storage

##  Databases of business applications

A lot of small read and write transactions, a lot of confidential data.
I will skip this use case and assume FileCoin cannot do this kind of IO pattern
yet today. Usually this kind of IO pattern requires locally mounted storage
and decentralisation is done on the application level.

## Publication and CDN

This write once, read many times use case. Think images, file shares,
public video content like YouTube. Depending if web browsers
could natively support IPFS this might be very attractive.
There has been some initial work to support IPFS in niche browsers
like [Brave and Firefox](https://blog.ipfs.io/2019-10-08-ipfs-browsers-update/)
are workign towards this. But mainstream browsers (Chrome, Apple)
might not be warming up for hacker technologies, because
1) it would eat their own cloud business 2) they do not want to be
in bad terms with repressive governments who want to filter
out bad news from the local Internet traffic.

## Internal file storage for software systems

This is write few times, read few times IO pattern.
Websites internally store uploads somewhere,
most notably in AWS S3. Users really only care about price and speed.
Offering a drop-in replacement for S3 is a no-brainer.

[Storj already does this](https://tardigrade.io/).

## Cold data

So called "cold data": backups and other archives.
This is write once, keep it there forever and maybe read ever once,
IO pattern. There is no real-time requirements for reads.
Cold data would be competition for [AWS Glasier](https://aws.amazon.com/glacier/).

Cold data is more niche. It is usually backed up by specialised hardware,
like Blueray disc stacking robots or magnetic tapes. Offering competing
prices without unique hardware is tough.

We can safely assume FileCoin cannot compete in the cold data use case,
because it would need to a lot of redesigning of the protocol around
the fact that miners use specialised, slow, hardware. For example,
[Proof of Spacetime](https://docs.filecoin.io/about-filecoin/how-filecoin-works/#proofs)
would be impossible.

# Production vs. sales price

I hope the readers are now with me on the same assumption what FileCoin
can solve: business-to-business customers having FileCoin as a
backbone for their software system file storage.

Now let's see

* What is the market price

* What it takes to match the price from the miners

## What customers pay

Assuming your business is willing to migrate away from one of big three clouds,
then you can look niche options like FileCoin. But in this case, the competition
is also against other niche storage businesses, like
[Wasabi](https://wasabi.com/) or [Backblaze](https://www.backblaze.com/).

For example, here we have Wasabi:

> Wasabi is the hot cloud storage company delivering disruptive storage technology that is 1/5th the
price of Amazon S3 and faster than the competition with no fees for egress or API requests.

Wasabi touts the figure of ($.0059 per GB/month, $0.0708 per GB/year)[https://wasabi.com/cloud-storage-pricing/#three-info]
so let's assume FileCoin must match that price.

## Production price

Unfortunately you cannot do an efficient business-to-business
storage network on your laptop, not on your generic server or
on your Bitcoin miner.

[Wasabi kindly offers us a breakdown why](https://wasabi.com/blog/on-premises-vs-cloud-storage/):




* To have scale, you need to minimise your headcount per gigabyte

* To have scale you need data centers with specialised equipment,
  cheap electricity, blue-collar staff, etc.

* In this economics-of-scale business, FileCoin's
  $200M raise suddenly does not feel big at all

## What does this mean for FileCoin miners?

Unless you have spare $10M and an existing team
of data center professionals,
you cannot produce competitive storage.
[This is regardless if your computer has 256 GB RAM]
(https://docs.filecoin.io/mine/hardware-requirements/).

# How FileCoin can success?

So far it does not look very bright for FileCoin.

# What will be FileCoin price?

FileCoin price needs to be something that allows

* Miners to  run their operation without long term losses

* FileCoin price also needs to be something that business-to-business users are willing




