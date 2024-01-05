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
  
  const { activeLinkId } = useContext(NavContext);

    //can reference this video: https://www.youtube.com/watch?v=T8EYosX4NOo

  if (activeLinkId === "services") {
    document.body.style.backgroundColor = "teal";
    document.body.classList.add("animate");
  } else if (activeLinkId === "destinations") {
    document.body.style.backgroundColor = "#f2f2f2";
  } else if (activeLinkId === "contacts") {
    document.body.style.backgroundColor = "#202124";
  }

  console.log(activeLinkId)

  return (
    <div className="LandingPage">
      {/*<Loading />*/}

      <main>
        <HeroSection />
        <Services activeLinkId={activeLinkId} />
        <Destinations activeLinkId={activeLinkId} />
        <Contact activeLinkId={activeLinkId}/>
      </main>

      <BackgroundVideo activeLinkId={activeLinkId}/>
      <Navigation />
    </div>
  );
};

export default LandingPage;
