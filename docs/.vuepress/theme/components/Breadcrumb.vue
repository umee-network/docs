<template>
  <div class="page-breadcrumb" v-if="currentPaths.length">
    <router-link class="breadcrumb" to="/">Docs</router-link>
    <span v-for="(path, index) in currentPaths" :key="index"
      >&nbsp;//&nbsp;<router-link :to="path.link" class="breadcrumb">{{
        path.label.replace(/-/g, " ")
      }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    currentPaths: [] | undefined,
  },
};
</script>

<style>
.page-breadcrumb {
  text-transform: uppercase;
  margin-bottom: -1rem;
}
</style>
