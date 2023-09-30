import Image from "next/image";
import styles from "./Home.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useText } from "@/context/text/Text.context";

const Home = () => {
  const { selectedPosition } = useText();
  return (
    <div id="home" className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.homeContext}>
          <div className={styles.homeText}>
            <h1 className={styles.title}>
              Yeni Nesil Uluslararası <br /> Ticaret ve Tedarik Zinciri
              Teknolojileri
            </h1>
            <p className={styles.description}>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                ATEZ
              </span>{" "}
              global ölçekli çözümler üretme hedefi ile çalışmalarını
              sürdürmektedir.
            </p>
            <AnchorLink href="#biz-kimiz">
              <button className={styles.whoWeAreButton}>KEŞFET</button>
            </AnchorLink>
          </div>
          <div className={styles.jobCardContainer}>
            <div className={styles.jobCard}>
              <h1>{selectedPosition.position}</h1>
              <p>{selectedPosition.title}</p>
              <div className={styles.jobCardButtonContainer}>
                <label
                  htmlFor="jobCardButton"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  BAŞVURMAK İÇİN TIKLA
                </label>
                <AnchorLink href="#acik-pozisyonlar">
                  <button id="jobCardButton">
                    <Image
                      src="/icons/RightWhite.svg"
                      alt="arrow-right"
                      width={20}
                      height={20}
                    />
                  </button>
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
