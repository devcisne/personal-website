import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ThemeContext from "../Context/ThemeContext";

const Newsletter = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { isDarkModeEnabled } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "" },
  });

  const sendForm = async (data) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/registerNewsletterEmail`,
        data,
      });

      if (response.status === 200) {
        setSuccess(true);
        reset();
        // Hide success message after 10 seconds
        setTimeout(() => setSuccess(false), 10000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Newsletter signup failed:", error);
      setError("Failed to sign up for newsletter. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={
        isDarkModeEnabled
          ? "bg-[url('backgroundDark.svg')]"
          : "bg-[url('backgroundLight.svg')]"
      }
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for my newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-xl leading-6 text-black dark:text-white">
            Only the best programming memes, tech news & tips carefully selected
            from the most interesting subreddits and the depths of twitter will
            be delivered.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex" onSubmit={handleSubmit(sendForm)}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email.",
                },
              })}
              name="email"
              type="email"
              autoComplete="email"
              className={`w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs ${
                errors.email
                  ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500"
                  : ""
              }`}
              placeholder="Enter your email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#00A8E8] px-5 py-3 text-base font-medium text-white hover:bg-[#007EA7] dark:bg-[#007EA7] dark:hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-[#007EA7] focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-75"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>

          {errors.email && (
            <p id="email-error" className="mt-3 text-sm text-pink-600">
              {errors.email.message}
            </p>
          )}

          {error && (
            <div
              className="mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {isSuccess && (
            <div
              className="mt-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Success! </strong>
              <span className="block sm:inline">
                Thanks for your interest in the newsletter. Please check your
                inbox to complete the subscription process.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
