import Topbar from './Components/Topbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Sidebar from './Components/Sidebar';
import {useState} from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} />
      <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
