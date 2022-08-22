import React from 'react'

const BlogEntry = ({entry}) => {
    console.log("wtf")
    console.log(entry.title)
    const {title,id,content,pubDate}=entry
    console.log(title)
  return (
    <>
    
    <div>BlogEntry</div>
    <h1>{title}</h1>
    <h2>{id}</h2>
    <h2>{content}</h2>
    <h2>{pubDate}</h2>

    </>
  )
}

export default BlogEntry