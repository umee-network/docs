<template>
  <div>
    <h1>Developers</h1>
    <p>Get started contributing to the UX core modules or creating utilities and dashboards.</p>
    
    <h2>Getting Started</h2>
    <div class="row two-columns">
      <menu-card
        v-for="(menu, index) in menus"
        :key="index"
        :img="menu.img"
        :title="menu.title"
        :text="menu.text"
        :link="menu.link"
        :flex="true"
      />
    </div>
  
    <h2>Networks</h2>
    <div class="row two-columns">
      <menu-card
        v-for="(menu, index) in networks"
        :key="index"
        :img="menu.img"
        :title="menu.title"
        :text="menu.text"
        :link="menu.link"
        :flex="true"
      />
    </div>

  </div>
</template>

<script>
import MenuCard from "./MenuCard.vue";
export default {
  components: { MenuCard },
  data() {
    return {
      menus: [
        {
          img: "/img/docs-developer-icon.png",
          title: "Build and Test UX Source Code",
          text: "Getting started with building and testing UX codebase",
          link: "/developers/source-code",
        },
        // {
        //   img: "/img/docs-developer-icon.png",
        //   title: "IDE Setup",
        //   text: "Recommended IDE setup for developing on UX in Go",
        //   link: "/developers/ide-setup",
        // },
        {
          img: "/img/docs-developer-icon.png",
          title: "UX Daemon",
          text: "Install umeed to join the network",
          link: "/developers/UX-daemon",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Modules",
          text: "UX modules and their respective CLI commands",
          link: "/developers/modules",
        },
        // {
        //   img: "/img/docs-developer-icon.png",
        //   title: "Ethereum Bridge",
        //   text: "Bridge between Ethereum and UX",
        //   link: "/developers/ethereum-bridge",
        // },
        {
          img: "/img/docs-developer-icon.png",
          title: "Relaying IBC",
          text: "Relay IBC packets between UX and other chains",
          link: "/developers/relaying-ibc",
        },
        // {
        //   img: "/img/docs-developer-icon.png",
        //   title: "Assets",
        //   text: "Currently supported assets on UX with their corresponding channels and IBC denoms",
        //   link: "/developers/assets",
        // },
        {
          img: "/img/docs-developer-icon.png",
          title: "Key Management",
          text: "Managing keys via CLI and advanced operations such as multisig wallets",
          link: "/developers/key-management",
        },
        // {
        //   img: "/img/docs-developer-icon.png",
        //   title: "Transaction Structure",
        //   text: "Understanding the structure of a transaction on the UX chain",
        //   link: "/developers/transaction-structure",
        // },
        // {
        //   img: "/img/docs-developer-icon.png",
        //   title: "Performance & Profiling",
        //   text: "Learn how to measure performance and profile your node",
        //   link: "/developers/performance-profiling",
        // },
        {
          img: "/img/docs-developer-icon.png",
          title: "Contributing",
          text: "Guidelines to contributing to UX core development",
          link: "/developers/contributing",
        },
        // {
        //   img: "/img/docs-developer-icon.png",
        //   title: "Ethereum Protocol Smart Contracts",
        //   text: "Learn how to build with UX's smart contracts on Ethereum",
        //   link: "/developers/ethereum-contracts",
        // },
        {
          img: "/img/docs-developer-icon.png",
          title: "Queries",
          text: "Learn the different ways to query the UX chain",
          link: "/developers/querying",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Price Feeder",
          text: "Learn the different ways to query the UX chain",
          link: "/developers/price-feeder",
        },
      ],
      networks: [
        {
          img: "/img/docs-developer-icon.png",
          title: "Joining Testnet",
          text: "Set up a node on the UX testnet",
          link: "/developers/joining-testnet",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Joining Mainnet",
          text: "Set up a node on the UX mainnet",
          link: "/developers/joining-mainnet",
        },
      ],
    };
  },
};
</script>

<style lang="css">
.card {
  display: flex;
}
</style>
