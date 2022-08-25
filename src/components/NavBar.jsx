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
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"} className="group transition duration-300 font-mono text-white">
                DiegoCisneros.dev
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
              </Link>
            </div>
            {/* big menu */}
            <div className="hidden md:block md:ml-6">
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded text-gray-400 hover:text-white ring-2  ring-gray-400 hover:ring-white"
                >
          <a href = "/documents/diegoCisnerosCV.pdf" target = "_blank" className="mx-2">Resume</a>
                </button>
              </div>
        </div>
      </div>
      <div className="md:hidden">
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
