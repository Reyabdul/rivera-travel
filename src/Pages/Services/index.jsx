import {ReactComponent as MenuIcon} from '../../Assets/menu-icon.svg';

import './Services.css';

const Services = () => {

    const services = [
        {
            "svg": MenuIcon,
            "name": "Flight",
            "content": "Dorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "svg": MenuIcon,
            "name": "Hotel",
            "content": "Dorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "svg": MenuIcon,
            "name": "Cruise",
            "content": "Dorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ]

    return(
        <div className='services'>
            <div className="page-wrapper flex" id="services-container">
            {services.map((service, index)=>(
                <div className='service'>
                    <service.svg className="service-svg"/>
                    <h2 className="service-title">{service.name}</h2>
                    <p className="service-content">{service.content}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Services;