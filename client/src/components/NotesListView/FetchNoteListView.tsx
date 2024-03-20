import { fetchNoteList } from "@api/Note";
import { queryClient } from "@api/queryClient";
import { Loader } from "@components/Loader";
import { NoteListView } from "@components/NotesListView/NoteListView";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FC } from "react";

export const FetchNoteListView: FC = () => {
  const noteListQuery = useQuery(
    {
      queryFn: fetchNoteList,
      queryKey: ["posts"],
    },
    queryClient,
  );

  switch (noteListQuery.status) {
    case "pending":
      return <Loader />;
    case "error":
      return <span>{noteListQuery.error.message}</span>;
    case "success":
      return <NoteListView noteListResponse={noteListQuery.data} />;
  }
};
