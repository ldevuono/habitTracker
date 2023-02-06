// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDUWp63u9hxGOD_uCL2WHOok-jbW_6BHkA",
    authDomain: "tacktrask.firebaseapp.com",
    databaseURL: "https://tacktrask-default-rtdb.firebaseio.com",
    projectId: "tacktrask",
    storageBucket: "tacktrask.appspot.com",
    messagingSenderId: "635190667648",
    appId: "1:635190667648:web:4da5e88f7c38ed84f0f965"
};

// Initialize Firebase
const firebase = initializeApp(config);
export default firebase;