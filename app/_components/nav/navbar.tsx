'use client';

import React, { useState, useContext } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import { Transition } from "@headlessui/react";
import Toggle from "./toggle";
import Link from "next/link";
import ThemeContext from "@/lib/context/ThemeContext";

// Navigation items as a constant to prevent recreation on each render
const NAVIGATION_ITEMS = [
  { name: "Home", route: "/" },
  { name: "About me", route: "/about" },
  { name: "Gallery", route: "/gallery" },
  // { name: "Portfolio", route: "/portfolio" },
  { name: "Contact", route: "/contact" },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
              <Link
                href="/"
                className="text-[#007EA7] hover:text-[#00A8E8]"
                aria-label="Home page"
              >
                DiegoCisneros.dev
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
              </Link>
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
                pathname === item.route
                  ? "dark:text-white text-black font-semibold"
                  : "text-gray-400 hover:text-black dark:hover:text-white font-normal hover:font-semibold",
                "py-2 rounded-md flex items-center"
              )}
            >
              <Link
                href={item.route}
                className={classNames(
                  "text-[#007EA7] hover:text-[#00A8E8]",
                  pathname === item.route ? "font-semibold" : ""
                )}
                aria-current={
                  pathname === item.route ? "page" : undefined
                }
              >
                <div className="group transition duration-300">
                  {item.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
                </div>
              </Link>
              <span className="ml-1 text-base self-center">/</span>
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
                pathname === item.route
                  ? "dark:text-white text-black font-semibold"
                  : "text-gray-400 hover:text-black dark:hover:text-white font-normal hover:font-semibold",
                "px-3 py-2 border-b-2 hover:border-[#00A8E8] dark:hover:text-white transition-all duration-1000"
              )}
            >
              <Link
                href={item.route}
                className="text-[#007EA7] hover:text-[#00A8E8]"
                onClick={() => setOpen(false)}
                aria-current={
                  pathname === item.route ? "page" : undefined
                }
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="px-3 pt-2">
            <Toggle />
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default React.memo(NavBar);
