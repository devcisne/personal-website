import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CaptchaImplementation from "./CaptchaImplementation";

const AddCommentForm = ({ entryID, setEntryData }) => {
  const [isDisabled, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { userName: "", commentContent: "" } });

  const addComment = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/blogEntries/${entryID}/add-comment`,
        data,
      });

      if (response.status === 200) {
        setEntryData(response.data);
        reset();
        setSubmitSuccess(true);
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Request failed:", error);
      setSubmitError("Failed to add comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="add-comment-form" className="mt-8">
      <h3 className="text-lg font-semibold text-[#007EA7] mb-4">
        Add a Comment
      </h3>
      <form onSubmit={handleSubmit(addComment)} className="space-y-4">
        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-semibold text-[#007EA7]"
          >
            Name:
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            {...register("userName", {
              required: "User name is a required field.",
              minLength: {
                value: 3,
                message: "Minimum user name length is 3 characters",
              },
            })}
            placeholder="Your name..."
            className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
              errors.userName ? "border-pink-500 text-pink-600" : ""
            }`}
            aria-invalid={errors.userName ? "true" : "false"}
            aria-describedby={errors.userName ? "userName-error" : undefined}
          />
          {errors.userName && (
            <p id="userName-error" className="text-pink-600 mt-1">
              {errors.userName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="commentContent"
            className="block text-sm font-semibold text-[#007EA7]"
          >
            Comment:
          </label>
          <textarea
            id="commentContent"
            {...register("commentContent", {
              required: "Comment content is required",
              minLength: {
                value: 5,
                message: "Minimum comment content length is 5 characters",
              },
            })}
            name="commentContent"
            placeholder="Your comment..."
            className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
              errors.commentContent ? "border-pink-500 text-pink-600" : ""
            }`}
            rows="4"
            style={{ resize: "vertical" }}
            aria-invalid={errors.commentContent ? "true" : "false"}
            aria-describedby={
              errors.commentContent ? "commentContent-error" : undefined
            }
          />
          {errors.commentContent && (
            <p id="commentContent-error" className="text-pink-600 mt-1">
              {errors.commentContent.message}
            </p>
          )}
        </div>

        {submitError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{submitError}</span>
          </div>
        )}

        {submitSuccess && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline">Comment added successfully!</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            disabled={isDisabled || isSubmitting}
            type="submit"
            className="w-full sm:w-auto inline-flex justify-center my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-[#007EA7] hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A8E8] disabled:opacity-75 disabled:bg-slate-500"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Adding Comment..." : "Add Comment"}
          </button>
          <div className="w-full sm:w-auto">
            <CaptchaImplementation setDisabled={setDisabled} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCommentForm;
