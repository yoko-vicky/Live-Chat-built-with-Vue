<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

export default {
  components: { NavBar, NewChatForm, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    // Redirect User to Welcome View if 'current user in firebase' does not exist (meaning the user logged out)
    // not only when entering the chatroom but after entering and during staying in chatroom

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });
    return {};
  },
};
</script>

<style></style>
