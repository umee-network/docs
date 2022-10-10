<template>
  <div>
    <h1>Overview</h1>
    <p>Learn all about Umee's cross-chain DeFi capabilities.</p>
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
          title: "Umee",
          text: "Learn about Umee",
          link: "/overview/umee-overview",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Gravity Bridge",
          text: "Learn how Umee's Gravity Bridge works",
          link: "/overview/umee-gravity-bridge",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "The UMEE Token",
          text: "Learn about the token that powers Umee's ecosystem",
          link: "/overview/umee-token",
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
