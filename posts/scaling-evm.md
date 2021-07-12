---
title: Scaling EVM (Ethereum Virtual Machine)
description: How fast and far can the EVM based blockchain architecture still take us
longDescription: >
    In this post, we discuss Ethereum Virtual Machine (EVM) scalability and “how fast EVM blockchains can be”. At the moment, EVM powers most of the actively used and popular blockchains. As the popularity of decentralised finance grows, the EVM architecture starts to hit more and more limitations and cannot grow much more. The audience for this post should have a basic understanding of decentralised finance and some of the competing blockchain infrastructure efforts.

## Sharing info ##
author: Mikko Ohtamaa
date: 2021-07-12
page_logo: /static/img/content/src/evm.jpg
page_facebook_type: article
page_twitter_creator: moo9000

layout: layouts/post.njk
header:  evm.jpg
headerImageModeClass: header-image-mode-cover-image header-image-mode-700 header-image-text-white
headerImageBackgroundColor: white
postListImageClass: post-list-image-cover

unsplashLink: https://unsplash.com/photos/o1C-K02cpP0

# Discussion
# twitterDiscussionLink: https://twitter.com/moo9000/status/1399323342004539395

---

## Introduction

In this post, we discuss Ethereum Virtual Machine (EVM) scalability and “how fast EVM blockchains can be”. At the moment, EVM powers most of the active and popular blockchains. As the popularity of decentralised finance grows, the EVM architecture starts to hit more and more limitations and cannot grow much more.

The research was done for [NEAR Foundation](https://near.org/) and [Aurora](https://aurora.dev), a new EVM compatible blockchain that is not based on any existing implementation. The audience for this post should have a basic understanding of decentralised finance and some of the competing blockchain infrastructure efforts.

I would like to thank [Igor Mandrigin](https://twitter.com/mandrigin), a core developer of [Erigon](https://github.com/ledgerwatch/erigon) Ethereum client, who helped to find answers to some questions presented in this post.

I am not the ultimate author on blockchain design; a lot of research here is based on public discussion and sources. My interpretation and sources might be incorrect, so I kindly invite anyone to post feedback.

<ol id="toc"><!-- --></ol>

## Why EVM?

Ethereum Virtual Machine is the [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) powering Ethereum smart contracts. Created in 2014, it is the first virtual machine for blockchains able to execute complex business logic on-chain. A lot has been built around and on top of EVM over the last seven years. Today EVM powers ~90% of blockchain transaction numbers and most of the transaction value.  Besides the Ethereum mainnet,  EVM powers many of the sidechains like Polygon and Binance Smart Chain and [Aurora](https://aurora.dev/).

<img class="img-600" src="/static/img/content/fixed-size/scaling-evm/image3.png" alt="">

[GoEthereum, the original Ethereum implementation](https://pkg.go.dev/github.com/ethereum/go-ethereum@v0.6.7) from 2014 that still powers all DeFi.

The good half of the last decade, and likely more than one billion US dollar, has been invested in EVM software tooling and development. On the tooling side, this includes [Solidity](solidity.readthedocs.io/) and [Vyper](https://vyper.readthedocs.io/) smart contract programming language compilers, IDEs like [Remix](https://remix.ethereum.org/), development frameworks like [Hardhat](https://hardhat.org/) and [Truffle](https://github.com/trufflesuite/truffle), programming language integrations like [Web3.js](web3js.readthedocs.io/) and [Web3.py](web3py.readthedocs.io/). The soft aspects of the software development side include [numerous courses](https://www.udemy.com/topic/ethereum/), [expensive lessons learnt (through hacks) in best practice](https://blog.openzeppelin.com/on-the-parity-wallet-multisig-hack-405a8c12e8f7/), tutorials, translated content and community forums. Then we have the business aspects of software developers and subcontracting companies specialised in Solidity project delivery, [smart contract auditing](https://ethereum.stackexchange.com/questions/8551/security-review-checklist-for-a-smart-contract) companies and EVM branding. The EVM based blockchains have been integrated with [100+ mobile wallets](https://registry.walletconnect.org/wallets), [cryptocurrency exchanges](https://www.coingecko.com/en/coins/ethereum#markets) and other custodian solutions that move billions of dollars of daily ERC-20 trading volume around.

On the top of the cherry, [the $50B assets under management in decentralised finance (DeFi)](https://www.tokenterminal.com/terminal/metrics/tvl) run on EVM and are very tightly coupled with it. It took years to build and prove the security of the smart contracts currently powering the DeFi powerhouses like Aave, MakerDAO and Synthetix.

The [sunken cost](https://en.wikipedia.org/wiki/Sunk_cost) of EVM and the ecosystem is billions of dollars. It will take hundreds of millions of dollars, and time, to create a comparable smart contract ecosystem. Thus, for the moment, EVM compatible and EVM based blockchains are the only candidates for decentralised finance projects seeking large user bases and revenue streams. I expect the situation change slowly over the next few years.
## Why not EVM?

EVM was the first engine of smart contract blockchains. Like with the early automobiles, we do not drive T-Fords today. Blockchain developers have made theoretical breakthroughs and learnt practical lessons since the EVM inception in 2014. We know we can build better virtual machines for smart contracts than EVM: faster, cheaper, safer. But little of this new knowledge can be applied to EVM today, because of [backwards compatibility](https://en.wikipedia.org/wiki/Backward_compatibility), because of architectural design choices, which are impossible to change without breaking all the existing smart contracts transferring billions of dollars value every day.

## The end of the road for EVM

The DeFi today is happily married to EVM, and although there are alternative ecosystems on the horizon they are not here today. So the question is, how far we can take EVM before reaching its ultimate breaking point. Because we need to. We already learnt in 2017, and on multiple occasions since then, that the naive approach of the original Ethereum 1.0 mainnet with proof-of-work and 15 transactions per second is not going to able to withstand any significant transaction volume, like what [NFT hungry DeFi users are imposing on it](https://www.wsj.com/articles/ethereum-is-booming-in-the-nft-frenzyso-is-network-congestion-11620050853).

## The EVM compatible blockchain contenders

In this post, we focus on the technical scalability of EVM. Other factors deciding the winning solutions include community, quality of team, runway funding, ecosystem funding, vested interest especially with current ETH holders and conflict of interest between major exchanges.

My personal take is that the technical merits of fast, cheap and secure transactions will become secondary when the technology reaches the level it is ”good enough” and can handle major traffic with reasonable sub-dollar fees. This is, of course, until the amount of traffic grows to the point that the solution is no longer good enough.

We are seeing plenty of projects in this space that try to do ”EVM but faster and cheaper than Ethereum mainnet is.” These are often called [sidechains](https://ethereum.stackexchange.com/questions/379/what-is-a-sidechain) because there exists a way to move tokens forth and back to the Ethereum mainnet. Here are some of my favorites, from more well-known to less well-known:

* [Polygon](https://polygon.technology/)
* [Binance Smart Chain ](https://www.binance.org/en/smartChain)
* [Avalanche](https://www.avax.network/)
* [RSK](https://www.rsk.co/)
* [Fantom](https://fantom.foundation/)
* [Telos EVM](https://docs.telos.net/evm/about-ethereum-virtual-machine)

Then we have [layer 2](https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/) solutions that run their own EVM compatible chain on the top of Ethereum mainnet itself, tapping to the security with Ethereum mainnet somehow. Sharing the security means that blocks or invalid transactions can be disputed on the Ethereum mainnet instead of relying on the block producers of the second layer to act honestly.

* [Arbitrum](https://github.com/OffchainLabs/arbitrum)
* [Optimism](optimism.io/)
* [zkSync](https://zksync.io/) (2.0 will be EVM compatible)

And as the newest, but not the least:

* [Aurora](https://aurora.dev/) from Near Protocol

The compromises between speed, cost and security each of these projects make are different. Some, especially layer 2 solutions, choose interesting compromises that comes to a so-called optimistic decision and dispute [resolution](https://developer.offchainlabs.com/docs/dispute_resolution). Another technical decision is the quality of bridges available for the solution - how secure, fast and cheap it is to transfer value between Ethereum mainnet and other blockchains. While layer 2 bridging is “100% secure” against the mainnet, sidechains have a varying degree of robustness on their bridging solutions.

It is a competition out there between all of the solutions mentioned. I expect multiple winners to emerge, but I also expect some of the solutions to fail. [For the reasons of the failure, we already have in-practice lost competitors from the ICO boom of 2017 like Tron](https://twitter.com/moo9000/status/1389583048849645576).
## What is the EVM state?

To understand the scalability issue, we first need to understand what “the EVM state” means. While there are many limitations for scalability, propagating and storing the state seems to be the most difficult one to solve.

You can think of the Ethereum blockchain as a single computer with storage attached to it: RAM, disk drive, etc. EVM, specifically, has an infinite addressable state as [256-bit words](https://ethereum.stackexchange.com/a/2340/620) (32 bytes). Every time you write something to this storage you consume it permanently: the EVM _state_ has _changed_.

Blocks are propagating these state changes with valid transactions. Each block contains multiple transactions that alter the EVM state sequentially.

Here is an example token transfer transaction how the state is consumed

1. Alice transfers 100 ERC-20 tokens to Bob. Bob has zero tokens before the transfer. ERC-20 balances are kept in the ledger smart contract. This is the [balances](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol#L34) table in Solidity code.
2. In the balances table, Alice’s address balance is decreased by 100 tokens. This updates the uint256 word in the EVM state.
3. In the balances table, Bob’s address is increased by 100 tokens. Because Bob had no balance before, a new uint256 word is allocated from the EVM state. Allocating new storage is more expensive than updating existing storage.
4. Bob’s _balance _remains allocated until the _balance_ becomes zero again

Thus, one token ERC-20 transfer updates 2x uint256 words and may allocate 1 new uint256 word.

The EVM measures the cost of state change through [SSTORE](https://ethervm.io/#storage) instructions, like any other EVM instruction, in [gas](https://ethereum.org/en/developers/docs/gas/). The storage instructions are most expensive and have been subject to constant upgrades to make the network scale - [the latest in the Ethereum mainnet Berlin fork](https://hackmd.io/@fvictorio/gas-costs-after-berlin) (some [more research about Ethereum mainnet “open secret” about the state issue pre-Berlin](https://blog.ethereum.org/2021/05/18/eth_state_problems/)).

There is also overhead on the to of plain key-value storage of the EVM state. The state is processed as a [Merkle Patricia ](https://medium.com/@chiqing/merkle-patricia-trie-explained-ae3ac6a7e123)tree, to make it possible to sign the blocks and transactions. Any state change has more overhead than just the actual payload it writes. There are alternatives to Merkle Patricia trees, like [Verkle trees](https://vitalik.ca/general/2021/06/18/verkle.html) and this is a potential future upgrade to remove some of the scalability bottlenecks.
## The upper limit of EVM scalability

To understand the limitations, one first needs to understand the naive approach of blockchain transaction processing. It looks more or less like this for every blockchain out there. [Here is another post of mine explaining an EVM transaction lifecycle](https://stackoverflow.com/questions/65830983/how-sending-transactions-and-receiving-events-work-in-backends-in-ethereum-block/65842575#65842575).

1. The next validator (leader) is chosen who will produce a new block. These are called validators, block producers or miners depending on the blockchain.
2. The next validator executes a new block (execution)
    1. Starts a new block
    2. Gets some pending transactions from the [mempool](https://medium.com/shyft-network-media/understanding-ethereums-p2p-network-86eeaa3345)
    3. Runs each transaction sequentially
        1. A transaction reads the current state
        2. Transaction runs some smart contract code that applies state changes
        3. A new state is produced
        4. Any logs (events) that are not related to the state, but to transaction correctness are emitted
        5. Producing hashes (Merkle tree) related to the state change
    4. Stops adding transactions when run out of block space (maximum gas limit per block)
3. The next validator broadcasts the block to its peers
4. Peers check the block is valid (proof)
    1. They download the block
    2. They rerun each transaction starting from their current state and see it matches the end state of the block
5. In the case of competing blocks, or uncles in Ethereum terms, one is picked up by consensus rules
6. The blockchain moves to choose a next validator

The upper-speed limit is set by

* Speed how fast new leader can be decided - decided by [consensus algorithm](https://en.wikipedia.org/wiki/Consensus_(computer_science))
* How fast the leader will execute state changes (IO, CPU)
* How fast the leader propagates the block to other validators (network bandwidth and latency)
* How fast other validators can validate the new block, or rerun the transactions against their state (IO, CPU)

The easiest way to scale Ethereum is to have an infinite fast CPU with an infinite amount of RAM, for each validator and node that wants to sync the chain. But even still, you would hit the speed of light, as it takes 200 milliseconds for a single bit to travel around the world, and we want to be able to sync a blockchain node in any part of the world.
## The limitation of state propagation

Based on the paragraph above, the ultimate scalability problem manifests itself in step 4 - “validating the block.” To validate a block or a transaction, you need to know the full state of the whole blockchain being validated against. Because any EVM transaction can touch any part of the state of the blockchain, any validating node, [fisherman](https://wiki.polkadot.network/docs/glossary/#fisherman), or similar disputer needs to know the current full state. This takes 1) network bandwidth to download a new block 2) CPU to validate transactions 3) large IO and RAM to maintain the full state.

Because of state propagation, there is not much sense of doing another layer on top of layer 2. There won’t be “layer three”. Also layer two on the top of already fast state propagating layer 1 chains, like Polygon, make less sense.

We are seeing some state propagation issues, as nodes on fast EVM chains cannot keep up. Binance Smart Chain [is having blocks of size 100M gas units](https://bscscan.com/chart/networkutilization). Binance Smart Chain runs on GoEthereum. [The network is creaking](https://twitter.com/ProofOfBags/status/1395235478216060935) and it seems validators have a hard time keeping up. Likes of BSC and Polygon can no longer run on a normal cloud server, like one using [Amazon Elastic Block Storage (EBS)](https://github.com/binance-chain/bsc/issues/302#issuecomment-869143485), but needs to have directly attached [NVMe storage](https://en.wikipedia.org/wiki/NVM_Express) due to high IO requirements.
## What about L2s and rollups?

All EVM layer one nodes validate and process transactions - even if your node does not participate in the consensus (i.e. mine or stake). Most Ethereum nodes are not mining - they maintain the peer-to-peer network (censorship resistance), propagate transactions and offer API services to Dapps and wallets. These kinds of nodes are called [full nodes](https://ethereum.stackexchange.com/a/84200/620) in EVM lingo.

Optimistic layer two solutions will separate validation and transaction processing, so that a node can participate in the network, but can trust transactions coming from other nodes without validating them. While this likely makes syncing a full node faster, I do not know how much state size decrease a full node can achieve. For many use cases, full nodes still need to maintain the full state and all historical events.

But layer two solutions do not get away with propagation and storage limitations. Even though layer two solutions, like Arbitrum, start with an empty state eventually their layer two state is going to be similarly “full” as well. Then, you need to either do “layer 3”, or have multiple rolled-up states. Having multiple rolled-up states running on the top of layer one Ethereum mainnet is “a poor man’s [sharding](https://near.org/papers/nightshade/)” solution.

Furthermore, after the first layer two solutions have now been deployed, it looks like they might not [end up being cheap enough](https://twitter.com/moo9000/status/1413154001709793281), because they still need to write transaction info on layer one [calldata](https://blog.openzeppelin.com/ethereum-in-depth-part-2-6339cf6bddb9/) and [logs](https://blog.openzeppelin.com/ethereum-in-depth-part-2-6339cf6bddb9/) (although not on L1 state).

Below some [rollup criticism by Haseeb Qureshi, Dragonfly Research.](https://medium.com/dragonfly-research/im-worried-nobody-will-care-about-rollups-554bc743d4f1)

> Right now on Polygon, a simple Uniswap-style trade costs $0.0001. On Binance Smart Chain, it costs $0.20. On Ethereum, it costs about $7. And on Optimism, it’ll cost around $0.68.

## The current theoretical and practical EVM performance

[Erigon](https://github.com/ledgerwatch/erigon) (previously known as TurgoGeth) is currently the fastest EVM implementation known to humankind. I asked the Erigon core developer Igor Mandrigin how fast a tuned EVM implementation can be. Other old school Ethereum implementations are the original [geth](https://geth.ethereum.org/) (GoEthereum) and [OpenEthereum](https://github.com/openethereum/openethereum) (formerly Parity, likely to be discontinued after [London hard fork](https://eth.wiki/roadmap/london)).

The EVM performance can be measured as “gas used by transactions” because the gas cost of a transaction is a more or less direct measurement of transaction complexity. Any block can contain more simple transactions (ETH value transfers) or fewer complex transactions (smart contract transactions that write and read multiple words in the state).

Here is his benchmark on Igor’s local machine (assumes zero network latency, or infinite light speed):

> With a warm cache the current implementation could run a transaction that uses 819M gas within 1 second on my machine but all the state we read/write is in RAM

> I tried 1000M and that is around 1s but sometimes more. we considered “safe” block execution something that is less than 1 second always

> on a machine with a 4ghz Xeon and with all current state in RAM

> very theoretical though not sure what more realistic transactions will look like

This benchmark was performed on a synthetic code and data, similar to `JUMPDEST GAS PUSH1 0x01 SHA3 EXTCODEHASH POP PUSH1 0x0 JUMP`.

The 800M gas blocks are 8x what Binance Smart Chain is having currently. The Binance Smart Chain has [hit 80% utilization on a good day](https://bscscan.com/chart/networkutilization), with problems. With some insight, we can make an assumption that the EVM model practical performance limit is somewhere between 100M gas and 800M gas blocks. With the 3 seconds / block this is 33M gas / second.

Further Igor clarifies that with 800M gas blocks the processing likely becomes [CPU bound](https://stackoverflow.com/a/868577/315168). Currently, geth uses [an interpreter for running EVM code](https://github.com/ethereum/go-ethereum/blob/master/core/vm/interpreter.go). There was an effort in the past to replace the interpreter with a more CPU efficient, more work per executed CPU instruction, [just-in-time compiler](https://ethereum.stackexchange.com/a/4192/620). I do not know why the effort was not finished, but I guess by the time it was not needed, as EVM performance had other bottlenecks.


## EVM chain figures

Here are some figures that we can use to compare the capacity across different EVM chains. Note that the tables below are more for the illustrative purposes to understand the problem space. The gas prices were measured on a calm day - good blockchain weather - it is more of the peak performance that would matter.


<table>
  <tr>
   <td><strong>Operation</strong>
   </td>
   <td><strong>Ether or native token transfer</strong>
   </td>
   <td><strong>ERC-20 token transfer</strong>
   </td>
   <td><strong>Uniswap V2 style swap </strong>
   </td>
  </tr>
  <tr>
   <td>Operation gas cost
   </td>
   <td>21,000
   </td>
   <td>56,000 (depends on an ERC-20 implementation)
   </td>
   <td>177,000 (depends on implementation, many details, <a href="https://etherscan.io/tx/0xc58da3d440dbe7de8234c842b99e923cfccef883e373029e99b83f9b81ac446a/">example</a>)
   </td>
  </tr>
  <tr>
   <td>Cost on Ethereum 1.0 mainnet - gas price 60 GWei
   </td>
   <td>$2.5
   </td>
   <td>$6.7
   </td>
   <td>$20
   </td>
  </tr>
  <tr>
   <td>USD cost on Polygon - gas price 25 GWei
   </td>
   <td>> $0.01
   </td>
   <td>> $0.01
   </td>
   <td>> $0.01
   </td>
  </tr>
  <tr>
   <td>USD cost on BSC - gas price 15 Gwei
   </td>
   <td>> $0.01
   </td>
   <td>> $0.01
   </td>
   <td>> $0.01
   </td>
  </tr>
  <tr>
   <td>How many operations we can fit in the 100M gas EVM block
   </td>
   <td>4700
   </td>
   <td>1785
   </td>
   <td>564
   </td>
  </tr>
  <tr>
   <td>How many operations are done in a second assuming 33MGas budget/second
   </td>
   <td>1566
   </td>
   <td>595
   </td>
   <td>188
   </td>
  </tr>
  <tr>
   <td>What is the throughput tx/s assuming one 100M block per 7 seconds
   </td>
   <td>670 tx/s
   </td>
   <td>255 tx/s
   </td>
   <td>80 tx/s
   </td>
  </tr>
</table>


Here is comparison of some different EVM L1 chains  Note that GWei gas prices are just for reference, as the US dollar price of ETH, MATIC and BNB native blockchain tokens fluctuate independently of each other (they changed so much during the post, so decided not to try to have US dollar figures.)


<table>
  <tr>
   <td>
   </td>
   <td><strong>Ethereum</strong>
   </td>
   <td><strong>Polygon</strong>
   </td>
   <td><strong>Binance Smart Chain</strong>
   </td>
  </tr>
  <tr>
   <td>Block size, gas units
   </td>
   <td>12M
   </td>
   <td><a href="https://polygonscan.com/chart/gaslimit">20M</a>
   </td>
   <td>100M
   </td>
  </tr>
  <tr>
   <td>Block time
   </td>
   <td>13 seconds
   </td>
   <td>2 seconds
   </td>
   <td>3 seconds
   </td>
  </tr>
  <tr>
   <td>Avg gas price (as the writing of this)
   </td>
   <td>60 GWei
   </td>
   <td>25 Gwei
   </td>
   <td>15 GWei
   </td>
  </tr>
</table>


Sources: [Polygon gas prices](https://polygonscan.com/chart/gasprice). [Binance Smart Chain gas prices](https://bscscan.com/chart/gasprice).

The design between smaller blocks, faster block time, or larger blocks, longer block time mainly affects [the block propagation](https://hackernoon.com/understanding-the-block-propagation-problem-in-blockchains-1t2s3x9b). I do not know if there are studies on the trade-offs here.


## Infrastructure challenges

When block space is abundant and cheap, all of it will be used. It really does not matter what block size is set, because if there is money to be made, all blocks will eventually be full and all cheap gas consumed for automated trading. Any infrastructure, like API nodes, block explorers and trade information sites created around the EVM must also be able to handle the chain peak 24/7.

Here are some examples of infrastructure scaling challenges of blockchains

* [PancakeSwap info](https://www.reddit.com/r/pancakeswap/comments/msnj4g/pancakeswapinfo_is_dying/) site cannot keep up with Binance Smart Chain transactions
* [Binance Smart Chain spammed](https://thedefiant.io/binance-smart-chain-congestion-is-slowing-down-pancakeswap/)
* [Binance suspends withdrawals for Ethereum mainnet](https://www.binance.com/en/support/announcement/45c8980178ad42ccb68fb46a8ae17203)
* [Binance Smart Chain nodes cannot get good sync, despite sufficient hardware](https://github.com/binance-chain/bsc/issues/283)
* Polygon API nodes unresponsive during Iron Finance exit rush

Here are some examples of what happens when a dynamic system, like a blockchain, tries to cope with the overload.

Binance smart chain halts, block time up to 800 seconds from 3 seconds.

<img class="img-600" src="/static/img/content/fixed-size/scaling-evm/image1.png" alt="">

Polygon blocks have slowly reached their full utilisation because of practically free gas. Everything has been [consumed by bots](https://twitter.com/moo9000/status/1402293566949502983), as it was affordable to do even $0.01 arbitration trades.

<img class="img-600" src="/static/img/content/fixed-size/scaling-evm/image4.png" alt="">

<br>

## Breaking the EVM limits

As we do not have infinite fast CPUs or an infinite amount of RAM, we are in trouble. We need to set some threshold for validators and full nodes for the hardware that is expected to have in order to sync the blockchain. If your hardware is too puny, the goal post, as the last block, moves further faster than you can consume existing blocks.

Then we have limitations set by EVM architecture decisions themselves. Something we could circumvent with better past design decisions how Solidity smart contracts are created and interacted with, but we cannot do for the current EVM applications as it would break backwards compatibility.

The most important limitation is that EVM cannot process transactions parallel and utilise multiple CPU cores well. Because any transaction can touch any part of the EVM global state, EVM transactions must be run in so-called serialised mode. Validating transactions and updating the state is a task that does not easily parallelise. EVM underutilises modern CPU and GPU power.

What can be done to optimise EVM based chains without changing the EVM itself:

* Requiring everyone to run nodes on better hardware (see NVMe comment above) and kick out nodes from the network on the P2P layer if they cannot keep up - note that increasing hardware requirements substantially will limit the capable servers, as in some point you cannot e.g. get off the shelf dedicated hardware with enough NVMe storage attached
* Bigger blocks (see the theoretical limit above)
* Optimize EVM implementation e.g. by replacing geth EVM interpreter with a just-in-time compiler (old 2016 effort [here](https://blog.ethereum.org/2016/06/02/go-ethereums-jit-evm/))
* Less decentralisation by having less active and passive block producers (Polygon, Binance Smart Chain, [Ethereum 2.0](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-client-architecture/))
* Smarter leader choosing (better consensus algorithms, see [Nightshade](https://near.org/papers/nightshade/) from NEAR)
* Crank out more useful cycles out from a CPU and other hardware (see Solana’s [pipelining](https://docs.solana.com/validator/anatomy))
* Smarter block and transaction propagation (see Solana’s [Turbine propagation](https://docs.solana.com/cluster/turbine-block-propagation))

What can be done by changing the EVM

* Computer science theory-based changes, like trading CPU time to IO and network bandwidth by [replacing Merke trees with Verkle trees](https://vitalik.ca/general/2021/06/18/verkle.html)
* Optimistic parallel transaction processing (see [Solana’s Sealevel](https://solana.com/news/sealevel---parallel-processing-thousands-of-smart-contracts))
* State rent to decrease the active global state (see [multiple state rent proposals EIP 2026-2031](https://eips.ethereum.org/core) in Ethereum Improvement Proposal track)
* [Sharding](https://near.org/papers/nightshade/) (multiple rollups with intercommunication are basically sharding)
## The case for Aurora

Aurora takes a novel  ”EVM as a smart contract” approach.

In Aurora, EVM is deployed as a smart contract on a fast Near protocol blockchain. NEAR has a fast consensus algorithm (Nightshade) and some other optimisations making it faster than plain old Go Ethereum. A similar “EMV as a smart contract” approach [is utilised by Telos EVM](https://docs.telos.net/evm/about-ethereum-virtual-machine).  [NEAR VM itself](https://github.com/near/nearcore) is a blockchain [with sharding](https://en.wikipedia.org/wiki/NVM_Express), written in Rust and having WebAssembly based run-time for smart contracts.

The benefit of the “EVM as a smart contract” approach is that it is trivial for EVM smart contracts to interact with the native smart contracts of the blockchain. For example, NEAR native smart contracts are able to run [proper on-chain order](https://github.com/princesinha19/nearbook) book exchanges which seems to be out of the grasp for EVM. Aurora smart contracts can tap into this potential and e.g. create smarter AMMs swap services that beat Uniswap v3.

Aurora does not need to create a new blockchain: it utilises [the existing NEAR validator network](https://near-staking.com/) that is already working. Aurora acts as a service from NEAR blockchain. Thus, Aurora team should be able to focus more on optimisations and spend less time on generic infrastructure work.

EVM, being run in a single NEAR shard, can process transactions as fast as a single NEAR shard can. [The benchmarks will be soon available as soon as ecrecovery precompile has been merged](https://github.com/aurora-is-near/aurora-engine/issues/169).

With more modern design, NEAR gets away with some of the limitations of EVM based chains. However, the EVM smart contract is still subject to the transaction processing limitations which follow EVM architecture, as outlined above. It is unlikely to break my assumed 800M gas per block limit as is.

[Rainbow bridge](https://near.org/bridge/), the bridging solution used in Aurora, has a novel design making it secure and cheap compared to some of the existing bridging solutions. Unlike some existing bridges, based on custodianship and/or [proof of authority](https://en.wikipedia.org/wiki/Proof_of_authority), Rainbow Bridge is [a trustless design](https://near.org/bridge/).

Where I see the technical success of the Aurora is its ability to break the current EVM limitations by sacrificing backwards compatibility. NEAR already has a sharding solution in place, so they can likely deliver cross-shard/cross roll up communication faster and with better security than the current Go Ethereum based EVM sidechains and rollup chains.

Note that technical success is only one of the success factors defined in earlier this blog post. We see that the current EVM’s scale to the current Binance Smart Chain traffic levels and there does not exist demand for more, although we can expect this demand to manifest itself during the next two and three years.  NEAR has a track record of delivering, building community and also producing high-quality theoretical blockchain research, matters that are likely to define success in the short term.

## The long-term perspective

Blockchain researchers and developers begin to understand what “the ultimate blockchain” will look like and how to reach 1,000,000 transactions per second. It will involve multiple independent shards or rollups communicating with each other each having an independent state. Each state is accelerated to the maximum using the single node speedup tricks like GPU processing and transaction parallelization that Solana is utilising today. Most of the theoretical research and first practical implementations are already written.

All blockchains that survive long term will converge to this similar design. We do not know how fast we will reach this final architecture. We know how much we can push out
