<template>
  <div>
    <h1>UX Basics</h1>
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
          title: "Introduction to UX",
          text: "UX explained for beginners",
          link: "/learn-the-basics/UX-basics/introduction",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Types of Assets",
          text: "Learn about the differences between collateral and leverage assets",
          link: "/learn-the-basics/UX-basics/asset-types",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Common Terms",
          text: "Basic terms every UX user should understand",
          link: "/learn-the-basics/UX-basics/common-terms",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "meTokens",
          text: "Learn about specific UX assets",
          link: "/learn-the-basics/UX-basics/me-tokens",
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
