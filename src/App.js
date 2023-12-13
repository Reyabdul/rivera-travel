import Loading from "./Components/Loading";
import Landing from "./Pages/LandingPage";
import { useEffect, useState } from "react";

import "./root.css";

const App = () => {

  {/* Reference for adding loading page: https://dev.to/beginarjun/how-to-create-a-simple-loading-screen-in-react-1md6 */}
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false), 3300)
  },[])

  return (
    <div>
      {loading ? <Loading loading={loading} /> : <Landing />}
    </div>
  )
};

export default App;
