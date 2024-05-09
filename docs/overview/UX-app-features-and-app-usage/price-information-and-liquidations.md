# Price information and liquidations

---

### If my borrow rate exceeds 100% due to price movement, do I get fully liquidated and lose 100% of my collateral?

_Liquidations occur when a user’s LTV exceeds the Liquidation Threshold. However, UX’s liquidation is incremental. What does it mean?_

_Incremental liquidation means only a small portion of your loan will be liquidated (Liquidation Penalty: 5%-10% depending on the asset) in order to bring the user to a healthy LTV ratio without penalizing the user for more than what is necessary._

_Incremental liquidation is a design first proposed by UX as a borrower protection mechanism._

<br>

### How does UX get its price information on assets?

_UX takes real-time prices from Ojo. The Ojo Network is a Cosmos SDK blockchain, that specializes in aggregating data from both centralized and decentralized sources in a permissionless manner and relaying that information to other blockchains._

_Ojo is an important price security feature for UX and you can read more about Ojo and the Historacle here. [Read more about Ojo](https://docs.ojo.network/)_

<br>

### Is it possible for someone to get liquidated due to an error in the price on UX?

_UX uses Ojo for price information, which aggregates price data from various sources, including both on-chain and off-chain sources such as Binance, Coinbase, OKX, Osmosis, and many more. It is important to acknowledge that price errors can occur on any exchange or platform, and users should be aware of the potential risks involved._

_However, because Ojo takes price information from multiple sources, it is unlikely for UX to take the wrong price just because one or even a few of the exchanges produce an error._

_If there is a sudden drop in asset prices, liquidations could be affected, especially in a volatile market. UX uses the Historical to avoid price manipulation._

_For more details on liquidations or to enhance your understanding, visit [here](/users/UX-basics/introduction-to-liquidations)_
