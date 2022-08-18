import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues:{senderName:"",email:"",subject:"",msg:""} });

  return (
    <>
      <NavBar />
      <div className="h-[80vh]  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-10">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Contact</h1>
          <div className="mt-3">
            <form 
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <label
                htmlFor="senderName"
                className="block text-sm font-medium text-gray-700"
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
                className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.senderName ? "border-pink-500 text-pink-600" :""} 
                `}
              />
              <p className="text-pink-600">{errors.senderName?.message}</p>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: 'Email is required',
                  pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email.',
                  }
                })}
                name="email"
                type="email"
                placeholder="Email"
                className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.email ? "border-pink-500 text-pink-600" :""} 
                `}
              />
              <p className="text-pink-600">{errors.email?.message}</p>


              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                {...register("subject", {
                  required: "Subject is a required field.",
                  minLength:{value:5,message:"Minimum subject length is 5 chars"}

                })}
                name="subject"
                type="text"
                placeholder="Subject"
                className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.subject ? "border-pink-500 text-pink-600" :""} 
                `}
              />
              <p className="text-pink-600">{errors.subject?.message}</p>


              <label
                htmlFor="msg"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                {...register("msg", {required:"Message is required",
                  minLength:{value:5,message:"Minimum message length is 5 chars"}
                })}
                name="msg"
                type="text"
                placeholder="Message..."
                className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.msg ? "border-pink-500 text-pink-600" :""} 
                `}
              />
              <p className="text-pink-600">{errors.msg?.message}</p>
               
              <button
                type="submit"
                className="inline-flex justify-center mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#007EA7] hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--[#00A8E8]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
