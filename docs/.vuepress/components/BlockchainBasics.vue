<template>
  <div>
    <h1>Blockchain Basics</h1>
    <p>The perfect place to learn the basics on the ecosystem surrounding Umee.</p>
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
          img: "/img/docs-users-icon.png",
          title: "Blockchain",
          text: "What is a blockchain?",
          link: "/users/blockchain-basics/what-is-blockchain",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Cosmos",
          text: "What is the Cosmos ecosystem?",
          link: "/users/blockchain-basics/what-is-cosmos",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Cryptocurrency",
          text: "What is cryptocurrency?",
          link: "/users/blockchain-basics/what-is-crypto",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Wallets",
          text: "What is a crypto wallet?",
          link: "/users/blockchain-basics/what-is-wallet",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Staking",
          text: "What is staking?",
          link: "/users/blockchain-basics/what-is-staking",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "DeFi",
          text: "What is DeFi?",
          link: "/users/blockchain-basics/what-is-defi",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "DAOs",
          text: "What is a DAO?",
          link: "/users/blockchain-basics/what-is-dao",
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
