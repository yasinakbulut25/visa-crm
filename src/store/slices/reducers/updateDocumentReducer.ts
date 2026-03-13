import type { IApplicationState, Document } from "@/types/application";

export type UpdateDocumentPayload = {
  docId: string;
  data: Partial<Omit<Document, "id">>;
};

export const updateDocumentReducer = (
  state: IApplicationState,
  payload: UpdateDocumentPayload,
) => {
  const doc = state.documents.find((d) => d.id === payload.docId);

  if (doc) {
    Object.assign(doc, payload.data);
  }
};
