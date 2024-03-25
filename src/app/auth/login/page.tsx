import GoogleIcon from "@/components/login/GoogleIcon";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1>Sign in to Campground Booking</h1>
      <div className="flex gap-4 ">
        <div className="h-5 w-5">
          <GoogleIcon />
        </div>
        <span>Sign in with Google</span>
      </div>
    </div>
  );
}
