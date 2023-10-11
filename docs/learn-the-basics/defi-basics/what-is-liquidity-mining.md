# Liquidity Mining

## What is a Liquidity Pool?

*In real life when groups of people “pool” their funds they’re combining their money for a common purpose. By combining funds these groups of people are able to access various opportunities they’d be unable to as individuals.*

When [crypto](/learn-the-basics/crypto-basics/what-is-crypto) users deposit assets into a liquidity pool they’re also combining their assets for a common purpose. While different types of liquidity pools vary greatly in their purposes and levels of risk, all liquidity pools generally enable crypto users called liquidity providers to access opportunities they’d otherwise be unable to as individuals.

**A liquidity pool can be broadly defined as a collection of crypto assets locked within a common smart contract.** Liquidity pools are most commonly used by [decentralized exchanges](/learn-the-basics/defi-basics/what-is-dex) to enable trustless trading, [decentralized money markets](/learn-the-basics/defi-basics/what-is-defi-money-market) to enable trustless lending and borrowing, and decentralized yield aggregators to enable trustless asset management. Since blockchains are both accessible and permissionless, once a liquidity pool has been created on a DeFi application anyone is able to deposit assets into it. 

<br>

## LP Tokens

When users deposit assets into liquidity pools they receive **LP tokens** (liquidity provider tokens) to represent their contributions. LP tokens are essentially claim tickets that can be redeemed by the holders at any time for the share of the liquidity pool that they represent. The redeemability of LP tokens gives them value, therefore LP tokens are often traded or used as collateral to borrow other assets on various DeFi protocols. This composability enables unique use cases for various types of LP tokens. 

<br>

## What is Liquidity Mining?

As a whole, liquidity pools allow crypto users to trustlessly interact with each other without the need for a centralized third party. When two parties interact with a liquidity pool they don’t need to trust each other since they’re interacting with a smart contract rather than a stranger. Since anyone can contribute to a liquidity pool, liquidity pools also allow anyone to earn a share of the revenues generated from liquidity provisioning in a process known as **liquidity mining**.

:::: tabs

::: tab AMMs

### AMMs

****

Centralized exchanges function by acting as an intermediary to match buyers with sellers.  Automated market makers, or “AMMs,” function by using smart contracts to facilitate trades between users without the need for a centralized intermediary. All of the most well known decentralized exchanges and stableswaps like Osmosis, Uniswap, and Curve are AMM platforms. When a crypto user deposits assets into a liquidity pool on an AMM they are providing two or more assets to be traded against each other as a pair in exchange for LP tokens that represent the total share of liquidity they have provided to the pool and a proportional amount of the trading fees generated. 

When the demand for one asset in a liquidity pool exceeds the demand for the other asset, AMMs use algorithms to gradually increase the price of the asset in demand relative to the other asset in the liquidity pool in order to maintain a predetermined ratio of assets in the pool (usually 50/50). If an AMM’s pool uses a 50/50 asset ratio, liquidity providers who redeem their LP tokens will receive an equal value of each asset from the pool. Since the value of assets in an AMM’s liquidity pools are constantly changing, it’s unlikely for liquidity providers to withdraw the same amount of each token that they provided. 

The liquidity pools used by AMMs are generally considered to be the riskiest type of liquidity pool for users to deposit funds into due to the high possibility of [impermanent loss](https://academy.binance.com/en/articles/impermanent-loss-explained) (although the level of risk varies heavily depending on the pair of assets provided as liquidity). Generally the trading fees earned from providing liquidity aren’t attractive enough relative to the risk incurred, and AMMs must offer significant liquidity mining incentives in order to attract liquidity providers.

:::

::: tab Money Markets

### Money Markets

****

When someone deposits money into a bank account they’re acting as a liquidity provider; the bank lends that money in order to generate lending interest and returns a small portion to the depositor. In DeFi, when a user deposits assets on a decentralized money market they’re also acting as a liquidity provider since the assets are lent to other users in order to generate lending interest for the depositor.

Similarly to how decentralized exchanges use liquidity pools to remove the need for an intermediary to facilitate trades, decentralized money markets use liquidity pools to remove the need for an intermediary to facilitate lending and borrowing activities. When users interact with decentralized money markets like UX, Aave, and Compound, they’re supplying assets to or borrowing assets from liquidity pools rather than other users. After crypto users deposit assets into liquidity pools on decentralized money markets they receive LP tokens to represent the total share of liquidity they have provided to the pool and a proportional amount of the lending fees generated. 

Depositing assets into a liquidity pool on a decentralized money market doesn’t expose liquidity providers to impermanent loss since the asset is simply being stored in the pool and lent to another user. Decentralized money markets generally require users to be heavily overcollateralized in order to borrow, and use bonding curves to incentivize liquidity, so users of [well-audited protocols like UX](/overview/umee-overview/security-audits) can confidently provide liquidity to earn lending interest without a centralized intermediary taking a huge cut. Since there is significantly less risk associated with decentralized money markets, protocols typically don’t need to use large amounts of liquidity mining incentives to attract depositors.

:::

::: tab Yield Aggregators

### Yield Aggregators

****

In the real world wealthy investors who meet certain criteria are able to provide liquidity to hedge funds who attempt to use the funds to earn returns for their investors through various risk management strategies. In DeFi users can deposit assets into a liquidity pool on a yield aggregator in order for the funds to be used in yield optimization or risk management strategies that attempt to earn returns for the depositors.

While there are strict requirements for individuals to be able to invest in hedge funds, and not all hedge funds operate transparently, anyone can deposit assets into a liquidity pool on a yield aggregator and know exactly how the assets will be used. When users deposit assets on yield aggregators like Sommelier or Yearn they’re enabling a smart contract to use the assets in a specific DeFi strategy. The LP tokens issued by yield aggregators represent the total share of liquidity a user has provided to a certain pool/strategy, and a proportional amount of the revenue generated from the strategy.

The risks associated with yield aggregators heavily depend on the strategy being deployed; a strategy that involves liquidity provisioning for volatile asset pairs on AMMs to capture liquidity mining rewards will be significantly riskier than a strategy that lends different types of stablecoins to earn lending yield. 

:::

::::

<br>

## Liquidity Mining Incentives

Although liquidity pools theoretically remove the need for a third party when performing various DeFi activities like trading, lending, and borrowing, they still face some challenges. DeFi protocols, like all other products, are worthless without users. In order for DeFi applications to attract users, lots of liquidity is needed. Greater liquidity on decentralized exchanges allows users to trade more assets with less slippage, while greater liquidity on decentralized money markets helps stabilize rates and guarantee consistent liquidity for both lenders and borrowers. DeFi technologies are still in their earliest stages and are considered highly experimental, so significant incentives are needed in order to attract large amounts of liquidity.

While liquidity providers already earn a proportional share of revenue generated from a liquidity pool (trading fees, lending interest, etc.), projects often offer liquidity mining incentives in order to attract more users and deeper liquidity. Liquidity mining incentives are typically newly issued governance tokens or utility tokens that are rewarded to the liquidity providers and/or users of a specific liquidity pool or protocol. 

> Liquidity mining incentives may be offered to:
> - Attract users to a new DeFi protocol;
> - Encourage deep liquidity for the most important pools on a DeFi protocol;
> - Boost liquidity for pools with higher risk profiles;
> - Incentivize greater borrowing activity;
> - Bootstrap liquidity for a new liquidity pool on a DeFi protocol;
> - Help offset impermanent loss incurred by liquidity providers on AMMs;
> - Distribute decision making power (governance tokens) to users actively supporting a protocol.
