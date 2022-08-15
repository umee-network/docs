<template>
  <div>
    <h1>Staking Basics</h1>
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
          title: "What is Staking",
          text: "Learn what it means to stake crypto",
          link: "/learn-the-basics/staking-basics/what-is-staking",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "What is a Validator?",
          text: "Learn about the role of validators",
          link: "/learn-the-basics/staking-basics/what-is-validator",
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