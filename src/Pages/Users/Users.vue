<template>
  <div v-if="loading">
    <button class="btn btn-warning" type="button" disabled>
      <span role="status">Loading...</span>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    </button>
  </div>
  <div v-else class="col-md-3" v-for="user in users" :key="user.id">
    <UserCardView :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardView from "@/components/UsersView/CardView.vue";

export default {
  components: {
    UserCardView,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    getUsers();

    return { users, loading };
  },
};
</script>

<style></style>
