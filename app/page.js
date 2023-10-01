"use client";

import Image from "next/image";
import styles from "@/styles/Page.module.scss";
import { useTheme } from "@/context/theme/Theme.context";
import { useText } from "@/context/text/Text.context";
import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import WhoWeAre from "@/components/who-we-are/WhoWeAre";
import { useEffect, useState } from "react";
import Link from "next/link";
import OpenPositions from "@/components/open-positions/OpenPositions";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Footer from "@/components/footer/Footer";

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
      <OpenPositions />
      <NewsLetter />
      <Footer />
    </main>
  );
}
