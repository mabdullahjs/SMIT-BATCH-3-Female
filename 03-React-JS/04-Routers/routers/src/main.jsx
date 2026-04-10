import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Dashboard from './Pages/Dashboard/Dashboard'
import Profile from './Pages/Dashboard/Profile'
import Setting from './Pages/Dashboard/Setting'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='services' element={<Services />} />
      {/* Nested Routes */}
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path='profile' element={<Profile />} />
        <Route path='setting' element={<Setting />} />
      </Route>
    </Routes>

  </BrowserRouter>

)


