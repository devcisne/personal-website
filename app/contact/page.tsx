'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CaptchaImplementation from "@/components/ui/captcha";

export default function ContactPage() {
  const [isDisabled, setDisabled] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { senderName: "", email: "", subject: "", msg: "" },
  });

  const sendForm = async (data: { senderName: string; email: string; subject: string; msg: string }) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/sendMail`,
        data,
      });

      if (response.status === 200) {
        setSuccess(true);
        reset();
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Message failed to send:", error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-black">
      <div className="py-10 px-10 h-full">
        <h1 className="text-3xl font-semibold text-[#007EA7]">Contact</h1>

        <div className="flex sm:flex-row flex-col">
          <div className="flex-auto w-6/6 sm:w-3/6">
            <div className="mt-3 mx-3">
              <form onSubmit={handleSubmit(sendForm)}>
                <div className="mb-2">
                  <label
                    htmlFor="senderName"
                    className="block text-sm font-semibold text-[#007EA7]"
                  >
                    Name
                  </label>
                  <input
                    {...register("senderName", {
                      required: "Name is a required field.",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters long",
                      },
                    })}
                    name="senderName"
                    type="text"
                    placeholder="Name"
                    className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                      errors.senderName ? "border-pink-500 text-pink-600" : ""
                    }`}
                    aria-invalid={errors.senderName ? "true" : "false"}
                    aria-describedby={
                      errors.senderName ? "senderName-error" : undefined
                    }
                  />
                  {errors.senderName && (
                    <p id="senderName-error" className="text-pink-600 mt-1">
                      {errors.senderName.message}
                    </p>
                  )}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#007EA7]"
                  >
                    Email
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
                    placeholder="Email"
                    className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                      errors.email ? "border-pink-500 text-pink-600" : ""
                    }`}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-pink-600 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#007EA7]"
                  >
                    Subject
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is a required field.",
                      minLength: {
                        value: 5,
                        message: "Minimum subject length is 5 characters",
                      },
                    })}
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                      errors.subject ? "border-pink-500 text-pink-600" : ""
                    }`}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-pink-600 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="msg"
                    className="block text-sm font-semibold text-[#007EA7]"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("msg", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long",
                      },
                    })}
                    name="msg"
                    placeholder="Message..."
                    className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                      errors.msg ? "border-pink-500 text-pink-600" : ""
                    }`}
                    rows={8}
                    style={{ resize: "none" }}
                    aria-invalid={errors.msg ? "true" : "false"}
                    aria-describedby={errors.msg ? "msg-error" : undefined}
                  />
                  {errors.msg && (
                    <p id="msg-error" className="text-pink-600 mt-1">
                      {errors.msg.message}
                    </p>
                  )}
                </div>

                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                    role="alert"
                  >
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}

                {isSuccess && (
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                    role="alert"
                  >
                    <strong className="font-bold">Success! </strong>
                    <span className="block sm:inline">
                      Message sent successfully!
                    </span>
                  </div>
                )}

                <div className="place-content-center flex items-center flex-col md:flex-row">
                  <button
                    disabled={isDisabled || isSubmitting}
                    type="submit"
                    className="inline-flex justify-center my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-[#007EA7] hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A8E8] disabled:opacity-75 disabled:bg-slate-500 mx-5"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                  <CaptchaImplementation setDisabled={setDisabled} />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-auto w-6/6 sm:w-3/6 mt-2 sm:mt-0">
            <img
              className="mx-auto"
              src="/images/contact.svg"
              alt="Contact illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
