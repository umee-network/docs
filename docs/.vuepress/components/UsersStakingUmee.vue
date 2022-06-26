<template>
  <div>
    <h1>Staking Umee</h1>
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
          link: "/users/staking-umee/selecting-validator",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Staking Umee",
          text: "Learn how to stake Umee tokens",
          link: "/users/staking-umee/staking-umee",
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
