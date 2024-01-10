---
title: UX Chain Leverage Module Parameters Guide
contributors: false
---

## Denomination Parameters

### Base Denom

- Description: Signifies the IBC code of the token recognized in the Cosmos ecosystem.

- Importance: Crucial for identifying the underlying token in transactions.

### Symbol Denom

- Description: Corresponds to the symbol associated with the token.

- Importance: A human-readable representation of the token.

- Example: on Ethereum, the Symbol Denom of Ether is represented as "ETH."

### Exponent

- Description: Determines the number of decimal places used for the native token on the UX Chain.

- Importance: Ensures accurate representation of token values within the network.

- Example: An exponent of 6 means that 1 UX Token is represented as 1000000 in code.

## Rate and Utilization Parameters

### Base Borrow Rate

- Description: Defines the minimum interest rate for borrowing an asset.

- Importance: Influences the cost of borrowing.

- Example: A Base borrow rate of 1% means that borrowers will pay at least 1% annual interest on the borrowed asset.

### Kink Borrow Rate

- Description: Sets the target interest rate at the kink utilization of the borrow asset.

- Importance: Affects interest rate changes after the target utilization rate is reached.

- Example: If Kink borrow rate is set at 80%, interest rates will change when borrowing exceeds 80% of the asset's capacity

### Max Borrow Rate

- Description: Represents the upper limit of the interest rate that borrowers can be charged.

- Importance: Establishes a cap on interest rates to manage interest rate risk.

- Example: Max borrow rate of 20% means borrowers can never be charged more than 20% interest on their loans.

### Kink Utilization

- Description: Determines the target utilization rate of a certain asset.

- Importance: Influences the expected total borrowing of an asset.

- Example: Kink utilization of 70% means the platform aims to maintain borrowing levels around 70% of the supplied assets.

## Collateral and Liquidation Parameters

### Collateral Weight

- Description: Determines the proportion of an asset's total value that can be used to borrow assets.

- Importance: Measures the borrowing power of collateral assets.

### Liquidation Threshold

- Description: Represents the maximum ratio of a borrower's position value to the collateral value before liquidation happens.

- Importance: Manages borrower's liquidation risk effectively to prevent bad debts.

### Liquidation Incentive

- Description: Decides the reward when a liquidator successfully liquidates an undercollateralized position.

- Importance: Motivates users to participate in maintaining the platform's health.

### Min Collateral Liquidity

- Description: Sets the minimum percentage of liquidity a collateral asset needs to maintain to allow liquidation to happen successfully.

- Importance: Ensures collateral availability during liquidations.

## Asset and Platform Risk Parameters

### Reserve Factor

- Description: Determines what portion of the interest earned from lending a token goes into UX Chain’s reserves, serving as an insurance fund.

- Importance: Ensures the stability and sustainability of the lending platform.

### Max Supply

- Description: Establishes the highest amount of tokens that an asset can be supplied to UX Chain.

- Importance: Manages risk exposure of any specific tokens on the platform.

### Max Collateral Share

- Description: Determines the max percentage of a token’s total collateral value against the total collateral value on the platform.

- Importance: Acts as a risk control mechanism by limiting risk exposure to any specific tokens.

### Max Supply Utilization

- Description: Sets the highest percentage that an asset can be borrowed.

- Importance: Caps borrowing capacity to maintain a minimum amount of pool liquidity of an asset.

## Other Parameters

### Oracle Reward Factor

- Description: Dictates the portion of interest accrued on borrows sent to the oracle module to fund its reward pool.

- Importance: Serves as the economic incentive for validators to submit accurate price information to UX.

### Enable Msg Supply

- Description: Controls the ability to deposit funds into the lending pool.

### Enable Msg Borrow

- Description: Determines if users can borrow funds from the lending pool.

### Blacklist

- Description: Used to completely eliminate an asset from the lending pool.
