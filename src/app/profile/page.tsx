import getAllBookings from "@/libs/getAllBookings";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { Booking, Campgrounds, UserProfileResponse } from "@/type";
import { IoMdRefresh } from "react-icons/io";
import AdminClearBookingBtn from "@/components/profile/AdminClearBookingBtn";
import Bookings from "@/components/profile/BookingCard";
import Link from "next/link";
import getUserProfile from "@/libs/getUserProfile";
import getAllCamp from "@/libs/getAllCamp";

export default async function page() {
  const session = await getServerSession(authOption);

  let bookings: any;
  const fetchBookings = async () => {
    if (!session) return;
    bookings = await getAllBookings(session.user.token);
  };
  const getAllCampgroundAvaliable = async () => {
    const campgrounds = (await getAllCamp()).data as Campgrounds[];
    const campgroundsHaveBooking = campgrounds.filter(
      (campground) => campground.bookings.length > 0
    );
    
    const campgroundsId = campgroundsHaveBooking.map(
      (campground) => campground.id
    );
    return campgroundsId;
  };

  if (!session) redirect("/auth/signin");
  else {
    await fetchBookings();
  }
  const user = (await getUserProfile(
    session.user.token
  )) as UserProfileResponse;
  const isAdmin = user.data.role === "admin";

  return (
    <div className="mx-auto container ">
      <div className=" border-b border-gray-200 max-w-max mx-auto p-10">
        <div className="flex items-center gap-5">
          <h1 className="text-6xl font-bold text-gray-800 inline">
            {!isAdmin ? "Your Bookings" : "Manage Bookings"}
          </h1>
          {isAdmin && (
            <AdminClearBookingBtn
              allCampgroundAvaliable={await getAllCampgroundAvaliable()}
            />
          )}
          {/* <IoMdRefresh
            className="inline"
            size={20}
            onClick={void fetchBookings()}
          /> */}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-white container mx-auto rounded-2xl items-center p-10 pb-0 ">
          {bookings.data.length === 0 && (
            <h1 className="text-center mb-10 text-gray-500">
              {" "}
              You don't have any booking yet.{" "}
              <Link href="/booking" className="underline text-gray-900">
                Book here
              </Link>
            </h1>
          )}
          {bookings.data.map((booking: Booking) => (
            <Bookings booking={booking} isAdmin={isAdmin} />
          ))}
        </div>
      </div>
    </div>
  );
}
