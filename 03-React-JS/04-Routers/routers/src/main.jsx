import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Student from "./pages/Dashboard/Student";
import Teacher from "./pages/Dashboard/Teacher";
import Manager from "./pages/Dashboard/Manager";
import Products from "./pages/Products";
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


