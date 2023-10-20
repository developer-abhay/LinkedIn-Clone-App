import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3mk0gpKHXBQ0qant4ndHrttZvQowUmXI",
  authDomain: "linkedin-a29a5.firebaseapp.com",
  projectId: "linkedin-a29a5",
  storageBucket: "linkedin-a29a5.appspot.com",
  messagingSenderId: "538065251542",
  appId: "1:538065251542:web:72b0b0110dc18bd9dfad77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db, auth };
