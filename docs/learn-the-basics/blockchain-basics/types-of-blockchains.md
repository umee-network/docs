# Types of Blockchains

## Consensus Mechanisms
The most common blockchains utilize **Proof of Stake** or **Proof of Work** consensus mechanisms. A consensus mechanism is a procedure network participants follow in order to verify that the state of the data being transmitted on the network is correct. [Blockchains](/learn-the-basics/blockchain-basics/what-is-blockchain) use consensus mechanisms to ensure that all network participants are in agreement on the data (transactions) being published on the decentralized public ledger. This is what enables [crypto](/learn-the-basics/crypto-basics/what-is-crypto) users to seamlessly transact without the need for a centralized authority.

## Proof of Stake

> Umee is a Proof of Stake blockchain. Other well known Proof of Stake blockchains include Cosmos Hub, Solana, Polkadot, and Cardano.

Proof of Stake (PoS) blockchains require network participants called "[validators](/learn-the-basics/staking-basics/what-is-validator)" to lock up crypto as collateral to ensure that they properly “_validate_” the data being included in a new entry on the distributed ledger. Validators are randomly selected to validate a block based on the amount of collateral they have locked up, or “[staked](/learn-the-basics/staking-basics/what-is-staking),” hence the name “Proof of Stake.” Once a randomly selected validator validates a block, other validators verify its accuracy and the "_block rewards_," or newly minted units of crypto, are released.

:::: tabs

::: tab User Experience

### User Experience

****

PoS blockchains limit the amount of validators that can take turns creating new blocks, making it faster and cheaper to reach a consensus. Users of PoS blockchains like Umee typically enjoy cheap, near-instant transactions.

:::

::: tab Security Measures

### Security Measures

****

If a [validator](/learn-the-basics/staking-basics/what-is-validator) is selected to validate a block and they fail to do so accurately or in a timely manner they will have a portion of their stake (collateral) “_slashed_,” or removed. Depending on the severity of the offense, validators who misbehave may be removed from the validator set and unable to continue participating in the PoS consensus. Slashing penalties act as a mechanism to ensure validators do their part in keeping the network operational and secure.

In the case of blockchains that utilize Cosmos' Tendermint BFT consensus, acquiring the security threshold of ⅓ of a blockchain’s computing power enables an attacker to change the blockchain state and manipulate transactions. In [Cosmos](learn-the-basics/cosmos-basics/what-is-cosmos), this means the attacker would need to amass at least ⅓ of the total crypto staked on the blockchain. This would essentially be an acquisition of the network, and be very difficult to perform on networks with communities that value decentralization. 

:::

::: tab Block Rewards

### Block Rewards

****

PoS consensus tends to reward network participants with the greatest stakes. This means that those who have the most skin in the game will receive the greatest amount of block rewards. In many PoS blockchains like Umee, token holders have the ability to [delegate their tokens to a validator](/users/staking-umee/staking-umee) who then splits block rewards with all delegators proportional to the amount of tokens they delegated. This allows all stakeholders to receive block rewards rather than only those with technical expertise.

:::

::: tab Environmental Impact

### Environmental Impact

****

There is typically a limit to the amount of validators that can participate in a blockchain’s PoS consensus. Since validators are chosen randomly, they do not need to compete and use large amounts of energy to create new blocks, which is why newer PoS blockchains like Umee are viewed as an environmentally-friendly solution.

:::

::::

## Proof of Work

> Bitcoin and Ethereum are two of the most well known blockchains that use a Proof of Work consensus protocol.

Proof of Work (PoW) blockchains require network participants called “miners” to compete to solve a mathematical puzzle in order to create a new "_block_" or data entry to the decentralized public ledger. It takes a lot of work in order to solve the puzzle, hence the name “Proof of Work.” Once a new block has been created, other network participants must verify its accuracy in order to add it to the ledger, at which point the participant who proposed the block earns “_block rewards_,” or newly minted units of cryptocurrency issued to network participants in return for their role in securing the network.

:::: tabs

::: tab User Experience

### User Experience

****

PoW blockchains allow an unlimited number of network participants to compete against one another to create new blocks, and the equipment and energy used can be costly. These costs are often felt by users through expensive transaction fees and slower transactions.

:::

::: tab Security Measures

### Security Measures

****

Miners who fail to accurately create a new block are not penalized aside from missing out on block rewards. Since there are significant operational costs associated with participating in PoW networks, miners are financially incentivized to behave.

If an attacker is able to acquire 51% of a blockchain’s computing power, the attacker will be able to manipulate transactions. The large costs associated with the computing power and energy required to participate in a PoW network act as a shield against attackers. As stronger computing power becomes more easily accessible, PoW blockchains may be at greater risk.

:::

::: tab Block Rewards

### Block Rewards

****

PoW consensus tends to reward network participants who are able to purchase and operate the most and highest quality equipment since these participants have a greater chance of being able to solve the puzzle the fastest. While there is some level of randomness, it is difficult for an independent miner to create new blocks in order to capture block rewards so most block rewards end up going to large scale miners with the deepest pockets, or groups of miners that work together. 

:::

::: tab Environmental Impact

### Environmental Impact

****

Since there is no limit to the amount of miners that can participate in PoW consensus, and the immense amount of computing power needed to create a new block on a PoW blockchain requires large amounts of energy, popular PoW blockchains like the Bitcoin network are often viewed as harmful to the environment. 

:::

::::