import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDUaq-rcUMw7p2NInFkvwql4g-XpZnlzqA",
  authDomain: "candyron-62057.firebaseapp.com",
  projectId: "candyron-62057",
  storageBucket: "candyron-62057.appspot.com",
  messagingSenderId: "77439962557",
  appId: "1:77439962557:web:918899ea15a8e0a11f16d4"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
