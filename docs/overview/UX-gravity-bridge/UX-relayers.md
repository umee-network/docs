# UX Relayers

## Relayer Responsibility

The UX validators usually take the role of the relayers. As a requirement, validators must validate and sign transactions in order for relaying transactions to reach consensus; not participating as an orchestrator will cause them to be slashed. Validators are not required to participate in the relaying work and instead can assign a third party to run Peggo.

As part of the security mechanism of Gravity Bridge, there are punishments if a relayer fails to take a required action, produce an incorrect message, or takes malicious behavior. Relayers will risk being slashed or kicked out of the Gravity Bridge validator set.  

<br>

## Relayer Incentivization

Relayers earn fees for their work in facilitating relaying transactions. Relayers compete in being the first in relaying profitable transactions or batches to earn the relaying fees. Whoever submits the batch to Ethereum first will earn all of the fees. The other relayers who fail to submit the transaction batch in time will still spend their ETH for the failed transaction attempt. For this reason, relayers have the incentive to be the fastest in relaying profitable transactions. In order to increase the odds of success, relayers are free to modify Peggo for the best performance possible. 

Relayers are able to adjust their profit margin requirement to conduct a relay by setting their own profitability multiplier.  The profitability multiplier ultimately determines how much they earn from a successful relay. A batch is only created once the total transaction fees in the mempool reach the profitability threshold. Relayers do not choose how a batch is formed or what transactions are included. 

<br>

## Relaying Costs

Users pay a gas fee using UX (for the transaction) in addition to a bridge fee. It’s important to note that the bridge fee is paid in the token that is being sent. On the other hand, relayers must pay an Ethereum gas fee (regardless of if their relay was successful). Relayers must pay the Ethereum gas fee using ETH however they will get their reward in the batch’s denom token. This is the primary factor that influences the profit margin (if any) of a relay. 

<br>

## Relayer Economic Decisions

The UX chain could produce a list of batches, however it is up to the relayers to weigh gas costs vs potential rewards from relaying a batch. The relayer must perform a check on each batch in order to decide whether they should relay. Relayers relay all batches that are deemed profitable. To achieve this, relayers will query from the UX chain the list of batches and will navigate through each one. 

At each batch in the list relayers will check for the following:
- If the batch has enough signatures or not;
- Simulate the ETH transaction to get a gas cost estimate, then convert that to its USD equivalent;
- Convert the batches fees to USD;
- Check if the batch is profitable using the following condition:
*totalFee >= (gasCost * profitMultiplier)*. If this condition is true, then the relayer will send the ETH transaction. 

<br>

## Slashing Conditions 

Gravity Bridge deploys slashing to ensure that validators cannot sign or submit bridge messages that were not agreed upon by consensus. When signatures are submitted they are automatically validated in order to achieve consensus. Signatures are rejected if the validator does not sign the correct message. If a validator fails to produce a correct signature within the slashing period, they are slashed and kicked out of the gravity bridge validator set. 
