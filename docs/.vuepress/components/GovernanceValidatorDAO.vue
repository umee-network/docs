<template>
  <div>
    <h1>Validator DAO</h1>
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
          title: "Overview",
          text: "An introduction to UX's Validator DAO",
          link: "/governance/validator-dao/overview",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Delegation Applications",
          text: "Learn how to apply for a delegation through the Validator DAO",
          link: "/governance/validator-dao/delegation-applications",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "The Committee",
          text: "Learn about the committee that makes delegation decisions",
          link: "/governance/validator-dao/the-committee",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Important Deadlines",
          text: "Deadlines all validators should know",
          link: "/governance/validator-dao/important-deadlines",
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
