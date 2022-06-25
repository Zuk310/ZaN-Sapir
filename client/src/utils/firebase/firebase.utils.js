import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAmq5zx92behzqpKk8oYblWT4EUilaQ_UM',
  authDomain: 'zan-sapir.firebaseapp.com',
  projectId: 'zan-sapir',
  storageBucket: 'zan-sapir.appspot.com',
  messagingSenderId: '642637207337',
  appId: '1:642637207337:web:6aa011986d65fd395e0938',
  measurementId: 'G-M7NRQJV08E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
