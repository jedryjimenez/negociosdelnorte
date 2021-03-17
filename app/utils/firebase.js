import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCN318OLK5xfON3i4bE5asPNenxEm9MBw0",
  authDomain: "negocios-norte.firebaseapp.com",
  projectId: "negocios-norte",
  storageBucket: "negocios-norte.appspot.com",
  messagingSenderId: "712706945585",
  appId: "1:712706945585:web:959de892933cb83822db10",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
