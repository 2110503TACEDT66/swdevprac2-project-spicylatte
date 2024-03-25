import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { url } from "inspector";
import Banner from "@/components/Banner";
export default function Home() {
  return <main>
    <Banner></Banner>
  </main>;
}
