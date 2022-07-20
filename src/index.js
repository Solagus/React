import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDad9AkoU6uKlnicqovzKs5KJypA9EQkvw",
  authDomain: "sanishop-758e1.firebaseapp.com",
  projectId: "sanishop-758e1",
  storageBucket: "sanishop-758e1.appspot.com",
  messagingSenderId: "635803589897",
  appId: "1:635803589897:web:422bb8bfc07ecc1a6f87d8",
  measurementId: "G-G8H9K34VJS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
