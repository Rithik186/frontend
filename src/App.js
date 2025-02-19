import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs"; 
import Loginfar from "./components/Loginfar";
import Signupfar from "./components/Signupfar";
import Signupcon from "./components/Signupcon";
import Logincon from "./components/Logincon";
import Resource from "./components/Resource";
import Consumer from "./components/Consumers";
import Farmers from "./components/Farmers";
import Home from "./components/Home";


function App() {
  return (
    <Router> {/* ✅ Wrap inside Router */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/loginfar" element={<Loginfar />} />
        <Route path="/signupfar" element={<Signupfar />} />
        <Route path="/logincon" element={<Logincon />} />
        <Route path="/signupcon" element={<Signupcon />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resource" element={<Resource/>} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/farmers" element={<Farmers />} />
      </Routes>
    </Router>
  );
}

export default App;
