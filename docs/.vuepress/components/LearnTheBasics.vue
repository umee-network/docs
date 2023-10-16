<template>
  <div>
    <h1>Learn the Basics</h1>
    <p>An introduction to basic blockchain and crypto concepts</p>
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
          title: "Blockchain Basics",
          text: "Learn about blockchain technology",
          link: "/learn-the-basics/blockchain-basics",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Crypto Basics",
          text: "An introduction to crypto",
          link: "/learn-the-basics/crypto-basics",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Staking Basics",
          text: "Learn what you need to know before staking crypto",
          link: "/learn-the-basics/staking-basics",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Cosmos Basics",
          text: "An introduction to the Cosmos Ecosystem",
          link: "/learn-the-basics/cosmos-basics",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "DeFi Basics",
          text: "Learn about decentralized finance",
          link: "/learn-the-basics/defi-basics",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX Basics",
          text: "Things every UX user should know",
          link: "/learn-the-basics/UX-basics",
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
