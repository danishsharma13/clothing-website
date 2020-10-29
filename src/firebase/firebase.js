import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVlq09PT93irayhTnw_zXX-gDoFRkAAVc",
    authDomain: "website-clothing.firebaseapp.com",
    databaseURL: "https://website-clothing.firebaseio.com",
    projectId: "website-clothing",
    storageBucket: "website-clothing.appspot.com",
    messagingSenderId: "868351740159",
    appId: "1:868351740159:web:2bf1a0512e528a3b2aa4ca",
    measurementId: "G-VF55B9LPJ0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;