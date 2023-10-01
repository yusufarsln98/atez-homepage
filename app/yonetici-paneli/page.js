import Link from "next/link";
import styles from "./AdminPanel.module.scss";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Yönetici Paneli</h1>
      <p>Bu sayfa implement edilmemistir.</p>
      <Link href="/">Anasayfa&apos;ya Dön</Link>
    </div>
  );
}
