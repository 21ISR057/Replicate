import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
