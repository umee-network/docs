<template>
  <div>
    <h1>Gravity Bridge</h1>
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
          title: "Gravity Bridge Overview",
          text: "Learn about UX's Gravity Bridge",
          link: "/overview/UX-gravity-bridge/gravity-bridge-overview",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Peggo",
          text: "Learn about the Gravity Bridge's orchestrator",
          link: "/overview/UX-gravity-bridge/peggo",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Relayers",
          text: "Learn about Gravity Bridge's relayers",
          link: "/overview/UX-gravity-bridge/UX-relayers",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "FAQ",
          text: "Frequently asked questions",
          link: "/overview/UX-gravity-bridge/faq",
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