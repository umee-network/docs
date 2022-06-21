<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import PageFooter from './PageFooter.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <page-footer />
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@import '../styles/theme.scss';

.my-footer {
  text-align: center;
}
</style>