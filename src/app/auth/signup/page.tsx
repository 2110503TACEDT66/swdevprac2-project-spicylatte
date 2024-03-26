"use client";
import GoogleIcon from "@/components/login/GoogleIcon";
import userSignUp from "@/libs/userRegister";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();
  const callbackUrl = useSearchParams().get("callbackUrl");

  const { data: session } = useSession();
  if (session) {
    router.replace(callbackUrl ?? "/");
  }

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!email || !password || !fullName || !tel) {
      setError("Please fill all the fields");
      return;
    }
    if(isNaN(Number(tel))) {
      setError("Phone number must be a number");
      return;
    }
    try {
      const res = await userSignUp(fullName, email, password, tel);
      if (res?.error) {
        setError("There's an error while signing you up");
        return;
      }
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.refresh(); // refresh the nav
      router.replace(callbackUrl ?? "/");
    } catch (e) {
      console.error(e);
    }
  };

  const inputBoxClass =
    "mb-5 w-full duration-300 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:ring-opacity-50";
  return (
    <div className="bg-white rounded-xl p-10 max-w-lg">
      <h1 className="text-2xl font-bold mb-10 text-left ">
        Sign Up to Campground Booking
      </h1>
      {/* <button
        className="flex gap-3 rounded-full border border-gray-200 p-3 px-12 justify-center items-center mb-5 w-full focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:ring-opacity-50"
        onClick={() => signIn("google")}
      >
        <div className="h-4 w-4 ">
          <GoogleIcon />
        </div>
        <span>Sign in with Google</span>
      </button> */}
      <div className="flex items-center justify-center w-full">
        {/* <div className="h-[1px] w-full bg-gray-300 "></div> */}
        {/* <p className="text-center text-gray-500 flex-auto">
          or sign in with email
        </p> */}
        {/* <div className="h-[1px] w-full bg-gray-300"></div> */}
      </div>
      <form onSubmit={(e) => signUp(e)}>
        <label className="font-bold">Full name</label>
        <input
          type="text"
          className={inputBoxClass}
          value={fullName}
          onChange={(e) => setFullName(e.currentTarget.value)}
          required
        />

        <label className="font-bold">Email</label>
        <input
          type="email"
          className={inputBoxClass}
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <label className="font-bold">Your Phone Number</label>
        <input
          type="tel"
          className={inputBoxClass}
          value={tel}
          onChange={(e) => setTel(e.currentTarget.value)}
          required
        />
        <label className="font-bold">Password</label>
        <input
          type="password"
          className={inputBoxClass}
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <button className=" bg-black flex items-center justify-center text-white w-full p-3 px-12 rounded-full  focus:outline-none">
          <span>Sign Up</span>
        </button>
      </form>
      <div className="mt-5">
        {error && <span className="text-red-500 text-center">{error}</span>}
        <p className="text-gray-500 text-center ">
          Already have an account?{" "}
          <Link href="/auth/signin" className="underline text-gray-900">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
