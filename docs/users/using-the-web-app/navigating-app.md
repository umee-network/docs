# Navigating the Web App

## Markets

![](/bg/markets-page.png)

> All [transfer](/users/using-the-web-app/transferring-tokens), [lend](/users/using-the-web-app/supply-withdraw), and [borrow](/users/using-the-web-app/borrow-repay) actions can be performed from the [Markets section](https://app.umee.cc/#/markets).

:::: tabs

::: tab A

### A) Chain Selection Slider

---

Use this button to select the [blockchain](/learn-the-basics/blockchain-basics/what-is-blockchain) you're interacting with Umee's web app through. Different types of assets and rates are available on different chains.

> - When "Cosmos" is selected users are interacting with [IBC](/learn-the-basics/cosmos-basics/what-is-ibc) assets on the [Umee blockchain](/overview/umee-overview).
> - When "Ethereum" is selected users are interacting with ERC-20 assets on the Ethereum blockchain.

:::

::: tab B

### B) Total Supplied

---

This represents the total value of all assets supplied on Umee's Markets on the blockchain selected.

:::

::: tab C

### C) Total Borrowed

---

This represents the total value of all assets borrowed from Umee's Markets on the blockchain selected.

:::

::: tab D

### Available Assets

---

This list shows each asset available for leverage and/or collateral on the blockchain selected. All available assets can be lent and borrowed from the Umee Market, but users must supply collateral assets in order to be able to borrow assets.

:::

::::

<br>

## Asset Parameters

![](/bg/atom-info.png)

> Select any asset in the [Markets section](https://app.umee.cc/#/markets) to view its parameters.

:::: tabs

::: tab A

### A) Available Liquidity

---

Available liquidity represents the total amount of the asset selected that can be borrowed from the Umee Market by overcollateralized users.

:::

::: tab B

### B) Total Borrowed

---

Total borrowed represents the total amount of the asset selected that is actively being borrowed from the Umee Market.

:::

::: tab C

### C) Maximum LTV

---

The maximum loan-to-value ratio represents the maximum amount that can be borrowed against the selected asset when the selected asset is supplied as collateral.

**If the maximum LTV of ATOM is 70% a user can deposit $100 of ATOM and borrow up to $70 in other assets against it.**

- _Loan = $70_
- _Collateral value = $100_
- _LTV = 70/100 = 70%_

:::

::: tab D

### D) Liquidation Threshold

---

The liquidation threshold represents the loan-to-value ratio at which a user should expect to be liquidated. The liquidation threshold may be reached if the value of a user's collateral decreases relative to the value of the outstanding loan or the value of the outstanding loan increases relative to value of the collateral deposited.

<br>

**If the liquidation threshold is 80%:**

- _Loan = $70_
- _Collateral value = $87_
- _This user will be liquidated because 70/87 > 80%_

:::

::: tab E

### E) Liquidation Penalty

---

The liquidation penalty is the fee paid by a borrower who is liquidated. The fee is calculated and paid from the collateral assets supplied by the borrower.

:::

::: tab F

### F) Collateral

---

If an asset is supported as collateral, anyone who supplies the asset is able to borrow against it. Collateral assets may be liquidated in the event that a borrower's LTV ratio rises above the liquidation threshold.

:::

::: tab G

### G) Supply Position

---

The supply position represents the amount of an asset a user is actively supplying on the Umee Market.

:::

::: tab H

### H) Wallet Balance

---

The wallet balance represents the amount of an asset that an individual user currently has on the Umee network in his/her Umee wallet. Assets must be [transferred to Umee](/users/using-the-web-app/transferring-tokens) before they will appear here.

:::

::: tab I

### I) Supply APR

---

The supply APR is the annual percentage rate a user may receive for lending the asset on the Umee Market.

> Supply APRs are floating rates and will change based on current supply and demand.

:::

::: tab J

### J) Borrow Position

---

The borrow position represents the amount of an asset a user is actively borrowing from the Umee Market. In order to withdraw all of their collateral, users must repay their borrow positions in full.

:::

::: tab K

### K) Available

---

The available borrow amount represents the amount of an asset an individual user can borrow against the asset(s) they have provided as collateral.

:::

::: tab L

### L) Borrow APR

---

Borrow APR is the annual percentage rate a borrower will owe for borrowing the asset.

> Borrow APRs are floating rates that will change based on supply and demand.

:::

::::

<br>

## Dashboard

![](/bg/dashboard-page.png)

> The [Dashboard section](https://app.umee.cc/#/dashboard) allows users to easily monitor their individual positions.

:::: tabs

::: tab A

### A) Chain Selection Slider

---

Use this button to select the [blockchain](/learn-the-basics/blockchain-basics/what-is-blockchain) you'd like to view your Umee positions on.

> - When "Cosmos" is selected users can view their [IBC](/learn-the-basics/cosmos-basics/what-is-ibc) assets and positions on the [Umee blockchain](/overview/umee-overview).
> - When "Ethereum" is selected users can view their ERC-20 assets and positions on the Ethereum blockchain.

:::

::: tab B

### B) Total Collateral

---

Total collateral represents the total value of collateral assets an individual user has supplied on Umee on the blockchain selected.

:::

::: tab C

### C) Total Borrowed

---

Total borrowed represents the total value of assets an individual user has borrowed from Umee's Markets on the blockchain selected.

:::

::: tab D

### D) Net APY

---

Net APY represents the annual percentage yield an individual user will earn or owe based on their existing positions.

> Users' net APY will change based on the floating rates of assets supplied and borrowed.

> - A positive net APY indicates that a user is earning more interest on assets supplied than he/she expects to owe on assets borrowed.
> - A negative net APY indicates that a user is earning less interest on assets supplied than he/she expects to own on assets borrowed.

:::

::: tab E

### E) Borrow Limit

---

The borrow limit represents the maximum value of assets an individual user can borrow against the assets he/she has supplied as collateral.

The bar visual is an indicator of the health of an individual user's loans. It shows the total value of assets an individual user has borrowed as a portion of the user's borrow limit. If the bar reaches 100% a user can expect to be liquidated.

> All users should closely monitor their positions and borrow limits. To mitigate chances of liquidation, users should consider repaying part or all of their loans or supplying more collateral as the bar approaches 100%.

:::

::: tab F

### F) Assets Supplied

---

The supply section represents the assets an individual user has supplied to the Umee Market on the blockchain selected, and annual percentage rate he/she is currently earning on the assets supplied.

:::

::: tab G

### G) Assets Borrowed

---

The borrow section represents the assets and individual user has borrowed from the Umee Market on the blockchain selected, and the annual percentage rate his/her borrow interest is currently accruing at.

:::

::::
