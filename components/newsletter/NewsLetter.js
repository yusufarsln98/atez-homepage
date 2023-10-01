import Image from "next/image";
import styles from "./NewsLetter.module.scss";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NewsLetter = () => {
  const [input, setInput] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleClick = () => {
    if (validateEmail(input)) {
      alert(`${input} adresine abone olundu!`);
      setInput("");
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
      alert("Lütfen geçerli bir e-posta adresi giriniz!");
    }
  };

  // is email valid
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    <div className={styles.newsLetter}>
      <div className={styles.content}>
        {/* insert logo */}
        <Image src="/logos/Logo.svg" alt="Logo" width={150} height={150} />
        <div className={styles.form}>
          <div className={styles.textContainer}>
            <h1>E-Posta ile abone olun</h1>
            <p>
              Atez future portalına e-posta ile abone olun, <br />
              yayınlanan ilanlardan ilk sizin haberiniz olsun!
            </p>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="e-posta"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className={`${styles.input} ${
                !isEmailValid && styles.inputInvalid
              }`}
            />
            <button
              // onclick alert
              onClick={handleClick}
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
      </div>
      <div className={styles.upButtonContainer}>
        <AnchorLink href="#home" offset="1000">
          <button className={styles.upButton}>
            <Image src="/icons/Up.svg" alt="up" width={36} height={36} />
          </button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default NewsLetter;
