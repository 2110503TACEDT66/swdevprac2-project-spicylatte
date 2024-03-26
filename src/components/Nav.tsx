import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
 import { UserProfileResponse } from "@/type"; 
export default async function Nav() {
  const session = await getServerSession(authOption);
  let user;
  if (session) {
     user = (await getUserProfile(session.user.token)) as UserProfileResponse; 

  }
  return (
    <div className="flex font-poppin text-lg justify-between mx-10 font-normal py-3 sticky top-0 z-50  rounded-b-xl">
      <div className="gap-8 flex items-center">
        <Link href="/profile">
          <div className="flex items-center gap-2 cursor-pointer">
            {session ? <CgProfile size={40} /> : null}
            {session && user ? user.data.name : ""}
          </div>
        </Link>

        <Link href="/">Home</Link>
        {session ? <Link href="/profile">My Bookings</Link> : null}
      </div>
      <div className="flex gap-10 items-center">
        <div>
          <Link href="/booking">Book</Link>
        </div>

        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="align-middle select-none font-poppin font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        >
          {session ? "Sign Out" : "Sign-In"}
        </Link>
      </div>
    </div>
  );
}
