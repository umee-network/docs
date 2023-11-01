# UX Functionality FAQ

---

<h3>IBC rate limiting</h3><br />

<details><summary>How does UX’s IBC rate limit work?</summary>

_UX's IBC rate limit is a chain-level security feature designed to safeguard your assets. UX’s IBC rate limit sets a maximum cap on the daily outflow from the UX chain. When the outflow exceeds the predefined limit, the IBC rate limit will be triggered and IBC transactions for outflow will be shut down._

_For more in-depth information, check out our blog on [IBC Rate Limiting](https://ux.xyz/blog/ibc-rate-limiting/) and [Github link](https://github.com/umee-network/umee/releases/tag/v4.2.0)._

</details>

<br>

<details><summary>How is the IBC rate limit triggered?</summary>

_The IBC rate limit triggers when either of the below conditions are met:_

- _The aggregated daily IBC outflows exceed $USD 1M._
- _An individual token’s total daily IBC outflows interchain transactions exceed $USD 600,000_

</details>

<br>

<h3>Special Assets</h3>

[Read More about Special Assets](https://github.com/umee-network/umee/blob/ecc48594a5fe335360325cb12da8d40d56c8a554/x/leverage/README.md#special-asset-pairs) here

<br />

<details><summary>What are special asset pairs?</summary>

_Special asset pairs are pairs of assets with distinct collateral weight(CW) and borrowing limit(BL) settings when one is being used as collateral to borrow the other asset(s).These pairs offer unique opportunities for borrowers to optimize capital efficiency and access boosted borrowing capacity through the UX protocol._

_Examples of special asset pairs: [ATOM/stATOM, OSMO/stOSMO, IST/USK]_

</details>

<br>

<details><summary>How do special asset pairs affect borrowing on UX?</summary>

_Special asset pairs can result in the most borrowing capacity and maximum capital efficiency between specific asset pairs._

_For example, ATOM-stATOM has been set as a special asset pair, meaning that when using ATOM to borrow stATOM, instead of having ATOM’s 76% collateral weight and 80% liquidation threshold, borrowers will be enjoying 85% collateral weight and 88% liquidation threshold for when borrowing stATOM. Note that special pairs have directions, depending on how the parameters are set, using one to borrow the other in a special pair might incur different results._

</details>

<br>

<details><summary>How can users identify special asset pairs in UX?</summary>

_Boosted borrowing capability of certain assets are automatically updated and shown when a special asset pair is identified._

</details>

<br>

<details><summary>How are special asset pairs on UX different from regular pairs?</summary>

_Special asset pairs on UX have unique collateral weight settings and borrowing limits that set them apart from standard pairs. These differences are designed to provide the most borrowing capacity and maximum capital efficiency while maintaining the most safety for UX._

_For example, ATOM-stATOM has been set as a special asset pair, meaning that when using ATOM to borrow stATOM, instead of having ATOM’s 76% collateral weight and 80% liquidation threshold, borrowers will be enjoying 85% collateral weight and 88% liquidation threshold for when borrowing stATOM. These pairs enable users to deploy a range of leverage strategies that can be further optimized based on their individual risk tolerance and goals._

</details>
<br>

<h3>meTokens</h3><br />

<details><summary>What are meTokens, and why are they created?</summary>

_meTokens, short for Multi-Variant Elastic Tokens, are an innovative index product constructed with the ability to minimize individual token’s risk and serve as an alternative to holding those tokens directly. meTokens include meUSD, created using a basket of popular stablecoins, and meATOM, created using a basket of most used liquid staking ATOMs._

</details>

<br />

<details><summary>What is the core purpose behind meTokens?</summary>

_The primary objective of meTokens is to minimize individual token’s risk and serve as an alternative to holding those tokens directly. These tokens function as ETFs and they are constructed using the portfolio theory with minimized portfolio risk. By bundling various assets, meTokens mitigate risk and enhance capital efficiency when using on UX._

_For example, the meUSD token, which bundles Cosmos-native stablecoins like IST, USK, and axlUSDC, returns less asset risk than holding any of the individual stablecoins alone and safeguards against the risk of depegging of any single stablecoin._

</details>

<br />

<details><summary>How do meTokens benefit the Cosmos ecosystem as a whole?</summary>

_meTokens provide a number of advantages to the Cosmos ecosystem:_

- _Minimized portfolio risk through holding a scientifically constructed index token_
- _Increased adoption of smaller projects’ tokens_
- _Increased borrrowing capability and capital efficency on UX_
- _Ecosystem innovation and growth_

</details>

<br />

<details><summary>What role do meTokens play in mitigating risk for users within the Cosmos ecosystem?</summary>

_meTokens reduce risk by scientifically constructing a portfolio composition of assets with the same pegged value. Users can use meTokens (such as meUSD or meATOM) and spread risk, making their portfolios more stable and secure in the volatile crypto market._

</details>
