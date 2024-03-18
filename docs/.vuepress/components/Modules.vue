<template>
  <div>
    <h1>Modules</h1>
    <p>UX has custom modules built for specific functionalities. Learn more about what these modules do and how to use them to build.</p>
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
          img: "/img/docs-developer-icon.png",
          title: "Leverage",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Oracle",
          text: "Learn more about UX's custom oracle module",
          link: "/developers/modules/oracle",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Incentive",
          text: "Learn more about UX's incetive module",
          link: "/developers/modules/incentive",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Metoken",
          text: "Learn more about UX's metoken module",
          link: "/developers/modules/metoken",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "UGov",
          text: "Learn more about UX's Governance module",
          link: "/developers/modules/ugov",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "UIBC",
          text: "Learn more about UX's UIBC module",
          link: "/developers/modules/uibc",
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
