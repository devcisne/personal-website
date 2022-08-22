import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogEntry from "../components/BlogEntry";

const blogEntries=[{
  id:"1",
  title:"Title 1",
  content:"Content 1",
  pubDate:"1/1/2000"
},
{
  id:"2",
  title:"Title 2",
  content:"Content 2",
  pubDate:"2/1/2000"
},
{
  id:"3",
  title:"Title 3",
  content:"Content 3",
  pubDate:"3/1/2000"
}
]


function Blog() {
  return (
    <>
      <NavBar />
      <div className="h-[80vh]  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-4">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Blog</h1>
          {blogEntries.map(element => (
            <BlogEntry entry={element}/>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
