import React from "react";
import NavBar from "./Component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import SignUp from "./Component/Signup";
import Footer from "./Component/Footer"
import ErrorPage from "./Component/ErrorPage";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route  path="*"  element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
