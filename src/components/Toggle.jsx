import { useState, useContext } from "react";
import { Switch } from "@headlessui/react";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import ThemeContext from "../Context/ThemeContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Toggle = ({className}) => {
  const { setDarkModeEnabled } = useContext(ThemeContext);
  const newClassName=className
  const [enabled, setEnabled] = useState(false);
  const toggleFunction = (value) => {
    console.log("value", value);
    if (value) {
      setDarkModeEnabled(true)
    } else {
      setDarkModeEnabled(false);
    }
    setEnabled(value);
  };

  return (
    <div className={`${newClassName}`}>
    <Switch
      checked={enabled}
      onChange={toggleFunction}
      className={classNames(
        enabled ? "bg-indigo-600" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            enabled
              ? "opacity-0 ease-out duration-100"
              : "opacity-100 ease-in duration-200",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <BsLightbulbFill />
        </span>
        <span
          className={classNames(
            enabled
              ? "opacity-100 ease-in duration-200"
              : "opacity-0 ease-out duration-100",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <BsLightbulbOffFill />
        </span>
      </span>
    </Switch>
    </div>

  );
};

export default Toggle;
