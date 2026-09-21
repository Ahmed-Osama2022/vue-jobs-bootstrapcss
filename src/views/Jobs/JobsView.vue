<script setup>
// JavaScript / TypeScript code here
import { ref, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { PulseLoader } from 'vue-spinner';
import { useToast } from 'vue-toastification';

// const jobs = ref([]);
const toast = useToast();

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

const deleteJob = async (jobId) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${jobId}`);
    state.jobs = state.jobs.filter((job) => job.id !== jobId);
    toast.warning('Job deleted successfully!');
  } catch (error) {
    toast.error('Job was not deleted!');
    console.error('Error deleting job:', error);
  }
};
</script>

<template>
  <div class="mt-3 mx-2">
    <div class="d-flex flex-row px-3 pt-3 align-items-center">
      <h3>All Jobs</h3>
      <div class="badge ms-3 bg-success fs-5">
        <strong>Count: {{ state.jobs.length }}</strong>
      </div>

      <RouterLink :to="{ name: 'add-job' }" type="button" class="ms-auto btn btn-outline-success"
        >Add Job <strong>+</strong></RouterLink
      >
    </div>
    <!-- <p v-if="state.isLoading" class="text-center">Loading jobs...</p> -->
    <p v-if="state.isLoading" class="text-center">
      <PulseLoader />
    </p>

    <ul v-else>
      <li class="d-flex align-content-center gap-2" v-for="job in state.jobs" :key="job.id">
        <RouterLink :to="`/jobs/${job.id}`"> {{ job.title }} - {{ job.type }} </RouterLink>
        <span class="delete-btn fs-3 text-danger ms-2" @click="deleteJob(job.id)">
          <i class="pi pi-times-circle"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Component scoped styles */
.delete-btn {
  cursor: pointer;
  transition: 0.1s all ease-in-out;
}
.delete-btn:active {
  transform: scale(0.9);
}
</style>
