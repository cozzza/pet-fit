import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqPYlFESP-9mps-oh-PEO6KuZFgMOtT2k",
    authDomain: "petfit-e48b5.firebaseapp.com",
    projectId: "petfit-e48b5",
    storageBucket: "petfit-e48b5.appspot.com",
    messagingSenderId: "820681383432",
    appId: "1:820681383432:web:2b10adf56ea8860181bbbd",
    measurementId: "G-M0ZHLD012F"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}

