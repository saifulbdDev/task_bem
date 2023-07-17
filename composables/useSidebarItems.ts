import { useRoute, useRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { computed } from "vue";
import { useArchiveStore } from "@/stores/archive";
import { useInboxStore } from "@/stores/inbox";
import ArchiveIcon from "@/components/icon/ArchiveIcon.vue";

import InboxIcon from "@/components/icon/InboxIcon.vue";
export function useSidebarItems() {
  const inboxStore = useInboxStore();
  const archiveStore = useArchiveStore();

  const router = useRouter();

  function getCount(route: RouteRecordRaw) {
    if (route.name === "inbox") {
      return inboxStore.messages.length;
    }
    if (route.name === "archive") {
      return archiveStore.archivedMessages.length;
    }
    return 0;
  }
  const routes = computed(() =>
    router
      .getRoutes()
      .filter((route) => route.name !== "index")
      .map((route) => {
        const meta = route.meta;
        return {
          ...route,
          meta: {
            ...meta,
            icon: route.name === "inbox" ? InboxIcon : ArchiveIcon,
            count: getCount(route)
          }
        };
      }).sort((a, b) => b?.name?.localeCompare(a?.name))
  );
  const route = useRoute();

  const activeItemPath = computed(() => route.path);

  const isActive = (item: RouteRecordRaw) => {
    return {
      "sidebar__item--active": activeItemPath.value === item.path
    };
  };

  return {
    items: routes,
    isActive
  };
}
