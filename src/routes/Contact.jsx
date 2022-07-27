import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="h-[80vh]  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-10">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Contact</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
