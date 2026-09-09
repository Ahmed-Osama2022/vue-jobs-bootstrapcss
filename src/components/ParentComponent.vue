<script setup>
// JavaScript / TypeScript code here

defineProps({
  // Define any props that the ParentComponent might receive
  class: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <div :class="class">
    <slot></slot>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
