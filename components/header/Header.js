import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from "next/navigation";

const Header = ({ scroll }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        {scroll ? (
          <AnchorLink href="#home" offset="1000">
            <Image
              src="/logos/Logo-Expanded.svg"
              alt="logo"
              width={210}
              height={55}
            />
          </AnchorLink>
        ) : (
          <Link href="/">
            <Image
              src="/logos/Logo-Expanded.svg"
              alt="logo"
              width={210}
              height={55}
            />
          </Link>
        )}
        <div className={styles.headerLinks}>
          {/* <a href="#">YÖNETİCİ PANELİ</a>
          <a href="#">BİZ KİMİZ?</a>
          <a href="#">AÇIK POZİSYONLAR</a> */}
          <Link href="/yonetici-paneli">YÖNETİCİ PANELİ</Link>
          <AnchorLink href="#biz-kimiz">BİZ KİMİZ?</AnchorLink>
          <AnchorLink href="#acik-pozisyonlar">AÇIK POZİSYONLAR</AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
