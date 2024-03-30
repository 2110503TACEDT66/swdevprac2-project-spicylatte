import Select from "@/components/booking/Select";
import React from "react";
import Card from "@/components/booking/CampGroundCard";
import { authOption } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getAllCamp from "@/libs/getAllCamp";
import BookingCard from "@/components/booking/CampGroundCard";
import BookingCatalog from "@/components/booking/CampCatalog";
export default async function page() {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;

  const campgrounds = await getAllCamp();
  return (
    <div>
      <div className="flex justify-center font-poppin font-extrabold text-6xl mt-10">
        LET'S SEE THE
        <div className="ml-5 bg-gradient-to-r from-[#1066B3] to-[#40A2D8] bg-clip-text text-transparent">
          CAMPGROUND
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <BookingCatalog campJson={campgrounds}></BookingCatalog>
      </div>
    </div>
  );
}
