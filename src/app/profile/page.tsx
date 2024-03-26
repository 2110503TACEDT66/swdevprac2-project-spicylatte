import getAllBookings from "@/libs/getAllBookings";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(authOption);

  let bookings = null;
  if (!session) redirect("/auth/signin");
  else {
    bookings = await getAllBookings(session.user.token);
  }
  console.log("bookings", bookings);

  return (
    <div className="container">
      <div className="">
        <h1>My Bookings</h1>
      </div>
    </div>
  );
}
