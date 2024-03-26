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
      <Banner></Banner>
    </main>
  );
}
