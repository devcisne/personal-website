import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Gallery from "./routes/Gallery";
import Portfolio from "./routes/Portfolio";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="gallery" element={<Gallery />}></Route>
      <Route path="portfolio" element={<Portfolio />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
    // <NavBar></NavBar>
    // <div className="App">
    //   {/* <MyComp/> */}
    // </div>
  );
}

export default App;
