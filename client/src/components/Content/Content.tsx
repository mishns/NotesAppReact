import React, { FC } from "react";
import styles from "./content.css";
import { fetchMe } from "@api/User";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { queryClient } from "@api/queryClient";
import { AuthForm } from "@components/AuthForm";
import { Loader } from "@components/Loader";
import { FetchNoteListView } from "@components/NotesListView/FetchNoteListView";

function renderSwitch(query: UseQueryResult) {
  switch (query.status) {
    case "pending":
      return <Loader />;
    case "error": {
      console.log("CONTENT error");
      console.log(query.error);

      return <AuthForm />;
    }
    case "success":
      return <FetchNoteListView />;
  }
}

export const Content: FC = () => {
  const meQuery = useQuery(
    {
      queryFn: fetchMe,
      queryKey: ["users", "me"],
    },
    queryClient,
  );

  return <div className={styles.content}>{renderSwitch(meQuery)}</div>;
};
