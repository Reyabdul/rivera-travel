import Loading from "../../Components/Loading";
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
                <Loading />
            </main>
        </>
    )

}

export default LandingPage;