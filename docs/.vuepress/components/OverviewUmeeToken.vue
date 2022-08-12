<template>
  <div>
    <h1>The UMEE Token</h1>
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
          title: "Token Utility",
          text: "Learn what the UMEE token is used for",
          link: "/overview/umee-token/token-utility",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Token Format",
          text: "Learn about the two formats of the UMEE token",
          link: "/overview/umee-token/token-format",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Tokenomics",
          text: "Learn the economics behind the UMEE token",
          link: "/overview/umee-token/tokenomics",
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