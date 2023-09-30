"use client";

import Image from "next/image";
import styles from "@/styles/Page.module.scss";
import { useTheme } from "@/context/theme/Theme.context";
import { useText } from "@/context/text/Text.context";
import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import WhoWeAre from "@/components/who-we-are/WhoWeAre";
import { useEffect, useState } from "react";

export default function Page() {
  const { theme } = useTheme();
  const { positions, selectedPosition, setSelectedPosition } = useText();
  const [positionIndex, setPositionIndex] = useState(0);

  useEffect(() => {
    setSelectedPosition(positions[positionIndex]);
  }, [positionIndex, positions, setSelectedPosition]);

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

      <div id="acik-pozisyonlar" className={styles.openPositions}>
        <div className={styles.openPositionsContainer}>
          <div className={styles.leftContainer}>
            <h1>Açık Pozisyonlar</h1>
            <div className={styles.positions}>
              {/* positions */}
              {positions.map((position) => (
                <button
                  key={position.id}
                  className={`${styles.position}
                  ${selectedPosition === position && styles.positionSelected}`}
                  onClick={() => setSelectedPosition(position)}
                >
                  <div className={styles.positionTitle}>
                    {position.position}
                  </div>
                  {/* if new create span */}
                  {position.isNew && (
                    <div className={styles.newContainer}>
                      <span className={styles.positionNew}>Yeni</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className={styles.positionNavigation}>
              <button
                onClick={() =>
                  setPositionIndex(
                    positionIndex === 0
                      ? positions.length - 1
                      : positionIndex - 1
                  )
                }
              >
                <Image
                  src="/icons/Right.svg"
                  alt="left"
                  width={16}
                  height={16}
                  style={{
                    transform: "rotate(180deg)",
                  }}
                />
              </button>
              {
                // buttons from 1 to positions.length
                Array.from({ length: positions.length }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      className={`${styles.positionNumber}
                      ${
                        selectedPosition.id === number &&
                        styles.positionNumberSelected
                      }`}
                      onClick={() => setPositionIndex(number - 1)}
                    >
                      {number}
                    </button>
                  )
                )
              }
              <button
                onClick={() =>
                  setPositionIndex(
                    positionIndex === positions.length - 1
                      ? 0
                      : positionIndex + 1
                  )
                }
              >
                <Image
                  src="/icons/Right.svg"
                  alt="right"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
          <div className={styles.description}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, nunc ut consectetur aliquam, nisi massa luctus tellus,
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
