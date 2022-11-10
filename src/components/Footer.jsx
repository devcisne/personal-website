import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col pb-2 bg-white dark:bg-black">
        <p className="text-gray-500 font-thin mx-auto">
          Designed &#38; built by Diego Cisneros
        </p>
        <p className=" flex flex-row space-x-2 mx-auto">
          <a href="https://github.com/devcisne" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><BsGithub /></a>
          <a href="https://twitter.com/devcisne" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><BsTwitter /></a>
          <a href="https://www.linkedin.com/in/diegocisnerosvitor/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><BsLinkedin /></a>
        </p>
      </div>
    </>
  );
};

export default Footer;
