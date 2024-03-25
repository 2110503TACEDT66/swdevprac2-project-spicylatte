import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="flex text-xl justify-between mx-10 font-semibold py-3">
      <div>
        <Link href="/">Campground Booking</Link>
      </div>
      <div className="flex gap-16">
        <div><Link href='/booking'>Booking</Link></div>
        <Link href="/api/auth/signin">Log-in</Link>
      </div>
    </div>
  );
}
