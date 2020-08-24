import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-25p7UrqrNETuRX2KN3cA6z4P_4a4NMQ",
    authDomain: "tinder-clone-87c4b.firebaseapp.com",
    databaseURL: "https://tinder-clone-87c4b.firebaseio.com",
    projectId: "tinder-clone-87c4b",
    storageBucket: "tinder-clone-87c4b.appspot.com",
    messagingSenderId: "70368016840",
    appId: "1:70368016840:web:924feef787574615be68fd",
    measurementId: "G-97FGD2MJ8F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;