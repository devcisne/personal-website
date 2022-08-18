import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();

  const navigation = [
    { name: "Home", route: "/" },
    { name: "About me", route: "/about" },
    { name: "Gallery", route: "/gallery" },
    { name: "Blog", route: "/blog" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" }
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [open, setOpen] = useState(false);


  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button onClick={()=>setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <CgClose className="block h-6 w-6" />
              ) : (
                <CgMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
          {/* nav items */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"} className="font-mono text-white">
                DiegoCisneros.dev
              </Link>
              {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
            </div>
            {/* big menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.route}
                    className={classNames(
                      location.pathname === item.route
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        {open && (
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                className={classNames(
                  location.pathname === item.route
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "px-3 py-2 rounded-md text-sm font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
