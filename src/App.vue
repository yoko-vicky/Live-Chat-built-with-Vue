<template>
  <div class="title-container">
    <div class="icon"><CoffeeIcon :size="36" /></div>
    <h1 class="main-title">Let's talk on Live Chatroom</h1>
  </div>
  <router-view />
</template>

<script>
import CoffeeIcon from 'vue-material-design-icons/Coffee.vue';

export default {
  components: {
    CoffeeIcon,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.main-title {
  margin: 10px auto 20px;
}

.title-container {
  margin: 40px auto 0;
}

.icon {
  margin-right: 16px;
}
</style>
