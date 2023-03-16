# Joining Mainnet

### Hardware Requirements

To run a Umee Node you will first need a Ubuntu server.

The recommended hardware to run an Umee node will vary depending on the use case and desired functionalities of the node. For example, a significant amount of disk space can be required if the node will act as an archive node, i.e. `pruning=nothing` or if the node is a state-sync snapshot provider. In general, we recommend at a minimum the following specifications:

- 2+ vCPU
- 4+ GB RAM
- 120+ GB SSD

At this point you should have set up your Ubuntu Server and should have SSH access. The following commands should be done in order to install a Umee Node onto your server.

1. Install the required packages & updates. Below we assume you use debian / ubuntu based OS.

```
# Update the system
sudo apt update
sudo apt upgrade

# Install git, gcc and make
sudo apt install git build-essential ufw curl jq --yes

```

2. Install latest go: https://go.dev/dl/
   Make sure your version of go is not smaller than the one reported in [`go.mod`](https://github.com/umee-network/umee/blob/main/go.mod#L3)

3. Install the umeed binary onto your server
   1. Use docker image from [umeed ghcr](https://github.com/umee-network/umee/pkgs/container/umeed) repository.
   2. Use latest [release build](https://github.com/umee-network/umee/releases).
   3. Build yourself: [instructions](https://github.com/umee-network/umee/blob/main/README.md#build)

```
cd
git clone --depth 1 --branch v3.0.1 https://github.com/umee-network/umee.git
cd umee && make install
umeed version
# Expected output: v3.0.1 or HEAD-ae43ccbd25c382cdfc5bcde26f21bc2002be5bf3
```

4. Initialize node and create a wallet
   The --chain-id here does not matter since we will be overriding the default genesis.json file in the next step.

```
cd
umeed init YOUR_MONIKER --chain-id umee-betanet-1
umeed keys add UMEE_WALLET_NAME
```

**Save the outputted mnemonic phrase**. There will be a wallet address and mnemonics from it. If you do not save the mnemonic at this stage, it will no longer be possible to do this. You will need it later.

If you are running a testnet node then be sure to copy the wallet address and use it in the Discord to get some test tokens.

```
!request UMEE_WALLET_ADDRESS
```

6. Overwriting default genesis.json file

   Once initialized, overwrite the default `genesis.json` file with genesis state file for the particular network that you are joining. You may retrieve the genesis state file from the Umee [repository](https://github.com/umee-network/umee) or another trusted source:

   Mainnet Node

```bash
cd ~/.umee/config
wget -O $HOME/.umee/config/genesis.json "https://raw.githubusercontent.com/umee-network/umee/main/networks/umee-1/genesis.json"
```

### Cosmovisor

7. Install Cosmovisor

See Umee [readme#cosmovisor](https://github.com/umee-network/umee/blob/main/README.md#cosmovisor) for details.

8. Add peers to CometBFT (formerly Tendermint) config;

```
nano ~/.umee/config/config.toml
#find and replace persistent_peers line
persistent_peers = "a9a84866786013f75138388fbf12cdfc425bd39c@137.184.69.184:26656,684dd9ce7746041d0453322808cc5b238861e386@137.184.65.210:26656,c4c425c66d2941ce4d5d98185aa90d2330de5efd@143.244.166.155:26656,eb42bdbd821fad7bd0048a741237625b4d954d18@143.244.165.138:26656,4e9f928cbbb2b0fede72e83f9489f922d7b6dc0b@135.181.47.127:26656,4e37887e1b9799b1eb479334eb3d0d2c458dc038@194.163.172.168:26656,bf38d9a0dbebb80e855c9d67c9a6cd9741913058@188.34.157.243:26656,b634e9a9661a0b101689e9cef3ffe16ab6669d5a@188.34.182.94:26656,aa52369e41030c927269cd5fbf575faa9373d249@51.77.34.110:26656,cd12da436528731dea70319d32927e5aa9319be5@65.21.55.103:26656"
```

9. Create a service file to run the node

```
sudo tee /etc/systemd/system/umeed.service > /dev/null <<EOF
[Unit]
Description=Umee Daemon
After=network-online.target
[Service]
User=$USER
ExecStart=$(which cosmovisor) start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_HOME=$HOME/.umee"
Environment="DAEMON_NAME=umeed"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_PREUPGRADE_MAX_RETRIES=3"
[Install]
WantedBy=multi-user.target
EOF
```

10. Run the node

These commands will finally start your node and it will begin running

```
sudo systemctl daemon-reload
sudo systemctl enable umeed
sudo systemctl start umeed
```

To check logs you can use this command

```
journalctl -u umeed -f
```
