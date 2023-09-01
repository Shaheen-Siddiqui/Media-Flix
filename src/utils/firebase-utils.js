import { initializeApp } from "firebase/app";

//*-------------------------------------------------------------------*//

const firebaseConfig = {
  apiKey: "AIzaSyDAw2PL5pA9zOEHFBSss1w350-lEFNDD7Y",
  authDomain: "media-flix-db.firebaseapp.com",
  projectId: "media-flix-db",
  storageBucket: "media-flix-db.appspot.com",
  messagingSenderId: "196491081211",
  appId: "1:196491081211:web:07a022cac5a64882e5075e",
  databaseURL: "https://media-flix-db-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
