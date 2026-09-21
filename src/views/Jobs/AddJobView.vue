<script setup>
import { reactive } from 'vue';
// import { defineEmits } from 'vue';
import logoImage from '@/assets/logo.svg';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const job = reactive({
  type: 'Full-Time',
  name: '',
  description: '',
  salary: 'Under $50K',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
});

const router = useRouter();
const toast = useToast();
// const emit = defineEmits(['job-added']);

// function handleSubmit() {
//   // Replace with your API call / store action
//   console.log('New job submitted:', { ...job });
//   emit('job-added', { ...job });
// }

const handleSubmit = async () => {
  // console.log('New job submitted:', { ...job });

  const newJob = {
    title: job.title,
    type: job.type,
    name: job.name,
    description: job.description,
    salary: job.salary,
    location: job.location,
    company: {
      name: job.company.name,
      description: job.company.description,
      contactEmail: job.company.contactEmail,
      contactPhone: job.company.contactPhone,
    },
  };
  console.log('New job submitted:', newJob); // TEST:

  // Api call to submit the job data to the backend (Add the job to the database)
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/jobs', newJob);
    console.log('Job added successfully:', response.data);

    // TODO: - show toast notification for success
    // console.log(response.data.id); // TEST:
    router.push(`/jobs/${response.data.id}`); // Navigate to the newjob page after successful submission
    toast.success('Job added successfully!');
    // Optionally, you can reset the form or navigate to another page
  } catch (error) {
    toast.error('Job was not added!');
    console.error('Error adding job:', error);
  }
};

// Loop for the options
const options = ['Full-Time', 'Part-Time', 'Remote', 'Internship'];
</script>
<template>
  <div>
    <!-- Navbar -->
    <!-- <nav class="navbar navbar-expand-md navbar-dark bg-nav border-bottom">
      <div class="container-fluid px-3 px-lg-5">
        <RouterLink class="navbar-brand d-flex align-items-center" to="/">
          <img :src="logoImage" alt="Vue Jobs" class="logo-img me-2" />
          <span class="fw-bold fs-4">Vue Jobs</span>
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul class="navbar-nav gap-2">
            <li class="nav-item">
              <router-link class="nav-link nav-pill" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-pill" to="/jobs">Jobs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link nav-pill nav-pill-active" to="/add-job"
                >Add Job</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <!-- Form section -->
    <section class="bg-page py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-9 col-lg-7">
            <div class="card form-card shadow-sm border-0">
              <div class="card-body p-4 p-md-5">
                <h2 class="text-center fw-semibold mb-4">Add Job</h2>

                <form @submit.prevent="handleSubmit">
                  <!-- Job title -->
                  <div class="mb-3">
                    <label for="title" class="form-label fw-bold">Job Title</label>
                    <input
                      id="title"
                      v-model="job.title"
                      type="text"
                      class="form-control"
                      placeholder="eg. Senior Vue Developer"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="type" class="form-label fw-bold">Job Type</label>
                    <select id="type" v-model="job.type" class="form-select" required>
                      <!-- <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Remote">Remote</option>
                      <option value="Internship">Internship</option> -->
                      <option v-for="(option, index) in options" :key="index" :value="option">
                        {{ option }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="name" class="form-label fw-bold">Job Listing Name</label>
                    <input
                      id="name"
                      v-model="job.name"
                      type="text"
                      class="form-control"
                      placeholder="eg. Beautiful Apartment In Miami"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="description" class="form-label fw-bold">Description</label>
                    <textarea
                      id="description"
                      v-model="job.description"
                      class="form-control"
                      rows="4"
                      placeholder="Add any job duties, expectations, requirements, etc"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="salary" class="form-label fw-bold">Salary</label>
                    <select id="salary" v-model="job.salary" class="form-select" required>
                      <option value="Under $50K">under $50K</option>
                      <option value="$50K - $60K">$50 - $60K</option>
                      <option value="$60K - $70K">$60 - $70K</option>
                      <option value="$70K - $80K">$70 - $80K</option>
                      <option value="$80K - $90K">$80 - $90K</option>
                      <option value="$90K - $100K">$90 - $100K</option>
                      <option value="$100K - $125K">$100 - $125K</option>
                      <option value="$125K - $150K">$125 - $150K</option>
                      <option value="$150K - $175K">$150 - $175K</option>
                      <option value="$175K - $200K">$175 - $200K</option>
                      <option value="Over $200K">Over $200K</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="location" class="form-label fw-bold">Location</label>
                    <input
                      id="location"
                      v-model="job.location"
                      type="text"
                      class="form-control"
                      placeholder="Company Location"
                      required
                    />
                  </div>

                  <h3 class="fs-4 mb-3 mt-4">Company Info</h3>

                  <div class="mb-3">
                    <label for="company" class="form-label fw-bold">Company Name</label>
                    <input
                      id="company"
                      v-model="job.company.name"
                      type="text"
                      class="form-control"
                      placeholder="Company Name"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="company_description" class="form-label fw-bold">Company Description</label>
                    <textarea
                      id="company_description"
                      v-model="job.company.description"
                      class="form-control"
                      rows="4"
                      placeholder="What does your company do?"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="contact_email" class="form-label fw-bold">Contact Email</label>
                    <input
                      id="contact_email"
                      v-model="job.company.contactEmail"
                      type="email"
                      class="form-control"
                      placeholder="Email address for applicants"
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <label for="contact_phone" class="form-label fw-bold">Contact Phone</label>
                    <input
                      id="contact_phone"
                      v-model="job.company.contactPhone"
                      type="tel"
                      class="form-control"
                      placeholder="Optional phone for applicants"
                    />
                  </div>

                  <div class="d-grid">
                    <button type="submit" class="btn btn-submit fw-bold py-2">Add Job</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-nav {
  background-color: #15803d; /* green-700 */
}

.logo-img {
  height: 2.5rem;
  width: auto;
}

.nav-pill {
  color: #fff;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  transition: background-color 0.15s ease-in-out;
}

.nav-pill:hover {
  background-color: #111827; /* gray-900 */
  color: #fff;
}

.nav-pill-active {
  background-color: #14532d; /* green-900 */
}

.bg-page {
  background-color: #f0fdf4; /* green-50 */
  min-height: calc(100vh - 80px);
}

.form-card {
  border-radius: 0.5rem;
}

.btn-submit {
  background-color: #22c55e; /* green-500 */
  border: none;
  color: #fff;
  border-radius: 9999px;
}

.btn-submit:hover {
  background-color: #16a34a; /* green-600 */
  color: #fff;
}

.btn-submit:focus {
  box-shadow: 0 0 0 0.2rem rgba(34, 197, 94, 0.4);
}
</style>
