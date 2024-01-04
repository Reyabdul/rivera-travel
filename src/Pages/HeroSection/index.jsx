import { useNav } from "../../Hooks/useNav";

import "./HeroSection.css";

const HeroSection = ({ activeLinkId }) => {
  const heroSectionRef = useNav("herosection");

  return (
    <section className="herosection" ref={heroSectionRef}>
      <h1 className="main-header" id="main-header">
        Travel Made Easy
      </h1>
    </section>
  );
};

export default HeroSection;
