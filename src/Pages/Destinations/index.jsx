import { useNav } from "../../Hooks/useNav";

import "./Destinations.css";

const Destinations = () => {
  const destinationsRef = useNav("destinations");

  return (
    // <section className={`destinations ${activeLinkId === "destinations" && "animate" && "inverse2"}`} id='destinations' ref={destinationsRef} >
    <section className="destinations" id="destinations" ref={destinationsRef}>
      <div className="heading-container">
        <h2>Destinations</h2>
        <hr className="linebreak" />
      </div>

      <div className="page-wrapper" id="destination-container">
        <div className="grid images">
          <img id="img-1" />
          <img id="img-2" />
          <img id="img-3" />
          <img id="img-4" />
        </div>
        <a href="#">See more</a>
      </div>
    </section>
  );
};

export default Destinations;
