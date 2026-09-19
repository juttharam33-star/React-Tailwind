import React from "react";
import Home from "./home.jsx";
import About from "./About.jsx";
import Article from "./Article.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;