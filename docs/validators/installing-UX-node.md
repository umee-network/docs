# Installing Umee Node

At this point you should have set up your Ubuntu Server and should have SSH access. The following commands should be done in order to install a UX Node onto your server.

> UX has an [automatic installer](https://install.umee.cc)

#### Release Compatibility Matrix

Please consult [**release compatibility matrix**](https://github.com/umee-network/umee/#release-compatibility-matrix) to make sure you install the right version.

Before installing, check [**latest UX Release Notes**](https://github.com/umee-network/umee/releases).

## Installation

1.  Install the required packages & updates.

        # Update the system
        sudo apt update
        sudo apt upgrade

        # Install git, gcc and make
        sudo apt install git build-essential ufw curl jq snapd --yes

        # Install the latest Go with Snap
        sudo snap install go --classic

        # Export environment variables
        echo 'export GOPATH="$HOME/go"' >> ~/.profile
        echo 'export GOBIN="$GOPATH/bin"' >> ~/.profile
        echo 'export PATH="$GOBIN:$PATH"' >> ~/.profile
        source ~/.profile

2.  Check if the variables were set right. If these commands do not return anything similar to these expected outputs then you should double check that you ran the first commands correctly.;

        go version
        # Expected output: goX.X.X linux/amd64
        echo $GOPATH
        # Expected output: /home/umee/go

3.  Install the umeed binary onto your server.

        $ cd
        # Please check LATEST_RELEASE_TAG on our release page https://github.com/umee-network/umee/releases
        $ git clone --depth 1 --branch <LATEST_RELEASE_TAG> https://github.com/umee-network/umee.git
        $ cd umee && make install
        $ umeed version

4.  Initialize node and create a wallet
    The --chain-id here does not matter since we will be overriding the default genesis.json file in the next step.

        cd
        umeed init YOUR_MONIKER --chain-id umee-1
        umeed keys add UMEE_WALLET_NAME

    **Save the outputted mnemonic phrase**. There will be a wallet address and mnemonics from it. If you do not save the mnemonic at this stage, it will no longer be possible to do this. You will need it later.

    If you are running a testnet node then be sure to copy the wallet address and use it in the Discord to get some test tokens.

        !request UMEE_WALLET_ADDRESS

5.  Update `app.toml` config. You MUST set memopool version to `v1`:

        [mempool]
        version = "v1"

    Also, you should set a **non zero gas price**

        # The minimum gas prices a validator is willing to accept for processing a
        # transaction. Should be non nil to protect the network from spam.
        minimum-gas-prices = "0.1uumee"

6.  Overwriting default genesis.json file
    Once initialized, overwrite the default `genesis.json` file with genesis state file for the particular network that you are joining. You may retrieve the genesis state file from the Umee [repository](https://github.com/umee-network/umee) or another trusted source:

#### Mainnet Node

```bash
cd ~/.umee/config
wget -O $HOME/.umee/config/genesis.json "https://raw.githubusercontent.com/umee-network/umee/main/networks/umee-1/genesis.json"
```

7.  Install Cosmovisor
    Cosmovisor will allow your node to automatically pull in the latest updates as soon as they released. Making your life easier in the future.
    Follow the [installation instructions](https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor) to install the LATEST version of cosmovisor.

8.  Create folders for Cosmovisor

        mkdir -p ~/.umee/cosmovisor/genesis/bin ~/.umee/cosmovisor/upgrades
        cp ~/umee/build/umeed ~/.umee/cosmovisor/genesis/bin

9.  Set Up ENV Variables

        echo "# Setup Cosmovisor" >> ~/.profile
        echo 'export DAEMON_NAME="umeed"' >> ~/.profile
        echo "export DAEMON_HOME='$HOME/.umee'" >> ~/.profile
        echo "export DAEMON_RESTART_AFTER_UPGRADE='true'" >> ~/.profile
        source ~/.profile

10. Add peers to config

        nano ~/.umee/config/config.toml
        #find and replace persistent_peers line
        persistent_peers = "a9a84866786013f75138388fbf12cdfc425bd39c@137.184.69.184:26656,684dd9ce7746041d0453322808cc5b238861e386@137.184.65.210:26656,c4c425c66d2941ce4d5d98185aa90d2330de5efd@143.244.166.155:26656,eb42bdbd821fad7bd0048a741237625b4d954d18@143.244.165.138:26656,4e9f928cbbb2b0fede72e83f9489f922d7b6dc0b@135.181.47.127:26656,4e37887e1b9799b1eb479334eb3d0d2c458dc038@194.163.172.168:26656,bf38d9a0dbebb80e855c9d67c9a6cd9741913058@188.34.157.243:26656,b634e9a9661a0b101689e9cef3ffe16ab6669d5a@188.34.182.94:26656,aa52369e41030c927269cd5fbf575faa9373d249@51.77.34.110:26656,cd12da436528731dea70319d32927e5aa9319be5@65.21.55.103:26656"

11. Create a service file to run the node

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

12. Run the node
    These commands will finally start your node and it will begin running .&#x20;

        sudo systemctl daemon-reload
        sudo systemctl enable umeed
        sudo systemctl start umeed

    To check logs you can use this command

        journalctl -u umeed -f
