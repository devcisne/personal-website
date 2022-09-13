import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => window.renderTagCloud(), [])

  return (
    <>
      <div className="h-screen  bg-[#ffffff] border-t border-[#003459] ">
        <div className="w-[95vw] mx-auto px-4 mt-11 mb-0 border rounded-md bg-brick-pattern h-5/6 flex sm:flex-row flex-col">
          <div className="my-auto flex-auto w-full sm:w-4/6 ">
            <p className="text-xl font-semibold text-[#00A8E8] ">
              Hi, my name is
            </p>
            <p className="text-6xl font-extrabold text-[#4088b8] py-3">
              Diego Cisneros
            </p>
            <p className="text-3xl font-bold text-[#003459]">
              I build &#x1F6E0;&#x1F477; software. Welcome to my personal
              website.
            </p>
          </div>

          <div
            id="myCanvasContainer"
            className=" flex-auto sm:w-2/6 w-full my-auto h-3/6"
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
      </div>
    </>
  );
};

export default Home;
