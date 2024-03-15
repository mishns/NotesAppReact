import { default as React, FC, ReactNode } from "react";
import styles from "./Layout.css";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
