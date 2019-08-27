//import firebase from 'firebase'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD16pTTJj8CIVYnuSRa3DZDL3yR6drxXpk",
        authDomain: "nm-reload.firebaseapp.com",
        databaseURL: "https://nm-reload.firebaseio.com",
        projectId: "nm-reload",
        storageBucket: "nm-reload.appspot.com",
        messagingSenderId: "184490861446",
        appId: "1:184490861446:web:0657e18ed57abf74"
    });
const db = firebaseApp.firestore();
   
export { db }