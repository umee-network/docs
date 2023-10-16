# Leverage Module

## Abstract

This document specifies the `x/leverage` module of the UX chain.

The leverage module allows users to lend and borrow assets, and implements various features to support this, such as a token accept-list, a dynamic interest rate module, incentivized liquidation of undercollateralized debt, and automatic reserve-based repayment of bad debt.

The leverage module depends directly on `x/oracle` for asset prices, and interacts indirectly with `x/ibctransfer`, `x/peggy`, and the cosmos `x/bank` module as these all affect account balances.

<LeverageModule />