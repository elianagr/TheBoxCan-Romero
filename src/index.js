import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCljJAenTkzdpDSrzrtdmd3Ek2aPlLrF3A",
  authDomain: "theboxcan.firebaseapp.com",
  projectId: "theboxcan",
  storageBucket: "theboxcan.appspot.com",
  messagingSenderId: "346486090846",
  appId: "1:346486090846:web:d434bbec0d15c6cf3b58cf"
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
