import React, { FC, useState } from "react";
import { HeaderNav } from "./headerNav";

import styles from "./header.module.css";
import { TLogo, TMainMenu } from "../../api/types";

import { NEXT_PUBLIC_MEDIA_URL } from "../../api/constants";

type THeaderData = {
  logos: Array<TLogo>;
  main_menu: Array<TMainMenu>;
};

export const HeaderContent: FC<THeaderData> = ({ logos, main_menu }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
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
          desktop={true}
          open={menuOpen}
          main_menu={main_menu}
          onClose={toggleMobileMenu}
        />
      </div>
    </header>
  );
};
