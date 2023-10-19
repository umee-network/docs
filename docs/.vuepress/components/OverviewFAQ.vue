<template>
  <div>
    <h1>FAQ</h1>
    <p>Frequently Asked Questions</p>
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
          title: "General",
          text: "General FAQ",
          link: "/overview/faq/general",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX Token",
          text: "UX Token FAQ",
          link: "/overview/faq/UX-token",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX App",
          text: "UX App FAQ",
          link: "/overview/faq/UX-app",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "UX Functionality",
          text: "UX Functionality FAQ",
          link: "/overview/faq/UX-functionality",
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
