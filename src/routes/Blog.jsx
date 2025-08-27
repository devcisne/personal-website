import React, { useState, useEffect } from "react";
import BlogEntryList from "../components/BlogEntryList";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogEntries, setBlogEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to prevent state update if component unmounts

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_ENDPOINT}/api/blogEntries`,
        });

        if (isMounted) {
          if (response.status === 200) {
            setBlogEntries(response.data);
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to fetch blog entries:", error);
          setError("Failed to load blog entries. Please try again later.");
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-[85vh] bg-white dark:bg-black">
      <div className="py-10 px-10 text-justify w-full mx-auto">
        <h1 className="text-3xl font-semibold text-[#007EA7]">Blog</h1>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <CgSpinner className="animate-spin text-9xl mx-auto dark:text-white" />
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Loading blog entries...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          </div>
        ) : blogEntries.length > 0 ? (
          <BlogEntryList blogEntries={blogEntries} />
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              No blog entries found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
