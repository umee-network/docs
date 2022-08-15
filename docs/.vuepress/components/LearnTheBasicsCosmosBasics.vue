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
          title: "Advantages of Cosmos",
          text: "Learn what makes Cosmos unique",
          link: "/learn-the-basics/cosmos-basics/cosmos-advantages",
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