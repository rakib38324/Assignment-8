import React from 'react';
import logo from '../../images/fitness.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            
            <div className='navbar'>
                <img src={logo} alt="" />
                <h1>DIU GYM CENTER</h1>
            </div>
            
        </div>
    );
};

export default Header;