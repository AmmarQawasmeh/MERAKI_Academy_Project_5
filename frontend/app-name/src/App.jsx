import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import About from "./component/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Unauthorized from "./component/Unauthorized";


const App = () => {
  return (
    <div>
     
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

      </Routes>
    </div>
  );
};
export default App;
