import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App/App.jsx'
import firebase from "firebase/compat/app";
import database from "firebase/compat/app";

import config from "../config.js";
import './index.css'

firebase.initializeApp(config)

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <App />
    </BrowserRouter>
)
