import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Apartment from './components/Apartment/Apartment';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Home></Home>
        <Nav></Nav> */}
        <Apartment></Apartment>
      </div>
    </div>
  );
}

export default App;
