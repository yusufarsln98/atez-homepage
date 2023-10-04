"use client";

import Link from "next/link";
import styles from "./JobApplication.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header/Header";

const Input = ({
  label,
  type,
  button,
  placeholder,
  handleChange,
  handleClick,
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
        />
        <button
          type="submit"
          onClick={() => {
            handleClick();
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  const searchParams = useSearchParams();
  const [application, setApplication] = useState({
    position: "",
    tckn: "",
    name: "",
    email: "",
    birthDate: "",
    university: "",
    department: "",
    linkedin: "",
  });
  const [e, setE] = useState("");
  const handleChange = (e) => {
    setE(e.target.value);
  };

  console.log(application);

  useEffect(() => {
    setApplication({
      positon: searchParams.get("position"),
    });
  }, [searchParams]);

  return (
    <div className={styles.page}>
      <Header scroll={false} />
      <div className={styles.window}>
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
                // clear
                setE("");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
