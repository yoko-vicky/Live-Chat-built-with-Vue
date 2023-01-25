<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onUpdated } from 'vue';
import { formatDistanceToNow } from 'date-fns';
import getCollection from '@/composables/getCollection';

export default {
  setup() {
    const { error, documents } = getCollection('messages');

    // const
    const formattedDocuments = computed(() => {
      if (!documents.value) return;
      return documents.value.map((doc) => {
        // console.log('doc.createdAt', doc.createdAt);
        // console.log('doc.user', doc.user);
        let time = formatDistanceToNow(doc.createdAt.toDate());
        return { ...doc, createdAt: time };
      });
    });

    // auto-scroll to bottom of messages
    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return {
      error,
      formattedDocuments,
      messages,
    };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
  text-align: left;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
