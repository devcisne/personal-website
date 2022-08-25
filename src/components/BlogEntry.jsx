import React from 'react'
import HTMLReactParser from "html-react-parser";
import CommentsList from './CommentsList';
import AddCommentForm from './addCommentForm';
import { useState } from 'react';

const BlogEntry = ({entry}) => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    const {title,content,pubDate,comments}=entry
  return (
    <>
    
    {/* <div className='text-lg'>BlogEntry</div> */}
    <h1 className='text-xl text-center'>{title}</h1>
    <br />
    <h2>Article published on: {pubDate}</h2>
    {/* <h2>{id}</h2> */}
    <br />
    <div className='text-justify'>{HTMLReactParser(content)}</div>
    <CommentsList comments={comments} />
    <AddCommentForm articleName={title} setArticleInfo={setArticleInfo} />


    </>
  )
}

export default BlogEntry