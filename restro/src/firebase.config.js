import{getApp, getApps, initializeApp}from "firebase/app";
import{getFirestore}from "firebase/firestore";
import{getStorage}from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAKa3OmOG7rPrlKbkmGdvM4Nsmq7t8C4Ag",
    authDomain: "restro-a6094.firebaseapp.com",
    databaseURL: "https://restro-a6094-default-rtdb.firebaseio.com",
    projectId: "restro-a6094",
    storageBucket: "restro-a6094.appspot.com",
    messagingSenderId: "829766074842",
    appId: "1:829766074842:web:a4730a9ba8033667d140e3",
    measurementId: "G-0T72JJ3RBM"
  };

  const app=getApps.Length>0?getApp():initializeApp(firebaseConfig);
const firestore=getFirestore(app);
const storage= getStorage(app); 
export{app, firestore, storage };