import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome/welcome';
import UserHome from './Components/User/Home/UserHome';
import AboutUs from './Pages/aboutus';


import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="userhome" element={<UserHome />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
