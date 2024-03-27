import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import getAllCamp from "@/libs/getAllCamp";
import { Campgrounds } from "@/type";
export default function HardCodeForImg({ name }: { name: string }) {
  const [imgSrc, setImgSrc] = useState<string>("");
  const loadCampgroundImage = async () => {
    const campgrounds = await getAllCamp();
    const matching = campgrounds.data.find(
      (campground: Campgrounds) => campground.name === name
    );
    if (matching) {
      setImgSrc(matching.imgSrc);
    }
  };
  useEffect(() => {
    loadCampgroundImage();
  }, []);
  return (
    <Image
      src={imgSrc}
      alt="Your Booking"
      width={3}
      height={3}
      sizes="50vw"
      className="rounded-lg w-[25%] h-[25%] bg-black items-center"
    />
  );
}
