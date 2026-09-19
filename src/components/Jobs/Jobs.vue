<script setup>
// JavaScript / TypeScript code here
import { ref, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { PulseLoader } from 'vue-spinner';

// const jobs = ref([]);

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + '/jobs'); // Use the API URL from .env
    state.jobs = response.data; // Access the "job" array from the JSON
    console.log(state.jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div class="mt-3 mx-2">
    <h3>All Jobs</h3>
    <!-- <p v-if="state.isLoading" class="text-center">Loading jobs...</p> -->
    <p v-if="state.isLoading" class="text-center">
      <PulseLoader />
    </p>

    <ul v-else>
      <li v-for="job in state.jobs" :key="job.id">
        <RouterLink :to="`/jobs/${job.id}`"> {{ job.title }} - {{ job.type }} </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
