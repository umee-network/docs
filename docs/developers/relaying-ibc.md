# Relaying IBC

```
$ umeed tx ibc-transfer transfer transfer <CHANNEL-ID> <RECEIVER-ADDRESS> <AMOUNT> --from <FROM-ADDRESS> --chain-id <CHAIN-ID> --node <NODE-URI> --gas auto --gas-adjustment 1.5 --fees 200000uumee
```

Example 
```bash
// here I am doing ibc transfer from canon-4 (testnet) to axelar testnet 
$ umeed tx ibc-transfer transfer transfer channel-0 axelar1m9l358xunhhwds0568za49mzhvuxx9ux8hzrhv 100000uumee --from account --chain-id canon-4  --home ./data/test-1/ --keyring-backend test  --node tcp://https://canon-4.rpc.network.umee.cc:443 --gas auto --gas-adjustment 1.5 --fees 200000uumee
```