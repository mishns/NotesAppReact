import React from "react";
import styles from "./NoteView.css";

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const NoteView = () => {
  return (
    <div className={styles.noteView}>
      <div className={styles.noteView__head}>
        <p className={styles.noteView__datetime}>{formatDate(Date.now())}</p>
        <p className={styles.noteView__title}>Заголовок</p>
      </div>

      <p className={styles.noteView__text}>
        {`Какой-то очень большой текст`.repeat(10)}
      </p>
    </div>
  );
};
