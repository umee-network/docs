# Oracle Module

## Abstract

The Oracle module provides the Umee blockchain with an up-to-date and accurate price feed of exchange rates of multiple currencies against the USD for the [Leverage](../../leverage/spec/README.md) module.

As price information is extrinsic to the blockchain, the Umee network relies on validators to periodically vote on current exchange rates, with the protocol tallying up the results once per `VotePeriod` and updating the on-chain exchange rates as the weighted median of the ballot.

> Since the Oracle service is powered by validators, you may find it interesting to look at the [Staking](https://github.com/cosmos/cosmos-sdk/tree/master/x/staking/spec/README.md) module, which covers the logic for staking and validators.

<OracleModule />