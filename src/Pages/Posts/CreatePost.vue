<!-- <template>
  <div class="col-md-6">
    <h2 class="mb-3">Create Post :</h2>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          v-model.lazy.trim="form.title"
        />
        <p v-if="errors.title" class="form-text text-danger">
          {{ errors.title.value }}
        </p>
      </div>
      <div class="mb-3">
        <label class="form-label">Body</label>
        <textarea
          class="form-control"
          cols="30"
          rows="10"
          v-model.lazy="form.body"
        ></textarea>
        <div v-if="errors.body" class="form-text text-danger">
          {{ errors.body }}
        </div>
      </div>
      <button type="submit" class="btn btn-dark" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Create Post
      </button>
    </form>
  </div>
</template> -->

<!-- <script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import * as Yup from "yup";

export default {
  setup() {
    const form = ref({
      title: "",
      body: "",
    });

    const errors = ref({});
    const loading = ref(false);

    const schema = Yup.object().shape({
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Body is required"),
    });

    const createPost = () => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.value.title,
          body: form.value.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;
          Swal.fire({
            title: "Thanks!",
            text: "Post Created Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const submitForm = async () => {
      try {
        await schema.validate(form.value);
        errors.value = {};
        loading.value = true;
        createPost();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            errors.value[error.path] = error.message;
          });
        }
      }
    };

    return { form, submitForm, loading, errors };
  },
};
</script> -->

<!-- ---------------- -->
<template>
  <form @submit="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="form.name" type="text" />
      <p class="text-danger" v-if="errors.name">{{ errors.name }}</p>
    </div>

    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="form.email" type="email" />
      <p v-if="errors.email">{{ errors.email }}</p>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";
import * as yup from "yup";

export default {
  setup() {
    const form = ref({
      name: "",
      email: "",
    });

    const schema = yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .email("Email is not valid")
        .required("Email is required"),
    });

    const errors = ref({});

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await schema.validate(form.value, { abortEarly: false });
        errors.value = {};
        // form is valid, you can submit it
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          err.inner.forEach((error) => {
            errors.value[error.path] = error.message;
          });
        }
      }
    };

    return {
      form,
      errors,
      handleSubmit,
    };
  },
};
</script>

<style></style>
