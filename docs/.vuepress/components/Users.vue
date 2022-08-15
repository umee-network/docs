<template>
  <div>
    <h1>User Guides</h1>
    <p>Supply and borrow funds for ultimate DeFi composability using Umee money markets.</p>
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
          title: "Getting started",
          text: "Learn the basics on how to use Umee",
          link: "/users/getting-started",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Staking Umee",
          text: "Stake Umee to help secure the network and earn rewards",
          link: "/users/staking-umee",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Using the Web App",
          text: "Use the web app for easy access to DeFi",
          link: "/users/using-the-web-app",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Participating in Governance",
          text: "Use your vote to help shape Umee's future",
          link: "/users/governance",
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
