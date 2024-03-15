import React from "react";
import { FormField } from "../FormField";
import { Button } from "../Button";
import styles from "./NoteForm.css";

export const NoteForm = () => {
  return (
    <form className={styles.noteForm}>
      <FormField label="Заголовок">
        <input type="text" />
      </FormField>
      <FormField label="Текст">
        <textarea />
      </FormField>
      <Button>Сохранить</Button>
    </form>
  );
};
