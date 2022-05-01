import './App.css';
import Topbar from './Components/Topbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Topbar />
      <Router>
        <Routes>
          <Route path = "/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
