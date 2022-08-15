<template>
  <div>
    <h1>DeFi Basics</h1>
    <p></p>
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
          title: "What is DeFi?",
          text: "An introduction to decentralized finance",
          link: "/learn-the-basics/defi-basics/what-is-defi",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "What is a DEX?",
          text: "Learn about decentralized exchanges",
          link: "/learn-the-basics/defi-basics/what-is-dex",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "What is a DeFi Money Market?",
          text: "Learn about decentralized money markets",
          link: "/learn-the-basics/defi-basics/what-is-defi-money-market",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "What is Liquidity Mining?",
          text: "Learn all about liquidity mining",
          link: "/learn-the-basics/defi-basics/what-is-liquidity-mining",
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