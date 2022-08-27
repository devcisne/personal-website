import React from "react";
import blogEntries from "../blog-entries-temp";
import BlogEntryList from "../components/BlogEntryList";

const Blog = () => {
  return (
    <>
      <div className="min-h-[85vh] bg-[#ffffff] border-t border-gray-900 ">
        <div className=" py-10 px-4">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Blog</h1>
          <BlogEntryList blogEntries={blogEntries} />
        </div>
      </div>
    </>
  );
};

export default Blog;
