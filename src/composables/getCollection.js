import { ref, watchEffect } from 'vue';
import { projectFirestore } from '@/firebase/config';

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collectionName)
    .orderBy('createdAt');

  const unSubscribe = collectionRef.onSnapshot(
    (snap) => {
      console.log('snapshot');
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt &&
          results.push({
            ...doc.data(),
            id: doc.id,
          });
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

  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unSubscribe());
  });

  return {
    error,
    documents,
  };
};

export default getCollection;
