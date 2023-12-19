import { useNav } from '../../Hooks/useNav';

import './Destinations.css';

const Destinations = () => {

    const destinationsRef = useNav("destinations");

    return (
        <section className="destinations" id='destinations' ref={destinationsRef} >
            <div className="page-wrapper" id="destination-container">
                <h2>Our destinations</h2>
                <div className="grid images">
                    <img id="img-1"/>
                    <img id="img-2"/> 
                    <img id="img-3"/> 
                    <img id="img-4"/>  
                </div>
            </div>
        </section>
    )
}

export default Destinations;