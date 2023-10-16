# Gravity & Peggo FAQ

## FAQ

### What is Peggo? ###

Peggo is an orchestrator for the Gravity Bridge. It acts as a relayer between a Cosmos and Ethereum chain. The Peggo orchestrator is responsible for relaying transactions between the two chains as well as updating the Gravity Bridge contract on Ethereum with the latest validator set updates that happen on the Cosmos chain.

#### Are validators required to run Peggo?

Yes, one of the requirements to be a validator on UX is to run Peggo, failing to do so will result in a jailing event.

**If a user cancels a bridged transaction to Ethereum, does the bridge fee get refunded?**

Yes, the fee gets refunded!

#### How long does a bridge transaction take?

Bridging from Ethereum to UX is a straightforward procedure. After the user sends a deposit, using the `sendToCosmos` method on the UX Gravity contract, the orchestrators will start to send over events to confirm that this event happened after 13 blocks have passed. So the usual time for bridging assets from Ethereum to UX is around **\~5m**.

Bridging assets from UX to Ethereum is a more complex process given that transactions get batched along with other transactions of the same type of asset. This means that the bridge speed scales up with the traffic, if there's very low traffic at the moment and you want your transaction to get relayed fast then you'll need to pay a fee high enough to cross the bridge by itself. If you can wait, just go with the average fee and your transaction will get processed as soon as enough transactions are collected. This process can take **from a couple of minutes to hours**, depending on the token, traffic of the moment, and **most importantly the bridge fee**.

#### How are suggested fees calculated?

Currently, we use some simple math to estimate the fees to pay for a bridge from UX to Ethereum:

_Suggested Average Fee in UX_

$$
fee = (((735,000 * currentETHGasPriceGwei * 1.3) / 10^9 / 20) * $ETHUSD)/$UXUSD
$$

_Suggested Fast Fee in UX_

$$
fee = (((735,000 * currentETHGasPriceGwei * 1.3)/ 10^9) * $ETHUSD)/$UXUSD
$$

Ethereum to UX fees depend 100% on Ethereum just like any other ETH transaction.

{% hint style="info" %}
Note, our roadmap contains improvements to provide better fee estimations to minimize time and costs.
{% endhint %}

#### What is the Gravity contract?

The Gravity contract is the Ethereum smart contract controlled by the validator set that allows two-way transaction relaying. This contract has no owner and only the validator set is able to free assets from it.

The contract is published on Ethereum's mainnet: [https://etherscan.io/address/0xb564ac229e9d6040a9f1298b7211b9e79ee05a2c](https://etherscan.io/address/0xb564ac229e9d6040a9f1298b7211b9e79ee05a2c)

#### Why can a validator get slashed?

A validator will be slashed if it does not sign an outgoing validator set update, a batch or a logic call before the signing window passes. In addition, a validator will also get slashed if they sign a wrong event coming from Ethereum.

**What are the relevant parameters for slashing?**

* `slash_fraction_logic_call`: This parameter defines the slash factor a validator is slashed if they do not attest to a logic call execution. This only applies to **bonded** validators.
* `slash_fraction_batch`: This parameter defines the slash factor a validator is slashed if they do not attest to a transaction batch. This only applies to **bonded** validators.
* `slash_fraction_valset`: This parameter defines the slash factor a validator is slashed if they do not attest to a validator set update. This applies to both **bonded** and **unbonding** validators.
* `unbond_slashing_valsets_window`: This parameter is used to determine how many blocks after starting to unbond a validator needs to continue signing blocks. The goal of this parameter is that when a validator leaves the set, if the action of their leaving creates enough change in the validator set to justify an update they will sign a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them from the Ethereum bridge and replace them with the new set gracefully.
* `slash_fraction_bad_eth_signature`: This parameter defines the slash factor a validator is slashed if they submit a bad Ethereum signature during a logic call, a transaction batch, or validator set update.

**What are the relevant batch and profitability parameters for running Peggo?**

* `--eth-gas-limit-adjustment`: Ethereum estimations aren't always accurate, so this value increases it by default by `1.2`. Unless Peggo is throwing an error related to the limit, this value should be left untouched.
* `--eth-gas-price-adjustment`: This value is used to increase the current estimated gas price to improve the chances of any outgoing transaction getting processed faster. By default, this value is `1.3`.
* `--relayer-loop-multiplier`: This is a multiplier for the loop that checks and relays any profitable batches. By default, the value is `3.0` (meaning approximately 3 Ethereum blocks), which is fast enough to send batches periodically but also slow enough that new transactions won't collide with previous transactions sent by the same relayer.
* `--requester-loop-multiplier`: This multiplier is set in UX blocks and its default value is 60 (so around 5 minutes). It's used to request new batches to be created on-chain. The default value is the recommended one and doesn't affect relaying or profit.

## Troubleshooting

Use Ctrl/Cmd+F to search for any error messages you are seeing. If you don't find your error here, reach out to us through Discord.

### Could not build outgoing batch

```
ERR failed to (sync) broadcast batch tx error="failed to CalculateGas: rpc error: code = InvalidArgument desc = failed to execute message; message index: 0: Could not build outgoing tx batch: new batch would not be more profitable: invalid: invalid request"
```

This is _not_ an error, it means that your orchestrator tried to create a new batch, but the total amount of fees in the transactions in the pending pool didn't amount to more than what an already formed batch has.

### "tx timed out" and "failed to CalculateGas"

These errors can be seen in longer messages but usually, it boils down to:

* The UX node you are connecting to has a gas price > 0 and you didn't adjust for that in Peggo.
* You don't have any funds in your orchestrator account.
* Your node is out of sync.

### IncorrectCheckpoint

```
Fail with Custom Error 'IncorrectCheckpoint ()'
```

This is an error that can be seen in transactions on the Gravity contract in Ethereum. It usually means that this transaction was late because another relayer sent it first.

Normally you would see this failed transactions with another transaction accepted in the same block or in a previous block.

### Failed to estimate gas cost

```
ERR failed to estimate gas cost error="gas required exceeeds allowance (151247)"
```

This error is usually shown when the Ethereum account used by the orchestrator doesn't have enough funds.
