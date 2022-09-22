import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Newsletter = () => {
  const [isSuccess, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "" },
  });

  const sendForm = (data) => {
    const postData = async () => {
      return await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/registerNewsletterEmail`,
        data,
      });
    };

    postData()
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          // console.log("newsletter sign up form submitted successfully");
          setSuccess(true);
          reset();
          setTimeout(() => setSuccess(false), 10000);
        }
      })
      .catch((error) => {
        console.log(`Message failed to send. error:`, error);
      });
  };

  return (
    <div className="bg-[#003459]">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for my newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Only the best programming memes, tech news &amp; tips carefully
            selected from the most interesting subreddits and the depths of
            twitter will be delivered.
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
              } `}
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#00A8E8] px-5 py-3 text-base font-medium text-white hover:bg-[#007EA7] focus:outline-none focus:ring-2 focus:ring-[#007EA7] focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-pink-600">{errors.email?.message}</p>
          {isSuccess && (
            <p className="mt-3 text-sm font-bold text-[#4897bf]">
              {/* We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium text-white underline">
                Privacy Policy.
              </a> */}
              Thanks for your interest in the newsletter. Please check your
              inbox to complete the subscription process.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
