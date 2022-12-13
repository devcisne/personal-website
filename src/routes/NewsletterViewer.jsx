import React, { useState, useEffect } from "react";
import Newsletter from "../components/Newsletter";
import { Transition } from "@headlessui/react";
import { CgClose, CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { CgSpinner } from "react-icons/cg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewsletterViewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsletterEntries, setnewsletterEntries] = useState(0);
  const [currentNewsletter, setCurrentNewsletter] = useState({});

  const [isShowing, setIsShowing] = useState(false);

  const setNewsletterObject = async (newsletterID) => {
    console.log("this is being called with ", newsletterID);
    await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_ENDPOINT}/api/newsletters/${newsletterID}`,
    })
      .then((response) => {
        // console.log("response", response.headers)
        if (response.status === 200) {
          // console.log("Request was successfull. received ", response.data);
          setCurrentNewsletter(response.data);
          // console.log("set the currentNewsletter object to: ", response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(`Request failed. error:`, error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      return await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/newsletters`,
      });
    };
    fetchData()
      .then((response) => {
        // console.log("response", response.headers)
        if (response.status === 200) {
          // console.log("Request was successfull.", response.data);
          setnewsletterEntries(response.data);
          // console.log("newsletterEntries total is ", response.data);
          // console.log(`calling setNewsletterObject with ${response.data - 1} `);
          setNewsletterObject(response.data - 1);
        }
      })
      .catch((error) => {
        console.log(`Request failed. error:`, error);
      });
  }, []);

  return (
    <>
      <ul className="list-decimal list-inside hidden"></ul>

      <div className="bg-white dark:bg-black  py-10 min-h-[60vh]">
        <div className="block sm:hidden">
          <button onClick={() => setIsShowing(!isShowing)}>
            <h1 className=" px-10 text-2xl sm:text-3xl font-semibold text-[#007EA7] ">
              Newsletter
              {!isShowing && <CgDetailsMore className="inline h-8 w-8 ml-2" />}
              {isShowing && <CgClose className="inline h-8 w-8 ml-2" />}
            </h1>
          </button>

          <Transition
            show={isShowing}
            as="div"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="my-3 flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 " aria-label="Sidebar">
                {!isLoading &&
                  [...Array(newsletterEntries).keys()].map((num) => (
                    <button
                      key={num}
                      onClick={() => setNewsletterObject(num)}
                      className={classNames(
                        currentNewsletter.newsletterID === num
                          ? " border-[#00A8E8] text-black dark:text-white"
                          : "border-transparent   text-gray-400 hover:border-[#00A8E8] dark:hover:text-white hover:text-black",
                        "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                      )}
                    >
                      Newsletter {num}
                    </button>
                  ))}
              </nav>
            </div>
          </Transition>
        </div>
        <div className="flex flex-row">
          {!isLoading ? (
            <>
              <div className="basis-1/4 border-r border-gray-200 hidden sm:block">
                <div className="flex flex-grow flex-col overflow-y-auto bg-white dark:bg-black  h-full">
                  <div className="flex flex-shrink-0 items-center space-y-5 px-4">
                    <h1 className=" text-2xl sm:text-3xl font-semibold text-[#007EA7] ">
                      Newsletter
                    </h1>
                  </div>
                  <div className="mt-5 flex flex-grow flex-col">
                    <nav className="flex-1 space-y-1 " aria-label="Sidebar">
                      {!isLoading &&
                        [...Array(newsletterEntries).keys()].map((num) => (
                          <button
                            onClick={() => setNewsletterObject(num)}
                            key={num}
                            className={classNames(
                              currentNewsletter.newsletterID === num
                                ? " border-[#00A8E8] text-black dark:text-white"
                                : "border-transparent   text-gray-400 hover:border-[#00A8E8] dark:hover:text-white hover:text-black",
                              "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                            )}
                          >
                            Newsletter {num}
                          </button>
                        ))}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="sm:basis-3/4">
                <div className="sm:px-10 h-full">
                  <div className="flex flex-col text-black dark:text-white w-full py-3">
                    <div>
                      <p className="bg-[#00A8E8] font-source text-center text-white font-semibold text-xl">
                        DiegoCisneros.dev
                      </p>
                    </div>
                    <div className="py-3 px-2 bg-gray-300 dark:bg-gray-800 ">
                      {currentNewsletter && (
                        <p>
                          Issue {currentNewsletter.newsletterID} -{" "}
                          {new Date(
                            currentNewsletter.dateString
                          ).toDateString()}
                        </p>
                      )}
                    </div>
                    <div className="px-4 py-5">
                      {currentNewsletter.introSection &&
                        HTMLReactParser(currentNewsletter.introSection)}
                    </div>
                    <div className="flex flex-col lg:grid lg:grid-cols-3 ">
                      <div className="lg:border-r lg:flex lg:flex-col lg:justify-center lg:content-center">
                        <p className="text-3xl lg:text-4xl sm:text-4xl  lg:mr-2   p-2 lg:p-0">
                          Some technology related news that happened over the
                          last 2 weeks
                        </p>
                      </div>

                      <div className="lg:col-span-2 ml-2 mr-4 py-3 sm:py-0">
                        {currentNewsletter.newsSection &&
                          HTMLReactParser(currentNewsletter.newsSection)}
                      </div>
                      <div className="lg:border-r lg:flex lg:flex-col lg:justify-center lg:content-center">
                        <p className="text-3xl lg:text-4xl sm:text-4xl  lg:mr-2   p-2 lg:p-0">
                          Top programming memes I stumbled upon over the last 2
                          weeks
                        </p>
                      </div>

                      <div className="lg:col-span-2 ml-2 mr-4 py-3 sm:py-0 lg:mt-8">
                        {currentNewsletter.memeSection &&
                          HTMLReactParser(currentNewsletter.memeSection)}
                      </div>

                      <div className="lg:border-r lg:flex lg:flex-col lg:justify-center lg:content-center">
                        <p className="text-3xl lg:text-4xl sm:text-4xl  lg:mr-2 p-2 lg:p-0">
                          Some interesting articles to check out
                        </p>
                      </div>

                      <div className="lg:col-span-2 ml-2 mr-4 py-3 sm:py-0 lg:mt-8">
                        {currentNewsletter.guidesSection &&
                          HTMLReactParser(currentNewsletter.guidesSection)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <CgSpinner className="animate-spin text-9xl mx-auto dark:text-white" />
          )}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default NewsletterViewer;
