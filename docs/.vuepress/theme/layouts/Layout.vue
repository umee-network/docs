<template>
  <ParentLayout>
    <template #page-content-top>
      <breadcrumb :currentPaths="currentPaths" />
    </template>
    <template #page-bottom>
      <page-footer />
    </template>
    <template #sidebar-bottom>
      <sidebar-bottom />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import PageFooter from "./PageFooter.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import SidebarBottom from '../components/SidebarBottom.vue';

export default {
  data() {
    return {};
  },
  mounted() {
    if (window.dataLayer && window.gtag) {
      return;
    }
    // insert gtag `<script>` tag
    const gtagScript = document.createElement('script');
    const gtmId = 'GTM-N3TTX43'

    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);
    // insert gtag snippet
    window.dataLayer = window.dataLayer || [];
    // the gtag function must use `arguments` object to forward parameters
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', id);
  },
  components: {
    ParentLayout,
    PageFooter,
    Breadcrumb,
    SidebarBottom,
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

      var indices = [];
      for (var i = 0; i < currentPath.length; i++) {
        if (currentPath[i] === "/") indices.push(i);
      }

      path_arr.forEach((path, index) => {
        let route = { label: path, link: "" };
        if (index < path_arr.length - 1)
          route.link =
            "/" + currentPath.substring(0, indices[index]);
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
