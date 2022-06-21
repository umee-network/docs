<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="rounded shadow-lg w-1/2 m-10 p-5 bg-green">This is my custom page footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@import '../styles/theme.scss';

.my-footer {
  text-align: center;
}
</style>