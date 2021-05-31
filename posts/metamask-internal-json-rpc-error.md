---
title: How to fix Internal JSON-RPC error on MetaMask and Ledger
description: Chrome 91 broke Ledger support in MetaMask. Here are instructions for a workaround.
longDescription: >
    Chrome 91 broke Ledger support in MetaMask. Here are instructions for a workaround.

## Sharing info ##
author: Mikko Ohtamaa
date: 2021-05-30
page_logo: /static/img/content/src/metamask.jpg
page_facebook_type: article
page_twitter_creator: moo9000

layout: layouts/post.njk
header:  metamask.jpg
headerImageModeClass: header-image-mode-cover-image header-image-mode-700 header-image-text-white
headerImageBackgroundColor: white
postListImageClass: post-list-image-cover

# Discussion
twitterDiscussionLink: https://twitter.com/moo9000/status/1399323342004539395

---

## MetaMask and Ledger stops working

You will see this error on Chrome (and potentially on Firefox, Edge and Brave):

> Internal JSON-RPC error.

<img  class="img-600"  src="/static/img/content/fixed-size/metamask-and-ledger-error/1.png" alt="">
<br>

## Install Firefox

[The instructions from MetaMask support telling that Chrome 91 and MetaMask 5.7.1 work are incorrect](https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet). There is no "Use Ledger Live" menu option.

Download [Firefox](https://getfirefox.com) from GetFirefox.com.

You should also use Firefox as your overall browser, as it is much better than Google Chrome for your privacy.

<img  class="img-600"  src="/static/img/content/fixed-size/metamask-and-ledger-error/6.png" alt="">

## Install Ledger Live

[Install Ledger Live](https://www.ledger.com/ledger-live/download).

## Update Ledger Live and all your apps on Ledger to the latest versions

Otherwise Firefox cannot connect to your Ledger wallet.

<img  class="img-600" src="/static/img/content/fixed-size/metamask-and-ledger-error/5.png" alt="">
<br>

## Run Ledger Live and import your wallet, add Ethereum account.

<img  class="img-600" src="/static/img/content/fixed-size/metamask-and-ledger-error/4.png" alt="">
<br>

## Connect to Firefox

Start Ethereum application on your wallet.

Now Ledger should be able to connect to your Firefox without issues.

<img class="img-600" src="/static/img/content/fixed-size/metamask-and-ledger-error/8.png" alt="">


