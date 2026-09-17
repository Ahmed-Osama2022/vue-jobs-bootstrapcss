<script setup>
// JavaScript / TypeScript code here
import image from '../assets/logo.svg';
import { RouterLink } from 'vue-router';

const props = defineProps({
  cardTitle: {
    type: String,
    required: true,
    default: 'Default Card Title',
  },
  cardText: {
    type: String,
    required: true,
    default: 'Default Card Text',
  },
  cardButtonText: {
    type: String,
    required: true,
    default: 'Default Button Text',
  },
  cardButtonLink: {
    type: String,
    required: false,
    default: '#',
  },
});

// const cards = 3;
</script>

<template>
  <!-- parent element -->

  <div class="card" style="width: 18rem">
    <img v-bind:src="image" class="card-img-top img-fluid" style="height: 100px" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ cardTitle }}</h5>
      <p class="card-text">
        {{ cardText }}
      </p>
      <RouterLink :to="cardButtonLink" class="btn btn-primary">{{ cardButtonText }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
