import React, { Fragment, useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import HTMLReactParser from "html-react-parser";

const CollapsableSection = ({ title, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {!isCollapsed && (
          <IoIosArrowDroprightCircle className="inline mr-2" color="#007EA7" />
        )}
        {isCollapsed && (
          <IoIosArrowDropdownCircle className="inline mr-2" color="#007EA7" />
        )}
        <h1 className="text-l font-semibold text-[#007EA7] inline hover:underline hover:decoration-[#00A8E8]">
          {title}
        </h1>
      </button>
      {!isCollapsed && (
        <>
          <br />
          <p>{HTMLReactParser(text[0].slice(0, 180))}...</p>
        </>
      )}
      {isCollapsed && (
        <div>
          {text.map((paragraph) => (
            <Fragment key={(Math.random() + 1).toString(36).substring(2, 5)}>
              <p>{HTMLReactParser(paragraph)}</p>
              <br />
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default CollapsableSection;
