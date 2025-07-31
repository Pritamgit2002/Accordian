"use client";
import { data } from "@/constants";
import React, { useState } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";

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
    <main
      className=" max-w-6xl w-full mx-14 h-max flex flex-col items-center justify-center gap-16 sm:gap-20 lg:gap-32 mt-20 lg:mt-28 "
      style={{
        background: "var(--color-background)",
        color: "var(--color-foreground)",
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      <span
        className=" font-bold text-4xl lg:text-5xl text-center tracking-tighter leading-10 sm:leading-normal"
        style={{
          color: "var(--hero-color-foreground)",
        }}
      >
        Frequently asked questions
      </span>

      <div className=" w-full h-max max-h-max flex flex-col gap-3 sm:gap-4 border-t-[1px] border-[#CDCDCD] pt-3 sm:pt-4 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 sm:gap-6 pb-4 sm:pb-6 font-dm-sans border-b-[1px] border-[#CDCDCD]"
            >
              <div
                className="flex flex-row items-start gap-4 sm:items-center justify-between cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                <div
                  className="flex items-start sm:items-center justify-center gap-[2px] lg:gap-2 text-lg md:text-3xl font-bold leading-7 sm:leading-normal"
                  style={{ color: "var(--color-foreground)" }}
                >
                  <span>Q{item.id}. </span>
                  <span className="select-none tracking-tighter leading-7">
                    {item.question}
                  </span>
                </div>
                <button className=" text-2xl lg:text-4xl font-bold transition-all duration-300 ease-in-out  ">
                  {open.includes(item.id) ? (
                    <FiMinus
                      style={{ color: "var(--icon-color-foreground)" }}
                    />
                  ) : (
                    <FiPlus style={{ color: "var(--icon-color-foreground)" }} />
                  )}
                </button>
              </div>
              {open.includes(item.id) && (
                <div className="flex flex-col gap-2">
                  <span
                    className=" text-sm lg:text-[22px] sm:tracking-tight text-left leading-snug lg:leading-normal"
                    style={{ color: "var(--color-foreground)" }}
                  >
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
