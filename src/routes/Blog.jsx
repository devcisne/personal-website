import React, { useState, useEffect } from "react";
import BlogEntryList from "../components/BlogEntryList";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

const Blog = () => {
  // console.log(`${process.env.REACT_APP_API_ENDPOINT}/api/blogEntries`)
  const [isLoading, setIsLoading] = useState(true);
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      return await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/blogEntries`,
      });
    };
    fetchData()
      .then((response) => {
        // console.log("response", response.headers)
        if (response.status === 200) {
          // console.log("Request was successfull.");
          setBlogEntries(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(`Request failed. error:`, error);
      });
  }, []);

  return (
    <>
      <div className="min-h-[85vh] bg-white dark:bg-black">
        <div className="py-10 px-10 text-justify w-full mx-auto ">
          <h1 className="text-3xl font-semibold text-[#007EA7] ">Blog</h1>

          {!isLoading ? (
            <BlogEntryList blogEntries={blogEntries} />
          ) : (
            <CgSpinner className="animate-spin text-9xl mx-auto dark:text-white" />
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
