import './Destinations.css';
import map from "../../Assets/map.png";

console.log(map)

const Destinations = () => {
    return (
        <div className="page-wrapper">
            <img src={map} alt="world map" id="map"/>
            <div className="flex">
                <div>
                    <h2>Mexico</h2>
                    <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </p>
                </div>
                <div>
                    <p>images</p>
                </div>
            </div>
        </div>
    )
}

export default Destinations;