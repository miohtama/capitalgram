---
title: The raise of interest-bearing cash
description: How interest-bearing tokenised dollars and euros are revolutionising corporate financing
longDescription: >
    Blockchain has enabled bearer dollars which gain interest in real-time.
    These tokenised dollars act as interest-bearing cash and will revolutionise finance management.

## Sharing info ##
author: Mikko Ohtamaa
date: 2021-01-26
page_logo: /static/img/content/src/cash.jpg
page_facebook_type: article
page_twitter_creator: moo9000

layout: layouts/post.njk
header: cash.jpg
headerImageModeClass: header-image-mode-cover-image header-image-mode-700 header-image-text-white
headerImageBackgroundColor: white
postListImageClass: post-list-image-cover

# Discussion
twitterDiscussionLink: https://twitter.com/moo9000/status/1354433302078369793

---

Why do we use the money for payments, or as “a medium of exchange”? This obvious question is worthy of re-exploring in the era of blockchains. In this post, I am going to outline maybe the “why” is not here anymore and traditional money might be on its way out, because technology enables new modes of currencies.

Let me present my incomplete theory of the upcoming death of bank money. As this is an early discussion of interest-bearing cash in the context of the larger finance ecosystem, I invite you to criticise and point out gaps in my life of thought on [Twitter](https://twitter.com/moo9000) or [LinkedIn](linkedin.com/in/ohtis/).

<ol id="toc"><!-- --></ol>


## History of digital transactions

If you are unaware of the history of money, here is a good post on [the early history of money as collectables](http://unenumerated.blogspot.com/2016/07/artifacts-of-wealth-patterns-in_15.html). You can also read how we got from gold to coins to paperbacks[ in Wikipedia](https://en.wikipedia.org/wiki/History_of_money).  In this post, we directly leap to the digital future to 90s and computerised accounts.

Due to our history with financial instruments, like cash, bonds and stock, we have ended up binning them to roughly two different categories: securities and money. Traditionally money was been [a so-called bearer instrument](https://www.investopedia.com/terms/b/bearer-instrument.asp). Securities, on the other hand, can be only bought and sold through a regulated broker accounts and a broker controlled the registry who owns the financial instrument. Thus, you can’t be a “bearer” of your stock today - securities are registered in a system managed by someone else and you need to pay fees when you want to transfer securities.

In information technology, we say securities and money run on different “rails”. A lot of technology, standards and regulation has been built to make sure institutions and systems can connect to these rails. Mone and securities rails are incompatible: you cannot hold stocks on your bank account or transfer them to your friend over PayPal. Money runs on [IBANs](https://en.wikipedia.org/wiki/International_Bank_Account_Number) and securities run on [CSDs](https://www.esma.europa.eu/regulation/post-trading/settlement).


<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image2.png'|url }}" class="img-600">


The bearer and non-bearer instruments isn’t that black and white. For example, [there still exists a large market of bearer securities](https://ecsda.eu/wp-content/uploads/2016_07_19_ECSDA_Registration_Report.pdf) (bearer bonds) even though there has been a regulatory push to have everything centrally registered. This is because the cost of registered securities, using a centralised middleman like a clearinghouse, is expensive.

Money is no longer a bearer instrument either because most of the money resides on registered bank accounts. Bitcoin and ether cryptocurrencies are said to be bearer instruments because you and only you control them with your private key. But the underlying distributed ledger is a registered controller that you cannot use on-chain transactions for accounting fraud or hiding money-laundering traces, unlike with [bearer bonds](https://www.investopedia.com/articles/bonds/08/bearer-bond.asp).


## All transactions will be online and all transactions are the same for the computer

Today we are quickly approaching fully digitalised society. [Most transactions, at least volume-wise, happen online](https://www.statista.com/outlook/296/100/digital-payments/worldwide#market-users).


<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image6.png'|url }}" class="img-600">

Today, you are less likely to hold physical paper bills. Instead, you have deposits in a bank and make transfers online. Compared to online bank accounts, the online securities accounts at a broker are not fundamentally different. Both record your name, address and amount of instrument hold by you. What’s the difference is that they have ended up on different rails due to the history: money goes through bank regulation and securities go through securities regulation. The only major difference is that for money there exist a machine in a wall that may still give out your money as paper cash.

But fundamentally, the nature of the online transaction is the same for computers, regardless if it is securities or money. Any transaction can be written as “take X instruments from account A and move it to account B”. It is only the choreography, history and legal structure that makes these two transactions different.

## Your money carries no interest today

Equities pay dividends and bonds pay interest. The money on your savings account may have a modest interest, but unlikely high enough to beat the inflation. Furthermore, today businesses and people are increasingly using eMoney services like PayPal, which by definition [cannot pay interest](https://www.bovill.com/whod-want-to-be-a-bank/).

No interest or negative interest is bad for treasury management, as a business is bleeding treasury value everyday receivables and revenue stay on checking accounts. Unlike [central banks](https://www.investopedia.com/articles/investing/022415/how-unconventional-monetary-policy-works.asp), corporate CFOs prefer the idea of not bleeding the value of cash in hand value and becoming the payers for the [excessive risk-taking or other problems of financial markets](https://en.wikipedia.org/wiki/Financial_crisis_of_2007%E2%80%932008).

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image9.png'|url }}" class="img-600">

<div class="img-caption">
  Savings account interest rate courtesy of
  <a href="https://www.bankrate.com/banking/savings/us-bank-savings-rates/">Bankrate</a>.
</div>

## Risks in the fractional banking system

When you have money on a bank account, you have counterparty risk with the bank and your [bank can fail](https://www.thebalance.com/bank-failures-315791). The bank takes in your money, then lends it out to borrowers. For securing your deposits and having the ability to borrow out your money, the bank is paying interest for you. But a bank can borrow out more money thank it has - this is called [fractional reserve](https://en.wikipedia.org/wiki/Fractional-reserve_banking). Banks are [heavily leveraged](https://www.investopedia.com/terms/t/tier-1-leverage-ratio.asp). This creates a situation where to ensure the system stability the system must prevent withdrawing their money too fast (“bank run”). To shield the man on Main Street from these issues, [deposit insurance schemes](https://en.wikipedia.org/wiki/Deposit_insurance) were born.

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image3.png'|url }}" class="img-600">

<div class="img-caption">
  <a href="https://blockonomi.com/fractional-reserve-banking-system/">Fractional banking as explained by Blocknomi</a>.
</div>


## Problem with banks and interest rates

The economy is not doing well. The [nominal and real interest rate in the Western world is quickly becoming negative](https://www.bruegel.org/2019/10/long-term-real-interest-rates-fell-below-zero-in-all-euro-area-countries/), making it inefficient to have any money with banks. What used to be an equation where both banks and you make a profit is no longer true. (Note [that real interest rates have been negative in the past too](https://data.worldbank.org/indicator/FR.INR.RINR?locations=US), but in the near future this may be more severe.)

Today, negative interest rates are less often an issue for consumers, but more of a headache for corporations. Banks try to avoid applying negative interest rates for consumers because losing a bit of your money every day is a way of losing out your customers fast. But for corporates, they pass the negative rates and now a lot of Chief Financial Officers need to hassle to ensure their corporate treasuries does not melt out, while still making payments.


<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image10.png'|url }}" class="img-600">

<div class="img-caption">
  Going negative: the ECB’s experience, Speech by Isabel Schnabel, Member of the Executive Board of the ECB
  <a href="https://www.ecb.europa.eu/press/key/date/2020/html/ecb.sp200826~77ce66626c.en.html">Bankrate</a>.
</div>

## Bonds, safer than money in a bank

Money is not the only instrument that can be used to store value or even transfer value. In the grand scale, banks are just small corporations and if you are moving vast amounts of capital, you do not want to hold it in a bank, because there is a risk bank goes insolvent and you would [get a haircut](https://en.wikipedia.org/wiki/2012%E2%80%932013_Cypriot_financial_crisis).

Bonds are widespread as a store of value in large capital. Especially [treasure bonds](https://www.investopedia.com/terms/t/treasurybond.asp), where your counterparty is a sovereign government, have been traditionally seen as safe-haven assets as it can get, [though this varies nation by nation](https://www.reuters.com/article/us-argentina-debt-idUSKBN22Y1TE).

Bonds are less risky than holding money in a fractional banking system. [Institutional investor mandates and regulation say one needs to have part of the money in bonds because they are less risky](https://amerivetsecurities.com/growing-global-negative-yields/). Bonds are high quality (risk-free) collateral [needed to access the repo market](https://www.icmagroup.org/Regulatory-Policy-and-Market-Practice/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/6-what-types-of-asset-are-used-as-collateral-in-the-repo-market/), or for banks to get money in the first place.

However, bonds are still somewhat hard to transfer: as registered securities transfers need to go through a central clearinghouse and brokers. The securities rails have not been built consumer or small transactions in mind - You cannot settle your cup of latte with [T-bills](https://www.investopedia.com/terms/t/treasurybill.asp).

Bonds, especially treasury ones, are not immune to negative interest rates. However, negative-yielding bonds have mechanisms to make their real return positive with [roll down trading](https://corporatefinanceinstitute.com/resources/knowledge/finance/rolling-down-the-yield-curve/).

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image11.png'|url }}" class="img-600">

<div class="img-caption">
  World Bond Markets in Bloomberg Terminal
</div>

## The ingredients of interest-bearing cash

So far I have identified some catalysts I believe will be important in the transition to interest-bearing cash

1. Banks are bleeding the value of your money away
2. Having a lot of money in a bank in the first place is risky
3. Bonds are safer, but bond transactions are complex and costly
4. Computers would do not care if your payment is in bonds, money or something else

The core of the innovation is this: in the contemporary computerised world, there is no reason you could not simply use bonds or bond-like instruments as the medium of exchange. Assuming both parties accept the risk parameters of the instrument, you skip money altogether.

The transaction value is fixed at a fiat currency price, but the instrument itself carries its interest-bearing properties over the transaction automatically and starts to bear interest to the receiver on the moment of receiving it. Until the settlement, all interest belongs to the payer.

This is the idea behind interest-bearing cash-like instruments. You can transact with the cost of money (cheap, fast, efficient) while getting the benefits of bond-like assets (less counterparty risk, more positive interest). Interest-bearing cash does not have volatility risk of traditional cryptocurrencies, like bitcoin, even they run on blockchain rails, as the blockchain is the only system powerful enough to combine interest-bearing and cheap settlement properties.

Chief Financial Officers rejoice.

## Aave aUSD: An example of interest-bearing cash

[Aave](aave.com/) is one of the Ethereum blockchain-based money markets. Aave has [lending pools](https://aave.com/) where a non-custodian protocol matches depositors (lenders) and borrowers for an asset. Aave has markets for many assets, but US dollar-based markets are most popular.  Aave’s is also one decentralised projects enabling interest-bearing stablecoins: instead of doing payments with tokenised dollar itself, you transfer the equal dollar amount of tokenised lending pool shares.

When you deposit USD to any of dollar lending pool you get an equal amount of “[aToken](https://aave.com/atokens)” aUSD back. Here is an example of with GUSD (a tokenised US Dollar stablecoin issued by [Gemini](https://www.gemini.com/dollar), of Winklewoss fame, a US-based cryptocurrency exchange):

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image5.png'|url }}" class="img-600">

When you hold aUSD on your account, the balance grows real-time, as the lending pool gains more interest payments. If the pool interest rate is 1%, your account 100 aUSD balance will be tomorrow 100.00276401899085 USD.

In fact, the balance ticks up in real-time, or every new Ethereum block added to the blockchain every 15 seconds. You can literally watch your account balance going up, though in very small increments.

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/aave-interest-bearing-adai-cash.gif'|url }}" class="img-h-400">

<div class="img-caption">
  Aave aDAI interest-bearing dollar token ticking up real-time in TrustWallet. The animation has been sped up for the effect.
</div>

When you do a payment with aUSD, the interest will follow the transaction and the payment receiver. Thus, neither payer nor receiver will lose any interest in any point. They do not need to convert receivables between yield generating assets and money.

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image7.png'|url }}" class="img-600">


aUSD is a bearer instrument in a sense that you can transact it with your private key, without needing to make through a centralised clearinghouse to pay a middleman. You only pay the modest transaction fees for the blockchain computation capacity you use. However, stablecoins are not a bearer instrument in the sense that someone could forge them, or engage in an accounting fraud or hiding the origin of money. There cannot be “stablecoin fraud” like there is credit card fraud,

For the historians, as far as I know, the concept of interest-bearing cash was originally conceptualised by [rDAI (redeemable DAI)](https://rdai.money/).

## Innovations that enabled interest-bearing cash

What makes interest-bearing cash transactions possible and why “the better money” has not existed before? Ten years of blockchain development needed to happen to get us to this point.

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image4.png'|url }}" class="img-600">

### Blockchain: Accuracy and real-time

Blockchains enable secure digital ledgers without the counterparty risk on the infrastructure itself. In the traditional IT world, you have a risk with server maintenance and such - [blockchain does not easily go down](https://www.ecb.europa.eu/press/pr/date/2020/html/ecb.pr201116~7b08f0a3c5.en.html). Blockchain allows us to run a real-time ledger that the whole world can access. Blockchain is a public, legacy-free, vendor-neutral technology, which can do any kind of transactions, be them equity, bond or money.

The blockchain data publicity also makes it easy to price in the risk: anyone can inspect the degree of leverage and quality of collateral. This greatly mitigates [underpriced and under-risked collateral type situations](https://en.wikipedia.org/wiki/Causes_of_the_Great_Recession#Inaccurate_credit_ratings) which happened during the financial crisis of 2008.

### Stablecoins: fiat anchored value

While blockchains started with volatile cryptocurrencies, like bitcoin, [stablecoins are anchored to fiat currencies like US Dollar or Euro](https://en.wikipedia.org/wiki/Stablecoin). The first [stablecoins appeared in 2014](https://nubits.com/), but it [was not until 2019 when they become widespread](https://media.consensys.net/the-state-of-stablecoins-2019-40c3eca990f4?gi=cbaf146a021d). While the value of anything fiat currency pegged decreases over time, the price movements are much more stable over short and medium terms, making them more useful for accounting and price agreements.

### Smart contracts

[Smart contracts](https://en.wikipedia.org/wiki/Smart_contract) allow you to run [non-custodial](https://stackoverflow.com/q/65009246/315168) transactions by predefined rules that cannot be broken. Where in the old world one could craft a paper instrument similar to interest-bearing cash, there would be a legal and counterparty risk with the issuer. Having no counterparty risk, having all assets and liabilities transparently on-chain makes widespread adoption easier. Any risk of the system is transparent, easy to understand and thus lower.

Smart contracts also enable [robust liquidation markets](https://beincrypto.com/rekt-almost-3-billion-in-crypto-liquidations-in-the-last-24-hours/), in the case the value of collateral drops. Automatic liquidations are somewhat unheard in the legacy financial system - it could be called unjust or human unfriendly. A non-custodial system ensuring the loan health factors above 1.0 guarantees the systematic risk cannot build up.
### The open ecosystem around blockchain

Blockchains are [public ledgers](https://www.investopedia.com/tech/what-cryptocurrency-public-ledger/). Having not only data but the ability to transact as public good makes it easy for third party integrations their own tools without needing permission, licenses or gatekeeper payments. This makes it easy for different on and off-ramps adopt blockchain technology, as software development and licensing costs are nil.

The legacy financial system struggles with openness, as openness is directly against the interest of legacy business owners. The EU tries to force openness through [legislation (PSD2)](https://en.wikipedia.org/wiki/Payment_Services_Directive#Revised_Directive_on_Payment_Services_(PSD2)) to address the issues that monopolistic gatekeepers like bank have on the financial rails. [It is not going well](https://www.ipification.com/blog/psd2-delayed-again-sca-coming-in-2025/), because banks rather take out [dividends and buybacks ](https://www.ecb.europa.eu/pub/financial-stability/fsr/focus/2020/html/ecb.fsrbox202005_05~d3679873d3.en.html)than invest in R&D.
### Demand in the stablecoin borrowing

Interest-bearing cash to generate yield, or it just cash. It was not until [2020 when decentralised finance (DeFi) and smart contract-based loans took off](https://www.entrepreneur.com/article/362319). Currently, the main source of borrowers is cryptocurrency traders and speculators, but there is no reason real economy borrowers would not slowly tap DeFi money markets.

As the markets are still small, variable borrowing rates fluctuate heavily around 5% - 20%, but we can expect them to come down and stabilise long term. Although 10% sounds high for consumer borrowing, it might not be the case for international trade. For example, developing nation export companies need US Dollar to pay export duties. Their local bank lends dollars for 20%, while as you can get the same dollars from the decentralised lending pool for 10%.

## Systematic risks in smart contract lending pools

How stable are decentralised finance “[money legos](https://our.status.im/whats-with-defi-and-money-legos/)”?

Unlike in the fractional banking system, there is no over-leveraging in the decentralised finance ecosystem - all loans have more than 100% in their value in collateral. This alone makes the system more robust. The systematic risk is further lowered by blockchain transparency and counterparty-free smart contract enforcement.

From the historic standpoint, DeFi system was put int the greatest stress test in March 2020 when the value of crypto collaterals in lending pools dropped significantly. Because of the violent market movement, not all collaterals were liquidated in time to cover to ensure the health of the lending pools. [MakerDAO got $4M hair cut](https://forum.makerdao.com/t/black-thursday-response-thread/1433), but this is insignificant compared to overall market size.


<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image8.png'|url }}" class="img-600">

<div class="img-caption">
  ETH Price Strains Defi Collateral Loans as 'Black Swan' Event Strikes Makerdao
  <a href="https://news.bitcoin.com/eth-price-dai-collateral-loans-makerdao/)">by Bitcoin.com</a>].
</div>

## The future and diminishing role of banks

Interest-bearing cash is going to be attractive for finance and treasury management.

I imagine the treasury management functions will be replaced by a web page slider that allows CFOs to adjust the treasury risk/reward ratio based on their corporate needs. When risk ratios are updated, smart contracts will automatically shift the underlying lending pool and other positions to match the new risk/yield ratio.

<img src="{{ '/static/img/content/fixed-size/interest-bearing-cash/image1.png'|url }}" class="img-600">

Whenever a payment is made, it goes out in an interest-bearing instrument. In business-to-business payments, there is no need to exchange instruments forth and back to money on a checking account if both parties are happy with the underlying risk parameters which are low. The model will also arrive at personal payments with the pitch of “PayPal, but with interest-bearing blockchain dollars.” A “downshift” back to legacy money rails is only needed when a payer conducts payments requiring a legal tender, like taxes.

When there is less need for parties to go back and forth to actual money and cash, there is less need for banks. The whole banking machinery can be replaced by a smart contract having money inflows, outflows and risk parameters. Automated smart contracts are vastly more efficient than banks that tend to high-cost structure and management bonuses. There is also less need for [eMoney companies](https://ec.europa.eu/info/business-economy-euro/banking-and-finance/consumer-finance-and-payments/payment-services/e-money_en) (PayPal) and card companies (Visa/Mastercard) because blockchain rails are open and operate payments more efficiently with less staff.

The interest-bearing cash instruments can follow any fiat currency, including developing-nation currencies. Interest-bearing cash based on a fiat currency that sees a rapid decline in value, or symptoms of [hyperinflation](https://en.wikipedia.org/wiki/Hyperinflation), means that the interest-bearing instrument starts to tick up interest faster - as long there exists real economic activity where the capital can be allocated.

Due to the open and global reach of blockchains, it is easier for people to opt into different payment instruments instead of a national bank account. People’s savings in interest-bearing cash are less punishable by monetary policy screw-ups ([Lebanon](https://en.wikipedia.org/wiki/Lebanese_liquidity_crisis), [Turkey](https://www.ft.com/content/53271c57-d636-466a-936b-c58667d35f3a)). Raise of flexible interest-bearing cash-like instruments mean national central banks, and [Federal Reserve](https://en.wikipedia.org/wiki/Federal_Reserve) and [European Central Bank](https://en.wikipedia.org/wiki/European_Central_Bank), have less room to manipulate monetary policy to cover issues with over-indebtedness, both government and financial system in general. Why would you accept bad government money, when there is an easy way to accept sound Internet money?

The cover photo by [JP Valery](https://unsplash.com/@jpvalery).