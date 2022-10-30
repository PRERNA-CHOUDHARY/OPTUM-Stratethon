import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_u9eyu8hIww9XR0bRFwmzSI0DahqIoX4",
    authDomain: "medicwise-3c83c.firebaseapp.com",
    databaseURL:
        "https://medicwise-3c83c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "medicwise-3c83c",
    storageBucket: "medicwise-3c83c.appspot.com",
    messagingSenderId: "144538501156",
    appId: "1:144538501156:web:a99201d9ba8c4103a658b1",
});

const db = firebaseApp.firestore();

export { db };
