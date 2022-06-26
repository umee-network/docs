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
          title: "Users",
          children: [
            "/users/getting-started/",
            "/users/blockchain-basics/",
            "/users/staking-umee/",
            "/users/using-the-web-app/",
            "/users/governance/",
          ],
        },
      ],
      "/users/getting-started/": [
        {
          title: "Getting Started",
          children: ["creating-wallet", "using-wallet", "funding-wallet"],
        },
      ],
      "/users/blockchain-basics/": [
        {
          title: "Blockchain Basics",
          children: [
            "what-is-blockchain",
            "what-is-cosmos",
            "what-is-crypto",
            "what-is-wallet",
            "what-is-staking",
            "what-is-defi",
            "what-is-dao",
          ],
        },
      ],
      "/users/staking-umee/": [
        {
          title: "Staking Umee",
          children: ["selecting-validator", "staking-umee"],
        },
      ],
      "/users/using-the-web-app/": [
        {
          title: "Using the Web App",
          children: [
            "test-before",
            "common-terms",
            "connecting-app",
            "transferring-tokens",
            "supply-withdraw",
            "borrow-repay",
            "troubleshooting",
          ],
        },
      ],
      "/users/governance/": [
        {
          title: "Governance",
          children: ["voting", "creating-proposal"],
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
          title: "Getting Started",
          children: [
            "source-code",
            "ide-setup",
            "umee-daemon",
            "modules",
            "ethereum-bridge",
            "relaying-ibc",
            "assets",
            "key-management",
            "transaction-structure",
            "performance-profiling",
            "contributing",
            "ethereum-contracts",
            "querying",
            "price-feeder",
          ],
        },
        {
          title: "Networks",
          children: ["joining-testnet", "joining-mainnet"],
        },
      ],
      "/developers/modules/": [
        {
          title: "Modules",
          children: [
            "/developers/modules/leverage/",
            "/developers/modules/oracle/",
          ],
        },
      ],
      "/developers/modules/leverage/": [
        {
          title: "Modules",
          children: [
            "01_concepts",
            "02_state",
            "03_queries",
            "04_messages",
            "05_endblock",
            "06_events",
            "07_params",
          ],
        },
      ],
      "/developers/modules/oracle/": [
        {
          title: "Modules",
          children: [
            "01_concepts",
            "02_state",
            "03_end_block",
            "04_messages",
            "05_events",
            "06_params",
          ],
        },
      ],

      "/overview/": [
        {
          title: "Overview",
          children: [
            "custom-tabs",
            "umee-token",
            // "blockchain-basics",
            // "essentials",
            // 'pow-vs-pos',
            // "defi",
            // "governance",
            // "help",
            // "branding",
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
