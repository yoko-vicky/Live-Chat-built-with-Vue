import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collectionName)
    .orderBy('createdAt');

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err);
      documents.value = null;
      error.value = "Couldn't fetch data";
    },
  );

  return {
    error,
    documents,
  };
};

export default getCollection;
