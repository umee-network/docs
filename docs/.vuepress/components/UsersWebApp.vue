<template>
  <div>
    <h1>Using the Web App</h1>
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
          title: "Navigating the App",
          text: "Familiarize yourself with UX's web app",
          link: "/users/using-the-web-app/navigating-app",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Transferring Tokens",
          text: "Learn how to transfer tokens to and from UX",
          link: "/users/using-the-web-app/transferring-tokens",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Supplying and Withdrawing",
          text: "Learn how to supply and withdraw assets",
          link: "/users/using-the-web-app/supply-withdraw",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Borrowing and Repaying",
          text: "Learn how to borrow and repay assets",
          link: "/users/using-the-web-app/borrow-repay",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "Troubleshooting Errors",
          text: "Learn how to handle errors",
          link: "/users/using-the-web-app/troubleshooting",
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
