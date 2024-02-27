<template>
  <div v-if="loading">
    <button class="btn btn-warning" type="button" disabled>
      <span role="status">Loading...</span>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    </button>
  </div>
  <div v-else class="col-md-6 text-start">
    <div class="card">
      <div class="card-header">
        {{ post.title }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>
      <div class="card-footer">
        <button class="btn btn-danger btn-sm me-4">Delete</button>
        <button class="btn btn-sm btn-dark">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    getPost();

    return { post, loading };
  },
};
</script>

<style></style>
