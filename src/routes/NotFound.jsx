import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-white dark:bg-black">
      <img
        className="mx-auto max-w-full h-auto"
        src="/images/404.svg"
        alt="Page not found - 404 error"
      />
      <h1 className="text-3xl font-bold text-[#007EA7] mt-8">Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#007EA7] hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A8E8]"
        aria-label="Return to homepage"
      >
        Return to Homepage
      </a>
    </div>
  );
};

export default NotFound;
