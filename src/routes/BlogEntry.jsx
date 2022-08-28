import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import axios from "axios";
import { CgSpinner } from "react-icons/cg"
import NotFound from "./NotFound"

const BlogEntry = () => {
  const [entryData, setEntryData] = useState({ entryID: 0, title: "", content: "", pubDate: 0, comments: [] });
  const { blogID } = useParams();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      return await axios({
        method: "GET",
        url: `http://localhost:5000/api/blogEntries/${blogID}`,
      })
    }
    fetchData().then((response) => {
      console.log("response", response)
      if (response.status === 200) {
        console.log("Request was successfull.");
        setEntryData(response.data)
        setIsLoading(false)
      }
    }).catch((error) => {
      console.log(`Request failed. error:`, error);
    });
  }, [blogID])

  if (entryData == null) return <NotFound />

  return (
    <>
      <div className="  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-4 text-justify w-full mx-auto ">
          {!isLoading ? (
            <>
              <h1 className="text-xl text-center">{entryData.title}</h1>
              <br />
              <div className="mx-5">
                <h2>Article published on: {entryData.pubDate}</h2>
                <br />
                <div className="text-justify mb-3">{HTMLReactParser(entryData.content)}</div>
                <CommentsList comments={entryData.comments} />
                <AddCommentForm entryID={entryData.entryID} setEntryData={setEntryData} />
              </div>
            </>) : (<CgSpinner className="animate-spin text-9xl mx-auto" />)}
        </div>
      </div>
    </>
  );
};

export default BlogEntry;
