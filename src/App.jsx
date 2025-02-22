import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Signup from "./component/signup";
import Nav from "./component/nav";
import "./App.css";
import Forgot from "./component/forget";
import Xignup from "./component/know_us";
import Cnt from "./component/cnt";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forgot />} />
        <Route path="/know_us" element={<Xignup />} />
         <Route path="/cnt" element={<Cnt/>} />

      </Routes>
    </Router>
  );
}

export default App;
