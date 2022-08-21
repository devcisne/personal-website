import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="  flex flex-col mb-2">
        <p className="text-gray-500 font-thin mx-auto">
          Designed &#38; built by Diego Cisneros
        </p>
        <p className=" flex flex-row space-x-2 mx-auto">
          <a href="https://github.com/diegocisne" className="text-gray-500 hover:text-gray-900"><BsGithub /></a>
          <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900"><BsTwitter /></a>
          <a href="https://www.linkedin.com/in/diegocisnerosvitor/" className="text-gray-500 hover:text-gray-900"><BsLinkedin /></a>
        </p>
      </div>
    </>
  );
};

export default Footer;
