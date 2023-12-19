import { useContext } from "react";

import Loading from "../../Components/Loading";
import Navigation from "../../Components/Navigation";
import Destinations from "../../Pages/Destinations";
import BackgroundVideo from "../../Components/Background";
import { Services } from "../../Pages/Services";

import { NavContext } from "../../Context/NavContext";
import { useNav } from "../../Hooks/useNav";

import "./LandingPage.css";

const LandingPage = () => {
  const landingPageRef = useNav("landing-page");

  const { activeLinkId } = useContext(NavContext);

  const service = document.getElementById("services");
  const serviceContainer = document.getElementById("services-container");

  if (activeLinkId === "services") {
    service.classList.toggle("inverse");

    //service.style.backgroundColor = "white";
    serviceContainer.style.display = "flex";
  } else if (activeLinkId === "destinations") {
    const destination = document.getElementById("destinations");
    const destinationContainer = document.getElementById(
      "destination-container"
    );

    //console.log("I'm in desitonations")
    destination.style.backgroundColor = "black";
    destinationContainer.style.display = "grid";
  }

  //console.log(activeLinkId)

  return (
    <div className="LandingPage" ref={landingPageRef}>
      <Loading />

      <main>
        <Services />
        <Destinations />
      </main>

      <BackgroundVideo />
      <Navigation />
    </div>
  );
};

export default LandingPage;
