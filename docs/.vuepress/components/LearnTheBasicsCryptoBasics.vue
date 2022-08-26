<template>
  <div>
    <h1>Crypto Basics</h1>
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
          title: "Crypto",
          text: "An introduction to crypto",
          link: "/learn-the-basics/crypto-basics/what-is-crypto",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Web3",
          text: "An introduction to web3",
          link: "/learn-the-basics/crypto-basics/what-is-web3",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Types of Crypto",
          text: "Learn about the different types of crypto",
          link: "/learn-the-basics/crypto-basics/types-of-crypto",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Crypto Wallets",
          text: "Everything you need to know about crypto wallets",
          link: "/learn-the-basics/crypto-basics/what-is-a-wallet",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Crypto Safety",
          text: "Learn how to protect your crypto",
          link: "/learn-the-basics/crypto-basics/crypto-safety",
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