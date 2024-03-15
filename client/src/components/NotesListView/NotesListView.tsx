import React from "react";
import styles from "./NotesListView.css";
import { NoteView } from "../NoteView";

export const NotesListView = () => {
  return (
    <ul className={styles.noteListView}>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
      <li>
        <NoteView />
      </li>
    </ul>
  );
};
