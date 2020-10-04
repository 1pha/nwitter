import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAnvHoQArciBFZ7TDzvPLwt8X0CyHdQkEo",
    authDomain: "nwitter-a1859.firebaseapp.com",
    databaseURL: "https://nwitter-a1859.firebaseio.com",
    projectId: "nwitter-a1859",
    storageBucket: "nwitter-a1859.appspot.com",
    messagingSenderId: "387171531223",
    appId: "1:387171531223:web:4999b3edfabaea131e3392"
  };

  export default firebase.initializeApp(firebaseConfig);