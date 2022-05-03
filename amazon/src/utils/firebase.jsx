// Setting up the firebase in the project

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCaCmjGI-hU2NHcB1CsQY-PdkyVzbLUvSw",
    authDomain: "clone-bd278.firebaseapp.com",
    projectId: "clone-bd278",
    storageBucket: "clone-bd278.appspot.com",
    messagingSenderId: "796860913356",
    appId: "1:796860913356:web:b66d336bf20acf9c565469"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export{db, auth}