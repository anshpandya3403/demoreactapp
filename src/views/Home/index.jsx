import React from 'react';
import NavBar from "../../components/Navbar"
import {useState} from 'react';
import '../../App.css';

const Home =()=>{

    return (
        <div className='main_container'>
            <NavBar />
            <h1>home page</h1>
        </div>
    );
}
export default Home;