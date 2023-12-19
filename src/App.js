import Loading from "./Components/Loading";
import Landing from "./Pages/LandingPage";
import { useEffect, useState, useRef } from "react";

import { NavProvider } from "./Context/NavContext";

import "./root.css";

const App = () => {
  /* Reference for adding loading page: https://dev.to/beginarjun/how-to-create-a-simple-loading-screen-in-react-1md6 */

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  return (
    <div>
      <NavProvider>
        {loading ? <Loading loading={loading} /> : <Landing />}
      </NavProvider>

      {/* <LandingPage /> */}

      {/* 

            <Navigation />

        <Services className='services' data-color="white" />


      
      <Loading />
      <Destinations />

      */}
    </div>
  );
};

export default App;
