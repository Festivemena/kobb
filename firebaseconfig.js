//Import the functions you need from the SDKs you need 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
//TODO: Add SDKs for Firebase products that you want to use 
//https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration

const firebaseconfig = {
    apiKey: "AIzaSyDvZknmRUBX4qSBmt8JqkMWE3NUb2kMRmM",
    authDomain: "kosb-49ccc.firebaseapp.com",
    projectId: "kosb-49ccc",
    storageBucket: "kosb-49ccc.appspot.com",
    messagingSenderId: "166123037103",
    appId: "1:166123037103:web:16ac1d4b4fadec0fc6cf5a"
};

//Initialize Firebase

const app = initializeApp(firebaseconfig);
const auth = getAuth();

export {auth}