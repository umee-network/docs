# Peggo

## What is Peggo?

Simply put, Gravity Bridge would not be able to operate effectively without the help of Peggo. This is due to the fact that The Gravity Bridge needs an orchestrator (Peggo), to relay events from one chain to the other. The easiest way to understand Peggo is to imagine it as a Go (programming language) implementation of Gravity Bridge. Peggo watches for events that occur on both the Ethereum and Cosmos blockchains. When Peggo notices an event on either blockchain, it notifies the corresponding blockchain accordingly.

> An orchestrator is a program that runs on every validator in order to assist the Gravity Bridge module. Orchestrators help the Cosmos code perform tasks such as sign messages or transactions using a validator’s unique key. 

<br>

## UX's Gravity Bridge Solution

UX utilizes Gravity Bridge as a module and developed its own relayer written in Go called Peggo. The primary goal of Peggo is to act as a relayer that is compatible with any network using Gravity Bridge. The Gravity contract (deployed on Ethereum) is trustless and acts as a self-updating multisignature wallet that is controlled by the validator set. Everytime the power of UX’s validators change, a new “valset update” is created and signed. This update is then sent to Ethereum via any participant in the network. Providing this update to Ethereum is incentivised by monetary rewards, there exists no pre-selection of who relays the message to Ethereum. 
