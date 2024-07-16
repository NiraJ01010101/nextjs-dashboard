"use client";
import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { GoBell, GoDotFill } from "react-icons/go";

function Navbar() {
  return (
    <nav className="bg-backgroundPrimary shadow-sm px-4 py-2 mb-6">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            Mobile View
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4">
                <form className="w-80 mx-auto">
                  <div className="relative">
                    <input
                      className="appearance-none bg-backgroundSecondary bg-opacity-75 px-10 transition-colors rounded-md w-full py-2 leading-tight focus:outline-none placeholder:text-sm"
                      id="username"
                      type="text"
                      placeholder="Search or type a command"
                    />
                    <div className="absolute right-0 inset-y-0 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 mr-3 h-5 w-5 text-textPrimary cursor-pointer bg-backgroundPrimary p-1 rounded-md"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>

                    <div className="absolute left-0 inset-y-0 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-3 text-textSecondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-6">
            <button className="bg-[#2a85ff] flex flex-row gap-2 items-center rounded-lg px-5 py-2 text-base font-medium text-[#FFF] transition duration-200 hover:bg-[#5ea3fe]">
              <FiPlus />
              Create
            </button>

            <div className="relative flex">
              <GoDotFill className="absolute inline-flex top-[-5px] right-[-5px] text-[16px] rounded-full text-[#fd6a57] z-10" />
              <span className="relative inline-flex rounded-full ">
                <BiMessageDetail className="text-xl text-[#71767d]" />
              </span>
            </div>

            <div className="relative flex">
              <GoDotFill className="absolute inline-flex top-[-5px] right-[-4px] text-[16px] rounded-full text-[#fd6a57] z-10" />
              <span className="relative inline-flex rounded-full ">
                <GoBell className="text-xl text-[#71767d]" />
              </span>
            </div>

            {/* ----user-image---- */}
            <div className="relative">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
