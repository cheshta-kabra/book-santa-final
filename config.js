import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCMn2fZx0mHJWs5PxXgwaNa3_scKSOmFMs",
    authDomain: "book-santa-85f93.firebaseapp.com",
    databaseURL: "https://book-santa-85f93.firebaseio.com",
    projectId: "book-santa-85f93",
    storageBucket: "book-santa-85f93.appspot.com",
    messagingSenderId: "70929282317",
    appId: "1:70929282317:web:cdaa7a21a84c2b35f6ac44"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
