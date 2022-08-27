import React from "react";
import { Link } from "react-router-dom";

const BlogEntryList = ({ blogEntries }) => {
  return (
    <>
    {/* <div className="flex w-screen  flex-row  justify-center" > */}
    <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full space-y-0" >


    {blogEntries.map((entry) => (
        <div  key={entry.id}>
          {/* <BlogEntry entry={element} key={element.id} /> */}
          <div className="flex snap-x snap-mandatory overflow-x-auto ">
        <div className="scale-90 hover:scale-100 hover:shadow-2xl hover:border-3 hover:border-[#00A8E8] transition ease-in-out duration-500 border my-2 border-gray-200 rounded-2xl flex flex-col mx-auto">
          <div className="">
            <img
              className="h-72 w-full inline-flex items-center justify-center bg-orange-600 rounded-t-2xl"
              src="https://via.placeholder.com/350"
              alt="item.name"
            />
            <h3
              className="px-4 text-4xl mt-3 mb-2 font-black text-gray-700 tracking-tight"
              x-text="item.name"
            >
          <Link to={`/blog/${entry.id}`}>{entry.title}</Link>
            </h3>
            <p className="px-4 text-xl font-light text-gray-500" x-text="item.bio">
              {entry.content.split(" ").slice(1,20).join(" ")}...
            </p>
          </div>
          <a
            href="/"
            className="inline-block mx-auto bg-indigo-500 text-white hover:bg-indigo-600 my-3  py-3 px-6 border border-transparent rounded-md text-center font-medium"
          >
            More Info
          </a>
        </div>
      </div>
        </div>
      ))}

    </div>

    </>
  );
};

export default BlogEntryList;
