<template>
  <div>
    <h1>UX Products</h1>
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
          title: "General Information",
          text: "Learn about general information",
          link: "/overview/ux-app-features-and-app-usage/general-information",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Borrowing and lending",
          text: "Learn about borrowing and lending",
          link: "/overview/ux-app-features-and-app-usage/borrowing-and-lending",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Repayment and currency",
          text: "Learn about repayment and currency",
          link: "/overview/ux-app-features-and-app-usage/repayment-and-currency",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Price information and liquidations",
          text: "Learn about price information and liquidations",
          link: "/overview/ux-app-features-and-app-usage/price-information-and-liquidations",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Collateral and Leverage Assets",
          text: "Learn about collateral and leverage assets",
          link: "/overview/ux-app-features-and-app-usage/collateral-and-leverage-assets",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Advanced UX Features & Functionality",
          text: "Learn about advanced UX features & functionality",
          link: "/overview/ux-app-features-and-app-usage/advanced-ux-features-and-functionality",
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
