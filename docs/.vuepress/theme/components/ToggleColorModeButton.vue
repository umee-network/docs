<script setup lang="ts">
import {
  useDarkMode,
  useThemeLocaleData,
} from "@vuepress/theme-default/lib/client";

const themeLocale = useThemeLocaleData();
const isDarkMode = useDarkMode();

const toggleColorMode = (): void => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <button
    class="toggle-color-mode-button"
    :title="themeLocale.toggleColorMode"
    @click="toggleColorMode"
  >
    <img v-if="isDarkMode" src="/img/dark-mode.svg" class="theme-toggle" />
    <img v-if="!isDarkMode" src="/img/light-mode.svg" class="theme-toggle" />
  </button>
</template>

<style scoped>
.theme-toggle {
  width: 22px;
  height: 23px;
}
</style>