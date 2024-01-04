import { useContext } from "react";

import HeroSection from "../HeroSection";
import Navigation from "../../Components/Navigation";
import Destinations from "../../Pages/Destinations";
import BackgroundVideo from "../../Components/Background";
import { Services } from "../../Pages/Services";
import Contact from '../Contact';

import { NavContext } from "../../Context/NavContext";
import { useNav } from "../../Hooks/useNav";

import "./LandingPage.css";

const LandingPage = () => {
  
  const landingPageRef = useNav("landing-page");
  const { activeLinkId } = useContext(NavContext);

    //can reference this video: https://www.youtube.com/watch?v=T8EYosX4NOo

  if (activeLinkId === "services") {

  } else if (activeLinkId === "destinations") {

  }

  console.log(activeLinkId)

  return (
    <div className="LandingPage" ref={landingPageRef}>
      {/*<Loading />*/}

      <main>
        <HeroSection />
        <Services activeLinkId={activeLinkId} />
        <Destinations activeLinkId={activeLinkId} />
        <Contact />
      </main>

      <BackgroundVideo activeLinkId={activeLinkId}/>
      <Navigation />
    </div>
  );
};

export default LandingPage;
