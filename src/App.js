import Loading from './Components/Loading';
import Navigation from './Components/Navigation';
import Destinations from './Pages/Destinations';
import './root.css';

const App = () => {
  return (
    <div>
      <Loading />
      <Navigation />
      <Destinations />
    </div>
  )
}

export default App;
