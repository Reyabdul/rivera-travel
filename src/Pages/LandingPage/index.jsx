import Navigation from "../../Components/Navigation";
import Destinations from "../../Pages/Destinations";
import BackgroundVideo from "../../Components/Background";
import Services from "../../Pages/Services";

import './LandingPage.css'


const LandingPage = () => {

    return (
        <>
            <BackgroundVideo />
            <Navigation />
            <main>
                <Services />
                <Destinations />
            </main>
        </>
    )

}

export default LandingPage;