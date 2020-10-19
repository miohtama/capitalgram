---
title: What is the right price for Filecoin and is it worth of mining
description: An analysis how Filecoin price will be formed
longDescription: >
    This week, after three years of waiting, a decentralised storage project Filecoin launched their mainnet.
    Filecoin price is in free fall on cryptocurrency exchanges, but still multiple 10x of their ICO price.

## Sharing info ##
author: Mikko Ohtamaa
date: 2020-10-19
page_logo: /static/img/content/src/filecoin-header.jpg
page_facebook_type: article
page_twitter_creator: moo9000

layout: layouts/post.njk
header: filecoin-header.jpg
headerImageModeClass: header-image-mode-center-image header-image-text-white
headerImageBackgroundColor: "#0090ff"
postListImageClass: post-list-image-cover


# Discussion
# twitterDiscussionLink: https://twitter.com/moo9000/status/1300384143839240193

---

## Preface

Filecoin raised $200M for their $FIL token in an ICO back in 2017. The team has been diligently working to bring the dream of decentralised storage alive since then and they delivered the mainnet last week. Filecoin is live, so let's look at what goes into the storage business and if there is a play for decentralisation there.

<ol id="toc"><!-- --></ol>

## Value promise

Filecoin wants to be the decentralise storage, ultimately meaning that all (business-to-business) file saves and publications could be run over their protocols. The users of the service are unlikely to be consumers themselves, but it competes against business offerings like Amazon S3 and Google Cloud. This is my assumption, Filecoin might find some use cases outside a backbone for storage infrastructure, like censorship-resistant publications, but I will skip the future use cases in this post and focus only on the competition against centralised storage.

There also exist well-established decentralised storage solutions,
like [Storj Tardigrade](https://tardigrade.io/) and [SIA](https://sia.tech/) but I do not divulge deeper in the competition in this post.

## What is storage?

In the context of IT, software development and business applications
there are mainly three use cases for storage.

###  Databases of business applications

A lot of small read/write transactions. I will skip this use case and assume Filecoin cannot do this kind of IO pattern today. Usually this kind of IO pattern requires locally mounted storage and decentralisation is done on the application level, not on a storage level.

[In this category there was a non-trustless product called BigChainDB](https://www.bigchaindb.com/), but looks like their blog has gone quiet.

### Publication and CDN

This is you publish once and the world reads many times use case. Think images, file shares, public video content like YouTube. Depending on if web browsers could natively support IPFS this might be very attractive. There has been some initial work to support IPFS in niche browsers like [Brave and Firefox](https://blog.ipfs.io/2019-10-08-ipfs-browsers-update/)
are working towards this.

Mainstream browsers like Chrome and Safari might not be warming up for hacker technologies like IPFS, because 1) it would eat their own cloud business 2) they do not want to be in bad terms with repressive governments who want to filter out bad news from the local wen traffic.

For this use case, we also have [Edge Network](https://edge.network/) (Disclaimer: I have done zero analysis whether EDGE Network works or is trustless).

### Internal file storage for software systems

This is writing big chunks of data times, reading a few times IO pattern. Websites internally store uploaded files somewhere, and often they do it  in AWS S3, the market leader of storage services since 2006.

Internal storage users care only about price, speed and latency (and data privacy, but you can encrypt everything). Offering a drop-in replacement for S3 is a no-brainer if Filecoin can match in speed and latency categories.

It should be possible, as [Storj already does this](https://tardigrade.io/).

### Cold data

So-called "cold data" features backups and other archives. This is write once, keep it there forever, maybe read ever once, IO pattern. There is no real-time requirements for reads. Cold data is competition for [AWS Glacier](https://aws.amazon.com/glacier/).

Cold data is a niche. It is usually backed up by specialised hardware, like Blueray disc stacking robots or magnetic tapes. Offering competing prices without unique hardware is tough.

We can safely assume Filecoin cannot compete in the cold data use case, because it would need to a lot of redesigning of the protocol around the fact that miners use specialised, slow, hardware. For example, [Proof of Spacetime](https://docs.filecoin.io/about-filecoin/how-filecoin-works/#proofs) would be impossible.

## Production vs. sales price

Hopefully the readers are with me on the same page on what Filecoin can solve: B2B file storage backbone for a software system.

Let's breakdown this market a bit:

* What is the market price for storage

* What would it take from the miners to match the current centralised price

### What do customers pay for such storage

Assuming your business is willing to migrate away from one of the big three clouds, then you can look options like Filecoin. But in this case, the competition is also in other niche storage businesses, like [Wasabi](https://wasabi.com/) or [Backblaze](https://www.backblaze.com/).

For example, here we have Wasabi:

> Wasabi is the hot cloud storage company delivering disruptive storage technology that is 1/5th the price of Amazon S3 and faster than the competition with no fees for egress or API requests.

Wasabi touts the figure of [$.0059 per GB/month, $0.0708 per GB/year](https://wasabi.com/cloud-storage-pricing/#three-info)
so let's assume Filecoin must match that price.

### What does it cost to produce a gigabyte of storage?

Unfortunately you cannot do create an efficient storage network node out from your laptop, your generic server or your Bitcoin miner.

[Wasabi kindly offers us a breakdown why](https://wasabi.com/blog/on-premises-vs-cloud-storage/):

<img src="{{ '/static/img/content/fixed-size/data-center-storage-cost-breakdown.png'|url }}" class="img-600" alt="Cost of creating storage services">

*Note:* 1 petabyte is 1000 terabytes or 1,000,000 gigabytes.

* To scale, you need to minimise your headcount per gigabyte

* To scale you need data centers with specialised equipment, cheap electricity, blue-collar staff, etc.

* In this economies-of-scale business, Filecoin's $200M raise suddenly does not feel big at all

### What does this mean for Filecoin miners?

Unless you have spare $10M and an existing team of data center professionals, you cannot produce competitive storage. [This is regardless if your computer has 256 GB RAM](https://docs.filecoin.io/mine/hardware-requirements/). Maybe some Bitcoin miners could transform into Filecoin mining facilities if they can somehow, like with free electricity, can match professional data centers.

## How Filecoin can succeed?

So far it does not look very bright for Filecoin. We also need to add the complication that Filecoin is trustless - it does not trust the miners can keep their systems running. Filecoin does this by [various proofs](https://docs.filecoin.io/about-filecoin/how-filecoin-works/#proofs) and these proofs will cost bandwidth and CPU time for both miners and validators. On the other tip of the scale is that Filecoin is trustless and decentralised, so there is less need to invest in data center security and stability.

A successful Filecoin operation would probably look like

* A miner has hardware operations/data center knowledge but no experience in international marketing (Filecoin does the marketing)

* A miner has an existing data center and storage capacity under-utilised

Some arguments I do not know if they work

* A miner in specific geolocation (China) serving only local traffic (latency benefit) - not sure how Filecoin replicates data for local latency if a particular local miner breaks down

* Seeding BitTorrent and other copyright infringement material (maybe a partnership with Justin Sun)

* Serving some niche censorship-resistance use case, like the resistance movement in Belarus and other countries, Chinese porn industry, criminal forums

This is today. I feel there is less demand for decentralised storage than there is for decentralised finance. The Internet will evolve, but this will happen slowly over the timespans of years. For example, Filecoin might be super successful in the CDN use case if IPFS support arrives in web browsers. Can Filecoin hold that long? It took four years from Bitcoin holders to make a meaningful impact and Bitcoin is multiple orders of magnitudes simpler than Filecoin.

What comes to trustlessness and decentralisation, Filecoin is now tuning down this with [Verified Clients program](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0003.md). The program reads like "we subsidise network users who reveal their real-world identities, so we have less headache with law enforcement."

## What will be $FIL price?

[The Filecoin price is -80% from CoinGecko all-time high $200](https://www.coingecko.com/en/coins/filecoin). Looks like the bought top was around $70 / $FIL.

<img src="{{ '/static/img/content/fixed-size/filecoin-price.png'|url }}" class="img-fluid" alt="Filecoin price, October 2020">

As we see, it is expensive to run a storage business and you are likely to have a lot of fiat nominated expenses. [There is already a Filecoin Improvement Proposal FIP-4 to decrease vesting in the miner revenues](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0004.md). As if it is not bad enough to sell a product in a tough market, having your cash flows locked for six months for the [slashing condition](https://docs.filecoin.io/mine/slashing/) is outright crazy.

I feel this is one of the "VC shitcoin" and "dumpenomics" arguments where people see that ICO participants can sell some of their coins for a nice 20x profit, while miners with capital cost take the hit. Though not sure who is buying in these prices. Usually in this kind of deals you pay dearly to exchanges like Binance or their "consultants" a lot to have some support for the price. When the prepaid= "market-making" money comes to end, the price will go down even faster.

There exist no relationship between $FIL price and the price of storage byte in the network: No 1 $FIL = 1 gigabyte. Currently, Filecoin seems to operate somewhat as an auction market. [Miners post different "deals" and customers choose one to buy one](https://docs.filecoin.io/mine/how-mining-works/#deals). [You can browse deals in FilFox, Filecoin explorer](https://filfox.info/en/deal).

I assume the business flow looks something akin like this

* A customer reserves x GB storage upfront

* A customer picks the cheapest and smallest deal in the dollar value
  of $FIL that fits in their need

* A miner receives the payment in $FIL

* A miner cash outs $FIL as soon as possible to cover the expenses

### From scarcity economics to revenue sharing

 As far as I see, locking up $FIL into the storage contracts and [reducing the velocity of the token](https://medium.com/newtown-partners/velocity-of-tokens-26b313303b77) is the only factor driving up the price. But unlike with Bitcoin and Ethereum, Filecoin does not have similar artificial scarcity as in DeFi. Customers can always switch to Wasabi or another cloud storage provider and Filecoin storage contracts should follow per dollar storage price of Amazon, others.

Unfortunately, I did not find a service that would show how much Filecoin token supply is currently locked up. It can go up only slowly, because it relates to the business-to-business sales cycle of people migrating away from other cloud storage services. Thus, we are not going to see anything crazy like with inflation like Tezoes where 70% tokens are staked.

Potential game changes would be when Filecoin does a revenue sharing to token holders, similar to [Curve CIV-13](https://gov.curve.fi/t/cip-13-implement-an-admin-fee-of-50-0-02-across-all-pools-to-be-distributed-to-vecrv-holders/690) or [SushiSwap](https://sushiswap.fi/) and this would set the floor price for $FIL. This might be a tough pill to swallow for the Filecoin team. They are heavily based in the US and the SEC is notorious for going after anything that looks like an investment even a bit, not to mention gigabit.
