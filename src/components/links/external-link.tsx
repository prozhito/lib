import React, { FC, ReactNode } from "react";

import styles from "./external-link.module.css";

type TExternalLinkProps = {
  url: string | null;
  children: ReactNode;
  className?: string;
  target_blank: boolean;
};

export const ExternalLink: FC<TExternalLinkProps> = ({
  url,
  children,
  className = "",
  target_blank = true,
}) => {
  if (url === null) {
    return null;
  }

  return url.startsWith("http") ? (
    <a
      href={url}
      className={`${styles.link} ${className}`}
      target={target_blank ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <a href={`/page/${url}`} className={`${styles.link} ${className}`}>
      {children}
    </a>
  );
};
