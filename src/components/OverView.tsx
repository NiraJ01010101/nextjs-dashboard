"use client";
import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import { BsHandbag } from "react-icons/bs";
import { FaArrowDown, FaArrowUp, FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosInformationCircle } from "react-icons/io";
import { SlGraph } from "react-icons/sl";

function OverView() {
  const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Alice Johnson" },
    { id: 3, name: "John Doe" },
  ];
  const [selected, setSelected] = useState(people[3]);
  const [isActive, setIsActive] = useState("customers");

  return (
    <>
      <div className="p-4 bg-backgroundPrimary rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-textPrimary text-2xl font-bold">
            <span className="bg-accent2 w-3 h-7 rounded inline-flex items-center align-middle me-4"></span>
            Overview
          </h2>

          {/* ------select-user----- */}
          <Listbox value={selected} onChange={setSelected} >
            <div className="relative z-20">
              <ListboxButton className="relative w-full cursor-default rounded-md bg-backgroundSecondary py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                {selected ? selected.name : "Select a person"}
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <IoIosArrowDown
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  />
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm bg-backgroundPrimary"
              >
                {people?.map((person) => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className="group relative select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-textSecondary data-[focus]:text-textPrimary cursor-pointer"
                  >
                    <div className="flex items-center">
                      <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                        {person.name}
                      </span>
                    </div>

                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-textPrimary group-data-[focus]:text-textPrimary [.group:not([data-selected])_&]:hidden">
                      <FaCheck aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        {/* ------Card------ */}
        <div className="card-container flex flex-col lg:flex-row gap-4 bg-backgroundSecondary p-3 rounded-2xl relative">
          <div
            className="lg:w-1/2 p-2 z-10"
            onClick={() => setIsActive("customers")}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-3/4 flex gap-4">
                <div className="flex items-center justify-center bg-[#b1e6fc] rounded-full size-10">
                  <BsHandbag className="text-black" />
                </div>
                <div>
                  <p className="inline-flex items-center text-sm gap-1">
                    Customers{" "}
                    <span>
                      <IoIosInformationCircle className="text-textSecondary" />
                    </span>
                  </p>
                  <p className="items-center text-5xl font-bold">1024</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex items-center justify-center bg-accent2 rounded-lg text-[#bc5e51] text-sm p-1 gap-1">
                  <FaArrowDown />
                  37.8%
                </div>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 mt-4 lg:mt-0 p-2 z-10"
            onClick={() => setIsActive("income")}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-3/4 flex gap-4">
                <div className="flex items-center justify-center bg-[#cabdff] rounded-full size-10">
                  <SlGraph className="text-black" />
                </div>
                <div>
                  <p className="inline-flex items-center text-sm gap-1">
                    Income{" "}
                    <span>
                      <IoIosInformationCircle className="text-textSecondary" />
                    </span>
                  </p>
                  <p className="items-center text-5xl font-bold">256k</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex items-center justify-center bg-accent1 rounded-lg text-[#4d793c] text-sm p-1 gap-1">
                  <FaArrowUp />
                  37.8%
                </div>
              </div>
            </div>
          </div>
          <span
            className={`w-[calc(50%-18px)] h-[calc(100%-16px)] bg-backgroundPrimary drop-shadow-md rounded-2xl absolute left-[12px] top-[8px] transition-transform duration-300 ease-linear ${
              isActive === "income"
                ? "translate-x-[calc(100%--12px)]"
                : "translate-x-0"
            }`}
          />
        </div>

        {/* ------user-message------ */}
        <div className="flex user-message mt-6">
          <div className="w-1/2 ">
            <p className="text-textSecondary font-semibold">
              Welcome <span className="text-textPrimary">857 customers</span>{" "}
              with a <br />
              personal message 😎
            </p>
          </div>
          <div className="w-1/2 text-end">
            <button
              type="button"
              className="border border-textSecondary p-3 rounded-xl"
            >
              Send message
            </button>
          </div>
        </div>

        {/* ------image-section------ */}
        <div className="image-section flex items-center justify-around mt-10">
          <div className="rounded-[50%] overflow-hidden h-16 w-16">
            <Image
              alt="image.com"
              src="https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-[50%] overflow-hidden h-16 w-16">
            <Image
              alt="image.com"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-[50%] overflow-hidden h-16 w-16">
            <Image
              alt="image.com"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={100}
              height={20}
            />
          </div>
          <div className="rounded-[50%] overflow-hidden h-16 w-16 flex items-center justify-center bg-backgroundSecondary cursor-pointer">
            <FaArrowRightLong className="text-textPrimary" />
          </div>
        </div>
        <div className="image-section flex items-center justify-around mt-3 mb-10">
          <p>Gladcye</p>
          <p>Elbert</p>
          <p>Joyce</p>
          <p className="font-semibold ">View All</p>
        </div>
      </div>
    </>
  );
}

export default OverView;
