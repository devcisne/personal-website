import React from 'react'

const NewsletterSuccess = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black py-16 min-h-[85vh]">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="mt-2 block text-centertext-3xl font-semibold text-[#007EA7] leading-8 tracking-tight sm:text-4xl">
            Your subscription request has been successful!
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-black dark:text-white">
          Thanks for confirming your subscription. You have been added to my email list and will be receiving the next newsletter soon.

          </p>
        </div>
      </div>
      <div className=" flex flex-auto w-6/6  rounded-md ">
              <img
                className=" mx-auto h-[35vh] mt-10"
                src="/images/newsletterSuccess.svg"
                alt="newsletterSuccess.svg"
              />
            </div>
    </div>
  )
}

export default NewsletterSuccess