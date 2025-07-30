"use client";
import { data } from "@/constants";
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
      <span className=" text-[#8800C8] font-bold text-5xl ">
        Frequently asked questions
      </span>
      <div className=" w-[1104px] h-80 max-h-max flex flex-col gap-4 p-4  rounded-lg">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col border-y-[2px] border-gray-200 gap-4 py-2"
            >
              <div
                className="flex flex-row items-center justify-between cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                <div className="flex gap-2 text-3xl text-black font-bold ">
                  <span>Q{item.id}. </span>
                  <span className="">{item.question}</span>
                </div>
                <button className=" text-4xl font-bold text-[#252525] ">
                  {open.includes(item.id) ? "-" : "+"}
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
