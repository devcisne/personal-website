import React from "react";
import { Link } from "react-router-dom";

const BlogEntryList = ({ blogEntries }) => {
  return (
    <>
      <div className=" flex flex-wrap justify-center w-full space-y-0">
        {blogEntries.map((entry) => (
          <div
            key={entry.entryID}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 "
          >
              <div className="scale-90 hover:scale-100 hover:shadow-2xl hover:border-3 hover:border-[#00A8E8] transition ease-in-out duration-500 border my-2 border-gray-200 rounded-2xl flex flex-col mx-auto">
                <div className="">
                  <img
                    className="h-72 w-full inline-flex items-center justify-center bg-[#00A8E8] rounded-t-2xl"
                    src={`${entry.mainImage}`}
                    alt="item.name"
                  />
                  <h3 className="px-4 text-4xl mt-3 mb-2 font-black text-gray-700 tracking-tight">
                    <Link to={`/blog/${entry.entryID}`}>{entry.title}</Link>
                  </h3>
                  <p className="px-4 text-xl font-light text-gray-500 line-clamp-4">
                    {entry.content.split(" ").slice(1).join(" ")}...
                  </p>
                </div>
                <Link
                  className="inline-block mx-auto bg-[#00A8E8] text-white hover:bg-[#007EA7] my-3  py-3 px-6 border border-transparent rounded-md text-center font-medium"
                  to={`/blog/${entry.entryID}`}
                >
                  More Info
                </Link>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogEntryList;
