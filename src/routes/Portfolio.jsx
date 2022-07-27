import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Portfolio() {
  return (
    <>
      <NavBar />
      <div className="h-[80vh]  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-4">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Portfolio</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
