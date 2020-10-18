---
title: The explanation for $1,000,000 fee on a single Ethereum transaction
description: Why somebody transferred $100 worth of ETH with $2,500,000 fee
longDescription:
    Why somebody transferred $100 worth of ETH with $2,500,000 fee. One fee mistake could be explained by a programming error. But now it has happened more than once, it is likely that it is no longer a mistake.

## Sharing info ##
author: Mikko Ohtamaa
date: 2020-06-12
page_logo: /static/img/content/src/ethereum.jpg
page_facebook_type: article
page_twitter_creator: moo9000

layout: layouts/post.njk
header: ethereum.jpg
headerImageModeClass: header-image-mode-cover-image header-image-mode-700 header-image-text-white
headerImageBackgrondColor: #eeeeee
postListImageClass: post-list-image-cover


# Discussion
twitterDiscussionLink: https://mobile.twitter.com/moo9000/status/1271507454711476225

---

<div><p>Somebody is repeatedly sending out Ethereum transactions worth of <a href="https://cointelegraph.com/news/vitalik-buterin-comments-on-strange-transaction-fees?utm_source=Telegram&amp;utm_medium=social" target="_blank">$100 with $2,500,000 fee</a>. The most likely explanation, by Occam's razor, is that an exchange has a broken hardware wallet device or custody solution.</p><p>When checking the address on EtherScan <a href="https://twitter.com/GBSavant/status/1271149824646221825" target="_blank">it seems to be associated with Bithumb, a Korean exchange based on the To: address of the transaction that seems to be a user deposit address to Bithumb hot wallet</a>. One fee mistake could be explained by a programming error. But now it has happened more than once, it is likely that it is no longer a mistake.</p><p>It is not anti-money laundering as a crook would not want to draw the attention of all the Ethereum world to the transactions with the highest fees ever. Also the transactions were broadcasted to the Ethereum public mempool, not privately broadcasted to a miner. Different mining pools picked up the transactions, mined them and received the fees.</p><p>Then the next likely explanation is that the exchange has lost access to its wallet, either by stupidy or by malice. Often exchanges use special devices or custody providers to ensure the security of their wallet, from provides like Ledger Vault or BitGo. In this case, it sounds like the wallet has been either partially hacked or misconfigured. Also it would not be the first time the exchange loses their paper backups, it also happened with New Zealand Cryptopia exchange that could not restore the access to their own wallet after a hack.</p><ol><li>A malicious party has control over the exchange hardware wallet and is draining with super fee transactions and trying to blackmail the exchange</li><li>The exchange itself programmed the device permanently to have a too low withdrawal limit. These hardware devices have a way to lock the admin out if you are not careful - that makes them secure. If this happened the only way for the exchange to get money our from their wallet is to make super high transaction fee transactions and then beg Ethereum mining pools to give back their money.</li></ol><p>Pick your favourite with Hanlon's razor: Never attribute to malice that which is adequately explained by stupidity.