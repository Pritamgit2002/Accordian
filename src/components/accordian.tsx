"use client";
import { data } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

export const Accordian = () => {
  const [open, setOpen] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setOpen((prevOpen) =>
      prevOpen.includes(id)
        ? prevOpen.filter((item) => item !== id)
        : [...prevOpen, id]
    );
  };

  return (
    <main className=" max-w-full h-max flex flex-col items-center justify-center gap-32 mt-40 ">
      <span className=" text-[#8800C8] font-dm-sans font-bold text-5xl ">
        Frequently asked questions
      </span>
      <div className=" w-[1104px] h-max max-h-max flex flex-col gap-4 rounded-lg border-t-[2px] pt-4 border-gray-200 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col border-b-[2px] border-gray-200 gap-6 pb-6  font-dm-sans"
            >
              <div
                className="flex flex-row items-center justify-between cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                <div className="flex gap-2 text-3xl text-black font-bold ">
                  <span>Q{item.id}. </span>
                  <span className="">{item.question}</span>
                </div>
                <button className=" text-4xl font-bold text-[#252525] transition-all duration-300 ease-in-out">
                  {open.includes(item.id) ? (
                    <Image
                      src="/minus.svg"
                      alt="minus"
                      width={20}
                      height={20}
                      className=" "
                    />
                  ) : (
                    <Image
                      src="/plus.svg"
                      alt="minus"
                      width={20}
                      height={20}
                      className=" "
                    />
                  )}
                </button>
              </div>
              {open.includes(item.id) && (
                <div className="flex flex-col gap-2  rounded-lg">
                  <span className=" text-[22px] text-black text-left">
                    {item.answer}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};
