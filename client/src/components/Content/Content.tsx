import React, { FC } from "react";
import styles from "./content.css";
import { fetchMe } from "@api/User";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@api/queryClient";
import { AuthForm } from "@components/AuthForm";
import { Loader } from "@components/Loader";
import { FetchNoteListView } from "@components/NotesListView/FetchNoteListView";

export const Content: FC = () => {
  const meQuery = useQuery(
    {
      queryFn: fetchMe,
      queryKey: ["users", "me"],
    },
    queryClient,
  );

  switch (meQuery.status) {
    case "pending":
      return <Loader />;
    case "error":
      return <AuthForm />;
    case "success":
      return <FetchNoteListView />;
  }
};
