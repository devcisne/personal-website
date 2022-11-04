import React, { useState, useEffect } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Toggle from "./Toggle";
import { BubblyLink } from "react-bubbly-transitions";

function NavBar() {
  const location = useLocation();

  const navigation = [
    { name: "Home", route: "/" },
    { name: "About me", route: "/about" },
    { name: "Gallery", route: "/gallery" },
    { name: "Blog", route: "/blog" },
    // { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className=" dark:bg-red-800" id="header">
      <div
        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16"
        id="headerContent"
      >
        <div
          className="absolute inset-y-0 left-0 flex items-center px-2 sm:static sm:inset-auto  sm:pr-0"
          id="logoSection"
        >
          <div className="group transition duration-300 font-mono text-gray-400">
            <BubblyLink to={"/"} colorStart="#00A8E8" duration={900}>
              DiegoCisneros.dev
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
            </BubblyLink>
          </div>
        </div>
        <div
          className="absolute inset-y-0 right-0 flex items-center md:hidden"
          id="mobile menu icon"
        >
          {/* Mobile menu button*/}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <CgClose className="block h-6 w-6" />
            ) : (
              <CgMenu className="block h-6 w-6" />
            )}
          </button>
        </div>
        {/* nav items */}
        {/* big menu */}
        <div className="hidden md:flex  space-x-2 items-center">
          {navigation.map((item) => (
            <div
              className={classNames(
                location.pathname === item.route
                  ? " text-white"
                  : "text-gray-300  hover:text-white",
                " py-2 rounded-md text-sm font-medium"
              )}
            >
              <BubblyLink
                key={item.name}
                to={item.route}
                colorStart="#00A8E8"
                duration={900}
                // colorEnd=''
              >
                {item.name}
              </BubblyLink>
              <span className="mx-1">/</span>
            </div>
          ))}
          <Toggle/>

        </div>
      </div>
      <div className="md:hidden">
          {
            <Transition  show={open}
            className="flex flex-col px-2 py-2 space-y-1"          
            as="div"
            enter="transition ease-out duration-1000"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
              {navigation.map((item) => (
                <div
                  className={classNames(
                    location.pathname === item.route
                      ? " text-white"
                      : "text-gray-300  hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                >
                  <BubblyLink
                    key={item.name}
                    to={item.route}
                    colorStart="#00A8E8"
                    duration={900}
                  >
                    {item.name}
                  </BubblyLink>
                </div>
              ))}
              <Toggle  className="px-3"/>

            </Transition>
          }
      </div>
    </div>
  );
}

export default NavBar;
