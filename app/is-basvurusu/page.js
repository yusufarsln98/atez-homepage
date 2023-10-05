"use client";

import Link from "next/link";
import styles from "./JobApplication.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header/Header";
import AnchorLink from "react-anchor-link-smooth-scroll";

const universities = [
  "Kadir Has Üniversitesi",
  "Bağcılar Üniversitesi",
  "Esenler Üniversitesi",
  "Hogwarts Üniversitesi",
];

const departments = [
  "Görsel İletişim Tasarımı",
  "Adamotu Yetiştiriciliği",
  "Drift ve Yanlama Meslek Yüksek Okulu",
  "Büyücülük ve Cadılık Meslek Yüksek Okulu",
];

const Input = ({
  label,
  type,
  button,
  placeholder,
  handleChange,
  handleClick,
  anchor,
  offset,
  value,
  readOnly,
  onClick,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label}>{label}</label>
      <div className={`${styles.inputForm}`}>
        <input
          placeholder={placeholder}
          type={type}
          id={label}
          onChange={handleChange}
          value={value}
          readOnly={readOnly}
          onClick={onClick}
        />
        {anchor ? (
          <>
            <AnchorLink
              id="anchor"
              href={anchor}
              offset={offset ? offset : 200}
            >
              <button
                type="submit"
                onClick={() => {
                  handleClick();
                }}
              >
                {button}
              </button>
            </AnchorLink>
          </>
        ) : (
          <>
            <button
              type="submit"
              onClick={() => {
                handleClick();
              }}
            >
              {button}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default function Page() {
  const searchParams = useSearchParams();
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [showUniversities, setShowUniversities] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [application, setApplication] = useState({
    // position: "",
    // tckn: "",
    // name: "",
    // email: "",
    // birthDate: "",
    // university: "",
    // department: "",
    // cvlink: "",
    // linkedin: "",
  });
  const [e, setE] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setE(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    if (files.length > 0) {
      setApplication({ ...application, cvlink: files[0].name });
    }
  };

  useEffect(() => {
    setProgress((Object.keys(application).length / 8) * 100);
  }, [application]);

  useEffect(() => {
    if (progress === 100) {
      alert(`
      Pozisyon: ${application.position}
      TCKN: ${application.tckn}
      Ad Soyad: ${application.name}
      E-Posta: ${application.email}
      Doğum Tarihi: ${application.birthDate}
      Üniversite: ${application.university}
      Bölüm: ${application.department}
      CV: ${application.cvlink}
      LinkedIn: ${application.linkedin}

      `);
    }
  }, [progress]);

  return (
    <div className={styles.page}>
      <Header scroll={false} hideLinks={true} />
      <div className={styles.dummy}>
        <Image
          src="/dummies/MessageSent2x.png"
          alt="A guy sending messages with computer"
          width={486 * 0.5}
          height={878 * 0.5}
        />
      </div>
      <div className={styles.progress}>
        <div
          className={styles.progressCircle}
          style={{
            // left
            marginLeft: `calc(${progress}% - 28px)`,
            backgroundColor: `${
              progress === 100 ? "var(--green)" : "var(--blue)"
            }`,
          }}
        ></div>
        <div
          className={styles.progressBar}
          style={{
            "--progress": `${progress / 100}`,
            backgroundColor: `${
              progress === 100 ? "var(--green)" : "var(--blue)"
            }`,
          }}
        ></div>
        <div className={styles.progressBarContainer}></div>
      </div>
      <div id="tckn" className={styles.window}>
        <div className={styles.windowContent}>
          <div className={styles.backContainer}>
            <Link href="/#acik-pozisyonlar">
              <button>
                <Image
                  src="/icons/Right.svg"
                  alt="left"
                  width={20}
                  height={20}
                  style={{
                    transform: "rotate(180deg)",
                  }}
                />
              </button>
            </Link>
            <h2>Açık Pozisyonlar</h2>
          </div>
          <div className={styles.formContaier}>
            <p>
              Lorem ipsum dolor sit amet. consectetur adipisicing elit. sed do
              eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
            </p>
            <Input
              label="TCKN"
              type="number"
              button="START"
              placeholder="Lütfen TCKN'nizi giriniz."
              handleChange={handleChange}
              handleClick={() => {
                setApplication({ ...application, tckn: e });
                setApplication({
                  ...application,
                  position: searchParams.get("position"),
                });
                setE("");
              }}
              anchor={"#name"}
            />
          </div>
        </div>
      </div>
      <div id="name" className={styles.window}>
        <div className={styles.windowContent}>
          <Input
            label="AD SOYAD"
            type="text"
            button="ENTER"
            placeholder="Lütfen adınızı giriniz."
            handleChange={handleChange}
            handleClick={() => {
              setApplication({ ...application, name: e });
              // clear
              setE("");
            }}
            anchor={"#email"}
          />
        </div>
      </div>
      <div id="email" className={styles.window}>
        <div className={styles.windowContent}>
          <Input
            label="E-Posta"
            type="email"
            button="ENTER"
            placeholder="Lütfen e-postanızı giriniz."
            handleChange={handleChange}
            handleClick={() => {
              setApplication({ ...application, email: e });
              // clear
              setE("");
            }}
            anchor={"#birth-date"}
          />
        </div>
      </div>
      <div id="birth-date" className={styles.window}>
        <div className={styles.windowContent}>
          <Input
            label="DOĞUM TARİHİ"
            type="date"
            button="ENTER"
            placeholder="Lütfen doğum tarihini giriniz."
            handleChange={handleChange}
            handleClick={() => {
              setApplication({ ...application, birthDate: e });
              // clear
              setE("");
            }}
            anchor={"#university"}
          />
        </div>
      </div>
      <div id="university" className={styles.window}>
        <div className={styles.windowContent}>
          <div className={styles.dropdown}>
            <Input
              label="ÜNİVERSİTE"
              type="text"
              button="ENTER"
              placeholder="Üniversite listesi için tıklayınız."
              handleChange={handleChange}
              handleClick={() => {
                setApplication({ ...application, university: university });
              }}
              anchor={"#department"}
              readOnly={true}
              value={university}
              onClick={() => {
                setShowUniversities(true);
              }}
            />
            <div
              class={`${styles.dropdownContent} 
              ${showUniversities && styles.dropdownContentShow}`}
            >
              {/* list of universities */}
              {universities.map((university, index) => (
                <ul
                  key={index}
                  onClick={() => {
                    setUniversity(university);
                    setShowUniversities(false);
                  }}
                  className={styles.dropdownItem}
                >
                  {university}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="department" className={styles.window}>
        <div className={styles.windowContent}>
          <div className={styles.dropdown}>
            <Input
              label="BÖLÜM"
              type="text"
              button="ENTER"
              placeholder="Bölüm listesi için tıklayınız."
              handleChange={handleChange}
              handleClick={() => {
                setApplication({ ...application, department: department });
              }}
              anchor={"#cv-linkedin"}
              readOnly={true}
              value={department}
              onClick={() => {
                setShowDepartments(true);
              }}
            />
            <div
              class={`${styles.dropdownContent} 
              ${showDepartments && styles.dropdownContentShow}`}
            >
              {departments.map((department, index) => (
                <ul
                  key={index}
                  onClick={() => {
                    setDepartment(department);
                    setShowDepartments(false);
                  }}
                  className={styles.dropdownItem}
                >
                  {department}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="cv-linkedin" className={styles.window}>
        <div className={styles.windowContent}>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
          </div>
          <div className={styles.fileInput}>
            <label>CV</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className={styles.fileInputField}
              onClick={handleFileChange}
            />
          </div>
          <Input
            label="LINKEDIN"
            type="text"
            button="ENTER"
            placeholder="Lütfen LinkedIn adresinizi giriniz."
            handleChange={handleChange}
            handleClick={() => {
              setApplication({ ...application, linkedin: e });
              // clear
              setE("");
            }}
            anchor="#done"
            offset="0"
          />
        </div>
      </div>
      <div id="done" className={styles.window}>
        <div className={styles.windowContent}>
          {progress === 100 ? (
            <>
              <div className={styles.done}>
                <Image
                  src={"/icons/Check.svg"}
                  alt="Done"
                  width={64}
                  height={64}
                />
              </div>
              <div className={styles.doneText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
                eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </div>
              <Link href="/">
                <button className={styles.doneButton}>ANASAYFA</button>
              </Link>
            </>
          ) : (
            <h1
              style={{
                textAlign: "center",
                marginTop: "200px",
                color: "var(--text-blue)",
              }}
            >
              Lütfen Formu Doldurunuz
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
