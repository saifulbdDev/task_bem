<script setup lang="ts">
import { useKeyboardEventListener } from "@/composables/useKeyboardEventListener";
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["update:modelValue"]);

const close = () => {
  emit("update:modelValue", false);
};

function onkeyup(event: KeyboardEvent) {
  if (event.key === "Escape") {
    close();
  }
}
useKeyboardEventListener("keyup", onkeyup);
</script>
<template>
  <Teleport to="body">
    <Transition name="drawer-slide">
      <div v-if="modelValue" class="drawer">
        <div class="drawer__overlay" @click="close"></div>
        <div class="drawer__content">
          <div class="drawer__top">
            <AppButton class="drawer__close" @click="close" variant="text">
              <template #prepend>
                <IconCloseIcon />
              </template>
              Close (Esc)
            </AppButton>

            <div class="drawer__actions">
              <slot name="actions" />
            </div>
          </div>
          <div class="drawer__header">
            <h2 class="drawer__title">
              <slot name="title"></slot>
            </h2>
          </div>
          <div class="drawer__body">
            <p>
              <slot name="body"></slot>
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__content {
    position: relative;
    height: 100%;
    overflow: auto;
    background-color: white;
    padding: 32px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: #121829;
  }

  &__close {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  &__body {
    font-size: 14px;
    color: #4b5563;
  }

  &-slide-enter-active {
    animation: drawer-slide-in 0.3s ease-out forwards;
  }

  &-slide-leave-active {
    animation: drawer-slide-out 0.3s ease-out forwards;
  }
}

@keyframes drawer-slide-in {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes drawer-slide-out {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}
</style>
