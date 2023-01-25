import { db } from './firebase/config';

export const getData = async (collectionName) => {
  return db
    .collection(collectionName)
    .get()
    .then((querySnapshot) => {
      return querySnapshot;
    });
};

export const addData = async (collectionName, objToAdd) => {
  return db.collection(collectionName).doc().set(objToAdd);
};

export const getSnapshot = async (collectionName) => {
  return await db.collection(collectionName).get();
};
