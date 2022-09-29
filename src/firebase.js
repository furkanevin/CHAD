import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD50ApoOhSBcLOJBg3xVxoCtClgyJqbCjg',
  authDomain: 'chad-d.firebaseapp.com',
  projectId: 'chad-d',
  storageBucket: 'chad-d.appspot.com',
  messagingSenderId: '114952129848',
  appId: '1:114952129848:web:3e19e87f7fb0045c0505cd',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
