import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Gallery from "./routes/Gallery";
import Portfolio from "./routes/Portfolio";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogEntry from "./routes/BlogEntry";
import NotFound from "./routes/NotFound";
import NewsletterSuccess from "./routes/NewsletterSuccess";
import ThemeContext from "./Context/ThemeContext";
import { BubblyContainer } from "react-bubbly-transitions";
import NewsletterViewer from "./routes/NewsletterViewer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  // Memoize context value to prevent unnecessary re-renders
  const themeContextValue = useMemo(
    () => ({
      isDarkModeEnabled,
      setDarkModeEnabled,
    }),
    [isDarkModeEnabled]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ErrorBoundary>
        <div className={`${isDarkModeEnabled ? "dark" : "light"}`}>
          <BubblyContainer />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogID" element={<BlogEntry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<NewsletterViewer />} />
            <Route path="/newsletter/success" element={<NewsletterSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeContext.Provider>
  );
}

export default App;
