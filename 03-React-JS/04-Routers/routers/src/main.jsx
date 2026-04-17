// import { createRoot } from 'react-dom/client'
// import './index.css'


// import { BrowserRouter, Route, Routes } from 'react-router'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Services from './Pages/Services'
// import Dashboard from './Pages/Dashboard/Dashboard'
// import Profile from './Pages/Dashboard/Profile'
// import Setting from './Pages/Dashboard/Setting'
// import Products from './Pages/Products'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route index element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='services' element={<Services />} />
//       <Route path='products' element={<Products/>} />
//       {/* Page Not Found Route */}
//       <Route path='*' element={<h2>Page not Found</h2>} />
//       {/* Nested Routes */}
//       <Route path='/dashboard' element={<Dashboard />}>
//         <Route path='profile' element={<Profile />} />
//         <Route path='setting' element={<Setting />} />
//       </Route>
//     </Routes>

//   </BrowserRouter>

// )


import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./component/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Student from "./pages/Dashboard/Student";
import Teacher from "./pages/Dashboard/Teacher";
import Manager from "./pages/Dashboard/Manager";
import Products from "./Pages/Products";
import SingleProduct from "./pages/SingleProduct";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="student" element={<Student />} />
        <Route path="teacher" element={<Teacher  />} />
        <Route path="manager" element={<Manager />} />
      </Route>
    </Routes>
  </BrowserRouter>
)



// 10 minutes remaining
// nested routes (/dashboard/profile) (dashboard/setting)


