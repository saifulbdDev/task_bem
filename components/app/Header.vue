<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <header class="main-layout__header">
    <h1 class="main-layout__header__title" v-if="route.name === 'index'">Home</h1>
    <h1 class="main-layout__header__title" v-else>{{ route.name  }}</h1>
  </header>
</template>

<style scoped>
.main-layout__header__title {
  
}
</style>
