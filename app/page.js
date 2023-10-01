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
      <div className={styles.footer}>
        <div className={styles.footerContext}>
          <div className={styles.footerContainer}>
            <Image
              src="/logos/Logo-EN-WHITE@2x.png"
              alt="Logo"
              width={234}
              height={63}
            />
            <p>© Atez Yazılım Teknolojileri 2023</p>
          </div>
          <div className={styles.footerContainer}>
            <div className={styles.addressContainer}>
              <div className={styles.addressTitle}>Güneşli Address</div>
              <div>
                15 Temmuz Mah. Gülbahar Cd. No:20 <br />
                34212 Güne#li istanbul <br />
                Phone: +90 850 393 41 41 <br />
                Email: info@atez.com.tr <br />
              </div>
            </div>
            <div className={styles.addressContainer}>
              <div className={styles.addressTitle}>Emaar Office</div>
              <div>
                15 Temmuz Mah. Gülbahar Cd. No:20 <br />
                34212 Güne#li istanbul <br />
                Phone: +90 850 393 41 41 <br />
                Email: info@atez.com.tr <br />
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <Link
              // open external link in new tab
              href="https://www.linkedin.com/company/atez-yaz%C4%B1l%C4%B1m-teknolojileri-a-s/"
              target="_blank"
            >
              <Image
                src="/social-media/Linkedin.svg"
                alt="linkedin"
                width={92}
                height={26}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
