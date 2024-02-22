<template>
  <div v-if="loading">
    <button class="btn btn-warning" type="button" disabled>
      <span role="status">Loading...</span>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    </button>
  </div>
  <div v-else class="col-md-3">
    <UserCardView :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardView from "@/components/UsersView/CardView.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    UserCardView,
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    getUser();

    return { user, loading };
  },
};
</script>

<style></style>
