# Bridges

## What are Bridges?

Different countries have access to different resources that are used to provide goods and services for their populations. As an individual country advances its goods and services are usually demanded by consumers worldwide, and if the country is producing more than it needs to satisfy its own population, the goods and services are typically exported to global markets which in turn brings more value back to that country. When international consumers are given the choice to purchase substitute (or superior) products at a lower price point, the country of origin rarely matters to them.

In crypto, different [blockchains](/learn-the-basics/blockchain-basics/what-is-blockchain) have different technical specifications that are leveraged to create products and services for users. As an individual blockchain advances, the products built on top of it are generally desired by users of other blockchains. Unfortunately the existing blockchains that make up web3 are isolated from each other, with their own rules and processes in place making it difficult for value to be transferred between them. When a superior product or service is offered on a neighboring blockchain it's not always easily accessible for users, and therefore the blockchain the product is provided on may have trouble capturing external value. 

Bridges are tools intended to allow crypto users to transfer value from one blockchain to another in order to access specific goods and services on different blockchains.

<br>

## How do Bridges Work?

Since blockchains are sovereign by design, it’s not possible to truly transfer a token from one blockchain to another. In order to move the data (value) these tokens represent between chains a bridging mechanism is required to lock the tokens on the original blockchain and unlock or mint a representation of the token on the destination chain. Currently, many bridges offer different “wrapped” versions of the same assets on various destination chains.

> For example, if a Bitcoin user has BTC they’d like to use within the Ethereum ecosystem they’re able to use a bridge to receive “wrapped Bitcoin” (wBTC), an Ethereum token pegged to the price of Bitcoin that can be used across the Ethereum ecosystem. 

In this scenario, no actual Bitcoin is being moved across chains; rather the original BTC is being sent to a custodian for safekeeping and wBTC is being minted and distributed to the user on the Ethereum blockchain. By issuing an Ethereum-specific token to represent the original Bitcoin, the bridge allows crypto users to feel as if they’re using their Bitcoin across the Ethereum ecosystem. While not all bridges are custodial, most operate similarly. 

<br>

## Issues With Bridges

Since bridges don’t actually transfer tokens from blockchain A to blockchain B, but rather issue a wrapped representation of the token from blockchain A on blockchain B, crypto liquidity is fragmented across chains. This creates a poor user experience, forcing users who wish to put their assets to work across multiple chains to use separate wallets and different wrapped versions of the same asset on various blockchains.

With significant amounts of crypto locked in smart contracts, bridges make an incredibly attractive target for exploits. While there are many different types of bridges including both custodial and non-custodial bridges, no bridge is perfect. Custodial bridges are centralized and therefore introduce centralization risk; when a user bridges BTC from the Bitcoin to Ethereum blockchain a significant amount of trust is required between the user and the bridge custodians. If the bridge custodians decide to run off with the BTC, or a hacker gains access to the custodians’ wallets, the wBTC being held by the user would essentially become worthless since it can no longer be redeemed for the BTC it’s meant to represent. Most non-custodial bridges come with risks of their own. Many “decentralized” bridges are not sufficiently decentralized and have a high risk of being compromised. Additionally, an unnoticed bug in a decentralized bridge’s smart contract can allow hackers to make off with enormous amounts of funds at the expense of the bridge users.

> The wrapped tokens issued by bridges may have their prices pegged to the underlying assets which they represent, but are only as strong as the bridge that issues them.

<br>

## How are Bridging Issues Being Addressed?

> Bridging solutions like [Umee’s Gravity Bridge](/overview/umee-gravity-bridge) seek to make the cross-chain bridging process as safe as possible for users by having an entire set of validators securing the bridge.

> Blockchains like Umee use the [Inter-Blockchain Communication Protocol](/learn-the-basics/cosmos-basics/what-is-ibc)(IBC) to securely transfer data with other blockchains without the risks commonly associated with bridging.