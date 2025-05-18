import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Navbar></Navbar> */}
    </>
  );
}

export default App;
