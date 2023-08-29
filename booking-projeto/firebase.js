
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQP5O3U19tjrI_fUbwRWeyKBRmITquPPw",
    authDomain: "teste-b8d70.firebaseapp.com",
    projectId: "teste-b8d70",
    storageBucket: "teste-b8d70.appspot.com",
    messagingSenderId: "973414371983",
    appId: "1:973414371983:web:ef8e559e22f22dd91e16fa",
    measurementId: "G-P6DXZK7NYW"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};