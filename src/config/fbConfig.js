import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA7goZdLE72Ymg8xxQt_0mdYEqMuXbTeVw",
  authDomain: "fir-95349.firebaseapp.com",
  databaseURL: "https://fir-95349.firebaseio.com",
  projectId: "fir-95349",
  storageBucket: "fir-95349.appspot.com",
  messagingSenderId: "313240019061"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

