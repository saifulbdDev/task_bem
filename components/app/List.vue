<script setup lang="ts" generic="T extends Item">
export interface Item {
  [key: string]: any;
}
defineProps<{
  items: T[];
  itemKey: string;
}>();

const emit = defineEmits(["item-click"]);
function onItemClick(item: T) {
  emit("item-click", item);
}
</script>
<template>
  <ul class="list">
    <li
      v-for="item in items"
      :key="item[itemKey]"
      :class="{ list__read: item.read }"
      class="list__item"
      @click="onItemClick(item)">
      <slot name="item" :item="item" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  &__read{
    background-color: #f3f6fb;
  }

  &__item {
    border-bottom: 1px solid #e5e7eb;
    padding: 0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #f3f6fb;
    }
  }
}
</style>
