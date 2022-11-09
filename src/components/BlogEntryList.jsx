import React, { useContext } from "react";
import { BubblyLink } from "react-bubbly-transitions";
import ThemeContext from "../Context/ThemeContext";

const BlogEntryList = ({ blogEntries }) => {
  const { isDarkModeEnabled } = useContext(ThemeContext);

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
                  <BubblyLink
                    to={`/blog/${entry.entryID}`}
                    colorStart={isDarkModeEnabled ? "#003459" : "#00A8E8"}
                    colorEnd={isDarkModeEnabled ? "#000" : "#fff"}
                    duration={900}
                  >
                    <div className="text-black dark:text-white">
                    {entry.title}
                    </div>
                  </BubblyLink>
                </h3>
                <p className="px-4 text-xl font-light text-black dark:text-white line-clamp-4">
                  {entry.content.split(" ").slice(1).join(" ")}...
                </p>
              </div>
              <BubblyLink
                to={`/blog/${entry.entryID}`}
                colorStart={isDarkModeEnabled ? "#003459" : "#00A8E8"}
                colorEnd={isDarkModeEnabled ? "#000" : "#fff"}
                duration={900}
              >
                <div className="inline-block mx-auto bg-[#00A8E8] hover:bg-[#007EA7] dark:bg-[#007EA7] dark:hover:bg-[#00A8E8] text-white my-3  py-3 px-6 border border-transparent rounded-md text-center font-medium">
                  More Info
                </div>
              </BubblyLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogEntryList;
