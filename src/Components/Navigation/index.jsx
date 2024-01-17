import React, { useState, useEffect } from 'react';

import Logo from '../../Assets/logo.png';
import {ReactComponent as MenuIcon} from '../../Assets/menu-outline.svg';
import {ReactComponent as CloseIcon} from '../../Assets/close-outline.svg';
import './Navigation.css';

const Navigation = ({activeLinkId}) => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    useEffect(() => {
        const navServices = document.querySelector("#nav-services");
        const navDestinations = document.querySelector("#nav-destinations");
        const navIcon = document.querySelector(".nav-icon");
    
        if(activeLinkId === "services" || activeLinkId === "destinations") {
            navServices.style.color = "#000";
            navDestinations.style.color = "#000";
            navIcon.style.color = "#000";
        } else {
            navServices.style.color = "#fff";
            navDestinations.style.color = "#fff";
            navIcon.style.color = "#fff";
        }
    }, [activeLinkId]);

    return (
        <nav className="navigation-container">
            <div className="page-wrapper flex">
               
                <div className="logo">
                    {/* <a href="#"><img src={Logo} alt="logo"/></a> */}
                </div>

             
                <div className="nav-icon" onClick={handleShowNavbar}>
                    {showNavbar ? <CloseIcon /> : <MenuIcon />}
                </div>
                <ul className={`nav-items flex ${showNavbar && 'active'}`}>
                    <li><a href="#services" id="nav-services">Services</a></li>
                    <li><a href="#destinations" id="nav-destinations">Destinations</a></li>
                    <li><a className="contact-button" href="#contacts">Get in touch</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;