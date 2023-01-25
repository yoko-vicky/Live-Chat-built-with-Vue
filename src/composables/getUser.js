import { ref } from 'vue';
import { projectAuth } from '@/firebase/config';

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

if (user.value) {
  console.log('User state changed. Current User is: ', user.value.displayName);
}
const getUser = () => {
  return {
    user,
  };
};

export default getUser;
