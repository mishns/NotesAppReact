import React from "react";
import { FormField } from "../FormField";
import { Button } from "../Button";
import styles from "./NoteForm.css";
import { useMutation } from "@tanstack/react-query";
import { createNote, NewNote, newNoteSchema } from "@api/Note";
import { queryClient } from "@api/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const NoteForm = () => {
  const noteMutation = useMutation(
    {
      mutationFn: ({ title, text }: NewNote) => createNote(title, text),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
    },
    queryClient,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewNote>({
    resolver: zodResolver(newNoteSchema),
  });

  return (
    <form
      className={styles.noteForm}
      onSubmit={handleSubmit(({ title, text }) =>
        noteMutation.mutate({ title, text }),
      )}
    >
      <FormField label="Заголовок" errorMessage={errors.title?.message}>
        <input type="text" {...register("title")} />
      </FormField>
      <FormField label="Текст" errorMessage={errors.text?.message}>
        <textarea {...register("text")} />
      </FormField>
      <Button>Сохранить</Button>
      {noteMutation.error && <span>{noteMutation.error.message}</span>}
    </form>
  );
};
