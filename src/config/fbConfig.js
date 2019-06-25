import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD4Ge4JmFTAEtVKC9pDtBAPvjSdWGP3AvU",
  authDomain: "marioplan-8fab9.firebaseapp.com",
  databaseURL: "https://marioplan-8fab9.firebaseio.com",
  projectId: "marioplan-8fab9",
  storageBucket: "",
  messagingSenderId: "775830023493",
  appId: "1:775830023493:web:ca68a9e3f33ea388"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
