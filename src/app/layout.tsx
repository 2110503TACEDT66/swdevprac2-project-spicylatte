import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { getServerSession } from "next-auth";
import Nav from "@/components/Nav";
const ibm = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Campground",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Nav></Nav>
        {children}
        <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
