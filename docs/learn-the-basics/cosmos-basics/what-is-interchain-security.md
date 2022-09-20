# Interchain Security

## Blockchain Security Background

[Proof of Stake blockchains](/learn-the-basics/blockchain-basics/types-of-blockchains) rely on a decentralized network of participants called [validators](/learn-the-basics/staking-basics/what-is-validator) to keep the blockchain operational and secure. Validators lock up large amounts of [crypto](/learn-the-basics/crypto-basics/what-is-crypto) as collateral in order to be eligible to validate and add data to the [blockchain](/learn-the-basics/blockchain-basics/what-is-blockchain) in a process called [staking](/learn-the-basics/staking-basics/what-is-staking). As the total value of assets staked by validators increases, the cost associated with attacking the network becomes exponentially greater, and thus the blockchain is considered more secure. As more validators participate in a blockchain’s Proof of Stake consensus and more tokens are staked by different validators, the chances of the network failing due to validator negligence or validators colluding to attack the network decreases significantly, and thus the blockchain is considered more decentralized.

It’s incredibly important for any blockchain to be secure and decentralized or the assets held by users of the blockchain are at risk. On certain Proof of Stake blockchains like Umee, an attacker needs to control ⅓ of the total staked tokens in order to censor transactions, and ⅔ of the total staked tokens in order to corrupt the network. If the value of assets stored on a blockchain is greater than ⅔ of the value of assets staked on a blockchain, the blockchain becomes profitable to exploit and thus becomes a target for attackers. Generally, the mature blockchains with a proven history of success capture and maintain the majority of value. Therefore, as more blockchains are developed for different use cases less capital is available to help secure each individual new network, and thus newer networks are more likely to suffer attacks. 

It can also be difficult for newer blockchains to rally the support of a large network of decentralized [validators](/learn-the-basics/staking-basics/what-is-validator). There is a cost associated with running a validator, and all validators need to have some level of technical expertise in order for the blockchain to operate as intended. Validators generally only want to validate on blockchains where the likelihood of profit is high, and are less likely to support certain experimental endeavors. If a Proof of Stake blockchain is unable to attain a highly decentralized validator set, it doesn’t offer much of an advantage over a regular database.

<br>

## What is Interchain Security?

Interchain Security is a technology built for [Cosmos blockchains](/learn-the-basics/cosmos-basics/what-is-cosmos) which allows a well-established “_Provider Chain_” with a high value [staked](/learn-the-basics/staking-basics/what-is-staking) on it to provide security for a less-established “_Consumer Chain_.” A Consumer Chain is a blockchain that rents security from a Provider Chain, and thus enjoys high levels of decentralization and security it would likely be unable to attain on its own. Consumer Chains are better secured with Interchain Security because the cost to attack the network is tied to the total staked value on the Provider Chain. Depending on the agreement between a Consumer Chain and a Provider Chain, stakers on the Provider Chain may earn a portion of a Consumer Chain’s tokens in exchange for the security provided.

<br>

## Advantages

:::: tabs

::: tab Innovation

### Innovation

****

Interchain Security will help encourage blockchain innovation by making it even easier for anyone to launch a new blockchain. Bootstrapping a decentralized validator set is one of the most challenging tasks for a new blockchain; by allowing a blockchain’s security to be outsourced to another larger chain, the barriers to entry are lowered significantly. This means that builders can focus more on building a blockchain optimized for a specific use case without worrying about security concerns.

:::

::: tab Flexibility

### Flexibility

****

Builders on many mature blockchains like Ethereum face issues due to the wide diversity of applications using the same blockchain. Different applications have different needs and priorities, and the common blockchain they are built on top isn’t able to accommodate all of them. 

In the real world changes to the law can be extremely advantageous to one party, and detrimental to another. In crypto, changes to a shared blockchain can be useful to some products and services, and harmful to others.  

By allowing newer Consumer Chains to access the high levels of security provided by Provider Chains without actually building on top of the Provider Chain, Interchain Security grants builders greater control over the blockchains their applications are built on. Consumer Chains can have their own [governance processes](/governance) and thus are not limited by the more conservative governance practices commonly seen on larger chains.

:::

::: tab User Experience

### User Experience

****

It’s commonly known that blockchains are limited by scalability issues; as more applications are built on top of a blockchain and more users transact on a blockchain, transactions become slower and more expensive for users. A large part of the reason applications are often built on top of existing blockchains rather than as their own blockchains is because applications are only as secure as the blockchains they are built on top of, and users generally choose to interact with applications secured by the most trusted blockchains. 

With Interchain Security, an application that would usually be built on top of an existing blockchain can instead be built as its own blockchain and still access the security provided by the pre-existing blockchain. This means that the users who interact with the Consumer Chain application will likely be able to transact faster and more inexpensively than if the application was built on the Provider Chain.

:::

::::