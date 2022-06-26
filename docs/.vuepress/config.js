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
      "/users/": [{ title: "Users", children: [] }],
      "/validators/": [
        {
          title: "Users",
          children: ["testnet-validator", "mainnet-validator"],
        },
      ],
      "/developers/": [{ title: "Developers", children: [] }],
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
    tabsPlugin({})
  ],
};
