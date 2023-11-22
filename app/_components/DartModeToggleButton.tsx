"use client";
import { useTheme } from "next-themes";
// import { Allerta_Stencil } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function DartModeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? (
          <>
            <FontAwesomeIcon icon={faSun} />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} />
          </>
        )}
      </button>
    </>
  );
}
