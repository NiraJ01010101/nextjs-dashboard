"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import BarApexChart from "./comman/BarApexChart";
import { FaCheck } from "react-icons/fa";

function ProductViews() {
  const timeOptions = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last 30 days" },
    { id: 3, name: "Last 1 year" },
  ];
  const [selectedTimeOption, setSelectedTimeOption] = useState(timeOptions[0]);
  return (
    <>
      <div className="p-4 bg-backgroundPrimary rounded-md mt-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-textPrimary text-2xl font-bold">
            <span className="bg-accent3 w-3 h-7 rounded inline-flex items-center align-middle me-4"></span>
            Product views
          </h2>

          <Listbox value={selectedTimeOption} onChange={setSelectedTimeOption}>
            <div className="relative">
              <ListboxButton className="relative w-full cursor-default rounded-md bg-backgroundSecondary py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                {selectedTimeOption ? selectedTimeOption.name : "Last 7 Days"}
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
                {timeOptions?.map((person) => (
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
        <BarApexChart />
      </div>
    </>
  );
}

export default ProductViews;
