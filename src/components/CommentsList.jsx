import React from "react";
import { CgUser } from "react-icons/cg";

const CommentsList = React.memo(({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="mb-6 border-b-4 border-b-black">
        <h3 className="text-lg font-semibold text-[#007EA7]">Comments:</h3>
        <p>There are no comments on this article yet, be the first!</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#007EA7]">Comments:</h3>
      {comments.map((comment, index) => (
        <div className="mb-6 border-b-4 border-b-black" key={index}>
          <div className="flex items-center">
            <CgUser className="inline text-2xl mr-2" />
            <h3 className="text-lg mb-3">{comment.userName}</h3>
          </div>
          <p className="pl-8">"{comment.commentContent}"</p>
        </div>
      ))}
    </div>
  );
});

export default CommentsList;
