import React from "react";


function Portfolio() {
  return (
    <>
      <div className="h-[80vh]  bg-[#ffffff] border-t border-[#003459] ">
        <div className="container py-10 px-4">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Portfolio</h1>
          <div className="flex flex-wrap justify-center w-full">
            <div className="mx-5">
            <img
            src="https://via.placeholder.com/350"
            alt="website profile"
            className=" max-h-[50vh] m-auto my-5 rounded-xl outline-double outline-[#007EA7] inline-block"

          />
          <p className="text-center">this is the legend</p>
            </div>
            <div className="mx-5">
            <img
            src="https://via.placeholder.com/350"
            alt="website profile"
            className=" max-h-[50vh] m-auto my-5 rounded-xl outline-double outline-[#007EA7] inline-block"
          />     
                    <p className="text-center">this is the legend2</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
