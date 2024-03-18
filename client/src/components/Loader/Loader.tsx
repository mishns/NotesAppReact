import React from "react";
import styles from "./Loader.css";

export const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loaderItem}></div>
    <div className={styles.loaderItem}></div>
    <div className={styles.loaderItem}></div>
  </div>
);
