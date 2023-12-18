# Borrowing and lending

---

<details><summary>How is the borrow limit calculated?</summary>

_The borrow limit on UX is calculated using the lower of historical price medians over the past 3 days and the spot price. This approach is adopted in response to market manipulation risk on asset prices._

_TFor example, if a user supplies stATOM, and the historical median price over the past 3 days is $10, while the spot price is $15, the borrow limit will be determined based on the lower of the two values, in this case, $10. It's important to note that as the historical median adjusts, users may see changes in their borrow limits, allowing for adjustments in line with market conditions._

_This methodology ensures a more stable and secure borrowing environment amid price fluctuations._

</details>

<br>

<details><summary>What is LTV(Loan-to-Value)?</summary>

_LTV, or loan-to-value, is a common term that borrowers use to evaluate the risk of their outstanding loans. It represents the proportion of the amount of a loan to the value of the collateral used to secure it._

_For example, if a borrower wants to borrow $10,000 worth of ATOM and offers $20,000 worth of USDC as collateral, the LTV would be 50%. A higher LTV signifies a higher risk for the borrower because there will be a higher risk of liquidation._

</details>

<br>

<details><summary>What is the Close Factor in UX's lending and borrowing system?</summary>

_The Close Factor is a mechanism that limits how much a liquidator can liquidate when a borrower exceeds their borrowing limit. It is a borrower protection feature designed to prevent unnecessary amounts of collateral from being liquidated for borrowers when their borrowing position slightly goes over their borrowing limit._

_For example, if a borrower wants to borrow $10,000 worth of ATOM and offers $20,000 worth of USDC as collateral, the LTV would be 50%. A higher LTV signifies a higher risk for the borrower because there is less collateral to cover the debt if the price fluctuates._

</details>
