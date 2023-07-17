<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToInbox = () => {
  router.push("/inbox");
};
</script>
<template>
  <div class="home">
    <div class="home__hero">
      <h1>Nuxt - Vue 3 Test (Coding) Test</h1>
      <AppButton @click="goToInbox" variant="primary"
        >Got to My Inbox</AppButton
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__hero {
    display: grid;
    justify-content: center;
    gap: 12px;
  }
}
</style>
