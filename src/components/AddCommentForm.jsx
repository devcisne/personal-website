import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CaptchaImplementation from "./CaptchaImplementation";

const AddCommentForm = ({ entryID, setEntryData }) => {
  const [isDisabled, setDisabled] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ defaultValues: { userName: "", commentContent: "" } });

  const addComment = (data) => {
    console.log(data);
    axios({
      method: "POST",
      url: `http://localhost:5000/api/blogEntries/${entryID}/add-comment`,
      data,
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {

        setEntryData(response.data);
        reset();
      }
    }).catch((error) => {
      console.log(`Request failed. error:`, error);
    });
  };

  return (
    <div id="add-comment-form">
      <h3 className="text-lg font-semibold text-[#007EA7] ">Add a Comment</h3>
      <form onSubmit={handleSubmit(addComment)}>
        <div className="my-2">
          <label
            htmlFor="userName"
            className="text-sm font-semibold text-[#007EA7]"
          >
            Name:{" "}
          </label>
          <input
            name="userName"
            type="text"
            {...register("userName", {
              required: "User name is a required field.",
              minLength: {
                value: 3,
                message: "Minimum user name length is 3 chars",
              }
            })}
            placeholder="user name..."
            className={`ml-3 mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.userName ? "border-pink-500 text-pink-600" : ""
              }
            `}
          />
          <p className="text-pink-600">{errors.userName?.message}</p>
        </div>
        <div className="my-2">
          <label
            htmlFor="commentContent"
            className="block text-sm font-semibold text-[#007EA7]"
          >
            Comment:
          </label>

          <textarea
            {...register("commentContent", {
              required: "Comment content is required",
              minLength: {
                value: 5,
                message: "Minimum comment content length is 5 chars",
              },
            })}
            name="commentContent"
            placeholder="Comment..."
            className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.commentContent ? "border-pink-500 text-pink-600" : ""
              } 
      `}
            rows="8"
            style={{ resize: "none" }}
          />
          <p className="text-pink-600">{errors.commentContent?.message}</p>
        </div>

        <div className="place-content-center  flex items-center flex-col md:flex-row">
          <button
            disabled={isDisabled}
            type="submit"
            className="inline-flex justify-center my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-[#007EA7] hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--[#00A8E8] disabled:opacity-75 disabled:bg-slate-500 mx-5"
          >
            Add Comment
          </button>
          <CaptchaImplementation setDisabled={setDisabled} />
        </div>
      </form>
    </div>
  );
};

export default AddCommentForm;
