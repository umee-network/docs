<template>
  <div>
    <h1>Blockchain Basics</h1>
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
          title: "What is a Blockchain?",
          text: "Blockchain technology explained for beginners",
          link: "/learn-the-basics/blockchain-basics/what-is-blockchain",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Types of Blockchains",
          text: "Learn about the different types of blockchains",
          link: "/learn-the-basics/blockchain-basics/types-of-blockchains",
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