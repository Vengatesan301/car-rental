import React from "react";
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './pages';
import Signin from "./pages/signin";
import Booking from "./pages/booking";
import AboutCom from "./pages/aboutCom";
import CarBook from "./pages/carBook";

function App() {
  return (
    <Router basename="car-rental">
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/logout" element={<Signin/>}  />
        <Route path="/booking" element={<Booking/>} />
        <Route path='/aboutcompany' element={<AboutCom />} />
        <Route path='/booknow/:slug' element={<CarBook />} />
      </Routes>
    </Router>
  );
}

export default App;
