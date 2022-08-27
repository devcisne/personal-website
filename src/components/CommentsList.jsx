import React from "react";
import { CgUser } from "react-icons/cg";


const CommentsList = ({ comments }) => (
  <>
    <h3 className="text-lg font-semibold text-[#007EA7] ">Comments:</h3>
    {comments.map((comment, key) => (
      <div className="mb-6  border-b-4 border-b-black" key={key}>
       <CgUser className="inline text-2xl"/> <h3 className="text-lg mb-3 inline"> {comment.username}</h3>
        <p>"{comment.text}"</p>
      </div>
    ))}
    {comments.length===0 && <div className="mb-6  border-b-4 border-b-black"> <p>There are no comments on this article yet, be the first!</p></div>}
  </>
);

export default CommentsList;
