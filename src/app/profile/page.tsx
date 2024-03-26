import getAllBookings from "@/libs/getAllBookings";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { Bookings } from "@/type";

export default async function page() {
  const session = await getServerSession(authOption);
  

  let bookings = null;
  if (!session) redirect("/auth/signin");
  else {
    bookings = await getAllBookings(session.user.token);
  }
  console.log("bookings", bookings);

  console.log("this log",bookings.data.bookDate);

  return (
    <div className="mx-auto container">
      <div className="text-center border-b border-gray-200 max-w-max mx-auto p-10">
        <h1>Your Booking</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-white container mx-auto rounded-2xl items-center">
         
          {bookings.data.map((item:Bookings)=>( 
          <div className="bg-gray-200 container rounded-2xl items-center mx-auto max-w-4xl">
            <div className="flex-row flex mt-20 ml-10 items-center">
          <Image
            src="/public/img/river.jpeg"
            alt="Your Booking"
            width={3}
            height={3}
            sizes="50vw"
            className="rounded-lg w-[25%] h-[25%] bg-black items-center"
          />
             <div className="text-md mx-auto text-center mt-auto p-5">
            <div className="font-medium text-3xl">{item.campground?.name}</div>
            <div className="text-start mt-5 text-xl"> Date Booked</div>
            <div className=" bg-white rounded-full  mt-5 max-w-max p-2">{item.bookDate}</div>
            <div className="text-start mt-5 text-xl">Contact</div>
            <div className="bg-white rounded-full  mt-5 max-w-max p-2">{item.campground?.tel}</div>
            </div>
            </div>
          </div>
            ))}

        
      </div>
      </div>
      
    </div>
  );
}
