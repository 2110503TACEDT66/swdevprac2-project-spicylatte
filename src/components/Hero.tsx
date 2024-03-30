import React from "react";
import Image from "next/image";
import { FaCampground } from "react-icons/fa";
import Select from "./booking/Select";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div
        className="flex flex-row w-screen h-screen justify-center lg:justify-start items-center p-0 lg:p-20 overflow-hidden"
        style={{ backgroundImage: `url("/img/bg.png")` }}
      >
        <Image
          alt="bg"
          src="/img/bg.png"
          width={1920}
          height={1080}
          className="absolute top-0 right-0"
        />
        <div className="relative bgcolor flex flex-col  ">
          <div className="">
            <div className="font-poppin font-bold text-6xl  ">
              <div className="bg-gradient-to-r from-[#0B60B0] to-[#40A2D8] bg-clip-text text-transparent mb-3">
                CAMPGROUNG
              </div>
              <div className="mb-3">Booking </div>
            </div>
            <div className="font-poppin font-semibold text-2xl flex gap-5 ">
              <FaCampground className="" />
              <div className="mb-8">Find Your Perfect Campsite Today!</div>
            </div>
            <Link
              className="bg-[#1066B3] hover:bg-[#3899D3] text-white font-bold py-2 px-4 rounded-full"
              href="/booking"
            >
              จองเลย
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
