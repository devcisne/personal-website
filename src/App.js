import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Gallery from "./routes/Gallery";
import Portfolio from "./routes/Portfolio";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog/:article" element={<ArticlePage />} />

        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
    // <NavBar></NavBar>
    // <div className="App">
    //   {/* <MyComp/> */}
    // </div>
  );
}

export default App;
