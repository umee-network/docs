<template>
  <a v-if="external" :href="link" target="_blank"><slot /></a>
  <router-link v-else :to="{ path: link }"><slot /></router-link>
</template>

<script>
export default {
  props: {
    external: false,
    link: "",
  },
};
</script>
