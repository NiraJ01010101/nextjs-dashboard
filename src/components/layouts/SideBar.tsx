"use client";
import { useEffect, useState } from "react";
import { links } from "../../data/sidebarLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdElectricBolt, MdSunny } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

function SideBar({ isCollapsed, setIsCollapsed }: any) {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = (e: any) => {
    setIsDarkMode(e.target.checked);
  };

  return (
    <>
      <aside className="rounded-md sidebar sidebar-default h-screen shadow-md relative">
        <div
          className={`sidebar-header flex items-center relative p-4  ${isCollapsed ? "justify-start" : "justify-center"
            } `}
        >
          <i className="bg-textPrimary bg-opacity-30 rounded-lg p-2">
            <MdElectricBolt className="size-4 text-backgroundPrimary" />
          </i>
          {/* ------toggle-icons---- */}
          <div
            className={`sidebar-toggle cursor-pointer absolute right-[-12px] top-[25%] bg-textPrimary text-backgroundPrimary rounded-full p-2`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <i className="icon">
              {isCollapsed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </i>
          </div>
        </div>
        <div className="sideBar-list mt-10">
          {links &&
            links?.map((item) => (
              <div
                key={item.title}
                className={`transition-all duration-500 mx-4 my-2 ${pathname === `/${item.links[0].name}`
                  ? "text-textPrimary bg-backgroundActive shadow-md rounded-md p-2"
                  : "text-textPrimary opacity-50 p-2"
                  }`}
              >
                {item.links.map((link) => (
                  <Link
                    href={`/${link.name}`}
                    key={link.name}
                    className={`flex items-center gap-3 ${isCollapsed ? "justify-start" : "justify-center"
                      }`}
                  >
                    <i className="text-2xl">{link.icon}</i>
                    {isCollapsed && (
                      <span className="capitalize font-medium">
                        {item.title}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
        </div>

        <div className="sideBar-bottom absolute bottom-0 w-full">
          <div className="border-t border-textSecondary border-opacity-50"></div>
          <div className="flex p-2 px-4 justify-between items-center">
            <p className="align-middle text-sm">
              <FaRegCircleQuestion className="text-lg inline me-1" />
              {isCollapsed && "Help & Getting started"}
            </p>
            <p className="bg-[#cabdff] rounded-lg size-6 text-center font-medium align-middle">
              8
            </p>
          </div>
          {/* -----------mode-toggle-------- */}
          <div
            className={`flex items-center text-textPrimary justify-evenly ${isCollapsed ? "p-2 px-4" : "p-2 px-1"
              }`}
          >
            <input
              type="checkbox"
              className="checkbox opacity-0 absolute"
              id="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            {isCollapsed ? (
              <label
                htmlFor="checkbox"
                className="checkbox-label border border-textSecondary bg-backgroundSecondary w-48 h-9 rounded-full relative p-2 cursor-pointer flex items-center"
              >
                <span className="w-24 text-textPrimary dark:text-textSecondary flex justify-center items-center gap-2 z-10">
                  <MdSunny /> Light
                </span>
                <span className="w-24 text-textPrimary dark:text-textSecondary flex justify-center items-center gap-2 z-10">
                  <FaMoon /> Moon
                </span>
                <span
                  className={`drop-shadow-md bg-backgroundPrimary w-24 h-[26px] absolute left-[12px] top-[4px] rounded-full transition-transform duration-200 ease-linear ${isDarkMode ? "translate-x-[76px]" : "translate-x-[-6px]"
                    }`}
                ></span>
              </label>
            ) : (
              <label
                htmlFor="checkbox"
                className="checkbox-label border border-textSecondary  bg-backgroundSecondary w-16 h-9 rounded-full relative cursor-pointer flex items-center"
              >
                <span className="w-8 text-textPrimary flex justify-center items-center gap-2 z-10">
                  <MdSunny />
                </span>
                <span className="w-8 text-textPrimary flex justify-center items-center gap-2 z-10">
                  <FaMoon />
                </span>
                <span
                  className={`drop-shadow-md bg-backgroundPrimary w-6 h-[26px] absolute left-[12px] top-[4px] rounded-full transition-transform duration-200 ease-linear ${isDarkMode ? "translate-x-[20px]" : "translate-x-[-6px]"
                    }`}
                ></span>
              </label>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
