<script setup lang="ts">
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client'

defineEmits(['toggle'])

const themeLocale = useThemeLocaleData()
</script>

<template>
  <div
    class="toggle-sidebar-button"
    :title="themeLocale.toggleSidebar"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="$emit('toggle')"
  >
    <div class="icon" aria-hidden="true">
      <img src="/img/Hamburger.svg" />
    </div>
  </div>
</template>