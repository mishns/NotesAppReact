import React from "react";
import { Button } from "../Button";
import styles from "./LogoutButton.css";

export const LogoutButton = () => {
  return (
    <div className={styles.logoutButton}>
      <Button kind="secondary">Выйти</Button>
    </div>
  );
};
