import type { IApplicationState, Note } from "@/types/application";

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
};
