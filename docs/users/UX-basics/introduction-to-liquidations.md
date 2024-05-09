# Introduction to Liquidations

## What are liquidations?

Liquidations refer to the process of selling off a part of your supplied assets, known as collateral in order to cover the outstanding debt, which includes the loan amount and any accumulated debt.

When the value of collateral falls below a predefined level, known as the [liquidation threshold](https://learning.ux.xyz/users/UX-basics/common-terms.html#liquidation-threshold), the debt becomes unsecured, leading to liquidation.

<br>

## Why are liquidations important?

Liquidations are essential in safeguarding the sustainability of UX. While liquidations may seem unfavorable for borrowers, they are critical for ensuring the stability and security of UX.

By initiating liquidations when necessary, UX protects the interests of lenders, ensuring their funds are protected and the platform's continued operation.

<br>

## How to avoid getting liquidated?

Maintaining a healthy position on UX is vital in order to prevent liquidations.. You can achieve this by monitoring the status of your loans and collaterals, (e.g. during market down/up trends) and taking the appropriate actions based on your indicated health level of your position.

For example, you can increase your collateral assets position, or repay some of the accrued debt, in order to reduce the risk of liquidation.
You can track how close you are from being liquidated by checking your borrow limit bar on the [main dashboard](https://app.ux.xyz/dashboard).

![](/img/dashboard-liquidation.png)

_Note: Being informed on current market trends can be a core factor to ensure that you have a good health factor._

<br>

## What are Incremental Liquidations in UX and how do they ensure fairness?

Incremental liquidations in UX refer to the process where only a portion of a borrower's collateral is sold off when their position breaches the liquidation threshold. This approach protects borrowers from losing their entire collateral by adjusting penalties proportionally to enhance the Loan-to-Value (LTV) ratio.

Unlike traditional methods, which would normally liquidate substantial portions of collateral, UX's incremental liquidations minimize the impact on borrowers while ensuring that penalties are fair and directly tied to changes in collateral value.

This balanced approach maintains a fair and stable lending environment for both borrowers and lenders in UX.

_Example:_

_Alice deposits 100 $ATOM tokens as collateral, and borrows 50 $USDC. If Alice’s loan becomes eligible for liquidation, only a portion of the loan will be liquidated, to maintain a healthy Loan-to-Value (LTV) ratio._

_Typically, liquidations would liquidate 50% or 100% of Alice’s position. However, due to the advanced incremental liquidation process, only a small portion of the position will be liquidated (5~10%). This means that instead of losing half or all of Alice’s collateral, only the minimum amount necessary will be used to restore a healthy position with a health factor greater than 1._

_If the liquidation penalty is 5%, after being successfully liquidated, Alice will have the remaining 95$ worth of ATOM tokens displayed as collateral, and no loaned assets._

<br>

## Can I participate in the liquidations ecosystem?

Absolutely, liquidations are open to anyone, check out our flash liquidations section [here](https://app.ux.xyz/liquidation_dashboard).

However it is important to note that there is competition over the liquidation, due to their ease and profitability.

Usually liquidators develop their own bots in order to be the first ones liquidating loans to increase their profitability.

Always consider leveraging efficient tools to maximize your opportunities.

<br>

## How can I participate in liquidations?

UX’s liquidation dashboard can be found [here](https://app.ux.xyzliquidation_dashboard/).

![](/img/dashboard-liquidation-2.png)

1. Total eligible debt - shows the total debt accrued that can be liquidated

2. Eligible Positions - shows the total amount number of currently possible liquidations

3. Pending Liquidation Rewards - shows the pending liquidation rewards that can be obtained at that specific

4. Able to Liquidate button - shows/hides the positions that are liquidable at that moment

5. Show Dust - shows/hides the dust ( <0.01$) positions that are liquidable at that moment

## Liquidation Targets

Based on the status of the position, the liquidation targets are split into three categories:

**Red**: Position can be liquidated.

**Orange**: Position can not be liquidated, but the LTV ratio is higher than 90% it will soon become a liquidation target.

**Yellow**: position can not be liquidated, but the LTV ratio is higher than 75%

There are two types of liquidations:

<br>

:::: tabs

::: tab Normal liquidation

![](/img/normal-liquidation.png)

Simple liquidations are straightforward: they allow the partial liquidation of a user's position in order to restore a healthy balance.

:::

::: tab Flash Liquidation

![](/img/flash-liquidation.png)

Flash Liquidations will let you borrow a user's bad position and absorb their collateral as your own. You should make sure your account has a healthy amount of collateral before absorbing any loans.
