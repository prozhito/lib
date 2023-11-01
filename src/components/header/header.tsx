import React, { FC, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { HeaderNav } from "./headerNav";

import styles from "./header.module.css";
import { TLogo, TMainMenu } from "../../api/types";

import { NEXT_PUBLIC_MEDIA_URL } from "../../api/constants";

const openImg = "/images/menu-mobil-open.svg";
const closeImg = "/images/menu-mobil-close.svg";

type THeaderData = {
  logos: Array<TLogo>;
  main_menu: Array<TMainMenu>;
};

export const HeaderContent: FC<THeaderData> = ({ logos, main_menu }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const desktop = useMediaQuery("(min-width: 768px)");

  const btnState = menuOpen
    ? { img: closeImg, alt: "Закрыть" }
    : { img: openImg, alt: "Открыть" };

  const toggleMobileMenu = (): void => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`${
        !desktop && menuOpen
          ? `${styles.header} ${styles.header_theme_dark}`
          : styles.header
      } ${styles.header_theme_white}`}
    >
      <div className={`${styles.header__container} ${styles.menu}`}>
        <div className={styles.header__links}>
          {logos.map((logo, index) => {
            if (index === 0)
              return (
                <a href="/" className={styles.link} key={index}>
                  <img
                    width={300}
                    height={200}
                    src={NEXT_PUBLIC_MEDIA_URL + logo.icon}
                    alt={logo.alt_text ?? "Logo"}
                    className={styles.header__logo}
                  />
                </a>
              );
            else
              return (
                <a
                  href="https://eusp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  key={index}
                >
                  <img
                    src={NEXT_PUBLIC_MEDIA_URL + logo.icon}
                    alt={logo.alt_text ?? "Logo"}
                    className={styles.header__eusp}
                  />
                </a>
              );
          })}
        </div>
        <HeaderNav
          desktop={desktop}
          open={menuOpen}
          main_menu={main_menu}
          onClose={toggleMobileMenu}
        />
        {!desktop && (
          <button
            type="button"
            className={styles.menu__button}
            onClick={toggleMobileMenu}
          >
            <img alt={btnState.alt} src={btnState.img} />
          </button>
        )}
      </div>
    </header>
  );
};
