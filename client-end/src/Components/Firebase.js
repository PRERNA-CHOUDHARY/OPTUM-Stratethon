import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
    apiKey: "<YOUR_API_KEY>",
    authDomain: "<YOUR_AUTH_DOMAIN>",
    databaseURL:
        "<YOUR_DATABASE_URL>",
    projectId: "<YOUR_PROJECT_ID>",
    storageBucket: "<YOUR_STORAGE_BUCKET>",
    messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
    appId: "<YOUR_APP_ID>",
});

const db = firebaseApp.firestore();

export { db };
