# Interchain Accounts

## Background Information

The [Inter-Blockchain Communication Protocol (IBC)](/learn-the-basics/cosmos-basics/what-is-ibc) sets a universal communication standard that allows different [blockchains](/learn-the-basics/blockchain-basics/what-is-blockchain) to send and receive data in a decentralized manner. While the ability for users to securely transfer data (like the value associated with tokens) between separate sovereign blockchains is a massive breakthrough for [web3](/learn-the-basics/crypto-basics/what-is-web3) users, the data being transferred to a destination chain is simply being dropped off without specific demands for how the destination blockchain should use that data. 

Many different products built on different blockchains are complementary by design. Unfortunately, their currently is no easy way for a user of blockchain A to automatically execute specific transactions on blockchains B or C. When a web3 user wants to actually interact with applications built on different blockchains they’re often forced to create an entirely separate wallet, or manually change the network their wallet is connected to in order to be able to approve each individual transaction through another interface specific to the blockchain. With so many applications being built on different blockchains, this process can quickly become overly complicated and time consuming for users.

<br>

## What are Interchain Accounts?

Thanks to the flexibility provided by [IBC](/learn-the-basics/cosmos-basics/what-is-ibc), Interchain Accounts can be used to allow users of a blockchain to securely create and interact with accounts on other blockchains without the need to use separate interfaces or wallets. In other words, Interchain Accounts enhance the web3 user experience by enabling users to interact with different applications built on separate sovereign blockchains all from a single “controller chain” of choice.

_**Without Interchain Accounts**,  an Umee user who wants to stake ATOM and participate in governance on the Cosmos Hub needs to transfer ATOM from the Umee blockchain to the Cosmos Hub, and then connect to the Cosmos Hub through a separate interface in order to stake the ATOM and vote on a governance proposal._

_**With Interchain Accounts**, an Umee user can express that he/she wishes to transfer the ATOM to the Cosmos Hub and stake it within a single IBC transaction originating from the Umee blockchain. If the user wants to vote on a Cosmos Hub governance proposal, he/she can do so from his/her account on the Umee blockchain._

<br>

## How Does it Work?

Interchain Accounts use the IBC to transfer the precise information needed for a receiving blockchain to execute specific transactions. By providing additional data within an IBC transaction, receiving blockchains are able to perform any blockchain specific transactions as specified by the user without the need for the user to manually connect.

Additional information included within an IBC transaction enables a receiving blockchain to automatically execute transactions as instructed by the user on the controller chain. Similarly to how it’s a delivery driver’s responsibility to find a customer with the instructions provided, it’s the receiving blockchain’s responsibility to execute the transactions as directed by the controller chain - except the receiving blockchain won’t get lost in the parking lot.