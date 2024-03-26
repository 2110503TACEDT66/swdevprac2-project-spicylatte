import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

export default async function Nav() {
  const session = await getServerSession(authOption);
  return (
    <div className="flex text-xl justify-between mx-10 font-semibold py-3">
      <div>
        <Link href="/">Campground Booking</Link>
      </div>
      <div className="flex gap-16">
        <div>
          <Link href="/booking">Booking</Link>
        </div>

        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="text-gray-700 font-bold"
        >
          {session ? "Sign Out" : "Sign-In"}
        </Link>
      </div>
    </div>
  );
}
