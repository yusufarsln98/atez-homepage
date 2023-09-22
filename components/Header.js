import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="#">
          <Image
            src="/logos/Logo-Expanded.svg"
            alt="logo"
            width={210}
            height={55}
          />
        </Link>
        <div className={styles.headerLinks}>
          {/* <a href="#">YÖNETİCİ PANELİ</a>
          <a href="#">BİZ KİMİZ?</a>
          <a href="#">AÇIK POZİSYONLAR</a> */}
          <Link href="/yonetici-paneli">YÖNETİCİ PANELİ</Link>
          <Link href="#">BİZ KİMİZ?</Link>
          <Link href="#">AÇIK POZİSYONLAR</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
