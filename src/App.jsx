import Topbar from './Components/Topbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Sidebar from './Components/Sidebar';
import PostJob from './Pages/PostJob';
import Applications from './Pages/Applications';
import MyOffers from './Pages/MyOffers'
import {useContext, useEffect, useState} from 'react'
import { authContext } from './Context/AuthContext';
import { postWithToken } from './api';
import Offers from './Pages/Offers';
import NotFound from './Pages/NotFound'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const context = useContext(authContext);

  useEffect(() => {
    postWithToken("/api/auth/validate")
    .then(({data}) => {
      if(data.failed) console.log(data)
      else{
        context.setAuth({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
          logged: true
        })
      }
    })
  },[])

  return (
    <>
      <Router>
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/signup" element={<SignUp />} />
          <Route path = "/postjob" element={<PostJob />} />
          <Route path = "/offers" element={<Offers />} />
          <Route path = "/applications" element={<Applications />} />
          <Route path = "/my_offers" element={<MyOffers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
