<template>
  <div>
    <h1>UDX</h1>
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
          title: "Intoduction",
          text: "A brief overview of UDX",
          link: "/overview/udx/introduction",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Features,
          text: "Learn about UDX's unique offerings",
          link: "/overview/udx/features",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "The Guardian Guild",
          text: "Learn about the guild responsible for analyzing creditworthiness",
          link: "/overview/udx/guardian-guild",
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