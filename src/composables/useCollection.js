import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';

const useCollection = (collectionName) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collectionName).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Couldn't send the message";
    }
  };

  return {
    error,
    addDoc,
  };
};

export default useCollection;
