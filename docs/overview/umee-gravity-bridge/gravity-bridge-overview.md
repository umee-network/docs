# Gravity Bridge

## What is Gravity Bridge?

UX’s Gravity Bridge is a chain-specific bridge optimized for transfers between Ethereum and the UX chain, with plans to integrate an Omni-EVM feature (includes the ability to transfer to and from multiple EVMs) in the future. The advantages UX’s gravity bridge affords over generalized bridges is security and capital efficiency. The bridge’s multisig which signs off on state changes (account balances) for cross chain transactions is controlled by UX’s 100 decentralized and permissionless validators, greatly enhancing security and minimizing trust assumptions. In this documentation we dive further into the economics of Gravity Bridge and Peggo, which is an orchestrator for the Gravity Bridge that assists relayers in cross-chain messaging. 

<br>

## Functions

The main function of Gravity Bridge is to securely transfer ERC-20 assets to Cosmos, and vice versa. The key stakeholders of Gravity Bridge are the users, relayers, and validators. Validators are the same actors that secure the UX chain. In order for validators to relay transactions, they must run a software on their nodes called Peggo, which is the orchestrator that allows them to validate events (changes in account balances) occurring on both Ethereum and Cosmos. All of UX’s 100 validators must sign-off on the multisig for Gravity Bridge via Peggo, making the bridge decentralized and robust in its security setup. 

<br>

## Asset Transfer 



:::: tabs

::: tab Ethereum to Cosmos

### Ethereum to Cosmos

****


When a user sends a token from Ethereum to Cosmos, funds are deposited in the gravity smart contract on Ethereum and an event is created. This event will be picked up by validators (using Peggo) and relayed to the UX chain. Once >66% of the validators have claimed to see the event, the according tokens bridged from this transaction will be unlocked and sent to the destination address on UX.

> For Ethereum-originated denoms (common ERC20s), tokens will be minted with a special denom composed of gravity + {ERC20 address}.

:::

::: tab Cosmos to Ethereum

### Cosmos to Ethereum

****

For transactions from Cosmos to Ethereum, the Gravity contract creates ERC-20 representations for Cosmos tokens and ERC20 tokens that were previously locked in the Gravity contract will be freed and sent to the destination address. UX will collect transactions into batches, ordered by fee, which then will be signed by validators. Once enough signatures are collected (>66% of validators), this most profitable batch can be relayed to Ethereum by any participant of the network to get the relaying reward (the sum of all fees). Bridge fees are always paid in the same token that is being sent, so there’s no need to buy the UX token to be able to use the bridge (only a tiny bit to pay for UX chain’s fees which are negligible and easily bought on a Dex such as Osmosis).

The transaction fees on Ethereum are exponentially higher than fees on a Cosmos SDK chain. In order to reduce bridge cost which is associated with the fees charged by the destination chain (Ethereum in this case), transactions being sent from Cosmos to Ethereum are put into batches before they are sent to Ethereum. When sending tokens from Cosmos to an Ethereum address, the tokens are first sent to the Gravity contract and sit in the mempool of unconfirmed transactions. As soon as a threshold of transaction fees is reached after pooling the pending transactions, they are batched and relayed to Ethereum. All the remaining pending transactions will wait in the mempool until the threshold of transaction fees is reached again. Batching transactions helps reduce the high cost of processing transactions on Ethereum by splitting the cost up between a batch. 

> For any Cosmos-originated denom (the UX token or an IBC token), the right amount of tokens will be unlocked and sent. 

:::

::::
