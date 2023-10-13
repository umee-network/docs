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
  description:
    "Learn more about DeFi, Crypto, Web3, cross chain applications as well as the Cosmos ecosystem and UX here.This is the start of your Web3 journey! ",
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
            "/users/getting-started/transferring-tokens",
          ],
        },
        {
          text: "Staking UX",
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
            "/users/using-the-web-app/navigating-app",
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
            "/governance/asset-listing/asset-listing-guide",
          ],
        },
      ],
      "/governance/": [
        {
          text: "Governance Overview",
          collapsible: true,
          children: [
            "/governance/governance-overview/introduction",
            "/governance/governance-overview/how-it-works",
            "/governance/governance-overview/governance-proposals",
            "/governance/governance-overview/code-of-conduct",
          ],
        },
        {
          text: "New Asset Listings",
          collapsible: true,
          children: [
            "/governance/asset-listing/asset-listing-guide",
            "/governance/asset-listing/risk-assessment-methodology",
          ],
        },
        {
          text: "Community DAO",
          collapsible: true,
          children: [
            "/governance/community-dao/overview",
            "/governance/community-dao/submit-contributions",
            "/governance/community-dao/educators",
            "/governance/community-dao/community-support",
            "/governance/community-dao/translators",
            "/governance/community-dao/other",
          ],
        },
        {
          text: "Validator DAO",
          collapsible: true,
          children: [
            "/governance/validator-dao/overview",
            "/governance/validator-dao/delegation-applications",
            "/governance/validator-dao/the-committee",
            "/governance/validator-dao/important-deadlines",
          ],
        },
      ],
      "/overview/": [
        {
          text: "UX",
          collapsible: true,
          children: [
            "/overview/umee-overview/introduction",
            "/overview/umee-overview/umee-vision",
            "/overview/umee-overview/security-audits",
            "/overview/umee-overview/umee-roadmap",
          ],
        },
        {
          text: "UDX",
          collapsible: true,
          children: [
            "/overview/udx/introduction",
            "/overview/udx/features",
            "/overview/udx/guardian-guild",
          ],
        },
        {
          text: "UX Token",
          collapsible: true,
          children: [
            "/overview/umee-token/token-utility",
            "/overview/umee-token/token-format",
            "/overview/umee-token/tokenomics",
          ],
        },
        {
          text: "FAQ",
          collapsible: true,
          children: [
            "/overview/faq/general",
            "/overview/faq/umee-token",
            "/overview/faq/umee-app",
          ],
        },
        {
          text: "Risk Parameters",
          collapsible: true,
          children: ["/overview/risk-parameters"],
        },
      ],
      "/learn-the-basics/": [
        {
          text: "Blockchain Basics",
          collapsible: true,
          children: [
            "/learn-the-basics/blockchain-basics/what-is-blockchain",
            "/learn-the-basics/blockchain-basics/types-of-blockchains",
          ],
        },
        {
          text: "Crypto Basics",
          collapsible: true,
          children: [
            "/learn-the-basics/crypto-basics/what-is-crypto",
            "/learn-the-basics/crypto-basics/what-is-web3",
            "/learn-the-basics/crypto-basics/types-of-crypto",
            "/learn-the-basics/crypto-basics/what-is-a-wallet",
            "/learn-the-basics/crypto-basics/what-is-dao",
            "/learn-the-basics/crypto-basics/bridges",
          ],
        },
        {
          text: "Staking Basics",
          collapsible: true,
          children: [
            "/learn-the-basics/staking-basics/what-is-staking",
            "/learn-the-basics/staking-basics/what-is-validator",
          ],
        },
        {
          text: "Cosmos Basics",
          collapsible: true,
          children: [
            "/learn-the-basics/cosmos-basics/what-is-cosmos",
            "/learn-the-basics/cosmos-basics/what-is-ibc",
            "/learn-the-basics/cosmos-basics/interchain-accounts",
            "/learn-the-basics/cosmos-basics/what-is-interchain-security",
          ],
        },
        {
          text: "DeFi Basics",
          collapsible: true,
          children: [
            "/learn-the-basics/defi-basics/what-is-defi",
            "/learn-the-basics/defi-basics/what-is-dex",
            "/learn-the-basics/defi-basics/what-is-defi-money-market",
            "/learn-the-basics/defi-basics/what-is-liquidity-mining",
          ],
        },
        {
          text: "UX Basics",
          collapsible: true,
          children: [
            "/learn-the-basics/UX-basics/introduction",
            "/learn-the-basics/UX-basics/asset-types",
            "/learn-the-basics/UX-basics/common-terms",
          ],
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
