import Image from "next/image";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="#">
          <Image
            src="/logos/Logo-Expanded.svg"
            alt="logo"
            width={210}
            height={55}
          />
        </a>
        <div className={styles.headerLinks}>
          <a href="#">YÖNETİCİ PANELİ</a>
          <a href="#">BİZ KİMİZ?</a>
          <a href="#">AÇIK POZİSYONLAR</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
