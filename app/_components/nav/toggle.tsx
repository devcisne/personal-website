'use client';

import React, { useState, useContext, useCallback } from "react";
import { Switch } from "@headlessui/react";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import ThemeContext from "@/lib/context/ThemeContext";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface ToggleProps {
  className?: string;
}

const Toggle: React.FC<ToggleProps> = React.memo(({ className }) => {
  const { setDarkModeEnabled, isDarkModeEnabled } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(isDarkModeEnabled);

  const toggleFunction = useCallback(
    (value: boolean) => {
      setDarkModeEnabled(value);
      setEnabled(value);
    },
    [setDarkModeEnabled]
  );

  return (
    <div className={className || ""}>
      <Switch
        checked={enabled}
        onChange={toggleFunction}
        className={classNames(
          enabled ? "bg-gray-800" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ring-2 ring-[#00A8E8] focus:ring-offset-2"
        )}
        aria-label={enabled ? "Switch to light mode" : "Switch to dark mode"}
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
});

Toggle.displayName = 'Toggle';

export default Toggle;
