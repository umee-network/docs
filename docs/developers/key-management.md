# Key Management


```bash
$ umeed keys --help
Keyring management commands. These keys may be in any format supported by the
Tendermint crypto library and can be used by light-clients, full nodes, or any other application
that needs to sign with a private key.

The keyring supports the following backends:

    os          Uses the operating system's default credentials store.
    file        Uses encrypted file-based keystore within the app's configuration directory.
                This keyring will request a password each time it is accessed, which may occur
                multiple times in a single command resulting in repeated password prompts.
    kwallet     Uses KDE Wallet Manager as a credentials management application.
    pass        Uses the pass command line utility to store and retrieve keys.
    test        Stores keys insecurely to disk. It does not prompt for a password to be unlocked
                and it should be use only for testing purposes.

kwallet and pass backends depend on external tools. Refer to their respective documentation for more
information:
    KWallet     https://github.com/KDE/kwallet
    pass        https://www.passwordstore.org/

The pass backend requires GnuPG: https://gnupg.org/

Usage:
  umeed keys [command]

Available Commands:
  add            Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file
  delete         Delete the given keys
  export         Export private keys
  import         Import private keys into the local keybase
  import-hex     Import private keys into the local keybase
  list           List all keys
  list-key-types List all key types
  migrate        Migrate keys from amino to proto serialization format
  mnemonic       Compute the bip39 mnemonic for some input entropy
  parse          Parse address from hex to bech32 and vice versa
  rename         Rename an existing key
  show           Retrieve key information by name or address

Flags:
  -h, --help                     help for keys
      --home string              The application home directory (default "$HOME.umee")
      --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --output string            Output format (text|json) (default "text")
Global Flags:
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --log_no_color        Disable colored logs
      --trace               print out full stack trace on errors

Use "umeed keys [command] --help" for more information about a command.
```

## New Key 
```bash 
// by default --keyring-backend will `os` 
$ umeed keys add new-key --keyring-backend test

- address: umee1ffzd88cg4qj0jndjaqnv3py2u3vp9tv0jnupty
  name: new-key
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ApXv3XqNrTT4uT3gsOgvVF1SOhfQjw/cEuonn7Az6xNb"}'
  type: local


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

file marble chef chase chaos page disease spirit phrase update congress spoon renew lock unusual ancient knife life siege mystery cloud dynamic tissue heart
```

## Keys List 
```bash
$ umeed keys list --keyring-backend test
- address: umee1ffzd88cg4qj0jndjaqnv3py2u3vp9tv0jnupty
  name: new-key
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ApXv3XqNrTT4uT3gsOgvVF1SOhfQjw/cEuonn7Az6xNb"}'
  type: local
```

## Show Key Info
```bash
$ umeed keys show new-key --keyring-backend test
- address: umee1ffzd88cg4qj0jndjaqnv3py2u3vp9tv0jnupty
  name: new-key
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"ApXv3XqNrTT4uT3gsOgvVF1SOhfQjw/cEuonn7Az6xNb"}'
  type: local
```