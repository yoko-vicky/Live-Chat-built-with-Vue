import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import ChatroomView from '../views/ChatroomView.vue';
import { projectAuth } from '@/firebase/config';

// auth guard====
// Check if 'current user in firebase' exist or not before enter the chatroo
// Go user back to Welcome View if 'current user in firebase' does not exist,
// Otherwise, keep as it is
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  // console.log('current user in auth guard: ', user);
  if (!user) {
    next({ name: 'Welcome' });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: 'Chatroom' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView,
    beforeEnter: requireNoAuth,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomView,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
