import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCyLiw8_Hb5Hr_mrYEd2fF6zIoZcIK46eo",
    authDomain: "chatappvue-45153.firebaseapp.com",
    databaseURL: "https://chatappvue-45153.firebaseio.com",
    projectId: "chatappvue-45153",
    storageBucket: "chatappvue-45153.appspot.com",
    messagingSenderId: "868320663474",
    appId: "1:868320663474:web:8b033c06be8eafb15236ab",
    measurementId: "G-SLTSD1C7FB"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;