import { projectFirestore } from './firebase/config';

export const getData = async (collectionName) => {
  return projectFirestore
    .collection(collectionName)
    .get()
    .then((querySnapshot) => {
      return querySnapshot;
    });
};

export const addData = async (collectionName, objToAdd) => {
  return projectFirestore.collection(collectionName).doc().set(objToAdd);
};

export const getSnapshot = async (collectionName) => {
  return await projectFirestore.collection(collectionName).get();
};
