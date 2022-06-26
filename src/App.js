import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Home></Home>
        <Nav></Nav>
      </div>      
    </div>
  );
}

export default App;
