<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const handleSubmit = () => {
      console.log(email.value, password.value);
    };
    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style></style>
