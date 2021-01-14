import firebase from "firebase/app";
import "firebase/auth";

var MFAConfig = {
    apiKey: "AIzaSyBy5bvzeRcurEw7MTsiOllSFSIByH2_Dqc",
    authDomain: "persfullstackapp.firebaseapp.com",
};


if (!firebase.apps.length) {
    firebase.initializeApp(MFAConfig);
  }
  
export default firebase;  