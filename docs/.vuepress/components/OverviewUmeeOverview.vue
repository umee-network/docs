<template>
  <div>
    <h1>UX Overview</h1>
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
          title: "Introduction",
          text: "UX basics",
          link: "/overview/UX-overview/introduction",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX's Vision",
          text: "Learn why UX exists",
          link: "/overview/UX-overview/UX-vision",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Security & Audits",
          text: "Review UX's security measures",
          link: "/overview/UX-overview/security-audits",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX's Roadmap",
          text: "Review UX's Roadmap",
          link: "/overview/UX-overview/UX-roadmap",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX Functionality",
          text: "UX Functionality",
          link: "/overview/UX-overview/UX-functionality",
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
