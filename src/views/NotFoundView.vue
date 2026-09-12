<script setup>
// JavaScript / TypeScript code here
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="text-center d-flex justify-content-center align-items-center flex-column gap-2">
    <i class="pi pi-exclamation-triangle text-danger display-1 fw-bold my-4"></i>
    <h1 class="fs-1 font-bold mb-4">404 Not Found</h1>
    <p class="fs-6 text-muted mb-4">This page does not exist</p>
    <RouterLink to="/" class="bg-success text-white text-decoration-none rounded-3 px-3 py-2 mt-4"
      >Go Home</RouterLink
    >
  </section>
</template>

<style scoped>
/* Component scoped styles */
</style>
w
