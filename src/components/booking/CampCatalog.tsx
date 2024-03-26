import getAllCamp from "@/libs/getAllCamp";
import React from "react";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { Campgrounds } from "@/type";
import BookingCard from "./CampGroundCard";
export default async function BookingCatalog() {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;

  const campgrounds = await getAllCamp();
  /* console.log(campgrounds); */

  return (
    <div className="grid grid-cols-3 gap-10">
      {campgrounds.data.map((campground: Campgrounds) => (
        <BookingCard
          imgSrc={campground.imgSrc}
          name={campground.name}
          tel={campground.tel}
          address={campground.address}
          available={campground.bookings.length === 0 ? false : true}
          id={campground.id}
        ></BookingCard>
      ))}
    </div>
  );
}
