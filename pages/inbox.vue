<script setup lang="ts">
import { useInbox } from "@/composables/useInbox";
import { ref } from "vue";
import type { Message } from "@/api/inbox";
import { useSelectAll } from "@/composables/useSelectAll";

const {
  messages,
  markAsRead,
  archive,
  openMessage,
  currentOpenMessage,
  selectedMessages
} = useInbox();
const { selectAll, selectAllLabel, indeterminate } = useSelectAll(
  messages,
  selectedMessages
);

const showDrawer = ref(false);
function handleMessageClick(message: Message) {
  openMessage(message);
  showDrawer.value = true;
}
</script>
<template>
  <main class="main">
    <div class="main__header">
      <AppCheckbox
        :label="selectAllLabel"
        v-model="selectAll"
        :indeterminate="indeterminate" />
      <div class="main__header__actions" v-show="selectedMessages.length > 0">
        <AppInboxActions @mark-as-read="markAsRead" @archive="archive" />
      </div>
    </div>
    <div v-if="messages.length === 0" class="main__spinner__wrapper">
      <AppSpinner />
    </div>

    <app-list
      v-else
      :items="messages"
      @item-click="handleMessageClick"
      item-key="id">
      <template #item="{ item }">
        <div class="list__item__message" :class="{ 'message--read': item.read }">
          <AppCheckbox :value="item" v-model="selectedMessages" />
          <span>
            {{ item.subject }}
          </span>
        </div>
      </template>
    </app-list>

    <app-drawer v-model="showDrawer">
      <template #actions>
        <AppInboxActions @markAsRead="markAsRead" @archive="archive" />
      </template>
      <template #title>
        {{ currentOpenMessage?.subject }}
      </template>
      <template #body>
        {{ currentOpenMessage?.body }}
      </template>
    </app-drawer>
  </main>
</template>

<style scoped lang="scss">
.main {
  font-size: 14px;
  color: black;
  font-weight: 600;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    border-bottom: 1px solid #ebebeb;

    &__actions {
      display: flex;
      align-items: center;
    }
  }
  .list {
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      &__message {
        display: flex;
        align-items: center;

        &--read {
          font-weight: 400;
          color: #121829;
          opacity: 0.5;
        }
      }
    }
  }
  &__spinner__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

</style>
