import React from 'react'
import Navbar from '../Navbar/index';
import Body from "../Body/index"
import '../../assets/css/home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <Navbar />
            <Body />
        </div>
    )
}
