import React from "react";
import styles from "./UserView.css";

export const UserView = () => {
  const username = "Firstname Lastname";

  return (
    <div className={styles.userView}>
      <div className={styles.userView__logo}>
        {username.slice(0, 1).toUpperCase()}
      </div>
      <span className={styles.userView__name}>{username}</span>
    </div>
  );
};
