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
          link: "/users/UX-basics/introduction",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Types of Assets",
          text: "Learn about the differences between collateral and leverage assets",
          link: "/users/UX-basics/asset-types",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Common Terms",
          text: "Basic terms every UX user should understand",
          link: "/users/UX-basics/common-terms",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "meTokens",
          text: "Learn about specific UX assets",
          link: "/users/UX-basics/me-tokens",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Introduction to Liquidations",
          text: "Learn more about Liquidations on UX",
          link: "/users/UX-basics/introduction-to-liquidations",
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
