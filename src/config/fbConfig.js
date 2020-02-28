import firebase from 'firebase/app'
import 'firebase/firestore';
import'firebase/auth';

const fbConfig = {
    apiKey: "AIzaSyCZgzYP49bgVgHAFm_IBhAm49EDFhOl8FE",
    authDomain: "control-35f3f.firebaseapp.com",
    databaseURL: "https://control-35f3f.firebaseio.com",
    projectId: "control-35f3f",
    storageBucket: "control-35f3f.appspot.com",
    messagingSenderId: "752139203852",
    appId: "1:752139203852:web:d1f2105420ee2a77898529",
    measurementId: "G-7KG52D0EW5"
  };

  
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  export const db = firebase.firestore();

  export default fbConfig;