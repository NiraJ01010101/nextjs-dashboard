"use client";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineCall, MdOutlineLibraryAddCheck } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

function ProTips() {
  const proTips = [
    {
      image:
        "https://images.unsplash.com/photo-1643408875993-d7566153dd89?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Early access",
      icon: <TbCalendarTime className="text-2xl" />,
      label: "New",
      labelBg: "accent3",
      readTime: "3 mins read",
    },
    {
      iimage:
        "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Asset use guidelines",
      icon: <TbCalendarTime className="text-2xl" />,
      label: "Small label",
      labelBg: "accent1",
      readTime: "Time",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Exclusive downloads",
      icon: <FaDownload className="text-2xl" />,
      label: "",
      readTime: "2 mins read",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Behind the scenes",
      icon: <IoVideocamOutline className="text-2xl" />,
      label: "Hot",
      labelBg: "accent2",
      readTime: "3 mins read",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Asset use guidelines",
      icon: <MdOutlineCall className="text-2xl" />,
      label: "Popular",
      labelBg: "accent1",
      readTime: "Time",
    },

    {
      image:
        "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Life & work updates",
      icon: <MdOutlineLibraryAddCheck className="text-2xl" />,
      label: "",
      readTime: "3 mins read",
    },
  ];
  return (
    <>
      <div className="proTips-container p-4 bg-backgroundPrimary rounded-md mt-3">
        <div className="mb-4">
          <h2 className="text-textPrimary text-2xl font-bold">
            <span className="bg-accent1 w-3 h-7 rounded inline-flex items-center align-middle me-4"></span>
            Pro tips
          </h2>
        </div>
        <p className="text-textSecondary mt-5">
          Need some ideas for the next Project ?
        </p>
        <div className="proTips-Card flex flex-wrap items-center mt-5 gap-y-4">
          {proTips &&
            proTips?.map((tips) => {
              const { image, title, label, labelBg, icon, readTime } = tips;
              return (
                <>
                  <div className="w-full md:w-1/2 flex items-center gap-4">
                    <div className="p-4 flex items-center justify-center rounded-[50%] border border-textSecondary">
                      {icon}
                    </div>
                    <div className="w-4/5">
                      <p className="font-semibold">{title}</p>
                      <p className="flex justify-start items-center gap-2">
                        {label && (
                          <span
                            className={`bg-${labelBg} rounded-md p-1 text-xs text-black`}
                          >
                            {label}
                          </span>
                        )}
                        <div className="border border-textSecondary rounded-md flex items-center justify-center text-xs">
                          <div className="overflow-hidden h-6 rounded-sm">
                            <Image
                              alt="image.com"
                              src="https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              width={20}
                              height={20}
                            />
                          </div>
                          <span className="px-2">{readTime}</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProTips;
