// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDak99t6sfRxgqp9UB_PHUTsbNoooX4PKw",
  authDomain: "clone-379c9.firebaseapp.com",
  databaseURL: "https://clone-379c9.firebaseio.com",
  projectId: "clone-379c9",
  storageBucket: "clone-379c9.appspot.com",
  messagingSenderId: "340721896715",
  appId: "1:340721896715:web:bb689280a61c790381660e",
  measurementId: "G-WKRPFWGSHS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
