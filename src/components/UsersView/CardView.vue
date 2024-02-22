<template>
  <div class="card" style="width: 18rem">
    <div class="card-header">
      <router-link
        class="text-decoration-none"
        :to="{ name: 'userId', params: { id: user.id } }"
        >{{ user.name }}</router-link
      >
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">username : {{ user.username }}</li>
      <li class="list-group-item">address : {{ user.address.street }}</li>
      <li class="list-group-item">geo : {{ user.address.geo.lat }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style></style>
