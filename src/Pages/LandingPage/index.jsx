import { useRef, useState, useEffect, useContext } from "react";

import Loading from "../../Components/Loading";
import Navigation from "../../Components/Navigation";
import Destinations from "../../Pages/Destinations";
import BackgroundVideo from "../../Components/Background";
import { Services } from "../../Pages/Services";

import { NavProvider } from "../../Context/NavContext";

import { NavContext } from "../../Context/NavContext";


import './LandingPage.css'

const LandingPage = () => {
        
    const { activeLinkId } = useContext(NavContext);

    if (activeLinkId === 'services'){
        const service = document.getElementById('services');
        const serviceContainer = document.getElementById('services-container');
        
        service.classList.toggle("inverse");

        //service.style.backgroundColor = "white";
        serviceContainer.style.display = "flex";

    } else if (activeLinkId === 'destinations') {

        const destination = document.getElementById('destinations');
        const destinationContainer = document.getElementById('destination-container');
        
        //console.log("I'm in desitonations")
        destination.style.backgroundColor = "black";
        destinationContainer.style.display = "grid";
    }

    return (
        <div className="LandingPage">
                <Loading />

                <main>
                    <Services />
                    <Destinations />
                </main>

                <BackgroundVideo />
                <Navigation />
        </div>
    )

}

export default LandingPage;