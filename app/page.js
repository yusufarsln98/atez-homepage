"use client";

import Image from "next/image";
import styles from "@/styles/Page.module.scss";
import { useTheme } from "@/context/Theme.context";
import Header from "@/components/Header";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main
      className={styles.main}
      style={{
        ...theme,
      }}
    >
      <Header />
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div></div>
    </main>
  );
}
