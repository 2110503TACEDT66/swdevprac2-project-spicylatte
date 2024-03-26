import getAllBookings from "@/libs/getAllBookings";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { Booking } from "@/type";

import Bookings from "@/components/profile/Booking";

export default async function page() {
  const session = await getServerSession(authOption);
  let bookings = null;
  if (!session) redirect("/auth/signin");
  else {
    bookings = await getAllBookings(session.user.token);
  }
  console.log("bookings", bookings);

  console.log("this log", bookings.data.bookDate);

  return (
    <div className="mx-auto container">
      <div className=" border-b border-gray-200 max-w-max mx-auto p-10">
        <h1 className="text-6xl font-bold text-gray-800">Your Bookings</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-white container mx-auto rounded-2xl items-center p-10 pb-0">
          {bookings.data.map((booking: Booking) => (
            <Bookings booking={booking} />
          ))}
        </div>
      </div>
    </div>
  );
}
