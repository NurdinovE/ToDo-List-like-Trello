import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import firebase from "firebase/compat/app";
import config from "../../config.js";
import './App.css'
import Header from "../Components/Header/Header.jsx";
import Content from "../Components/Content/Content.jsx";
import Profile from "../Components/Profile/Profile.jsx";
import Notifications from "../Components/Notifications/Notifications.jsx";
import Menu from "../Components/Menu/Menu.jsx";

function App() {
    const [ menuActive, setMenuActive ] = useState()
    return (
        <div className="App">
            <Header active={ menuActive } setActive={ setMenuActive }/>
            <Routes>
                <Route path="/" element={ <Content /> }/>
                <Route path="/profile" element={ <Profile/> }/>
                <Route path="/notifications" element={ <Notifications/> }/>
                
            </Routes>
            <Menu active={ menuActive } setActive={setMenuActive}/>
        </div>
    )
}

export default App
