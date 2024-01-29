import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome/welcome';
import UserHome from './Pages/User/Home/UserHome';
import AboutUs from './Pages/aboutus';
import SellerHome from './Pages/Seller/Home/SellerHome';

import './App.css';


function App() {
  return (
    <div style={{ backgroundColor: 'linear-gradient(to bottom, #9933ff 0%, #ff0000 81%)'}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="userhome" element={<UserHome />} />
          <Route path="sellerhome" element={<SellerHome />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
