<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useSidebarItems } from "@/composables/useSidebarItems";
import logo from "@/assets/logo.png";

const { items, isActive } = useSidebarItems();


</script>
<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img :src="logo" alt="my email service logo" />
    </div>
    <nav>
      <ul>
        <li v-for="item in items" :key="item.path">
          <RouterLink
            :to="item.path"
            class="sidebar__item"
            :class="isActive(item)">
            <component :is="item.meta.icon" class="sidebar__item__icon" />
            <span class="sidebar__item__title">{{ item.name }}</span>
            <span class="sidebar__item__meta">{{ item.meta.count }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="sidebar__logout">
      <AppButton variant="text">
        <template #prepend>
          <IconLogoutIcon />
        </template>
        Logout
      </AppButton>
    </div>
  </aside>
</template>

<style scoped>
.sidebar__logout {
  background-color: #f8fafc;
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  width: 100%;
  text-align: center;
}
</style>
