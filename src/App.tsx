import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ✅ Add a fallback route for undefined paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
