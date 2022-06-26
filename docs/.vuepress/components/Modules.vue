<template>
  <div>
    <h1>Modules</h1>
    <p>Umee has custom modules built for specific functionalities. Learn more about what these modules do and how to use them to build.</p>
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
          text: "Learn more about Umee's custom leverage module",
          link: "/developers/modules/leverage",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Oracle",
          text: "Learn more about Umee's custom oracle module",
          link: "/developers/modules/oracle",
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
