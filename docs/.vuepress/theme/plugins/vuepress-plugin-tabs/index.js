const { path } = require("@vuepress/utils");

const tabsPlugin = (options, app) => {
  return (app) => {
    return {
      name: "vuepress-plugin-tabs",
      multiple: false,
      clientConfigFile: path.resolve(__dirname, "./client.js"),
      bundlerConfig: {
        scss: {
          includePath: ["./theme/tabs.scss"],
        },
      },
      extendsMarkdown: require("./markdownItPlugin")(options),
    };
  };
};

exports.tabsPlugin = tabsPlugin
