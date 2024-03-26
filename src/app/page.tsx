import styles from "./page.module.css";
import Link from "next/link";
import { url } from "inspector";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Card from "@/components/Card/card";
export default function Home() {
  return (
    <main>
      <Hero></Hero>
      {/* <Banner></Banner> */}
      <div className="h-[100vh] justify-center w-full mt-40">
        <div className="flex justify-center gap-20 mx-5 ">
          
        </div>
      </div>
    </main>
  );
}
