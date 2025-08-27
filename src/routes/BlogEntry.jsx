import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import NotFound from "./NotFound";

const BlogEntry = () => {
  const [entryData, setEntryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { blogID } = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_ENDPOINT}/api/blogEntries/${blogID}`,
        });

        if (isMounted) {
          if (response.status === 200) {
            setEntryData(response.data);
          } else if (response.status === 404) {
            setEntryData(null);
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to fetch blog entry:", error);
          setError("Failed to load blog entry. Please try again later.");
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [blogID]);

  const insertImagesIntoHTML = (content, imageArray) => {
    if (!content || !imageArray) return content || "";

    let resultHTML = content;

    imageArray.forEach((image, index) => {
      // Create a proper image tag with alt text and styling
      const imageTag = `<img src="${image.url}" alt="${
        image.legend || `Image ${index + 1}`
      }" class="max-h-[50vh] m-auto rounded-xl outline-double outline-[#007EA7] inline-block" />`;

      // Replace placeholders with actual image tags
      resultHTML = resultHTML
        .replace(`<imagePlaceHolder${index}>`, imageTag)
        .replace(`<legend${index}>`, image.legend || "");
    });

    return resultHTML;
  };

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-black min-h-[85vh] flex items-center justify-center">
        <div className="text-center">
          <CgSpinner className="animate-spin text-9xl mx-auto dark:text-white" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Loading blog entry...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-black min-h-[85vh] flex items-center justify-center">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md"
          role="alert"
        >
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  if (!entryData) {
    return <NotFound />;
  }

  return (
    <div className="bg-white dark:bg-black">
      <div className="container py-10 px-4 text-justify w-full mx-auto">
        <h1 className="text-3xl text-center text-[#007EA7] font-bold mb-6">
          {entryData.title}
        </h1>
        <div className="mx-5">
          <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Article published on: {entryData.pubDate}
          </h2>

          <div className="text-justify mb-3 text-black dark:text-white prose max-w-none">
            {HTMLReactParser(
              insertImagesIntoHTML(entryData.content, entryData.imageArray)
            )}
          </div>

          <div className="mt-12">
            <CommentsList comments={entryData.comments} />
          </div>

          <div className="mt-8">
            <AddCommentForm
              entryID={entryData.entryID}
              setEntryData={setEntryData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
