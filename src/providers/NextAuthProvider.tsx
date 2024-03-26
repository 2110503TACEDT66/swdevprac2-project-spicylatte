"use client";
import { SessionProvider } from "next-auth/react";

type NextAuthProviderProps = { children: React.ReactNode; session: any };
export default function NextAuthProvider({
  children,
  session,
}: NextAuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
