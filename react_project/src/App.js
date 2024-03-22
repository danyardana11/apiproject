import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Saved from "./Pages/Saved/Saved";
import Profile from "src/Pages/Profile/Profile";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {
  return (
    <main className="">
      <div className="mx-auto bg-white">
        <BrowserRouter>
          <Navbar />
          <div className=" w-full h-screen overflow-x-hidden scrollbar-hide">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Saved" element={<Saved />} />
              <Route path="/SingleProduct" element={<SingleProduct />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
