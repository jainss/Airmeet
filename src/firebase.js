import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCwA4NtLEd6BTUXr6AoUnL6_u_jILAxYIA",
  authDomain: "airmeet-9e12e.firebaseapp.com",
  databaseURL: 'https://airmeet-9e12e-default-rtdb.firebaseio.com/',
  projectId: "airmeet-9e12e",
  storageBucket: "airmeet-9e12e.appspot.com",
  messagingSenderId: "1065554454173",
  appId: "1:1065554454173:web:4d0eaed34b0411a81b5674",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
