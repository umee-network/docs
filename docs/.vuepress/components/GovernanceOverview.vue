<template>
  <div>
    <h1>Umee Governance Overview</h1>
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
          title: "What is Umee Governance?",
          text: "A brief explanation of Umee's governance processes",
          link: "/governance/governance-overview/introduction",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Governance Process",
          text: "Familiarize yourself with how Umee's governance processes work",
          link: "/governance/governance-overview/how-it-works",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Proposals",
          text: "Templates for on-chain governance proposals",
          link: "/governance/governance-overview/governance-proposals",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Code of Conduct",
          text: "Rules all governance participants must follow",
          link: "/governance/governance-overview/code-of-conduct",
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