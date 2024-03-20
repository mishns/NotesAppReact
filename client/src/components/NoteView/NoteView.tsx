import React from "react";
import styles from "./NoteView.css";
import { NoteData } from "@api/Note";

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

interface NoteViewProps {
  noteData: NoteData;
}

export const NoteView = ({ noteData }: NoteViewProps) => {
  return (
    <div className={styles.noteView}>
      <div className={styles.noteView__head}>
        <p className={styles.noteView__datetime}>
          {formatDate(noteData.createdAt)}
        </p>
        <p className={styles.noteView__title}>{noteData.title}</p>
      </div>

      <p className={styles.noteView__text}>{noteData.text}</p>
    </div>
  );
};
