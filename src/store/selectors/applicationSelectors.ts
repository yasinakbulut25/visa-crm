import { type RootState } from "@/store";

export const selectApplication = (state: RootState) =>
  state.application.application;

export const selectCurrentStage = (state: RootState) =>
  state.application.application.currentStage;

export const selectStages = (state: RootState) =>
  state.application.application.stages;

export const selectTraveler = (state: RootState) => state.application.traveler;

export const selectDocuments = (state: RootState) =>
  state.application.documents;

export const selectInternalNotes = (state: RootState) =>
  state.application.internalNotes;

export const selectCommunicationLog = (state: RootState) =>
  state.application.communicationLog;
