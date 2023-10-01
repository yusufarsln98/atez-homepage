import Link from "next/link";
import styles from "./JobApplication.module.scss";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Job Application</h1>
      <p>Bu sayfa implement edilmemistir.</p>
      <Link href="/">Anasayfa&apos;ya Dön</Link>
    </div>
  );
}
