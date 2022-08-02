# Common Terms

> Before borrowing assets from the Umee market, users should be familiar with all of the following common terms.

:::: tabs

::: tab Collateral Assets

## Collateral Assets

![As seen on the Markets page.](/bg/collateral-bubble.png)

> Collateral assets are labeled with a pink "Collateral" bubble.

#### When collateral assets are supplied on the Umee Market:
- The supplier is able to borrow against the collateral assets supplied;
- The supplier is able to earn lending interest on the collateral assets supplied;
- The assets supplied as collateral may be liquidated in order to ensure that the borrower's debts are covered.

:::

::: tab Leverage Assets

## Leverage Assets

![As seen on the Markets page.](/bg/leverage-bubble.png)

> Leverage assets are labeled with a blue "Leverage" bubble.

#### When leverage assets are supplied on the Umee Market:
- The supplier is unable to borrow against the leverage assets supplied;
- The supplier is able to earn lending interest on the leverage assets supplied;
- The leverage assets are not at risk of [liquidation](/users/using-the-web-app/common-terms.html#liquidation).

:::

::::

## Borrow APR

![As seen on the Markets page.](/bg/borrow-apr.png)

Borrow APR is the annual interest rate borrowers _**OWE**_ for borrowing assets from the Umee market.

> These rates are variable, and may change over time based on supply and demand.

<details><summary>Borrow APR Example</summary>

*If USDC has a borrow APR of 5%, it indicates that a user who borrows 1,000 USDC may accrue roughly $50 in USDC interest on the loan after a year.*

*This user may have a total outstanding loan of 1,050 USDC after a year if the borrow APR remains constant.* 

</details>

## Borrow Limit

The borrow limit is the maximum amount a user can borrow against the collateral they have provided. Once the borrow limit reaches 100%, a user is at risk of [liquidation](/users/using-the-web-app/common-terms.html#liquidation).

## Collateral

![As seen on the asset details page.](/bg/collateral-yes-no.png)

If an asset can be used as collateral, it means that a user who deposits the asset will be able to borrow against it. When a [liquidation](/users/using-the-web-app/common-terms.html#liquidation) occurs, a portion of the assets being used as collateral will be used to pay off the outstanding loan plus the [liquidation penalty](/users/using-the-web-app/common-terms.html#liquidation-penalty).

## Liquidation

When users supply assets as [collateral](/users/using-the-web-app/common-terms.html#collateral) and borrow against them, the assets supplied as collateral are at risk of being liquidated, or sold off in order to cover the borrower’s debts and ensure the protocol remains solvent.

Liquidations occur when a user’s [loan-to-value ratio](/users/using-the-web-app/common-terms.html#ltv-ratio) exceeds the liquidation threshold. This can happen when:
- The value of the [collateral asset](/users/using-the-web-app/common-terms.html#collateral-assets) deposited depreciates compared to the value of the asset borrowed;
- The value of the asset borrowed appreciates relative to the value of the asset supplied as collateral;
- A user’s [borrow interest](/users/using-the-web-app/common-terms.html#borrow-apr) accrues to the point that the amount owed exceeds the [liquidation threshold](/users/using-the-web-app/common-terms.html#liquidation-threshold).

## Liquidation Penalty

![As seen in asset details.](/bg/liquidation-penalty.png)

The liquidation penalty is the fee paid by a borrower in the event that they are [liquidated](/users/using-the-web-app/common-terms.html#liquidation). Borrowers should always try to ensure that their positions remain properly over-collateralized in order to avoid paying a liquidation penalty.

<details><summary>Liquidation Penalty Example</summary>

*If a debt of 1,000 USDC is liquidated and the liquidation penalty is 10%, the borrower should expect to have 1,100 USDC worth of collateral liquidated.*

</details>

## Liquidation Threshold

![As seen in asset details.](/bg/liquidation-threshold.png)

The liquidation threshold is the [LTV ratio](/users/using-the-web-app/common-terms.html#ltv-ratio) at which a borrower should expect to be [liquidated](/users/using-the-web-app/common-terms.html#liquidation).

<details><summary>Liquidation Threshold Example</summary>

Assuming UMEE has a liquidation threshold of 15%, and the value of ATOM remains constant:

*A user provides $1,000 USD worth of UMEE and borrows the maximum allowable amount of $100 worth of other assets (10% LTV). The value of the borrowed assets increases to $150, bringing the user’s LTV ratio to 55%. This borrower will be liquidated in order to ensure their position stays properly over-collateralized.*

</details>

## LTV Ratio

LTV stands for “loan to value” ratio. A loan-to-value ratio represents the value of assets borrowed relative to the value of [assets supplied as collateral](/users/using-the-web-app/common-terms.html#collateral-assets). It is important for all Umee users to monitor their LTV ratio in order to avoid being [liquidated](/users/using-the-web-app/common-terms.html#liquidation).

## Maximum LTV

![As seen in asset details.](/bg/max-ltv.png)

The maximum LTV is the maximum amount that can be borrowed against the asset supplied as [collateral](/users/using-the-web-app/common-terms.html#collateral).

<details><summary>Maximum LTV Example</summary>

Assuming ATOM has a maximum LTV of 50%:

*A user who provides $1,000 USD worth of ATOM will be able to borrow up to $500 in other assets.*

</details>

## Supply APR

![As seen on Markets page.](/bg/supply-apr.png)

Supply APR is the annual interest rate lenders _**RECEIVE**_ for supplying their assets on the Umee market.

> These rates are variable, and may change over time based on supply and demand.

<details><summary>Supply APR Example</summary>

*If USDC has a supply APR of 5%, it indicates that a user who supplies 1,000 USDC may earn roughly $50 in USDC over the course of a year, paid by borrowers.*

*This user may be able to withdraw 1,050 USDC after a year if the supply APR remains constant.*

</details>
