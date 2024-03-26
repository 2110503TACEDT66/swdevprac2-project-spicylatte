import getAllCamp from "@/libs/getAllCamp";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Campgrounds } from "../../../interface";
import BookingCard from "@/components/BookingCard";

export default async function page() {
  const session = await getServerSession(authOption);
  /* if (!session || !session.user.token) return null; */

  const campgrounds = await getAllCamp();

  console.log(campgrounds); // Log campgrounds to the console

  return (
    <div
      className="grid grid-cols-3 justify-center items-center align-middle
    "
    >
      <div className="col-span-3"></div>
      {/* <BookingCard></BookingCard>
      <BookingCard></BookingCard>
      <BookingCard></BookingCard> */}
    </div>
  );
}
