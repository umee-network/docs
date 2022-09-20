# IBC

## What is IBC?

The Inter-Blockchain Communication Protocol, or IBC, is a protocol used to handle the authentication and transport of data between two sovereign blockchains. Unlike many bridging solutions which usually aren't sufficiently decentralized and require users to trust a third party, IBC doesn't introduce any additional trust assumptions beyond the two blockchains that data is being transported between. IBC is what enables Cosmos users to seamlessly and securely interact with several different blockchains.

:::: tabs

::: tab Postal Service Analogy

### Postal Service Analogy

****

*In the real world, people can use a postal service to send just about anything anywhere. The postal service is solely responsible for transporting mail from one place to another, and usually doesn’t dictate or know the contents of the mail being sent. Once the postal service has delivered the mail as instructed, its job is complete. It’s not the postal service’s job to make someone open a piece of mail and pay a bill as instructed.*

In crypto, users can use IBC to transfer any type of data from one blockchain to another. IBC is responsible for the secure transfer of data packets between blockchains, and doesn’t set limits for what type of data can be transferred or know what the data being transferred represents. Once IBC has delivered data to a destination blockchain its job is complete. It’s up to the destination chain to make use of the data received.

:::

::: tab TCP/IP Analogy

### TCP/IP Analogy

****

*In the current version of the internet the “Transmission Control Protocol” (TCP) is used as a communication standard to allow devices and programs to share data over a network, and the “Internet Protocol” (IP) is used to determine where the data is delivered. TCP and IP work together to organize, authenticate, and transport data between devices. In other words, the TCP/IP model is what permits the communication of information on the internet. TCP/IP is widely used because of its reliability for users and simplicity for developers.*

IBC can be thought of as the TCP/IP model for web3. IBC provides the communication standard needed for [blockchains](/learn-the-basics/blockchain-basics/what-is-blockchain) to securely order, authenticate, and transport data between each other in a decentralized manner. 

:::

::::

<br>

## How It Works

When a user uses the IBC to transfer value between blockchains, tokens are first locked up on their native blockchain. Next, the native blockchain shows the destination chain the exact amount of tokens that are locked up. Once the destination chain verifies for itself that the information being transmitted is correct, it mints tokens to represent the value associated with the locked tokens on the original blockchain. While the actual token being transferred never actually leaves its native blockchain, the value associated with it does. From a user’s perspective, tokens are transferred from one blockchain and received on another in a matter of seconds.

When a user wishes to transfer tokens back from the destination blockchain to the native blockchain, the tokens that represent the native tokens are burned on the destination chain and the native tokens are unlocked on the original blockchain. Once again, from a user’s perspective the tokens are simply transferred from the destination blockchain and received on the native blockchain within seconds.

<br>

## Advantages

**The IBC offers simplicity and flexibility that is unrivaled by other cross-chain communication protocols**. The IBC allows data to be ordered, authenticated, and transferred between blockchains, but doesn’t set boundaries for what the data is or how it needs to be structured. This makes the IBC an attractive interoperability solution for developers who want their products to be as accessible as possible. When a blockchain enables IBC, users of the greater crypto ecosystem are able to easily access the products and services built on the blockchain, and the blockchain’s pre-existing users are able to easily access all other IBC enabled blockchains. 

In addition to simplicity and flexibility for builders, IBC offers the highest levels of safety for users looking to transfer value between chains. If an IBC transfer fails for any reason, data is not lost but rather returned to the blockchain that initiated the transfer. This means that those who use IBC to transfer value between chains don’t have to worry about the potential loss of assets. The relayers that facilitate the transfer of data between blockchains are both permissionless and trustless so users have no need to fear a centralized bridge failure. If a relayer isn't working as intended, anyone can spin up and deploy a new one.

With the IBC, data can easily be transferred between its native chain and any IBC-enabled destination chain. Data that exists on a destination chain cannot be transferred to another destination chain without first going back through the native chain. This helps serve as a security mechanism to ensure that if one chain is compromised, the rippling effects can be minimized. 