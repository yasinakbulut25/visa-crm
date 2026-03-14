import type { IApplicationState, Note } from "@/types/application";
import { showToast } from "@/utils";

export interface InternalNotePayload {
  author: string;
  content: string;
}

export const addInternalNoteReducer = (
  state: IApplicationState,
  payload: InternalNotePayload,
) => {
  const newNote: Note = {
    id: `note_${Date.now()}`,
    author: payload.author,
    content: payload.content,
    createdAt: new Date().toISOString(),
  };
  state.internalNotes.unshift(newNote);
  showToast({ title: "Internal note added succesfully", color: "success" });
};
