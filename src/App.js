import './App.css';
import React, {useEffect, useState} from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import logo from './assets/logo.png'


function App() {
    return (
        <>
            <header>
                <nav >
                    <ul className="unlisted-items">
                        <li className="listed-items">Hottest Posts</li>
                        <li className="listed-items">Reddit</li>
                        <li className="listed-items">Memes</li>
                    </ul>
                </nav>
                <div className="header-logo-text">
                    <img  src={logo} alt="logo" className="logo-resize"/>
                    <h1>Reddit </h1>
                </div>
            </header>



            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
            </Routes>


        </>
    );
}

export default App;
