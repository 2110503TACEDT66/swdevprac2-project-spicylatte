import React from "react";
import Image from "next/image";
import { FaCampground } from "react-icons/fa";
import Select from "./booking/Select";
export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 min-w-[100vh] min-h-[100vh]">
        <Image
          alt="bg"
          src="/img/bg.png"
          width={1920}
          height={1080}
          className="absolute"
        />
        <div className="relative bgcolor flex flex-col items-end top-56">
          <div className="space-y-5">
            <div className="font-poppin font-bold text-6xl flex ">
              <div className="bg-gradient-to-r from-[#0B60B0] to-[#40A2D8] bg-clip-text text-transparent p-3">
                CAMPGROUNG{" "}
              </div>
              <div className="p-3">Booking </div>
            </div>
            <div className="font-poppin font-semibold text-2xl flex gap-5 ml-14 ">
              <FaCampground className="" />
              <div>Find Your Perfect Campsite Today!</div>
            </div>
          </div>
          <div className="mt-8 flex justify-center w-full">
            {/* <Select></Select> */}
            <button className="bg-[#1066B3] hover:bg-[#3899D3] text-white font-bold py-2 px-4 rounded-full">
              จองเลย
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
