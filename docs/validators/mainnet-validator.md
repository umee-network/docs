# Mainnet Validator

Turn a current node into a validator on the mainnet&#x20;

This guide contains instructions on how to setup and run an Umee validator. First, be sure to check out the full node [instructions](installing-umee-node.md) on how to install and configure the `umeed` binary as this guide assumes you already have it installed and configured.

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
After=online.target[Service]
User=$USER
ExecStart=/usr/local/bin/geth --syncmode light --http --http.addr=0.0.0.0 --http.port=8545 --goerli
Restart=on-failure
RestartSec=3
LimitNOFILE=4096[Install]
WantedBy=multi-user.target
EOF
```

4\. Run the service&#x20;

```
sudo systemctl daemon-reload
sudo systemctl enable geth
sudo systemctl start geth
```

5\. Install the gravity bridge orchestrator. This is the client for cross-chain interaction.

```
wget https://github.com/PeggyJV/gravity-bridge/releases/download/v0.1.20/gorc
chmod +x gorc
sudo mv gorc /usr/local/bin/
```

6\. Create a home folder for the orchestrator and make a config file for it.

```
mkdir ~/gorc
#Create config file
tee $HOME/gorc/config.toml <<EOF
keystore = "$HOME/gorc/keystore/"
[gravity]
contract = "0xc846512f680a2161D2293dB04cbd6C294c5cFfA7"
fees_denom = "uumee"
[ethereum]
key_derivation_path = "m/44'/60'/0'/0/0"
rpc = "http://localhost:8545"
[cosmos]
key_derivation_path = "m/44'/118'/0'/0/0"
grpc = "http://localhost:9090"
gas_price = { amount = 0.00001, denom = "uumee" }
prefix = "umee"
EOF
```

7\. Add keys from both networks in the orchestrator&#x20;

```
gorc --config $HOME/gorc/config.toml keys cosmos recover UMEE_WALLET_NAME "UMEE WALLET MNEMONIC"
gorc --config $HOME/gorc/config.toml keys eth import ETH_WALLET_NAME "ETH_PRIVATE_KEY"
```

8\. Create a service file for the orchestrator

```
sudo tee /etc/systemd/system/gorc.service > /dev/null <<EOF
[Unit]
Description=Gravity Bridge Orchestrator
After=online.target[Service]User=$USER
Environment="RUST_LOG=INFO"
ExecStart=/usr/local/bin/gorc --config $HOME/gorc/config.toml orchestrator start --cosmos-key ИМЯ_КОШЕЛЬКА_UMEE --ethereum-key ИМЯ_КОШЕЛЬКА_ЭФИРА
Restart=on-failure
RestartSec=3
LimitNOFILE=4096[Install]
WantedBy=multi-user.target
EOF
```

9\. Check the sync status. If catching_up is equal to true, wait until it is false. This process may take a minute.&#x20;

```
umeed status 2>&1 | jq
#Check "catching_up": false.
```

10\. Check to see if you have received tokens from the faucet or that you have tokens in your new Umee wallet.&#x20;

```
umeed q bank balances $(umeed keys show UMEE_WALLET_NAME -a)
```

11\. If the node was synced and you have tokens you can now create a validator using the following commands

```
umeed tx staking create-validator \
--from UMEE_WALLET_NAME \
--amount 990000000uumee \
--pubkey $(umeed tendermint show-validator) \
--chain-id umee-betanet-1 \
--moniker=YOUR_MONIKER \
--commission-max-change-rate=0.10 \
--commission-max-rate=1.0 \
--commission-rate=0.08 \
--min-self-delegation="1" \
--fees=200uumee
#--amount can be different just keep on the wallet 10000000uumee
```

12\. Let’s export some additional variables. In all commands below in the first command you will receive the value you need to replace part of the next command

#### Validator address:

```
umeed keys show UMEE_WALLET_NAME --bech val -a
echo 'export VAL_ADDRESS=VALIDATOR_ADDRESS' >> ~/.profile
```

#### UMEE wallet address:

```
umeed keys show UMEE_WALLET_NAME -a
echo 'export GORC_UMEE_KEY=UMEE_WALLET_ADDRESS' >> ~/.profile
```

#### Ethereum wallet address:

```
gorc --config $HOME/gorc/config.toml keys eth show ETH_WALLET_NAME
echo 'export GORC_ETH_KEY=ETH_WALLET_ADDRESS' >> ~/.profile
source ~/.profile
```

#### Hash of the transaction for delegating ether keys across the bridge:

```
gorc --config $HOME/gorc/config.toml sign-delegate-keys ETH_WALLET_NAME $VAL_ADDRESS
echo 'export GORC_ETH_SIG=HASH' >> ~/.profile
source ~/.profile
```

13\. Link all keys on the bridge&#x20;

```
umeed tx gravity set-delegate-keys $VAL_ADDRESS $GORC_UMEE_KEY $GORC_ETH_KEY $GORC_ETH_SIG --chain-id="umee-betanet-1" --from=UMEE_WALLET_NAME --fees=200uumee --gas auto
```

Carefully check if that transaction failed. It requires a lot of gas that can be a source of the issue.

Also, if you got a "signing validation error"

Repeat last 3 commands from step 12.

14\. After a successful transaction from step 13 — run the orchestrator.

```
sudo systemctl daemon-reload
sudo systemctl enable gorc
sudo systemctl start gorc
```

To check logs and confirm that everything is in order use the following commands

```
journalctl -u umeed -f
journalctl -u gorc -f
journalctl -u geth -f
```

### Price feeder (Calypso - v3)

The [x/oracle module](https://github.com/umee-network/umee/tree/main/x/oracle/spec) requires that all validators vote on the price of assets which governance has decided to add. In order to vote on these prices, the umee team has built the [price feeder](https://github.com/umee-network/umee/tree/main/price-feeder#oracle-price-feeder).

Note: If the calypso upgrade has happened successfully, you **absolutely must** vote on prices to avoid being jailed and slashed.

1. First, install the most recent price-feeder binary

> Replace the tar with the correct architecture of the most recent price feeder version Currently: https://github.com/umee-network/umee/releases/tag/price-feeder%2Fv0.3.0

```
wget https://github.com/umee-network/umee/releases/download/price-feeder/v0.3.0/price-feeder-v0.3.0-linux-amd64.tar.gz
tar xf price-feeder-v0.3.0-linux-amd64.tar.gz
chmod +x price-feeder-v0.3.0-linux-amd64/price-feeder
sudo mv price-feeder-v0.3.0-linux-amd64/price-feeder /usr/local/bin/
```

2. Download the example config file

```
cd /usr/local/bin/
wget https://raw.githubusercontent.com/umee-network/umee/main/price-feeder/price-feeder.example.toml
```

3. Replace the example values in your config

> Set up your keyring using the description (here)[https://github.com/umee-network/umee/tree/main/price-feeder#keyring-1].
> Update the `[account]` information with the correct chain-id (**umee-1** for mainnet), address, and validator address from your keyring.

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
#Restart=always
#RuntimeMaxSec=14400s # 4h
RestartSec=5s
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

> Note: the price-feeder hits a lot of providers endpoints to get prices for assets, sometimes the providers
> block the price-feeder for exceeding the number of calls. A workaround for this is to set the price-feeder
> service to restart at an amount of time, in this case maybe 4 hours can be enough. If that happens
> Uncomment `RuntimeMaxSec` and replace `Restart=on-failure` by `Restart=always`.

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

* Wrong address
* Wrong Chain ID
* Wrong keyring info
* Invalid providers / token pairs - check [coingecko](https://www.coingecko.com/en/coins/umee#markets) to see the available providers for a given coin
* Not voting on all required tokens
