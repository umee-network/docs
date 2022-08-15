<template>
  <div>
    <h1>Umee's Gravity Bridge</h1>
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
          text: "Learn about Umee's Gravity Bridge",
          link: "/overview/umee-gravity-bridge/gravity-bridge-overview",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Peggo",
          text: "Learn about the Gravity Bridge's orchestrator",
          link: "/overview/umee-gravity-bridge/peggo",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Relayers",
          text: "Learn about Gravity Bridge's relayers",
          link: "/overview/umee-gravity-bridge/umee-relayers",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "FAQ",
          text: "Frequently asked questions",
          link: "/overview/umee-gravity-bridge/faq",
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