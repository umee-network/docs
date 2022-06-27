<template>
  <div class="page-footer p-4">
    <div class="row">
      <div class="col-3">
        <img src="/img/umee-logo.svg" class="page-footer-logo" />
        <p>Join us in building the future of cross chain DeFi!</p>
        <div class="social-links">
          <app-link
            v-for="(social, index) in socialLinks"
            :key="index"
            :external="true"
            :link="social.link"
          >
            <div class="social-link">
              <img :src="social.img" />
            </div>
          </app-link>
        </div>
      </div>
      <div class="col-7">
        <div class="row menus-container">
          <div class="col-1" />
          <div class="col-3">
            <span class="menu-title">PROTOCOL</span>
            <div class="menus">
              <div class="menu">
                <app-link :external="true" :link="'https://app.umee.cc/'"
                  >Markets</app-link
                >
              </div>
              <div class="menu">
                <app-link
                  :external="true"
                  :link="'https://wallet.keplr.app/#/umee/governance'"
                  >Governance</app-link
                >
              </div>
              <div class="menu">
                <app-link
                  :external="true"
                  :link="'https://www.umee.cc/umeemania'"
                  >Umeemania</app-link
                >
              </div>
              <div class="menu">
                <app-link
                  :external="true"
                  :link="'https://github.com/umee-network'"
                  >Github</app-link
                >
              </div>
            </div>
          </div>
          <div class="col-4">
            <span class="menu-title">DOCUMENTATION</span>
            <div class="menus">
              <div class="menu">
                <app-link :external="true" :link="'https://docs.umee.cc/umee/'"
                  >Docs</app-link
                >
              </div>
              <div class="menu">
                <app-link :external="true" :link="'https://www.umee.cc/faqs'"
                  >Faq</app-link
                >
              </div>
            </div>
          </div>
          <div class="col-4">
            <span class="menu-title">CONNECT</span>
            <div class="menus">
              <div class="menu">
                <app-link :external="true" :link="'https://www.umee.cc/careers'"
                  >Careers</app-link
                >
              </div>
              <div class="menu">
                <app-link
                  :external="true"
                  :link="'https://drive.google.com/drive/folders/1A9G2HM5RAka4FLGyVvRC4NeazpAYBh7Z?usp=sharing'"
                  >Media Kit</app-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <app-link :external="true" :link="'https://app.umee.cc/'">
          <Button>Launch App</Button>
        </app-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from "../../components/AppLink.vue";
export default {
  components: { AppLink },
  data() {
    return {
      socialLinks: [
        { img: "/img/medium.svg", link: "https://medium.com/umeeblog" },
        {
          img: "/img/twitter.svg",
          link: "https://twitter.com/Umee_CrossChain",
        },
        { img: "/img/discord.svg", link: "https://discord.gg/umee" },
        { img: "/img/github.svg", link: "https://github.com/umee-network" },
        { img: "/img/telegram.svg", link: "https://t.me/umeecrosschain" },
        {
          img: "/img/reddit.svg",
          link: "https://www.reddit.com/r/UmeeCrossChain",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/theme.scss";

.page-footer {
  background: #070927;
  padding: 2.5rem;
  color: #62637b;
  border-top: var(--footer-border);
  z-index: 10;
  margin-top: 5rem;

  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }

  &-logo {
    width: 160px;
  }

  .col-3 {
    width: 25%;
  }

  .col-2 {
    width: calc(100% / 6);
  }

  .col-4 {
    width: calc(100% / 3);
  }

  .col-5 {
    width: calc(500% / 12);
  }

  .col-7 {
    width: calc(700% / 12);
  }

  .col-8 {
    width: calc(200% / 3);
  }

  .col-6 {
    width: 50%;
  }

  .col-1 {
    width: calc(100% / 12);
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;

    .social-link {
      width: 35px;
      height: 35px;
      background-image: linear-gradient(#070927, #070927),
        linear-gradient(#464869, #464869);
      background-origin: border-box;
      background-clip: content-box, border-box;
      border: 2px solid transparent;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      margin: 0 5px 10px 0;

      &:hover {
        background-image: linear-gradient(#070927, #070927),
          linear-gradient(90deg, #fda9ff, #c9b8ff, #4dffe5);
      }
    }
  }

  .menu-title {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    -o-border-image: linear-gradient(90deg, #fda9ff, #c9b8ff, #4dffe5) 2;
    border-image: linear-gradient(90deg, #fda9ff, #c9b8ff, #4dffe5) 2;
    display: inline;
    padding-bottom: 2px;
    color: white;
  }

  .menus {
    margin: 2.9rem 0;

    .menu {
      margin-top: 0.8rem;
    }

    a {
      color: #62637b;

      &:hover {
        text-decoration: underline !important;
      }
    }
  }

  @media (max-width: 1200px) {
    .menus-container {
      & > div {
        width: 100% !important;
      }
    }

    .row > div {
      width: calc(100% / 3);
    }
  }

  @media (max-width: 959px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;

    .row {
      display: block;
    }

    .menus-container {
      margin-top: 2.9rem;
    }

    [class^="col-"] {
      width: 100% !important;
    }
  }
}
</style>
