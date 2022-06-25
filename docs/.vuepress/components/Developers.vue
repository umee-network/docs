<template>
  <div>
    <h1>Developers</h1>
    <p>Get started contributing to the Umee core modules or creating utilities and dashboards.</p>
    
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
          title: "Build and Test Umee Source Code",
          text: "Getting started with building and testing Umee codebase",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "IDE Setup",
          text: "Recommended IDE setup for developing on Umee in Go",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Umee Daemon",
          text: "Install umeed to join the network",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Modules",
          text: "Umee modules and their respective CLI commands",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Ethereum Bridge",
          text: "Bridge between Ethereum and Umee",
          link: "/developers/ethereum-bridge",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Relaying IBC",
          text: "Relay IBC packets between Umee and other chains",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Assets",
          text: "Currently supported assets on Umee with their corresponding channels and IBC denoms",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Key Management",
          text: "Managing keys via CLI and advanced operations such as multisig wallets",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Transaction Structure",
          text: "Understanding the structure of a transaction on the Umee blockchain",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Performance & Profiling",
          text: "Learn how to measure performance and profile your node",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Contributing",
          text: "Guidelines to contributing to Umee core development",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Ethereum Protocol Smart Contracts",
          text: "Learn how to build with Umee's smart contracts on Ethereum",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Queries",
          text: "Learn the different ways to query the Umee blockchain",
          link: "/developers/querying",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Price Feeder",
          text: "Learn the different ways to query the Umee blockchain",
          link: "/developers/price-feeder",
        },
      ],
      networks: [
        {
          img: "/img/docs-developer-icon.png",
          title: "Joining Testnet",
          text: "Set up a node on the Umee testnet",
          link: "/developers",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Joining Mainnet",
          text: "Set up a node on the Umee mainnet",
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
