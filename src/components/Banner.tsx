"use client";
import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export default function Banner() {
  const slides = [
    {
      img: "/img/van.jpeg",
      name: "1",
    },
    {
      img: "/img/doi2.jpeg",
      name: "2",
    },
    {
      img: "/img/river.jpeg",
      name: "3",
    },
  ];
  const [curIdx, setCurIdx] = useState(0);
  const handleChange = (i: any) => {
    console.log(i);
    setCurIdx(i);
  };
  return (
    <div className="flex justify-start p-16">
      <Carousel
        placeholder={""}
        className="max-w-3xl rounded-3xl shadow-2xl "
        loop={true}
      >
        {slides.map((e, index) => (
          <img key={index} src={e.img} />
        ))}
      </Carousel>
      <div>
          
      </div>
    </div>
  );
}
