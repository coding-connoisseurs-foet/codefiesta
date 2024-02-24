import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router'

createApp(App).use(router).mount('#app')


// Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwtvf03oL3PMjBkP_oBGDvdgRlfzFpBQE",
  authDomain: "code-fiesta.firebaseapp.com",
  projectId: "code-fiesta",
  storageBucket: "code-fiesta.appspot.com",
  messagingSenderId: "203231202695",
  appId: "1:203231202695:web:8d5291d0c8b914e09dd722"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);