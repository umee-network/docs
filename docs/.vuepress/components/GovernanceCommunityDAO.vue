<template>
  <div>
    <h1>Community DAO</h1>
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
          title: "Educators",
          text: "Learn how to contribute as an educator",
          link: "/governance/community-dao/educators",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Community Support",
          text: "Learn how to contribute as a community support leader",
          link: "/governance/community-dao/community-support",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Translators",
          text: "Learn how to contribute as a translator",
          link: "/governance/community-dao/translators",
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