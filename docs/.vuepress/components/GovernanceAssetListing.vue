<template>
  <div>
    <h1>New Asset Listings</h1>
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
          title: "New Asset Listings Process",
          text: "What to know before starting the new asset listing process",
          link: "/governance/asset-listing/asset-listing-process",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "New Asset Listings Guide",
          text: "Learn how to request support for a new asset on Umee",
          link: "/governance/asset-listing/asset-listing-guide",
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