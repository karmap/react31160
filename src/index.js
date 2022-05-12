import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJd43hvqcM-CF4yVO5a9Jxz52sAQ3Adq8",
  authDomain: "react31160.firebaseapp.com",
  projectId: "react31160",
  storageBucket: "react31160.appspot.com",
  messagingSenderId: "729654741556",
  appId: "1:729654741556:web:5a0e8907ffece08ba59861"
};
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
