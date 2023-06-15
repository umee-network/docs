---
title: Parameters V1
contributors: false
---

## Parameters V1

### base_denom

The "base_denom" parameter is the IBC code of the token recognized in the Cosmos ecosystem.

### reserve_factor

The"reserve_factor" is a parameter that determines what portion of the interest earned from lending a token goes into Umee’s reserves. The reserve is used as an insurance fund to compensate lenders if bad debt ever occurs. It's an important factor in ensuring the stability and sustainability of the Umee lending platform over time.

### collateral_weight

The parameter "collateral_weight" determines the proportion of an asset's total value that can be used to borrow assets. This parameter measures how much borrowing power an asset can provide when used as collateral. Not all assets are listed as collateral assets on Umee.

### liquidation_threshold

“Liquidation Threshold” is a parameter that represents the maximum ratio of your borrow position value to the value of your collateral before liquidation is automatically triggered. It is an important parameter to monitor in order to manage borrower’s liquidation risk.

### base_borrow_rate

“base_borrow_rate” represents the minimum interest rate that borrowers will be charged for borrowing an asset. This rate is expressed as an annual percentage rate (APR).

### kink_borrow_rate

"kink_borrow_rate" sets the interest rate at the target utilization rate of the borrow asset defined as “kink”. After the target utilization rate, interest rate increases at an expedited rate after kink to motivate the utilization of the borrow asset back to kink.

### max_borrow_rate

"max_borrow_rate" represents the upper limit of the interest rate that borrowers can be charged when they borrow a specific asset. The primary objective of implementing a maximum borrow rate is to set the slope from kink in order to drive utilization to the target and use a dynamic interest rate to incentivize supply and borrow.

### kink_utilization

The "kink_utilization" parameter determines the target utilization rate of a certain asset. The interest rate slopes before and after kink are different, incentivizing supply and borrow behaviors using interest rate to drive utilization back to kink.

### liquidation_incentive

The "Liquidation_incentive" parameter decides how much reward a liquidator gets for successfully liquidating an undercollateralized position.
If the “liquidation_incentive” is set at 1.05, the liquidator is granted an additional 5% of the overall value of the liquidated collateral as compensation for their role to keep the overall platform in health.

When assets have different“Liquidation_incentive” values, liquidators usually prefer to liquidate the one that has a higher liquidation incentive.

### symbol_denom

The "Symbol_denom" parameter corresponds to the symbol associated with the token. For example, in the Ethereum network, the symbol of the native token is represented by ETH.

### max_collateral_share

The “max_collateral_value” parameter determines the max percentage of a token’s total collateral value compared to the total collateral value on the Umee platform. It acts as risk control, limiting the risk exposure to any specific tokens used as collateral.

This parameter is influenced by three factors:

- The specific token’s total collateral value on Umee
- The overall collateral value on the platform
- Price fluctuation of all the collateral assets

When the max_collateral_value is reached, users cannot borrow more against that collateral token, as it loses additional borrowing power.

### max_supply_utilization

The "max_supply_utilization" parameter sets the highest percentage that an asset can be borrowed at any given moment. It acts as a cap on the borrowing capacity from the lending pool. For instance, if an asset’s total supply is 1000 units and the "max_supply_utilization" is set as 0.8 (80%), borrowers are restricted from borrowing more than 800 units in total. This parameter ensures that the lending pool maintains an adequate amount of unborrowed assets so that lenders have liquidity to withdraw when needed.

### min_collateral_liquidity

The "min_collateral_liquidity" parameter sets the minimum percentage of liquidity a collateral asset needs to maintain in order to satisfy liquidity requirements when liquidation happens. When the liquidity of the collateral pool drops below this threshold, the collateral asset will not provide additional borrowing power. This condition ensures that there is an ample amount of collateral accessible to cover potential liquidation needs.

### max_supply

The "Max_supply" parameter establishes the highest amount of tokens that an asset can be supplied to Umee. Attempting to add additional supply of the given token into the protocol is not possible. It is a risk parameter used to manage the risk exposure of any specific token on the platform.
