# Help

## Glossary

### Supply APR

![As seen on the Markets page.](/bg/supply-apr.png)

**Supply APR is the annual interest rate lenders **_**receive**_** for supplying their assets on the Umee market.**


> _**These rates are variable, and may change over time based on supply and demand.**_

#### Supply APR Example

If USDC has a supply APR of 5%, it indicates that a user who supplies 1,000 USDC may earn roughly $50 in USDC over the course of a year, paid by borrowers.

This user may be able to withdraw 1,050 USDC after a year if the supply APR remains constant.


### Borrow APR

![As seen on the Markets page.](/bg/borrow-apr.png)

**Borrow APR is the annual interest rate borrowers **_**owe**_** for borrowing assets from the Umee market.**

>_**These rates are variable, and may change over time based on supply and demand.**_

#### Borrow APR Example

If USDC has a borrow APR of 5%, it indicates that a user who borrows 1,000 USDC may accrue roughly $50 in USDC interest on the loan after a year.

This user may have a total outstanding loan of 1,050 USDC after a year if the borrow APR remains constant.

### Net APY

![As seen on the Dashboard page. ](/bg/net-apy.png)

**The net APY is the actual interest rate a user will **_**earn**_** (if the number is positive) or **_**owe**_** (if the number is negative) over the course of a year. The net APY takes all assets a user supplies and borrows into account in order to give the user an idea of the interest they will earn or owe.**

#### Net APY Examples

A net APY of 5% indicates that a user may earn a total of 5% on assets supplied after a year, if all rates remain constant.

A net APY of -5% indicates that a user may owe a total of 5% on assets borrowed after a year, if all rates remain constant.

### Collateral

![As seen on the Dashboard page. ](/bg/collateral.png)

**If an asset can be used as collateral, it means that a user who deposits the asset will be able to borrow against it. When a liquidation occurs, a portion of the assets being used as collateral will be used to pay off the outstanding loan plus the liquidation penalty.**

### **Maximum LTV**

![As seen on the Dashboard page. ](/bg/max-ltv.png)

**“LTV” stands for Loan-to-Value. The maximum LTV is the maximum amount that can be borrowed against the asset supplied as** [**collateral**]()**.**

#### Maximum LTV Example

Assuming ATOM has a maximum LTV of 50%:

A user who provides $1,000 USD worth of ATOM will be able to borrow up to $500 in other assets.

> _**Users should avoid borrowing the maximum available amount in order to help protect themselves from being liquidated.**_

### Borrow Limit

![As seen on the Dashboard page. ](/bg/borrow-limit.png)

**The borrow limit is the maximum amount a user can borrow against the collateral they have provided. Once a user’s total borrowed amount reaches 80% of their total borrow limit, they will be unable to withdraw collateral or borrow any more assets until they repay part of their loan(s) or deposit more collateral. A liquidation will not occur until a user's borrowed amount reaches 100% of the borrow limit.**

> _**If a user’s borrow limit reaches 100% it means that the**_ [_**liquidation threshold**_]() _**has been reached, and the user will be liquidated.**_

### Liquidation Threshold

![As seen on the Dashboard page. ](/bg/liquidation-threshold.png)

**The liquidation threshold is the LTV ratio at which a borrower should expect to be liquidated.**

#### Liquidation Threshold Examples

_**Example A**_

Assuming ATOM has a liquidation threshold of 55%, and the value of ATOM remains constant:

A user provides $1,000 USD worth of ATOM and borrows the maximum allowable amount of $500 worth of other assets (50% LTV). The value of the borrowed assets increases to $550, bringing the user’s LTV ratio to 55%. This borrower will be liquidated in order to ensure their position stays properly over-collateralized.

_**Example B**_

Assuming ATOM has a liquidation threshold of 55%, and the value of ATOM decreases:

A user provides 1,000 USDC worth of ATOM and borrows the maximum allowable amount of 500 UST (50% LTV). The value of the ATOM supplied decreases from 1,000 USDC to 900 USDC, bringing the user’s LTV to 55.5%. This user will be liquidated in order to ensure their position stays properly over-collateralized.

### Liquidation Penalty

![As seen on the Dashboard page. ](/bg/liquidation-penalty.png)

**The liquidation penalty is the fee paid by a borrower in the event that they are liquidated. Borrowers should always try to ensure that their positions remain properly over-collateralized in order to avoid paying a liquidation penalty.**

#### Liquidation Penalty Example

If a debt of 1,000 USDC is liquidated and the liquidation penalty is 10%, the borrower should expect to have 1,100 USDC worth of collateral liquidated.

## Troubleshooting Errors

### "Out of Gas in Location"

![](/bg/out-of-gas-error.png)

#### Solution:

Your gas limit is not high enough. Select "set gas" and manually enter an amount greater than the number after "gasUsed" before confirming the transaction.

![](/bg/out-of-gas-solution.gif)

### "Account Sequence Mismatch"

![](/bg/account-sequence-mismatch-error.png)

#### Solution:

This error means that another transaction is still pending. Wait a minute and try the same transaction again. Patience is key - avoid spamming the same transaction.

### "Receiving Chain Height >= Packet Timeout Height"

![](/bg/receiving-chain-height-error.png)

#### Solution:

There are a number of ways this error may be resolved, including:

* Increasing your gas limit;
* Clearing cache;
* Disconnecting and reconnecting your device to the internet.

## FAQ

### What is Umee?

Umee is a decentralized finance (DeFi) hub that was created for cross-chain interactions between networks. As a start, Umee will create an interchain lending and borrowing platform between the Ethereum and Cosmos blockchains. Umee will utilize the IBC protocol and bridging technologies such as Gravity Bridge towards connecting networks. In addition to that, Umee will implement universal DeFi tools and money lego components towards interacting with the broader crypto ecosystem.

### Why Umee?

Umee was created to address three main issues that exist in DeFi: 1) Detached Yields; 2) Concentrated Systematic Risks and 3) Isolated Capital. Umee plans to break the inherent silos between blockchains by utilizing bridging solutions towards interconnecting blockchains and encouraging better capital efficiency. The eventual goals will be to enable interchain lending and borrowing, multi-chain staking and delegations, plus cross chain defi rates.

### What does the name Umee mean?

The name Umee was inspired by the Japanese word “Umi”, which translates to ocean. We use this water analogy to refer to the vision that transactions can happen without being restricted to specific systems; i.e. money can flow freely like water across different blockchains. Moreover, Umee strives to help connect the world of crypto; the name itself depicts connectivity as it joins both “U” and “Me”.

### How is Umee built?

Umee is built using the Cosmos SDK as well as Ethereum smart contracts along with scaling solutions. The Umee network will be powered by a decentralized validator set based on Tendermint Proof of Stake consensus. Interoperability is achieved using Inter-Blockchain Communication protocol (IBC), Gravity bridge, and a customized system architecture. Using a combination of DeFi money legos as well as proof of stake tools, Umee is designing a cross chain defi ecosystem where many protocols can communicate between each other and interconnect across functionalities.

### Is there an Umee token?

Yes, there is an UMEE token that exists in a Cosmos SDK and ERC-20 format.

* [<mark style="color:blue;">Token utility</mark>]()<mark style="color:blue;"></mark>
* <mark style="color:blue;"></mark>[<mark style="color:blue;">Token format</mark>]()<mark style="color:blue;"></mark>
* <mark style="color:blue;"></mark>[<mark style="color:blue;">Tokenomics</mark>]()<mark style="color:blue;"></mark>

### What is Umee’s vision?

In the long run, Umee will be acting as a cross-chain DeFi hub, connecting various ecosystems together and developing novel financial products on top. Umee will incorporate tools such as layer 2 scaling solutions, side chain architectures, tools from the roll-ups ecosystem as well as alternative base layer protocols for connecting between blockchain networks. Within our DeFi Hub, we have been experimenting with interest rate instruments and other new financial primitives that will act as foundational infrastructure for the evolving crypto world.
