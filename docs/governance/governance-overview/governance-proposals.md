# Governance Proposals

## New Asset Listing Proposals

:::: tabs

::: tab Overview

### New Asset Listing Proposal Overview

****

Umee allows users to lend and borrow a wide variety of assets across chains in a trustless manner. Umee follows a formal listing process that allows the protocol to assess risk using a targeted framework that scrutinizes key risk areas including market risk (volume, volatility, market cap), centralization of asset, protocol risk, etc. Project teams should provide as much of the relevant information as possible to help Umee make an informed decision. 

> Anyone can use the 'New Asset Listing Template' to [submit a new asset listing proposal](/users/governance/creating-proposal).

<br>

### Asset Risk Framework

****

#### Potential Risks for Lenders Include:

<br>

<details><summary>Insolvency</summary>

- **Risk:** _Liquidators may fail to liquidate in time during times of extreme market volatility, and as a result, borrowers may no longer be able to pay off their loan in full._

- **Mitigation:** _There is a significant gap between when a position is eligible for liquidation, and when the position could potentially become under collateralized. Liquidators are heavily incentivized to liquidate a position as soon as it becomes eligible for liquidation._

</details>

<br>

<details><summary>Lack of Liquidity</summary>

- **Risk:** _Borrowers may borrow assets for as long as they’d like, so long as they remain properly over collateralized. This means at times of high utilization, lenders of certain assets may be unable to withdraw their deposits._

- **Mitigation:** _Rates are variable, and based on supply and demand. Interest rates adjust to encourage an optimal utilization rate. When utilization gets too high, borrowers will be financially incentivized to pay off their loans while lenders are incentivized to deposit more._

</details>

<br>

#### Potential Risks for Borrowers Include:

<br>

<details><summary>Liquidation</summary>

- **Risk:** _Assets that are supplied and used as collateral are subject to liquidation in the event a user’s Loan-to-Value (LTV) ratio rises above a predetermined threshold and the user is no longer properly over-collateralized. Liquidations typically happen when the value of borrowed assets significantly increases against the collateral provided, the value of the assets used as collateral significantly decreases against the value of the assets borrowed, or a user fails to properly monitor a position and their debt position grows significantly faster than their total collateral._

- **Mitigation:** _Borrowers should monitor their positions closely and add more collateral and/or pay off loans to mitigate risk and maintain a healthy loan-to-value ratio. Borrowers can also use lower leverage to further protect their assets._

</details>

:::

::: tab Template

### New Asset Listing Proposal Template

****

#### Title: _Listing Proposal: 'Add/Remove' Support for 'Asset Name'_

<br>

#### References

- Link to project: 
- Link to whitepaper: 
- Link to documentation: 
- Link to CoinGecko/CoinMarketCap:
- Link to tokenomics:
- Links to exchanges (CEX & DEX): 
- Links to audits: 
- Community channels:

<br>

#### Summary
Brief overview of the token and project. 

<br>

#### Background Information

1. What is the connection between the proposer and the asset being proposed?
2. When was the TGE (Token Generation Event)?
3. Brief high level overview of the token.
4. Positioning of the token in the greater crypto ecosystem. 
5. What are the main use cases of the token?
6. Tokenomics and minting details/parameters (include circ. supply, max supply, emission schedule).
7. Market data (market cap, FDV, 24h volume, volatility, exchanges).
8. Community data (community size).

:::

::::

<br>

## Foundation Spend Proposals

Foundation Spend Proposals are used to request funds from the community & ecosystem pools to be sent to a specific wallet address. How community pool and ecosystem pool funds are spent is entirely up to community governance decisions. 

**A few ways in which the funds might be spent include:**
- _Creating and funding various Umee DAOs;_
- _Liquidity mining incentives;_ 
- _Funding large scale community events;_
- _Grants to top contributors;_
- _Strategically acquiring crypto assets to gain voting power in key protocols;_ 
- _Burning mechanisms._

<br>

## Parameter Change Proposals

Whenever a change is being made to the protocol, a parameter change proposal needs to pass through the governance process. Parameter change proposals need to be carefully discussed, reviewed, and tested since they will be automatically executed once passed.

**Parameter change proposals can be made for altering things like:**
- _Inflation parameters;_
- _Staking parameters;_
- _Governance parameters;_
- _Distribution parameters;_
- _Slashing parameters._