# Common Terms

## Supply APR

![As seen on the Markets page.](https://lh6.googleusercontent.com/EHxyzU3rUr98yHj8BBKCVNbcsvbPdcgt5pYnW7TyUaqRqNrGfUVFUeCn10zhtZir0GS4Pi0BX\_k2c2exL7Y6vg6EJcrWTigFV05GOEHizG7vkny3p3LiBHsWkcggl76d10h6AGwsTe8AmhYk2Q)

**Supply APR is the annual interest rate lenders **_**RECEIVE**_** for supplying their assets on the Umee market.**

{% hint style="info" %}
_**These rates are variable, and may change over time based on supply and demand.**_
{% endhint %}

<details>

<summary>Supply APR Example</summary>

If USDC has a supply APR of 5%, it indicates that a user who supplies 1,000 USDC may earn roughly $50 in USDC over the course of a year, paid by borrowers.

This user may be able to withdraw 1,050 USDC after a year if the supply APR remains constant.

</details>

## Borrow APR

![As seen on the Markets page.](https://lh5.googleusercontent.com/Lx9cqwa3eyOIRpbUOIZ5af7jBb5XfCuh\_qBHNZqVc8Be5JlqfD7wShryswXAZdciScJiGPJBR9IXrtKnPSRemdSST7NdZUNLVSHMvBR3t\_71h6N9m0hEyHtcjb1vBeK\_RpU405SBHEfey\_Ojqw)

**Borrow APR is the annual interest rate borrowers **_**OWE**_** for borrowing assets from the Umee market.**

{% hint style="info" %}
_**These rates are variable, and may change over time based on supply and demand.**_
{% endhint %}

<details>

<summary><strong>Borrow APR Example</strong></summary>

If USDC has a borrow APR of 5%, it indicates that a user who borrows 1,000 USDC may accrue roughly $50 in USDC interest on the loan after a year.

This user may have a total outstanding loan of 1,050 USDC after a year if the borrow APR remains constant.

</details>

## Net APY

![As seen on the Dashboard page. ](https://lh5.googleusercontent.com/V4Cc09pnBpKbHts2chhv\_LK4QLPpuw9A8fotcJvY46sep-8fO0h\_LeJnr7zS8XKxb9xnac5t5ICJwcNfAC3Rdl6uAlKNhyrMRLqJ-7Yye4cVhNb31NTNK1QX-wPjGBTYkjNSW1r2xuZDKptTIQ)

**The net APY is the actual interest rate a user will **_**EARN (if the number is positive)**_** or **_**OWE (if the number is negative)**_** over the course of a year. The net APY takes all assets a user supplies and borrows into account in order to give the user an idea of the interest they will earn or owe.**

<details>

<summary><strong>Net APY Examples</strong></summary>

A net APY of 5% indicates that a user may earn a total of 5% on assets supplied after a year, if all rates remain constant.

A net APY of -5% indicates that a user may owe a total of 5% on assets borrowed after a year, if all rates remain constant.

</details>

## Collateral

![As seen on the Dashboard page. ](https://lh5.googleusercontent.com/ehihPL62441076d-2EJTeHweSaqri8B2xjlVsE46qCnsRRayL4pp4DsO-YnFkUGKbqcd3ZvcQwCTUo9z\_WKwNbuu46RJ8AJPG70ViAGMR06zopM47kM1guFEi7IYfrfuIIY49ILDybEfYdycog)

**If an asset can be used as collateral, it means that a user who deposits the asset will be able to borrow against it. When a liquidation occurs, a portion of the assets being used as collateral will be used to pay off the outstanding loan plus the liquidation penalty.**

## **Maximum LTV**

![As seen on the Dashboard page. ](https://lh4.googleusercontent.com/No3HX-qbMwdyE0FvmKr\_zoYV6rypwtZjIFepsdLaRF0TDVZEFlY6QdfSytElHc0e0x7AZnPu1Cu8fucLWtFuIlAph1qy-zSudRNhOUsCd49vnDPYGLZAMMxWY\_4tnjx1wt8-un6hXs8EqyFtZA)

**“LTV” stands for Loan-to-Value. The maximum LTV is the maximum amount that can be borrowed against the asset supplied as** [<mark style="color:blue;">**collateral**</mark>](common-terms.md#collateral)**.**

<details>

<summary><strong>Maximum LTV Example</strong></summary>

Assuming ATOM has a maximum LTV of 50%:

A user who provides $1,000 USD worth of ATOM will be able to borrow up to $500 in other assets.

</details>

{% hint style="warning" %}
_**Users should avoid borrowing the maximum available amount in order to help protect themselves from being liquidated.**_
{% endhint %}

## Borrow Limit

![As seen on the Dashboard page. ](https://lh6.googleusercontent.com/MZaeMgRRQ9KXImuC0goLdNoFX4lewPZ1vSsGBPRMriCbVPyUmu9y3qmuXQU8oCt5NzBG\_iY117QnNSPbGHYoni\_unaTX8hZL2yUcscTOZ7WQm4DI9FUCEKzrY6zrFlaiXIPGEArP9mbRs-qMGg)

**The borrow limit is the maximum amount a user can borrow against the collateral they have provided. Once a user’s total borrowed amount reaches 80% of their total borrow limit, they will be unable to withdraw collateral or borrow any more assets until they repay part of their loan(s) or deposit more collateral. A liquidation will not occur until a user's borrowed amount reaches 100% of the borrow limit.**

{% hint style="danger" %}
_**If a user’s borrow limit reaches 100% it means that the **<mark style="color:blue;">****</mark>_ [_<mark style="color:blue;">**liquidation threshold**</mark>_](common-terms.md#liquidation-threshold) _**has been reached, and the user will be liquidated.**_
{% endhint %}

## Liquidation Threshold

![As seen on the Dashboard page. ](https://lh5.googleusercontent.com/racZaMhY996KmPoRNl92WUJxK-VCXFFYdFrCIHj1FCFpQaXj4XalTYbj7YI4uikkOfPDSiOVYRMsMxS9AAgwQpt\_YZJxTOEuPlf9B5SElNHXz9xKhjzwSRElcOeEihsaUyRX23U6GhGLCHrEWw)

**The liquidation threshold is the LTV ratio at which a borrower should expect to be liquidated.**

<details>

<summary><strong>Liquidation Threshold Examples</strong></summary>

_**Example A**_

Assuming ATOM has a liquidation threshold of 55%, and the value of ATOM remains constant:

A user provides $1,000 USD worth of ATOM and borrows the maximum allowable amount of $500 worth of other assets (50% LTV). The value of the borrowed assets increases to $550, bringing the user’s LTV ratio to 55%. This borrower will be liquidated in order to ensure their position stays properly over-collateralized.



_**Example B**_

Assuming ATOM has a liquidation threshold of 55%, and the value of ATOM decreases:

A user provides 1,000 USDC worth of ATOM and borrows the maximum allowable amount of 500 UST (50% LTV). The value of the ATOM supplied decreases from 1,000 USDC to 900 USDC, bringing the user’s LTV to 55.5%. This user will be liquidated in order to ensure their position stays properly over-collateralized.

</details>

## Liquidation Penalty

![As seen on the Dashboard page. ](https://lh6.googleusercontent.com/pdv5d4XhMKaGL6RTvxoittCXivfJuMERPy5IPo7DGv36vOZeskwmlD9S1WDeChnhnL6SMJSwtMpbzPu-xETOvWo7xMEAHdr4EPI3lfJPrdNuRGXWm-litPv8I9VrPKuwBnm\_K1QNGI8dSvtsAA)

**The liquidation penalty is the fee paid by a borrower in the event that they are liquidated. Borrowers should always try to ensure that their positions remain properly over-collateralized in order to avoid paying a liquidation penalty.**

<details>

<summary><strong>Liquidation Penalty Example</strong></summary>

If a debt of 1,000 USDC is liquidated and the liquidation penalty is 10%, the borrower should expect to have 1,100 USDC worth of collateral liquidated.

</details>
