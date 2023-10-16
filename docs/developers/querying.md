# Querying the UX Blockchain

There are multiple ways to perform queries within the UX network such as using the CLI, Tendermint's RPC, and the application's gRPC and API instances. Note, this guide is not a comprehensive overview of all the possible queries and how to invoke them.

## CLI

Like all Cosmos SDK based applications, operators can invoke queries against a running `umeed` process. By convention, queries are performed under a module sub-command.

For example, to query for the balance of an account:

```bash
$ umeed q bank balances umee17lu4h5nh28ctv9y6ldt0apqz7dxm8arvttx5xc
balances:
- amount: "5500000000000"
  denom: uumee
pagination:
  next_key: null
  total: "0"
```

{% hint style="info" %}
By default, the `umeed` process will query against localhost. If you wish to query against an external node, you must provide the `--node` flag.
{% endhint %}

To avoid having to provide the same flags over and over again such as `--chain-id` and `--node`, you can populate a `client.toml` file with these values in the config directory. For example:

{% code title="$HOME/.umee/config/client.toml" %}
```
chain-id = "<chain-id>"
output = "text"
broadcast-mode = "sync"
```
{% endcode %}

See `$ umeed --help` for all modules and query commands.

## API and gRPC

If enabled, an `umeed` node can expose a gRPC and gRPC Gateway API. By default, the gRPC server runs on port `9090` and the gRPC Gateway API server runs on port `1317` -- both of these ports are configurable in `app.toml`.

For example, to query for the balance of an account:

```
$ curl http://localhost:1317/cosmos/bank/v1beta1/balances/umee17lu4h5nh28ctv9y6ldt0apqz7dxm8arvttx5xc
{
  "balances": [
    {
      "denom": "uumee",
      "amount": "5500000000000"
    }
  ],
  "pagination": {
    "next_key": null,
    "total": "1"
  }
}
```

{% hint style="warning" %}
We recommend using the gRPC Gateway API routes instead of the deprecated legacy routes. The deprecated legacy API routes will be removed entirely in a future Cosmos SDK release. All gRPC Gateway API routes contain the Protobuf version, e.g. `v1beta1`.
{% endhint %}

By default, the gRPC Gateway API queries for state against the current block height. It also supports queries at previous heights via the `x-cosmos-block-height` header:

```
$ curl -H "x-cosmos-block-height: 400" http://localhost:1317/cosmos/bank/v1beta1/balances/umee17lu4h5nh28ctv9y6ldt0apqz7dxm8arvttx5xc
{
  "balances": [
    {
      "denom": "uumee",
      "amount": "350000000011"
    }
  ],
  "pagination": {
    "next_key": null,
    "total": "1"
  }
}
```

You can also invoke direct gRPC queries against the gRPC server. We recommend using the `grpcurl` [tool](https://github.com/fullstorydev/grpcurl).

For example, to query for the balance of an account:

```
$ grpcurl -d '{"address": "umee17lu4h5nh28ctv9y6ldt0apqz7dxm8arvttx5xc"}' --plaintext 0.0.0.0:9090 cosmos.bank.v1beta1.Query/AllBalances
{
  "balances": [
    {
      "denom": "uumee",
      "amount": "5500000000000"
    }
  ],
  "pagination": {
    "total": "1"
  }
}
```
