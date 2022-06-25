<template>
  <a class="app-link" v-if="external" :href="link" target="_blank"><slot /></a>
  <router-link class="app-link" v-else :to="{ path: link }"><slot /></router-link>
</template>

<script>
export default {
  props: {
    external: false,
    link: "",
  },
};
</script>

<style>
.app-link {
  display: inline-block;
}
</style>
