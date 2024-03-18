# UX Daemon

> UX has an [automatic installer](https://install.umee.cc)


```bash
$ umeed --help
A daemon and client for interacting with the Umee network. Umee is a
Universal Capital Facility that can collateralize assets on one blockchain
towards borrowing assets on another blockchain.

Usage:
  umeed [command]

Available Commands:
  add-genesis-account Add a genesis account to genesis.json
  collect-gentxs      Collect genesis txs and output a genesis.json file
  config              Create or query an application CLI configuration file
  debug               Commands to aid in debugging addresses and public keys
  export              Export state to JSON
  gentx               Generate a genesis tx carrying a self delegation
  help                Help about any command
  init                Initialize private validator, p2p, genesis, and application configuration files
  keys                Manage your application's keys
  migrate             Migrate genesis to a specified target version
  query               Querying subcommands
  rollback            rollback cosmos-sdk and tendermint state by one height
  rosetta             spin up a rosetta server
  start               Run the full node
  status              Query remote node for status
  tendermint          Tendermint subcommands
  tx                  Transactions sub-commands
  validate-genesis    validates the genesis file at the default location or at the location passed as an arg
  version             Print the application binary version information

Flags:
  -h, --help                help for umeed
      --home string         directory for config and data (default "$HOME/.umee")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --log_no_color        Disable colored logs
      --trace               print out full stack trace on errors

Use "umeed [command] --help" for more information about a command.
```