<script setup>
// JavaScript / TypeScript code here
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const id = route.params.id;

let isExists = ref(true);

const job = ref(null);

const fetchJob = async (id) => {
  try {
    const id = route.params.id;
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/${id}`);

    isExists.value = true;
    job.value = response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      console.error('Job not found');
      isExists.value = false;

      setTimeout(() => {
        router.replace({ name: 'jobs' });
      }, 2000); // Redirect after 2 seconds
      // router.replace({ name: 'jobs' });
      return;
    }
    console.error('Error fetching job:', error);
  }
};

watch(
  () => route.params.id,
  (id) => {
    console.log('Job ID:', id);

    fetchJob(id);
  },

  { immediate: true },
);
</script>

<template>
  <div>
    <h3>Jobs View</h3>

    <p>{{ isExists ? `Job ID: ${job?.id}` : 'Job Not Found' }}</p>

    <p v-if="!isExists">Redirecting to jobs list...</p>

    <!-- <p class="my-5">
      {{ job ? `Job Title: ${job.title}` : 'Loading job details...' }}
    </p> -->

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ job?.title }}</h5>
        <p class="card-text">{{ job?.description }}</p>
        <a href="#" class="btn btn-primary">Apply Now</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
