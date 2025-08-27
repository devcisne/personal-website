import React, { useState, useEffect, useContext, useCallback } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Toggle from "./Toggle";
import { BubblyLink } from "react-bubbly-transitions";
import ThemeContext from "../Context/ThemeContext";
import "./Navbar.css";

// Navigation items as a constant to prevent recreation on each render
const NAVIGATION_ITEMS = [
  { name: "Home", route: "/" },
  { name: "About me", route: "/about" },
  { name: "Gallery", route: "/gallery" },
  { name: "Blog", route: "/blog" },
  { name: "Contact", route: "/contact" },
  { name: "Newsletter", route: "/newsletter" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const location = useLocation();
  const { isDarkModeEnabled } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Handle escape key to close mobile menu
  const handleEscape = useCallback((event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, handleEscape]);

  // Close menu when clicking outside
  const handleClickOutside = useCallback((event) => {
    const navBar = document.getElementById("header");
    if (navBar && !navBar.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, handleClickOutside]);

  return (
    <div className="dark:bg-black" id="header">
      <div
        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16"
        id="headerContent"
      >
        <div
          className="absolute inset-y-0 left-0 flex items-center px-2 sm:static sm:inset-auto sm:pr-0"
          id="logoSection"
        >
          <div className="group transition duration-300 text-gray-400 font-source">
            <BubblyLink
              to="/"
              colorStart={isDarkModeEnabled ? "#003459" : "#00A8E8"}
              duration={900}
              aria-label="Home page"
            >
              DiegoCisneros.dev
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
            </BubblyLink>
          </div>
        </div>
        <div
          className="absolute inset-y-0 right-0 flex items-center lg:hidden"
          id="mobile-menu-icon"
        >
          {/* Mobile menu button*/}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded={open}
            aria-label={open ? "Close main menu" : "Open main menu"}
          >
            <span className="sr-only">
              {open ? "Close main menu" : "Open main menu"}
            </span>
            {open ? (
              <CgClose className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <CgMenu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {/* nav items */}
        {/* big menu */}
        <div className="hidden lg:flex space-x-2 items-center">
          {NAVIGATION_ITEMS.map((item) => (
            <div
              key={item.name}
              className={classNames(
                location.pathname === item.route
                  ? "dark:text-white text-black font-semibold"
                  : "text-gray-400 hover:text-black dark:hover:text-white font-normal hover:font-semibold",
                "py-2 rounded-md"
              )}
            >
              <BubblyLink
                to={item.route}
                colorStart={isDarkModeEnabled ? "#003459" : "#00A8E8"}
                colorEnd={isDarkModeEnabled ? "#000" : "#fff"}
                duration={900}
                aria-current={
                  location.pathname === item.route ? "page" : undefined
                }
              >
                <div className="group transition duration-300">
                  {item.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
                </div>
              </BubblyLink>
              <span className="ml-1 text-lg lg:text-2xl">/</span>
            </div>
          ))}
          <Toggle />
        </div>
      </div>
      <div className="lg:hidden">
        <Transition
          show={open}
          className="flex flex-col px-2 space-y-1 pb-3"
          as="div"
          enter="transition ease-out duration-1000"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <div
              key={item.name}
              className={classNames(
                location.pathname === item.route
                  ? "dark:text-white text-black font-semibold"
                  : "text-gray-400 hover:text-black dark:hover:text-white font-normal hover:font-semibold",
                "px-3 py-2 border-b-2 hover:border-[#00A8E8] dark:hover:text-white transition-all duration-1000"
              )}
            >
              <BubblyLink
                to={item.route}
                colorStart={isDarkModeEnabled ? "#003459" : "#00A8E8"}
                duration={900}
                onClick={() => setOpen(false)}
                aria-current={
                  location.pathname === item.route ? "page" : undefined
                }
              >
                {item.name}
              </BubblyLink>
            </div>
          ))}
          <div className="px-3 pt-2">
            <Toggle />
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default React.memo(NavBar);
