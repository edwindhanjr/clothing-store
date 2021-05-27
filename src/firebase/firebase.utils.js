import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCzqdvDSBDlq_J1enBn3jduYj2uV9whzow",
    authDomain: "clothing-store-8ba6e.firebaseapp.com",
    projectId: "clothing-store-8ba6e",
    storageBucket: "clothing-store-8ba6e.appspot.com",
    messagingSenderId: "350930923148",
    appId: "1:350930923148:web:49ebe68761a8592f9dd5a9",
    measurementId: "G-GPM8KC6HK6"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  export const addCollectionsAndDocuments = async (collectionkey, objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionkey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections)=>{
    const transformedCollection = collections.docs.map(doc=>{
      const {title, items} = doc.data();
      return {
        routeName : encodeURI(title.toLowerCase()),
        id : doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection)=>{
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{})
  }
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
