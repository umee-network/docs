# Price Feeder

The core differences are as follows:

* All exchange rates must be quoted in USD Fiat or USD Stablecoins e.g. USDC
* No need or use of reference exchange rates (e.g. Luna).
* No need or use of Tobin tax.
* The `price-feeder` combines both `feeder` and `price-server` into a single Golang-based application for better UX, testability, and integration.

## Background

The `price-feeder` tool is responsible for performing the following:

1. Fetching and aggregating exchange rate price data from various providers, e.g. Binance and Osmosis, based on the operator configuration. These exchange rates are exposed via API and are used to feed up to the minute pricing into the main oracle process.
2. Aggregating exchange rate price data and submitting those exchange rates on-chain to Umee's `x/oracle` module following the Umee's [Oracle](https://github.com/umee-network/umee/tree/main/x/oracle/spec) specification.

## Usage

The `price-feeder` tool runs off of a single configuration file. This configuration file defines what exchange rates to fetch and what providers to get them from. In addition, it defines the oracle's keyring and feeder account information. The keyring's password is defined via environment variables or user input. More information on the keyring can be found [here](https://github.com/umee-network/umee/tree/main/price-feeder#keyring) Please see the [example configuration](https://github.com/umee-network/umee/blob/main/price-feeder/price-feeder.example.toml) for more details.

`$ price-feeder /path/to/price_feeder_config.toml`

## Setup

The keyring `dir` and `backend` are defined in the config file. You may use the `PRICE_FEEDER_PASS` environment variable to set up the keyring password.

Ex : `export PRICE_FEEDER_PASS=keyringPassword`

If this environment variable is not set, the price feeder will prompt the user for input.

## Configuration

`server`

The `server` section contains configuration pertaining to the API served by the `price-feeder` process such as the listening address and various HTTP timeouts.

`currency_pairs`

The `currency_pairs` sections contain one or more exchange rates along with the providers from which to get market data. It is important to note that the providers supplied in each `currency_pairs` must support the given exchange rate.

For example, to get multiple price points on ATOM, you could define `currency_pairs` as follows:

\`\[\[currency\_pairs]] base = "ATOM"providers = \[ "binance", ] quote = "USDT"

\[\[currency\_pairs]] base = "ATOM"providers = \[ "kraken", "osmosis", ] quote = "USD"\`

Providing multiple providers is beneficial in case any provider fails to return market data. Prices per exchange rate are submitted on-chain via pre-vote and vote messages using a time-weighted average price (TVWAP).

`account`

The `account` section contains the oracle's feeder and validator account information. These are used to sign and populate data in pre-vote and vote oracle messages.

`keyring`

The `keyring` section contains Keyring related material used to fetch the key pair associated with the oracle account that signs pre-vote and vote oracle messages.

`rpc`

The `rpc` section contains the Tendermint and Cosmos application gRPC endpoints. These endpoints are used to query on-chain data that pertain to oracle functionality and for broadcasting signed pre-vote and vote oracle messages.

## Keyring

The UMEE keyring must be set up to sign transactions before running the price feeder. Additional info on the different keyring modes is available [here](https://docs.cosmos.network/master/run-node/keyring.html). **Please note that the `test` and `memory` modes are only for testing purposes.** **Do not use these modes for running the price feeder against the mainnet.**

## Providers

The current list of supported providers:

* [Binance](https://www.binance.com/en)
* [Coinbase](https://www.coinbase.com/)
* [FTX](https://www.ftx.us/)
* [Gate](https://www.gate.io/)
* [Huobi](https://www.huobi.com/en-us/)
* [Kraken](https://www.kraken.com/en-us/)
* [Okx](https://www.okx.com/)
* [Osmosis](https://app.osmosis.zone/)
