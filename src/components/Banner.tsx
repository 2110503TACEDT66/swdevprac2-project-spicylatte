"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export default function Banner({ autoSlideInterval = 3000 }) {
  const autoSlide = false;
  const slides = [
    {
      img: "/img/cover.jpg",
    },
    {
      img: "/img/cover2.jpg",
    },
    {
      img: "/img/cover3.jpg",
    },
    {
      img: "/img/cover4.jpg",
    },
  ];
  const [curIdx, setCurIdx] = useState(0);
  const prev = () =>
    setCurIdx((curIdx) => (curIdx === 0 ? slides.length - 1 : curIdx - 1));
  const next = () =>
    setCurIdx((curIdx) => (curIdx === slides.length - 1 ? 0 : curIdx + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slide = setInterval(next, autoSlideInterval);
    return () => clearInterval(slide);
  });
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-14 px-4 relative group">
      <Image
        src={slides[curIdx].img}
        alt="img"
        width={1400}
        height={780}
        className="rounded-2xl shadow-2xl flex transition-transform  ease-out duration-1000"
        /* style={{ transform: `translateX(-${curIdx * 100}%)` }} */
      />
      <div className="hidden group-hover:block absolute top-[55%] left-5 cursor-pointer rounded-full  text-black">
        <BsChevronCompactLeft onClick={prev} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[55%] right-5 cursor-pointer rounded-full  text-black">
        <BsChevronCompactRight onClick={next} size={30} />
      </div>
      <div className="absolute bottom-0 right-0 left-0 ">
        <div className="flex justify-center items-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-2 h-2 bg-black  rounded-full ${
                curIdx === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
