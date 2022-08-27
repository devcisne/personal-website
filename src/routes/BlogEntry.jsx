import React from "react";
import { useParams } from "react-router-dom";
import blogEntries from "../blog-entries-temp";
import HTMLReactParser from "html-react-parser";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import { useState } from "react";

const BlogEntry = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  const { blogID } = useParams();
  const { title, content, pubDate, comments } = blogEntries.find(
    (entry) => entry.id === blogID
  );
  console.log(title);

  return (
    <>
      <div className="  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-4 text-justify w-full mx-auto ">
          <h1 className="text-xl text-center">{title}</h1>
          <br />
          <h2>Article published on: {pubDate}</h2>
          <br />
          <div className="text-justify mb-3">{HTMLReactParser(content)}</div>
          <CommentsList comments={comments} />
          <AddCommentForm articleName={title} setArticleInfo={setArticleInfo} />
        </div>
      </div>
    </>
  );
};

export default BlogEntry;
