<template>
  <div>
    <h1>Umee Governance</h1>
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
          title: "Governance Overview",
          text: "A brief introduction to Umee's governance",
          link: "/overview/umee-governance/governance-overview",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "How it Works",
          text: "Learn how Umee's governance processes work",
          link: "/overview/umee-governance/how-it-works",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Governance Proposals",
          text: "Templates for on-chain governance proposals",
          link: "/overview/umee-governance/governance-proposals",
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
