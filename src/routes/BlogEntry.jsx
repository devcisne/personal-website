import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import NotFound from "./NotFound";

const BlogEntry = () => {
  const [entryData, setEntryData] = useState({
    entryID: 0,
    title: "",
    content: "",
    pubDate: 0,
    comments: [],
    imageArray: [],
  });
  const { blogID } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      return await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/blogEntries/${blogID}`,
      });
    };
    fetchData()
      .then((response) => {
        // console.log("response", response)
        if (response.status === 200) {
          // console.log("Request was successfull.");
          setEntryData(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(`Request failed. error:`, error);
      });
  }, [blogID]);

  if (entryData == null) return <NotFound />;

  const insertImagesIntoHTML = (content, imageArray) => {
    var resultHTML = content;
    imageArray.forEach((image, index) => {
      resultHTML = resultHTML
        .replace(`<imagePlaceHolder${index}>`, `${image.url}`)
        .replace(`<legend${index}>`, `${image.legend}`);
      // <img src=\"/images/oldHomepage.png\" alt=\"website profile\" className=\" max-h-[50vh] m-auto
      // rounded-xl outline-double outline-[#007EA7] inline-block\" />
      // console.log(`resultHTML == ${index}`,resultHTML)
    });

    // console.log(resultHTML);
    return resultHTML;
  };

  return (
    <>
      <div className="bg-white dark:bg-black">
        <div className="container py-10 px-4 text-justify w-full mx-auto ">
          {!isLoading ? (
          <>
              <h1 className="text-3xl text-center text-[#007EA7] font-bold">
                {entryData.title}
              </h1>
              <br />
              <div className="mx-5">
                <h2>Article published on: {entryData.pubDate}</h2>
                <br />
                {/* Don't even ask about this, i spent the whole weekend trying to figure  out why the css was not being applied despite the fact that it is actually present when you inspect the element, had to do put these hidden elements in order to force the other ones to render correctly. I will eventually fix this */}
                <ul className="list-disc hidden"></ul>
                <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 hidden">
                  <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white"></p>
                </blockquote>
                {/* end of weird block */}
                <div
                  className="text-justify mb-3 text-black dark:text-white"
                  //  dangerouslySetInnerHTML={{ __html:insertImagesIntoHTML(entryData.content,entryData.imageArray)
                  //  }}
                >
                  {HTMLReactParser(
                    insertImagesIntoHTML(
                      entryData.content,
                      entryData.imageArray
                    )
                  )}
                </div>
                <CommentsList comments={entryData.comments} />
                <AddCommentForm
                  entryID={entryData.entryID}
                  setEntryData={setEntryData}
                />
              </div>
            </>
          ) : (
            <CgSpinner className="animate-spin text-9xl mx-auto" />
          )}
        </div>
      </div>
    </>
  );
};

export default BlogEntry;
