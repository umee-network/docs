# Frequently Asked Questions

<details><summary>How does the Umee Gravity Bridge support itself economically?</summary>

_Each relayer gets a reward when they successfully relay transactions across blockchains. They estimate if the batch or a relaying transaction is going to be profitable by comparing Ethereum’s fees and the batch’s reward (fees paid by users)._

</details>

<br>

<details><summary>What is the difference between an orchestrator and a relayer?</summary>

_Relayers compete to be the first in relaying a profitable batch. Orchestrators validate and sign batched transactions._

</details>

<br>

<details><summary>Who owns the Gravity Bridge?</summary>

_Umee’s Gravity Bridge is completely decentralized and is operated by the Umee validator set._

</details>

<br>

<details><summary>What costs will users of the bridge experience?</summary>

_Costs on the Gravity Bridge are as minimal as they can get. Transactions going from Umee to Ethereum are grouped in batches of up to 100 transactions, meaning they share the costs. Going from Ethereum to Umee they only pay for the cost of executing sendToCosmos. In both cases cost is highly tied to the price of Ethereum._

</details>

<br>

<details><summary>How are the Gravity Bridge and any related components be secured?</summary>

_The Gravity contract is basically a multisig wallet that’s managed by Umee’s validator set. The Gravity Bridge design benefits from its simplicity and less dependencies._

</details>
