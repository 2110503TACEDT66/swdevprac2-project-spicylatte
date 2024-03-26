import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { getServerSession } from "next-auth";
import Nav from "@/components/Nav";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { ThemeProvider } from "@material-tailwind/react";
const ibm = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Campground",
};
const session = getServerSession();
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <NextAuthProvider session={session}>
          <Nav></Nav>
          {children}
          <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
        </NextAuthProvider>
      </body>
    </html>
  );
}
