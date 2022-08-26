# Risk Assessment Methodology

The composability of crypto enables the Umee blockchain to connect with multi ecosystems within Cosmos and beyond; _however, this connectivity exposes the protocol to various ecosystem risks_. Tokens accepted by the Umee lending module affect the protocol health at its core (specifically tokens accepted as collateral which affect the financial health of the protocol). The three key domains of risk Umee will assess are protocol risk, counterparty risk, and market risk.

_Umee runs historical data in a risk model to help determine parameters for each asset that help contain risk_. The historical data can be quantified in three different aspects of market risks as follows:
- Protocol Risk: quantified by **Days**, **Transactions**
- Counterparty Risk: quantified by **Holders**, **Permission**
- Market Risk: quantified by **Market Cap**, **Average Volume**, **Normalized Volatility**

<br>

## Protocol Risk

**Smart contract risk** measures the technical security of the underlying code for a given asset. Code for assets with rigorous audits by well-respected auditors are suitable prospects for Umee. Besides audits, protocol risk remains (i.e., vulnerabilities will exist) and users must be conscientious in assessing such risk. In addition, Umee will use bug bounties to alleviate smart contract risk. The number of transactions and number of days a particular smart contract has remained uncompromised with regular use, continued development, community etc., can serve as a proxy to gauge how battle-hardened the contract is.

<br>

## Counterparty Risk

**Counterparty risk** takes into consideration the human capital behind the asset and how they impact governance. Specifically, Umee will assess the level of decentralization and ability for select stakeholders to influence control over funds or other attack vectors that can penetrate governance structure and ultimately yield control over funds to a concentrated few. Counterparty risk is gauged by the magnitude of centralization, which is measured by the number of entities that can control an asset’s underlying protocol, the number of holders of the token, and other trust assumptions (e.g., backing of the asset) that may create vulnerabilities. 

<br>

## Market Risk

**Market risks** are intertwined with the size of an asset pool and the dynamics of supply and demand. Adequate volume is needed to execute the required amount of liquidations in a given pool, i.e., large sell offs in extreme market conditions that incur slippage and reduce the dollar value retrieved. The average daily volume is a key criterion for assessing the availability of the asset to be sold in addition to depth of liquidity. 

**Volatility risk** is based on normalized fluctuations in token prices and is calculated using formulas in line with industry standards used by other large exchanges. Volatility risk is reassessed and updated in established intervals decided by Umee protocol given token prices are prone to sudden volatility spikes; in this emerging asset class it is not an aberration to observe large price swings of 50% or more in any direction within short durations. 

Lastly the **market capitalization** representing the size of the market and level of exposure is considered. The inputs of market risk are then provided to Umee’s risk model to calibrate parameters that help mitigate each market risk component. Volatility input determines the amount of collateral, or loan to value ratio. Liquidity risks are managed by appropriate liquidation incentives, i.e., liquidation threshold and profit margin for liquidators. 
