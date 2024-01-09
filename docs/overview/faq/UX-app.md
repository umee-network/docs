# UX App FAQ

---
## Asset Related:

### Why is the price displayed on UX different?   

_The price displayed on the UX app is coming from the Historacle. The values will always be different from the current prices, and the values will \*\*ALWAYS\*\* be smaller.- [How The Historacle Protects Against Price Manipulation](https://www.youtube.com/watch?v=2eF1MeaQve4)_


<br>

### Is there a way to predict the max borrow rate for an asset?   

_The maximum borrow rate on UX can be estimated based on the combined collateral weights associated with the collateral you provide._

_The collateral weights represent the value and type of assets used as collateral for borrowing._


<br>

### Which asset will be penalized in the event of liquidation when a user holds multiple borrowing assets?   

_In order to maximize their profits, liquidators are incentivized to prioritize the asset with a higher liquidation incentive when faced with multiple borrowing assets in an undercollateralized position._

<br>

## Loan metrics(terms and liquidations):

### What is max LTV?   

_Max LTV is the maximum Loan-To-Value ratio that the platform allows for a specific collateral asset._


<br>

### What is the Close Factor in UX's lending and borrowing system?   

_The Close Factor is a mechanism that limits how much a liquidator can liquidate when a borrower exceeds their borrowing limit. It is a borrower protection feature designed to prevent unnecessary amounts of collateral being liquidated for borrowers when their borrowing position slightly goes over their borrowing limit._

 <br>

## Borrowing rates and liquidation incentives:

### Why did my Borrow Limit Bar turn red?   

_If a user's borrow amount approaches or exceeds their **maximum borrowing power**, in this example, 55%, the Borrow Limit Bar may turn red as a warning._

_The Borrow Limit Bar turning red indicates that the user's health factor has fallen below a certain threshold or that the borrowing position is at a high risk of liquidation._

_**It is important to monitor your positions and take appropriate action to maintain a healthy position.**_

![](/img/borrow-limit.png)


<br>

### If my borrow rate exceeds 100% due to price movement, do I get fully liquidated and lose 100% of my collateral?   

_Liquidations occur when a user’s LTV exceeds the Liquidation Threshold. However, UX’s liquidation is incremental. What does it mean?_

_Incremental liquidation means only a small portion of your loan will be liquidated (**Liquidation Penalty**: 5%-10% depending on the asset) in order to bring the user to a healthy LTV ratio without penalizing the user for more than what is necessary._

_**Incremental liquidation** is a design first proposed by UX as a borrower protection mechanism._


<br>

### If I use $USDC as collateral and borrow $ATOM, do I get liquidated if the $ATOM price increases and I exceed my borrow limit?   

_You are subject to liquidation if your borrowed amount exceeds your max borrow limit. It usually happens when the value of your borrowed assets(in dollars$) increases **and/or** the price (in dollars$) of your collateral decreases, which would result in your position exceeding your max LTV._

_However, a special feature of UX is that liquidation is always incremental,_

_Meaning the platform only allows a small amount (initially 5%) of your collateral to be liquidated to bring your loan position back to a healthy status before liquidating more._

_For example, let's assume you deposited $100 worth of USDC as collateral and borrowed $50 worth of Atom, with a Max LTV of 76% and a liquidation threshold of 80%. This means you can borrow up to 76% of the value of your USDC collateral, or $76 in this case. If the value of Atom increases rapidly, the dollar value of your borrowed position will also increase. If the total value of your borrowed position (i.e., the value of your borrowed Atom plus any interest accrued) exceeds $80, which is the liquidation threshold ratio set by UX, your position will be liquidated._

<br>


## Educational resources:

### Are there resources available to help me understand the terminology?   

_Understanding financial terms is crucial, you can find a comprehensive list with commonly used terms and their explanation [here](https://learning.ux.xyz/users/UX-basics/common-terms.html)._

    
