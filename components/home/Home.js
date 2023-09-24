import Image from "next/image";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.homeContainer}>
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
          <button>KEŞFET</button>
        </div>
        <div className={styles.jobCard}>
          <h1>2023 Yaz Stajı</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt
          </p>
          <div className={styles.jobCardButtonContainer}>
            <>BAŞVURMAK İÇİN TIKLA</>
            <button>
              <Image
                src="/icons/RightWhite.svg"
                alt="arrow-right"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className={styles.homeImage}>
          <Image
            src="/dummies/Home.png"
            alt="hero"
            width={1107 * 0.9}
            height={960 * 0.9}
            style={{ objectFit: "contain", zIndex: -1, marginTop: 100 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
