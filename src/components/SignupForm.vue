<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    /><input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

export default {
  setup(props, context) {
    // eslint-disable-next-line no-unused-vars
    const { error, signup } = useSignup();
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const handleSubmit = async () => {
      // console.log(displayName.value, email.value, password.value);
      const res = await signup(email.value, password.value, displayName.value);
      console.log(res);

      if (!error.value) {
        console.log('succeeded to signup');
        context.emit('signup');
      }
    };
    return {
      displayName,
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
