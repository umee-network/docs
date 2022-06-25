<template>
  <div>
    <h1>Validators</h1>
    <p>Validators are nodes that participate in the security of a network and are responsible for committing new blocks in the blockchain. To learn more, select one of the options below.</p>
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
          img: "/img/docs-validator-icon.png",
          title: "Testnet Validator",
          text: "Turn a current node into a validator on the testnet",
          link: "/validators/testnet-validator",
        },
        {
          img: "/img/docs-validator-icon.png",
          title: "Mainnet Validator",
          text: "Turn a current node into a validator on the mainnet",
          link: "/validators/mainnet-validator",
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
