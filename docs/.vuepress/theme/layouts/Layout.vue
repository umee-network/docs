<template>
  <ParentLayout>
    <template #page-content-top>
      <breadcrumb :currentPaths="currentPaths" />
    </template>
    <template #page-bottom>
      <page-footer />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import PageFooter from "./PageFooter.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  data() {
    return {};
  },
  components: {
    ParentLayout,
    PageFooter,
    Breadcrumb,
  },
  computed: {
    currentPaths() {
      const currentPath = this.$route.path.slice(1);
      let path = "";
      if (currentPath.indexOf(".html") > -1) path = currentPath.slice(0, -5);
      else path = currentPath.slice(0, -1);
      let path_arr = [];
      path_arr = path ? path.split("/") : [];
      let paths = [];
      path_arr.forEach((path, index) => {
        let route = { label: path, link: "" };
        const pos = currentPath.indexOf("/", index + 1);
        if (index < path_arr.length - 1)
          route.link = "/" + currentPath.substring(0, pos);
        paths.push(route);
      });
      return paths;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/theme.scss";

.my-footer {
  text-align: center;
}
</style>
