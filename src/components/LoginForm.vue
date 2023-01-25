<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

export default {
  setup(props, context) {
    const { error, login } = useLogin();
    const email = ref('');
    const password = ref('');
    const handleSubmit = async () => {
      // console.log(email.value, password.value);
      const res = await login(email.value, password.value);
      console.log(res);

      if (!error.value) {
        console.log('succeeded to login');
        context.emit('login');
      }
    };
    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
