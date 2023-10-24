# Mainnet Validator

Turn a current node into a validator on the mainnet.

This guide contains instructions on how to setup and run an UX validator. First, be sure to check out the full node [instructions](installing-umee-node.md) on how to install and configure the `umeed` binary as this guide assumes you already have it installed and configured.

There are two (2) crucial processes required for a healthy validator node:

- [Umeed](installing-umee-node.md),
- [Price-Feeder](#price-feeder)

In order to become an **active** validator, you must have more stake than the [bottom validator](https://www.mintscan.io/umee/validators). You may still execute the following steps, but you will not be active and therefore won't receive staking rewards.

#### Release Compatibility Matrix

Please consult [**release compatibility matrix**](https://github.com/umee-network/umee/#release-compatibility-matrix) to make sure you install the right version.

### Keyring

Prior to creating your validator, you must first create your "operator" key. Note, this is not your consensus key and will not be used for signing. Instead, it is used to identify you validator in the UX network.

```bash
umeed keys add <key-name> [flags]
```

By default, `umeed` will store keys in your OS-backed keyring. You can change this behavior by specifying the `--keyring-backend` flag.

If you already have a key that you'd like to import via a mnemonic, you can provide a `--recover` flag and the `keys add` command will prompt you for the BIP39 mnemonic.

Visit the Cosmos SDK's keyring [documentation](https://docs.cosmos.network/v0.43/run-node/keyring.html) for more information

### Price Feeder

The [x/oracle module](https://github.com/umee-network/umee/tree/main/x/oracle/spec) requires that all validators vote on the price of assets which governance has decided to add. In order to vote on these prices, the umee team has built the [price feeder](https://github.com/umee-network/umee/tree/main/price-feeder#oracle-price-feeder).

Please [click here](https://github.com/umee-network/umee#release-compatibility-matrix) to see what version of the price feeder is compatible with your version of the umeed binary. It is not necessary for umeed v1.0.x.

If the calypso (V3) upgrade has happened successfully, you **absolutely must** vote on prices to avoid being jailed and slashed.

1. First, install the most recent price-feeder binary: [Releases](https://github.com/umee-network/umee/releases/tag/price-feeder)

- Replace the tar with the correct architecture of the most recent price feeder version
- make the binary executable: `chmod +x price-feeder-v*/price-feeder*`
- move the binary to `/usr/local/bin`

2.  Download the example config file, [also on Github](https://github.com/umee-network/umee/blob/main/price-feeder/price-feeder.example.toml)

        cd /usr/local/bin/
        wget https://raw.githubusercontent.com/umee-network/umee/main/price-feeder/price-feeder.example.toml

3.  Replace the example values in your config
    Set up your keyring using the description [here](https://github.com/umee-network/umee/tree/main/price-feeder#keyring-1).

    Update the `[account]` information with the correct chain-id (**umee-1** for mainnet), address, and validator address from your keyring.

        [account]
        address = "umee15nejfgcaanqpw25ru4arvfd0fwy6j8clccvwx4"
        chain_id = "umee-1"
        validator = "umeevaloper12tysz6mzrawenca2t3t7ltym4hfjj8a5upsn2k"

4.  In order to get your address & validator address, given a key with the name `alice`, you can run:

        umeed keys show alice -a --bech=acc
        umeed keys show alice -a --bech=val

5.  Create a [systemd](https://systemd.io/) service file

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

    Note: The price feeder hits a lot of endpoints to get prices for assets. Sometimes the websocket connections disconnect and cannot reconnect. If this is happening, set up the service file to restart the process after a few hours:

        Restart=always
        RuntimeMaxSec=14400s # 4h

6.  Start your service

        sudo systemctl daemon-reload
        sudo systemctl enable price-feeder
        sudo systemctl start price-feeder

7.  Please check to make sure your price feeder is running successfully

        sudo journalctl -u price-feeder.service -f

If it's not, please check your config. Common problems are:

- Wrong address
- Wrong Chain ID
- Wrong keyring info
- Invalid providers / token pairs - check [coingecko](https://www.coingecko.com/en/coins/umee#markets) to see the available providers for a given coin
- Not voting on all required tokens

8.  When ready to delegate feed consent, the `price-feeder_address` argument is the same as the `address = ` from your price-feeder.toml, eg.

        umeed tx oracle delegate-feed-consent <validator_adress> <price-feeder_address> --chain-id umee-1 --fees 2000uumee

### Calypso - v3 Upgrade Instructions

#### Overview

Calypso - v3 is Umee Network's latest blockchain technology release. In addition to Peggo, v3 validators must also run our Price Feeder process or will be jailed and slashed! Price Feeder fetches and aggregates exchange rate price data from various providers, then supplies them to the main oracle process.

#### Release Notes

[Price Feeder official release, v1.0.0](https://github.com/umee-network/umee/releases/tag/price-feeder%2Fv1.0.0)

#### Installation

> If [cosmovisor](/developers/joining-mainnet.html#cosmovisor) is already installed to automatically swap binaries, [skip to installing Price Feeder below](#price-feeder).

If this upgrade is to an existing validator, first choose the correct Umee release for your architecture [here](https://github.com/umee-network/umee/releases/), manually swap the binaries, and [install Price Feeder](#price-feeder).
If you would like to setup a new mainnet validator, [follow those instructions first](#mainnet-validator), before proceeding to [install Price Feeder](#price-feeder).

> [Validators must set a mempool version before the update `version = "v1"`](https://github.com/umee-network/umee/pull/1427/files)
