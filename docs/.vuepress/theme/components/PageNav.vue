<script setup lang="ts">
import PageNavLink from "./PageNavLink.vue";
import { usePageFrontmatter } from "@vuepress/client";
import { isPlainObject, isString } from "@vuepress/shared";
import { computed } from "vue";
import { useRoute } from "vue-router";
import type {
  DefaultThemeNormalPageFrontmatter,
  NavLink,
  ResolvedSidebarItem,
} from "@vuepress/theme-default/lib/shared";
import {
  useNavLink,
  useSidebarItems,
} from "@vuepress/theme-default/lib/client";

/**
 * Resolve `prev` or `next` config from frontmatter
 */
const resolveFromFrontmatterConfig = (
  conf: unknown
): null | false | NavLink => {
  if (conf === false) {
    return null;
  }

  if (isString(conf)) {
    return useNavLink(conf);
  }

  if (isPlainObject<NavLink>(conf)) {
    return conf;
  }

  return false;
};

/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (
  sidebarItems: ResolvedSidebarItem[],
  currentPath: string,
  offset: number
): null | NavLink => {
  const index = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset];
    if (!targetItem?.link) {
      return null;
    }
    return targetItem as NavLink;
  }

  for (const item of sidebarItems) {
    if (item.children) {
      const childResult = resolveFromSidebarItems(
        item.children,
        currentPath,
        offset
      );
      if (childResult) {
        return childResult;
      }
    }
  }

  return null;
};

const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
const sidebarItems = useSidebarItems();
const route = useRoute();

const prevNavLink = computed(() => {
  const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
  if (prevConfig !== false) {
    return prevConfig;
  }

  return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
});

const nextNavLink = computed(() => {
  const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
  if (nextConfig !== false) {
    return nextConfig;
  }

  return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
});
</script>

<template>
  <nav v-if="prevNavLink || nextNavLink" class="page-nav">
    <PageNavLink
      class="prev-nav"
      v-if="prevNavLink"
      :item="prevNavLink"
      :isPrev="true"
    />

    <PageNavLink
      class="next-nav"
      v-if="nextNavLink"
      :item="nextNavLink"
      :isPrev="false"
    />
  </nav>
</template>

<style lang="scss">
.page-nav {
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .prev-nav {
    .page-nav-link {
      flex-direction: row-reverse;
    }
  }

  a {
    transition: 0.3s;
    width: 100%;
    max-width: 280px;
    margin: 0 1rem;

    &:hover {
      box-shadow: var(--box-shadow);
      transform: translateY(-2px);
    }
    &:active {
      box-shadow: none;
      transform: none;
      opacity: 0.5;
    }
  }

  @media(max-width: 768px) {
    display: block;

    a {
      margin: 0;

      &:last-child {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
