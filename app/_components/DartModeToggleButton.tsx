"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function DartModeToggleButton() {
  const { theme, setTheme } = useTheme();
  // const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에만 상태를 설정하도록 합니다.
    // setIsMounted(true);

    // 클라이언트 사이드에서만 기본 테마를 설정합니다.
    if (!theme) {
      setTheme("light");
    }
  }, [setTheme, theme]);

  // 클라이언트 사이드에서 마운트된 후에만 버튼을 렌더링합니다.
  // if (!isMounted) {
  //   return (
  //     <>
  //       <button
  //         className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
  //         onClick={() => {
  //           setTheme(theme === "light" ? "dark" : "light");
  //         }}
  //       >
  //         {!theme || theme === "light" ? (
  //           <>
  //             <FontAwesomeIcon icon={faSun} />
  //           </>
  //         ) : (
  //           <>
  //             <FontAwesomeIcon icon={faMoon} />
  //           </>
  //         )}
  //       </button>
  //     </>
  //   );
  // }

  // const { theme, setTheme } = useTheme();

  // console.log("1.theme:" + theme);

  // useEffect(() => {
  //   console.log("2.theme:" + theme);
  //   if (!theme) {
  //     setTheme("light");
  //   }
  //   console.log("2-1.theme:" + theme);
  // }, [setTheme, theme]);

  return (
    <>
      <button
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {!theme || theme === "light" ? (
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
    // <>
    //   <button
    //     className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    //     onClick={() => {
    //       setTheme(theme === "light" ? "dark" : "light");
    //     }}
    //   >
    //     {theme === "light" ? (
    //       <>
    //         <FontAwesomeIcon icon={faSun} />
    //       </>
    //     ) : (
    //       <>
    //         <FontAwesomeIcon icon={faMoon} />
    //       </>
    //     )}
    //   </button>
    // </>
  );
}
