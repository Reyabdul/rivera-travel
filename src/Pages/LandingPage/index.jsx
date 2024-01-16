import { useContext } from "react";

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

  if (activeLinkId === "services") {
    landingPage.style.backgroundColor = "white";
    document.body.classList.add("animate");
  } else if (activeLinkId === "destinations") {
    landingPage.style.backgroundColor = "#f2f2f2";
  } else if (activeLinkId === "contacts") {
    landingPage.style.backgroundColor = "#202124";
  } else if (activeLinkId === "herosection") {
    landingPage.style.backgroundColor = "transparent";
  }

  console.log(activeLinkId);

  return (
    <div className="LandingPage">
      {/*<Loading />*/}

      <main>
        <HeroSection />
        <Services activeLinkId={activeLinkId} />
        <Destinations activeLinkId={activeLinkId} />
        <Contact activeLinkId={activeLinkId} />
      </main>

      <BackgroundVideo activeLinkId={activeLinkId} />
      <Navigation />
    </div>
  );
};

export default LandingPage;
