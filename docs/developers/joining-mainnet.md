# Joining Mainnet

### Hardware Requirements

To run a Umee Node you will first need a Ubuntu server.&#x20;

The recommended hardware to run an Umee node will vary depending on the use case and desired functionalities of the node. For example, a significant amount of disk space can be required if the node will act as an archive node, i.e. `pruning=nothing` or if the node is a state-sync snapshot provider. In general, we recommend at a minimum the following specifications:

* 2+ vCPU
* 4+ GB RAM
* 120+ GB SSD

At this point you should have set up your Ubuntu Server and should have SSH access. The following commands should be done in order to install a Umee Node onto your server.&#x20;

1. Install the required packages & updates.&#x20;

```
# Update the system
sudo apt update
sudo apt upgrade

# Install git, gcc and make
sudo apt install git build-essential ufw curl jq --yes

# Install Go
wget -OL https://go.dev/dl/go1.18.5.linux-amd64.tar.gz
rm -rf /usr/local/go
sudo tar -C /usr/local -xvf go1.18.5.linux-amd64.tar.gz

# Export environment variables

echo 'export GOPATH="$HOME/go"' >> ~/.profile 
echo 'export GOBIN="$GOPATH/bin"' >> ~/.profile 
echo 'export PATH="$GOBIN:$PATH"' >> ~/.profile 
source ~/.profile
```

2\. Check if the variables were set right. If these commands do not return anything similar to these expected outputs then you should double check that you ran the first commands correctly.&#x20;

```
go version 
# Expected output: go1.18.3 linux/amd64
echo $GOPATH 
# Expected output: /home/umee/go
```

3\. Install the umeed binary onto your server.&#x20;

```
cd 
git clone --depth 1 --branch v1.0.1 https://github.com/umee-network/umee.git
cd umee && make install
umeed version
# Expected output: v1.0.1
```

4\. Initialize node and create a wallet

The --chain-id here does not matter since we will be overriding the default genesis.json file in the next step.&#x20;

```
cd
umeed init YOUR_MONIKER --chain-id umee-betanet-1
umeed keys add UMEE_WALLET_NAME
```

**Save the outputted mnemonic phrase**. There will be a wallet address and mnemonics from it. If you do not save the mnemonic at this stage, it will no longer be possible to do this. You will need it later.&#x20;

If you are running a testnet node then be sure to copy the wallet address and use it in the Discord to get some test tokens.&#x20;

```
!request UMEE_WALLET_ADDRESS
```

6\. Overwriting default genesis.json file

Once initialized, overwrite the default `genesis.json` file with genesis state file for the particular network that you are joining. You may retrieve the genesis state file from the Umee [repository](https://github.com/umee-network/umee) or another trusted source:

#### Mainnet Node&#x20;

```bash
cd ~/.umee/config
wget -O $HOME/.umee/config/genesis.json "https://raw.githubusercontent.com/umee-network/umee/main/networks/umee-1/genesis.json"UmeeMania Node
```

```
cd ~/.umee/config
wget -O $HOME/.umee/config/genesis.json "https://raw.githubusercontent.com/umee-network/umee/main/networks/umeemania-1/genesis.json"
```

7\. Install Cosmovisor&#x20;

Cosmovisor will allow your node to automatically pull in the latest updates as soon as they released. Making your life easier in the future.&#x20;

```
cd ~
git clone https://github.com/cosmos/cosmos-sdk
cd cosmos-sdk
git checkout v0.42.7
make cosmovisor
cp cosmovisor/cosmovisor $GOPATH/bin/cosmovisor
cd $HOME
```

8\. Create folders for Cosmovisor

```
mkdir -p ~/.umee
mkdir -p ~/.umee/cosmovisor
mkdir -p ~/.umee/cosmovisor/genesis
mkdir -p ~/.umee/cosmovisor/genesis/bin
mkdir -p ~/.umee/cosmovisor/upgrades

make build
cp ~/umee/build/umeed ~/.umee/cosmovisor/genesis/bin 

```

9\. Set Up ENV Variables&#x20;

```
echo 'export DAEMON_NAME="umeed"' >> ~/.profile
echo "export DAEMON_HOME='$HOME/.umee'" >> ~/.profile
echo "export DAEMON_RESTART_AFTER_UPGRADE='true'" >> ~/.profile
source ~/.profile
```

10\. Add peers to config&#x20;

```
nano ~/.umee/config/config.toml
#find and replace persistent_peers line
persistent_peers = "a9a84866786013f75138388fbf12cdfc425bd39c@137.184.69.184:26656,684dd9ce7746041d0453322808cc5b238861e386@137.184.65.210:26656,c4c425c66d2941ce4d5d98185aa90d2330de5efd@143.244.166.155:26656,eb42bdbd821fad7bd0048a741237625b4d954d18@143.244.165.138:26656,4e9f928cbbb2b0fede72e83f9489f922d7b6dc0b@135.181.47.127:26656,4e37887e1b9799b1eb479334eb3d0d2c458dc038@194.163.172.168:26656,bf38d9a0dbebb80e855c9d67c9a6cd9741913058@188.34.157.243:26656,b634e9a9661a0b101689e9cef3ffe16ab6669d5a@188.34.182.94:26656,aa52369e41030c927269cd5fbf575faa9373d249@51.77.34.110:26656,cd12da436528731dea70319d32927e5aa9319be5@65.21.55.103:26656"

```

11\. Create a service file to run the node

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
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
[Install]
WantedBy=multi-user.target
EOF
```

12\. Run the node

These commands will finally start your node and it will begin running .&#x20;

```
sudo systemctl daemon-reload
sudo systemctl enable umeed
sudo systemctl start umeed
```

To check logs you can use this command

```
journalctl -u umeed -f
```

