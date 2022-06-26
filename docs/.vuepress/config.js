const { path } = require("@vuepress/utils");
const { localTheme } = require("./theme");
const { palettePlugin } = require("@vuepress/plugin-palette");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");
const { mediumZoomPlugin } = require("@vuepress/plugin-medium-zoom");

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
            "/users/blockchain-basics/",
            "/users/getting-started/",
            "/users/staking-umee/",
            "/users/using-the-web-app/",
            "/users/governance/",
          ] }],
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
          ] }],
      "/validators/": [
        {
          title: "Validators",
          children: [
            "testnet-validator", 
            "mainnet-validator"],
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
          "price-feeder"
          ] },
        {
          title: "Networks", 
          children: [
          "joining-testnet",
          "joining-mainnet"
          ]}
        ],
      "/developers/modules/": [
        { 
          title: "Modules", 
          children: [
            "/modules/leverage/",
            "/modules/oracle/"
          ] }],
      "/overview/": [
        {
          title: "Overview",
          children: [
            "/overview/",
            "umee-token",
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
  ],
};
