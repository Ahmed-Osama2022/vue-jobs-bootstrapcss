<script setup>
// JavaScript / TypeScript code here
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id);

watch(
  () => route.params.id,
  (newId) => {
    console.log('Card ID changed:', newId);
  },
);
</script>

<template>
  <div class="my-3 mx-2">
    <h3>Card View</h3>

    <p>Card no. {{ $route.params.id }}</p>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
