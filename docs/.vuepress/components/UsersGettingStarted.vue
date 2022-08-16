<template>
  <div>
    <h1>Getting Started</h1>
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
          title: "Creating a Wallet",
          text: "Learn how to create an interchain wallet",
          link: "/users/getting-started/creating-wallet",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Using a Wallet",
          text: "Learn how to use an interchain wallet",
          link: "/users/getting-started/using-wallet",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Funding a Wallet",
          text: "Learn how to fund an interchain wallet",
          link: "/users/getting-started/funding-wallet",
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
