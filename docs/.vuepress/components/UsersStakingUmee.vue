<template>
  <div>
    <h1>Staking UX</h1>
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
          title: "Selecting a Validator",
          text: "Learn how to select a validator",
          link: "/users/staking-UX/selecting-validator",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Staking UX",
          text: "Learn how to stake UX tokens",
          link: "/users/staking-UX/staking-UX",
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
