import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCaELQm8jv7ROSIFjpEeu3LjXmMy8L4MPk",
    authDomain: "clone-8da95.firebaseapp.com",
    projectId: "clone-8da95",
    storageBucket: "clone-8da95.appspot.com",
    messagingSenderId: "970027002298",
    appId: "1:970027002298:web:753230977063c62d8dd583"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }