import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Marker from './components/MarkerMap/Marker';
import Clusterer from './components/ClustererMap/Clusterer';
import Road from './components/RoadView/Road';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/map" element={<Clusterer />} />
            <Route path="/apply" element={<Marker />} />
            <Route path="/road-view/:lat/:lng" element={<Road />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
