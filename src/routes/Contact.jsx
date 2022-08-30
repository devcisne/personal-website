import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CaptchaImplementation from "../components/CaptchaImplementation";

const Contact = () => {
  // const captchaRef = useRef(null)
  const [isDisabled, setDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { senderName: "", email: "", subject: "", msg: "" },
  });

  const sendForm = (data) => {
    console.log(data);
    axios({ method: "POST", url: "http://localhost:5000/api/sendMail", data })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Contact form submitted successfully");
          reset();
        }
      })
      .catch((error) => {
        console.log(`Message failed to send. error:`, error);
      });
  };

  return (
    <>
      <div className="  bg-[#ffffff] border-t border-gray-900 ">
        <div className=" py-10 px-10 h-full">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Contact</h1>

          <div className="flex sm:flex-row flex-col ">
            <div className="flex-auto w-6/6 sm:w-3/6 ">
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
                      })}
                      name="senderName"
                      type="text"
                      placeholder="Name"
                      className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                        errors.senderName ? "border-pink-500 text-pink-600" : ""
                      } 
                `}
                    />
                    <p className="text-pink-600">
                      {errors.senderName?.message}
                    </p>
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
                      } 
                `}
                    />
                    <p className="text-pink-600">{errors.email?.message}</p>
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
                          message: "Minimum subject length is 5 chars",
                        },
                      })}
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                        errors.subject ? "border-pink-500 text-pink-600" : ""
                      } 
                `}
                    />
                    <p className="text-pink-600">{errors.subject?.message}</p>
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
                          value: 5,
                          message: "Minimum message length is 5 chars",
                        },
                      })}
                      name="msg"
                      type="text"
                      placeholder="Message..."
                      className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                        errors.msg ? "border-pink-500 text-pink-600" : ""
                      } 
                `}
                      rows="8"
                      style={{ resize: "none" }}
                    />
                    <p className="text-pink-600">{errors.msg?.message}</p>
                  </div>
                  <div className="place-content-center  flex items-center flex-col md:flex-row">
                    <button
                      disabled={isDisabled}
                      type="submit"
                      className="inline-flex justify-center my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-[#007EA7] hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--[#00A8E8] disabled:opacity-75 disabled:bg-slate-500 mx-5"
                    >
                      Submit
                    </button>
                    <CaptchaImplementation setDisabled={setDisabled} />
                  </div>
                </form>
              </div>
            </div>
            <div className=" flex flex-auto w-6/6 sm:w-3/6 bg-brick-pattern border border-transparent rounded-md mt-2 sm:mt-0">
              <img
                className=" mx-auto"
                src="/images/contact.svg"
                alt="contact.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
