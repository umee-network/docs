<template>
  <div>
    <h1>Cosmos Basics</h1>
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
          title: "What is Cosmos?",
          text: "An introduction to the Cosmos ecosystem",
          link: "/learn-the-basics/cosmos-basics/what-is-cosmos",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "What is IBC?",
          text: "Learn about the inter-blockchain communication protocol",
          link: "/learn-the-basics/cosmos-basics/what-is-ibc",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "What is interchain security?",
          text: "Learn about interchain security",
          link: "/learn-the-basics/cosmos-basics/what-is-interchain-security",
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