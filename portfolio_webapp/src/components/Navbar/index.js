import React from 'react';
import '../../assets/css/navbar.css';
import shashikant_dp from'../../assets/Images/shashikant_dp.jpg'

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className='left-wrapper'>
                    <div className='img-wrapper'>
                        <img className='image' src={shashikant_dp} href="shashikant" />
                    </div>
                    <div className='name-wrapper'>
                        <h2>Shashikant Gupta</h2>
                    </div>
                </div>
                <div className='right-wrapper'>
                    <div className='link'><h4> HOME </h4> </div>
                    <div className='link'><h4> ABOUT </h4> </div>
                    <div className='link'><h4> PROJECTS </h4> </div>
                    <div className='link'><h4> CONTACTS </h4></div>
                </div>
            </div>
        </div>
    )
}
