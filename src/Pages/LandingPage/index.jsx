import { useContext, useEffect } from "react";

import HeroSection from "../HeroSection";
import Navigation from "../../Components/Navigation";
import Destinations from "../../Pages/Destinations";
import BackgroundVideo from "../../Components/Background";
import { Services } from "../../Pages/Services";
import Contact from "../Contact";

import { NavContext } from "../../Context/NavContext";

import "./LandingPage.css";

const LandingPage = () => {
  const { activeLinkId } = useContext(NavContext);

  //can reference this video: https://www.youtube.com/watch?v=T8EYosX4NOo

  const landingPage = document.querySelector(".LandingPage");

  useEffect(() => {

  if (activeLinkId === "services") {
    landingPage.style.backgroundColor = "white";
    // document.body.classList.add("animate");
  } else if (activeLinkId === "destinations") {
    landingPage.style.backgroundColor = "beige";
  } else if (activeLinkId === "contacts") {
    landingPage.style.backgroundColor = "#202124";
  } else if (activeLinkId === "herosection") {
    landingPage.style.backgroundColor = "transparent";
  }

}, [activeLinkId]);

  console.log(activeLinkId);

  return (
    <div className="LandingPage">
      {/*<Loading />*/}
      {/* <BackgroundVideo /> */}

      <main>
        <HeroSection />
        <Services />
        <Destinations />
        <Contact />
      </main>

      <Navigation activeLinkId={activeLinkId} />
    </div>
  );
};

export default LandingPage;
