import Loading from "./Components/Loading";
import Navigation from "./Components/Navigation";
import Destinations from "./Pages/Destinations";
import LandPage from "./Pages/LandingPage";
import BackgroundVideo from "../src/Components/Background";
import "./root.css";
import Services from "./Pages/Services";

const App = () => {
  return (
    <div>
      <BackgroundVideo />
      <Navigation />
      <main>
        <Services />
        <Destinations />
      </main>

      {/* 
                  <LandPage />


      
      <Loading />
      <Destinations />

      */}
    </div>
  );
};

export default App;
