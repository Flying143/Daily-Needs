import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAQa4A_eeborGZhPcjRIDs8hw3y_DRzq0M",
    authDomain: "daily-needs-143.firebaseapp.com",
    projectId: "daily-needs-143",
    storageBucket: "daily-needs-143.appspot.com",
    messagingSenderId: "226494859020",
    appId: "1:226494859020:web:5e66e8b87a0720c03aab29",
    measurementId: "G-XNBB51QZED"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const storage = firebase.storage();