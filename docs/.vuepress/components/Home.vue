<template>
  <div>
    <h1>Getting Started</h1>
    <p>Read all about Umee from a variety of perspectives.</p>
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

    <h1>Community Resources</h1>
    <p>Community-built resources for exploring the network.</p>
    <div class="row three-columns">
      <menu-card
        v-for="(menu, index) in resources"
        :key="index"
        :img="menu.img"
        :title="menu.title"
        :text="menu.text"
        :link="menu.link"
        :flex="false"
        :external="menu.external"
      />
    </div>

    <h1>Help and Support</h1>
    <div class="row three-columns">
      <menu-card
        v-for="(menu, index) in supports"
        :key="index"
        :img="menu.img"
        :title="menu.title"
        :text="menu.text"
        :link="menu.link"
        :flex="false"
        :external="menu.external"
      />
    </div>

    <email-form />
  </div>
</template>

<script>
import EmailForm from './EmailForm.vue';
import MenuCard from "./MenuCard.vue";
export default {
  components: { MenuCard, EmailForm },
  data() {
    return {
      menus: [
        {
          img: "/img/docs-overview-icon.png",
          title: "Overview",
          text: "High-level overview of Umee money markets.",
          link: "/overview",
        },
        {
          img: "/img/docs-users-icon.png",
          title: "User Guides",
          text: "View user guides and tutorials to better understand Umee.",
          link: "/users",
        },
        {
          img: "/img/docs-overview-icon.png",
          title: "Governance",
          text: "Umee's governance processes.",
          link: "/governance",
        },
        {
          img: "/img/docs-overview-icon.png",
          title: "Learn the Basics",
          text: "Introduction to basic crypto concepts.",
          link: "/learn-the-basics",
        },
        {
          img: "/img/docs-validator-icon.png",
          title: "Validators",
          text: "Setup a validator to help secure the network.",
          link: "/validators",
        },
        {
          img: "/img/docs-developer-icon.png",
          title: "Developers",
          text: "Learn everything you need to know to build on Umee.",
          link: "/developers",
        },
      ],
      resources: [
        {
          img: "img/mintscan.png",
          title: "Mintscan",
          text: "Block Explorer",
          link: "https://mintscan.io/umee",
          external: true,
        },
        {
          img: "img/pinghub.png",
          title: "Ping.pub",
          text: "Testnet Block Explorer",
          link: "https://explorer.network.umee.cc/",
          external: true,
        },
        {
          img: "img/markets.png",
          title: "Astrolabe",
          text: "Market Statistics",
          link: "https://astrolabe.umee.cc/",
          external: true,
        },
      ],
      supports: [
        {
          img: "/img/umee.png",
          title: "Umee App",
          text: "Launch the Umee money markets app",
          link: "https://app.umee.cc/",
          external: true,
        },
        {
          img: "/img/discord.png",
          title: "Discord",
          text: "Chat with the Umee community on Discord",
          link: "https://discord.gg/umee",
          external: true,
        },
        {
          img: "/img/github.png",
          title: "Found an Issue?",
          text: "Help improve this page by suggesting edits on Github",
          link: "https://github.com/umee-network/docs",
          external: true,
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
