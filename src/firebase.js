import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDal5Wan-H5aDMjRMgxJG8-ONO1butJNRk",
  authDomain: "yuk-kerja-9b547.firebaseapp.com",
  databaseURL: "https://yuk-kerja-9b547-default-rtdb.firebaseio.com",
  projectId: "yuk-kerja-9b547",
  storageBucket: "yuk-kerja-9b547.appspot.com",
  messagingSenderId: "439522999628",
  appId: "1:439522999628:web:c79b36a3d72f19f577e3e9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export {db,auth};

