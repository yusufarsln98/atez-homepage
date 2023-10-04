import Image from "next/image";
import styles from "./OpenPositions.module.scss";
import { useText } from "@/context/text/Text.context";
import { useEffect, useState } from "react";
import Link from "next/link";

const OpenPositions = () => {
  const { positions, selectedPosition, setSelectedPosition } = useText();

  return (
    <div id="acik-pozisyonlar" className={styles.openPositions}>
      <div className={styles.openPositionsContainer}>
        <div className={styles.leftContainer}>
          <h1>Açık Pozisyonlar</h1>
          <div className={styles.positions}>
            {/* positions */}
            {positions.map((position) => (
              <button
                key={position.index}
                className={`${styles.position} 
                ${selectedPosition === position && styles.positionSelected}`}
                onClick={() => {
                  setSelectedPosition(position);
                }}
              >
                <div className={styles.positionTitle}>{position.position}</div>
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
            {/* left button */}
            <button
              className={styles.positionNavigationButton}
              onClick={() => {
                setSelectedPosition(
                  positions[
                    (selectedPosition.index + positions.length - 2) %
                      positions.length
                  ]
                );
              }}
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
            <div className={styles.positionIndexContainer}>
              {
                // buttons from 1 to positions.length
                positions.map((position) => (
                  <button
                    key={position.index}
                    className={`${styles.positionIndex}
                    ${
                      position === selectedPosition &&
                      styles.positionIndexSelected
                    }`}
                    onClick={() => {
                      setSelectedPosition(position);
                    }}
                  >
                    {position.index}
                  </button>
                ))
              }
            </div>
            <button
              className={styles.positionNavigationButton}
              onClick={() => {
                setSelectedPosition(
                  positions[selectedPosition.index % positions.length]
                );
              }}
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
        <div className={styles.rightContainer}>
          <div className={styles.online}>YAYINDA</div>
          <h1>{selectedPosition.position}</h1>
          <h2>
            {selectedPosition.title.split("\n").map((title) => (
              <div key={title}>{title}</div>
            ))}
          </h2>
          <p>{selectedPosition.description}</p>
          <div className={styles.applyContainer}>
            <Link
              // href="/is-basvurusu"
              // send position with link
              href={{
                pathname: "is-basvurusu",
                query: { position: `${selectedPosition.position}` },
              }}
            >
              <button className={styles.applyButton}>Başvur</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
