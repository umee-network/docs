<template>
  <div>
    <h1>Umee Overview</h1>
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
          title: "Introduction",
          text: "Umee basics",
          link: "/overview/umee-overview/introduction",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Umee's Vision",
          text: "Learn why Umee exists",
          link: "/overview/umee-overview/umee-vision",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Security & Audits",
          text: "Review Umee's security measures",
          link: "/overview/umee-overview/security-audits",
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