# Joining Mainnet

### Hardware Requirements

To run a UX Node you will first need a Ubuntu server.

The recommended hardware to run an UX node will vary depending on the use case and desired functionalities of the node. For example, a significant amount of disk space can be required if the node will act as an archive node, i.e. `pruning=nothing` or if the node is a state-sync snapshot provider. In general, we recommend at a minimum the following specifications:

- 2+ vCPU
- 4+ GB RAM
- 120+ GB SSD

At this point you should have set up your Ubuntu Server and should have SSH access. The following commands should be done in order to install a UX Node onto your server.

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
git clone --depth 1 --branch v6.3.0 https://github.com/umee-network/umee.git
cd umee && make install
umeed version
# Expected output: v6.3.0
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

   Once initialized, overwrite the default `genesis.json` file with genesis state file for the particular network that you are joining. You may retrieve the genesis state file from the UX [repository](https://github.com/umee-network/umee) or another trusted source:

   Mainnet Node

```bash
cd ~/.umee/config
wget -O $HOME/.umee/config/genesis.json "https://raw.githubusercontent.com/umee-network/umee/main/networks/umee-1/genesis.json"
```

### Cosmovisor

7. Install Cosmovisor

See UX [readme#cosmovisor](https://github.com/umee-network/umee/blob/main/README.md#cosmovisor) for details.

8. Add peers to CometBFT (formerly Tendermint) config;

```
nano ~/.umee/config/config.toml
#find and replace persistent_peers line
persistent_peers = "699cf7bce02c1f48cc00cecdb66c6cd78f9f6a11@51.178.65.225:23656,ed0b7f7d06444daa07514edd10de51405a6cfba9@95.216.76.51:26656,52c253533deaa5774f8620eac428be5dc1f1bba6@67.209.54.93:13656,415ad41381d8ce94aabe7ee6260e7253ff3950ec@20.114.250.53:26656,66ba8da36f275dcbb0171d5db00ac1f65a2f4dcc@135.181.215.62:6020,a38bac7dbdbcce1f52095dc4ff15292c09403f30@65.109.90.96:61656,25fae899518a69a3ae7ab472b888ece57d233ef1@144.76.195.75:45156,5ab53dc31bf51e9416419112b418e4908519a97a@65.21.139.155:27656,4ed1a9d5a5ed0947003b793fc4c337b07b46148a@95.216.74.106:26656,e41ce87b0451c937746d6d4a24963b838e4c91c7@23.88.65.60:26656,f8d5105fad723fa2c4e263032a892fb331600ba7@65.109.24.82:29656,3247d3f02e74739c87cb4e40985dc839012c3c09@208.88.251.50:26656,e4edcba3c8b3111b6b13e4fec4850c6f4eec898e@116.202.241.157:14656,b4e2b96c64c81ab113ded5275621a82e8a72ad0e@148.113.1.83:13656,2ed2ca038b07d7f277e94fd9a2abee56abb74f7f@94.130.13.186:13656,53f2eb3e910f67d30c2bee0a8171af2fc93c9855@149.202.64.145:26656,5c0abe830e5c327bd46c68c159722efed2cc137e@34.150.160.117:26656,280389007ad73ced882cb41b1f5fd23145fe6a5b@34.148.212.13:26656,a4456260de9d5008b77d3b8dcf01d7452edb56ce@34.72.234.6:26656,a0b7be43e6b9fc17c3875afc423b994ad4da28dc@34.31.186.38:26656,24eb30e459086c2a649bec41560daa46d601d0cb@168.119.3.46:26656,5d2eb42735d31690b9d92e04666b217e41305e64@34.168.74.96:26656,278c2ac649ab1630924625ec898cbfbf1ce8c8df@34.125.222.221:26656,cb1cda0c78676cddd5e2a7034840fe0df8eeec6b@159.65.67.135:26656,251db166d1fd8815fd5e1648da7cf71850021753@13.37.250.72:26656,3eaae21c268a7871ce3fb1b9af1492f025f671e5@95.217.41.163:26656,9663b286297e31bb364713d2bb9c35e953d223c5@18.132.199.225:26656,d5f320c6e1443160c887deab487f7aa3830322ff@194.60.201.146:26656,109443243e1f2dc873b38de11bcdd6195143179f@65.109.33.48:10656,40add3872949002741230cc3ca3b9eca8bf36c3c@84.247.160.108:26656,35071733c29aca146bdb9a2784441caffc40a2e8@65.108.98.235:28956,9ffea81f6b1c4315fd6451757ff187dec659ce33@34.125.49.229:26656,6e1c59f907a34c929b92ab82582c03f60e7c9102@136.243.72.31:28656,22b26ffac5416bd0080887e401290043bad62645@45.158.38.2:26656,f41bc3cff167762834617d93232998afa2d02486@5.9.121.55:41656,ec82788644c5d799dbe14fee40bf6e316ea70cb1@51.81.49.132:13656,6099eff57ff197ad6af759e60ae6b659cf7f1b8e@193.35.57.46:13656,71c1bb8ff09759bf3ef777671299a7aedd63ae3c@65.109.92.241:26656,81decf5d242678bf90fa326bd5bfa00ac7ee877f@95.216.46.125:29656,3ce05993f42bbaa16aa7a5e390798a19d175400a@85.10.193.142:20056,3540cafda95ebf6d1ccc83744b9a4521ba881ee0@148.251.246.239:27007,43bfc50ab49a4a4090d6b5e15fdab7f48bd8f7d3@65.109.94.221:36656,d3d467c039d6273d8b1fa0b3d14ac3d999ffcb26@38.242.205.74:26656,cb97f7200996d4ac30cadbed69c51abb9c8ef94a@34.148.31.161:26656,cb6ae22e1e89d029c55f2cb400b0caa19cbe5523@172.111.52.52:32676,9dfcb27e1d4ce8b146289ecbb661b3a1fab91edf@34.172.149.70:26656,88373a3bf385c20ef0b4040f924cd99848012535@135.181.113.227:26696,2d1fcf59b24edd6899d53807e8fdeb4f0d55d90e@65.109.99.212:36656,21fa146231a8bc02657a8f8a8aa4b2ee287b8771@65.109.78.246:14656,3e24a3d2f38bb0e8449ad0aa59b71f0c256ed099@31.24.56.54:26656,71873cd07d9d3854c626bd634e19fe9a5848b234@64.185.227.122:13656,7f8b83fd029e33f5c69f2d3030b48e0785bd8af0@65.108.230.188:13656,8472b425666917272bb38ff95391ad615cefb954@142.132.189.230:26656,1cfb55dd8e6d62359239a86ad10680d850e8c8f6@88.198.67.40:26656,e980150356c6f77561e4aea535da627f2783047b@65.21.29.228:13656,ac95011f6f564d3e7360ce7b95dcc16887bdac06@65.108.77.152:28032,5f1d2b5935dd40cfabacf9c571e3fd86852a313e@18.163.165.245:26656,e83baa93a9d1191ceb458b4e8f1402e2b7e94355@49.12.218.159:26656,f5c2fb09cf87ead4d6f5f436e8d2bc52dafe4cca@15.235.115.152:16100,099363b18f8259cde5097b1801283aed2c3899ca@65.108.202.244:13656,07778e27f5006525ea854d9d995fc13208fbec90@5.9.106.214:10256,9569f3a48dbc4a7282c39f7d925881ef22c35b20@94.130.14.54:13656,0063e7076aa5a4d43d1cf89bc0bc2860ab131524@5.189.166.167:26656,0076b8b8614503e37caf4d7e0615d2dd894b76d4@65.109.118.196:13656,e8d22a41155ac83582ff7c4bfc0f42f690e97029@5.9.141.82:26656,19c568c1acf5212193c3e1864d4cc47798396271@135.181.61.154:26656,0518edfb8ddf0604019e15ad9c624f193b2f9348@34.106.153.247:26656,eab0f93cf446a610e9ab55966c098e8a5342d616@34.125.65.96:26656,3ae4f18979b2cb949d6182eee5627cf46bd89ec8@116.203.29.83:26628,d9bfa29e0cf9c4ce0cc9c26d98e5d97228f93b0b@65.109.88.38:16256,44465a34a68417f130263bf647ef70c5ac04d09a@138.68.101.130:32034,7b442b09780b78077e5880b2b116f0f08ebf9ae1@136.243.55.250:26656,be149f020bb04cdcef7c04dd9e013b2b5646b02c@167.235.180.97:13656,383d5b78abead20bb780740db1117b85aa3d1020@57.128.20.238:27656,09b99a210b93a4e66571d7fd745f2d52dfbf59f2@142.132.215.124:11056,71fefc962683672127d1556f1ec613e874cc12b8@185.225.191.216:26656,281c0a0df87c30f6da062f1143b5258fad8914be@144.91.113.127:26656,770250d89819cda492cbd95300993ef9ef7da9a8@148.251.88.145:10256,6d9c7c67d3682b3f490fe6b768b38b618808bfcc@85.10.197.58:13656,b2ccacb8aa2db15a368d4d4b8f9f4f2b121d4e43@34.168.194.94:26656,f53b623bca438e13e1efe61aa587b294ec5f4782@31.7.196.77:26656,2a258032796ce8b29d91d277318a5a45b2ce9654@142.132.159.188:26656,23b888290b89a7462e722e91dc943ec9d83527e9@38.109.200.33:26656,f83952dc87a4f0a849b964269617eda8dc6efc10@65.108.242.218:36656,affb86e5a30f9ed45cb07915be2886db329c7d8c@65.108.122.246:26736,d91abdb0a66b30521bbddd2483e4ef910e673f12@84.247.160.114:26656,dd02761a5515199961d22d8a69c87a64e6474a63@195.3.223.9:26756,ddcec1cb856d376d8d74c37ec26883ecc34ef2ab@35.236.103.89:26656,739a4afa03da440bd002d3a23976c24758e44290@65.108.236.140:20056,24c6d9e9cf048e0b29967304b993e5851c17c954@65.108.106.252:26656,c6623faf4797fb3856300b6f6211a8fff85dd5e1@207.231.104.10:26656,23fc8e3c2dbf82f82142c046191ce07a87ac89a5@38.242.205.73:26656,8b6baf477cd6c5fde18573a57767e0bb0083a8ce@23.88.75.167:56656,5a8fface86f743e13a94c809592228468644674e@136.243.174.45:30032,8b2a17c824846cac285e257f2f4225583b33f8e0@65.108.71.225:29525,a218a406aa9bea1660acf92f565ca781af05f89a@34.85.218.56:26656,a672ebfe8751debe35378557b1afb503588df459@65.109.58.237:26116,37b2a6ccb87678bec718fdc5ea53cb312a174106@116.202.135.93:26656,b75f2e31c2e8cda6e64b0f4e8952cbb7939a66c4@64.185.226.202:13656,ebc272824924ea1a27ea3183dd0b9ba713494f83@185.16.39.172:26756,111e4a493dad0f110d999b5506027894428bed1e@65.109.116.50:35656,efbcd2de6981fa7f692771e1b845c780c310e2fe@94.130.52.123:26656,be273b84a7db2ddcf7a1f3ea2b57e30e1441f933@65.108.131.103:26656,a37b8114a4fcef5a7c28780e961fc607ee4ff3ff@212.23.222.122:26656,cb24fcba3bdbf867a495d4a1c78224603bcb558b@135.181.210.171:10456,960ad8b6da318cb0206ef1f5f704cd0aafc1a37f@185.162.249.161:27656,033e3520bfc113d09306bac82f504c0141b25e74@35.196.193.247:26656,53df6cb0b42efac48d9b5400d38028b72f71abb3@135.125.4.73:26656,3fc66e0d46ec96ed61ab89d03b091e646b814768@65.109.61.113:26699,e3c5813067963f7bfb0a2a975871a7d303a26f40@143.110.188.229:26656,d97750eddfe88fcd0be61694c396d4491217549b@94.250.203.6:26696,6a305ad74349c59416c7fbd11754a670757d1d95@65.109.92.249:16656,6e1be011b50e39ed1815c6036cf707dfc3b0b270@65.109.94.225:56105,2ec618e1cac692263869cc397b987a4e9fc1861d@65.108.108.54:11656,d6ead5ed853ed91e7ecf4bc0f321eba1d60a6acd@142.132.207.27:13656,f07d8a2c36cbdadccd174ea0ddb2c6a3ed92380c@139.59.255.98:26656,50890e3cec721e27c64cede12a7aa9e4ceb55e14@168.119.15.122:26656,fedd68e4b7c0f7313d3152c0e6dba6077f62eb78@46.4.219.126:10156,1dc9217cfed7858358ae833757aa93b9eaa07fc8@185.17.199.70:13656,3e2417166a08e760ad530c0ce7bc4c83bdc3d4a8@65.109.117.74:26656,180749d491b04eab3034d9e536706aaccd3b289d@65.108.235.36:19656,fab4cfd16d3ddc1637b99af66367c6f40db9a7f4@65.21.193.117:6020,ea5b275ed34d5a28b849a201f9dcd4e86540eac7@194.180.188.9:26656,1fa4f7c1d32aa695a0d6c83b5960421e6b2bc981@95.217.117.99:26656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@135.181.5.219:13656"
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
