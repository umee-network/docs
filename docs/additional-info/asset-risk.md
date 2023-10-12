# Asset Risk

While the interoperability offered by DeFi protocols like UX presents many benefits, it also exposes the protocols to individual asset risks. DeFi protocols need to support several assets in order to give users the best possible experience while also avoiding certain assets that may expose these protocols to unnecessary risks.

## Asset Listing Process

UX allows users to lend and borrow assets across chains in a trustless manner. Users who deposit their assets on UX receive uTokens, minted by UX. uTokens represent the assets lent by a user plus the interest earned from lending the assets. uTokens allow users to lend and borrow across chains in a trustless way.

#### Since uTokens can represent different deposited assets, it’s important to understand the following constraints:

* Every time UX accepts a new asset as collateral, the protocol’s risk of insolvency grows. Since there are different risks associated with every token, more different tokens mean there is a greater risk of one of the tokens failing in some way.
* Accepting centralized assets as collateral may introduce centralization risk to the protocol. The single point of failure associated with centralized assets can be a threat to the protocols that support them.
* Assets that can only be deposited and lent, without being used as collateral, offer lower risk to the protocol.
* Greater volume of various assets across lending pools further lessens risk.

#### Before an asset can be added to UX, a proposal must pass through UX’s governance process. Proposals should be formatted as follows:

* Title: Asset Request - \[asset name], \[native blockchain or token format], \[type of support being sought (lending/borrowing, collateral)]
* Body: Analysis that clearly explains why the benefits of adding x asset outweigh the drawbacks. Links to relevant forums.

Anyone can submit a governance proposal through [UX's Governance Forum](https://commonwealth.im/umee/).

## Asset Risk Framework

### Potential Risks For Lenders

:::: tabs

::: tab Insolvency

#### Insolvency

* Risk: Liquidators may fail to liquidate in time during times of extreme market volatility, and as a result, borrowers may no longer be able to pay off their loan in full.
* Mitigation: There is a significant gap between when a position is eligible for liquidation, and when the position could potentially become under collateralized. Liquidators are heavily incentivized to liquidate a position as soon as it becomes eligible for liquidation.

:::

::: tab Liquidity

#### Lack of Liquidity

* Risk: Borrowers may borrow assets for as long as they’d like, so long as they remain properly over collateralized. This means at times of high utilization, lenders of certain assets may be unable to withdraw their deposits.
* Mitigation: Rates are variable, and based on supply and demand. Interest rates adjust to encourage an optimal utilization rate. When utilization gets too high, borrowers will be financially incentivized to pay off their loans while lenders are incentivized to deposit more.

:::

::::

### Potential Risks For Borrowers

:::: tabs

::: tab Liquidation

#### Liquidation

* Risk: Assets that are supplied and used as collateral are subject to liquidation in the event a user’s [Loan-to-Value (LTV) ratio](/users/blockchain-basics/what-is-defi.md#lending-and-borrowing-in-defi) rises above a predetermined threshold and the user is no longer properly over-collateralized. Liquidations typically happen when the value of borrowed assets significantly increases against the collateral provided, the value of the assets used as collateral significantly decreases against the value of the assets borrowed, or a user fails to properly monitor a position and their debt position grows significantly faster than their total collateral.
* Mitigation: Borrowers should monitor their positions closely and add more collateral and/or pay off loans to mitigate risk and maintain a healthy loan-to-value ratio. Borrowers can also use lower leverage to further protect their assets.

:::

::::

## Asset Risk Parameters

|       Asset      | Collateral | Max LTV | Liquidation Threshold | Liquidation Penalty | Optimal Utilization Rate | Reserve Factor |
| :--------------: | :--------: | :-----: | :-------------------: | :-----------------: | :----------------------: | :------------: |
|  **Stablecoins** |            |         |                       |                     |                          |                |
|        DAI       |     Yes    |   75%   |          80%          |          4%         |            80%           |       10%      |
|       USDC       |     Yes    |   80%   |          85%          |          3%         |            90%           |       10%      |
|       USDT       |     Yes    |   75%   |          80%          |          4%         |            90%           |       10%      |
| **Other Assets** |            |         |                       |                     |                          |                |
|       ATOM       |     Yes    |   75%   |          80%          |          5%         |            70%           |       10%      |
|       WETH       |     Yes    |   75%   |         82.5%         |          5%         |            80%           |       10%      |

:::: tabs

::: tab Max LTV

### Maximum LTV

Every asset available on UX has a maximum LTV rate, representing the maximum amount of the asset a user can borrow relative to the collateral provided.

> If UX has a maximum LTV of 75% and the price of UX is $1.00 then a user who has provided $100 worth of collateral can borrow up to 75 UX.

:::

::: tab Liquidation Threshold

### Liquidation Threshold

The liquidation threshold represents the percentage where a loan is considered undercollateralized relative to the collateral provided, and the borrower’s collateral becomes eligible for liquidation.

:::

::: tab Liquidation Penalty

### Liquidation Penalty

The liquidation penalty is a fee paid by a borrower if their position gets liquidated. These fees are earned by liquidators, and incentivize them to liquidate positions as quickly as possible.

:::

::: tab Reserve Factors

### Reserve Factors

How much of the interest generated from the pool is added back to the pool.

:::

::::
