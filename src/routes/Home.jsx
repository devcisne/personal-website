import React, { useEffect } from "react";
import Newsletter from "../components/Newsletter";

const Home = () => {
  useEffect(() => window.renderTagCloud(), []);

  //   <button
  //   type="button"
  //   className="bg-[#003459] p-1 rounded text-gray-400 hover:text-white ring-2  ring-gray-400 hover:ring-white"
  // >
  //   <a
  //     href="https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/documents/diegoCisnerosCV.pdf"
  //     target="_blank"
  //     className="mx-2"
  //     rel="noreferrer"
  //   >
  //     Resume
  //   </a>
  // </button>

  return (
    <>
      <div className=" bg-white dark:bg-black">
        <div className="w-[95vw] h-min-[80vh] sm:h-[80vh] mx-auto px-4 pb-2 sm:pb-0 flex sm:flex-row flex-col">
          <div className="my-auto flex-auto w-full sm:w-4/6 ">
            <p className="text-lg md:text-xl font-semibold text-[#00A8E8] ">
              Hi, my name is
            </p>
            <p className="text-6xl md:text-8xl font-extrabold text-[#4088b8] py-3">
              Diego Cisneros
            </p>
            <p className=" text-3xl md:text-4xl font-bold text-[#003459] dark:text-white">
              I build &#x1F6E0;&#x1F477; software. Welcome to my personal
              website.
            </p>
            <br />
            <div className="flex justify-center">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br dark:from-[#003459] from-[#00A8E8]  dark:to-black to-white dark:group-hover:from-[#003459] group-hover:from-[#00A8E8] dark:group-hover:to-black group-hover:to-white hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-xl dark:shadow-blue-800/80 ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a
                    href="https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/documents/diegoCisnerosCV.pdf"
                    target="_blank"
                    className="mx-2"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div
            id="myCanvasContainer"
            className=" flex-auto sm:w-2/6 w-full my-auto h-4/6 py-8 sm:py-0"
          >
            <canvas id="myCanvas" className="w-full h-full">
              <ul>
                <li>
                  <a href="/">Java</a>
                </li>
                <li>
                  <a href="/">Javascript</a>
                </li>
                <li>
                  <a href="/">HTML</a>
                </li>
                <li>
                  <a href="/">CSS</a>
                </li>
                <li>
                  <a href="/">NodeJS</a>
                </li>
                <li>
                  <a href="/">React</a>
                </li>
                <li>
                  <a href="/">Python</a>
                </li>
                <li>
                  <a href="/">Git</a>
                </li>
                <li>
                  <a href="/">MongoDB</a>
                </li>
                <li>
                  <a href="/">SQL</a>
                </li>
                <li>
                  <a href="/">Spring Boot Framework</a>
                </li>
                <li>
                  <a href="/">Docker</a>
                </li>
              </ul>
            </canvas>
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
