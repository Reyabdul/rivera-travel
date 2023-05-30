import React, { useState } from 'react';

import Logo from '../../Assets/logo.png';
import {ReactComponent as MenuIcon} from '../../Assets/menu-icon.svg';
import './Navigation.css';

const Navigation = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navigation-container">
            <div className="page-wrapper flex">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="logo"/></a>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <MenuIcon />
                </div>
                <ul className={`nav-items flex ${showNavbar && 'active'}`}>
                    <li><a href="#">Destinations</a></li>
                    <li><a className="contact-button" href="#">Get in touch</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;