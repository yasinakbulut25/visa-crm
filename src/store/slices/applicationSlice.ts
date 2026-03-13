import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockData } from "@/data/mock";
import type { IApplicationState } from "@/types/application";
import { moveToNextStageReducer } from "./reducers/moveToNextStageReducer";
import {
  updateDocumentReducer,
  type UpdateDocumentPayload,
} from "./reducers/updateDocumentReducer";

const initialState: IApplicationState = structuredClone(
  mockData,
) as IApplicationState;

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    moveToNextStage: (state) => moveToNextStageReducer(state),

    updateDocument: (state, action: PayloadAction<UpdateDocumentPayload>) =>
      updateDocumentReducer(state, action.payload),
  },
});

export const { moveToNextStage, updateDocument } = applicationSlice.actions;
export default applicationSlice.reducer;
