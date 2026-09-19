<script setup>
// JavaScript / TypeScript code here
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const jobs = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + '/jobs'); // Use the API URL from .env
    jobs.value = response.data; // Access the "job" array from the JSON
    console.log(jobs.value);
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
});
</script>

<template>
  <div class="mt-3 mx-2">
    <h3>All Jobs</h3>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <RouterLink :to="`/jobs/${job.id}`"> {{ job.title }} - {{ job.type }} </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
