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

Done, you have successfully ran a node validator with all the required services.
