# UX App FAQ

---

<details><summary>What risk do I face when I supply to UX?</summary>

_Your funds are used to fund loans to borrowers. If the borrowers are unable to repay their loans or if the value of the assets used as collateral drops significantly, the value of your funds could be negatively impacted._

_The possibility of not having enough liquidity to withdraw your funds exists if your supplied amount is borrowed by multiple users. In this case, you would have to wait for the loans to be paid back or withdraw gradually._

</details>

<br>

<details><summary>Why should I supply to UX?</summary>

_When you supply your assets to UX, you're essentially providing liquidity to borrowers on the platform. In return, you receive an APY (annual percentage yield) on your assets, which can be a great way to earn passive income. One of the advantages of supplying to UX is that each asset has its own market of supply and demand, which determines the APY._

_Each asset has its own market of supply and demand with its own APY (Annual Percentage Yield) which is flexible and will change over time._

</details>

<br>

<details><summary>What is LTV?</summary>

_LTV, or loan-to-value, is a common term that borrowers use to evaluate the risk of their outstanding loans. It represents the proportion of the amount of a loan to the value of the collateral used to secure it._

_For example, if a borrower wants to borrow $10,000 worth of ATOM and offers $20,000 worth of USDC as collateral, the LTV would be 50%. A higher LTV signifies a higher risk for the borrower because there is less collateral to cover the debt if the price fluctuates._

</details>

<br>

<details><summary>What is max LTV?</summary>

_Max LTV is the maximum Loan-To-Value ratio that the platform allows for a specific collateral asset._

</details>

<br>

<details><summary>What is the Close Factor in UX's lending and borrowing system?</summary>

_The Close Factor is a mechanism that limits how much a liquidator can liquidate when a borrower exceeds their borrowing limit. It is a borrower protection feature designed to prevent unnecessary amounts of collateral being liquidated for borrowers when their borrowing position slightly goes over their borrowing limit._

</details>

<br>

<details><summary>What is Borrow Limit?</summary>

_Borrow limit works similarly to Loan-To-Value ratio (LTV), and compared to LTV, it **explicitly shows the borrowing limit of a user’s position** based on the collateral provided._

_UX calculates your maximum borrow limit based on the value of your collateral and the collateral weight of the asset._

_Your health factor is determined by your outstanding loan and your max borrow limit. If you reach your max borrow limit, you may not be able to borrow the asset you want._

</details>

<br>

<details><summary>What is the Maximum Borrow Limit?</summary>

_The maximum borrowing power of specific collateral is represented by the maximum LTV. Different collateral assets have different max borrow limits._

_For example, if a collateral has an LTV of 55%, this means that the user can borrow up to 55% of the value of the collateral in the borrowing asset of his choice._

</details>

<br>

<details><summary>What is Liquidation Threshold?</summary>

_Liquidation threshold is the **maximum ratio** of your borrow position value to the value of your collateral. On UX, Atom's LTV is 76%, and its liquidation threshold is 80%._

</details>

<br>

<details><summary>Why did my Borrow Limit Bar turn red?</summary>

_If a user's borrow amount approaches or exceeds their **maximum borrowing power**, in this example, 55%, the Borrow Limit Bar may turn red as a warning._

_The Borrow Limit Bar turning red indicates that the user's health factor has fallen below a certain threshold or that the borrowing position is at a high risk of liquidation._

_**It is important to monitor your positions and take appropriate action to maintain a healthy position.**_

![](/img/borrow-limit.png)

</details>

<br>

<details><summary>Is there a buffer to stop you from borrowing 100% of the max borrow percentage?</summary>

_You can borrow up to 100% of the LTV. However, there is a difference between the **LTV** and the **Liquidation Threshold**. An asset’s LTV is always smaller than its Liquidation Threshold, in order to ensure the user is protected from being immediately liquidated in the case of price fluctuations._

_This is why your borrow limit will always have a value of <100._

</details>

<br>

<details><summary>If my borrow rate exceeds 100% due to price movement, do I get fully liquidated and lose 100% of my collateral?</summary>

_Liquidations occur when a user’s LTV exceeds the Liquidation Threshold. However, UX’s liquidation is incremental. What does it mean?_

_Incremental liquidation means only a small portion of your loan will be liquidated (**Liquidation Penalty**: 5%-10% depending on the asset) in order to bring the user to a healthy LTV ratio without penalizing the user for more than what is necessary._

_**Incremental liquidation** is a design first proposed by UX as a borrower protection mechanism._

</details>

<br>

<details><summary>If I use $USDC as collateral and borrow $ATOM, do I get liquidated if the $ATOM price increases and I exceed my borrow limit?</summary>

_You are subject to liquidation if your borrowed amount exceeds your max borrow limit. It usually happens when the value of your borrowed assets(in dollars$) increases **and/or** the price (in dollars$) of your collateral decreases, which would result in your position exceeding your max LTV._

_However, a special feature of UX is that liquidation is always incremental,_

_Meaning the platform only allows a small amount (initially 5%) of your collateral to be liquidated to bring your loan position back to a healthy status before liquidating more._

_For example, let's assume you deposited $100 worth of USDC as collateral and borrowed $50 worth of Atom, with a Max LTV of 76% and a liquidation threshold of 80%. This means you can borrow up to 76% of the value of your USDC collateral, or $76 in this case. If the value of Atom increases rapidly, the dollar value of your borrowed position will also increase. If the total value of your borrowed position (i.e., the value of your borrowed Atom plus any interest accrued) exceeds $80, which is the liquidation threshold ratio set by UX, your position will be liquidated._

</details>

<br>

<details><summary>How and when do I pay back my loans?</summary>

_You can repay your loans by accessing the UX web app and selecting the loan you wish to repay. There's no set due date for repaying your loans, as long as you maintain a healthy LTV ratio._

_However, the accrued interest will grow over time, so it’s recommended to pay off small amounts from time to time, to ensure your health factor does not decrease heavily. ([see borrow APR](https://umeeversity.umee.cc/learn-the-basics/UX-basics/common-terms.html#borrow-apr))._

</details>

<br>

<details><summary>In what currency do I pay back my loans?</summary>

_When it comes to paying back loans, the currency used for repayment is typically the same as the crypto that was borrowed._

_For instance, if you borrowed $100 in USDC, you will be required to pay back $102 in USDC after a year, assuming an interest rate of 2%._

</details>

<br>

<details><summary>How does UX get price information on the assets?</summary>

_UX takes real-time prices from Ojo. The Ojo Network is a Cosmos SDK blockchain, that specializes in aggregating data from both centralized and decentralized sources in a permissionless manner and relaying that information to other blockchains._

_Ojo is an important price security feature for UX and you can read more about Ojo and the Historacle here. - [Read more about Ojo](https://docs.ojo.network/)._

</details>

<br>

<details><summary>Is it possible for someone to get liquidated due to an error of the price on UX?</summary>

_UX uses Ojo for price information, which aggregates price data from various sources, including both on-chain and off-chain sources such as Binance, Coinbase, OKX, Osmosis, and many more. It is important to acknowledge that price errors can occur on any exchange or platform, and users should be aware of the potential risks involved._

_However, because Ojo takes price information from multiple sources, it is unlikely for UX to take the wrong price just because one or even a few of the exchanges produce an error._

_If there is a sudden drop in asset prices, liquidations could be affected, especially in a volatile market. UX uses [the Historical](https://www.youtube.com/watch?v=2eF1MeaQve4) to avoid price manipulation._

</details>

<br>

<details><summary>What’s the difference between Collateral Asset and Leverage Asset?</summary>

_**Collateral assets** are the cryptocurrencies that are used to secure your loans on UX (e.g. USDC,ATOM,USDT,stATOM and those marked as “Collateral” on the UX app)._

_When you borrow funds, you have to deposit collateral assets first to ensure that the loan can be fully backed. If the value of your collateral assets decreases below a certain threshold, your position is at risk of being liquidated._

_**Leverage assets** are the cryptocurrencies that you can only supply and borrow on UX. Leverage assets cannot be used as collateral._

_The UX community uses [Commonwealth](https://commonwealth.im/umee/discussions) to propose new assets to list. Listing an asset as Collateral Asset or Leverage Asset is determined by the risk profile of the token._

</details>

<br>

<details><summary>Why is the price displayed on UX different?</summary>

_The price displayed on the UX app is coming from the Historacle. The values will always be different from the current prices, and the values will \*\*ALWAYS\*\* be smaller.- [How The Historacle Protects Against Price Manipulation](https://www.youtube.com/watch?v=2eF1MeaQve4)_

</details>

<br>

<details><summary>Is there a way to predict the max borrow rate for an asset?</summary>

_The maximum borrow rate on UX can be estimated based on the combined collateral weights associated with the collateral you provide._

_The collateral weights represent the value and type of assets used as collateral for borrowing._

</details>

<br>

<details><summary>Which asset will be penalized in the event of liquidation when a user holds multiple borrowing assets?</summary>

_In order to maximize their profits, liquidators are incentivized to prioritize the asset with a higher liquidation incentive when faced with multiple borrowing assets in an undercollateralized position._

</details>

<br>

<details><summary>Are there resources available to help me understand the terminology?</summary>

_Understanding financial terms is crucial, you can find a comprehensive list with commonly used terms and their explanation [here](https://umeeversity.umee.cc/learn-the-basics/UX-basics/common-terms.html)._

</details>
