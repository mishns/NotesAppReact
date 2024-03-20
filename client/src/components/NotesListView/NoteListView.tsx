import React from "react";
import styles from "./NoteListView.css";
import { NoteView } from "../NoteView";
import { NoteListResponse } from "@api/Note";
import { Button } from "@components/Button";
import { logout } from "@api/User";

interface NoteListViewProps {
  noteListResponse: NoteListResponse;
}

export const NoteListView = ({ noteListResponse }: NoteListViewProps) => {
  return (
    <>
      <ul className={styles.noteListView}>
        {noteListResponse.list.map(noteData => (
          <li key={noteData.id}>
            <NoteView noteData={noteData} />
          </li>
        ))}
      </ul>
      <Button kind="secondary" handleClick={logout}>
        Выйти
      </Button>
    </>
  );
};
