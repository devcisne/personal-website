'use client';

import React, { useState } from "react";

interface CollapsableSectionProps {
  title: string;
  text: string[];
}

const CollapsableSection: React.FC<CollapsableSectionProps> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-white dark:bg-black border border-[#00A8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-semibold text-[#007EA7]">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          {text.map((line, index) => (
            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 mb-2 last:mb-0"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsableSection;
