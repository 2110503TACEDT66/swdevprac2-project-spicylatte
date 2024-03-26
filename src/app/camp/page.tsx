import getAllCamp from "@/libs/getAllCamp";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export default async function page() {
    const session = await getServerSession(authOption) 
    /* if(!session || !session.user.token) return null */
    const 
  return <div>

  </div>;
}
