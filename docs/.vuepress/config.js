const { path } = require("@vuepress/utils");
const { localTheme } = require("./theme");
const { palettePlugin } = require("@vuepress/plugin-palette");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const { mediumZoomPlugin } = require("@vuepress/plugin-medium-zoom");
const { tabsPlugin } = require("./theme/plugins/vuepress-plugin-tabs");

module.exports = {
  lang: "en-US",
  title: "Umeeversity",
  description: "This is my first VuePress site",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  theme: localTheme({
    logo: "/img/Logo.svg",
    docsRepo: "https://github.com/umee-network/docs",
    docsBranch: "main",
    docsDir: "docs",
    editLinkPattern: ":repo/edit/:branch/:path",
    lastUpdated: true,
    contributors: false,
    sidebarDepth: 1,
    sidebar: {
      "/users/": [
        {
          text: "Getting Started",
          collapsible: true,
          children: [
            "/users/getting-started/creating-wallet",
            "/users/getting-started/using-wallet",
            "/users/getting-started/funding-wallet",
          ],
        },
        {
          text: "Blockchain Basics",
          collapsible: true,
          children: [
            "/users/blockchain-basics/what-is-blockchain",
            "/users/blockchain-basics/what-is-cosmos",
            "/users/blockchain-basics/what-is-crypto",
            "/users/blockchain-basics/what-is-wallet",
            "/users/blockchain-basics/what-is-staking",
            "/users/blockchain-basics/what-is-defi",
            "/users/blockchain-basics/what-is-dao",
          ],
        },
        {
          text: "Staking Umee",
          collapsible: true,
          children: [
            "/users/staking-umee/selecting-validator",
            "/users/staking-umee/staking-umee",
          ],
        },
        {
          text: "Using the Web App",
          collapsible: true,
          children: [
            "/users/using-the-web-app/test-before",
            "/users/using-the-web-app/common-terms",
            "/users/using-the-web-app/connecting-app",
            "/users/using-the-web-app/transferring-tokens",
            "/users/using-the-web-app/supply-withdraw",
            "/users/using-the-web-app/borrow-repay",
            "/users/using-the-web-app/troubleshooting",
          ],
        },
        {
          text: "Governance",
          collapsible: true,
          children: [
            "/users/governance/voting",
            "/users/governance/creating-proposal",
          ],
        },
      ],
      "/overview/": [
        {
          title: "Overview",
          children: ["/overview/", "umee-token"],
        },
      ],
      "/validators/": [
        {
          title: "Validators",
          children: ["testnet-validator", "mainnet-validator"],
        },
      ],
      "/developers/": [
        {
          text: "Getting Started",
          collapsible: true,
          children: [
            "/developers/source-code",
            "/developers/ide-setup",
            "/developers/umee-daemon",
            {
              text: "Modules",
              collapsible: true,
              children: [
                {
                  text: "Leverage",
                  collapsible: true,
                  children: [
                    "/developers/modules/leverage/01_concepts",
                    "/developers/modules/leverage/02_state",
                    "/developers/modules/leverage/03_queries",
                    "/developers/modules/leverage/04_messages",
                    "/developers/modules/leverage/05_endblock",
                    "/developers/modules/leverage/06_events",
                    "/developers/modules/leverage/07_params",
                  ],
                },
                {
                  text: "Oracle",
                  collapsible: true,

                  children: [
                    "/developers/modules/oracle/01_concepts",
                    "/developers/modules/oracle/02_state",
                    "/developers/modules/oracle/03_end_block",
                    "/developers/modules/oracle/04_messages",
                    "/developers/modules/oracle/05_events",
                    "/developers/modules/oracle/06_params",
                  ],
                },
              ],
            },
            "/developers/ethereum-bridge",
            "/developers/relaying-ibc",
            "/developers/assets",
            "/developers/key-management",
            "/developers/transaction-structure",
            "/developers/performance-profiling",
            "/developers/contributing",
            "/developers/ethereum-contracts",
            "/developers/querying",
            "/developers/price-feeder",
          ],
        },
        {
          text: "Networks",
          collapsible: true,
          children: [
            "/developers/joining-testnet",
            "/developers/joining-mainnet",
          ],
        },
      ],
    },
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Users",
        link: "/users",
      },
      {
        text: "Validators",
        link: "/validators",
      },
      {
        text: "Developers",
        link: "/developers",
      },
    ],
  }),
  plugins: [
    palettePlugin({ preset: "sass" }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    mediumZoomPlugin({
      selector: "",
    }),
    tabsPlugin({}),
  ],
};
