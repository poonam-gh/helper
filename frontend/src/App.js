import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome/welcome';
import UserHome from './Components/User/Home/UserHome';
import AboutUs from './Pages/aboutus';
import SellerHome from './Components/Seller/Home/SellerHome';

import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="userhome" element={<UserHome />} />
          <Route path="sellerhome" element={<SellerHome />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
