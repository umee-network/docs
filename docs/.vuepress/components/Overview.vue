<template>
  <div>
    <h1>Overview</h1>
    <p>Learn all about UX's cross-chain DeFi capabilities.</p>
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
          title: "UX",
          text: "Learn about UX",
          link: "/overview/UX-overview",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UDX",
          text: "Learn about UX's official institutional lending DAO",
          link: "/overview/udx",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "The UX Token",
          text: "Learn about the token that powers UX's ecosystem",
          link: "/overview/UX-token",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "FAQ",
          text: "Frequently Asked Questions",
          link: "/overview/faq",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX App Features & App Usage",
          text: "Learn about UX app features & app usage",
          link: "/overview/ux-app-features-and-app-usage",
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
