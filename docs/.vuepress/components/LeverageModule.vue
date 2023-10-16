<template>
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
          title: "Concepts",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage/01_concepts",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "State",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage/02_state",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Queries",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage/03_queries",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Messages",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage/04_messages",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Endblock",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage/05_endblock",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Events",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage/06_events",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Parameters",
          text: "Learn more about UX's custom leverage module",
          link: "/developers/modules/leverage/07_params",
        }
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
