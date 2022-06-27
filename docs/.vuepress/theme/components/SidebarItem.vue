<script setup lang="ts">
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";
import DropdownTransition from "@vuepress/theme-default/lib/client/components/DropdownTransition.vue";
import { computed, ref, toRefs } from "vue";
import type { PropType } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { ResolvedSidebarItem } from "@vuepress/theme-default/lib/shared";
import { isActiveSidebarItem } from "@vuepress/theme-default/lib/client/utils";

const props = defineProps({
  item: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
});

const { item, depth } = toRefs(props);
const route = useRoute();
const router = useRouter();

const isActive = computed(() => isActiveSidebarItem(item.value, route));
const itemClass = computed(() => ({
  "sidebar-item": true,
  "sidebar-heading": depth.value === 0,
  active: isActive.value,
  collapsible: item.value.collapsible,
}));

const isOpen = ref(true);
const onClick = ref<(() => void) | undefined>(undefined);

if (item.value.collapsible) {
  // active item is open by default
  isOpen.value = isActive.value;
  // toggle open status on click
  onClick.value = () => {
    isOpen.value = !isOpen.value;
  };
  // reset open status after navigation
  router.afterEach(() => {
    isOpen.value = isActive.value;
  });
}
</script>

<template>
  <li>
    <AutoLink v-if="item.link" :class="itemClass" :item="item" />
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick"
    >
      <span
        v-if="item.collapsible"
        :class="['sidebar-circle', isOpen ? 'open' : '']"
      />
      {{ item.text }}
      <span
        v-if="item.collapsible"
        class="arrow"
        :class="isOpen ? 'down' : 'right'"
      />
    </p>

    <DropdownTransition v-if="item.children?.length">
      <ul
        v-show="isOpen"
        :class="['sidebar-item-children', isOpen ? 'open' : '']"
      >
        <SidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </DropdownTransition>
  </li>
</template>

<style lang="scss">
.sidebar-item.sidebar-heading.collapsible {
  display: flex;
  align-items: center;

  .arrow {
    display: none;
  }

  &:hover {
    .sidebar-circle {
      background: linear-gradient(135deg, #DDB4FF 0%, #4EFFE5 100%);
    }
  }

  .sidebar-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #b8b8b8;
    display: inline-block;
    margin-right: 1rem;
    transition: 0.1s;

    &.open {
      height: 2px;
      border-radius: 0;
      background: linear-gradient(90deg, #ddb4ff 0%, #4effe5 100%);
    }
  }
}

.sidebar-item.collapsible:not(.sidebar-heading) {
  cursor: pointer;
}

.sidebar-item.sidebar-heading.collapsible + .sidebar-item-children {
  margin-left: calc(1.25rem + 5px);

  &.open {
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(180deg, #ddb4ff 0%, #4effe5 100%) 0 0 0 1;
  }
}

.sidebar-item {
  border-left: none;
}

.sidebar-item.active:not(p.sidebar-heading) {
  border-left: none;
}

.sidebar-item.sidebar-heading {
  font-weight: normal;
}
</style>
