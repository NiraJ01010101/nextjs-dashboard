"use client"
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineInsertLink, MdOutlineMessage } from "react-icons/md";

function Comments() {
  const comments = [
    {
      image:
        "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Ethel",
      username: "@ethel",
      project: "Smiles-3D icons",
      message: "Great work 😀",
      time: "1h",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Jazmyn",
      username: "@jaz.designer",
      project: "Fleet - Travel shopping",
      message: "I need react version asap!",
      time: "8h",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Ethel",
      username: "@ethel",
      project: "Smiles-3D icons",
      message: "How can I buy only the design?",
      time: "1h",
    },
  ];
  return (
    <>
      <div className="p-4 bg-backgroundPrimary rounded-md mt-3">
        <h2 className="text-textPrimary text-2xl font-bold">
          <span className="bg-[#ffd88d] w-3 h-7 rounded inline-flex items-center align-middle me-4"></span>
          Comments
        </h2>
        {comments &&
          comments.map((comment, i) => {
            const { image, author, username, project, message, time } = comment;
            return (
              <div key={i}>
                <div className="flex flex-row gap-4 mt-5" key={i}>
                  <div className="basis-full md:basis-1/6">
                    <div className="rounded-[50%] overflow-hidden h-12 w-12 drop-shadow-md">
                      <Image
                        alt="image.com"
                        src={`${image}`}
                        width={100}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="basis-full md:basis-4/6">
                    <p className="font-bold">
                      {author}{" "}
                      <span className="text-textSecondary cursor-pointer font-normal">
                        {username}
                      </span>
                    </p>
                    <p className="text-textSecondary">
                      On{" "}
                      <span className="font-bold text-textPrimary">
                        {project}
                      </span>
                    </p>
                    <p>{message}</p>
                    <div className="flex items-center text-textSecondary text-2xl mt-4 gap-28">
                      <MdOutlineMessage className="cursor-pointer" />
                      <FaRegHeart className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="basis-full md:basis-1/6 text-textSecondary flex flex-col justify-between items-center">
                    <p>{time}</p>
                    <p>
                      <MdOutlineInsertLink className="text-2xl cursor-pointer" />
                    </p>
                  </div>
                </div>
                <div className="border-t border-textSecondary border-opacity-50 my-4"></div>
              </div>
            );
          })}

        <button
          type="button"
          className="w-full text-center border border-textSecondary p-3 rounded-xl"
        >
          View all
        </button>
      </div>
    </>
  );
}

export default Comments;
