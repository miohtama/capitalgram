---
title: Programming security token smart contracts
description: How security tokens can run on a public blockchain
longDescription: >
    How security tokens can run on a public blockchain and still satisfy regulatory requirements

## Sharing info ##
author: Mikko Ohtamaa
date: 2019-04-18
page_logo: /static/img/content/src/sto.png
page_facebook_type: article
page_twitter_creator: moo9000

layout: layouts/post.njk
header: sto.png
headerImageModeClass: header-image-mode-cover-image header-image-mode-700 header-image-text-white
headerImageBackgrondColor: #eeeeee
postListImageClass: post-list-image-cover


---

  <div>
  <h2>Introduction</h2>
  <p>This is a technical introduction article for security token smart contracts I have been working on.
  <div class="slate-resizable-image-embed slate-image-embed__resize-full-width">
   <img alt="No alt text provided for this image" data-media-urn="urn:li:digitalmediaAsset:C4E12AQHupOg4NSoCuA" src="https://media-exp1.licdn.com/dms/image/C4E12AQHupOg4NSoCuA/article-inline_image-shrink_1500_2232/0?e=1608163200&amp;v=beta&amp;t=qMl4I4yei4Ch4n85shFn6PPKnnbSsB0jTZqUswAe20U">
  </div>
  <h2>Securities vs. cryptocurrencies</h2>
  <p>Securities (real world assets) differ from cryptocurrencies (virtual assets)</p>
  <ul>
   <li>Securities have an <strong>issuer</strong> and there exists an implicit trust between the investors and the issuer</li>
   <li>Securities often need to have real world identities associated with the ownership - a shareholder registry</li>
   <li>Securities pay dividends or interest</li>
  </ul>
  <p>By their nature, security tokens needs less hardcode decentralisation, as there always exist corresponding assets in the real world. Or opposite, losing of private keys cannot result losing the ownership of your assets.</p>
  <h2>Issuer control mechanism</h2>
  <div class="slate-resizable-image-embed slate-image-embed__resize-full-width">
   <img alt="No alt text provided for this image" data-media-urn="urn:li:digitalmediaAsset:C4E12AQHPM1nJYgbFeQ" src="https://media-exp1.licdn.com/dms/image/C4E12AQHPM1nJYgbFeQ/article-inline_image-shrink_1000_1488/0?e=1608163200&amp;v=beta&amp;t=92hKsyviadDvmK4SjgTgCOKD-pK-D9c8ephWUOzsfyg">
  </div>
  <p>TokenMarket security token can run both on public and private blockchains. It is immune to negative effects typically assumed with cryptocurrencies, like hacks and lost private keys. The issuer maintains the master shareholder registry access which ultimately allows to fix human errors shareholders cause for themselves.</p>
  <p>The company board nonimates a technical advisor who will execute board decisions like paying dividends or issuing new shares. Other technical advisor activities include managing shareholders registry, recovering shares from lost private keys and fixing human errors in invalid transfers.</p>
  <p>TokenMarket security token smart contract has role based mechanism to delegate authority or partial authority to different set of keys. The technical advisor manages these keys. For the security reasons, the technical advisor is using a multisignature wallet where multiple people need to confirm critical activities that affect the shareholder balances.</p>
  <p><a href="https://github.com/TokenMarketNet/smart-contracts/blob/master/contracts/security-token/SecurityToken.sol" target="_blank">More about different roles in the SecurityToken source code</a>.</p>
  <h2>Restricting share transfers</h2>
  <p>TokenMarket security token supports restricting share transfers. This helps to</p>
  <ul>
   <li>Enable collection of real world identities of shareholders</li>
   <li>Ensure all investors receiving shares are qualified to be in the cap table</li>
   <li>Make shares restricted shares and ensure Board can approve any new shareholders</li>
   <li>Ensure there is an online communication method for all investors</li>
  </ul>
  <p>There can be multiple parties that maintain real world identity registries and whitelists.</p>
  <p>See <a href="https://github.com/TokenMarketNet/smart-contracts/blob/master/contracts/security-token/AdvancedTransferAgent.sol" target="_blank">AdvancedTransfeAgent</a> for source code.</p>
  <h2>Fixing human errors</h2>
  <p>The issuer, with the help of the technical advisor, can fix errors caused by the shareholder mistakes.</p>
  <h3>Recovering lost shares</h3>
  <div class="slate-resizable-image-embed slate-image-embed__resize-full-width">
   <img alt="No alt text provided for this image" data-media-urn="urn:li:digitalmediaAsset:C4E12AQHIPVRm2kCCjQ" src="https://media-exp1.licdn.com/dms/image/C4E12AQHIPVRm2kCCjQ/article-inline_image-shrink_1500_2232/0?e=1608163200&amp;v=beta&amp;t=nAkuoKWk-i8vtzIQ6u3w3TzvMNcAr9AENkUy8_6Yhic">
  </div>
  <p><br></p>
  <p>Unlike decentralised cryptocurrencies, issuer controlled financial instruments allow more relaxed private key management. Because real world identifies are known and the issuer can replace damaged tokenised shares, it is possible to establish a process where a bad key management errors are recovered. This is not totally different for replacing a lost credit cards.</p>
  <p>In the case a shareholder reports that they have lost access to their private key, they can go through a recovery process where the lost shares are invalidated and the corresponding amount of new shares are issued to the shareholder.</p>
  <p>For more information see <a href="https://github.com/TokenMarketNet/smart-contracts/blob/master/contracts/security-token/SecurityToken.sol" target="_blank">forceTransfer() function in the source code</a>.</p>
  <h3>Unauthorised trades</h3>
  <p>The shareholder might become a victim of fraud and have their shares stolen. This is not different of mismanaging one’s online bank account or credit cards and have an unauthorised transfers there.</p>
  <ul>
   <li>The shareholder does not properly manage their private keys and unauthorised party gains access</li>
   <li>The shareholder organisation is a victim of insider traud</li>
  </ul>
  <p>If the unauthorised party manages to liquidate the shares, how cases of rights on stolen title are resolved depend on a jurisdiction. The issuer and its technical advisor can always follow the court decisions if unsure. <a href="https://twitter.com/moo9000/status/1102154193010393090" target="_blank">For more insights read this Twitter discussion</a>.</p>
  <h2>Custodianship</h2>
  <div class="slate-resizable-image-embed slate-image-embed__resize-full-width">
   <img alt="No alt text provided for this image" data-media-urn="urn:li:digitalmediaAsset:C4E12AQHAB5Zowmz_Mw" src="https://media-exp1.licdn.com/dms/image/C4E12AQHAB5Zowmz_Mw/article-inline_image-shrink_1000_1488/0?e=1608163200&amp;v=beta&amp;t=wuG8n0WW4HqvUo3YbnyiYWIG8V_T8MBmIGefjZcMumc">
  </div>
  <p><br></p>
  <p>In custodial assets</p>
  <ul>
   <li>Assets owner multiple entities are pooled into the same wallet</li>
   <li>Sometimes this is for security (cold wallet), sometimes this is necessary for business activity (exchange hot wallets)</li>
   <li>We need to be able clear ultimate beneficial owners for the assets in this custodian wallet</li>
  </ul>
  <p>Custodians need to ensure take care that their benefactors receive payouts and voting rights correctly.</p>
  <p>There are two typical case of custodianship for security tokens: custodian companies and exchanges.</p>
  <h3>Custodial companies</h3>
  <p>For institutional investors, it is often required to use a custodian company for the concern of separation of duties.</p>
  <p>With TokenMarket security tokens, the custodian can safely hold investors’ assets in a pooled cold wallet and then report the the ultimate beneficial ownership structure behind those assets.</p>
  <h3>Exchange wallets</h3>
  <p>Exchange that are based on hot wallets do not offer blockchain transparency for ownership over trades.</p>
  <p>Exchanges trading security tokens must report both</p>
  <ul>
   <li>New ownership</li>
   <li>Trades made (as consolidated tape)</li>
  </ul>
  <p><a href="https://fia.org/articles/mifid-ii-rts-published-eu-official-journal" target="_blank">Good information about reporting requirements can be found in European Union MIFID II RTS (Regulatory Technical Standards)</a>.</p>


</div>