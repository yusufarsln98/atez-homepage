import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./WhoWeAre.module.scss";
import Image from "next/image";
// images
const images = [
  "/biz-kimiz/Hyper@2x.png",
  "/biz-kimiz/Indy@2x.png",
  "/biz-kimiz/Html@2x.png",
  "/biz-kimiz/NodeJS@2x.png",
  "/biz-kimiz/React@2x.png",
  "/biz-kimiz/SQL@2x.png",
  "/biz-kimiz/Ansible@2x.png",
  "/biz-kimiz/GIT@2x.png",
  "/biz-kimiz/Amazon@2x.png",
  "/biz-kimiz/Docker@2x.png",
  "/biz-kimiz/Kubernetes@2x.png",
  "/biz-kimiz/Jenkins@2x.png",
  "/biz-kimiz/Kafka@2x.png",
  "/biz-kimiz/Redis@2x.png",
  "/biz-kimiz/Postman@2x.png",
  "/biz-kimiz/CentOS@2x.png",
];

const WhoWeAre = () => {
  return (
    <div className={styles.whoWeAre} id="biz-kimiz">
      <div className={styles.whoWeAreTextContainer}>
        <div className={styles.title}>
          <h1>
            <span>BİZ KİMİ</span>
            Z?
          </h1>
        </div>
        <div className={styles.description}>
          <p>
            ATEZ 2017 Yılında Türkiye&apos;deki en büyük gümrük müşavirliği
            firmalanndan biri olan Güler & Dinamik Gümrük Müşavirliği
            firmasndan, uluslararası ticaret ile ilgili alanlarda faaliyet
            gösteren tüm Özel sektör ile kamu kurum ve kuruluşlarının
            çalışmalarının dijitalleştirilebilmesi için gerekli yazılımların
            geliştirilmesi, mevcut yazılımların bakım ve destek faaliyetlerinin
            sürdürülmesi amacı ile kurulmuştur. <br></br>
            <br></br>
            2019 Yılı Mayıs ayında Sanayi ve Teknoloji Bakanlığı nezdinde Blok
            zincir projeleri (Alanında dünyada tek ve Türkiye&apos;nin de ilk
            projesi olan Blok zincir Ticaret Platformu gibi) ile onaylı AR-GE
            merkezi olma hakkını elde eden ATEZ Yazılım Teknolojileri A.Ş.,
            global ölçekli çözümler üretme hedefi ile çalışmalarını
            sürdürmektedir.
          </p>
        </div>
      </div>
      <div className={styles.whoWeAreImageContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageCard}>
            <Image
              src={image}
              alt="biz-kimiz"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className={styles.whoWeAreApplicationsContainer}>
        <div className={styles.whoWeAreApplications}>
          <p>BAŞVURULAR</p>
          <AnchorLink href="#acik-pozisyonlar">
            <button>
              <Image
                src={"/icons/Right.svg"}
                alt="right"
                width={20}
                height={20}
              />
            </button>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
