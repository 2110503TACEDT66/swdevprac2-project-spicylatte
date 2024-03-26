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

  console.log("this log", bookings.data.bookDate);

  return (
    <div className="mx-auto container">
      <div className=" border-b border-gray-200 max-w-max mx-auto p-10">
        <h1 className="text-2xl font-bold">Your Bookings</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-white container mx-auto rounded-2xl items-center p-10 pb-0">
          {bookings.data.map((item: Bookings) => {
            const bookCreatedAt = new Date(item.createdAt);
            const checkIn = new Date(item.bookDate);
            return (
              <div className="bg-gray-200 container rounded-2xl items-center mx-auto max-w-4xl">
                <div className="flex-row flex mb-10 items-center p-10 gap-10">
                  <Image
                    src="/public/img/river.jpeg"
                    alt="Your Booking"
                    width={3}
                    height={3}
                    sizes="50vw"
                    className="rounded-lg w-[25%] h-[25%] bg-black items-center"
                  />
                  <div className="text-md   ">
                    <h2 className="font-medium text-3xl">
                      {item.campground?.name}
                    </h2>
                    <p><span className="text-blue-500">Booking created at:</span> {bookCreatedAt.toDateString()}</p>
                    <div className="text-start mt-5 text-xl"> Date Booked</div>
                    <div className=" bg-white rounded-full  mt-5 max-w-max p-2">
                      {item.bookDate}
                    </div>
                    <div className="text-start mt-5 text-xl">Contact</div>
                    <div className="bg-white rounded-full  mt-5 max-w-max p-2">
                      {item.campground?.tel}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
