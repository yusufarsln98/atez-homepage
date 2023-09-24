"use client";

import Image from "next/image";
import styles from "@/styles/Page.module.scss";
import { useTheme } from "@/context/Theme.context";
import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import WhoWeAre from "@/components/who-we-are/WhoWeAre";

export default function Page() {
  const { theme } = useTheme();

  return (
    <main
      className={styles.main}
      style={{
        ...theme,
      }}
    >
      <Header />
      <Home />
      <WhoWeAre />

      <div
        id="acik-pozisyonlar"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "blue",
          padding: "100px 0",
        }}
      >
        <h1>AÇIK POZİSYONLAR</h1>
      </div>
      <div></div>
    </main>
  );
}
