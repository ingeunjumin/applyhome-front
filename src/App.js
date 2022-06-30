import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav></Nav>
        <Router>
          <Nav />
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
