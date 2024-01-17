import { useNav } from "../../Hooks/useNav";



import './Services.css';

export const Services = ({activeLinkId}) => {

    const servicesRef = useNav("services");

    const services = [
        {
            "name": "Flight",
            "content": "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "icon": "airplane_ticket"

        },
        {
            "name": "Hotel",
            "content": "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "icon": "hotel"
        },
        {
            "name": "Cruise",
            "content": "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "icon": "directions_boat"
        },
    ]

    return(
        // <section className={`services ${activeLinkId === "services" && "inverse"}`} id='services' ref={servicesRef} >
        <section className="services" id='services' ref={servicesRef} data-color="#000">

        <h2>Services</h2>
        <hr class="linebreak" />
            <div className="page-wrapper flex" id="services-container">
            {services.map((service, index)=>(
                <div className='service' key={index}>
                    <span class="material-symbols-outlined service-icons">{service.icon}</span>
                    <h3 className="service-title">{service.name}</h3>
                    <p className="service-content">{service.content}</p>
                </div>
            ))}
            </div>
        </section>
    )
}

;