# Mainnet Validator

Turn a current node into a validator on the mainnet&#x20;

This guide contains instructions on how to setup and run an Umee validator. First, be sure to check out the full node [instructions](installing-umee-node.md) on how to install and configure the `umeed` binary as this guide assumes you already have it installed and configured.

There are three (3) crucial processes required for a healthy validator node:
[Umeed](installing-umee-node.md), [Peggo](#peggo) and [Price-Feeder](#price-feeder)

In order to become an **active** validator, you must have more stake than the [bottom validator](https://www.mintscan.io/umee/validators). You may still execute the following steps, but you will not be active and therefore won't receive staking rewards.

### Keyring

Prior to creating your validator, you must first create your "operator" key. Note, this is not your consensus key and will not be used for signing. Instead, it is used to identify you validator in the Umee network.

```bash
umeed keys add <key-name> [flags]
```

By default, `umeed` will store keys in your OS-backed keyring. You can change this behavior by specifying the `--keyring-backend` flag.

If you already have a key that you'd like to import via a mnemonic, you can provide a `--recover` flag and the `keys add` command will prompt you for the BIP39 mnemonic.

Visit the Cosmos SDK's keyring [documentation](https://docs.cosmos.network/v0.43/run-node/keyring.html) for more information

### Ethereum Node

The Gravity Bridge requires that validators also run a `peggo` orchestrator in addition to the `umeed` process. The orchestrator requires access to a `geth` node's RPC instance. A `geth` light client can be used, **but a full node is preferable**.

You may choose to operate your own `geth` node or use a publicly available one. However, in production environments, it is recommended that you run your own. Depending on what network you're running your Umee validator on, you'll want to connect to or setup your `geth` node to the appropriate Ethereum network. See the `geth` CLI [documentation](https://geth.ethereum.org/docs/interface/command-line-options) for more information on how to connect to different Ethereum networks.

Follow these steps to install a GETH node and turn your umee node into a validator

1. First install the go-ethereum binary&#x20;

```
wget https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.10.8-26675454.tar.gz
tar xf geth-linux-amd64-1.10.8-26675454.tar.gz
chmod +x geth-linux-amd64-1.10.8-26675454/geth
sudo mv geth-linux-amd64-1.10.8-26675454/geth /usr/local/bin/
```

2\. Create a new ethereum wallet. Copy the wallet address and be sure to store the private keys.&#x20;

```
geth account new
```

Or you can see the key store using this command

```
geth account list
```

3\. Create a [systemd](https://systemd.io/) service file for your GETH client

```
sudo tee /etc/systemd/system/geth.service > /dev/null <<EOF
[Unit]
Description=Geth node
After=online.target
[Service]
User=$USER
ExecStart=/usr/local/bin/geth --syncmode light --http --http.addr=0.0.0.0 --http.port=8545 --goerli
Restart=on-failure
RestartSec=3
LimitNOFILE=4096
[Install]
WantedBy=multi-user.target
EOF
```

4\. Run the service&#x20;

```
sudo systemctl daemon-reload
sudo systemctl enable geth
sudo systemctl start geth
```

### Peggo

5\. Install Peggo gravity bridge orchestrator [release for your architecture](https://github.com/umee-network/peggo/releases), the client for cross-chain interaction, eg. on Linux/x86:

```
wget https://github.com/umee-network/peggo/releases/download/v0.4.1/peggo-v0.4.1-linux-amd64.tar.gz
sudo mv peggo /usr/local/bin/
```

6\. Let’s export some additional variables. In all commands below in the first command you will receive the value you need to replace part of the next command

#### Validator address:

```
umeed keys show UMEE_WALLET_NAME --bech val -a
echo 'export VAL_ADDRESS=VALIDATOR_ADDRESS' >> ~/.profile
```

#### Umee wallet address:

```
umeed keys show UMEE_WALLET_NAME -a
echo 'export PEGGO_UMEE_KEY=UMEE_WALLET_ADDRESS' >> ~/.profile
```

#### Ethereum wallet address:

```
peggo keys eth show ETH_WALLET_NAME
echo 'export PEGGO_ETH_KEY=ETH_WALLET_ADDRESS' >> ~/.profile
source ~/.profile
```

7\. Register the validator's Ethereum key. This key will be used to sign claims going from Ethereum to Umee and to sign any transactions sent to Ethereum (batches or validator set updates).

> Note: do not include the enclosing `{}` when filling out those variables

```
$ umeed tx gravity set-orchestrator-address \
  {VAL_ADDRESS} \
  {VAL_ADDRESS or different ORCHESTRATOR_ADDRESS} \
  {PEGGO_ETH_KEY} \
  --eth-priv-key="..." \
  --chain-id="..." \
  --fees="..." \
  --keyring-backend=... \
  --keyring-dir=... \
  --from=...
```

8\. Run the Orchestrator

```
export PEGGO_ETH_PK={ETHEREUM_PRIVATE_KEY_HERE}
$ /usr/local/bin/peggo orchestrator {GRAVITY_ADDRESS} \
  --eth-rpc=$ETH_RPC \
  --relay-batches=true \
  --valset-relay-mode=minimum \
  --cosmos-chain-id=... \
  --cosmos-grpc="tcp://..." \
  --tendermint-rpc="http://..." \
  --cosmos-keyring=... \
  --cosmos-keyring-dir=... \
  --cosmos-from=...
```

9\. Optionally create a service file to automatically start the orchestrator

```
sudo tee /etc/systemd/system/peggo.service > /dev/null <<EOF
[Unit]
Description=Gravity Bridge Orchestrator
After=online.target
[Service]
User=$USER
Environment="RUST_LOG=INFO"
ExecStart={COMMAND-FROM-STEP-8-ABOVE}
Restart=on-failure
RestartSec=3
LimitNOFILE=4096
[Install]
WantedBy=multi-user.target
EOF
```

> [Go more in-depth with Peggo here](https://github.com/umee-network/peggo/blob/main/README.md#how-to-run)

10\. Check the sync status. If catching_up is equal to true, wait until it is false. This process may take a minute.&#x20;

```
umeed status 2>&1 | jq -r '.SyncInfo.catching_up'
```

11\. Check to see if you have received tokens from the faucet or that you have tokens in your new Umee wallet.&#x20;

```
umeed q bank balances $(umeed keys show UMEE_WALLET_NAME -a)
```

12\. If the node was synced and you have tokens you can now create a validator using the following commands

```
umeed tx staking create-validator \
--from UMEE_WALLET_NAME \
--amount 990000000uumee \
--pubkey $(umeed tendermint show-validator) \
--chain-id umee-betanet-1 \
--moniker=YOUR-MONIKER \
--commission-max-change-rate=0.10 \
--commission-max-rate=1.0 \
--commission-rate=0.08 \
--min-self-delegation="1" \
--fees=200uumee
#--amount can be different just keep on the wallet 10000000uumee
```

13\. Link all keys on the bridge&#x20;

```
umeed tx gravity set-delegate-keys $VAL_ADDRESS $PEGGO_UMEE_KEY $PEGGO_ETH_KEY $PEGGO_ETH_SIG --chain-id="umee-betanet-1" --from=UMEE_WALLET_NAME --fees=200uumee --gas auto
```

Carefully check if that transaction failed. It requires a lot of gas that can be a source of the issue.

Also, if you got a "signing validation error"

Repeat last 3 commands from step 12.

14\. After a successful transaction from step 13 — run the orchestrator.

```
sudo systemctl daemon-reload
sudo systemctl enable peggo
sudo systemctl start peggo
```

To check logs and confirm that everything is in order use the following commands

```
journalctl -u umeed -f
journalctl -u peggo -f
journalctl -u geth -f
```

### Calypso - v3 Upgrade Instructions

#### Overview

Calypso - v3 is Umee Network's latest blockchain technology release. In addition to Peggo, v3 validators must also run our Price Feeder process or will be jailed and slashed! Price Feeder fetches and aggregates exchange rate price data from various providers, then supplies them to the main oracle process.

#### Release Notes

[Full Umee release notes are here](https://github.com/umee-network/umee/blob/main/RELEASE_NOTES.md)

[Umeed official release, v3.0.0](https://github.com/umee-network/umee/releases/tag/v3.0.0)

[Peggo official release, v1.1.0](https://github.com/umee-network/peggo/releases/tag/v1.1.0)

[Price Feeder official release, v1.0.0](https://github.com/umee-network/umee/releases/tag/price-feeder%2Fv1.0.0)

```
peggo version
> version: v1.1.0
> commit: 36d872d46a9c43c88f4ee00d37703954e72108c1
> sdk: v0.46.0-umee.0.20220812010629-4d5bb2e3f73c
> go: go1.18.6 linux/amd64

umeed version
> v3.0.0
> (also could be) HEAD-ae43ccbd25c382cdfc5bcde26f21bc2002be5bf3 if built from `Makefile`

price-feeder version
> version: v1.0.0
> commit: ae66523e0521fe2e2f37175973d09033097a5a91
> sdk: v0.46.1-umee
> go: go1.19.1 linux/amd64
```

#### Release Compatibility Matrix

Please [click here](https://github.com/umee-network/umee#release-compatibility-matrix) to see what versions are compatible.

#### Installation

Ensure that your version of Peggo is compatible above. If not, the latest version 1.0.1 is available as an [official release](https://github.com/umee-network/peggo/releases) or from [source](https://github.com/umee-network/peggo#installation).

> If [cosmovisor](/developers/joining-mainnet.html#cosmovisor) is already installed to automatically swap binaries, [skip to installing Price Feeder below](#price-feeder).

If this upgrade is to an existing validator, first choose the correct Umee release for your architecture [here](https://github.com/umee-network/umee/releases/), manually swap the binaries, and [install Price Feeder](#price-feeder).
If you would like to setup a new mainnet validator, [follow those instructions first](#mainnet-validator), before proceeding to [install Price Feeder](#price-feeder).

> [Validators must set a mempool version before the update `version = "v1"`](https://github.com/umee-network/umee/pull/1427/files)

### Price Feeder

The [x/oracle module](https://github.com/umee-network/umee/tree/main/x/oracle/spec) requires that all validators vote on the price of assets which governance has decided to add. In order to vote on these prices, the umee team has built the [price feeder](https://github.com/umee-network/umee/tree/main/price-feeder#oracle-price-feeder).

Please [click here](https://github.com/umee-network/umee#release-compatibility-matrix) to see what version of the price feeder is compatible with your version of the umeed binary. It is not necessary for umeed v1.0.x.

If the calypso (V3) upgrade has happened successfully, you **absolutely must** vote on prices to avoid being jailed and slashed.

1. First, install the most recent price-feeder binary:
   [Releases](https://github.com/umee-network/umee/releases/tag/price-feeder%2Fv1.0.0)

> Replace the tar with the correct architecture of the most recent price feeder version

```
wget https://github.com/umee-network/umee/releases/download/price-feeder/v1.0.0/price-feeder-v1.0.0-linux-amd64.tar.gz
tar xf price-feeder-v1.0.0-linux-amd64.tar.gz
chmod +x price-feeder-v1.0.0-linux-amd64/price-feeder
sudo mv price-feeder-v1.0.0-linux-amd64/price-feeder /usr/local/bin/
```

2. Download the example config file, [also on Github](https://github.com/umee-network/umee/blob/main/price-feeder/price-feeder.example.toml)

```
cd /usr/local/bin/
wget https://raw.githubusercontent.com/umee-network/umee/main/price-feeder/price-feeder.example.toml
```

3. Replace the example values in your config

> Set up your keyring using the description [here](https://github.com/umee-network/umee/tree/main/price-feeder#keyring-1).

Update the `[account]` information with the correct chain-id (**umee-1** for mainnet), address, and validator address from your keyring.

```
[account]
address = "umee15nejfgcaanqpw25ru4arvfd0fwy6j8clccvwx4"
chain_id = "umee-1"
validator = "umeevaloper12tysz6mzrawenca2t3t7ltym4hfjj8a5upsn2k"
```

> In order to get your address & validator address, given a key with the name `alice`, you can run:

```
umeed keys show alice -a --bech=acc
umeed keys show alice -a --bech=val
```

4. Create a [systemd](https://systemd.io/) service file

```
sudo tee /etc/systemd/system/price-feeder.service > /dev/null <<EOF
[Unit]
Description=Umee Price Feeder
After=online.target[Service]
StartLimitIntervalSec=0
StartLimitBurst=0

[Service]
Type=simple
User=$USER
WorkingDirectory=/usr/local/bin
ExecStart=bash -c 'echo "\n" | price-feeder .price-feeder/config.toml --log-level debug'
Restart=on-failure
RestartSec=5s
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

> Note: The price feeder hits a lot of endpoints to get prices for assets. Sometimes the websocket connections disconnect and cannot reconnect. If this is happening, set up the service file to restart the process after a few hours:

```
Restart=always
RuntimeMaxSec=14400s # 4h
```

5. Start your service

```
sudo systemctl daemon-reload
sudo systemctl enable price-feeder
sudo systemctl start price-feeder
```

**Please check to make sure your price feeder is running successfully**

```
sudo journalctl -u price-feeder.service -f
```

If it's not, please check your config. Common problems are:

- Wrong address
- Wrong Chain ID
- Wrong keyring info
- Invalid providers / token pairs - check [coingecko](https://www.coingecko.com/en/coins/umee#markets) to see the available providers for a given coin
- Not voting on all required tokens

6.  When ready to delegate feed consent, the `price-feeder_address` argument is the same as the `address = ` from your price-feeder.toml, eg.

```
umeed tx oracle delegate-feed-consent <validator_adress> <price-feeder_address> --chain-id umee-1 --fees 2000uumee
```
