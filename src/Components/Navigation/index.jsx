import React, { useState, useEffect } from 'react';
import {ReactComponent as MenuIcon} from '../../Assets/menu-outline.svg';
import {ReactComponent as CloseIcon} from '../../Assets/close-outline.svg';
import './Navigation.css';

const Navigation = ({activeLinkId}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    window.addEventListener("load", () => {
        setWindowWidth(window.innerWidth);
    })

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    })

    useEffect(() => {
        const navServices = document.querySelector("#nav-services");
        const navDestinations = document.querySelector("#nav-destinations");
        const navIcon = document.querySelector(".nav-icon");
        const logoText = document.querySelector("#logo-text");
    
        //font color change on scroll
        if(activeLinkId === "services" || activeLinkId === "destinations") {
            navServices.style.color = "#000";
            navDestinations.style.color = "#000";
            navIcon.style.color = "#000";
            logoText.style.color = "#000";

        } else {
            navServices.style.color = "#fff";
            navDestinations.style.color = "#fff";
            navIcon.style.color = "#fff";
            logoText.style.color = "#fff";
        }

        //background color change for mobile navigation
        if(windowWidth <= 600) {
            let navContainer;
            let navItems;

            if(showNavbar) {
                navContainer = document.querySelector(".navigation-container.active");
                navItems = document.querySelector(".nav-items.active");
                if(activeLinkId === "services" || activeLinkId === "destinations") {
                    navContainer.style.backgroundColor = "rgba(255, 255, 255, .9)";
                    navItems.style.backgroundColor = "rgba(255, 255, 255, .9)";
                } else {
                    navContainer.style.backgroundColor = "rgba(0, 0, 0, .9)";
                    navItems.style.backgroundColor = "rgba(0, 0, 0, .8)";
                }
            } else {
                navContainer = document.querySelector(".navigation-container");
                navContainer.style.backgroundColor = "transparent";
            }
        }
    }, [activeLinkId, windowWidth, showNavbar]);


    return (
        <nav className={`navigation-container ${showNavbar && 'active'}`}>
            <div className="flex" id="navigation">
               
                <div className="logo">
                    <a href="#herosection" id="logo-text">Rivera Travel</a>
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