import type { Theme } from "@vuepress/core";
import { defaultTheme } from "@vuepress/theme-default";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: "vuepress-theme-local",
    extends: defaultTheme(options),
    layouts: { Layout: path.resolve(__dirname, "layouts/Layout.vue") },
    alias: {
      "@theme/ToggleColorModeButton.vue": path.resolve(
        __dirname,
        "./components/ToggleColorModeButton.vue"
      ),
      '@theme/NavbarItems.vue': path.resolve(__dirname, 'components/NavbarItems.vue'),
      '@theme/ToggleSidebarButton.vue': path.resolve(__dirname, 'components/ToggleSidebarButton.vue'),
    },
  };
};
